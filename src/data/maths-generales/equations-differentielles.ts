import { ChapterContent } from './types'

export const chapterContent: ChapterContent = {
  slug: 'equations-differentielles',
  title: 'Équations Différentielles',
  icon: '🔄',
  importance: 'Chapitre régulier en examen. Maîtriser les résolutions type permet de gagner des points facilement. Le schéma est toujours le même : solution homogène + solution particulière + condition initiale.',
  days: 'Jours 12–13',
  sections: [
    {
      title: '1. Idée clé : qu\'est-ce qu\'une équation différentielle ?',
      content: [
        {
          type: 'text',
          text: 'Une **équation différentielle** est une équation dont l\'inconnue est une **fonction** $y(x)$, et qui fait intervenir $y$ et ses dérivées $y\'$, $y\'\'$, etc.',
        },
        {
          type: 'text',
          text: '**Analogie** : en algèbre ordinaire, on cherche un nombre $x$ tel que $2x + 3 = 7$. En équation différentielle, on cherche une fonction $y(x)$ telle que $y\' = 2y + 3$. La solution n\'est pas un nombre, c\'est une formule !',
        },
        {
          type: 'tip',
          text: 'Exemple concret : la température $T(t)$ d\'un café qui refroidit suit $T\' = -k(T - T_{\\text{amb}})$. L\'équation décrit comment $T$ évolue dans le temps — et la résoudre donne $T(t)$ explicitement.',
        },
        {
          type: 'text',
          text: '**L\'ordre** de l\'équation est le degré maximal de dérivation. $y\' = ay$ est d\'ordre 1. $y\'\' + 2y\' + y = 0$ est d\'ordre 2.',
        },
      ],
    },
    {
      title: '2. Équations différentielles du 1er ordre',
      content: [
        {
          type: 'text',
          text: '**Type 1 : $y\' = ay$** — équation homogène du 1er ordre',
        },
        {
          type: 'formula',
          math: 'y\' = ay \\quad \\Longrightarrow \\quad y(x) = C e^{ax}, \\quad C \\in \\mathbb{R}',
        },
        {
          type: 'tip',
          text: 'Mémo : la dérivée de $e^{ax}$ est $a e^{ax}$, donc $e^{ax}$ est bien solution de $y\' = ay$. Le facteur $C$ représente la liberté : il y a une infinité de solutions tant qu\'on n\'impose pas de condition initiale.',
        },
        {
          type: 'text',
          text: '**Exemple rapide** : $y\' = 3y$. On lit $a = 3$, donc $y(x) = Ce^{3x}$. Vérification : $y\' = 3Ce^{3x} = 3y$. Correct !',
        },
        {
          type: 'text',
          text: '**Type 2 : $y\' = ay + b$** — équation avec second membre constant',
        },
        {
          type: 'formula',
          math: 'y\' = ay + b \\quad \\Longrightarrow \\quad y(x) = C e^{ax} - \\frac{b}{a}, \\quad C \\in \\mathbb{R} \\quad (a \\neq 0)',
        },
        {
          type: 'text',
          text: '**Comment retenir** : la solution générale = solution homogène $Ce^{ax}$ + solution particulière constante $y_p = -\\frac{b}{a}$. La solution particulière est obtenue en cherchant $y_p$ constant : $y_p\' = 0$, donc $0 = ay_p + b$, d\'où $y_p = -\\frac{b}{a}$.',
        },
        {
          type: 'tip',
          text: 'Erreur classique : oublier la solution particulière ! Si $y\' = 3y + 6$, la réponse n\'est pas $Ce^{3x}$ mais $Ce^{3x} - 2$.',
        },
        {
          type: 'text',
          text: '**Type 3 : $y\' + a(x)y = 0$** — forme générale homogène',
        },
        {
          type: 'formula',
          math: 'y\' + ay = 0 \\quad \\Longleftrightarrow \\quad y\' = -ay \\quad \\Longrightarrow \\quad y(x) = C e^{-ax}',
        },
        {
          type: 'tip',
          text: 'Attention au signe ! $y\' + ay = 0$ donne $Ce^{-ax}$, pas $Ce^{ax}$. C\'est l\'erreur la plus fréquente de ce chapitre.',
        },
        {
          type: 'table',
          headers: ['Équation', 'Solution générale', 'Solution particulière $y_p$'],
          rows: [
            ['y\' = ay', 'Ce^{ax}', '\\text{(aucune)}'],
            ['y\' = ay + b', 'Ce^{ax} - \\frac{b}{a}', 'y_p = -\\frac{b}{a}'],
            ['y\' + ay = 0', 'Ce^{-ax}', '\\text{(aucune)}'],
          ],
        },
      ],
    },
    {
      title: '3. Condition initiale',
      content: [
        {
          type: 'text',
          text: 'La solution générale contient une constante $C$ libre. Une **condition initiale** $y(x_0) = y_0$ permet de la fixer et donne une solution **unique**.',
        },
        {
          type: 'method',
          text: '**Méthode — 4 étapes** :\n1. Identifier le type ($y\' = ay$ ou $y\' = ay + b$) et lire $a$, $b$\n2. Écrire la solution générale avec $C$\n3. Substituer la condition initiale : remplacer $x$ par $x_0$ et $y$ par $y_0$\n4. Résoudre pour $C$ et réécrire la solution finale',
        },
        {
          type: 'text',
          text: '**Exemple** : $y\' = -2y$, $y(0) = 5$. Solution générale : $y(x) = Ce^{-2x}$. Condition : $y(0) = C = 5$. Solution finale : $y(x) = 5e^{-2x}$.',
        },
        {
          type: 'tip',
          text: 'Toujours vérifier : calculer $y\'$ et confirmer que l\'équation est bien satisfaite. Si $y(x) = 5e^{-2x}$, alors $y\' = -10e^{-2x} = -2 \\times 5e^{-2x} = -2y$. Oui !',
        },
      ],
    },
    {
      title: '4. Équations différentielles du 2nd ordre',
      content: [
        {
          type: 'text',
          text: 'On résout $ay\'\' + by\' + cy = 0$ grâce à l\'**équation caractéristique**. L\'idée : on cherche des solutions de la forme $e^{rx}$, ce qui ramène l\'équation à un polynôme en $r$.',
        },
        {
          type: 'formula',
          math: 'ar^2 + br + c = 0',
        },
        {
          type: 'text',
          text: 'On calcule $\\Delta = b^2 - 4ac$ et on distingue trois cas selon le signe du discriminant.',
        },
        {
          type: 'text',
          text: '**Cas 1 : $\\Delta > 0$** — deux racines réelles distinctes $r_1$ et $r_2$',
        },
        {
          type: 'formula',
          math: 'y(x) = C_1 e^{r_1 x} + C_2 e^{r_2 x}',
        },
        {
          type: 'text',
          text: '**Cas 2 : $\\Delta = 0$** — racine double $r_0 = \\frac{-b}{2a}$. Ne pas oublier le facteur $x$ !',
        },
        {
          type: 'formula',
          math: 'y(x) = (C_1 + C_2 x) e^{r_0 x}',
        },
        {
          type: 'text',
          text: '**Cas 3 : $\\Delta < 0$** — racines complexes conjuguées $r = \\alpha \\pm i\\beta$ où $\\alpha = \\frac{-b}{2a}$ et $\\beta = \\frac{\\sqrt{|\\Delta|}}{2a}$',
        },
        {
          type: 'formula',
          math: '\\alpha = \\frac{-b}{2a} \\quad ; \\quad \\beta = \\frac{\\sqrt{|\\Delta|}}{2a} \\quad (> 0)',
        },
        {
          type: 'formula',
          math: 'y(x) = e^{\\alpha x} \\left[ C_1 \\cos(\\beta x) + C_2 \\sin(\\beta x) \\right]',
        },
        {
          type: 'tip',
          text: 'Mémo visuel — les 3 cas : $\\Delta > 0$ → deux exponentielles ; $\\Delta = 0$ → une exponentielle × polynôme ; $\\Delta < 0$ → exponentielle × (cos + sin).',
        },
        {
          type: 'table',
          headers: ['Cas', 'Discriminant $\\Delta$', 'Racines', 'Solution générale'],
          rows: [
            ['1', '\\Delta > 0', 'r_1 \\neq r_2 \\in \\mathbb{R}', 'C_1 e^{r_1 x} + C_2 e^{r_2 x}'],
            ['2', '\\Delta = 0', 'r_0 = -b/(2a)', '(C_1 + C_2 x)e^{r_0 x}'],
            ['3', '\\Delta < 0', '\\alpha \\pm i\\beta', 'e^{\\alpha x}[C_1\\cos(\\beta x)+C_2\\sin(\\beta x)]'],
          ],
        },
      ],
    },
    {
      title: '5. Exemples corrigés',
      content: [
        {
          type: 'exercise',
          text: 'Exemple 1 : Résoudre $y\' = 3y + 6$ avec la condition initiale $y(0) = 1$.',
        },
        {
          type: 'correction',
          text: 'Correction — Exemple 1 (ED du 1er ordre avec second membre)',
          items: [
            'On identifie : $a = 3$, $b = 6$. Type $y\' = ay + b$.',
            'Solution particulière constante : $y_p = -\\frac{b}{a} = -\\frac{6}{3} = -2$.',
            'Solution homogène : $y_h = Ce^{3x}$.',
            'Solution générale : $y(x) = Ce^{3x} - 2$.',
            'Condition initiale $y(0) = 1$ : $Ce^{0} - 2 = 1 \\Rightarrow C - 2 = 1 \\Rightarrow C = 3$.',
            'Solution particulière : $y(x) = 3e^{3x} - 2$.',
            'Vérification : $y\' = 9e^{3x}$ et $3y + 6 = 3(3e^{3x} - 2) + 6 = 9e^{3x} - 6 + 6 = 9e^{3x}$. Correct !',
          ],
        },
        {
          type: 'exercise',
          text: 'Exemple 2 : Résoudre $y\'\' - 5y\' + 6y = 0$.',
        },
        {
          type: 'correction',
          text: 'Correction — Exemple 2 (ED du 2nd ordre, cas $\\Delta > 0$)',
          items: [
            'Équation caractéristique : $r^2 - 5r + 6 = 0$.',
            '$\\Delta = (-5)^2 - 4 \\times 1 \\times 6 = 25 - 24 = 1 > 0$.',
            '$r_1 = \\frac{5 - 1}{2} = 2$ et $r_2 = \\frac{5 + 1}{2} = 3$.',
            'Deux racines réelles distinctes → Cas 1.',
            'Solution générale : $y(x) = C_1 e^{2x} + C_2 e^{3x}$.',
            'Vérification : $y\' = 2C_1 e^{2x} + 3C_2 e^{3x}$ et $y\'\' = 4C_1 e^{2x} + 9C_2 e^{3x}$. Substituer confirme l\'annulation.',
          ],
        },
        {
          type: 'exercise',
          text: 'Exemple 3 : Résoudre $y\'\' + 4y\' + 4y = 0$ avec $y(0) = 1$ et $y\'(0) = 0$.',
        },
        {
          type: 'correction',
          text: 'Correction — Exemple 3 (ED du 2nd ordre, racine double)',
          items: [
            'Équation caractéristique : $r^2 + 4r + 4 = 0$, soit $(r+2)^2 = 0$.',
            '$\\Delta = 16 - 16 = 0$. Racine double $r_0 = -2$.',
            'Solution générale : $y(x) = (C_1 + C_2 x)e^{-2x}$.',
            'Condition $y(0) = 1$ : $(C_1 + 0)e^{0} = C_1 = 1$.',
            'On dérive : $y\'(x) = C_2 e^{-2x} - 2(C_1 + C_2 x)e^{-2x} = (C_2 - 2C_1 - 2C_2 x)e^{-2x}$.',
            'Condition $y\'(0) = 0$ : $C_2 - 2C_1 = C_2 - 2 = 0 \\Rightarrow C_2 = 2$.',
            'Solution finale : $y(x) = (1 + 2x)e^{-2x}$.',
          ],
        },
        {
          type: 'exercise',
          text: 'Exemple 4 : Résoudre $y\'\' - 2y\' + 5y = 0$.',
        },
        {
          type: 'correction',
          text: 'Correction — Exemple 4 (ED du 2nd ordre, racines complexes)',
          items: [
            'Équation caractéristique : $r^2 - 2r + 5 = 0$.',
            '$\\Delta = 4 - 20 = -16 < 0$.',
            '$\\alpha = \\frac{-(-2)}{2} = 1$ et $\\beta = \\frac{\\sqrt{16}}{2} = 2$.',
            'Racines : $r = 1 \\pm 2i$.',
            'Solution générale : $y(x) = e^{x}\\left[C_1 \\cos(2x) + C_2 \\sin(2x)\\right]$.',
            'Interprétation physique : oscillation (cos, sin) amortie (ou amplifiée) par $e^{\\alpha x}$.',
          ],
        },
      ],
    },
    {
      title: '6. Exercices d\'entraînement',
      content: [
        {
          type: 'exercise',
          text: 'Exercice 1 : Résoudre $y\' = -2y + 8$ avec $y(0) = 5$. Quelle est la limite de $y(x)$ quand $x \\to +\\infty$ ?',
        },
        {
          type: 'correction',
          text: 'Correction exercice 1',
          items: [
            '$a = -2$, $b = 8$. Solution particulière : $y_p = -\\frac{8}{-2} = 4$.',
            'Solution générale : $y(x) = Ce^{-2x} + 4$.',
            '$y(0) = C + 4 = 5 \\Rightarrow C = 1$.',
            'Solution : $y(x) = e^{-2x} + 4$.',
            'Limite : $\\lim_{x \\to +\\infty} e^{-2x} = 0$, donc $\\lim_{x \\to +\\infty} y(x) = 4$.',
            'Interprétation : la solution converge vers la valeur d\'équilibre $y_p = 4$.',
          ],
        },
        {
          type: 'exercise',
          text: 'Exercice 2 : Résoudre $y\'\' + y = 0$. Que représente physiquement cette équation ?',
        },
        {
          type: 'correction',
          text: 'Correction exercice 2',
          items: [
            'Équation caractéristique : $r^2 + 1 = 0 \\Rightarrow r^2 = -1$.',
            '$\\Delta = 0 - 4 = -4 < 0$. Racines : $r = \\pm i$ (donc $\\alpha = 0$, $\\beta = 1$).',
            'Solution : $y(x) = C_1 \\cos(x) + C_2 \\sin(x)$.',
            'Physique : c\'est l\'équation d\'un oscillateur harmonique (pendule, ressort) sans amortissement. Les solutions sont des oscillations pures.',
          ],
        },
        {
          type: 'exercise',
          text: 'Exercice 3 : Une substance se désintègre selon $N\' = -0{,}1 \\cdot N$ avec $N(0) = 1000$. Trouver $N(t)$ et le temps pour que la masse soit divisée par 2.',
        },
        {
          type: 'correction',
          text: 'Correction exercice 3',
          items: [
            'Type $N\' = aN$ avec $a = -0{,}1$. Solution générale : $N(t) = Ce^{-0{,}1t}$.',
            'Condition $N(0) = 1000$ : $C = 1000$. Donc $N(t) = 1000 e^{-0{,}1t}$.',
            'Demi-vie : $N(t_{1/2}) = 500 \\Rightarrow e^{-0{,}1t_{1/2}} = 0{,}5 \\Rightarrow t_{1/2} = \\frac{\\ln 2}{0{,}1} \\approx 6{,}93$.',
          ],
        },
        {
          type: 'exercise',
          text: 'Exercice 4 : Résoudre $y\'\' + 2y\' + 10y = 0$.',
        },
        {
          type: 'correction',
          text: 'Correction exercice 4',
          items: [
            'Équation caractéristique : $r^2 + 2r + 10 = 0$.',
            '$\\Delta = 4 - 40 = -36 < 0$.',
            '$\\alpha = \\frac{-2}{2} = -1$ et $\\beta = \\frac{\\sqrt{36}}{2} = 3$.',
            'Solution : $y(x) = e^{-x}\\left[C_1 \\cos(3x) + C_2 \\sin(3x)\\right]$.',
            'Interprétation : oscillations de fréquence $\\beta = 3$ amorties par $e^{-x}$ (le facteur $\\alpha = -1 < 0$ assure la décroissance).',
          ],
        },
      ],
    },
  ],
  erreurs: [
    'Confondre $y\' = ay$ (solution $Ce^{ax}$) et $y\' + ay = 0$ (solution $Ce^{-ax}$) — attention au signe de l\'exposant !',
    'Oublier la solution particulière : pour $y\' = ay + b$, la solution est $Ce^{ax} - \\frac{b}{a}$, pas seulement $Ce^{ax}$.',
    'Dans le cas $\\Delta = 0$ (racine double), oublier le facteur $x$ : la solution est $(C_1 + C_2 x)e^{r_0 x}$, pas $(C_1 + C_2)e^{r_0 x}$.',
    'Mal calculer $\\alpha$ et $\\beta$ dans le cas complexe : $\\alpha = \\frac{-b}{2a}$ et $\\beta = \\frac{\\sqrt{|\\Delta|}}{2a}$ (positif).',
    'Ne pas vérifier la solution en la réinjectant dans l\'équation — c\'est 2 minutes bien investies en examen.',
    'Oublier d\'utiliser les deux conditions initiales pour déterminer $C_1$ ET $C_2$ dans les ED du 2nd ordre.',
  ],
  bilan: [
    'Je reconnais le type d\'ED du 1er ordre ($y\' = ay$ ou $y\' = ay + b$) et j\'écris immédiatement la solution générale.',
    'Je sais appliquer une condition initiale $y(x_0) = y_0$ pour trouver la constante $C$.',
    'Je sais écrire l\'équation caractéristique $ar^2 + br + c = 0$ d\'une ED du 2nd ordre.',
    'Je distingue les 3 cas ($\\Delta > 0$, $\\Delta = 0$, $\\Delta < 0$) et j\'écris la forme correcte de la solution.',
    'Je sais dériver la solution générale pour appliquer la condition sur $y\'(x_0)$.',
    'Je sais vérifier ma solution et l\'interpréter physiquement (convergence, oscillation, etc.).',
  ],
}
