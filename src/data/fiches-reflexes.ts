export interface FormulaEntry {
  func: string
  result: string
  note?: string
}

export interface ErrorEntry {
  number: number
  title: string
  description: string
  wrong?: string
  correct?: string
  tip: string
}

export interface TipEntry {
  number: number
  title: string
  content: string
  category: 'before' | 'during-general' | 'during-applied' | 'end'
}

// ── Tableau des dérivées ──

export const derivees: FormulaEntry[] = [
  { func: 'k', result: '0' },
  { func: 'x', result: '1' },
  { func: 'x^n', result: 'nx^{n-1}' },
  { func: '\\frac{1}{x}', result: '-\\frac{1}{x^2}' },
  { func: '\\sqrt{x}', result: '\\frac{1}{2\\sqrt{x}}' },
  { func: '\\ln(x)', result: '\\frac{1}{x}' },
  { func: 'e^x', result: 'e^x' },
  { func: '\\cos(x)', result: '-\\sin(x)' },
  { func: '\\sin(x)', result: '\\cos(x)' },
]

// ── Règles de dérivation ──

export const reglesDerivation: string[] = [
  "(u+v)' = u' + v'",
  "(ku)' = ku'",
  "(uv)' = u'v + uv'",
  "\\left(\\frac{u}{v}\\right)' = \\frac{u'v - uv'}{v^2}",
  "[f(g(x))]' = g'(x) \\times f'(g(x))",
]

// ── Propriétés de ln ──

export const lnFormulas: string[] = [
  '\\ln(1) = 0 \\qquad \\ln(e) = 1',
  '\\ln(ab) = \\ln a + \\ln b',
  '\\ln\\left(\\frac{a}{b}\\right) = \\ln a - \\ln b',
  '\\ln(a^n) = n\\ln a',
  '\\ln(\\sqrt{a}) = \\frac{\\ln a}{2}',
  '\\ln\\left(\\frac{1}{a}\\right) = -\\ln a',
]

// ── Propriétés de exp ──

export const expFormulas: string[] = [
  'e^0 = 1 \\qquad e^1 = e \\approx 2{,}718',
  'e^{a+b} = e^a \\times e^b',
  'e^{a-b} = \\frac{e^a}{e^b}',
  'e^{na} = (e^a)^n',
  'e^{-a} = \\frac{1}{e^a}',
]

// ── Limites fondamentales ──

export const limites: { limit: string; result: string; tip: string }[] = [
  {
    limit: '\\lim_{x \\to +\\infty} e^x',
    result: '+\\infty',
    tip: 'exp explose en +\u221e',
  },
  {
    limit: '\\lim_{x \\to -\\infty} e^x',
    result: '0',
    tip: "exp s'\u00e9crase en -\u221e",
  },
  {
    limit: '\\lim_{x \\to +\\infty} \\ln x',
    result: '+\\infty',
    tip: 'ln monte doucement',
  },
  {
    limit: '\\lim_{x \\to 0^+} \\ln x',
    result: '-\\infty',
    tip: 'ln plonge en 0',
  },
  {
    limit: '\\lim_{x \\to +\\infty} \\frac{\\ln x}{x}',
    result: '0',
    tip: 'ln est LENT compar\u00e9 \u00e0 x',
  },
  {
    limit: '\\lim_{x \\to 0^+} x\\ln x',
    result: '0',
    tip: 'x gagne contre ln',
  },
  {
    limit: '\\lim_{x \\to +\\infty} \\frac{e^x}{x^n}',
    result: '+\\infty',
    tip: 'exp DOMINE tout polyn\u00f4me',
  },
  {
    limit: '\\lim_{x \\to -\\infty} x \\cdot e^x',
    result: '0',
    tip: 'exp gagne contre x',
  },
]

// ── Tableau des primitives ──

export const primitives: FormulaEntry[] = [
  { func: 'x^n', result: '\\frac{x^{n+1}}{n+1}', note: 'Polyn\u00f4mes' },
  { func: '\\frac{1}{x}', result: '\\ln|x|', note: '' },
  { func: 'e^x', result: 'e^x', note: 'Direct' },
  { func: "\\frac{u'}{u}", result: '\\ln|u|', note: '' },
  { func: "u' \\cdot e^u", result: 'e^u', note: "d\u00e9riv\u00e9e de l'exposant" },
  { func: "u' \\cdot u^n", result: '\\frac{u^{n+1}}{n+1}', note: 'd\u00e9riv\u00e9e de la base' },
  { func: '\\cos x', result: '\\sin x', note: '' },
  { func: '\\sin x', result: '-\\cos x', note: 'Attention au signe !' },
]

// ── Formules d'intégration ──

export const integraleFormulas: string[] = [
  '\\int_a^b f(x)\\,dx = F(b) - F(a)',
  "\\text{IPP : } \\int_a^b u \\cdot v' = [u \\cdot v]_a^b - \\int_a^b u' \\cdot v",
  '\\text{Aire} = \\left|\\int_a^b f(x)\\,dx\\right|',
]

