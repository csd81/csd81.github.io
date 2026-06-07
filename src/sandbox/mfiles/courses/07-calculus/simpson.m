function I = simpson(f, a, b, n)
% SIMPSON  Összetett Simpson-szabály az f függvény integrálására az [a,b] intervallumon.
%   I = simpson(f, a, b, n)
%   f:    A függvényhandle (vektorizáltnak kell lennie, pl. @(x) exp(x))
%   a, b: Az integrálási határok
%   n:    A részintervallumok száma (automatikusan páros számra kerekítve, alapértelmezett: 100)

    % Ha paraméterek nélkül futtatjuk, elindul a beépített demó
    if nargin == 0
        simpson_demo();
        return;
    end

    if nargin < 4 || isempty(n), n = 100; end
    
    % A Simpson-szabály megköveteli, hogy a részintervallumok száma (n) páros legyen
    if mod(n, 2) ~= 0
        n = n + 1; 
    end

    % Részintervallumok osztópontjainak generálása
    x = linspace(a, b, n+1);
    y = f(x); % Függvényértékek kiértékelése vektorosan
    
    % Egy részintervallum szélessége
    h = (b - a) / n;
    
    % Simpson-formula súlyozott összege:
    % h/3 * [f(x_0) + 4*f(x_1) + 2*f(x_2) + 4*f(x_3) + ... + 2*f(x_{n-2}) + 4*f(x_{n-1}) + f(x_n)]
    I = h/3 * (y(1) + y(end) + 4*sum(y(2:2:end-1)) + 2*sum(y(3:2:end-1)));
end

% --- Helyi függvény a demó futtatásához ---
function simpson_demo()
    clc;
    fprintf('=== Összetett Simpson-szabály Teszt ===\n\n');

    % Tesztfüggvény: f(x) = exp(x), pontos integrál [0, 1] között: e - 1
    f = @(x) exp(x);
    a = 0;
    b = 1;
    n = 100;
    
    exact = exp(1) - 1;

    fprintf('Integrálandó függvény: f(x) = exp(x)\n');
    fprintf('Integrálási tartomány: [%g, %g]\n', a, b);
    fprintf('Kért részintervallumok száma (n): %d\n\n', n);

    % Integrál közelítése
    I_approx = simpson(f, a, b, n);

    fprintf('Pontos érték (e - 1): %.10f\n', exact);
    fprintf('Közelített érték:     %.10f\n', I_approx);
    fprintf('Abszolút hiba:        %e\n', abs(exact - I_approx));
end