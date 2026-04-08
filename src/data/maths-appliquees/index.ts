import type { Chapter } from '../maths-generales'
import type { ChapterContent } from '../maths-generales/types'
import { codificationContent } from './codification'
import { logiqueContent } from './logique'
import { circuitsContent } from './circuits'

export type { Chapter, ChapterContent }
export { type ContentBlock, type Section } from '../maths-generales/types'

const allContents: ChapterContent[] = [codificationContent, logiqueContent, circuitsContent]

export const chapterContents: Record<string, ChapterContent> = Object.fromEntries(
  allContents.map((c) => [c.slug, c])
)

export const mathsAppliqueesChapters: Chapter[] = [
  {
    slug: 'codification',
    title: "Codification de l'Information",
    icon: '💻',
    description: 'Systèmes de numération, BCD, Gray, ASCII',
    days: [22, 23],
  },
  {
    slug: 'logique',
    title: "Logique du Traitement de l'Information",
    icon: '🔀',
    description: 'Portes logiques, Boole, Karnaugh',
    days: [24, 25, 26, 27],
  },
  {
    slug: 'circuits',
    title: 'Circuits Électroniques',
    icon: '⚡',
    description: 'Additionneurs, multiplexeurs, codeurs/décodeurs',
    days: [28, 29, 30],
  },
]
