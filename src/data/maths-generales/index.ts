import type { ChapterContent } from './types'
import { chapterContent as remiseANiveau } from './remise-a-niveau'
import { chapterContent as etudeFonctions } from './etude-fonctions'
import { chapterContent as logarithme } from './logarithme'
import { chapterContent as exponentielle } from './exponentielle'
import { chapterContent as primitives } from './primitives'
import { chapterContent as calculIntegral } from './calcul-integral'
import { chapterContent as equationsDifferentielles } from './equations-differentielles'
import { chapterContent as suites } from './suites'
import { chapterContent as complexes } from './complexes'
import { chapterContent as matrices } from './matrices'

export type { ChapterContent }
export { type ContentBlock, type Section } from './types'

export interface Chapter {
  slug: string
  title: string
  icon: string
  description: string
  days: number[]
}

const allContents: ChapterContent[] = [
  remiseANiveau,
  etudeFonctions,
  logarithme,
  exponentielle,
  primitives,
  calculIntegral,
  equationsDifferentielles,
  suites,
  complexes,
  matrices,
]

export const chapterContents: Record<string, ChapterContent> = Object.fromEntries(
  allContents.map((c) => [c.slug, c])
)

export {
  remiseANiveau,
  etudeFonctions,
  logarithme,
  exponentielle,
  primitives,
  calculIntegral,
  equationsDifferentielles,
  suites,
  complexes,
  matrices,
}

export const mathsGeneralesChapters: Chapter[] = [
  {
    slug: 'remise-a-niveau',
    title: 'Remise à Niveau',
    icon: '🔧',
    description: 'Calculs de base, fractions, puissances, racines, dérivées',
    days: [1],
  },
  {
    slug: 'etude-fonctions',
    title: 'Étude de fonctions réelles',
    icon: '📈',
    description: 'Domaine, limites, dérivées, asymptotes, courbe',
    days: [2, 3],
  },
  {
    slug: 'logarithme',
    title: 'Fonction Logarithme Népérien',
    icon: '📊',
    description: 'Propriétés de ln, équations, limites',
    days: [4, 5],
  },
  {
    slug: 'exponentielle',
    title: 'Fonction Exponentielle',
    icon: '📉',
    description: 'Propriétés de exp, lien avec ln, limites',
    days: [6, 7],
  },
  {
    slug: 'primitives',
    title: 'Primitives',
    icon: '∫',
    description: 'Tableau des primitives, techniques de calcul',
    days: [8, 9],
  },
  {
    slug: 'calcul-integral',
    title: 'Calcul Intégral',
    icon: '📐',
    description: 'Intégrales définies, aires, IPP',
    days: [10, 11],
  },
  {
    slug: 'equations-differentielles',
    title: 'Équations Différentielles',
    icon: '🔄',
    description: '1er et 2nd ordre, résolution',
    days: [12, 13],
  },
  {
    slug: 'suites',
    title: 'Suites Numériques',
    icon: '🔢',
    description: 'Arithmétiques, géométriques, convergence',
    days: [15, 16],
  },
  {
    slug: 'complexes',
    title: 'Nombres Complexes',
    icon: '💠',
    description: 'Formes algébrique, trigo, exponentielle',
    days: [17, 18],
  },
  {
    slug: 'matrices',
    title: 'Calcul Matriciel',
    icon: '🧮',
    description: 'Opérations, déterminant, inverse, systèmes',
    days: [19, 20],
  },
]
