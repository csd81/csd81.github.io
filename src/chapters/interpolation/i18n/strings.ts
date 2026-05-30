export type Lang = "en" | "hu";

export interface Strings {
  appTitle: string;
  tagline: string;
  nav: { playground: string; lagrange: string; newton: string; hermite: string; spline: string };
  methods: { lagrange: string; newton: string; hermite: string; spline: string };
  ui: {
    addPoint: string;
    removePoint: string;
    reset: string;
    dragHint: string;
    showCos: string;
    compareAll: string;
    derivatives: string;
    challenge: string;
    challengeHint: string;
    nailedIt: string;
    points: string;
    value: string;
    deriv: string;
    light: string;
    dark: string;
    table: string;
    coefficients: string;
    polynomialAt: string;
  };
  lessons: Record<"lagrange" | "newton" | "hermite" | "spline", LessonText>;
}

export interface LessonText {
  title: string;
  intro: string;
  theoremTitle: string;
  theorem: string; // KaTeX
  body: string;
  tryIt: string;
}

export const STR: Record<Lang, Strings> = {
  en: {
    appTitle: "InterPlay",
    tagline: "Play with interpolation — Chapter 6",
    nav: {
      playground: "Playground",
      lagrange: "6.1 Lagrange",
      newton: "6.3 Newton",
      hermite: "6.4 Hermite",
      spline: "6.5 Spline",
    },
    methods: {
      lagrange: "Lagrange",
      newton: "Newton (divided diff.)",
      hermite: "Hermite",
      spline: "Natural cubic spline",
    },
    ui: {
      addPoint: "+ point",
      removePoint: "− point",
      reset: "Reset",
      dragHint: "Drag the dots to move the data points and watch the curve react.",
      showCos: "Show cos x",
      compareAll: "Compare all methods",
      derivatives: "Derivatives (Hermite)",
      challenge: "🎯 Challenge",
      challengeHint: "Move your points so the curve matches the dashed target!",
      nailedIt: "Nailed it! 🎉",
      points: "Data points",
      value: "y",
      deriv: "y′",
      light: "Light",
      dark: "Dark",
      table: "Divided-difference table",
      coefficients: "Newton coefficients",
      polynomialAt: "Evaluate at x =",
    },
    lessons: {
      lagrange: {
        title: "6.1 Lagrange Interpolation",
        intro:
          "Given pairwise different mesh points x₀,…,xₙ and values y₀,…,yₙ, we look for the unique polynomial of degree ≤ n through all points.",
        theoremTitle: "Theorem 6.1",
        theorem:
          "L_n(x) = \\sum_{k=0}^{n} y_k \\, l_k(x), \\qquad l_k(x)=\\prod_{i\\neq k}\\frac{x-x_i}{x_k-x_i}",
        body:
          "Each basis polynomial l_k equals 1 at x_k and 0 at the other nodes, so L_n hits every data point. Uniqueness follows from the Fundamental Theorem of Algebra.",
        tryIt: "Drag points below. With many equidistant nodes, watch the edges oscillate (Runge phenomenon).",
      },
      newton: {
        title: "6.3 Newton's Divided Difference Form",
        intro:
          "The same polynomial, written so that adding a new point only appends one term. Coefficients are divided differences.",
        theoremTitle: "Formula 6.6",
        theorem:
          "L_n(x)=f[x_0]+f[x_0,x_1](x-x_0)+\\dots+f[x_0,\\dots,x_n]\\prod_{i=0}^{n-1}(x-x_i)",
        body:
          "Build the triangular table: each entry is the difference of the two to its left, divided by the spread of mesh points. The top row gives the coefficients.",
        tryIt: "Edit the points and watch the divided-difference table and coefficients update live.",
      },
      hermite: {
        title: "6.4 Hermite Interpolation",
        intro:
          "Now we match function values AND derivatives at each node, giving a polynomial of degree ≤ 2n+1.",
        theoremTitle: "Theorem 6.18",
        theorem:
          "H_{2n+1}(x)=f[x_0]+f[x_0,x_0](x-x_0)+f[x_0,x_0,x_1](x-x_0)^2+\\cdots",
        body:
          "Each node is listed twice in the divided-difference table; the first divided difference of a repeated node is the given derivative value y′.",
        tryIt: "Set both y and y′ for each point; the tangent slope of the curve at each node matches y′.",
      },
      spline: {
        title: "6.5 Spline Interpolation",
        intro:
          "Instead of one high-degree polynomial, join cubic pieces that stay C² — smooth and oscillation-free.",
        theoremTitle: "Theorem 6.22",
        theorem:
          "S_i(x)=a_i+b_i(x-x_i)+c_i(x-x_i)^2+d_i(x-x_i)^3,\\quad S''(x_0)=S''(x_n)=0",
        body:
          "The continuity conditions reduce to a tridiagonal, diagonally dominant linear system for the cᵢ — so the natural cubic spline always exists and is unique.",
        tryIt: "Compare the spline with the Lagrange curve on the same points — the spline never blows up at the edges.",
      },
    },
  },
  hu: {
    appTitle: "InterPlay",
    tagline: "Játssz az interpolációval — 6. fejezet",
    nav: {
      playground: "Játszótér",
      lagrange: "6.1 Lagrange",
      newton: "6.3 Newton",
      hermite: "6.4 Hermite",
      spline: "6.5 Spline",
    },
    methods: {
      lagrange: "Lagrange",
      newton: "Newton (osztott diff.)",
      hermite: "Hermite",
      spline: "Természetes köbös spline",
    },
    ui: {
      addPoint: "+ pont",
      removePoint: "− pont",
      reset: "Alaphelyzet",
      dragHint: "Húzd a pontokat, és figyeld, hogyan reagál a görbe.",
      showCos: "cos x mutatása",
      compareAll: "Összes módszer összevetése",
      derivatives: "Deriváltak (Hermite)",
      challenge: "🎯 Kihívás",
      challengeHint: "Mozgasd a pontjaidat, hogy a görbe illeszkedjen a szaggatott célgörbére!",
      nailedIt: "Megvan! 🎉",
      points: "Alappontok",
      value: "y",
      deriv: "y′",
      light: "Világos",
      dark: "Sötét",
      table: "Osztott differenciák táblázata",
      coefficients: "Newton-együtthatók",
      polynomialAt: "Kiértékelés itt: x =",
    },
    lessons: {
      lagrange: {
        title: "6.1 Lagrange-interpoláció",
        intro:
          "Adott páronként különböző x₀,…,xₙ alappontok és y₀,…,yₙ értékek esetén keressük az egyértelmű, legfeljebb n-edfokú polinomot, amely átmegy minden ponton.",
        theoremTitle: "6.1. tétel",
        theorem:
          "L_n(x) = \\sum_{k=0}^{n} y_k \\, l_k(x), \\qquad l_k(x)=\\prod_{i\\neq k}\\frac{x-x_i}{x_k-x_i}",
        body:
          "Minden l_k alappolinom x_k-ban 1, a többi alappontban 0, így L_n minden adatponton átmegy. Az egyértelműség az algebra alaptételéből következik.",
        tryIt: "Húzd a pontokat. Sok ekvidisztáns alappontnál figyeld a szélek oszcillációját (Runge-jelenség).",
      },
      newton: {
        title: "6.3 A Lagrange-polinom Newton-féle alakja",
        intro:
          "Ugyanaz a polinom úgy felírva, hogy új pont hozzávétele csak egy taggal bővít. Az együtthatók osztott differenciák.",
        theoremTitle: "(6.6) képlet",
        theorem:
          "L_n(x)=f[x_0]+f[x_0,x_1](x-x_0)+\\dots+f[x_0,\\dots,x_n]\\prod_{i=0}^{n-1}(x-x_i)",
        body:
          "Építsd fel a háromszög-táblázatot: minden elem a tőle balra lévő kettő különbsége, osztva a megfelelő alappontok különbségével. A felső sor adja az együtthatókat.",
        tryIt: "Módosítsd a pontokat, és nézd, ahogy a táblázat és az együtthatók élőben frissülnek.",
      },
      hermite: {
        title: "6.4 Hermite-interpoláció",
        intro:
          "Most a függvényértékeket ÉS a deriváltakat is illesztjük minden alappontban, így legfeljebb 2n+1-edfokú polinomot kapunk.",
        theoremTitle: "6.18. tétel",
        theorem:
          "H_{2n+1}(x)=f[x_0]+f[x_0,x_0](x-x_0)+f[x_0,x_0,x_1](x-x_0)^2+\\cdots",
        body:
          "Minden alappont kétszer szerepel a táblázatban; az ismételt alappont elsőrendű osztott differenciája a megadott y′ derivált.",
        tryIt: "Állítsd be minden ponthoz az y és y′ értéket; a görbe érintőjének meredeksége az alappontban épp y′.",
      },
      spline: {
        title: "6.5 Spline-interpoláció",
        intro:
          "Egyetlen magasfokú polinom helyett köbös darabokat illesztünk össze C²-folytonosan — sima és oszcillációmentes.",
        theoremTitle: "6.22. tétel",
        theorem:
          "S_i(x)=a_i+b_i(x-x_i)+c_i(x-x_i)^2+d_i(x-x_i)^3,\\quad S''(x_0)=S''(x_n)=0",
        body:
          "A folytonossági feltételek tridiagonális, diagonálisan domináns lineáris rendszerre vezetnek a cᵢ-kre — így a természetes köbös spline mindig létezik és egyértelmű.",
        tryIt: "Vesd össze a spline-t a Lagrange-görbével ugyanazon pontokon — a spline a széleken sosem szökik el.",
      },
    },
  },
};
