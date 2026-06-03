function exponential_fit()
    % --- Teszt adatok ---
    t = [0, 1, 2, 3]; 
    y = [2.0, 4.1, 8.2, 15.9];
    
    % --- Exponenciális illesztés ---
    try
        [a, b] = exp_fit_robust(t, y);
        fprintf('Illesztett paraméterek:\n');
        fprintf('a = %.4f (növekedési ráta)\n', a);
        fprintf('b = %.4f (kezdeti érték t=0-nál)\n', b);
        
        % --- Grafikus ábrázolás ---
        t_fine = linspace(min(t), max(t), 200);
        y_fitted = b * exp(a * t_fine); % Az illesztett modell
        
        figure;
        plot(t, y, 'ro', 'MarkerSize', 8, 'MarkerFaceColor', 'r'); hold on;
        plot(t_fine, y_fitted, 'b-', 'LineWidth', 2);
        
        title('Exponenciális görbe illesztése');
        xlabel('Idő (t)');
        ylabel('Érték (y)');
        legend('Mért adatok', sprintf('Illesztett: y = %.2f * e^{%.2f * t}', b, a), 'Location', 'NorthWest');
        grid on;
        
    catch ME
        fprintf('Hiba történt az illesztés során: %s\n', ME.message);
    end
end

function [a, b] = exp_fit_robust(t, y)
% EXP_FIT_ROBUST Exponenciális illesztés y ~ b*exp(a*t) formában, ellenőrzésekkel.
    
    % Ellenőrzés: egyezik-e a méret?
    if numel(t) ~= numel(y)
        error('A "t" és "y" vektoroknak azonos számú elemet kell tartalmazniuk.');
    end
    
    % Oszlopvektorrá kényszerítés
    t = t(:);
    y = y(:);
    
    % Ellenőrzés: Van-e nem pozitív elem y-ban?
    if any(y <= 0)
        error('Az exponenciális illesztés linearizálása (log) miatt minden "y" értéknek szigorúan pozitívnak kell lennie.');
    end
    
    % Linearizált legkisebb négyzetek módszere
    ly = log(y);
    X = [t, ones(numel(t), 1)];
    
    p = X \ ly;   % p = [a; ln(b)]
    
    a = p(1);
    b = exp(p(2));
end