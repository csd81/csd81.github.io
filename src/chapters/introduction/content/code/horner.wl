horner[a_, x_] := Fold[#1 x + #2 &, First[a], Rest[a]];

(* p(x) = 5x^4 - 8x^3 + 2x^2 + 4x - 10 *)
Print[horner[{5, -8, 2, 4, -10}, 2]]   (* 22 *)
