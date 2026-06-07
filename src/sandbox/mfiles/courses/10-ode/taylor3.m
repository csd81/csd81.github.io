function y = taylor3(f, df, d2f, t0, y0, h, n)
% TAYLOR3  Harmadrendű Taylor-módszer közönséges differenciálegyenletekre.
%   y = taylor3(f, df, d2f, t0, y0, h, n)
%   f:   Az y'   = f(t, y) differenciálegyenlet jobb oldala (függvényhandle)
%   df:  Az f(t, y) első teljes időszerinti deriváltja (y''  = df(t, y))
%   d2f: Az f(t, y) második teljes időszerinti deriváltja (y''' = d2f(t, y))
%   t0:  Kezdőidőpont
%   y0:  Kezdőérték (kezdeti feltétel)
%   h:   Lépésköz
%   n:   Lépések száma

    % Ha paraméterek nélkül futtatjuk, elinteli a beépített demót
    if nargin == 0
        taylor3_demo();
        return;
    end

    t = t0; 
    y = y0;
    
    for i = 1:n
        % Taylor-sorfejtés harmadrendig: 
        % y(t+h) ~ y(t) + h*y'(t) + (h^2/2)*y''(t) + (h^3/6)*y'''(t)
        y = y + h * f(t, y) + (h^2 / 2) * df(t, y) + (h^3 / 6) * d2f(t, y);
        t = t + h;
    end
end

% --- Helyi függvény a demó futtatásához ---
function taylor3_demo()
    clc;
    fprintf('=== Harmadrendű Taylor-módszer Teszt ===\n\n');

    % Tesztfeladat: y' = 2*y - 10*t^2 + 2*t,  y(0) = 1
    f   = @(t, y) 2*y - 10*t.^2 + 2*t;
    
    % Teljes deriváltak kiszámítása láncszabállyal:
    % y''  = d/dt(f(t,y)) = df/dt + df/dy * y' = (-20t + 2) + 2*(2y - 10t^2 + 2t)
    df  = @(t, y) 4*y - 20*t.^2 - 16*t + 2;
    
    % y''' = d/dt(y'') = 4*y' - 40t - 16 = 4*(2y - 10t^2 + 2t) - 40t - 16
    d2f = @(t, y) 8*y - 40*t.^2 - 32*t - 16;
    
    t0 = 0;
    y0 = 1;
    h = 0.1;
    n = 10;
    
    % Végpont kiszámítása: t_end = t0 + n*h = 0 + 10*0.1 = 1
    t_end = t0 + n * h;

    fprintf('Differenciálegyenlet: y'' = 2y - 10t^2 + 2t,  y(%g) = %g\n', t0, y0);
    fprintf('Lépésköz (h): %g, Lépések száma (n): %d\n', h, n);
    fprintf('Keresett hely: t = %g\n\n', t_end);

    % Közelítő megoldás kiszámítása a Taylor-módszerrel
    y_approx = taylor3(f, df, d2f, t0, y0, h, n);

    % Pontos analitikus megoldás ezen kezdeti feltétel mellett: y(t) = 5*t^2 + 4*t + 1
    % Így y(1) = 5*(1)^2 + 4*(1) + 1 = 10
    exact_sol = @(t) 5*t.^2 + 4*t + 1;
    y_exact = exact_sol(t_end);

    fprintf('Közelített érték y(%g): %.10f\n', t_end, y_approx);
    fprintf('Pontos érték     y(%g): %.10f\n', t_end, y_exact);
    fprintf('Abszolút hiba:          %e\n', abs(y_exact - y_approx));
end