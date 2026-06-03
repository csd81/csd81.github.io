function a = NewtIntp(x, y)
% NEWTINTP  Newton-interpolációs polinom együtthatóinak meghatározása osztott differenciákkal.
%   a = NewtIntp(x, y)
%   x: Az alappontok vektora (n elemű)
%   y: A függvényértékek vektora az alappontokban (n elemű)
%   a: A Newton-polinom együtthatóinak oszlopvektora (a főátló elemei az osztott differencia táblázatból)

    % Ha paraméterek nélkül futtatjuk, elindul a beépített demó
    if nargin == 0
        a_demo = run_demo();
        if nargout > 0, a = a_demo; end
        return;
    end

    % Biztosítjuk, hogy oszlopvektorokkal dolgozzunk
    x = x(:);
    y = y(:);

    % Vektorok hosszának ellenőrzése
    if length(x) ~= length(y)
        error('Rossz vektorokat adott meg! A bemeneti vektorok hosszának meg kell egyeznie.');
    end
    
    n = length(x);
    a = zeros(n, 1);
    
    % Kezdeti értékek másolása (0. rendű osztott differenciák)
    for i = 1 : n
        a(i) = y(i);
    end
    
    % Helyben történő (in-place) osztott differencia számítás
    % A belső ciklus visszafelé halad (n-től j-ig), hogy ne írja felül a még szükséges i-1 értéket
    for j = 2 : n
        for i = n : -1 : j
            a(i) = (a(i) - a(i-1)) / (x(i) - x(i-j+1));
        end
    end
    
    disp('A Newton-polinom együtthatói: ')
    disp(a')
end

% --- Helyi függvény a demó futtatásához ---
function a_sol = run_demo()
    clc;
    fprintf('=== Newton-interpoláció (Osztott Differenciák) Teszt ===\n\n');

    % Tesztadatok (A newton-eval.m fájl adatai alapján)
    % Csomópontok és a hozzájuk tartozó értékek
    x_nodes = [-1; 1; 2; 3]; 
    y_nodes = [-3; -1; 1; 17]; % Olyan értékek, amik a [-3, 1, 0, 1] együtthatókat adják vissza
    
    fprintf('Alappontok (x): [%s]\n', num2str(x_nodes'));
    fprintf('Értékek (y):     [%s]\n\n', num2str(y_nodes'));

    % Algoritmus meghívása
    a_sol = NewtIntp(x_nodes, y_nodes);
    
    fprintf('A felírt polinom Newton-alakja:\n');
    fprintf('  P(t) = %g %+g*(t%+g) %+g*(t%+g)*(t%g) %+g*(t%+g)*(t%g)*(t%g)\n', ...
        a_sol(1), a_sol(2), -x_nodes(1), a_sol(3), -x_nodes(1), -x_nodes(2), a_sol(4), -x_nodes(1), -x_nodes(2), -x_nodes(3));
end