function Inv = minv(A)
% MINV  Mátrix invertálása Gauss–Jordan-eliminációval.
%   Inv = minv(A)
%   A:   Az invertálandó négyzetes mátrix (n x n)
%   Inv: A számított inverz mátrix (n x n)

    % Ha paraméterek nélkül futtatjuk, elindul a beépített demó
    if nargin == 0
        Inv_demo = minv_demo();
        if nargout > 0, Inv = Inv_demo; end
        return;
    end

    s = size(A);
    % Ellenőrzések: négyzetes-e és nem szinguláris-e a mátrix
    if s(1) ~= s(2)
        error('Invertálni csak négyzetes mátrixot lehet!');
    elseif det(A) == 0
        error('Szinguláris mátrix, nem invertálható! (det = 0)');
    end
    
    n = s(1);
    % Kibővített mátrix létrehozása a jobb oldali egységmátrixszal: [A | I]
    A = [A, eye(n)];
    
    disp('0. lépés (Kezdeti kibővített mátrix):')
    disp(A)
    
    % --- Gauss–Jordan-elimináció végrehajtása ---
    for i = 1:n
        if A(i,i) == 0
            error('A(z) %d. lépésben a főátlóban 0 érték van. Pivotálás nélkül az elimináció leáll!', i);
        end
        
        for j = 1:n
            if i ~= j
                kiv = A(j,i) / A(i,i);
                A(j,:) = A(j,:) - kiv * A(i,:);
            end
        end
        fprintf('%d. lépésben a kibővített mátrix:\n', i)
        disp(A)
    end
    
    % --- Sorok normálása (a bal oldali mátrix főátlójának 1-re hozása) ---
    for i = 1:n
        A(i,:) = A(i,:) / A(i,i);
    end
    
    % Az inverz mátrix kinyerése a kibővített mátrix jobb oldali feléből
    Inv = A(:, n+1:2*n);
    
    fprintf('Az inverz mátrix:\n')
    disp(Inv)
end

% --- Helyi függvény a demó futtatásához ---
function Inv_sol = minv_demo()
    clc;
    fprintf('=== Mátrixinvertálás (Gauss–Jordan) Teszt ===\n\n');

    % Teszt mátrix
    A = [1  2  0; 
         2  3  0; 
         0  0  5];
     
    fprintf('Kiinduló mátrix (A):\n');
    disp(A);

    % Algoritmus meghívása
    Inv_sol = minv(A);
    
    % Gyári ellenőrzés
    Inv_builtin = inv(A);
    fprintf('Ellenőrzés a MATLAB beépített inv() függvényével:\n');
    disp(Inv_builtin);
    fprintf('Maximális eltérés a gyári értékhez képest: %e\n', norm(Inv_sol - Inv_builtin, inf));
end