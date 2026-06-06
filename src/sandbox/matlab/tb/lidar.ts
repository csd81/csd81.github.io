// Lidar Toolbox — 5 core functions:
// pointCloud (constructor), pcdownsample (voxel grid),
// pcregistericp (ICP registration), pcsegdist (Euclidean clustering),
// pcfitplane (RANSAC plane fitting).
import {
  type Value, scalar, rowVec, colVec, toArray, asScalar, toMat as m, isMat,
  MatError, mat, zeros, makeObject, str, bool,
} from '../values';
import type { ToolboxModule } from './types';

// ── Point cloud pack / unpack ──────────────────────────────────────────────────────────
interface PC { xyz: Float64Array; n: number } // xyz is [n×3] row-major

function unpackPC(v: Value): PC {
  if ((v as any).kind === 'object') {
    const props = (v as any).props as Map<string, Value>;
    const loc = m(props.get('Location')!);
    return { xyz: Float64Array.from(loc.data), n: loc.rows };
  }
  const mv = m(v);
  if (mv.cols < 3) throw new MatError('pointCloud: Location must have at least 3 columns');
  return { xyz: Float64Array.from(mv.data), n: mv.rows };
}

function packPC(xyz: Float64Array, n: number): Value {
  const props = new Map<string, Value>();
  props.set('Location', mat(n, 3, xyz));
  props.set('Count', scalar(n));
  // Bounding limits
  let xMin=Infinity,xMax=-Infinity,yMin=Infinity,yMax=-Infinity,zMin=Infinity,zMax=-Infinity;
  for (let i=0;i<n;i++){
    const x=xyz[i*3],y=xyz[i*3+1],z=xyz[i*3+2];
    if(x<xMin)xMin=x;if(x>xMax)xMax=x;
    if(y<yMin)yMin=y;if(y>yMax)yMax=y;
    if(z<zMin)zMin=z;if(z>zMax)zMax=z;
  }
  props.set('XLimits', rowVec([xMin,xMax]));
  props.set('YLimits', rowVec([yMin,yMax]));
  props.set('ZLimits', rowVec([zMin,zMax]));
  return makeObject('pointCloud', props);
}

// ── pointCloud constructor ─────────────────────────────────────────────────────────────
// ptCloud = pointCloud(xyzPoints)  — [N×3] or [N×4] matrix
async function pointCloud(args: Value[]): Promise<Value[]> {
  if (args.length < 1) throw new MatError('pointCloud: requires xyzPoints [N×3]');
  const mv = m(args[0]);
  if (mv.cols < 3) throw new MatError('pointCloud: xyzPoints must have at least 3 columns (X Y Z)');
  const n = mv.rows;
  const xyz = new Float64Array(n * 3);
  for (let i = 0; i < n; i++) {
    xyz[i*3+0] = mv.data[i*mv.cols+0];
    xyz[i*3+1] = mv.data[i*mv.cols+1];
    xyz[i*3+2] = mv.data[i*mv.cols+2];
  }
  return [packPC(xyz, n)];
}

// ── pcdownsample — voxel grid downsampling ─────────────────────────────────────────────
// ptCloudOut = pcdownsample(ptCloudIn, gridStep)
// One representative point per voxel (centroid of all points in that voxel).
async function pcdownsample(args: Value[]): Promise<Value[]> {
  if (args.length < 2) throw new MatError('pcdownsample: requires ptCloud and gridStep');
  const { xyz, n } = unpackPC(args[0]);
  const step = asScalar(m(args[1]));
  if (step <= 0) throw new MatError('pcdownsample: gridStep must be positive');

  // Bin each point into a voxel key
  const voxels = new Map<string, { sx: number; sy: number; sz: number; cnt: number }>();
  for (let i = 0; i < n; i++) {
    const vx = Math.floor(xyz[i*3+0] / step);
    const vy = Math.floor(xyz[i*3+1] / step);
    const vz = Math.floor(xyz[i*3+2] / step);
    const key = `${vx},${vy},${vz}`;
    const existing = voxels.get(key);
    if (existing) {
      existing.sx += xyz[i*3+0]; existing.sy += xyz[i*3+1]; existing.sz += xyz[i*3+2];
      existing.cnt++;
    } else {
      voxels.set(key, { sx: xyz[i*3+0], sy: xyz[i*3+1], sz: xyz[i*3+2], cnt: 1 });
    }
  }

  const outN = voxels.size;
  const outXyz = new Float64Array(outN * 3);
  let idx = 0;
  for (const { sx, sy, sz, cnt } of voxels.values()) {
    outXyz[idx*3+0] = sx/cnt; outXyz[idx*3+1] = sy/cnt; outXyz[idx*3+2] = sz/cnt; idx++;
  }
  return [packPC(outXyz, outN)];
}

