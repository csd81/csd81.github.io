function c = poly_fit(t, y, degree)
% POLY_FIT  Polinom illesztése adatpontokra a legkisebb négyzetek módszerével.
%   c = poly_fit(t, y, degree)
%   t:      A független változó adatpontjai (vektor)
%   y:      A függő változó adatpontjai (vektor)
%   degree: Az illesztendő polinom fokszáma (d)
%   c:      A számított együtthatók alacsonytól a magas fokszám felé: [c_0, c_1, ..., c_d]
%           Azaz: p(t) = c_0 + c_1*t + c_2*t^2 + ... + c_d*t^d

    % Ha paraméterek nélkül futtatjuk, elindul a beépített demó
    if nargin == 0
        poly_fit_demo();
        return;
    end

    % Biztosítjuk, hogy oszlopvektorokkal dolgozzunk
    t = t(:); 
    y = y(:);
    
    % A Vandermonde-jellegű tervmátrix (A) felépítése
    A = zeros(numel(t), degree+1);
    for j = 0:degree
        A(:, j+1) = t .^ j;          % Oszlopok: t^0, t^1, t^2, ..., t^degree
    end
    
    % A túlhatározott lineáris egyenletrendszer megoldása a legkisebb négyzetek értelmében.
    % A backslash (\) operátor belsőleg a QR-felbontást használja, ami numerikusan nagyon stabil.
    c = A \ y;                        
end

% --- Helyi függvény a demó futtatásához ---
function poly_fit_demo()
    clc;
    clf; % Grafikus ablak törlése
    fprintf('=== Polinomiális Regresszió (Legkisebb Négyzetek) Teszt ===\n\n');

    % Tesztadatok
    t = [0, 1, 2, 3, 4]; 
    y = [1.0, 1.8, 3.3, 4.5, 6.3];
    degree = 2; % Másodfokú polinom (parabola) illesztése

    fprintf('Adatpontok:\n');
    fprintf('  t = [%s]\n', num2str(t));
    fprintf('  y = [%s]\n', num2str(y));
    fprintf('Illesztendő polinom fokszáma: %d\n\n', degree);

    % Polinom illesztése
    c = poly_fit(t, y, degree);
    
    fprintf('Számított együtthatók (c_0-tól c_d felé):\n');
    fprintf('  c = [ ');
    fprintf('%g ', c);
    fprintf(']\n');
    fprintf('-> p(t) = %2ft^2 %+2ft %+2f\n\n', c(3), c(2), c(1));

    % --- Grafikus ábrázolás ---
    % Eredeti mérési pontok kirajzolása
    plot(t, y, 'ro', 'MarkerSize', 8, 'LineWidth', 2); 
    hold on;
    
    % Az illesztett görbe pontjainak kiszámítása folytonos ábrázoláshoz
    t_fine = linspace(min(t)-0.5, max(t)+0.5, 200);
    
    % A polyval csökkenő fokszámú együtthatókat vár, ezért megfordítjuk c-t
    c_high_to_low = fliplr(c');
    y_fit = polyval(c_high_to_low, t_fine);
    
    % Görbe berajzolása
    plot(t_fine, y_fit, 'b-', 'LineWidth', 2);
    
    % Grafikon formázása
    grid on;
    title(sprintf('Polinomiális illesztés (fokszám: %d): p(t) = %.2ft^2 %+..2ft %+..2f', degree, c(3), c(2), c(1)));
    xlabel('t');
    ylabel('y');
    legend('Adatpontok', 'Illesztett polinom', 'Location', 'NorthWest');
    
    fprintf('Az illesztett görbe grafikusan is megjelenítésre került.\n');
end