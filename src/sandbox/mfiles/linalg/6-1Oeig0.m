A = [2 1; 0 2];
% sajátértékek
eig(A)
% 2-höz tartozó sajátaltér
null(A - 2*eye(2))
