function back_substitution()
    % --- Teszt adatok ---
    U = [2  1 -1; 
         0  1  2; 
         0  0  3]; 
     
    b = [1; 8; 9];
    
    % --- Visszahelyettesítés futtatása ---
    try
        x = back_substitution_robust(U, b);
        fprintf('A megoldásvektor: \n');
        disp(x');
    catch ME
        fprintf('Hiba történt: %s\n', ME.message);
    end
end

function x = back_substitution_robust(U, b)
% BACK_SUBSTITUTION_ROBUST  Felső háromszög alakú rendszer megoldása ellenőrzéssel.
    
    n = numel(b);
    b = b(:); % Kényszerítjük, hogy oszlopvektor legyen
    x = zeros(n, 1);
    
    % Numerikus zéró tolerancia a főátló ellenőrzéséhez
    tol = 1e-15; 
    
    for i = n:-1:1
        % Ellenőrizzük, hogy a főátlón lévő elem nem nulla-e
        if abs(U(i, i)) < tol
            error('A mátrix szinguláris vagy majdnem szinguláris (nulla a főátlón a(z) %d. sornál).', i);
        end
        
        % Vektorizált levonás és osztás
        x(i) = (b(i) - U(i, i+1:n) * x(i+1:n)) / U(i, i);
    end
end