// ── Équations différentielles ──

export const eqDiffFormulas: { type: string; solution: string }[] = [
  { type: "y' = ay", solution: 'y = Ce^{ax}' },
  { type: "y' = ay + b", solution: 'y = Ce^{ax} - \\frac{b}{a}' },
  { type: "y' + ay = 0", solution: 'y = Ce^{-ax}' },
  {
    type: "ay'' + by' + cy = 0",
    solution: '\\text{Selon } \\Delta \\text{ de } ar^2+br+c=0',
  },
]

export const eqDiff2ndOrder: { cas: string; solution: string }[] = [
  { cas: '\\Delta > 0', solution: 'y = Ae^{r_1x} + Be^{r_2x}' },
  { cas: '\\Delta = 0', solution: 'y = (Ax+B)e^{r_0x}' },
  {
    cas: '\\Delta < 0',
    solution: 'y = e^{\\alpha x}[A\\cos(\\beta x) + B\\sin(\\beta x)]',
  },
]

// ── Suites ──

export const suitesFormulas: string[] = [
  '\\text{Arithm\u00e9tique : } u_n = u_0 + nr \\qquad S = \\frac{(n+1)(u_0 + u_n)}{2}',
  '\\text{G\u00e9om\u00e9trique : } u_n = u_0 \\cdot q^n \\qquad S = u_0 \\cdot \\frac{1 - q^{n+1}}{1 - q}',
]

// ── Nombres complexes ──

export const complexesFormulas: string[] = [
  'i^2 = -1 \\qquad |z| = \\sqrt{a^2+b^2} \\qquad z \\cdot \\bar{z} = |z|^2',
  'e^{i\\theta} = \\cos\\theta + i\\sin\\theta \\quad \\text{(Euler)}',
  '(\\cos\\theta + i\\sin\\theta)^n = \\cos(n\\theta) + i\\sin(n\\theta) \\quad \\text{(Moivre)}',
]

// ── Matrices ──

export const matricesFormulas: string[] = [
  '\\det\\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix} = ad - bc',
  'A^{-1} = \\frac{1}{\\det(A)} \\begin{pmatrix} d & -b \\\\ -c & a \\end{pmatrix}',
  'AX = B \\Rightarrow X = A^{-1}B',
]

// ── Valeurs trigonométriques ──

export const trigoValues: { angle: string; cos: string; sin: string }[] = [
  { angle: '0', cos: '1', sin: '0' },
  { angle: '\\frac{\\pi}{6}', cos: '\\frac{\\sqrt{3}}{2}', sin: '\\frac{1}{2}' },
  {
    angle: '\\frac{\\pi}{4}',
    cos: '\\frac{\\sqrt{2}}{2}',
    sin: '\\frac{\\sqrt{2}}{2}',
  },
  { angle: '\\frac{\\pi}{3}', cos: '\\frac{1}{2}', sin: '\\frac{\\sqrt{3}}{2}' },
  { angle: '\\frac{\\pi}{2}', cos: '0', sin: '1' },
]

// ── 10 erreurs fréquentes ──

export const erreurs: ErrorEntry[] = [
  {
    number: 1,
    title: 'Oublier le domaine de d\u00e9finition',
    description:
      "AVANT toute \u00e9tude de fonction, \u00e9crire le domaine de d\u00e9finition.",
    tip: 'ln(g(x)): g(x)>0 | A/B: B\u22600 | \u221ag(x): g(x)\u22650',
  },
  {
    number: 2,
    title: 'Les fausses propri\u00e9t\u00e9s de ln',
    description: 'ln(a+b) \u2260 ln(a) + ln(b)',
    wrong: '\\ln(a+b) = \\ln a + \\ln b',
    correct: '\\ln(a \\times b) = \\ln a + \\ln b',
    tip: 'ln transforme les \u00d7 en +, pas les + en +',
  },
  {
    number: 3,
    title: 'Les fausses propri\u00e9t\u00e9s de exp',
    description: 'e^(a+b) \u2260 e^a + e^b',
    wrong: 'e^{a+b} = e^a + e^b',
    correct: 'e^{a+b} = e^a \\times e^b',
    tip: 'exp transforme les + en \u00d7',
  },
  {
    number: 4,
    title: 'Oublier la constante C',
    description:
      "Primitive: F(x)+C TOUJOURS. \u00c9q. diff.: solution avec C. Int\u00e9grale d\u00e9finie: PAS de C.",
    tip: 'Primitive \u2192 +C | \u00c9q.diff \u2192 trouver C | Int\u00e9grale \u2192 F(b)-F(a)',
  },
  {
    number: 5,
    title: 'Se tromper de signe dans les limites',
    description: 'Attention aux limites en -\u221e et en 0',
    tip: 'lim e^x en -\u221e = 0 (PAS +\u221e) | lim ln(x) en 0+ = -\u221e (PAS 0)',
  },
  {
    number: 6,
    title: 'Oublier de conclure',
    description: 'Le correcteur ATTEND une phrase de conclusion',
    tip: "Toujours \u00e9crire: 'Donc f est croissante sur...' ou 'Donc S = {...}'",
  },
  {
    number: 7,
    title: "Se tromper dans la d\u00e9riv\u00e9e d'un quotient",
    description: 'Retiens HDB-HDB',
    tip: 'Haut D\u00e9riv\u00e9 \u00d7 Bas - Haut \u00d7 Bas D\u00e9riv\u00e9, sur Bas\u00b2',
  },
  {
    number: 8,
    title: "Conversions de base - lire les restes \u00e0 l'envers",
    description: 'Les restes se lisent de BAS en HAUT',
    tip: 'V\u00e9rifie toujours en reconvertissant en d\u00e9cimal',
  },
  {
    number: 9,
    title: "Table de Karnaugh - l'ordre des colonnes",
    description:
      "L'ordre est 00, 01, 11, 10 (code Gray, PAS binaire naturel)",
    tip: 'Si tu mets 00, 01, 10, 11 \u2192 tout est FAUX',
  },
  {
    number: 10,
    title: 'Confondre MUX et DEMUX',
    description:
      'MUX = plusieurs \u2192 1 (il choisit) | DEMUX = 1 \u2192 plusieurs (il distribue)',
    tip: 'Codeur = beaucoup\u2192peu | D\u00e9codeur = peu\u2192beaucoup',
  },
]