// ── Nearest-neighbour helper (brute-force; grid-accelerated for large clouds) ──────────
// Returns for each point in A the index of its nearest neighbour in B (0-based).
function nearestNeighbors(A: Float64Array, nA: number, B: Float64Array, nB: number): { idx: Int32Array; dist2: Float64Array } {
  const idx = new Int32Array(nA);
  const dist2 = new Float64Array(nA);

  // Build a voxel grid over B for fast lookup when nB is large
  if (nB > 500) {
    // Estimate voxel size from bounding box
    let xMin=Infinity,xMax=-Infinity,yMin=Infinity,yMax=-Infinity,zMin=Infinity,zMax=-Infinity;
    for (let i=0;i<nB;i++){
      const x=B[i*3],y=B[i*3+1],z=B[i*3+2];
      if(x<xMin)xMin=x;if(x>xMax)xMax=x;if(y<yMin)yMin=y;if(y>yMax)yMax=y;if(z<zMin)zMin=z;if(z>zMax)zMax=z;
    }
    const range = Math.max(xMax-xMin, yMax-yMin, zMax-zMin, 1e-9);
    const voxStep = range / Math.cbrt(nB);
    const grid = new Map<string, number[]>();
    for (let i=0;i<nB;i++){
      const vx=Math.floor(B[i*3]/voxStep), vy=Math.floor(B[i*3+1]/voxStep), vz=Math.floor(B[i*3+2]/voxStep);
      const key=`${vx},${vy},${vz}`;
      const cell = grid.get(key); if(cell) cell.push(i); else grid.set(key, [i]);
    }
    for (let a=0;a<nA;a++){
      const ax=A[a*3],ay=A[a*3+1],az=A[a*3+2];
      const cvx=Math.floor(ax/voxStep), cvy=Math.floor(ay/voxStep), cvz=Math.floor(az/voxStep);
      let bestD=Infinity, bestI=0;
      // Search 3×3×3 neighbourhood
      for (let dx=-1;dx<=1;dx++) for (let dy=-1;dy<=1;dy++) for (let dz=-1;dz<=1;dz++){
        const cell = grid.get(`${cvx+dx},${cvy+dy},${cvz+dz}`);
        if (!cell) continue;
        for (const bi of cell){
          const d=(ax-B[bi*3])**2+(ay-B[bi*3+1])**2+(az-B[bi*3+2])**2;
          if(d<bestD){bestD=d;bestI=bi;}
        }
      }
      // Fallback: brute-force if grid miss
      if (bestD === Infinity) for (let b=0;b<nB;b++){
        const d=(ax-B[b*3])**2+(ay-B[b*3+1])**2+(az-B[b*3+2])**2;
        if(d<bestD){bestD=d;bestI=b;}
      }
      idx[a]=bestI; dist2[a]=bestD;
    }
  } else {
    // Brute-force for small clouds
    for (let a=0;a<nA;a++){
      const ax=A[a*3],ay=A[a*3+1],az=A[a*3+2];
      let bestD=Infinity,bestI=0;
      for (let b=0;b<nB;b++){
        const d=(ax-B[b*3])**2+(ay-B[b*3+1])**2+(az-B[b*3+2])**2;
        if(d<bestD){bestD=d;bestI=b;}
      }
      idx[a]=bestI; dist2[a]=bestD;
    }
  }
  return { idx, dist2 };
}

