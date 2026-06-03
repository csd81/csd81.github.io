function y = horner(a, x)
% HORNER  Polinom kiértékelése Horner-elrendezéssel.
%   y = horner(a, x)
%   a: A polinom együtthatóinak vektora, csökkenő sorrendben: [a_n, a_{n-1}, ..., a_1, a_0]
%      Például: p(x) = 5x^2 - 3x + 2  ->  a = [5, -3, 2]
%   x: A pont vagy pontok (skalár, vektor vagy mátrix), ahol a polinomot kiértékeljük

    % Ha paraméterek nélkül futtatjuk, elindul a beépített demó
    if nargin == 0
        run_demo();
        return;
    end

    % Kezdőérték beállítása a legmagasabb fokú tag együtthatójával, 
    % igazodva a bemeneti x dimenzióihoz (legyen az akár vektor vagy mátrix)
    y = a(1) * ones(size(x));
    
    % Iteratív kiértékelés (Horner-elrendezés)
    % y.*x biztosítja, hogy ha x egy vektor, akkor a szorzás elemenként történjen
    for i = 2:numel(a)
        y = y .* x + a(i);
    end
end

% --- Helyi függvény a demó futtatásához ---
function run_demo()
    clc;
    fprintf('=== Horner-módszer Teszt ===\n\n');

    % Tesztpolinom: p(x) = 5x^4 - 8x^3 + 2x^2 + 4x - 10
    a = [5, -8, 2, 4, -10];
    x_scalar = 2;

    fprintf('Polinom: p(x) = 5x^4 - 8x^3 + 2x^2 + 4x - 10\n');
    fprintf('Kiértékelés helye (skalár): x = %g\n', x_scalar);

    % Kiértékelés skalár pontban
    y_scalar = horner(a, x_scalar);
    
    % Elméleti ellenőrzés: 5*(16) - 8*(8) + 2*(4) + 4*(2) - 10 = 80 - 64 + 8 + 8 - 10 = 22
    fprintf('Eredmény: p(%g) = %g (Elvárt érték: 22)\n\n', x_scalar, y_scalar);

    % Vektorizált működés bemutatása
    x_vector = [0, 1, 2];
    fprintf('Kiértékelés helye (vektor): x = [%s]\n', num2str(x_vector));
    
    y_vector = horner(a, x_vector);
    fprintf('Eredmények:                  p(x) = [%s]\n', num2str(y_vector));
    fprintf('  * p(0) = %g (csak a konstans tag: a_0)\n', y_vector(1));
    fprintf('  * p(1) = %g (együtthatók összege: 5 - 8 + 2 + 4 - 10)\n', y_vector(2));
    fprintf('  * p(2) = %g (a korábban számolt érték)\n', y_vector(3));
end