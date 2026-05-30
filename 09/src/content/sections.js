// Ordered section registry. Each section module exports a default block list.
import { intro } from './intro.js';
import { lineFitting } from './line.js';
import { polynomial } from './polynomial.js';
import { nonlinear } from './nonlinear.js';

export const sections = [intro, lineFitting, polynomial, nonlinear];

export const sectionIds = sections.map((s) => s.id);
