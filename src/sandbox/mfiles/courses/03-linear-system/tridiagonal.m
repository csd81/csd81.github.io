function tridiagonal()
    % --- Teszt adatok ---
    a = [ 0, -1, -1, -1]; % Alátló (első elem nem használt)
    b = [ 4,  4,  4,  4]; % Főátló
    c = [-1, -1, -1,  0]; % Felátló (utolsó elem nem használt)
    d = [ 2,  4,  6, 13]; % Jobb oldal
    
    % --- Thomas-algoritmus meghívása ---
    try
        x = thomas_robust(a, b, c, d);
        fprintf('A rendszer megoldása (x):\n');
        disp(x');
    catch ME
        fprintf('Hiba történt: %s\n', ME.message);
    end
end

function x = thomas_robust(a, b, c, d)
% THOMAS_ROBUST Tridiagonális lineáris egyenletrendszer solver védelemmel.
    
    n = numel(d);
    
    % Biztosítjuk, hogy oszlopvektorok legyenek
    a = a(:); b = b(:); c = c(:); d = d(:);
    
    % Ellenőrizzük a dimenziók egyezőségét
    if numel(a) ~= n || numel(b) ~= n || numel(c) ~= n
        error('Minden bemeneti vektornak (a, b, c, d) azonos számú elemet kell tartalmaznia.');
    end
    
    tol = 1e-15; % Numerikus zéró tolerancia
    
    % Első lépés inicializálása
    if abs(b(1)) < tol
        error('A bal felső elem b(1) nulla vagy túl közel van hozzá. Az algoritmus ebben a formában nem futtatható.');
    end
    c(1) = c(1) / b(1); 
    d(1) = d(1) / b(1);
    
    % Előrehaladási fázis
    for i = 2:n
        m = b(i) - a(i) * c(i-1);
        
        % Nullával való osztás ellenőrzése
        if abs(m) < tol
            error('Szingularitás vagy numerikus instabilitás a(z) %d. lépésnél (m = 0). Az algoritmus megszakadt.', i);
        end
        
        if i < n
            c(i) = c(i) / m; 
        end
        d(i) = (d(i) - a(i) * d(i-1)) / m;
    end
    
    % Visszahelyettesítési fázis
    x = zeros(n, 1); 
    x(n) = d(n);
    
    for i = n-1:-1:1
        x(i) = d(i) - c(i) * x(i+1);
    end
end