// ── Optimal rigid transform from point correspondences (SVD method) ───────────────────
// Given matched pairs (src[i] → dst[idx[i]]), solve for R, t minimising sum ||R*src_i + t - dst_i||^2
function optimalRigid(src: Float64Array, dst: Float64Array, matchIdx: Int32Array, n: number): { R: number[][]; t: number[] } {
  // Centroids
  let sx=0,sy=0,sz=0,dx=0,dy=0,dz=0;
  for (let i=0;i<n;i++){
    sx+=src[i*3];sy+=src[i*3+1];sz+=src[i*3+2];
    const j=matchIdx[i]; dx+=dst[j*3];dy+=dst[j*3+1];dz+=dst[j*3+2];
  }
  sx/=n;sy/=n;sz/=n; dx/=n;dy/=n;dz/=n;

  // Cross-covariance H = sum (src_i - sc)' * (dst_i - dc)
  const H = [[0,0,0],[0,0,0],[0,0,0]];
  for (let i=0;i<n;i++){
    const j=matchIdx[i];
    const ps=[src[i*3]-sx,src[i*3+1]-sy,src[i*3+2]-sz];
    const pd=[dst[j*3]-dx,dst[j*3+1]-dy,dst[j*3+2]-dz];
    for (let r=0;r<3;r++) for (let c=0;c<3;c++) H[r][c]+=ps[r]*pd[c];
  }

  // SVD of H (3×3) via Jacobi
  let U=[[1,0,0],[0,1,0],[0,0,1]];
  let V=[[1,0,0],[0,1,0],[0,0,1]];
  let A=H.map(r=>[...r]);
  // One-sided Jacobi on A'A for V, then U = A*V*S^{-1}
  const AtA=Array.from({length:3},(_,i)=>Array.from({length:3},(_,j)=>{let s=0;for(let k=0;k<3;k++)s+=A[k][i]*A[k][j];return s;}));
  let Vtmp=[[1,0,0],[0,1,0],[0,0,1]];
  for (let sweep=0;sweep<30;sweep++){
    let maxOff=0,p=0,q=1;
    for(let i=0;i<3;i++)for(let j=i+1;j<3;j++)if(Math.abs(AtA[i][j])>maxOff){maxOff=Math.abs(AtA[i][j]);p=i;q=j;}
    if(maxOff<1e-12)break;
    const theta=(AtA[q][q]-AtA[p][p])/(2*AtA[p][q]+1e-30);
    const t2=Math.sign(theta)/(Math.abs(theta)+Math.sqrt(1+theta**2));
    const c2=1/Math.sqrt(1+t2**2), s2=t2*c2;
    const G=[[1,0,0],[0,1,0],[0,0,1]];G[p][p]=c2;G[p][q]=-s2;G[q][p]=s2;G[q][q]=c2;
    const newA=AtA.map(r=>[...r]);
    for(let i=0;i<3;i++)for(let j=0;j<3;j++){let s=0;for(let k=0;k<3;k++)s+=G[k][i]*AtA[k][j];newA[i][j]=s;}
    for(let i=0;i<3;i++)for(let j=0;j<3;j++){let s=0;for(let k=0;k<3;k++)s+=newA[i][k]*G[k][j];AtA[i][j]=s;}
    const nQ=Vtmp.map(r=>[...r]);
    for(let i=0;i<3;i++)for(let j=0;j<3;j++){let s=0;for(let k=0;k<3;k++)s+=Vtmp[i][k]*G[k][j];nQ[i][j]=s;}
    Vtmp=nQ;
  }
  V=Vtmp;
  // S = diag(sqrt(eigenvalues)), U = A*V*S^{-1}
  const sigmas=[Math.sqrt(Math.max(0,AtA[0][0])),Math.sqrt(Math.max(0,AtA[1][1])),Math.sqrt(Math.max(0,AtA[2][2]))];
  U=Array.from({length:3},(_,i)=>Array.from({length:3},(_,j)=>{
    let s=0;for(let k=0;k<3;k++)s+=A[i][k]*V[k][j];return sigmas[j]>1e-10?s/sigmas[j]:0;
  }));

  // R = V * U'
  let R=Array.from({length:3},(_,i)=>Array.from({length:3},(_,j)=>{
    let s=0;for(let k=0;k<3;k++)s+=V[i][k]*U[j][k];return s;
  }));
  // Ensure proper rotation (det = +1)
  const det=R[0][0]*(R[1][1]*R[2][2]-R[1][2]*R[2][1])
           -R[0][1]*(R[1][0]*R[2][2]-R[1][2]*R[2][0])
           +R[0][2]*(R[1][0]*R[2][1]-R[1][1]*R[2][0]);
  if (det < 0) {
    const Vcopy=V.map(r=>[...r]);
    for(let i=0;i<3;i++)Vcopy[i][2]*=-1;
    R=Array.from({length:3},(_,i)=>Array.from({length:3},(_,j)=>{
      let s=0;for(let k=0;k<3;k++)s+=Vcopy[i][k]*U[j][k];return s;
    }));
  }
  const t=[dx-R[0][0]*sx-R[0][1]*sy-R[0][2]*sz,
           dy-R[1][0]*sx-R[1][1]*sy-R[1][2]*sz,
           dz-R[2][0]*sx-R[2][1]*sy-R[2][2]*sz];
  return { R, t };
}

