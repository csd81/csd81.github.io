import { Nav } from './components/Nav'
import { Hero } from './sections/Hero'
import { ComputationFlow } from './sections/ComputationFlow'
import { TruncationError } from './sections/TruncationError'
import { Conditioning } from './sections/Conditioning'
import { AlgorithmStability } from './sections/AlgorithmStability'
import { Complexity } from './sections/Complexity'
import { IntegerRep } from './sections/IntegerRep'
import { FloatExplorer } from './sections/FloatExplorer'
import { MachineNumbers } from './sections/MachineNumbers'
import { ErrorBasics } from './sections/ErrorBasics'
import { ErrorPropagation } from './sections/ErrorPropagation'
import { FloatingConsequences } from './sections/FloatingConsequences'
import { Quiz } from './sections/Quiz'
import { useLang } from './context/LangContext'

export default function App() {
  const { t } = useLang()
  return (
    <>
      <Nav />
      <main className="app-main">
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
        <Quiz />
        <footer className="footer">{t('footer.text')}</footer>
      </main>
    </>
  )
}
