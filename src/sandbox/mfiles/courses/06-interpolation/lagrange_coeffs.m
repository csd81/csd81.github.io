function a = lagrange_coeffs(x, y)
% LAGRANGE_COEFFS  Az (x_i, y_i) pontokon átmenő n-1-edfokú interpolációs polinom 
%                  együtthatóinak meghatározása (alacsonytól a magas fokszám felé: a_0, a_1... a_{n-1})
%                  a Vandermonde-féle V * a = y lineáris egyenletrendszer megoldásával.
%
%   a = lagrange_coeffs(x, y)
%   x: Az alappontok vektora
%   y: A függvényértékek vektora az alappontokban

    % Ha paraméterek nélkül futtatjuk, elindul a beépített demó
    if nargin == 0
        run_demo();
        return;
    end

    % Biztosítjuk, hogy oszlopvektorokkal dolgozzunk
    x = x(:); 
    y = y(:); 
    n = numel(x);
    
    % Vandermonde-mátrix felépítése
    V = zeros(n);
    for i = 1:n
        V(i, :) = x(i) .^ (0:n-1);     % V(i,j) = x_i^(j-1)
    end
    
    % Együtthatóvektor meghatározása
    % A backslash (\) operátor használata numerikusan sokkal stabilabb, mint az inv(V)*y
    a = V \ y;                          
end

% --- Helyi függvény a demó futtatásához ---
function run_demo()
    clc;
    fprintf('=== Lagrange-interpoláció Teszt (Vandermonde-mátrix) ===\n\n');

    % Tesztadatok
    x = [-1, 1, 2, 3]; 
    y = [-3, 1, 3, 29];
    
    fprintf('Alappontok (x):          [%s]\n', num2str(x));
    fprintf('Függvényértékek (y):     [%s]\n\n', num2str(y));

    % Együtthatók kiszámítása (alacsonytól a magas fokszám felé)
    a = lagrange_coeffs(x, y);
    
    fprintf('Számított együtthatók (a_0-tól a_n felé):\n');
    fprintf('a = [ ');
    fprintf('%g ', a);
    fprintf(']\n');
    fprintf('-> p(x) = %dx^3 %+dx^2 %+dx %+d\n\n', a(4), a(3), a(2), a(1));

    % Ellenőrzés: Kiértékelés az egyik eredeti alappontban (pl. x = 2 esetén y = 3 kell legyen)
    t_test = 2;
    
    % A MATLAB beépített polyval függvénye csökkenő fokszámot vár, ezért megfordítjuk a-t
    p_coefficients_high_to_low = fliplr(a');
    y_test = polyval(p_coefficients_high_to_low, t_test);
    
    fprintf('Ellenőrzés a(z) x = %g pontban:\n', t_test);
    fprintf('  Számított p(%g) = %g\n', t_test, y_test);
    fprintf('  Eredeti elvárt y = 3\n');
    fprintf('  Abszolút hiba: %e\n', abs(y_test - 3));
end