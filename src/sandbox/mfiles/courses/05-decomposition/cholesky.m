function cholesky()
    % --- Teszt adatok (Szimmetrikus, pozitív definit mátrix) ---
    A = [ 4  2 -2; 
          2 10  2; 
         -2  2  5];
     
    % --- Cholesky-felbontás futtatása ---
    try
        L = cholesky_robust(A);
        fprintf('A kiszámított L alsó háromszög mátrix:\n');
        disp(L);
        
        % Ellenőrzés: L * L' egyenlő-e A-val?
        fprintf('Ellenőrzés (norm(A - L*L'')): %e\n', norm(A - L*L'));
    catch ME
        fprintf('Hiba történt: %s\n', ME.message);
    end
end

function L = cholesky_robust(A)
% CHOLESKY_ROBUST Szimmetrikus pozitív definit A mátrix Cholesky-felbontása (A = L*L').
    
    % Ellenőrizzük, hogy a mátrix négyzetes-e
    [n, m] = size(A);
    if n ~= m
        error('A Cholesky-felbontás csak négyzetes mátrixokon végezhető el.');
    end
    
    % Ellenőrizzük a szimmetriát (numerikus toleranciával)
    if norm(A - A', 'inf') > 1e-12
        error('A mátrix nem szimmetrikus!');
    end

    L = zeros(n);
    
    for j = 1:n
        % Radikand (a gyök alatti kifejezés) kiszámítása
        val_under_sqrt = A(j,j) - L(j,1:j-1) * L(j,1:j-1)';
        
        % Pozitív definitség ellenőrzése
        if val_under_sqrt <= 0
            error('A mátrix nem pozitív definit! (A( %d,%d ) lépésnél a gyök alatti érték nem pozitív).', j, j);
        end
        
        L(j,j) = sqrt(val_under_sqrt);
        
        for i = j+1:n
            L(i,j) = (A(i,j) - L(i,1:j-1) * L(j,1:j-1)') / L(j,j);
        end
    end
end