// ── 15 astuces d'examen ──

export const astuces: TipEntry[] = [
  {
    number: 1,
    title: 'La veille, relis SEULEMENT les fiches',
    content: "Pas de nouveaux exercices la veille. Juste les formules.",
    category: 'before',
  },
  {
    number: 2,
    title: 'Pr\u00e9pare tes affaires la veille',
    content:
      '2 stylos, crayon, gomme, r\u00e8gle, calculatrice, carte \u00e9tudiant, eau.',
    category: 'before',
  },
  {
    number: 3,
    title: 'Dors 8h minimum',
    content: "Un cerveau fatigu\u00e9 fait 2x plus d'erreurs.",
    category: 'before',
  },
  {
    number: 4,
    title: "Lis TOUT le sujet d'abord (5 min)",
    content:
      'Rep\u00e8re les exercices faciles, les questions gratuites, les questions difficiles.',
    category: 'before',
  },
  {
    number: 5,
    title: 'Commence par les Maths Appliqu\u00e9es',
    content:
      'Plus m\u00e9caniques et rapides. S\u00e9curise des points faciles.',
    category: 'during-applied',
  },
  {
    number: 6,
    title: 'Num\u00e9rote clairement chaque question',
    content:
      "Le correcteur met 0 s'il ne trouve pas ta r\u00e9ponse.",
    category: 'during-general',
  },
  {
    number: 7,
    title: '\u00c9tude de fonction = 6 \u00e9tapes',
    content:
      'Df \u2192 Limites \u2192 f\'(x) \u2192 Tableau \u2192 Points \u2192 Courbe',
    category: 'during-general',
  },
  {
    number: 8,
    title: 'Gratte des points m\u00eame sans tout savoir',
    content:
      '\u00c9cris Df et limites m\u00eame sans la d\u00e9riv\u00e9e = 2-3 points',
    category: 'during-general',
  },
  {
    number: 9,
    title: "Pour les primitives, cherche u'",
    content:
      "Num\u00e9rateur = d\u00e9riv\u00e9e d\u00e9nominateur \u2192 ln|u|. Facteur = d\u00e9riv\u00e9e exposant \u2192 e^u",
    category: 'during-general',
  },
  {
    number: 10,
    title: '\u00c9q. diff: identifie a et b imm\u00e9diatement',
    content: "R\u00e9\u00e9cris sous la forme y' = ay + b",
    category: 'during-general',
  },
  {
    number: 11,
    title: 'Conversions de base - v\u00e9rifie toujours',
    content:
      "Reconvertis dans l'autre sens. 25\u219211001\u219216+8+1=25 \u2713",
    category: 'during-applied',
  },
  {
    number: 12,
    title: 'Karnaugh: commence par les plus grands groupes',
    content: 'Cherche groupes de 8, puis 4, puis 2, puis 1.',
    category: 'during-applied',
  },
  {
    number: 13,
    title: 'Circuits: dessine TOUJOURS la table de v\u00e9rit\u00e9',
    content:
      "M\u00eame si on demande directement le circuit. C'est des points.",
    category: 'during-applied',
  },
  {
    number: 14,
    title: 'Garde 15 min pour relire',
    content:
      'V\u00e9rifie: signes, domaines, conclusions, encadrements, conversions.',
    category: 'end',
  },
  {
    number: 15,
    title: 'Encadre TOUS tes r\u00e9sultats finaux',
    content:
      'Un r\u00e9sultat encadr\u00e9 se voit. Un r\u00e9sultat perdu = risque de 0.',
    category: 'end',
  },
]
