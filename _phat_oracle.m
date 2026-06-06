% Oracle script for Phased Array System Toolbox sandbox validation.
% Run: matlab -batch "run('_phat_oracle.m')"

fprintf('=== az2broadside ===\n');
fprintf('az2broadside(30,0)   = %.15g\n',  az2broadside(30,0));
fprintf('az2broadside(30,20)  = %.15g\n',  az2broadside(30,20));
fprintf('az2broadside(45,0)   = %.15g\n',  az2broadside(45,0));
fprintf('az2broadside(-60,30) = %.15g\n',  az2broadside(-60,30));
fprintf('az2broadside(0,0)    = %.15g\n',  az2broadside(0,0));

fprintf('\n=== broadside2az ===\n');
fprintf('broadside2az(30,0)   = %.15g\n',  broadside2az(30,0));
fprintf('broadside2az(30,20)  = %.15g\n',  broadside2az(30,20));
fprintf('broadside2az(-20,45) = %.15g\n',  broadside2az(-20,45));
fprintf('broadside2az(0,0)    = %.15g\n',  broadside2az(0,0));
fprintf('broadside2az(45,0)   = %.15g\n',  broadside2az(45,0));

fprintf('\n=== azel2uv ===\n');
uv = azel2uv([30;0]);   fprintf('azel2uv([30;0])   u=%.15g v=%.15g\n', uv(1),uv(2));
uv = azel2uv([0;45]);   fprintf('azel2uv([0;45])   u=%.15g v=%.15g\n', uv(1),uv(2));
uv = azel2uv([-30;20]); fprintf('azel2uv([-30;20]) u=%.15g v=%.15g\n', uv(1),uv(2));
uv = azel2uv([0;0]);    fprintf('azel2uv([0;0])    u=%.15g v=%.15g\n', uv(1),uv(2));
uv = azel2uv([90;0]);   fprintf('azel2uv([90;0])   u=%.15g v=%.15g\n', uv(1),uv(2));
% multi-column
uv2 = azel2uv([30 -30; 0 20]);
fprintf('azel2uv multi col1 u=%.15g v=%.15g\n', uv2(1,1),uv2(2,1));
fprintf('azel2uv multi col2 u=%.15g v=%.15g\n', uv2(1,2),uv2(2,2));

fprintf('\n=== uv2azel ===\n');
ae = uv2azel([0.5;0]);      fprintf('uv2azel([0.5;0])     az=%.15g el=%.15g\n', ae(1),ae(2));
ae = uv2azel([-0.3;0.4]);   fprintf('uv2azel([-0.3;0.4])  az=%.15g el=%.15g\n', ae(1),ae(2));
ae = uv2azel([0;0]);        fprintf('uv2azel([0;0])       az=%.15g el=%.15g\n', ae(1),ae(2));
ae = uv2azel([0;1]);        fprintf('uv2azel([0;1])       az=%.15g el=%.15g\n', ae(1),ae(2));
ae = uv2azel([1/sqrt(2);0]);fprintf('uv2azel([1/sqrt2;0]) az=%.15g el=%.15g\n', ae(1),ae(2));

fprintf('\n=== cbfweights ===\n');
pos5 = (0:4)*0.5;
w5 = cbfweights(pos5, 30);
for i=1:5, fprintf('cbfweights(0:4*0.5,30) w(%d) re=%.15g im=%.15g\n',i,real(w5(i)),imag(w5(i))); end

pos4 = (0:3)*0.5;
w4 = cbfweights(pos4, [30 45]);
for i=1:4
  fprintf('cbfweights(0:3*0.5,[30 45]) col1 w(%d) re=%.15g im=%.15g\n',i,real(w4(i,1)),imag(w4(i,1)));
end
for i=1:4
  fprintf('cbfweights(0:3*0.5,[30 45]) col2 w(%d) re=%.15g im=%.15g\n',i,real(w4(i,2)),imag(w4(i,2)));
end

% 3-element array, az=60
pos3 = [0 0.5 1];
w3 = cbfweights(pos3, 60);
for i=1:3, fprintf('cbfweights([0 .5 1],60) w(%d) re=%.15g im=%.15g\n',i,real(w3(i)),imag(w3(i))); end
