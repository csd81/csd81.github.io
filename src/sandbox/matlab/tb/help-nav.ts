// Help entries for the Navigation Toolbox, extracted from nav.ts.
// Keyed by function name; consumed via ToolboxModule.help (see tb/types.ts).
import type { HelpEntry } from '../help';

export const HELP_NAV: Record<string, HelpEntry | string> = {
    lla2ecef: { summary: 'Convert LLA (lat/lon/alt) to ECEF coordinates', syntax: ['ecef = lla2ecef(lla)'], seealso: ['ecef2lla', 'geodetic2ecef'] },
    ecef2lla: { summary: 'Convert ECEF to LLA (lat/lon/alt) coordinates', syntax: ['lla = ecef2lla(ecef)'], seealso: ['lla2ecef', 'ecef2geodetic'] },
    quatnormalize: { summary: 'Normalize quaternion to unit length', syntax: ['qn = quatnormalize(q)'], seealso: ['quatinv', 'quatmultiply'] },
    lla2ned: { summary: 'Transform geodetic coordinates to local north-east-down (NED)', syntax: ['xyzNED = lla2ned(lla,lla0,method)'], description: ["xyzNED = lla2ned(lla,lla0,method) converts geodetic coordinates lla = [lat lon alt] to local NED [north east down] relative to origin lla0. method is 'ellipsoid' (WGS84) or 'flat'."], seealso: ['lla2enu', 'ned2lla', 'lla2ecef', 'ecef2lla'] },
    lla2enu: { summary: 'Transform geodetic coordinates to local east-north-up (ENU)', syntax: ['xyzENU = lla2enu(lla,lla0,method)'], description: ["xyzENU = lla2enu(lla,lla0,method) converts geodetic coordinates to local ENU [east north up] relative to origin lla0. method is 'ellipsoid' or 'flat'."], seealso: ['lla2ned', 'enu2lla', 'lla2ecef'] },
    eul2quat: { summary: 'Convert Euler angles to quaternion', syntax: ['quat = eul2quat(eul)', 'quat = eul2quat(eul,sequence)'], description: ["quat = eul2quat(eul) converts N-by-3 intrinsic Euler angles (radians) to N-by-4 unit quaternions [w x y z] using the default 'ZYX' body-fixed rotation sequence."], seealso: ['quat2eul', 'eul2rotm', 'eul2tform', 'axang2quat'] },
    quat2eul: { summary: 'Convert quaternion to Euler angles', syntax: ['eul = quat2eul(quat)', 'eul = quat2eul(quat,sequence)'], description: ["eul = quat2eul(quat) converts N-by-4 unit quaternions [w x y z] to N-by-3 Euler angles (radians) using the default 'ZYX' sequence."], seealso: ['eul2quat', 'quat2rotm', 'rotm2eul'] },
    eul2rotm: { summary: 'Convert Euler angles to rotation matrix', syntax: ['rotm = eul2rotm(eul)', 'rotm = eul2rotm(eul,sequence)'], description: ["rotm = eul2rotm(eul) converts N-by-3 Euler angles (radians) to a 3-by-3-by-N rotation matrix array using the default 'ZYX' body-fixed intrinsic sequence."], seealso: ['rotm2eul', 'eul2quat', 'eul2tform', 'axang2rotm'] },
    rotm2eul: { summary: 'Convert rotation matrix to Euler angles', syntax: ['eul = rotm2eul(rotm)', 'eul = rotm2eul(rotm,sequence)'], description: ["eul = rotm2eul(rotm) converts a 3-by-3-by-N rotation matrix array to N-by-3 Euler angles (radians) using the default 'ZYX' sequence."], seealso: ['eul2rotm', 'rotm2quat', 'quat2eul'] },
    eul2tform: { summary: 'Convert Euler angles to homogeneous transformation matrix', syntax: ['tform = eul2tform(eul)', 'tform = eul2tform(eul,sequence)'], description: ["tform = eul2tform(eul) converts N-by-3 Euler angles (radians) to a 4-by-4-by-N homogeneous transformation array (rotation only, no translation) using the default 'ZYX' sequence."], seealso: ['eul2rotm', 'eul2quat', 'tform2rotm', 'axang2tform'] },
    cart2hom: { summary: 'Converts a set of points in Cartesian coordinates to homogeneous coordinates.', syntax: ['hom = cart2hom(cart)'], seealso: ['hom2cart'] },
    hom2cart: { summary: 'Converts a set of homogeneous points to Cartesian coordinates.', syntax: ['cart = hom2cart(hom)'], seealso: ['cart2hom'] },
    trvec2tform: { summary: 'Converts the Cartesian representation of the translation vector trvec to the corresponding homogeneous transformation tform.', syntax: ['tform = trvec2tform(trvec)'], seealso: ['tform2trvec', 'se2', 'se3'] },
    tform2trvec: { summary: 'Extracts the Cartesian representation of the translation vector trvec from the homogeneous transformation tform.', syntax: ['trvec = tform2trvec(tform)'], seealso: ['trvec2tform', 'se2', 'se3'] },
    rotm2tform: { summary: 'Converts the rotation matrix rotm into a homogeneous transformation matrix tform.', syntax: ['tform = rotm2tform(rotm)'], seealso: ['tform2rotm', 'se2', 'se3', 'so2', 'so3'] },
    tform2rotm: { summary: 'Extracts the rotational component from a homogeneous transformation, tform, and returns it as an orthonormal rotation matrix, rotm.', syntax: ['rotm = tform2rotm(tform)'], seealso: ['rotm2tform', 'se2', 'se3', 'so2', 'so3'] },
    axang2rotm: { summary: 'Converts a rotation given in axis-angle form, axang, to an orthonormal rotation matrix, rotm.', syntax: ['rotm = axang2rotm(axang)'], seealso: ['rotm2axang', 'so2', 'so3'] },
    axang2quat: { summary: 'Converts a rotation given in axis-angle form, axang, to quaternion, quat.', syntax: ['quat = axang2quat(axang)'], seealso: ['quat2axang', 'quaternion'] },
    rotx: { summary: 'Rotation matrix around x-axis', syntax: ['R = rotx(ang)'], seealso: ['roty', 'rotz', 'axang2rotm'] },
    roty: { summary: 'Rotation matrix around y-axis', syntax: ['R = roty(ang)'], seealso: ['rotx', 'rotz', 'axang2rotm'] },
    rotz: { summary: 'Rotation matrix around z-axis', syntax: ['R = rotz(ang)'], seealso: ['rotx', 'roty', 'axang2rotm'] },
    quat2rotm: { summary: 'Converts a quaternion quat to an orthonormal rotation matrix, rotm.', syntax: ['rotm = quat2rotm(quat)'], seealso: ['rotm2quat', 'quaternion', 'so2', 'so3'] },
    rotm2quat: { summary: 'Converts a rotation matrix, rotm, to the corresponding unit quaternion representation, quat.', syntax: ['quat = rotm2quat(rotm)'], seealso: ['quat2rotm', 'so3', 'quaternion'] },
    quat2axang: { summary: 'Converts a quaternion, quat, to the equivalent axis-angle rotation, axang.', syntax: ['axang = quat2axang(quat)'], seealso: ['axang2quat', 'quaternion'] },
    quat2tform: { summary: 'Converts a quaternion, quat, to a homogeneous transformation matrix, tform.', syntax: ['tform = quat2tform(quat)'], seealso: ['tform2quat', 'quaternion', 'se2', 'se3'] },
    tform2quat: { summary: 'Extracts the rotational component from a homogeneous transformation, tform, and returns it as a quaternion, quat.', syntax: ['quat = tform2quat(tform)'], seealso: ['quat2tform', 'se3', 'quaternion'] },
    rotm2axang: { summary: 'Converts a rotation given as an orthonormal rotation matrix, rotm, to the corresponding axis-angle representation, axang.', syntax: ['axang = rotm2axang(rotm)'], seealso: ['axang2rotm', 'so3'] },
    rotmat2vec3d: { summary: 'Rotate 3-D vector using rotation matrix', syntax: ['vr = rotmat2vec3d(R,v)'], seealso: ['rotx', 'roty', 'rotz'] },
  };
