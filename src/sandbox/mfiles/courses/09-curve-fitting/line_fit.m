function [a, b] = line_fit(x, y)
% LINE_FIT  Lineáris regresszió (y = a + b*x) a legkisebb négyzetek módszerével.
%   [a, b] = line_fit(x, y)
%   x: Független változó adatpontjai (vektor)
%   y: Függő változó adatpontjai (vektor)
%   a: Tengelymetszet (intercept)
%   b: Meredekség (slope)

    % Ha paraméterek nélkül futtatjuk, elindul a beépített demó
    if nargin == 0
        line_fit_demo();
        return;
    end

    % Biztosítjuk, hogy oszlopvektorokkal dolgozzunk
    x = x(:); 
    y = y(:);
    n = numel(x);
    
    % A normálegyenletekhez szükséges összegek kiszámítása
    Sx = sum(x); 
    Sy = sum(y);
    Sxx = sum(x .^ 2); 
    Sxy = sum(x .* y);
    
    % A 2x2-es egyenletrendszer zárt alakú megoldása (Cramer-szabály alapján)
    b = (n * Sxy - Sx * Sy) / (n * Sxx - Sx^2);   % Meredekség
    a = (Sy - b * Sx) / n;                        % Tengelymetszet
end

% --- Helyi függvény a demó futtatásához ---
function line_fit_demo()
    clc;
    clf; % Grafikus ablak törlése
    fprintf('=== Legkisebb Négyzetek Módszere (Egyenes illesztés) ===\n\n');

    % Tesztadatok
    x = [0, 1, 2, 3, 4]; 
    y = [1, 3, 2, 5, 4];
    
    fprintf('Adatpontok:\n');
    fprintf('  x = [%s]\n', num2str(x));
    fprintf('  y = [%s]\n\n', num2str(y));

    % Egyenes illesztése
    [a, b] = line_fit(x, y);
    
    fprintf('Számított paraméterek:\n');
    fprintf('  Meredekség (b):    %.4f  (Elvárt: 0.8000)\n', b);
    fprintf('  Tengelymetszet (a): %.4f  (Elvárt: 1.4000)\n', a);
    fprintf('  Az illesztett egyenes egyenlete: y = %.2f %+2f*x\n\n', a, b);

    % --- Grafikus ábrázolás ---
    % Eredeti pontok kirajzolása
    plot(x, y, 'ro', 'MarkerSize', 8, 'LineWidth', 2); 
    hold on;
    
    % Az illesztett egyenes pontjainak kiszámítása és berajzolása
    x_fine = linspace(min(x)-0.5, max(x)+0.5, 100);
    y_fit = a + b * x_fine;
    plot(x_fine, y_fit, 'b-', 'LineWidth', 2);
    
    % Grafikon formázása
    grid on;
    title(sprintf('Lineáris regresszió: y = %.2f %+2f \\cdot x', a, b));
    xlabel('x');
    ylabel('y');
    legend('Adatpontok', 'Illesztett egyenes', 'Location', 'NorthWest');
    
    fprintf('Az illesztett egyenes grafikusan is megjelenítésre került.\n');
end