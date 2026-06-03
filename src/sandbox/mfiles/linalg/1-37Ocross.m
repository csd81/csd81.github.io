a = [2 3 6];
b = [3 -6 2];
dot(a,b)     % skaláris szorzat
axb = cross(a,b)
c = [1 0 1];
% paralelepipedon térfogata
dot(axb, c)
% a 3 vektorból képzett determináns
det([a; b; c])
