function forward_substitution()
    % --- Teszt adatok (Alsó háromszög mátrix) ---
    L = [ 2  0  0; 
          1  3  0; 
         -1  1  2]; 
     
    b = [4; 5; -1];
    
    % --- Előrehelyettesítés futtatása ---
    try
        y = forward_substitution_robust(L, b);
        fprintf('A kapott y megoldásvektor: \n');
        disp(y');
    catch ME
        fprintf('Hiba történt: %s\n', ME.message);
    end
end

function y = forward_substitution_robust(L, b)
% FORWARD_SUBSTITUTION_ROBUST  Alsó háromszög alakú rendszer megoldása ellenőrzéssel.
    
    n = numel(b);
    b = b(:); % Biztosítjuk, hogy oszlopvektor legyen
    y = zeros(n, 1);
    
    % Numerikus zéró tolerancia a főátló ellenőrzéséhez
    tol = 1e-15; 
    
    for i = 1:n
        % Ellenőrizzük, hogy a főátlón lévő elem nem nulla-e
        if abs(L(i, i)) < tol
            error('A mátrix szinguláris vagy majdnem szinguláris (nulla a főátlón a(z) %d. sornál).', i);
        end
        
        % Vektorizált levonás és osztás
        y(i) = (b(i) - L(i, 1:i-1) * y(1:i-1)) / L(i, i);
    end
end