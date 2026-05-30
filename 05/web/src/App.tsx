import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Header } from "./components/Layout/Header";
import { HomePage } from "./pages/HomePage";
import { LuPage } from "./pages/LuPage";
import { CholeskyPage } from "./pages/CholeskyPage";
import { SolversPage } from "./pages/SolversPage";
import { PracticePage } from "./pages/PracticePage";
import { TheorySection } from "./components/Theory/TheorySection";
import { introSection } from "./content/intro";
import { useAppStore } from "./store/useAppStore";
import { useT } from "./i18n/useT";
import "./app.css";

export default function App() {
  const theme = useAppStore((s) => s.theme);
  const lang = useAppStore((s) => s.lang);
  const { t } = useT();
  const location = useLocation();

  // apply theme + lang to <html>
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);
  useEffect(() => {
    document.documentElement.setAttribute("lang", lang);
  }, [lang]);

  // scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  return (
    <>
      <Header />
      <main className="page">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HomePage />
                <div className="page-narrow" style={{ marginTop: "2.5rem" }}>
                  <TheorySection section={introSection} />
                </div>
              </>
            }
          />
          <Route path="/lu" element={<LuPage />} />
          <Route path="/cholesky" element={<CholeskyPage />} />
          <Route path="/solvers" element={<SolversPage />} />
          <Route path="/practice" element={<PracticePage />} />
        </Routes>
      </main>
      <footer className="footer">
        {t("appName")} · {t("tagline")} · © {new Date().getFullYear()}
      </footer>
    </>
  );
}
