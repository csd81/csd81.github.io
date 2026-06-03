function I = trapezoid(f, a, b, n)
% TRAPEZOID  Összetett trapézszabály az f függvény integrálására az [a,b] intervallumon.
%   I = trapezoid(f, a, b, n)
%   f:    A függvényhandle (vektorizáltnak kell lennie, pl. @(x) exp(x))
%   a, b: Az integrálási határok
%   n:    A részintervallumok száma (alapértelmezett: 100)

    % Ha paraméterek nélkül futtatjuk, elindul a beépített demó
    if nargin == 0
        run_demo();
        return;
    end

    if nargin < 4 || isempty(n), n = 100; end

    % Részintervallumok osztópontjainak generálása
    x = linspace(a, b, n+1);
    y = f(x); % Függvényértékek kiértékelése vektorosan
    
    % Egy részintervallum szélessége
    h = (b - a) / n;
    
    % A trapézszabály képlete: h * [f(x_0)/2 + f(x_1) + ... + f(x_{n-1}) + f(x_n)/2]
    I = h * (y(1)/2 + sum(y(2:end-1)) + y(end)/2);
end

% --- Helyi függvény a demó futtatásához ---
function run_demo()
    clc;
    fprintf('=== Összetett Trapézszabály Teszt ===\n\n');

    % Tesztfüggvény: f(x) = exp(x), pontos integrál [0, 1] között: e - 1
    f = @(x) exp(x);
    a = 0;
    b = 1;
    n = 100;
    
    exact = exp(1) - 1;

    fprintf('Integrálandó függvény: f(x) = exp(x)\n');
    fprintf('Integrálási tartomány: [%g, %g]\n', a, b);
    fprintf('Részintervallumok száma (n): %d\n\n', n);

    % Integrál közelítése
    I_approx = trapezoid(f, a, b, n);

    fprintf('Pontos érték (e - 1): %.10f\n', exact);
    fprintf('Közelített érték:     %.10f\n', I_approx);
    fprintf('Abszolút hiba:        %e\n', abs(exact - I_approx));
end