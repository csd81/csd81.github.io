function [a, b, c, d] = natural_cubic_spline(x, y)
% NATURAL_CUBIC_SPLINE  Szakaszonkénti együtthatók meghatározása természetes kubikus spline-hoz.
%   [a, b, c, d] = natural_cubic_spline(x, y)
%   A spline alakja az i-edik [x_i, x_{i+1}] intervallumon:
%   S_i(t) = a_i + b_i*(t-x_i) + c_i*(t-x_i)^2 + d_i*(t-x_i)^3
%
%   x: Az alappontok szigorúan monoton növekvő vektora (n x 1)
%   y: A függvényértékek vektora az alappontokban (n x 1)
%   a, b, c, d: Az intervallumonkénti együtthatók (n-1 x 1 méretű oszlopvektorok)

    % Ha paraméterek nélkül futtatjuk, elindul a beépített demó
    if nargin == 0
        natural_cubic_spline_demo();
        return;
    end

    % Biztosítjuk, hogy oszlopvektorokkal dolgozzunk
    x = x(:); 
    y = y(:); 
    n = numel(x);
    
    % Lépésközök kiszámítása az alappontok között
    h = diff(x);
    
    % A másodfokú tagok (c) együtthatóit meghatározó lineáris rendszer felállítása
    A = zeros(n); 
    rhs = zeros(n, 1);
    
    % Természetes peremfeltételek beállítása (a két végponton a második derivált nulla: c_1 = c_n = 0)
    A(1,1) = 1; 
    A(n,n) = 1;                 
    
    % A belső pontokra vonatkozó folytonossági és simasági egyenletek (háromátlós rendszer)
    for i = 2:n-1
        A(i, i-1) = h(i-1);
        A(i, i)   = 2 * (h(i-1) + h(i));
        A(i, i+1) = h(i);
        rhs(i)   = 3 * ((y(i+1) - y(i)) / h(i) - (y(i) - y(i-1)) / h(i-1));
    end
    
    % c együtthatók meghatározása a lineáris rendszer megoldásával
    c_all = A \ rhs;
    
    % A többi együttható (a, b, d) kifejezése c_all és h segítségével
    a = y(1:n-1);
    b = (y(2:n) - y(1:n-1)) ./ h - h .* (2 * c_all(1:n-1) + c_all(2:n)) / 3;
    d = (c_all(2:n) - c_all(1:n-1)) ./ (3 * h);
    c = c_all(1:n-1); % Csak az első n-1 darab kell az intervallumokhoz
end

% --- Helyi függvény a demó futtatásához ---
function natural_cubic_spline_demo()
    clc;
    clf; % Grafikus ablak törlése
    fprintf('=== Természetes Kubikus Spline Interpoláció Teszt ===\n\n');

    % Tesztadatok (időpontok és értékek)
    x_nodes = [0; 1; 2; 3]; 
    y_nodes = [0; 1; 0; 1];
    
    fprintf('Csomópontok (x): [%s]\n', num2str(x_nodes'));
    fprintf('Értékek (y):     [%s]\n\n', num2str(y_nodes'));

    % Spline együtthatók kiszámítása
    [a, b, c, d] = natural_cubic_spline(x_nodes, y_nodes);
    
    fprintf('Számszerűsített együtthatók mátrixa (soronként egy-egy intervallum [a_i, b_i, c_i, d_i]):\n');
    disp([a, b, c, d]);

    % --- Grafikus ábrázolás szakaszonkénti kiértékeléssel ---
    figure(1);
    plot(x_nodes, y_nodes, 'ro', 'MarkerSize', 8, 'MarkerFaceColor', 'r'); 
    hold on;
    
    n_intervals = numel(x_nodes) - 1;
    
    % Minden egyes intervallumot külön pontossággal plottolunk
    for i = 1:n_intervals
        % Sűrű rács generálása az aktuális intervallumon belül
        t_fine = linspace(x_nodes(i), x_nodes(i+1), 100);
        
        % S_i(t) = a_i + b_i*(t-x_i) + c_i*(t-x_i)^2 + d_i*(t-x_i)^3 kiértékelése
        dt = t_fine - x_nodes(i);
        S_i = a(i) + b(i).*dt + c(i).*(dt.^2) + d(i).*(dt.^3);
        
        % Az aktuális szakasz kirajzolása (kék folytonos vonallal)
        if i == 1
            plot(t_fine, S_i, 'b-', 'LineWidth', 2);
        else
            plot(t_fine, S_i, 'b-', 'LineWidth', 2, 'HandleVisibility', 'off');
        end
    end
    
    % Grafikon formázása
    grid on;
    title('Természetes kubikus spline interpoláció');
    xlabel('x');
    ylabel('S(x)');
    legend('Csomópontok', 'Kubikus spline', 'Location', 'NorthWest');
    
    fprintf('A kapott spline görbe grafikusan is megjelenítésre került.\n');
end