// Apply rigid transform to point cloud
function applyRigid(xyz: Float64Array, n: number, R: number[][], t: number[]): Float64Array<ArrayBuffer> {
  const out = new Float64Array(n * 3);
  for (let i=0;i<n;i++){
    const x=xyz[i*3],y=xyz[i*3+1],z=xyz[i*3+2];
    out[i*3+0]=R[0][0]*x+R[0][1]*y+R[0][2]*z+t[0];
    out[i*3+1]=R[1][0]*x+R[1][1]*y+R[1][2]*z+t[1];
    out[i*3+2]=R[2][0]*x+R[2][1]*y+R[2][2]*z+t[2];
  }
  return out;
}

// ── pcregistericp ─────────────────────────────────────────────────────────────────────
// [tform, ptCloudAligned, rmse] = pcregistericp(moving, fixed)
async function pcregistericp(args: Value[]): Promise<Value[]> {
  if (args.length < 2) throw new MatError('pcregistericp: requires moving and fixed point clouds');
  const mov = unpackPC(args[0]);
  const fix = unpackPC(args[1]);

  // Options
  let maxIter = 20, tolerance = 1e-6, maxDist = Infinity;
  for (let i = 2; i+1 < args.length; i += 2) {
    const key = ((args[i] as any).value ?? '').toLowerCase();
    if (key === 'maxiterations') maxIter = Math.round(asScalar(m(args[i+1])));
    if (key === 'tolerance') tolerance = asScalar(m(args[i+1]));
    if (key === 'maxdistance') maxDist = asScalar(m(args[i+1]));
  }

  let curXyz = Float64Array.from(mov.xyz);
  // Accumulate transform
  let Racc = [[1,0,0],[0,1,0],[0,0,1]];
  let tacc = [0,0,0];
  let prevRmse = Infinity;

  for (let iter = 0; iter < maxIter; iter++) {
    const { idx, dist2 } = nearestNeighbors(curXyz, mov.n, fix.xyz, fix.n);

    // Filter by maxDist and build valid correspondence list
    const validI: number[] = [];
    for (let i=0;i<mov.n;i++) if (dist2[i] <= maxDist*maxDist) validI.push(i);
    if (validI.length < 3) break;

    // Compute RMSE over valid correspondences
    const rmse = Math.sqrt(validI.reduce((s,i)=>s+dist2[i],0)/validI.length);

    // Build compact correspondence arrays for valid pairs
    const srcValid = new Float64Array(validI.length*3);
    const dstFull = fix.xyz;
    const idxValid = new Int32Array(validI.length);
    for (let vi=0;vi<validI.length;vi++){
      const i=validI[vi];
      srcValid[vi*3]=curXyz[i*3]; srcValid[vi*3+1]=curXyz[i*3+1]; srcValid[vi*3+2]=curXyz[i*3+2];
      idxValid[vi]=idx[i];
    }

    const { R, t } = optimalRigid(srcValid, dstFull, idxValid, validI.length);
    curXyz = applyRigid(curXyz, mov.n, R, t);

    // Accumulate: R_acc = R * R_acc, t_acc = R*t_acc + t
    const Rnew=Array.from({length:3},(_,i)=>Array.from({length:3},(_,j)=>{
      let s=0;for(let k=0;k<3;k++)s+=R[i][k]*Racc[k][j];return s;
    }));
    const tnew=Array.from({length:3},(_,i)=>R[i][0]*tacc[0]+R[i][1]*tacc[1]+R[i][2]*tacc[2]+t[i]);
    Racc=Rnew; tacc=tnew;

    if (Math.abs(prevRmse - rmse) < tolerance) break;
    prevRmse = rmse;
  }

  const { idx: finalIdx, dist2: finalDist2 } = nearestNeighbors(curXyz, mov.n, fix.xyz, fix.n);
  const rmse = Math.sqrt(finalDist2.reduce((s,d)=>s+d,0)/mov.n);

  // Pack tform as rigid transform object
  const tformProps = new Map<string, Value>();
  const Rdata = new Float64Array(9);
  for (let i=0;i<3;i++) for (let j=0;j<3;j++) Rdata[i*3+j]=Racc[i][j];
  tformProps.set('Rotation', mat(3, 3, Rdata));
  tformProps.set('Translation', rowVec(tacc));

  return [makeObject('rigidtform3d', tformProps), packPC(curXyz, mov.n), scalar(rmse)];
}

