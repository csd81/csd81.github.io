u = [1; 0; 2];
v = [3; 2; 1];
u * v'  % diadikus szorzat
u' * v  % skalárszorzat
% 1x3 * 3x1 * 2x2
% skalárszor mátrix:
u'*v*diag([1 1])
