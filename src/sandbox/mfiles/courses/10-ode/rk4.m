function y = rk4(f, t0, y0, h, n)
% RK4  Klasszikus negyedrendű Runge–Kutta-módszer közönséges differenciálegyenletekre.
%   y = rk4(f, t0, y0, h, n)
%   f:  A differenciálegyenlet jobb oldala, y' = f(t, y) függvényhandle
%   t0: Kezdőidőpont
%   y0: Kezdőérték (kezdeti feltétel)
%   h:  Lépésköz
%   n:  Lépések száma

    % Ha paraméterek nélkül futtatjuk, elindul a beépített demó
    if nargin == 0
        run_demo();
        return;
    end

    t = t0; 
    y = y0;
    
    for i = 1:n
        % A négy meredekség-becslés (idő- és térbeli eltolásokkal)
        k1 = f(t, y);
        k2 = f(t + h/2, y + h/2 * k1);
        k3 = f(t + h/2, y + h/2 * k2);
        k4 = f(t + h,   y + h * k3);
        
        % Új érték kiszámítása a meredekségek súlyozott átlagával
        y = y + h * (k1 + 2*k2 + 2*k3 + k4) / 6;
        t = t + h;
    end
end

% --- Helyi függvény a demó futtatásához ---
function run_demo()
    clc;
    fprintf('=== Klasszikus Negyedrendű Runge–Kutta (RK4) Teszt ===\n\n');

    % Tesztfeladat: y' = 2*y - 10*t^2 + 2*t,  y(0) = 1
    f = @(t, y) 2*y - 10*t.^2 + 2*t;
    t0 = 0;
    y0 = 1;
    h = 0.1;
    n = 10;
    
    % Végpont kiszámítása: t_end = t0 + n*h = 0 + 10*0.1 = 1
    t_end = t0 + n * h;

    fprintf('Differenciálegyenlet: y'' = 2y - 10t^2 + 2t,  y(%g) = %g\n', t0, y0);
    fprintf('Lépésköz (h): %g, Lépések száma (n): %d\n', h, n);
    fprintf('Keresett hely: t = %g\n\n', t_end);

    % Közelítő megoldás kiszámítása RK4-gyel
    y_approx = rk4(f, t0, y0, h, n);

    % Pontos analitikus megoldás ezen kezdeti feltétel mellett: y(t) = 5*t^2 + 4*t + 1
    % Így y(1) = 5*(1)^2 + 4*(1) + 1 = 10
    exact_sol = @(t) 5*t.^2 + 4*t + 1;
    y_exact = exact_sol(t_end);

    fprintf('Közelített érték y(%g): %.10f\n', t_end, y_approx);
    fprintf('Pontos érték     y(%g): %.10f\n', t_end, y_exact);
    fprintf('Abszolút hiba:          %e\n', abs(y_exact - y_approx));
end