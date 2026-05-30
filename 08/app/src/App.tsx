import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import SectionCalculus from "./sections/SectionCalculus";
import SectionGolden from "./sections/SectionGolden";
import SectionSimplex from "./sections/SectionSimplex";
import SectionGradient from "./sections/SectionGradient";
import SectionLinSys from "./sections/SectionLinSys";
import SectionNewton from "./sections/SectionNewton";
import SectionQuasiNewton from "./sections/SectionQuasiNewton";

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <SectionCalculus />
        <SectionGolden />
        <SectionSimplex />
        <SectionGradient />
        <SectionLinSys />
        <SectionNewton />
        <SectionQuasiNewton />
      </main>
      <Footer />
    </>
  );
}
