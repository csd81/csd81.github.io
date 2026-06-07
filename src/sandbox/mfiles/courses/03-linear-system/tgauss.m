function [x, oind] = tgauss(A, b)
% TGAUSS  Lineáris egyenletrendszer megoldása Gauss-eliminációval, teljes főelemkiválasztással.
%   [x, oind] = tgauss(A, b)
%   A:    Együttható-mátrix (n x n)
%   b:    Jobb oldali oszlopvektor (n x 1)
%   x:    A számított megoldásvektor (n x 1) az eredeti változó-sorrendben
%   oind: Az oszlopok (változók) végső indexsorrendje a permutációk után

    % Ha paraméterek nélkül futtatjuk, elindul a beépített demó
    if nargin == 0
        [x_demo, oind_demo] = tgauss_demo();
        if nargout > 0, x = x_demo; oind = oind_demo; end
        return;
    end

    % Dimenziók ellenőrzése
    sA = size(A);
    sb = size(b);
    if sA(1) ~= sA(2) || sA(1) ~= sb(1) || sb(2) ~= 1
        error('Rossz dimenziók! A mátrixnak négyzetesnek, a b-nek oszlopvektornak kell lennie.');
    end
    
    n = sA(1);
    A = [A, b];        % Kibővített mátrix [A | b]
    oind = 1:n;        % Változók eredeti indexeinek nyomon követése
    
    fprintf('0. lépés (Kezdeti kibővített mátrix):\n');
    disp(A)
    
    % --- 1. Egyenes elimináció teljes főelemkiválasztással ---
    for k = 1:n-1
        % A még nem eliminált (k:n, k:n) részmátrix maximumának megkeresése
        [maxek, maxok] = max(abs(A(k:n, k:n)));
        [~, maxo] = max(maxek);
        maxs = maxok(maxo);
        
        % Globális indexek átszámítása a teljes mátrixra vonatkozóan
        sorindex = maxs + k - 1;
        oszlopindex = maxo + k - 1;
        
        % Szükség esetén sorcsere végrehajtása
        if sorindex > k
            sor = A(sorindex, :);
            A(sorindex, :) = A(k, :);
            A(k, :) = sor;
        end
        
        % Szükség esetén oszlopcsere végrehajtása (csak az A részben, b-t nem érinti!)
        if oszlopindex > k
            oszlop = A(:, oszlopindex);
            A(:, oszlopindex) = A(:, k);
            A(:, k) = oszlop;
            
            % Változók indexeinek cseréje az indexvektorban
            oi = oind(k);
            oind(k) = oind(oszlopindex);
            oind(oszlopindex) = oi;
        end
        
        % Informatív kiírások a végrehajtott cserékről
        if sorindex > k && oszlopindex == k
            fprintf('A(z) %d. és %d. sor cseréje:\n', k, sorindex);
        elseif sorindex == k && oszlopindex > k
            fprintf('A(z) %d. és %d. oszlop cseréje:\n', k, oszlopindex);
        elseif sorindex > k && oszlopindex > k
            fprintf('A(z) %d. és %d. sor, valamint a(z) %d. és %d. oszlop cseréje:\n', k, sorindex, k, oszlopindex);
        end
        
        if sorindex > k || oszlopindex > k
            disp(A)
        end
        
        % Eliminációs lépés az aktuális maximális főelem alatt
        for i = k+1:n
            if A(k,k) == 0
                error('Nem hajtható végre az elimináció: a főelem zérus! A mátrix szinguláris.');
            end
            l = A(i,k) / A(k,k);
            A(i, :) = A(i, :) - l * A(k, :);
        end
        fprintf('A(z) %d. eliminációs lépés után:\n', k);
        disp(A)
    end
    
    % --- 2. Visszahelyettesítés (A permutált egyenletrendszerre) ---
    x_perm = zeros(n, 1);
    
    if A(n,n) == 0
        error('A mátrix szinguláris, nem oldható meg egyértelműen.');
    end
    
    x_perm(n) = A(n, n+1) / A(n, n);
    for i = n-1:-1:1
        x_perm(i) = A(i, n+1);
        for j = i+1:n
            x_perm(i) = x_perm(i) - A(i, j) * x_perm(j);
        end
        x_perm(i) = x_perm(i) / A(i, i);
    end
    
    % --- 3. Változók sorrendjének visszaállítása az eredeti struktúrába ---
    x = zeros(n, 1);
    for i = 1:n
        x(oind(i)) = x_perm(i);
    end
    
    disp('A változók permutált sorrendje az elimináció végén:')
    disp(oind)
    disp('A helyreállított, végleges megoldásvektor (x):')
    disp(x')
end

% --- Helyi függvény a demó futtatásához ---
function [x_sol, oind_sol] = tgauss_demo()
    clc;
    fprintf('=== Gauss-elimináció Teljes Főelemkiválasztással Teszt ===\n\n');

    % Tesztfeladat (Olyan rendszer, ahol a részleges és a teljes választás is cseréket provokál)
    A = [ 1   2   3;
          2   1  10;
          4   2   1];
    b = [14; 37; 11];
    
    fprintf('Kiinduló együttható-mátrix (A):\n');
    disp(A);
    fprintf('Jobb oldali vektor (b):\n');
    disp(b);

    % Algoritmus meghívása
    [x_sol, oind_sol] = tgauss(A, b);
    
    % Gyári ellenőrzés
    x_builtin = A \ b;
    fprintf('\nEllenőrzés a MATLAB gyári \ operátorával:\n');
    fprintf('  Számított megoldás:  [%s]\n', num2str(x_sol'));
    fprintf('  Gyári megoldás:      [%s]\n', num2str(x_builtin'));
    fprintf('  Maximális eltérés:   %e\n', norm(x_sol - x_builtin, inf));
end