// ── pcsegdist — Euclidean distance clustering ─────────────────────────────────────────
// [labels, numClusters] = pcsegdist(ptCloud, minDist)
// Points within minDist of each other belong to the same cluster.
// Uses BFS with voxel-grid spatial acceleration.
async function pcsegdist(args: Value[]): Promise<Value[]> {
  if (args.length < 2) throw new MatError('pcsegdist: requires ptCloud and minDist');
  const { xyz, n } = unpackPC(args[0]);
  const minDist = asScalar(m(args[1]));
  const minDist2 = minDist * minDist;

  // Build spatial grid for fast range queries
  const grid = new Map<string, number[]>();
  for (let i=0;i<n;i++){
    const vx=Math.floor(xyz[i*3]/minDist), vy=Math.floor(xyz[i*3+1]/minDist), vz=Math.floor(xyz[i*3+2]/minDist);
    const key=`${vx},${vy},${vz}`;
    const cell=grid.get(key); if(cell) cell.push(i); else grid.set(key,[i]);
  }

  const labels = new Int32Array(n); // 0 = unvisited
  let numClusters = 0;

  for (let seed=0;seed<n;seed++){
    if (labels[seed] !== 0) continue;
    numClusters++;
    labels[seed] = numClusters;
    const queue: number[] = [seed];
    let head = 0;
    while (head < queue.length) {
      const cur = queue[head++];
      const cx=xyz[cur*3], cy=xyz[cur*3+1], cz=xyz[cur*3+2];
      const cvx=Math.floor(cx/minDist), cvy=Math.floor(cy/minDist), cvz=Math.floor(cz/minDist);
      // Check 3×3×3 neighbouring voxels
      for (let dx=-1;dx<=1;dx++) for (let dy=-1;dy<=1;dy++) for (let dz=-1;dz<=1;dz++){
        const cell=grid.get(`${cvx+dx},${cvy+dy},${cvz+dz}`);
        if (!cell) continue;
        for (const nb of cell){
          if (labels[nb]!==0) continue;
          const d=(cx-xyz[nb*3])**2+(cy-xyz[nb*3+1])**2+(cz-xyz[nb*3+2])**2;
          if (d<=minDist2){ labels[nb]=numClusters; queue.push(nb); }
        }
      }
    }
  }

  return [colVec(Array.from(labels)), scalar(numClusters)];
}

