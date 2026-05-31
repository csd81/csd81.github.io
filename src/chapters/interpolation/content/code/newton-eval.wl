newtonEval[x_, a_, t_] := Module[{p = Last[a], k},
   Do[p = p (t - x[[k]]) + a[[k]], {k, Length[a] - 1, 1, -1}]; p];
Print[newtonEval[{-1, 1, 2, 3}, {-3, 2, 0, 3}, 0]]   (* 5 *)
