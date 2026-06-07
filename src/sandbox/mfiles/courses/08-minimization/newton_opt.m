function [x, k] = newton_opt(f, grad, hess, x0, tol, max_iter)
% NEWTON_OPT  Minimalizálás Newton-módszerrel, opcionális numerikus deriváltakkal.
%   [x, k] = newton_opt(f, grad, hess, x0, tol, max_iter)
%   f:        célfüggvény (skalárt ad vissza)
%   grad:     gradiens-handle (n x 1 vektort ad vissza), vagy []  -> véges differenciával
%   hess:     Hesse-mátrix-handle (n x n mátrixot ad vissza), vagy []  -> véges differenciával
%   x0:       kezdőpont (n x 1)
%   tol:      tolerancia a gradiens normájára (alapértelmezett: 1e-8)
%   max_iter: maximális iterációszám (alapértelmezett: 100)
%
%   A Newton-lépés a H(x) d = -g(x) lineáris rendszer megoldása. Ha a Hesse-mátrix nem ad
%   csökkenő irányt (nem pozitív definit), a módszer a legmeredekebb leereszkedésre vált, és
%   Armijo-vonalkereséssel biztosítja a globális konvergenciát. Ez a "híd" a gradient_descent /
%   steepest és a kvázi-Newton (bfgs, dfp, sr1, broyden) módszerek között.

    % Paraméterek nélkül a beépített demó fut
    if nargin == 0
        nopt_demo();
        return;
    end

    if nargin < 5 || isempty(tol),      tol = 1e-8; end
    if nargin < 6 || isempty(max_iter), max_iter = 100; end

    x = x0(:);
    n = numel(x);
    c1 = 1e-4;                  % Armijo-paraméter

    for k = 1:max_iter
        g = nopt_fd_grad(f, grad, x, n);
        if norm(g) < tol
            return;
        end
        H = nopt_fd_hess(f, hess, x, n);

        % Newton-irány: H d = -g (backslash-sel stabilan).
        d = -(H \ g);

        % Ha az irány nem véges vagy nem csökkenő, visszaállunk a negatív gradiensre.
        if ~all(isfinite(d)) || g' * d >= 0
            d = -g;
        end

        % Backtracking (Armijo) vonalkeresés
        t = 1; fx = f(x); gd = g' * d;
        while f(x + t*d) > fx + c1 * t * gd
            t = t / 2;
            if t < 1e-15
                break;
            end
        end

        % Stagnáció: ha a vonalkeresés nem talált csökkenést (pl. a véges differencia
        % zajküszöbén vagyunk), a módszer konvergált, ameddig tud — leállunk.
        if t < 1e-15
            return;
        end

        x = x + t * d;
    end

    warning('A módszer elérte a maximális (%d) iterációszámot a kívánt tolerancia nélkül!', max_iter);
end

% --- gradiens: analitikus, vagy középponti differencia (O(h^2) pontosság) ---
function g = nopt_fd_grad(f, grad, x, n)
    if ~isempty(grad)
        g = grad(x); g = g(:);
        return;
    end
    g = zeros(n, 1);
    for j = 1:n
        h = 1e-6 * max(1, abs(x(j)));
        xp = x; xp(j) = xp(j) + h;
        xm = x; xm(j) = xm(j) - h;
        g(j) = (f(xp) - f(xm)) / (2 * h);
    end
end

% --- Hesse-mátrix: analitikus, vagy szimmetrikus középponti differencia ---
function H = nopt_fd_hess(f, hess, x, n)
    if ~isempty(hess)
        H = hess(x);
        return;
    end
    H = zeros(n, n);
    h = 1e-4;
    for i = 1:n
        for j = 1:n
            xpp = x; xpp(i) = xpp(i) + h; xpp(j) = xpp(j) + h;
            xpm = x; xpm(i) = xpm(i) + h; xpm(j) = xpm(j) - h;
            xmp = x; xmp(i) = xmp(i) - h; xmp(j) = xmp(j) + h;
            xmm = x; xmm(i) = xmm(i) - h; xmm(j) = xmm(j) - h;
            H(i, j) = (f(xpp) - f(xpm) - f(xmp) + f(xmm)) / (4 * h * h);
        end
    end
end

% --- Beépített demó (összevethető a bfgs.m / dfp.m eredményeivel) ---
function nopt_demo()
    clc;
    fprintf('=== Newton-módszer minimalizálásra ===\n\n');

    % Ugyanaz a tesztfüggvény, mint a bfgs.m-ben, hogy összevethető legyen:
    %   f(x, y) = (x-1)^2 + 5*(y-2)^2,  minimum: [1; 2], f = 0
    f    = @(v) (v(1)-1)^2 + 5*(v(2)-2)^2;
    grad = @(v) [2*(v(1)-1); 10*(v(2)-2)];
    hess = @(v) [2, 0; 0, 10];
    x0   = [0; 0];

    fprintf('Tesztfüggvény: f(x,y) = (x-1)^2 + 5*(y-2)^2\n');
    fprintf('Kezdőpont: x0 = [%g; %g]\n\n', x0(1), x0(2));

    % 1) Analitikus gradiens + Hesse (Newton kvadratikus függvényre 1 lépésben konvergál)
    [xa, ka] = newton_opt(f, grad, hess, x0, 1e-12, 100);
    fprintf('Analitikus deriváltakkal:\n');
    fprintf('  minimumhely = [%.6f, %.6f], f = %e, %d lépés\n\n', xa(1), xa(2), f(xa), ka);

    % 2) Numerikus gradiens + Hesse (grad = [], hess = [])
    [xn, kn] = newton_opt(f, [], [], x0, 1e-8, 100);
    fprintf('Numerikus (véges differencia) deriváltakkal:\n');
    fprintf('  minimumhely = [%.6f, %.6f], f = %e, %d lépés\n', xn(1), xn(2), f(xn), kn);
end
