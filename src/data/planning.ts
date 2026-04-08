export interface Day {
  dayNumber: number
  title: string
  tasks: string[]
  phase: 1 | 2 | 3 | 4
  motivation: string
  chapterSlug?: string
}

export interface Phase {
  number: 1 | 2 | 3 | 4
  title: string
  description: string
  days: [number, number]
  color: string
}

export const phases: Phase[] = [
  {
    number: 1,
    title: 'Remise à niveau + Analyse',
    description:
      'Consolider les bases mathématiques et maîtriser l\'analyse : fonctions, logarithmes, exponentielles, primitives, intégrales et équations différentielles.',
    days: [1, 13],
    color: 'blue',
  },
  {
    number: 2,
    title: 'Compléter Maths Générales',
    description:
      'Suites, nombres complexes, matrices et premier sujet complet de Maths Générales.',
    days: [14, 21],
    color: 'purple',
  },
  {
    number: 3,
    title: 'Maths Appliquées',
    description:
      'Numération, codification, logique combinatoire, algèbre de Boole, Karnaugh et circuits électroniques.',
    days: [22, 31],
    color: 'green',
  },
  {
    number: 4,
    title: 'Entraînement Intensif',
    description:
      'Sujets d\'examen en conditions réelles, corrections ciblées, fiches de révision et stratégie le jour J.',
    days: [32, 40],
    color: 'orange',
  },
]

