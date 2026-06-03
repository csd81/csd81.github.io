function I = gauss_quad(f, a, b, n, N)
% GAUSS_QUAD  Összetett 2- vagy 3-pontos Gauss-Legendre kvadratúra.
%   I = gauss_quad(f, a, b, n, N)
%   f:  A függvényhandle (vektorizáltnak kell lennie, pl. @(x) x.^2)
%   a, b: Az integrálási határok
%   n:  Pontok száma részintervallumonként (2 vagy 3, alapértelmezett: 2)
%   N:  Részintervallumok száma (alapértelmezett: 1 -> sima Gauss-kvadratúra)

    % Ha főprogramként futtatjuk (bemeneti paraméterek nélkül), indítsa el a demót
    if nargin == 0
        run_demo();
        return;
    end

    if nargin < 4 || isempty(n), n = 2; end
    if nargin < 5 || isempty(N), N = 1; end

    % Standard Gauss-Legendre alappontok (t) és súlyok (w) a [-1, 1] intervallumon
    if n == 3
        t = [-sqrt(3/5); 0; sqrt(3/5)];
        w = [5/9; 8/9; 5/9];
    else
        t = [-1/sqrt(3); 1/sqrt(3)];
        w = [1; 1];
    end

    % 1. Lépés: Részintervallumok határainak kiszámítása
    x_sub = linspace(a, b, N + 1);
    
    % 2. Lépés: Minden részintervallum hossza és középpontja
    hm = diff(x_sub) / 2;                      % Transzformációs faktorok (sorvektor)
    mid = (x_sub(1:end-1) + x_sub(2:end)) / 2; % Középpontok (sorvektor)
    
    % 3. Lépés: Integrálási pontok transzformálása az összes részintervallumra
    % t (oszlopvektor) és mid/hm (sorvektorok) -> X egy (n x N) méretű mátrix lesz
    X = mid + hm .* t; 
    
    % 4. Lépés: Kiértékelés és súlyozott összegzés (teljesen vektorizálva)
    % A w' * f(X) elvégzi a súlyozott összegzést minden egyes részintervallumra
    I = sum(hm .* (w' * f(X)));
end

% --- Helyi függvény a demó futtatásához ---
function run_demo()
    clc;
    fprintf('=== Gauss-Legendre Kvadratúra Teszt ===\n\n');
    
    % Tesztfüggvény: f(x) = exp(x), pontos integrál [0, 1] között: e - 1
    f = @(x) exp(x);
    exact = exp(1) - 1;

    fprintf('Pontos érték (e - 1): %.10f\n\n', exact);

    % 1. Sima Gauss-kvadratúra (1 részintervallum, mint az eredeti kódodban)
    res_2pt_sima = gauss_quad(f, 0, 1, 2, 1);
    res_3pt_sima = gauss_quad(f, 0, 1, 3, 1);
    
    fprintf('Sima 2-pontos (N=1): %.10f (Hiba: %e)\n', res_2pt_sima, abs(exact - res_2pt_sima));
    fprintf('Sima 3-pontos (N=1): %.10f (Hiba: %e)\n\n', res_3pt_sima, abs(exact - res_3pt_sima));

    % 2. Összetett kvadratúra (N = 10 részintervallum)
    res_2pt_osszetett = gauss_quad(f, 0, 1, 2, 10);
    res_3pt_osszetett = gauss_quad(f, 0, 1, 3, 10);
    
    fprintf('Összetett 2-pontos (N=10): %.10f (Hiba: %e)\n', res_2pt_osszetett, abs(exact - res_2pt_osszetett));
    fprintf('Összetett 3-pontos (N=10): %.10f (Hiba: %e)\n', res_3pt_osszetett, abs(exact - res_3pt_osszetett));
end