function [T, S] = composite_quadrature(f, a, b, n)
% COMPOSITE_QUADRATURE Összetett trapéz- és Simpson-szabály numerikus integráláshoz.
%   [T, S] = composite_quadrature(f, a, b, n)
%   f:    A vektorizált integrandus függvényhandle-je
%   a, b: Az integrálási intervallum végpontjai
%   n:    Részintervallumok száma (páratlan esetén +1, alapértelmezett: 10)
%   T:    Az összetett trapézszabály közelítése
%   S:    Az összetett Simpson-szabály közelítése

    % Ha paraméterek nélkül futtatjuk, elindul a beépített demó
    if nargin == 0
        run_demo();
        return;
    end

    if nargin < 4, n = 10; end
    if mod(n, 2), n = n + 1; end

    h = (b - a) / n;
    x = a + (0:n) * h;

    % Gyorsabb, vektorizált kiértékelés kipróbálása.
    % Ha a függvény nem vektorizált, akkor visszaváltunk arrayfun-ra.
    try
        y = f(x);
    catch
        y = arrayfun(f, x);
    end

    % Trapézszabály
    T = h * (y(1)/2 + sum(y(2:end-1)) + y(end)/2);

    % Simpson-szabály
    S = h/3 * (y(1) + y(end) + 4*sum(y(2:2:end-1)) + 2*sum(y(3:2:end-1)));
end

% --- Helyi függvény a demó futtatásához ---
function run_demo()
    f = @(x) exp(x);    % Vektorizált függvény
    a = 0;              % Alsó határ
    b = 1;              % Felső határ
    n = 10;             % Részintervallumok száma

    [T, S] = composite_quadrature(f, a, b, n);
    exact = exp(1) - 1;

    fprintf('Pontos integrál:          %.12f\n', exact);
    fprintf('Trapézszabály közelítés:  %.12f  (Hiba: %e)\n', T, abs(exact - T));
    fprintf('Simpson-szabály közelítés: %.12f  (Hiba: %e)\n', S, abs(exact - S));
end