// ── pcfitplane — RANSAC plane fitting ─────────────────────────────────────────────────
// [model, inlierIndices, outlierIndices] = pcfitplane(ptCloud, maxDistance)
// model: planeModel object with Parameters [a b c d] (ax+by+cz+d=0, unit normal)
async function pcfitplane(args: Value[]): Promise<Value[]> {
  if (args.length < 2) throw new MatError('pcfitplane: requires ptCloud and maxDistance');
  const { xyz, n } = unpackPC(args[0]);
  const maxDist = asScalar(m(args[1]));
  const maxIter = args.length > 2 ? Math.round(asScalar(m(args[2]))) : 1000;

  if (n < 3) throw new MatError('pcfitplane: need at least 3 points');

  let bestInliers: number[] = [];
  let bestPlane = [0, 0, 1, 0]; // default: z=0 plane

  for (let iter = 0; iter < maxIter; iter++) {
    // Sample 3 random points
    const i0 = Math.floor(Math.random() * n);
    let i1 = Math.floor(Math.random() * n); while(i1===i0) i1=Math.floor(Math.random()*n);
    let i2 = Math.floor(Math.random() * n); while(i2===i0||i2===i1) i2=Math.floor(Math.random()*n);

    const p0=[xyz[i0*3],xyz[i0*3+1],xyz[i0*3+2]];
    const p1=[xyz[i1*3],xyz[i1*3+1],xyz[i1*3+2]];
    const p2=[xyz[i2*3],xyz[i2*3+1],xyz[i2*3+2]];

    // Normal = (p1-p0) × (p2-p0)
    const v1=[p1[0]-p0[0],p1[1]-p0[1],p1[2]-p0[2]];
    const v2=[p2[0]-p0[0],p2[1]-p0[1],p2[2]-p0[2]];
    const nx=v1[1]*v2[2]-v1[2]*v2[1], ny=v1[2]*v2[0]-v1[0]*v2[2], nz=v1[0]*v2[1]-v1[1]*v2[0];
    const nlen=Math.sqrt(nx*nx+ny*ny+nz*nz);
    if (nlen < 1e-10) continue; // degenerate triangle

    const a=nx/nlen, b=ny/nlen, c=nz/nlen;
    const d=-(a*p0[0]+b*p0[1]+c*p0[2]);

    // Count inliers
    const inliers: number[] = [];
    for (let i=0;i<n;i++){
      if (Math.abs(a*xyz[i*3]+b*xyz[i*3+1]+c*xyz[i*3+2]+d) <= maxDist) inliers.push(i);
    }

    if (inliers.length > bestInliers.length) {
      bestInliers = inliers;
      bestPlane = [a, b, c, d];
      // Early termination if 95% inliers
      if (inliers.length >= 0.95 * n) break;
    }
  }

  // Refine plane from all inliers (least-squares fit)
  if (bestInliers.length >= 3) {
    // SVD-based plane fit: min ||Ax||^2 s.t. ||x||=1 where A = [pts 1]
    // Equivalent to finding normal of covariance matrix
    let mx=0,my=0,mz=0;
    for (const i of bestInliers){mx+=xyz[i*3];my+=xyz[i*3+1];mz+=xyz[i*3+2];}
    mx/=bestInliers.length;my/=bestInliers.length;mz/=bestInliers.length;
    // 3×3 covariance
    const C=[[0,0,0],[0,0,0],[0,0,0]];
    for (const i of bestInliers){
      const dx=xyz[i*3]-mx,dy=xyz[i*3+1]-my,dz=xyz[i*3+2]-mz;
      C[0][0]+=dx*dx;C[0][1]+=dx*dy;C[0][2]+=dx*dz;
      C[1][0]+=dy*dx;C[1][1]+=dy*dy;C[1][2]+=dy*dz;
      C[2][0]+=dz*dx;C[2][1]+=dz*dy;C[2][2]+=dz*dz;
    }
    // Smallest eigenvector of C = plane normal (Jacobi)
    let Q=[[1,0,0],[0,1,0],[0,0,1]];
    let Cm=C.map(r=>[...r]);
    for (let sweep=0;sweep<30;sweep++){
      let maxOff=0,p=0,q=1;
      for(let i=0;i<3;i++)for(let j=i+1;j<3;j++)if(Math.abs(Cm[i][j])>maxOff){maxOff=Math.abs(Cm[i][j]);p=i;q=j;}
      if(maxOff<1e-12)break;
      const th=(Cm[q][q]-Cm[p][p])/(2*Cm[p][q]+1e-30);
      const t2=Math.sign(th)/(Math.abs(th)+Math.sqrt(1+th**2));
      const c2=1/Math.sqrt(1+t2**2),s2=t2*c2;
      const G=[[1,0,0],[0,1,0],[0,0,1]];G[p][p]=c2;G[p][q]=-s2;G[q][p]=s2;G[q][q]=c2;
      const nCm=Cm.map(r=>[...r]);
      for(let i=0;i<3;i++)for(let j=0;j<3;j++){let s=0;for(let k=0;k<3;k++)s+=G[k][i]*Cm[k][j];nCm[i][j]=s;}
      for(let i=0;i<3;i++)for(let j=0;j<3;j++){let s=0;for(let k=0;k<3;k++)s+=nCm[i][k]*G[k][j];Cm[i][j]=s;}
      const nQ=Q.map(r=>[...r]);
      for(let i=0;i<3;i++)for(let j=0;j<3;j++){let s=0;for(let k=0;k<3;k++)s+=Q[i][k]*G[k][j];nQ[i][j]=s;}
      Q=nQ;
    }
    // Eigenvector for smallest eigenvalue
    const eigs=[Cm[0][0],Cm[1][1],Cm[2][2]];
    const minI=eigs.indexOf(Math.min(...eigs));
    const [a,b,c]=[Q[0][minI],Q[1][minI],Q[2][minI]];
    const d=-(a*mx+b*my+c*mz);
    // Recount inliers with refined plane
    bestInliers=[];
    for(let i=0;i<n;i++) if(Math.abs(a*xyz[i*3]+b*xyz[i*3+1]+c*xyz[i*3+2]+d)<=maxDist) bestInliers.push(i);
    bestPlane=[a,b,c,d];
  }

  const inlierSet = new Set(bestInliers);
  const outliers = Array.from({length:n},(_,i)=>i).filter(i=>!inlierSet.has(i));

  const modelProps = new Map<string, Value>();
  modelProps.set('Parameters', rowVec(bestPlane));
  modelProps.set('Normal', rowVec(bestPlane.slice(0,3)));

  return [
    makeObject('planeModel', modelProps),
    rowVec(bestInliers.map(i=>i+1)),   // 1-based MATLAB indices
    rowVec(outliers.map(i=>i+1)),
  ];
}

