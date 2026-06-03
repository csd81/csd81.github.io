function [c, l] = intfel(f, a, b, t, max_iter)
% INTFEL  Gyökkeresés nemlineáris egyenletekre az intervallumfelezési módszerrel.
%   [c, l] = intfel(f, a, b, t, max_iter)
%   f:        A függvényhandle, aminek a gyökét keressük (f(x) = 0)
%   a, b:     Az intervallum végpontjai (a függvénynek ellentétes előjelűnek kell lennie a végpontokon)
%   t:        Konvergencia-tolerancia az intervallum hosszára (alapértelmezett: 1e-6)
%   max_iter: Maximális iterációszám (alapértelmezett: 100)

    % Ha paraméterek nélkül futtatjuk, elindul a beépített demó
    if nargin == 0
        [c_demo, l_demo] = run_demo();
        if nargout > 0, c = c_demo; l = l_demo; end
        return;
    end

    % Alapértelmezett értékek kezelése
    if nargin < 4 || isempty(t),        t = 1e-6; end
    if nargin < 5 || isempty(max_iter), max_iter = 100; end

    % Előjel-ellenőrzés a végpontokon (Bolzano-tétel feltétele)
    if f(a) * f(b) > 0
        error('Nem ellentétes előjelű az intervallum! Az intervallumfelezés nem indítható el.');
    end
    
    l = 1;
    % Inicializáljuk c-t az intervallum középpontjaként, ha a ciklus el se indulna
    c = (a + b) / 2; 
    
    % Iterációs ciklus az intervallum hosszának és a maximális lépésszámnak az ellenőrzésével
    while abs(b - a) >= t && l <= max_iter
        c = (a + b) / 2;
        
        % Ellenőrizzük, melyik részintervallumban van az előjelváltás
        if f(a) * f(c) < 0 
            b = c; % A gyök a bal oldali [a, c] intervallumban van
        elseif f(b) * f(c) < 0
            a = c; % A gyök a jobb oldali [c, b] intervallumban van
        else
            fprintf('%d. lépésben a pontos megoldás: %6f\n', l, c)
            return
        end
        
        fprintf('%d. lépésben a közelítő megoldás: %6f\n', l, c)
        l = l + 1;
    end
    
    % Korrigáljuk a lépésszámlálót a ciklusból való kilépés után
    l = l - 1;
    
    if l >= max_iter && abs(b - a) >= t
        warning('A módszer elérte a maximális (%d) lépésszámot a kívánt tolerancia nélkül!', max_iter);
    end
end

% --- Helyi függvény a demó futtatásához ---
function [c_sol, l_sol] = run_demo()
    clc;
    fprintf('=== Intervallumfelezési Módszer (Bisection) Teszt ===\n\n');

    % Tesztfeladat: f(x) = x^2 - 2 = 0 -> Pozitív gyök: x = sqrt(2)
    f = @(x) x.^2 - 2;
    a_start = 1.0; % Bal végpont (f(1) = -1 < 0)
    b_start = 2.0; % Jobb végpont (f(2) = 2 > 0)
    tol = 1e-6;    % Tolerancia

    fprintf('Függvény:              f(x) = x^2 - 2\n');
    fprintf('Kezdeti intervallum:   [%g, %g]\n', a_start, b_start);
    fprintf('Kért tolerancia (t):   %e\n\n', tol);

    % Intervallumfelezés meghívása
    [c_sol, l_sol] = intfel(f, a_start, b_start, tol);
    
    exact = sqrt(2);
    fprintf('\nSzámítási eredmények:\n');
    fprintf('  Megtalált gyök (c) =  %6f\n', c_sol);
    fprintf('  Szükséges lépésszám = %d\n', l_sol);
    fprintf('  Gyári sqrt(2):        %6f\n', exact);
    fprintf('  Abszolút hiba:        %e\n', abs(exact - c_sol));
end