function [z, a] = hermite_coeffs(x, y, dy)
% HERMITE_COEFFS  Hermite-interpoláció osztott differenciákkal, megkettőzött csomópontokkal.
%   [z, a] = hermite_coeffs(x, y, dy)
%   x:  Alappontok vektora (n x 1)
%   y:  Függvényértékek az alappontokban (n x 1)
%   dy: Deréktértékek (f') az alappontokban (n x 1)
%   z:  Megkettőzött alappontok vektora (2n x 1)
%   a:  A Newton-alak együtthatói a z alappontokon (2n x 1)

    % Ha paraméterek nélkül futtatjuk, elindul a beépített demó
    if nargin == 0
        hermite_coeffs_demo();
        return;
    end

    % Oszlopvektorokká alakítás
    x = x(:); y = y(:); dy = dy(:); 
    n = numel(x); 
    m = 2*n;
    
    z = zeros(m, 1); 
    Q = zeros(m, m);
    
    % 1. lépés: Az első két oszlop feltöltése és a csomópontok megkettőzése
    for i = 1:n
        z(2*i-1) = x(i); 
        z(2*i)   = x(i);
        
        Q(2*i-1, 1) = y(i); 
        Q(2*i, 1)   = y(i);
        
        % A megkettőzött pontok közötti osztott differencia a derivált (f'[x_i])
        Q(2*i, 2) = dy(i); 
        
        % A szomszédos, különböző alappontok közötti elsőrendű osztott differencia
        if i > 1
            Q(2*i-1, 2) = (Q(2*i-1, 1) - Q(2*i-2, 1)) / (z(2*i-1) - z(2*i-2));
        end
    end
    
    % 2. lépés: A magasabb rendű osztott differenciák kiszámítása ( Newton-táblázat )
    for j = 3:m
        for i = j:m
            Q(i, j) = (Q(i, j-1) - Q(i-1, j-1)) / (z(i) - z(i-j+1));
        end
    end
    
    % A Newton-polinom együtthatói a táblázat főátlójában találhatók
    a = diag(Q);
end

% --- Helyi függvény a Hermite-polinom kiértékeléséhez (Horner-módszer) ---
function p = hermite_eval(t, z, a)
%   t: A pont(ok), ahol a polinomot ki akarjuk értékelni
%   z: Megkettőzött alappontok vektora
%   a: Newton-együtthatók
    n = numel(a);
    p = a(n) * ones(size(t));
    for k = (n-1):-1:1
        p = p .* (t - z(k)) + a(k);
    end
end

% --- Helyi függvény a demó futtatásához ---
function hermite_coeffs_demo()
    clc;
    fprintf('=== Hermite-interpoláció Teszt (Osztott differenciák) ===\n\n');

    % Példa adatok: p(0)=1, p'(0)=0, p(1)=0, p'(1)=0
    % Elméleti megoldás: p(x) = 2x^3 - 3x^2 + 1
    x  = [0; 1];
    y  = [1; 0];
    dy = [0; 0];

    fprintf('Bemeneti feltételek:\n');
    for i = 1:numel(x)
        fprintf('  p(%g) = %g,  p''(%g) = %g\n', x(i), y(i), x(i), dy(i));
    end
    fprintf('\n');

    % Együtthatók kiszámítása
    [z, a] = hermite_coeffs(x, y, dy);
    
    fprintf('Megkettőzött alappontok (z):\n');
    disp(z');
    fprintf('Newton-együtthatók (a):\n');
    disp(a');

    % Kiértékelés a t = 0.5 pontban
    t_test = 0.5;
    p_val = hermite_eval(t_test, z, a);
    
    % Elméleti érték ellenőrzése: 2*(0.5)^3 - 3*(0.5)^2 + 1 = 0.25 - 0.75 + 1 = 0.5
    exact_val = 2*t_test^3 - 3*t_test^2 + 1;

    fprintf('Kiértékelés a t = %g helyen:\n', t_test);
    fprintf('  Számított p(%g) = %g\n', t_test, p_val);
    fprintf('  Elméleti  p(%g) = %g\n', t_test, exact_val);
    fprintf('  Abszolút hiba: %e\n', abs(p_val - exact_val));
end