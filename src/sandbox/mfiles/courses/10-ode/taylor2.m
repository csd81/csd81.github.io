function y = taylor2(f, df, t0, y0, h, n)
% TAYLOR2  Másodrendű Taylor-módszer közönséges differenciálegyenletekre.
%   y = taylor2(f, df, t0, y0, h, n)
%   f:   Az y'  = f(t, y) differenciálegyenlet jobb oldala (függvényhandle)
%   df:  Az f(t, y) első teljes időszerinti deriváltja (y'' = df(t, y))
%   t0:  Kezdőidőpont
%   y0:  Kezdőérték (kezdeti feltétel)
%   h:   Lépésköz
%   n:   Lépések száma

    % Ha paraméterek nélkül futtatjuk, elindul a beépített demó
    if nargin == 0
        run_demo();
        return;
    end

    t = t0; 
    y = y0;
    
    for i = 1:n
        % Taylor-sorfejtés másodrendig:
        % y(t+h) ~ y(t) + h*y'(t) + (h^2/2)*y''(t)
        y = y + h * f(t, y) + (h^2 / 2) * df(t, y);
        t = t + h;
    end
end

% --- Helyi függvény a demó futtatásához ---
function run_demo()
    clc;
    fprintf('=== Másodrendű Taylor-módszer Teszt ===\n\n');

    % Tesztfeladat: y' = 2*y - 10*t^2 + 2*t,  y(0) = 1
    f  = @(t, y) 2*y - 10*t.^2 + 2*t;
    
    % Teljes derivált kiszámítása láncszabállyal:
    % y'' = d/dt(f(t,y)) = df/dt + df/dy * y' = (-20t + 2) + 2*(2y - 10t^2 + 2t)
    df = @(t, y) 4*y - 20*t.^2 - 16*t + 2;
    
    t0 = 0;
    y0 = 1;
    h = 0.1;
    n = 10;
    
    % Végpont kiszámítása: t_end = t0 + n*h = 0 + 10*0.1 = 1
    t_end = t0 + n * h;

    fprintf('Differenciálegyenlet: y'' = 2y - 10t^2 + 2t,  y(%g) = %g\n', t0, y0);
    fprintf('Lépésköz (h): %g, Lépések száma (n): %d\n', h, n);
    fprintf('Keresett hely: t = %g\n\n', t_end);

    % Közelítő megoldás kiszámítása a másodrendű Taylor-módszerrel
    y_approx = taylor2(f, df, t0, y0, h, n);

    % Pontos analitikus megoldás ezen kezdeti feltétel mellett: y(t) = 5*t^2 + 4*t + 1
    % Így y(1) = 5*(1)^2 + 4*(1) + 1 = 10
    exact_sol = @(t) 5*t.^2 + 4*t + 1;
    y_exact = exact_sol(t_end);

    fprintf('Közelített érték y(%g): %.6f\n', t_end, y_approx);
    fprintf('Pontos érték     y(%g): %.6f\n', t_end, y_exact);
    fprintf('Abszolút hiba:          %e\n', abs(y_exact - y_approx));
end