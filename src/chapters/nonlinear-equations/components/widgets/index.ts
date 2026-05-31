import type { ComponentType } from 'react'
import { IVTExplorer } from './IVTExplorer'
import { CobwebPlot } from './CobwebPlot'
import { BisectionStepper } from './BisectionStepper'
import { FalsePositionStepper } from './FalsePositionStepper'
import { NewtonStepper } from './NewtonStepper'
import { SecantStepper } from './SecantStepper'
import { ConvergencePlot } from './ConvergencePlot'
import { StoppingCriteriaLab } from './StoppingCriteriaLab'
import { GradientExplorer } from './GradientExplorer'
import { NormBall } from './NormBall'
import { FixedPoint2D } from './FixedPoint2D'
import { Newton2DPlot } from './Newton2DPlot'
import { BroydenVsNewton } from './BroydenVsNewton'
import { Glossary } from './Glossary'
import { Flashcards } from './Flashcards'
import { GlossaryFPI } from './GlossaryFPI'
import { FlashcardsFPI } from './FlashcardsFPI'
import { GlossaryBisection } from './GlossaryBisection'
import { FlashcardsBisection } from './FlashcardsBisection'
import { GlossaryRegula } from './GlossaryRegula'
import { FlashcardsRegula } from './FlashcardsRegula'
import { GlossaryStopping } from './GlossaryStopping'
import { FlashcardsStopping } from './FlashcardsStopping'
import { GlossaryNewton } from './GlossaryNewton'
import { FlashcardsNewton } from './FlashcardsNewton'
import { GlossarySecant } from './GlossarySecant'
import { FlashcardsSecant } from './FlashcardsSecant'
import { GlossaryConv } from './GlossaryConv'
import { FlashcardsConv } from './FlashcardsConv'
import { GlossaryMV } from './GlossaryMV'
import { FlashcardsMV } from './FlashcardsMV'
import { GlossaryNorms } from './GlossaryNorms'
import { FlashcardsNorms } from './FlashcardsNorms'
import { GlossaryNDNewton } from './GlossaryNDNewton'
import { FlashcardsNDNewton } from './FlashcardsNDNewton'
import { GlossaryBroyden } from './GlossaryBroyden'
import { FlashcardsBroyden } from './FlashcardsBroyden'

/** Registry of chapter-2 interactive widgets, keyed by the names used in content/sections.ts. */
export const WIDGETS = {
  IVTExplorer,
  CobwebPlot,
  BisectionStepper,
  FalsePositionStepper,
  NewtonStepper,
  SecantStepper,
  ConvergencePlot,
  StoppingCriteriaLab,
  GradientExplorer,
  NormBall,
  FixedPoint2D,
  Newton2DPlot,
  BroydenVsNewton,
  Glossary,
  Flashcards,
  GlossaryFPI,
  FlashcardsFPI,
  GlossaryBisection,
  FlashcardsBisection,
  GlossaryRegula,
  FlashcardsRegula,
  GlossaryStopping,
  FlashcardsStopping,
  GlossaryNewton,
  FlashcardsNewton,
  GlossarySecant,
  FlashcardsSecant,
  GlossaryConv,
  FlashcardsConv,
  GlossaryMV,
  FlashcardsMV,
  GlossaryNorms,
  FlashcardsNorms,
  GlossaryNDNewton,
  FlashcardsNDNewton,
  GlossaryBroyden,
  FlashcardsBroyden,
} satisfies Record<string, ComponentType>

export type WidgetName = keyof typeof WIDGETS
