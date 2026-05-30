import Hero from './components/Hero';
import Footer from './components/Footer';
import SectionCalculus from './sections/SectionCalculus';
import SectionGolden from './sections/SectionGolden';
import SectionSimplex from './sections/SectionSimplex';
import SectionGradient from './sections/SectionGradient';
import SectionLinSys from './sections/SectionLinSys';
import SectionNewton from './sections/SectionNewton';
import SectionQuasiNewton from './sections/SectionQuasiNewton';
import './styles/global.css';

/**
 * Chapter 8 — Minimization. Ported from 08/app. The original top Nav (its own
 * lang/theme toggles) is dropped for the unified shell nav; the scrollytelling
 * sections and footer are kept.
 */
export default function Chapter() {
  return (
    <div className="ch-minimization">
      <Hero />
      <SectionCalculus />
      <SectionGolden />
      <SectionSimplex />
      <SectionGradient />
      <SectionLinSys />
      <SectionNewton />
      <SectionQuasiNewton />
      <Footer />
    </div>
  );
}