export const LIDAR: ToolboxModule = {
  id: 'lidar',
  name: 'Lidar Toolbox',
  docBase: 'https://www.mathworks.com/help/lidar/',
  builtins: {
    pointCloud,
    pcdownsample,
    pcregistericp,
    pcsegdist,
    pcfitplane,
  },
  help: {
    pointCloud: {
      summary: 'Create a 3-D point cloud object',
      syntax: ['ptCloud = pointCloud(xyzPoints)', 'ptCloud = pointCloud(xyzPoints,Color=C)'],
      description: [
        'ptCloud = pointCloud(xyzPoints) creates a point cloud object from an [N×3] matrix of XYZ coordinates.',
        'ptCloud.Location is the [N×3] coordinate matrix. ptCloud.Count is the number of points.',
        'ptCloud.XLimits, ptCloud.YLimits, ptCloud.ZLimits give the axis-aligned bounding box.',
        'Pass ptCloud to pcdownsample, pcregistericp, pcsegdist, or pcfitplane.',
      ],
      seealso: ['pcdownsample', 'pcregistericp', 'pcsegdist', 'pcfitplane'],
    },
    pcdownsample: {
      summary: 'Downsample a 3-D point cloud',
      syntax: ['ptCloudOut = pcdownsample(ptCloudIn,gridStep)', "ptCloudOut = pcdownsample(ptCloudIn,'gridAverage',gridStep)"],
      description: [
        'ptCloudOut = pcdownsample(ptCloudIn,gridStep) reduces the point cloud by binning points into axis-aligned voxels of side length gridStep and replacing each voxel\'s points with their centroid.',
        'Smaller gridStep → more points retained (less downsampling).',
        'Typical values: 0.1–1.0 m for outdoor lidar; 0.001–0.01 m for object scans.',
      ],
      seealso: ['pointCloud', 'pcregistericp', 'pcsegdist'],
    },
    pcregistericp: {
      summary: 'Register two point clouds using ICP',
      syntax: ['tform = pcregistericp(moving,fixed)', '[tform,movingReg,rmse] = pcregistericp(moving,fixed,MaxIterations=n,Tolerance=t)'],
      description: [
        'tform = pcregistericp(moving,fixed) finds the rigid transformation (rotation + translation) that best aligns the moving point cloud to the fixed point cloud using Iterative Closest Point.',
        'Each ICP iteration: (1) find nearest neighbours in fixed for each moving point, (2) compute optimal rigid transform via SVD of the cross-covariance matrix, (3) apply transform.',
        'Iterates until MaxIterations (default 20) or RMSE change < Tolerance (default 1e-6).',
        'Returns: tform (rigidtform3d with Rotation [3×3] and Translation [1×3]), registered moving cloud, RMSE.',
      ],
      seealso: ['pointCloud', 'pcdownsample', 'pcsegdist', 'pcfitplane'],
    },
    pcsegdist: {
      summary: 'Segment point cloud into clusters based on Euclidean distance',
      syntax: ['[labels,numClusters] = pcsegdist(ptCloud,minDist)'],
      description: [
        '[labels,numClusters] = pcsegdist(ptCloud,minDist) groups points into clusters where any two points in the same cluster are within minDist of at least one other point in that cluster (connected components at distance threshold).',
        'Uses BFS with a voxel-grid spatial index for O(N log N) performance.',
        'labels is an [N×1] integer vector (1-based cluster indices). numClusters is the total number of clusters found.',
        'Typical use: segment individual objects after ground removal (pcfitplane).',
      ],
      seealso: ['pointCloud', 'pcfitplane', 'pcregistericp'],
    },
    pcfitplane: {
      summary: 'Fit a plane to a 3-D point cloud using RANSAC',
      syntax: ['model = pcfitplane(ptCloud,maxDistance)', '[model,inlierIndices,outlierIndices] = pcfitplane(ptCloud,maxDistance,maxNumTrials)'],
      description: [
        '[model,inlierIndices,outlierIndices] = pcfitplane(ptCloud,maxDistance) fits the dominant plane using RANSAC.',
        'RANSAC: repeatedly samples 3 random points, computes plane normal via cross product, counts inliers within maxDistance of the plane. Keeps the hypothesis with the most inliers (up to 1000 trials).',
        'Refines the final plane via least-squares: smallest eigenvector of the inlier covariance matrix (Jacobi eigendecomposition).',
        'model.Parameters = [a b c d] such that ax+by+cz+d=0 with unit normal [a b c].',
        'inlierIndices and outlierIndices are 1-based index vectors into the original point cloud.',
        'Typical use: remove ground plane before pcsegdist object clustering.',
      ],
      seealso: ['pointCloud', 'pcsegdist', 'pcdownsample', 'pcregistericp'],
    },
  },
};