export const days: Day[] = [
  // ── Phase 1 : Remise à niveau + Analyse (J1-J13) ──
  {
    dayNumber: 1,
    title: 'Remise à niveau',
    tasks: [
      'Revoir les fractions : addition, multiplication, division',
      'Puissances et racines carrées : règles de calcul',
      'Factorisations et développements',
      'Rappels sur les dérivées : définition et formules de base',
      'Exercices de calcul rapide (10 exercices minimum)',
    ],
    phase: 1,
    motivation: 'La seule différence entre toi et ceux qui réussissent, c\'est qu\'ils ont commencé.',
    chapterSlug: 'remise-a-niveau',
  },
  {
    dayNumber: 2,
    title: 'Étude de fonctions P1',
    tasks: [
      'Déterminer le domaine de définition d\'une fonction',
      'Calculer les limites aux bornes du domaine',
      'Calculer la dérivée f\'(x)',
      'Dresser le tableau de variations',
      'Exercice guidé : étude complète d\'une fonction polynôme',
    ],
    phase: 1,
    motivation: 'Un voyage de mille kilomètres commence par un seul pas.',
    chapterSlug: 'etude-fonctions',
  },
  {
    dayNumber: 3,
    title: 'Étude de fonctions P2',
    tasks: [
      'Déterminer les asymptotes (horizontales, verticales, obliques)',
      'Tracer la courbe représentative',
      'Interpréter graphiquement les résultats',
      'Exercice type examen : étude complète avec asymptotes et courbe',
    ],
    phase: 1,
    motivation: 'Chaque jour coché te rapproche du 12/20.',
    chapterSlug: 'etude-fonctions',
  },
  {
    dayNumber: 4,
    title: 'Logarithme P1',
    tasks: [
      'Définition de ln : ln(x) est défini pour x > 0',
      'Propriétés fondamentales : ln(ab), ln(a/b), ln(a^n)',
      'Résoudre des équations avec ln',
      'Résoudre des inéquations avec ln',
      'Exercices d\'application directe (5 minimum)',
    ],
    phase: 1,
    motivation: 'Tu n\'as pas besoin de gérer 40 jours. Tu as juste besoin de gérer AUJOURD\'HUI.',
    chapterSlug: 'logarithme',
  },
  {
    dayNumber: 5,
    title: 'Logarithme P2',
    tasks: [
      'Dérivée de ln(u(x)) : u\'(x)/u(x)',
      'Limites fondamentales avec ln : ln(x)/x, x·ln(x)',
      'Étude de fonction avec ln',
      'Exercice type examen avec ln',
    ],
    phase: 1,
    motivation: 'Le succès n\'est pas un sprint, c\'est une série de petits pas.',
    chapterSlug: 'logarithme',
  },
  {
    dayNumber: 6,
    title: 'Exponentielle P1',
    tasks: [
      'Définition de exp : fonction réciproque de ln',
      'Propriétés : e^(a+b), e^(a-b), e^(na)',
      'Lien ln ↔ exp : e^(ln x) = x, ln(e^x) = x',
      'Résoudre des équations avec exp',
      'Exercices d\'application directe',
    ],
    phase: 1,
    motivation: 'Dans 40 jours, tu seras content d\'avoir commencé aujourd\'hui.',
    chapterSlug: 'exponentielle',
  },
  {
    dayNumber: 7,
    title: 'Exponentielle P2',
    tasks: [
      'Dérivée de e^(u(x)) : u\'(x)·e^(u(x))',
      'Limites fondamentales avec exp : e^x/x^n, x·e^x',
      'Croissances comparées : exp domine tout polynôme',
      'Exercice type examen avec exp',
    ],
    phase: 1,
    motivation: 'Ceux qui réussissent ne sont pas ceux qui ont le plus de talent. Ce sont ceux qui n\'ont pas lâché.',
    chapterSlug: 'exponentielle',
  },
  {
    dayNumber: 8,
    title: 'Primitives P1',
    tasks: [
      'Apprendre le tableau des primitives usuelles',
      'Primitive de u\'/u → ln|u|',
      'Primitive de u\'·e^u → e^u',
      'Primitive de u\'·u^n → u^(n+1)/(n+1)',
      'Exercices : trouver la primitive de 10 fonctions',
    ],
    phase: 1,
    motivation: 'La douleur de la discipline est toujours plus faible que la douleur du regret.',
    chapterSlug: 'primitives',
  },
  {
    dayNumber: 9,
    title: 'Primitives P2',
    tasks: [
      'Ne pas oublier la constante C dans les primitives',
      'Déterminer C avec une condition initiale',
      'Révision des techniques vues en P1',
      'Exercices variés de calcul de primitives',
    ],
    phase: 1,
    motivation: 'Chaque exercice fait est un point de plus à l\'examen.',
    chapterSlug: 'primitives',
  },
  {
    dayNumber: 10,
    title: 'Calcul intégral P1',
    tasks: [
      'Définition de l\'intégrale définie : ∫[a,b] f(x) dx = F(b) - F(a)',
      'Propriétés : linéarité, Chasles, positivité',
      'Calculs d\'intégrales simples (polynômes, exp, ln)',
      'Exercices de calcul direct (8 minimum)',
    ],
    phase: 1,
    motivation: 'Tu as travaillé pour ça. Tu mérites ta réussite.',
    chapterSlug: 'calcul-integral',
  },
  {
    dayNumber: 11,
    title: 'Calcul intégral P2',
    tasks: [
      'Calcul d\'aires entre courbes et axe des x',
      'Intégration par parties (IPP) : ∫u·v\' = [u·v] - ∫u\'·v',
      'Quand utiliser IPP : x·e^x, x·ln(x), etc.',
      'Exercice type examen avec intégrales',
    ],
    phase: 1,
    motivation: 'La seule différence entre toi et ceux qui réussissent, c\'est qu\'ils ont commencé.',
    chapterSlug: 'calcul-integral',
  },
  {
    dayNumber: 12,
    title: 'Équations différentielles P1',
    tasks: [
      'Résoudre y\' = ay → y = Ce^(ax)',
      'Résoudre y\' = ay + b → y = Ce^(ax) - b/a',
      'Déterminer C avec une condition initiale',
      'Exercices de résolution (5 minimum)',
    ],
    phase: 1,
    motivation: 'Un voyage de mille kilomètres commence par un seul pas.',
    chapterSlug: 'equations-differentielles',
  },
  {
    dayNumber: 13,
    title: 'Équations différentielles P2',
    tasks: [
      'Équations du 2nd ordre : ay\'\' + by\' + cy = 0',
      'Écrire l\'équation caractéristique : ar² + br + c = 0',
      'Cas Δ > 0, Δ = 0, Δ < 0 : formes des solutions',
      'Exercice type examen avec éq. diff. du 2nd ordre',
    ],
    phase: 1,
    motivation: 'Chaque jour coché te rapproche du 12/20.',
    chapterSlug: 'equations-differentielles',
  },

  // ── Phase 2 : Compléter Maths Générales (J14-J21) ──
  {
    dayNumber: 14,
    title: 'MINI-SUJET Analyse',
    tasks: [
      'Faire le mini-sujet d\'analyse en conditions chronométrées (2h)',
      'Corriger avec le corrigé détaillé',
      'Identifier les erreurs et les points faibles',
      'Refaire les questions ratées',
    ],
    phase: 2,
    motivation: 'Tu n\'as pas besoin de gérer 40 jours. Tu as juste besoin de gérer AUJOURD\'HUI.',
  },
  {
    dayNumber: 15,
    title: 'Suites P1',
    tasks: [
      'Suites arithmétiques : u_n = u_0 + nr, raison, sens de variation',
      'Suites géométriques : u_n = u_0·q^n, raison, sens de variation',
      'Formules de somme : S_n arithmétique et géométrique',
      'Exercices de calcul de termes et de sommes',
    ],
    phase: 2,
    motivation: 'Le succès n\'est pas un sprint, c\'est une série de petits pas.',
    chapterSlug: 'suites',
  },
  {
    dayNumber: 16,
    title: 'Suites P2',
    tasks: [
      'Convergence d\'une suite : définition, théorèmes',
      'Suites géométriques : convergence si |q| < 1',
      'Suites récurrentes : u_(n+1) = f(u_n)',
      'Exercice type examen avec suites',
    ],
    phase: 2,
    motivation: 'Dans 40 jours, tu seras content d\'avoir commencé aujourd\'hui.',
    chapterSlug: 'suites',
  },
  {
    dayNumber: 17,
    title: 'Complexes P1',
    tasks: [
      'Forme algébrique : z = a + ib, partie réelle, partie imaginaire',
      'Module : |z| = √(a² + b²)',
      'Argument : arg(z), conjugué z̄',
      'Opérations : addition, multiplication, division',
      'Exercices de calcul avec les complexes',
    ],
    phase: 2,
    motivation: 'Ceux qui réussissent ne sont pas ceux qui ont le plus de talent. Ce sont ceux qui n\'ont pas lâché.',
    chapterSlug: 'complexes',
  },
  {
    dayNumber: 18,
    title: 'Complexes P2',
    tasks: [
      'Forme trigonométrique : z = |z|(cos θ + i sin θ)',
      'Forme exponentielle : z = |z|·e^(iθ)',
      'Formule d\'Euler : e^(iθ) = cos θ + i sin θ',
      'Formule de Moivre : (cos θ + i sin θ)^n = cos(nθ) + i sin(nθ)',
      'Exercice type examen avec complexes',
    ],
    phase: 2,
    motivation: 'La douleur de la discipline est toujours plus faible que la douleur du regret.',
    chapterSlug: 'complexes',
  },
  {
    dayNumber: 19,
    title: 'Matrices P1',
    tasks: [
      'Définition d\'une matrice, types (carrée, ligne, colonne)',
      'Opérations : addition, multiplication par un scalaire',
      'Multiplication de matrices : attention à l\'ordre !',
      'Inverse d\'une matrice 2×2 : formule directe',
      'Exercices de calcul matriciel',
    ],
    phase: 2,
    motivation: 'Chaque exercice fait est un point de plus à l\'examen.',
    chapterSlug: 'matrices',
  },
  {
    dayNumber: 20,
    title: 'Matrices P2',
    tasks: [
      'Déterminant d\'une matrice 2×2 : ad - bc',
      'Déterminant d\'une matrice 3×3 : règle de Sarrus',
      'Résolution de systèmes linéaires : AX = B → X = A⁻¹B',
      'Exercice type examen avec matrices',
    ],
    phase: 2,
    motivation: 'Tu as travaillé pour ça. Tu mérites ta réussite.',
    chapterSlug: 'matrices',
  },
  {
    dayNumber: 21,
    title: 'SUJET COMPLET Maths Générales',
    tasks: [
      'Faire le sujet complet en conditions réelles (3h)',
      'Corriger avec le corrigé détaillé',
      'Identifier les chapitres à revoir en priorité',
      'Planifier les révisions ciblées',
    ],
    phase: 2,
    motivation: 'La seule différence entre toi et ceux qui réussissent, c\'est qu\'ils ont commencé.',
  },

  // ── Phase 3 : Maths Appliquées (J22-J31) ──
  {
    dayNumber: 22,
    title: 'Numération P1',
    tasks: [
      'Systèmes de numération : binaire (base 2), octal (base 8), décimal (base 10), hexadécimal (base 16)',
      'Conversion décimal → binaire : divisions successives par 2',
      'Conversion binaire → décimal : somme pondérée',
      'Conversions entre toutes les bases',
      'Exercices de conversion (10 minimum)',
    ],
    phase: 3,
    motivation: 'Un voyage de mille kilomètres commence par un seul pas.',
    chapterSlug: 'codification',
  },
  {
    dayNumber: 23,
    title: 'Codification P2',
    tasks: [
      'Code BCD : chaque chiffre décimal sur 4 bits',
      'Code Gray (binaire réfléchi) : construction et conversion',
      'Code ASCII : principe et table',
      'Complément à 2 : représentation des nombres négatifs',
      'Exercices de codification',
    ],
    phase: 3,
    motivation: 'Chaque jour coché te rapproche du 12/20.',
    chapterSlug: 'codification',
  },
  {
    dayNumber: 24,
    title: 'Logique P1',
    tasks: [
      'Portes logiques de base : ET (AND), OU (OR), NON (NOT)',
      'Portes dérivées : NAND, NOR, XOR (OU exclusif)',
      'Tables de vérité : construction pour 2 et 3 variables',
      'Exercices : dresser des tables de vérité',
    ],
    phase: 3,
    motivation: 'Tu n\'as pas besoin de gérer 40 jours. Tu as juste besoin de gérer AUJOURD\'HUI.',
    chapterSlug: 'logique',
  },
  {
    dayNumber: 25,
    title: 'Algèbre de Boole P2',
    tasks: [
      'Lois de l\'algèbre de Boole : commutativité, associativité, distributivité',
      'Théorèmes de De Morgan : \\overline{A·B} = \\overline{A}+\\overline{B}',
      'Simplification algébrique d\'expressions booléennes',
      'Exercices de simplification',
    ],
    phase: 3,
    motivation: 'Le succès n\'est pas un sprint, c\'est une série de petits pas.',
    chapterSlug: 'logique',
  },
  {
    dayNumber: 26,
    title: 'Karnaugh P1',
    tasks: [
      'Construction d\'un tableau de Karnaugh (2, 3, 4 variables)',
      'Ordre des colonnes : code Gray (00, 01, 11, 10)',
      'Regroupements : par 1, 2, 4, 8 (puissances de 2)',
      'Lecture de l\'expression simplifiée',
      'Exercices avec 3 variables',
    ],
    phase: 3,
    motivation: 'Dans 40 jours, tu seras content d\'avoir commencé aujourd\'hui.',
    chapterSlug: 'logique',
  },
  {
    dayNumber: 27,
    title: 'Karnaugh P2',
    tasks: [
      'Exercices Karnaugh avec 4 variables',
      'Simplification et dessin du circuit logique associé',
      'Passage de l\'expression simplifiée au logigramme',
      'Exercice type examen Karnaugh',
    ],
    phase: 3,
    motivation: 'Ceux qui réussissent ne sont pas ceux qui ont le plus de talent. Ce sont ceux qui n\'ont pas lâché.',
    chapterSlug: 'logique',
  },
  {
    dayNumber: 28,
    title: 'Circuits : Additionneurs et Inverseurs',
    tasks: [
      'Demi-additionneur : table de vérité, schéma',
      'Additionneur complet : table de vérité, schéma',
      'Additionneur n bits : mise en cascade',
      'Inverseur : complément à 1 et complément à 2',
      'Exercices de conception de circuits additionneurs',
    ],
    phase: 3,
    motivation: 'La douleur de la discipline est toujours plus faible que la douleur du regret.',
    chapterSlug: 'circuits',
  },
  {
    dayNumber: 29,
    title: 'Circuits : Comparateurs, Multiplexeurs',
    tasks: [
      'Comparateur 1 bit : A>B, A=B, A<B',
      'Multiplexeur (MUX) : plusieurs entrées → 1 sortie',
      'Démultiplexeur (DEMUX) : 1 entrée → plusieurs sorties',
      'Exercices de conception et d\'analyse',
    ],
    phase: 3,
    motivation: 'Chaque exercice fait est un point de plus à l\'examen.',
    chapterSlug: 'circuits',
  },
  {
    dayNumber: 30,
    title: 'Circuits : Codeurs, Décodeurs, Matérialisation',
    tasks: [
      'Codeur : beaucoup d\'entrées → peu de sorties',
      'Décodeur : peu d\'entrées → beaucoup de sorties',
      'Matérialisation d\'une fonction logique avec des portes NAND ou NOR',
      'Exercice type examen sur les circuits',
    ],
    phase: 3,
    motivation: 'Tu as travaillé pour ça. Tu mérites ta réussite.',
    chapterSlug: 'circuits',
  },
  {
    dayNumber: 31,
    title: 'SUJET COMPLET Maths Appliquées',
    tasks: [
      'Faire le sujet complet de Maths Appliquées en conditions réelles (1h30)',
      'Corriger avec le corrigé détaillé',
      'Identifier les points faibles en numération, logique et circuits',
      'Revoir les chapitres fragiles',
    ],
    phase: 3,
    motivation: 'La seule différence entre toi et ceux qui réussissent, c\'est qu\'ils ont commencé.',
  },

  // ── Phase 4 : Entraînement Intensif (J32-J40) ──
  {
    dayNumber: 32,
    title: 'Sujet examen n°1 (4h)',
    tasks: [
      'Se mettre en conditions réelles : 4h, pas de téléphone',
      'Faire le sujet complet (Maths Gé + Maths App)',
      'Commencer par Maths Appliquées (sécuriser les points)',
      'Gérer son temps : 1h30 Maths App, 2h30 Maths Gé',
    ],
    phase: 4,
    motivation: 'Un voyage de mille kilomètres commence par un seul pas.',
  },
  {
    dayNumber: 33,
    title: 'Correction + renforcement n°1',
    tasks: [
      'Corriger le sujet n°1 avec le barème',
      'Calculer sa note estimée',
      'Identifier les erreurs récurrentes',
      'Refaire les exercices ratés',
      'Revoir les chapitres concernés dans les fiches',
    ],
    phase: 4,
    motivation: 'Chaque jour coché te rapproche du 12/20.',
  },
  {
    dayNumber: 34,
    title: 'Sujet examen n°2 (4h)',
    tasks: [
      'Deuxième sujet complet en conditions réelles',
      'Appliquer les leçons du sujet n°1',
      'Surveiller les erreurs identifiées précédemment',
      'Bien gérer le temps',
    ],
    phase: 4,
    motivation: 'Tu n\'as pas besoin de gérer 40 jours. Tu as juste besoin de gérer AUJOURD\'HUI.',
  },
  {
    dayNumber: 35,
    title: 'Correction + renforcement n°2',
    tasks: [
      'Corriger le sujet n°2 avec le barème',
      'Comparer avec la note du sujet n°1 : progression ?',
      'Identifier les derniers points faibles',
      'Refaire les exercices problématiques',
    ],
    phase: 4,
    motivation: 'Le succès n\'est pas un sprint, c\'est une série de petits pas.',
  },
  {
    dayNumber: 36,
    title: 'Sujet examen n°3 (conditions réelles)',
    tasks: [
      'Dernier sujet complet en simulation d\'examen',
      'Conditions strictes : 4h, pas de pause, pas d\'aide',
      'Appliquer la stratégie d\'examen complète',
      'Viser le meilleur score possible',
    ],
    phase: 4,
    motivation: 'Dans 40 jours, tu seras content d\'avoir commencé aujourd\'hui.',
  },
  {
    dayNumber: 37,
    title: 'Correction + stratégie examen',
    tasks: [
      'Corriger le sujet n°3',
      'Analyser l\'évolution des notes sur les 3 sujets',
      'Définir sa stratégie d\'examen : ordre des exercices, temps par exercice',
      'Lister les formules à réviser en priorité',
    ],
    phase: 4,
    motivation: 'Ceux qui réussissent ne sont pas ceux qui ont le plus de talent. Ce sont ceux qui n\'ont pas lâché.',
  },
  {
    dayNumber: 38,
    title: 'Révision ciblée',
    tasks: [
      'Revoir uniquement les chapitres fragiles identifiés',
      'Refaire 2-3 exercices type examen sur ces chapitres',
      'Relire les fiches réflexes correspondantes',
      'Pas de nouveau contenu : consolidation uniquement',
    ],
    phase: 4,
    motivation: 'La douleur de la discipline est toujours plus faible que la douleur du regret.',
  },
  {
    dayNumber: 39,
    title: 'Fiches formules + astuces',
    tasks: [
      'Relire toutes les fiches réflexes (dérivées, primitives, limites)',
      'Revoir les 10 erreurs fréquentes',
      'Revoir les 15 astuces d\'examen',
      'Écrire sur une feuille les formules que tu oublies toujours',
    ],
    phase: 4,
    motivation: 'Chaque exercice fait est un point de plus à l\'examen.',
  },
  {
    dayNumber: 40,
    title: 'Dernier jour',
    tasks: [
      'Relire SEULEMENT les fiches (pas de nouveaux exercices)',
      'Préparer ses affaires : stylos, calculatrice, carte étudiant, eau',
      'Relire la fiche "Jour J" et les astuces d\'examen',
      'Se coucher tôt : 8h de sommeil minimum',
      'Tu es prêt. Fais-toi confiance.',
    ],
    phase: 4,
    motivation: 'Tu as travaillé pour ça. Tu mérites ta réussite.',
  },
]
