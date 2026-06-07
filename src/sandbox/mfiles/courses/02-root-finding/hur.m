function [c, l] = hur(f, a, b, t, max_iter)
% HUR  Gyökkeresés nemlineáris egyenletekre a húrmódszerrel (regula falsi).
%   [c, l] = hur(f, a, b, t, max_iter)
%   f:        A függvényhandle, aminek a gyökét keressük (f(x) = 0)
%   a, b:     Az intervallum végpontjai (a függvénynek ellentétes előjelűnek kell lennie a végpontokon)
%   t:        Konvergencia-tolerancia a függvényértékre (alapértelmezett: 1e-6)
%   max_iter: Maximális iterációszám (alapértelmezett: 100)

    % Ha paraméterek nélkül futtatjuk, elindul a beépített demó
    if nargin == 0
        [c_demo, l_demo] = hur_demo();
        if nargout > 0, c = c_demo; l = l_demo; end
        return;
    end

    % Alapértelmezett értékek kezelése
    if nargin < 4 || isempty(t),        t = 1e-6; end
    if nargin < 5 || isempty(max_iter), max_iter = 100; end

    % Előjel-ellenőrzés a végpontokon
    if f(a) * f(b) > 0 
       error('Nem ellentétes előjelű az intervallum! A húrmódszer így nem indítható el.');
    end
    
    % Peremmegoldások azonnali kiszűrése
    if f(a) == 0 
        c = a; l = 0;
        fprintf('Az intervallum első végpontja megoldás! (%6f)\n', a);
        return;
    end
    if f(b) == 0 
        c = b; l = 0;
        fprintf('Az intervallum második végpontja megoldás! (%6f)\n', b);
        return;
    end
    
    l = 0;
    % Első közelítő gyök kiszámítása a húr és az x-tengely metszéspontjaként
    c = a - f(a) * (a - b) / (f(a) - f(b));
    
    if f(c) == 0 
        fprintf('%d lépésben a pontos gyök: %6f\n', l, c);
        return;
    end
    
    % Iterációs ciklus
    while abs(f(c)) > t && l < max_iter
        % Intervallum szűkítése a Bolzano-tétel alapján
        if f(a) * f(c) < 0
            b = c;
        elseif f(b) * f(c) < 0
            a = c;
        else
            fprintf('%d lépésben a pontos gyök: %6f\n', l, c);
            return;
        end
        
        l = l + 1;
        % Új metszéspont (közelítés) számítása a szűkített intervallumon
        c = a - f(a) * (a - b) / (f(a) - f(b));
        
        fprintf('%d lépésben a közelítő gyök: %6f\n', l, c);
    end  
    
    if l >= max_iter && abs(f(c)) > t
        warning('A módszer elérte a maximális (%d) lépésszámot a kívánt tolerancia nélkül!', max_iter);
    end
end

% --- Helyi függvény a demó futtatásához ---
function [c_sol, l_sol] = hur_demo()
    clc;
    fprintf('=== Húrmódszer (Regula Falsi) Teszt ===\n\n');

    % Tesztfeladat: f(x) = x^2 - 2 = 0 -> Pozitív gyök: x = sqrt(2)
    f = @(x) x.^2 - 2;
    a_start = 1.0; % Bal végpont (f(1) = -1 < 0)
    b_start = 2.0; % Jobb végpont (f(2) = 2 > 0)
    tol = 1e-6;    % Tolerancia

    fprintf('Függvény:              f(x) = x^2 - 2\n');
    fprintf('Kezdeti intervallum:   [%g, %g]\n', a_start, b_start);
    fprintf('Kért tolerancia (t):   %e\n\n', tol);

    % Húrmódszer meghívása
    [c_sol, l_sol] = hur(f, a_start, b_start, tol);
    
    exact = sqrt(2);
    fprintf('\nSzámítási eredmények:\n');
    fprintf('  Megtalált gyök (c) = %6f\n', c_sol);
    fprintf('  Szükséges lépésszám = %d\n', l_sol);
    fprintf('  Gyári sqrt(2):        %6f\n', exact);
    fprintf('  Abszolút hiba:        %e\n', abs(exact - c_sol));
end