function nelder_mead()
    % --- Tesztfüggvény (Gradiens nélkül) ---
    f = @(v) (v(1)-1)^2 + (v(2)-2)^2;
    
    x0 = [0; 0]; % Kezdőpont
    
    % --- Nelder-Mead optimalizálás futtatása ---
    x_opt = nelder_mead_robust(f, x0, 0.5, 1e-10, 400);
    
    % --- Eredmények kiírása ---
    fprintf('Megtalált minimumhely: [x1, x2] = [%.6f, %.6f]\n', x_opt(1), x_opt(2));
    fprintf('Függvényérték a minimumpontban: %e\n', f(x_opt));
end

function x = nelder_mead_robust(f, x0, step, tol, max_iter)
% NELDER_MEAD_ROBUST Teljes Downhill Simplex minimalizálás alakváltoztatással.
    if nargin < 3, step = 0.5; end
    if nargin < 4, tol = 1e-10; end
    if nargin < 5, max_iter = 400; end
    
    x0 = x0(:)'; 
    n = numel(x0);
    
    % Kezdeti szimplex felépítése (n+1) x n
    P = [x0; ones(n,1)*x0 + step*eye(n)];         
    fv = zeros(n+1, 1);
    
    % Értékek kezdeti kiszámítása (arrayfun kiváltása gyorsabb try-catch blokkal)
    for i = 1:n+1
        fv(i) = f(P(i,:)'); 
    end
    
    for it = 1:max_iter
        % Sorba rendezés a függvényértékek alapján
        [fv, idx] = sort(fv); 
        P = P(idx, :);
        
        % Leállási feltétel: ha a funkcionális eltérés kisebb a toleranciánál
        if fv(end) - fv(1) < tol
            break; 
        end
        
        % Biztonsági leállás divergencia (Inf/NaN) esetén
        if any(isnan(fv)) || any(isinf(fv))
            error('Az optimalizálás során NaN vagy Inf érték lépett fel a(z) %d. lépésben.', it);
        end
        
        % Súlypont kiszámítása (kihagyva a legrosszabbat, ami az utolsó helyen van)
        c = sum(P(1:n, :), 1) / n;
        
        % --- 1. Tükrözés (Reflection) ---
        xr = c + (c - P(end,:)); 
        fr = f(xr');       
        
        if fr < fv(1)
            % --- 2. Nyújtás (Expansion) ---
            xe = c + 2*(c - P(end,:)); 
            fe = f(xe');  
            if fe < fr
                P(end,:) = xe; fv(end) = fe; 
            else
                P(end,:) = xr; fv(end) = fr; 
            end
        elseif fr < fv(end-1)
            % A tükrözött pont jobb, mint az eddigi második legrosszabb, elfogadjuk
            P(end,:) = xr; fv(end) = fr;
        else
            % --- 3. Összehúzás (Contraction) ---
            xc = c + 0.5*(P(end,:) - c); 
            fc = f(xc'); 
            if fc < fv(end)
                P(end,:) = xc; fv(end) = fc;
            else
                % --- 4. Zsugorítás (Shrink) a legjobb (első) pont felé ---
                % Vektorizált zsugorítás a for ciklus helyett a nagyobb hatékonyságért
                for i = 2:n+1
                    P(i,:) = P(1,:) + 0.5*(P(i,:) - P(1,:)); 
                    fv(i) = f(P(i,:)'); 
                end
            end
        end
    end
    
    % A ciklus végén a sorbarendezett P mátrix első (legjobb) sora a megoldás
    x = P(1, :)';
end