function [a, l] = fixpont(f, x0, t, max_iter)
% FIXPONT  Fixpont-iteráció alkalmazása egy f(x) = x alakú egyenlet megoldására.
%   [a, l] = fixpont(f, x0, t, max_iter)
%   f:        A fixpontfüggvény handle-je (f(x) = x)
%   x0:       Kezdőpont (kezdeti tipp)
%   t:        Konvergencia-tolerancia (alapértelmezett: 1e-6)
%   max_iter: Maximális iterációszám (alapértelmezett: 100)

    % Ha paraméterek nélkül futtatjuk, elindul a beépített demó
    if nargin == 0
        fixpont_demo();
        return;
    end

    % Alapértelmezett értékek kezelése
    if nargin < 3 || isempty(t),        t = 1e-6; end
    if nargin < 4 || isempty(max_iter), max_iter = 100; end

    a = x0;
    l = 1;
    
    % Az iteráció addig fut, amíg a |f(a) - a| hiba nagyobb, mint a tolerancia, 
    % és nem értük el a maximális lépésszámot.
    while abs(f(a) - a) > t && l <= max_iter
        a = f(a);
        fprintf('A(z) %2d. lépésben a közelítő megoldás: %6f\n', l, a);
        l = l + 1;
    end
    
    % Korrigáljuk a lépésszámlálót a ciklusból való kilépés után
    l = l - 1;
    
    if l >= max_iter
        warning('A módszer elérte a maximális (%d) lépésszámot a kívánt tolerancia nélkül!', max_iter);
    end
end

% --- Helyi függvény a demó futtatásához ---
function fixpont_demo()
    clc;
    fprintf('=== Fixpont-iteráció Teszt ===\n\n');

    % Tesztfeladat: f(x) = cos(x) fixpontjának megkeresése (Dottie-szám)
    % Ez a függvény a Banach-féle fixponttétel alapján globálisan konvergens
    f = @(x) cos(x);
    x0 = 0.5;   % Kezdőpont
    tol = 1e-6; % Tolerancia

    fprintf('Fixpont egyenlet: x = cos(x)\n');
    fprintf('Kezdőpont:       x0 = %g\n', x0);
    fprintf('Tolerancia:      t  = %e\n\n', tol);

    % Iteráció indítása
    [x_fixed, steps] = fixpont(f, x0, tol);

    fprintf('\nSzámítási eredmények:\n');
    fprintf('  Megtalált fixpont (x) = %6f\n', x_fixed);
    fprintf('  Szükséges lépésszám   = %d\n', steps);
    fprintf('  Végső hiba |cos(x)-x| = %e\n', abs(cos(x_fixed) - x_fixed));
end