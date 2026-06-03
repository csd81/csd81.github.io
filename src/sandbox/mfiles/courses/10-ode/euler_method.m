function euler_method()
    % --- Paraméterek beállítása ---
    t0 = 0;             % Kezdeti időpont
    y0 = 1;             % Kezdeti feltétel, y(0) = 1
    h = 0.1;            % Lépésköz
    n = 10;             % Lépések száma (így a végpont t = 1)

    % A differenciálegyenlet jobb oldala: y' = f(t, y)
    f = @(t, y) 2*y - 10*t^2 + 2*t;

    % --- Euler-módszer meghívása ---
    [t, y] = euler_robust(f, t0, y0, h, n);

    % Eredmény kiírása a végpontban
    fprintf('Euler-módszer közelítése y(1) = %.6f\n', y(end));

    % --- Egzakt (pontos) megoldás kiszámítása az ábrázoláshoz ---
    % Analitikus megoldás: y(t) = 5*t^2 + 5*t + 2.5 - 1.5*exp(2*t)
    t_exact = linspace(t0, t0 + n*h, 200);
    y_exact = 5*t_exact.^2 + 5*t_exact + 2.5 - 1.5*exp(2*t_exact);
    fprintf('Pontos analitikus érték y(1)  = %.6f\n', y_exact(end));

    % --- Grafikus ábrázolás ---
    figure;
    plot(t_exact, y_exact, 'b-', 'LineWidth', 2); hold on;
    plot(t, y, 'r--o', 'LineWidth', 1.5, 'MarkerFaceColor', 'r');
    
    title('Explicit Euler-módszer vs. Egzakt megoldás');
    xlabel('t');
    ylabel('y(t)');
    legend('Egzakt megoldás', 'Euler-módszer (h = 0.1)', 'Location', 'NorthWest');
    grid on;
end

function [t, y] = euler_robust(f, t0, y0, h, n)
% EULER_ROBUST  Robusztus Forward Euler módszer y' = f(t,y) egyenletekre.
% Támogatja a skalár és a többdimenziós (rendszer) kezdetiérték-problémákat is.

    m = length(y0);          % Rendszer dimenziója (skalár esetén 1)
    t = zeros(1, n+1);       
    y = zeros(m, n+1);       % Így oszlopvektoros y0 esetén is helyesen foglal memóriát
    
    t(1) = t0; 
    y(:, 1) = y0;            % Az első oszlopba kerül a kezdeti érték
    
    for i = 1:n
        y(:, i+1) = y(:, i) + h * f(t(i), y(:, i));
        t(i+1) = t0 + i*h;   % Kerekítési hibák minimalizálása
    end
end