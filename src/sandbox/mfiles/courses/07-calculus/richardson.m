function richardson()
    % --- Demo paraméterek ---
    f = @sin;
    x_point = 1;
    h_step = 0.1;

    % --- Richardson-extrapoláció futtatása ---
    [d1, d2, ext] = richardson_robust(f, x_point, h_step);
    
    exact = cos(x_point);

    % --- Eredmények formázott kiírása ---
    fprintf('Alap centrális differencia D(h)   = %.10f  (Hiba: %e)\n', d1, abs(exact - d1));
    fprintf('Finomított differencia D(h/2)     = %.10f  (Hiba: %e)\n', d2, abs(exact - d2));
    fprintf('Richardson-extrapolált érték O(h4) = %.10f  (Hiba: %e)\n', ext, abs(exact - ext));
    fprintf('Pontos analitikus érték cos(1)    = %.10f\n', exact);
end

function [d1, d2, ext] = richardson_robust(f, x, h)
% RICHARDSON_ROBUST Extrapoláció D(h) és D(h/2) értékekből O(h^4) pontosságig.
% Támogatja a vektorizált bemeneteket is.

    if nargin < 3, h = 0.05; end
    
    % Biztonsági figyelmeztetés: ha h túlságosan kicsi, a kerekítési hibák 
    % felzabálják az extrapoláció előnyét (lebegőpontos törlődés veszélye).
    if h < 1e-4
        warning('A megadott h lépésköz (%e) túl kicsi! Richardson-extrapolációnál a túl pici h numerikus instabilitást okozhat.', h);
    end

    % D(h) kiszámítása
    d1 = (f(x + h) - f(x - h)) / (2 * h);
    
    % D(h/2) kiszámítása
    h2 = h / 2;
    d2 = (f(x + h2) - f(x - h2)) / (2 * h2);
    
    % Negyedrendű Richardson-kombináció
    ext = (4 * d2 - d1) / 3;
end