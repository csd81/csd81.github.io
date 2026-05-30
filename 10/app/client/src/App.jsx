import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header.jsx";
import Sidebar from "./components/Sidebar.jsx";
import Home from "./pages/Home.jsx";
import Theory from "./pages/Theory.jsx";
import Playground from "./pages/Playground.jsx";

export default function App() {
  return (
    <div className="app">
      <Header />
      <div className="layout">
        <Sidebar />
        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/theory/:sectionId" element={<Theory />} />
            <Route path="/theory" element={<Navigate to="/theory/intro" replace />} />
            <Route path="/playground" element={<Playground />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}
