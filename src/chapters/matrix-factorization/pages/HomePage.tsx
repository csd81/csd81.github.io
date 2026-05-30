import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useT } from "../i18n/useT";
import { Math } from "../components/Math/Math";
import "./home.css";

export function HomePage() {
  const { t, lang } = useT();

  const cards = [
    {
      to: "/lu",
      icon: "🔻",
      title: lang === "en" ? "LU Factorization" : "LU-faktorizáció",
      body:
        lang === "en"
          ? "Decompose A = LU via Gaussian elimination and solve systems fast."
          : "Bontsd A = LU alakra Gauss-eliminációval, és oldj meg gyorsan rendszereket.",
    },
    {
      to: "/cholesky",
      icon: "🔺",
      title: lang === "en" ? "Cholesky Factorization" : "Cholesky-faktorizáció",
      body:
        lang === "en"
          ? "For symmetric positive-definite A, find A = L Lᵀ at half the cost."
          : "Szimmetrikus pozitív definit A esetén A = L Lᵀ feleannyi költséggel.",
    },
    {
      to: "/solvers",
      icon: "🧮",
      title: lang === "en" ? "Interactive Solvers" : "Interaktív megoldók",
      body:
        lang === "en"
          ? "Enter any matrix and watch every elimination step unfold."
          : "Adj meg bármilyen mátrixot, és kövesd minden eliminációs lépést.",
    },
    {
      to: "/practice",
      icon: "🎯",
      title: lang === "en" ? "Practice & Badges" : "Gyakorlás és jelvények",
      body:
        lang === "en"
          ? "Test yourself with checked exercises and earn badges."
          : "Ellenőrzött feladatokkal teszteld magad, és szerezz jelvényeket.",
    },
  ];

  return (
    <div className="home">
      <motion.div
        className="hero"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span className="hero__chip">{t("nav_home")} · Chapter 5</span>
        <h1>{t("appName")}</h1>
        <p className="hero__lead">
          {lang === "en"
            ? "Learn matrix factorization the interactive way — step-by-step solvers, animated worked examples, and bilingual theory in English and Hungarian."
            : "Tanuld a mátrix faktorizációt interaktívan — lépésenkénti megoldók, animált kidolgozott példák, és kétnyelvű elmélet angolul és magyarul."}
        </p>
        <div className="hero__math">
          <Math tex={"\\mathbf{A} = \\mathbf{L}\\mathbf{U} \\qquad \\mathbf{A} = \\mathbf{L}\\mathbf{L}^{T}"} display />
        </div>
        <div className="hero__cta">
          <Link to="/matrix-factorization/lu" className="btn primary">
            {t("start_learning")} →
          </Link>
          <Link to="/matrix-factorization/solvers" className="btn">
            {t("open_solver")}
          </Link>
        </div>
      </motion.div>

      <div className="home__cards">
        {cards.map((c, i) => (
          <motion.div
            key={c.to}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
          >
            <Link to={c.to} className="home-card card">
              <span className="home-card__icon">{c.icon}</span>
              <h3>{c.title}</h3>
              <p>{c.body}</p>
              <span className="home-card__go">→</span>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
