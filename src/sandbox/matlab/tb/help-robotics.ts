// Help entries for the Robotics System Toolbox, extracted from robotics.ts.
// Keyed by function name; consumed via ToolboxModule.help (see tb/types.ts).
import type { HelpEntry } from '../help';

export const HELP_ROBOTICS: Record<string, HelpEntry | string> = {
    angdiff: {
      summary: 'Difference between two angles',
      syntax: ['delta = angdiff(alpha,beta)', 'delta = angdiff(alpha)'],
      description: [
        'delta = angdiff(alpha,beta) returns the angular difference beta-alpha wrapped to (-pi, pi].',
        'delta = angdiff(alpha) returns the differences between consecutive elements of alpha.',
      ],
      seealso: ['wrapToPi', 'wrapTo2Pi'],
    },
    axang2quat: {
      summary: 'Convert axis-angle rotation to quaternion',
      syntax: ['quat = axang2quat(axang)'],
      description: [
        'quat = axang2quat([ax,ay,az,theta]) converts an axis-angle representation to a unit quaternion [w,x,y,z].',
      ],
      seealso: ['axang2rotm', 'quat2rotm', 'eul2quat'],
    },
    axang2rotm: {
      summary: 'Convert axis-angle rotation to rotation matrix',
      syntax: ['rotm = axang2rotm(axang)'],
      description: ['rotm = axang2rotm([ax,ay,az,theta]) returns a 3×3 rotation matrix using Rodrigues formula.'],
      seealso: ['axang2quat', 'rotm2quat', 'eul2rotm'],
    },
    axang2tform: {
      summary: 'Convert axis-angle rotation to homogeneous transformation matrix',
      syntax: ['tform = axang2tform(axang)'],
      description: ['tform = axang2tform([ax,ay,az,theta]) returns a 4×4 homogeneous transformation matrix (rotation only, no translation).'],
      seealso: ['axang2rotm', 'trvec2tform', 'eul2tform'],
    },
    cart2hom: {
      summary: 'Convert Cartesian coordinates to homogeneous coordinates',
      syntax: ['hom = cart2hom(cart)'],
      description: ['hom = cart2hom(cart) appends a column of ones to the matrix cart, converting each row from n-D Cartesian to (n+1)-D homogeneous.'],
      seealso: ['hom2cart', 'trvec2tform'],
    },
    hom2cart: {
      summary: 'Convert homogeneous coordinates to Cartesian coordinates',
      syntax: ['cart = hom2cart(hom)'],
      description: ['cart = hom2cart(hom) divides each row of hom by its last element and drops that column.'],
      seealso: ['cart2hom'],
    },
    quat2rotm: {
      summary: 'Convert quaternion to rotation matrix',
      syntax: ['rotm = quat2rotm(quat)'],
      description: ['rotm = quat2rotm([w,x,y,z]) returns the corresponding 3×3 rotation matrix.'],
      seealso: ['rotm2quat', 'eul2rotm', 'axang2rotm'],
    },
    rotm2quat: {
      summary: 'Convert rotation matrix to quaternion',
      syntax: ['quat = rotm2quat(rotm)'],
      seealso: ['quat2rotm', 'rotm2eul', 'rotm2axang'],
    },
    rotm2axang: {
      summary: 'Convert rotation matrix to axis-angle rotation',
      syntax: ['axang = rotm2axang(rotm)'],
      seealso: ['axang2rotm', 'rotm2quat'],
    },
    eul2rotm: {
      summary: 'Convert Euler angles to rotation matrix',
      syntax: ["rotm = eul2rotm(eul)", "rotm = eul2rotm(eul,'ZYX')"],
      description: [
        "rotm = eul2rotm([r,p,y]) converts ZYX Euler angles to a rotation matrix.",
        "Specify the sequence as a second argument, e.g., 'XYZ', 'ZYX' (default).",
      ],
      seealso: ['rotm2eul', 'eul2quat', 'eul2tform'],
    },
    rotm2eul: {
      summary: 'Convert rotation matrix to Euler angles',
      syntax: ['eul = rotm2eul(rotm)', "eul = rotm2eul(rotm,'ZYX')"],
      seealso: ['eul2rotm', 'rotm2quat'],
    },
    eul2quat: {
      summary: 'Convert Euler angles to quaternion',
      syntax: ['quat = eul2quat(eul)', "quat = eul2quat(eul,'ZYX')"],
      seealso: ['quat2eul', 'eul2rotm'],
    },
    quat2eul: {
      summary: 'Convert quaternion to Euler angles',
      syntax: ['eul = quat2eul(quat)', "eul = quat2eul(quat,'ZYX')"],
      seealso: ['eul2quat', 'rotm2eul'],
    },
    eul2tform: {
      summary: 'Convert Euler angles to homogeneous transformation matrix',
      syntax: ['tform = eul2tform(eul)', "tform = eul2tform(eul,'ZYX')"],
      seealso: ['axang2tform', 'trvec2tform', 'rotm2eul'],
    },
    tform2eul: {
      summary: 'Extract Euler angles from homogeneous transformation',
      syntax: ['eul = tform2eul(tform)', "eul = tform2eul(tform,'ZYX')"],
      seealso: ['eul2tform', 'tform2rotm'],
    },
    tform2rotm: {
      summary: 'Extract rotation matrix from homogeneous transformation',
      syntax: ['rotm = tform2rotm(tform)'],
      seealso: ['tform2trvec', 'trvec2tform'],
    },
    trvec2tform: {
      summary: 'Convert translation vector to homogeneous transformation',
      syntax: ['tform = trvec2tform(trvec)'],
      description: ['tform = trvec2tform([tx,ty,tz]) returns a 4×4 identity rotation + translation transform.'],
      seealso: ['tform2trvec', 'axang2tform', 'eul2tform'],
    },
    tform2trvec: {
      summary: 'Extract translation vector from homogeneous transformation',
      syntax: ['trvec = tform2trvec(tform)'],
      seealso: ['trvec2tform', 'tform2rotm'],
    },
    rigidBodyTree: {
      summary: 'Rigid body tree robot model',
      syntax: ['robot = rigidBodyTree', "robot = rigidBodyTree('DataFormat','column')"],
      description: ['robot = rigidBodyTree creates a kinematic chain model. Use addBody to add rigid bodies and joints.'],
      seealso: ['inverseKinematics', 'forwardKinematics'],
    },
    bsplinepolytraj: {
      summary: 'Polynomial trajectory through waypoints using B-spline',
      syntax: ['[q,qd,qdd] = bsplinepolytraj(waypoints,timePoints,tSamples)'],
      description: ['Computes a smooth B-spline trajectory through waypoints at timePoints, sampled at tSamples.'],
      seealso: ['minjerkpolytraj', 'quinticpolytraj'],
    },
    quatnormalize: {
      summary: 'Normalize quaternion',
      syntax: ['qnorm = quatnormalize(q)'],
      description: [
        'qnorm = quatnormalize(q) normalizes each row of q (a quaternion [w x y z]) to unit length.',
        'If q is N×4, each of the N quaternions is normalized independently.',
      ],
      seealso: ['quat2rotm', 'axang2quat', 'eul2quat'],
    },
  };
