function m = golden_section(f, a, b, tol)
% GOLDEN_SECTION  Unimodális f függvény minimumának megkeresése [a,b] intervallumon.
%   m = golden_section(f, a, b, tol)
%   f:   A minimalizálandó függvényhandle (pl. @(x) (x-2).^2 + 1)
%   a, b: Az interpolációs/keresési intervallum határai
%   tol: Konvergencia-tolerancia (alapértelmezett: 1e-8)

    % Ha paraméterek nélkül futtatjuk, elindul a beépített demó
    if nargin == 0
        run_demo();
        return;
    end

    if nargin < 4 || isempty(tol), tol = 1e-8; end

    % Az aranymetszési arányszám (g ~ 0.618)
    g = (sqrt(5) - 1) / 2;
    
    % Kezdő belső pontok és függvényértékek meghatározása
    c = b - g * (b - a);
    d = a + g * (b - a);
    fc = f(c);
    fd = f(d);
    
    while (b - a) > tol
        if fc < fd
            % A minimum a [a, d] intervallumban van
            b = d;
            d = c;
            fd = fc; % Újrahasznosítjuk a korábbi értéket, nem számoljuk újra!
            c = b - g * (b - a);
            fc = f(c); % Csak egy új függvénykiértékelés történik
        else
            % A minimum a [c, b] intervallumban van
            a = c;
            c = d;
            fc = fd; % Újrahasznosítjuk a korábbi értéket
            d = a + g * (b - a);
            fd = f(d); % Csak egy új függvénykiértékelés történik
        end
    end
    
    % Az intervallum középpontja lesz a becsült minimumhely
    m = (a + b) / 2;
end

% --- Helyi függvény a demó futtatásához ---
function run_demo()
    clc;
    fprintf('=== Aranymetszéses Keresés Teszt ===\n\n');

    % Tesztfüggvény: f(x) = (x-2)^2 + 1  -> Minimumhely: x = 2, Minimumérték: 1
    f = @(x) (x - 2).^2 + 1;
    a = 0;
    b = 5;
    tol = 1e-8;

    fprintf('Függvény: f(x) = (x-2)^2 + 1\n');
    fprintf('Keresési tartomány: [%g, %g]\n\n', a, b);

    % Keresés futtatása
    min_x = golden_section(f, a, b, tol);
    min_val = f(min_x);

    fprintf('Megtalált minimumhely (x): %.10f (Pontos érték: 2)\n', min_x);
    fprintf('Függvényérték a minimumban: %.10f (Pontos érték: 1)\n', min_val);
    fprintf('Abszolút hiba a helyben: %e\n', abs(2 - min_x));
end