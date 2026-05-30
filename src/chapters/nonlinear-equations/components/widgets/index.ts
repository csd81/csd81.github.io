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
} satisfies Record<string, ComponentType>

export type WidgetName = keyof typeof WIDGETS
