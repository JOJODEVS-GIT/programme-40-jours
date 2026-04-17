export interface Sujet {
  id: string
  title: string
  type: 'maths-generales' | 'maths-appliquees' | 'complet'
  description: string
  duration: string
  dayNumber: number
}

export const sujets: Sujet[] = [
  // ═══════════════════════════════════════
  // MATHS GÉNÉRALES (5 sujets)
  // ═══════════════════════════════════════
  {
    id: 'mg-1',
    title: 'Sujet n°1 - Fonctions & Logarithme',
    type: 'maths-generales',
    description: 'Étude complète de fonction, domaine, limites, dérivées, tableau de variation. Propriétés de ln, équations logarithmiques.',
    duration: '2h',
    dayNumber: 5,
  },
  {
    id: 'mg-2',
    title: 'Sujet n°2 - Exponentielle & Primitives',
    type: 'maths-generales',
    description: 'Étude de fonctions avec exp, croissances comparées, calcul de primitives, techniques de décomposition.',
    duration: '2h',
    dayNumber: 9,
  },
  {
    id: 'mg-3',
    title: 'Sujet n°3 - Intégrales & Éq. Différentielles',
    type: 'maths-generales',
    description: 'Calcul intégral (aires, IPP), résolution d\'équations différentielles du 1er et 2nd ordre.',
    duration: '2h',
    dayNumber: 14,
  },
  {
    id: 'mg-4',
    title: 'Sujet n°4 - Suites & Complexes',
    type: 'maths-generales',
    description: 'Suites arithmétiques et géométriques, convergence. Nombres complexes : formes algébrique, trigonométrique, exponentielle.',
    duration: '2h',
    dayNumber: 18,
  },
  {
    id: 'mg-5',
    title: 'Sujet n°5 - Matrices & Synthèse',
    type: 'maths-generales',
    description: 'Calcul matriciel (opérations, déterminant, inverse), résolution de systèmes. Questions de synthèse sur tout le programme.',
    duration: '2h30',
    dayNumber: 21,
  },

  // ═══════════════════════════════════════
  // MATHS APPLIQUÉES (5 sujets)
  // ═══════════════════════════════════════
  {
    id: 'ma-1',
    title: 'Sujet n°1 - Numération & Conversions',
    type: 'maths-appliquees',
    description: 'Conversions entre bases (binaire, octal, décimal, hexa), divisions successives, regroupement de bits.',
    duration: '1h',
    dayNumber: 23,
  },
  {
    id: 'ma-2',
    title: 'Sujet n°2 - Codes BCD, Gray & Complément à 2',
    type: 'maths-appliquees',
    description: 'Codage BCD, conversions binaire/Gray, représentation des nombres signés en complément à 2, addition binaire.',
    duration: '1h',
    dayNumber: 23,
  },
  {
    id: 'ma-3',
    title: 'Sujet n°3 - Portes logiques & Algèbre de Boole',
    type: 'maths-appliquees',
    description: 'Tables de vérité des 6 portes, propriétés de Boole, lois de De Morgan, simplification algébrique.',
    duration: '1h30',
    dayNumber: 27,
  },
  {
    id: 'ma-4',
    title: 'Sujet n°4 - Karnaugh & Simplification',
    type: 'maths-appliquees',
    description: 'Tableaux de Karnaugh à 3 et 4 variables, groupements, simplification d\'expressions booléennes complètes.',
    duration: '1h30',
    dayNumber: 27,
  },
  {
    id: 'ma-5',
    title: 'Sujet n°5 - Circuits Combinatoires',
    type: 'maths-appliquees',
    description: 'Additionneurs, comparateurs, MUX/DEMUX, codeurs/décodeurs. Conception de circuits en 4 étapes.',
    duration: '1h30',
    dayNumber: 30,
  },

  // ═══════════════════════════════════════
  // SUJETS COMPLETS (5 sujets)
  // ═══════════════════════════════════════
  {
    id: 'sc-1',
    title: 'Sujet Blanc n°1 - Analyse + Codification',
    type: 'complet',
    description: 'Partie A : Étude de fonction avec ln. Partie B : Conversions de bases et codage BCD/Gray.',
    duration: '3h',
    dayNumber: 32,
  },
  {
    id: 'sc-2',
    title: 'Sujet Blanc n°2 - Exp/Intégrales + Logique',
    type: 'complet',
    description: 'Partie A : Fonction exponentielle, calcul de primitives et intégrales. Partie B : Algèbre de Boole et Karnaugh.',
    duration: '3h',
    dayNumber: 34,
  },
  {
    id: 'sc-3',
    title: 'Sujet Blanc n°3 - Éq. Diff/Suites + Circuits',
    type: 'complet',
    description: 'Partie A : Équations différentielles et suites numériques. Partie B : Conception de circuits combinatoires (MUX, décodeur).',
    duration: '3h',
    dayNumber: 36,
  },
  {
    id: 'sc-4',
    title: 'Sujet Blanc n°4 - Complexes/Matrices + Logique',
    type: 'complet',
    description: 'Partie A : Nombres complexes et calcul matriciel. Partie B : Simplification Karnaugh et implémentation avec MUX.',
    duration: '3h',
    dayNumber: 38,
  },
  {
    id: 'sc-5',
    title: 'Examen Final - Sujet Complet Type DT IMI',
    type: 'complet',
    description: 'Sujet de synthèse couvrant l\'ensemble du programme : analyse, algèbre, numération, logique et circuits. Conditions réelles d\'examen.',
    duration: '3h30',
    dayNumber: 40,
  },
]
