function [a, b] = power_fit(t, y)
% POWER_FIT  Hatványfüggvény (y = b * t^a) illesztése log-log transzformációval.
%   [a, b] = power_fit(t, y)
%   t: A független változó adatpontjai (vektor, csak pozitív értékek)
%   y: A függő változó adatpontjai (vektor, csak pozitív értékek)
%   a: A hatványkitevő (számított paraméter)
%   b: A multiplikatív együttható (számított paraméter)

    % Ha paraméterek nélkül futtatjuk, elindul a beépített demó
    if nargin == 0
        run_demo();
        return;
    end

    % Biztosítjuk, hogy oszlopvektorokkal dolgozzunk
    t = t(:); 
    y = y(:);
    
    % Logaritmikus transzformáció: ln(y) = ln(b) + a * ln(t)
    % Ez egy lineáris egyenletrendszert ad az [a; ln(b)] paraméterekre
    lt = log(t); 
    ly = log(y);
    
    % Túlhatározott lineáris rendszer megoldása a legkisebb négyzetek értelmében
    p = [lt, ones(numel(lt), 1)] \ ly; % p = [a; ln(b)]
    
    % Paraméterek visszatranszformálása
    a = p(1); 
    b = exp(p(2));
end

% --- Helyi függvény a demó futtatásához ---
function run_demo()
    clc;
    clf; % Grafikus ablak törlése
    fprintf('=== Hatványfüggvény Illesztése (Log-Log Regresszió) Teszt ===\n\n');

    % Tesztadatok (Y közelítőleg 2 * T^1.5)
    t = [1, 2, 3, 4]; 
    y = [2.0, 5.6, 9.7, 16.0];
    
    fprintf('Adatpontok:\n');
    fprintf('  t = [%s]\n', num2str(t));
    fprintf('  y = [%s]\n\n', num2str(y));

    % Hatványfüggvény illesztése
    [a, b] = power_fit(t, y);
    
    fprintf('Számított paraméterek:\n');
    fprintf('  Hatványkitevő (a):          %.4f\n', a);
    fprintf('  Multiplikatív tényező (b):  %.4f\n', b);
    fprintf('  Az illesztett függvény:     y = %.4f * t^(%.4f)\n\n', b, a);

    % --- Grafikus ábrázolás ---
    % Eredeti mérési pontok kirajzolása
    plot(t, y, 'ro', 'MarkerSize', 8, 'LineWidth', 2); 
    hold on;
    
    % Az illesztett hatványgörbe pontjainak kiszámítása folytonos ábrázoláshoz
    t_fine = linspace(min(t)*0.8, max(t)*1.1, 200);
    y_fit = b * (t_fine .^ a);
    
    % Görbe berajzolása
    plot(t_fine, y_fit, 'b-', 'LineWidth', 2);
    
    % Grafikon formázása
    grid on;
    title(sprintf('Hatványfüggvény illesztés: y = %.2f \\cdot t^{%.2f}', b, a));
    xlabel('t');
    ylabel('y');
    legend('Adatpontok', 'Illesztett görbe', 'Location', 'NorthWest');
    
    fprintf('Az illesztett görbe grafikusan is megjelenítésre került.\n');
end