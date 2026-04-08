export interface SOSSituation {
  number: number
  title: string
  steps: string[]
}

export const sosSituations: SOSSituation[] = [
  {
    number: 1,
    title: 'Je ne comprends RIEN au chapitre',
    steps: [
      'STOP. Ne force pas.',
      'Relis la page Remise \u00e0 Niveau. Souvent le blocage vient des bases.',
      'Relis SEULEMENT les Notions essentielles du chapitre.',
      'Prends une feuille et recopie les formules \u00e0 la main.',
      "Regarde l'exemple corrig\u00e9 ligne par ligne.",
      "Essaie l'exercice 1. Si tu bloques apr\u00e8s 10 min, regarde la correction.",
      "Refais l'exercice 1 seul le lendemain matin.",
    ],
  },
  {
    number: 2,
    title: 'Je comprends le cours mais je bloque sur les exercices',
    steps: [
      "C'est NORMAL. Le probl\u00e8me est le passage cours \u2192 application.",
      'Relis la section M\u00e9thode du chapitre.',
      "Regarde l'exemple corrig\u00e9 en masquant la correction.",
      'Les exercices suivent TOUJOURS le m\u00eame sch\u00e9ma.',
      "Entra\u00eene-toi sur des exercices plus simples avant de refaire l'exercice type examen.",
    ],
  },
  {
    number: 3,
    title: 'Je suis en retard sur le planning',
    steps: [
      'Pas de panique !',
      "Si 20 jours restants : \u00c9tude de fonctions + Primitives/Int\u00e9grales + Codification + Logique/Karnaugh (60% de l'examen)",
      'Si 10 jours restants : Fiches R\u00e9flexes + \u00c9tude de fonctions (6 \u00e9tapes) + Conversions/Karnaugh + 2 sujets complets',
    ],
  },
  {
    number: 4,
    title: "Je n'ai pas la motivation",
    steps: [
      'La douleur de la discipline est toujours plus faible que la douleur du regret.',
      "Tu n'as pas besoin de g\u00e9rer 40 jours. Juste AUJOURD'HUI.",
      'Technique Pomodoro : 25 min travail, 5 min pause. Apr\u00e8s 4 cycles = 2h.',
      "Ceux qui r\u00e9ussissent ne sont pas les plus talentueux. Ce sont ceux qui n'ont pas l\u00e2ch\u00e9.",
    ],
  },
  {
    number: 5,
    title: "Le jour de l'examen, je suis stress\u00e9",
    steps: [
      'Dors 8h, mange bien, arrive 15 min en avance.',
      'Respire : 4s inspiration, 4s expiration, 5 fois.',
      'Lis TOUT le sujet (5 min). Identifie les exercices faciles.',
      'Si tu bloques > 5 min : passe et reviens \u00e0 la fin.',
      'Garde 15 min pour relire. Encadre tous tes r\u00e9sultats.',
    ],
  },
]

export const motivationQuotes: string[] = [
  "La seule diff\u00e9rence entre toi et ceux qui r\u00e9ussissent, c'est qu'ils ont commenc\u00e9.",
  'Un voyage de mille kilom\u00e8tres commence par un seul pas.',
  'Chaque jour coch\u00e9 te rapproche du 12/20.',
  "Tu n'as pas besoin de g\u00e9rer 40 jours. Tu as juste besoin de g\u00e9rer AUJOURD'HUI.",
  "Le succ\u00e8s n'est pas un sprint, c'est une s\u00e9rie de petits pas.",
  "Dans 40 jours, tu seras content d'avoir commenc\u00e9 aujourd'hui.",
  "Ceux qui r\u00e9ussissent ne sont pas ceux qui ont le plus de talent. Ce sont ceux qui n'ont pas l\u00e2ch\u00e9.",
  'La douleur de la discipline est toujours plus faible que la douleur du regret.',
  "Chaque exercice fait est un point de plus \u00e0 l'examen.",
  'Tu as travaill\u00e9 pour \u00e7a. Tu m\u00e9rites ta r\u00e9ussite.',
]
