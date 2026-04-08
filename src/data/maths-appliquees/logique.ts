import type { ChapterContent } from '../maths-generales/types'

export const logiqueContent: ChapterContent = {
  slug: 'logique',
  title: "Logique du Traitement de l'Information",
  icon: '🔀',
  importance: 'Essentiel - simplification et conception de circuits logiques',
  days: 'Jours 24-27',
  sections: [
    {
      title: 'Les 6 portes logiques fondamentales',
      content: [
        {
          type: 'text',
          text: "Les **portes logiques** sont les briques de base de tout circuit numérique. Chacune réalise une opération booléenne élémentaire sur des variables binaires ($0$ ou $1$).",
        },
        {
          type: 'text',
          text: "**1. Porte ET (AND)** — Sortie $= 1$ seulement si **toutes** les entrées valent $1$. Analogie : deux interrupteurs en série.",
        },
        {
          type: 'formula',
          math: 'S = A \\cdot B',
        },
        {
          type: 'table',
          headers: ['$A$', '$B$', '$S = A \\cdot B$'],
          rows: [
            ['$0$', '$0$', '$0$'],
            ['$0$', '$1$', '$0$'],
            ['$1$', '$0$', '$0$'],
            ['$1$', '$1$', '$1$'],
          ],
        },
        {
          type: 'text',
          text: "**2. Porte OU (OR)** — Sortie $= 1$ si **au moins une** entrée vaut $1$. Analogie : deux interrupteurs en parallèle.",
        },
        {
          type: 'formula',
          math: 'S = A + B',
        },
        {
          type: 'table',
          headers: ['$A$', '$B$', '$S = A + B$'],
          rows: [
            ['$0$', '$0$', '$0$'],
            ['$0$', '$1$', '$1$'],
            ['$1$', '$0$', '$1$'],
            ['$1$', '$1$', '$1$'],
          ],
        },
        {
          type: 'text',
          text: "**3. Porte NON (NOT)** — Inverse l'entrée. Sortie $= 1$ si entrée $= 0$ et vice versa.",
        },
        {
          type: 'formula',
          math: 'S = \\overline{A}',
        },
        {
          type: 'table',
          headers: ['$A$', '$S = \\overline{A}$'],
          rows: [
            ['$0$', '$1$'],
            ['$1$', '$0$'],
          ],
        },
        {
          type: 'text',
          text: "**4. Porte NON-ET (NAND)** — Inverse du ET. Sortie $= 0$ seulement si **toutes** les entrées valent $1$. Porte universelle : on peut réaliser n'importe quelle fonction avec des NAND.",
        },
        {
          type: 'formula',
          math: 'S = \\overline{A \\cdot B}',
        },
        {
          type: 'table',
          headers: ['$A$', '$B$', '$S = \\overline{A \\cdot B}$'],
          rows: [
            ['$0$', '$0$', '$1$'],
            ['$0$', '$1$', '$1$'],
            ['$1$', '$0$', '$1$'],
            ['$1$', '$1$', '$0$'],
          ],
        },
        {
          type: 'text',
          text: "**5. Porte NON-OU (NOR)** — Inverse du OU. Sortie $= 1$ seulement si **toutes** les entrées valent $0$. Aussi une porte universelle.",
        },
        {
          type: 'formula',
          math: 'S = \\overline{A + B}',
        },
        {
          type: 'table',
          headers: ['$A$', '$B$', '$S = \\overline{A + B}$'],
          rows: [
            ['$0$', '$0$', '$1$'],
            ['$0$', '$1$', '$0$'],
            ['$1$', '$0$', '$0$'],
            ['$1$', '$1$', '$0$'],
          ],
        },
        {
          type: 'text',
          text: "**6. Porte OU-Exclusif (XOR)** — Sortie $= 1$ si les entrées sont **différentes**. Très utile pour la détection de parité et les additionneurs.",
        },
        {
          type: 'formula',
          math: 'S = A \\oplus B = A \\cdot \\overline{B} + \\overline{A} \\cdot B',
        },
        {
          type: 'table',
          headers: ['$A$', '$B$', '$S = A \\oplus B$'],
          rows: [
            ['$0$', '$0$', '$0$'],
            ['$0$', '$1$', '$1$'],
            ['$1$', '$0$', '$1$'],
            ['$1$', '$1$', '$0$'],
          ],
        },
        {
          type: 'tip',
          text: "Moyen mnémotechnique : AND = « les DEUX », OR = « AU MOINS UN », XOR = « UN SEUL » (différents), NOT = « L'INVERSE ». NAND et NOR sont les versions inversées de AND et OR.",
        },
      ],
    },
    {
      title: 'Algèbre de Boole : propriétés',
      content: [
        {
          type: 'text',
          text: "L'algèbre de Boole définit les règles de calcul sur les variables binaires ($0$ et $1$). Ces propriétés permettent de simplifier les expressions logiques sans tableau de vérité.",
        },
        {
          type: 'text',
          text: "**Propriétés fondamentales** (à connaître par coeur) :",
        },
        {
          type: 'table',
          headers: ['Propriété', 'Forme ET', 'Forme OU'],
          rows: [
            ['Élément neutre', '$A \\cdot 1 = A$', '$A + 0 = A$'],
            ['Élément absorbant', '$A \\cdot 0 = 0$', '$A + 1 = 1$'],
            ['Idempotence', '$A \\cdot A = A$', '$A + A = A$'],
            ['Complémentarité', '$A \\cdot \\overline{A} = 0$', '$A + \\overline{A} = 1$'],
            ['Commutativité', '$A \\cdot B = B \\cdot A$', '$A + B = B + A$'],
            ['Associativité', '$(A \\cdot B) \\cdot C = A \\cdot (B \\cdot C)$', '$(A+B)+C = A+(B+C)$'],
            ['Distributivité', '$A \\cdot (B+C) = A \\cdot B + A \\cdot C$', '$A + (B \\cdot C) = (A+B) \\cdot (A+C)$'],
            ['Absorption', '$A \\cdot (A+B) = A$', '$A + A \\cdot B = A$'],
            ['Double négation', '$\\overline{\\overline{A}} = A$', '$\\overline{\\overline{A}} = A$'],
          ],
        },
        {
          type: 'text',
          text: "**Lois de De Morgan** (très importantes à l'examen !) : permettent de transformer un ET en OU et vice versa en passant la barre.",
        },
        {
          type: 'formula',
          math: '\\overline{A \\cdot B} = \\overline{A} + \\overline{B}',
        },
        {
          type: 'formula',
          math: '\\overline{A + B} = \\overline{A} \\cdot \\overline{B}',
        },
        {
          type: 'text',
          text: "**Illustration de De Morgan :**\n\nPremière loi : $\\overline{A \\cdot B}$ (NAND) $= \\overline{A} + \\overline{B}$ (OU des compléments)\n\nVérification pour $A=1, B=0$ :\n$\\overline{1 \\cdot 0} = \\overline{0} = 1$\n$\\overline{1} + \\overline{0} = 0 + 1 = 1$ ✓\n\nDeuxième loi : $\\overline{A + B}$ (NOR) $= \\overline{A} \\cdot \\overline{B}$ (ET des compléments)\n\nVérification pour $A=0, B=0$ :\n$\\overline{0 + 0} = \\overline{0} = 1$\n$\\overline{0} \\cdot \\overline{0} = 1 \\cdot 1 = 1$ ✓",
        },
        {
          type: 'tip',
          text: "Moyen mnémotechnique pour De Morgan : « On **casse** la grande barre et on **change** l'opération ». La barre sur un produit donne une somme de barres ($\\overline{A \\cdot B} = \\overline{A} + \\overline{B}$), et la barre sur une somme donne un produit de barres ($\\overline{A + B} = \\overline{A} \\cdot \\overline{B}$).",
        },
        {
          type: 'text',
          text: "**Propriété d'absorption utile** : $\\overline{A} + A \\cdot B = \\overline{A} + B$ (très souvent utilisée en simplification).\n\nDémonstration : $\\overline{A} + A \\cdot B = (\\overline{A} + A) \\cdot (\\overline{A} + B) = 1 \\cdot (\\overline{A} + B) = \\overline{A} + B$",
        },
      ],
    },
    {
      title: 'Tableaux de Karnaugh — Principe',
      content: [
        {
          type: 'text',
          text: "Le **tableau de Karnaugh** (K-map) est une méthode graphique pour simplifier les expressions booléennes. Son principe : les cases adjacentes ne diffèrent que d'**une seule variable** (code Gray), ce qui permet d'éliminer des variables.",
        },
        {
          type: 'method',
          text: "Méthode : Simplification par Karnaugh\n1. Construire le tableau avec l'ordre GRAY pour les lignes et colonnes : 00, 01, 11, 10 (PAS 00, 01, 10, 11 !)\n2. Placer les 1 dans les cases correspondant aux mintermes de la fonction\n3. Former des groupements rectangulaires de 1 adjacents (taille OBLIGATOIREMENT = puissance de 2 : 1, 2, 4, 8...)\n4. Les groupements peuvent 'boucler' aux bords opposés (le tableau est torique)\n5. Chaque groupement élimine les variables qui changent → donne un terme simplifié\n6. L'expression finale = somme (OU logique) de tous les termes simplifiés\n7. Objectif : couvrir TOUS les 1 avec le MOINS de groupements les PLUS GRANDS possibles",
        },
        {
          type: 'text',
          text: "**Règles de groupement à respecter absolument** :\n- Taille du groupe : uniquement $1, 2, 4, 8, 16, \\ldots$ (puissances de $2$)\n- Forme : rectangulaire uniquement (pas de L, pas de T)\n- Tous les $1$ doivent être couverts par au moins un groupe\n- Un $1$ peut appartenir à **plusieurs** groupes (c'est autorisé et parfois nécessaire)\n- Plus le groupe est grand, plus le terme simplifié est court\n- Chercher toujours les groupements les plus grands possibles d'abord",
        },
        {
          type: 'text',
          text: "**Tableau de Karnaugh à 3 variables** ($A$, $B$, $C$) — $8$ cases :",
        },
        {
          type: 'table',
          headers: ['$A \\backslash BC$', '$00$', '$01$', '$11$', '$10$'],
          rows: [
            ['$0$', '$m_0$', '$m_1$', '$m_3$', '$m_2$'],
            ['$1$', '$m_4$', '$m_5$', '$m_7$', '$m_6$'],
          ],
        },
        {
          type: 'text',
          text: "**Tableau de Karnaugh à 4 variables** ($A$, $B$, $C$, $D$) — $16$ cases :",
        },
        {
          type: 'table',
          headers: ['$AB \\backslash CD$', '$00$', '$01$', '$11$', '$10$'],
          rows: [
            ['$00$', '$m_0$', '$m_1$', '$m_3$', '$m_2$'],
            ['$01$', '$m_4$', '$m_5$', '$m_7$', '$m_6$'],
            ['$11$', '$m_{12}$', '$m_{13}$', '$m_{15}$', '$m_{14}$'],
            ['$10$', '$m_8$', '$m_9$', '$m_{11}$', '$m_{10}$'],
          ],
        },
        {
          type: 'tip',
          text: "Pour identifier le terme d'un groupe : regardez les variables qui restent CONSTANTES dans le groupe. Si $A = 1$ partout dans le groupe, le terme contient $A$. Si $A = 0$ partout, le terme contient $\\overline{A}$. Si $A$ change (0 et 1), $A$ est éliminée du terme.",
        },
      ],
    },
    {
      title: 'Exemples complets de simplification par Karnaugh',
      content: [
        {
          type: 'text',
          text: "**Exemple 1 (3 variables) : Simplifier $F(A, B, C) = \\sum m(1, 3, 5, 7)$**",
        },
        {
          type: 'text',
          text: "On place les $1$ dans le tableau de Karnaugh aux mintermes $1, 3, 5, 7$ :",
        },
        {
          type: 'table',
          headers: ['$A \\backslash BC$', '$00$', '$01$', '$11$', '$10$'],
          rows: [
            ['$0$', '$0$', '$1$', '$1$', '$0$'],
            ['$1$', '$0$', '$1$', '$1$', '$0$'],
          ],
        },
        {
          type: 'text',
          text: "Observation : Les $1$ forment un **seul groupe de 4** couvrant les colonnes $BC=01$ et $BC=11$ (les deux colonnes du milieu).\n\nVariables constantes dans ce groupe : $C = 1$ dans toutes les cases. $A$ varie ($0$ et $1$), $B$ varie ($0$ et $1$) → $A$ et $B$ s'éliminent.",
        },
        {
          type: 'formula',
          math: 'F(A, B, C) = C',
        },
        {
          type: 'text',
          text: "Vérification : les mintermes $1, 3, 5, 7$ ont tous $C = 1$ en commun. C'est correct !",
        },
        {
          type: 'text',
          text: "**Exemple 2 (4 variables) : Simplifier $F(A, B, C, D) = \\sum m(0, 1, 4, 5, 8, 9, 12, 13)$**",
        },
        {
          type: 'table',
          headers: ['$AB \\backslash CD$', '$00$', '$01$', '$11$', '$10$'],
          rows: [
            ['$00$', '$1$', '$1$', '$0$', '$0$'],
            ['$01$', '$1$', '$1$', '$0$', '$0$'],
            ['$11$', '$1$', '$1$', '$0$', '$0$'],
            ['$10$', '$1$', '$1$', '$0$', '$0$'],
          ],
        },
        {
          type: 'text',
          text: "Les 8 cases à $1$ forment un seul groupe de 8. Variable constante : $D = 0$ et $C = 0$ (colonnes $CD=00$ et $CD=01$ = quand $D=0$). Plus précisément : $C = 0$ partout dans les deux premières colonnes ($CD=00$ et $CD=01$). Donc $\\overline{D} = $ variable constante : $D = 0$. Vérifiez : $\\overline{D}$ car $D = 0$ dans toutes ces cases.",
        },
        {
          type: 'formula',
          math: 'F = \\overline{D}',
        },
        {
          type: 'text',
          text: "**Exemple 3 (4 variables) : $F(A,B,C,D) = \\sum m(0, 2, 5, 7, 8, 10, 13, 15)$**",
        },
        {
          type: 'table',
          headers: ['$AB \\backslash CD$', '$00$', '$01$', '$11$', '$10$'],
          rows: [
            ['$00$', '$1$', '$0$', '$0$', '$1$'],
            ['$01$', '$0$', '$1$', '$1$', '$0$'],
            ['$11$', '$0$', '$1$', '$1$', '$0$'],
            ['$10$', '$1$', '$0$', '$0$', '$1$'],
          ],
        },
        {
          type: 'text',
          text: "Groupement 1 : cases $m_0, m_2, m_8, m_{10}$ (coins + milieu-gauche, bouclage) → $\\overline{B} \\cdot \\overline{D}$ ($B=0, D=0$ constant)\nGroupement 2 : cases $m_5, m_7, m_{13}, m_{15}$ → $B \\cdot D$ ($B=1, D=1$ constant)",
        },
        {
          type: 'formula',
          math: 'F = \\overline{B} \\cdot \\overline{D} + B \\cdot D = \\overline{B \\oplus D}',
        },
      ],
    },
    {
      title: 'Simplification algébrique — méthode et exemples',
      content: [
        {
          type: 'method',
          text: "Méthode : Simplification algébrique\n1. Développer l'expression si nécessaire (distributivité)\n2. Appliquer les propriétés fondamentales (idempotence, complémentarité, absorption)\n3. Factoriser pour réduire\n4. Appliquer De Morgan si nécessaire\n5. Vérifier avec un tableau de vérité ou un tableau de Karnaugh",
        },
        {
          type: 'text',
          text: "**Exemple 1 : Simplifier $F = A \\cdot B \\cdot \\overline{C} + A \\cdot B \\cdot C + \\overline{A} \\cdot B \\cdot C$**",
        },
        {
          type: 'text',
          text: "Étape 1 — Factoriser $A \\cdot B$ dans les deux premiers termes :\n$F = A \\cdot B \\cdot (\\overline{C} + C) + \\overline{A} \\cdot B \\cdot C$",
        },
        {
          type: 'text',
          text: "Étape 2 — Appliquer $\\overline{C} + C = 1$ (complémentarité) :\n$F = A \\cdot B \\cdot 1 + \\overline{A} \\cdot B \\cdot C = A \\cdot B + \\overline{A} \\cdot B \\cdot C$",
        },
        {
          type: 'text',
          text: "Étape 3 — Factoriser $B$ :\n$F = B \\cdot (A + \\overline{A} \\cdot C)$",
        },
        {
          type: 'text',
          text: "Étape 4 — Appliquer $A + \\overline{A} \\cdot C = A + C$ (absorption généralisée) :\n$F = B \\cdot (A + C)$",
        },
        {
          type: 'formula',
          math: 'F = B \\cdot (A + C) = A \\cdot B + B \\cdot C',
        },
        {
          type: 'text',
          text: "**Exemple 2 : Simplifier $F = \\overline{A} \\cdot \\overline{B} + \\overline{A} \\cdot B + A \\cdot B$**",
        },
        {
          type: 'text',
          text: "Étape 1 — Factoriser $\\overline{A}$ dans les deux premiers termes :\n$F = \\overline{A} \\cdot (\\overline{B} + B) + A \\cdot B = \\overline{A} \\cdot 1 + A \\cdot B = \\overline{A} + A \\cdot B$\n\nÉtape 2 — Absorption généralisée ($\\overline{A} + A \\cdot B = \\overline{A} + B$) :",
        },
        {
          type: 'formula',
          math: 'F = \\overline{A} + B',
        },
        {
          type: 'text',
          text: "**Exemple 3 : Simplifier $F = \\overline{(A + B) \\cdot C}$ avec De Morgan**\n\nDe Morgan : $\\overline{X \\cdot Y} = \\overline{X} + \\overline{Y}$ avec $X = A+B$ et $Y = C$ :\n$F = \\overline{A+B} + \\overline{C}$\n\nDe Morgan à nouveau sur $\\overline{A+B} = \\overline{A} \\cdot \\overline{B}$ :",
        },
        {
          type: 'formula',
          math: 'F = \\overline{A} \\cdot \\overline{B} + \\overline{C}',
        },
      ],
    },
    {
      title: 'Exercices corrigés',
      content: [
        {
          type: 'exercise',
          text: "Exercice 1 : Simplifier par Karnaugh $F(A,B,C,D) = \\sum m(0, 1, 2, 3, 4, 5, 6, 7)$.",
        },
        {
          type: 'correction',
          text: "Les mintermes 0 à 7 correspondent aux lignes AB = 00 et AB = 01 du tableau, soit A = 0.\n\nTableau :\nAB\\CD | 00  01  11  10\n  00  |  1   1   1   1\n  01  |  1   1   1   1\n  11  |  0   0   0   0\n  10  |  0   0   0   0\n\nGroupement : toutes les 8 cases de A=0 forment un bloc de 8.\nVariables constantes : A = 0 partout → terme = A barre\n\nF = A barre\n\nVérification : mintermes 0-7 ont tous A=0, donc A barre = 1. Correct !\nPour m8-m15, A=1 donc A barre = 0. Correct !",
        },
        {
          type: 'exercise',
          text: "Exercice 2 : Simplifier algébriquement $F = \\overline{A} \\cdot \\overline{B} + \\overline{A} \\cdot B + A \\cdot B$. Vérifier avec Karnaugh.",
        },
        {
          type: 'correction',
          text: "Simplification algébrique :\nF = A barre . B barre + A barre . B + A . B\nF = A barre . (B barre + B) + A . B   [factorisation de A barre]\nF = A barre . 1 + A . B               [B barre + B = 1]\nF = A barre + A . B\nF = A barre + B                       [absorption : X barre + X.Y = X barre + Y]\n\nVérification par Karnaugh (2 variables) :\nAB : 00→1, 01→1, 10→1, 11→1\nGroupe 1 : A=0 (m0 et m1) → A barre\nGroupe 2 : B=1 (m1 et m3) → B\nF = A barre + B ✓",
        },
        {
          type: 'exercise',
          text: "Exercice 3 : Dresser la table de vérité de $F = A \\oplus B$, puis exprimer $F$ avec des portes ET, OU, NON uniquement.",
        },
        {
          type: 'correction',
          text: "Table de vérité de A XOR B :\nA=0, B=0 : F = 0  (pareils → 0)\nA=0, B=1 : F = 1  (différents → 1)\nA=1, B=0 : F = 1  (différents → 1)\nA=1, B=1 : F = 0  (pareils → 0)\n\nExpression avec ET, OU, NON :\nMintermes : m1 (A=0,B=1) et m2 (A=1,B=0)\nF = A barre . B + A . B barre\n\nSchéma : \n- Porte NON sur A → A barre\n- Porte NON sur B → B barre\n- Porte ET entre A barre et B → A barre . B\n- Porte ET entre A et B barre → A . B barre\n- Porte OU entre les deux résultats\nTotal : 2 portes NON + 2 portes ET + 1 porte OU = 5 portes",
        },
        {
          type: 'exercise',
          text: "Exercice 4 (bilan) : Simplifier $F(A,B,C) = \\sum m(0, 2, 3, 7)$ par Karnaugh, puis vérifier algébriquement.",
        },
        {
          type: 'correction',
          text: "Tableau de Karnaugh 3 variables :\nA\\BC  | 00  01  11  10\n  0   |  1   0   1   1\n  1   |  0   0   1   0\n\nMintermes : m0(A=0,BC=00), m2(A=0,BC=10), m3(A=0,BC=11), m7(A=1,BC=11)\n\nGroupement 1 : m2, m3 (A=0, B=1) → A barre . B\nGroupement 2 : m3, m7 (B=1, C=1) → B . C\nGroupement 3 : m0, m2 (A=0, C=0) → A barre . C barre\n\nF = A barre . B + B . C + A barre . C barre\n\nVérification :\nm0 (A=0,B=0,C=0) : A barre.C barre = 1.1 = 1 ✓\nm2 (A=0,B=1,C=0) : A barre.B = 1.1 = 1 ✓\nm3 (A=0,B=1,C=1) : A barre.B = 1 et B.C = 1 ✓\nm7 (A=1,B=1,C=1) : B.C = 1.1 = 1 ✓\nm1,m4,m5,m6 = 0 : vérifier qu'aucun terme ne vaut 1 pour ces cas ✓",
        },
      ],
    },
  ],
  erreurs: [
    "Ne pas respecter l'ordre Gray ($00, 01, 11, 10$) dans le tableau de Karnaugh — si on met $00, 01, 10, 11$, les cases ne sont plus adjacentes !",
    "Former des groupements de taille non puissance de $2$ (ex : $3$ ou $5$ cases) — toujours $1, 2, 4, 8, 16$",
    "Oublier que les bords du tableau de Karnaugh sont adjacents (le tableau « boucle » : gauche-droite et haut-bas)",
    "Confondre les lois de De Morgan : $\\overline{A \\cdot B} = \\overline{A} + \\overline{B}$ (ET → OU) et $\\overline{A + B} = \\overline{A} \\cdot \\overline{B}$ (OU → ET)",
    "Oublier la distributivité du OU sur le ET : $A + (B \\cdot C) = (A+B) \\cdot (A+C)$ — souvent oubliée car inhabituelle",
    "Ne pas éliminer les termes redondants dans les groupements Karnaugh (chercher toujours le plus grand groupe possible)",
  ],
  bilan: [
    "Je connais les 6 portes logiques (AND, OR, NOT, NAND, NOR, XOR) et leurs tables de vérité",
    "Je maîtrise les propriétés de l'algèbre de Boole (absorption, complémentarité, distributivité)",
    "Je sais appliquer les lois de De Morgan pour transformer les expressions",
    "Je sais construire un tableau de Karnaugh à $3$ et $4$ variables avec l'ordre Gray",
    "Je sais simplifier une expression booléenne par Karnaugh (groupements de puissances de $2$)",
    "Je sais simplifier algébriquement une expression booléenne en appliquant les propriétés",
  ],
}
