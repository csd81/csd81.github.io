function lu_decomposition()
    % --- Teszt mátrix ---
    A = [ 1 -2 -2 -2; 
          2 -1  2  4; 
         -1  2  3 -4; 
         -2  1  4 -2];
     
    % --- LU felbontás futtatása ---
    try
        [L, U] = lu_doolittle_robust(A);
        
        fprintf('L (egység-alsóháromszög mátrix):\n'); disp(L);
        fprintf('U (felső háromszög mátrix):\n'); disp(U);
        
        % Ellenőrzés
        fprintf('Hiba normája (norm(A - L*U)): %e\n', norm(A - L*U));
    catch ME
        fprintf('Hiba: %s\n', ME.message);
    end
end

function [L, U] = lu_doolittle_robust(A)
% LU_DOOLITTLE_ROBUST Doolittle-féle LU-felbontás ellenőrzéssel.
    [n, m] = size(A);
    if n ~= m
        error('Az LU-felbontás csak négyzetes mátrixokon végezhető el.');
    end
    
    L = eye(n); 
    U = zeros(n);
    tol = 1e-15; % Numerikus zéró tolerancia
    
    for i = 1:n
        % U elemeinek kiszámítása
        for j = i:n
            U(i,j) = A(i,j) - L(i,1:i-1) * U(1:i-1,j);
        end
        
        % Szingularitás (nullával való osztás) ellenőrzése
        if abs(U(i,i)) < tol
            error('A főátlón lévő elem (%d,%d) nulla vagy túl közel van hozzá. Főelemkiválasztás szükséges!', i, i);
        end
        
        % L elemeinek kiszámítása
        for j = i+1:n
            L(j,i) = (A(j,i) - L(j,1:i-1) * U(1:i-1,i)) / U(i,i);
        end
    end
end