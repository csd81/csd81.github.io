import { Hero } from './sections/Hero';
import { ComputationFlow } from './sections/ComputationFlow';
import { TruncationError } from './sections/TruncationError';
import { Conditioning } from './sections/Conditioning';
import { AlgorithmStability } from './sections/AlgorithmStability';
import { Complexity } from './sections/Complexity';
import { IntegerRep } from './sections/IntegerRep';
import { FloatExplorer } from './sections/FloatExplorer';
import { MachineNumbers } from './sections/MachineNumbers';
import { ErrorBasics } from './sections/ErrorBasics';
import { ErrorPropagation } from './sections/ErrorPropagation';
import { FloatingConsequences } from './sections/FloatingConsequences';
import { Glossary } from './sections/Glossary';
import { Quiz } from './sections/Quiz';
import { useLang } from './context/LangContext';
import './styles/global.css';

/**
 * Chapter 1 — Introduction. Ported from 01/na-chapter1-app. The original app's
 * top Nav (with its own lang/theme toggles) is dropped in favour of the unified
 * shell nav; the scroll sections and their anchor ids are kept intact.
 */
export default function Chapter() {
  const { t } = useLang();
  return (
    <div className="ch-introduction">
      <Hero />
      <ComputationFlow />
      <TruncationError />
      <Conditioning />
      <AlgorithmStability />
      <Complexity />
      <IntegerRep />
      <FloatExplorer />
      <MachineNumbers />
      <ErrorBasics />
      <ErrorPropagation />
      <FloatingConsequences />
      <Glossary />
      <Quiz />
      <footer className="footer">{t('footer.text')}</footer>
    </div>
  );
}
