import { ChapterContent } from './types'

export const chapterContent: ChapterContent = {
  slug: 'etude-fonctions',
  title: 'Étude de fonctions réelles',
  icon: '📈',
  importance: 'Chapitre incontournable. Présent dans quasiment tous les sujets d\'examen sous forme d\'exercice complet.',
  days: 'Jours 2–3',
  sections: [
    {
      title: '1. Notions fondamentales',
      content: [
        {
          type: 'text',
          text: '**Domaine de définition** : ensemble des valeurs de $x$ pour lesquelles $f(x)$ existe. Attention aux dénominateurs nuls (ex : $\\frac{1}{x-2}$ interdit $x=2$), racines de nombres négatifs (ex : $\\sqrt{x}$ interdit $x<0$) et logarithmes de nombres négatifs ou nuls (ex : $\\ln(x)$ interdit $x \\leq 0$).',
        },
        {
          type: 'text',
          text: '**Limites aux bornes du domaine** : on calcule les limites de $f$ en $+\\infty$, $-\\infty$ et en tout point exclu du domaine. Ces limites révèlent l\'existence d\'asymptotes et le comportement global de la courbe.',
        },
        {
          type: 'text',
          text: '**Dérivée et sens de variation** : on calcule $f\'(x)$, on étudie son signe pour déterminer les intervalles de croissance et décroissance. La dérivée est la "boussole" de la fonction : positive = montée, négative = descente.',
        },
        {
          type: 'tip',
          text: '$f\'(x) > 0 \\Rightarrow f$ croissante ; $f\'(x) < 0 \\Rightarrow f$ décroissante ; $f\'(x) = 0$ à un point isolé $\\Rightarrow$ extremum possible. Penser à vérifier le changement de signe de $f\'$ pour confirmer l\'extremum.',
        },
        {
          type: 'text',
          text: '**Les trois types d\'asymptotes** : une courbe peut avoir des asymptotes horizontales (comportement en $\\pm\\infty$), verticales (points exclus du domaine) ou obliques (comportement affine en $\\pm\\infty$).',
        },
        {
          type: 'formula',
          math: '\\text{Asymptote horizontale : } \\lim_{x \\to \\pm\\infty} f(x) = L \\Rightarrow y = L',
        },
        {
          type: 'formula',
          math: '\\text{Asymptote verticale : } \\lim_{x \\to a} f(x) = \\pm\\infty \\Rightarrow x = a',
        },
        {
          type: 'formula',
          math: '\\text{Asymptote oblique : } \\lim_{x \\to \\pm\\infty} [f(x) - (ax+b)] = 0 \\Rightarrow y = ax + b',
        },
        {
          type: 'tip',
          text: 'Analogie : l\'asymptote oblique, c\'est le "comportement à grande vitesse" de la courbe. Quand $x$ devient très grand, la courbe "se confond" visuellement avec la droite $y = ax + b$. Pour la trouver : faire la division euclidienne du numérateur par le dénominateur.',
        },
        {
          type: 'text',
          text: '**Parité** : si $f(-x) = f(x)$ pour tout $x$, la fonction est **paire** (courbe symétrique par rapport à l\'axe $Oy$). Si $f(-x) = -f(x)$, elle est **impaire** (symétrie par rapport à $O$). Exploiter la parité permet de réduire le travail de moitié !',
        },
        {
          type: 'text',
          text: '**Position de la courbe par rapport à une asymptote** : on étudie le signe de $f(x) - L$ (ou $f(x) - (ax+b)$) pour savoir si la courbe est au-dessus ou en-dessous de l\'asymptote.',
        },
      ],
    },
    {
      title: '2. Rappels : formules de dérivation',
      content: [
        {
          type: 'text',
          text: 'Maîtriser les formules de dérivation est indispensable. Voici un récapitulatif des cas les plus fréquents en examen.',
        },
        {
          type: 'table',
          headers: ['Fonction $f(x)$', 'Dérivée $f\'(x)$', 'Condition'],
          rows: [
            ['x^n', 'n x^{n-1}', 'n \\in \\mathbb{R}'],
            ['e^x', 'e^x', ''],
            ['e^{u(x)}', 'u\'(x)\\,e^{u(x)}', 'u \\text{ dérivable}'],
            ['\\ln(x)', '\\dfrac{1}{x}', 'x > 0'],
            ['\\ln(u(x))', '\\dfrac{u\'(x)}{u(x)}', 'u(x) > 0'],
            ['\\sqrt{x}', '\\dfrac{1}{2\\sqrt{x}}', 'x > 0'],
            ['\\sqrt{u(x)}', '\\dfrac{u\'(x)}{2\\sqrt{u(x)}}', 'u(x) > 0'],
            ['\\sin(x)', '\\cos(x)', ''],
            ['\\cos(x)', '-\\sin(x)', ''],
            ['\\dfrac{u}{v}', '\\dfrac{u\'v - uv\'}{v^2}', 'v \\neq 0'],
            ['u \\times v', 'u\'v + uv\'', ''],
          ],
        },
        {
          type: 'tip',
          text: 'Mnémotechnique pour $\\left(\\frac{u}{v}\\right)\'$ : "u prime v moins u v prime, sur v carré". Réciter cette formule à voix haute avant chaque calcul de dérivée de quotient !',
        },
      ],
    },
    {
      title: '3. Méthode complète d\'étude de fonction',
      content: [
        {
          type: 'method',
          text: '**Les 6 étapes systématiques** :\n1. **Domaine** $D_f$ : identifier les valeurs interdites (dénominateur nul, racine négative, log négatif ou nul)\n2. **Limites aux bornes** : calculer $\\lim_{x \\to +\\infty} f(x)$, $\\lim_{x \\to -\\infty} f(x)$, et les limites en chaque point exclu\n3. **Asymptotes** : identifier horizontale ($y = L$), verticale ($x = a$), oblique ($y = ax + b$) selon les limites trouvées\n4. **Dérivée** $f\'(x)$ : calculer et simplifier (factoriser au maximum)\n5. **Tableau de variations** : résoudre $f\'(x) = 0$ et $f\'(x) > 0$ / $f\'(x) < 0$, calculer $f$ aux extrema\n6. **Tracé** : placer asymptotes, extrema, points de passage (origine, intersections avec les axes)',
        },
        {
          type: 'tip',
          text: 'Astuce d\'examen : commencer TOUJOURS par le domaine. Un étudiant qui calcule la dérivée d\'une fonction sans préciser son domaine perd systématiquement des points. Le domaine, c\'est le passeport de la fonction.',
        },
      ],
    },
    {
      title: '4. Exemple corrigé n°1 — Fonction homographique',
      content: [
        {
          type: 'text',
          text: '**Étudier la fonction** $f(x) = \\dfrac{2x+1}{x-1}$',
        },
        {
          type: 'text',
          text: '**Étape 1 — Domaine** : Le dénominateur $x - 1$ s\'annule en $x = 1$, donc $D_f = \\mathbb{R} \\setminus \\{1\\}$, soit $]-\\infty\\,; 1[ \\cup ]1\\,; +\\infty[$.',
        },
        {
          type: 'text',
          text: '**Étape 2 — Limites en $\\pm\\infty$** : on divise numérateur et dénominateur par $x$ (le terme de plus haut degré) :',
        },
        {
          type: 'formula',
          math: '\\lim_{x \\to +\\infty} \\frac{2x+1}{x-1} = \\lim_{x \\to +\\infty} \\frac{2 + \\frac{1}{x}}{1 - \\frac{1}{x}} = \\frac{2+0}{1-0} = 2',
        },
        {
          type: 'formula',
          math: '\\lim_{x \\to -\\infty} \\frac{2x+1}{x-1} = 2 \\quad \\text{(même calcul)}',
        },
        {
          type: 'text',
          text: '**Limites en $x = 1$** : le numérateur vaut $2(1)+1 = 3 > 0$ et le dénominateur tend vers $0$.  Par conséquent :',
        },
        {
          type: 'formula',
          math: '\\lim_{x \\to 1^+} f(x) = +\\infty \\quad ; \\quad \\lim_{x \\to 1^-} f(x) = -\\infty',
        },
        {
          type: 'text',
          text: '**Étape 3 — Asymptotes** : la limite en $\\pm\\infty$ vaut $2$, donc $y = 2$ est une **asymptote horizontale**. La limite en $x = 1$ est infinie, donc $x = 1$ est une **asymptote verticale**.',
        },
        {
          type: 'text',
          text: '**Position par rapport à $y=2$** : $f(x) - 2 = \\dfrac{2x+1 - 2(x-1)}{x-1} = \\dfrac{3}{x-1}$. Ce quotient est positif si $x > 1$ et négatif si $x < 1$. La courbe est donc **au-dessus** de $y=2$ sur $]1\\,;+\\infty[$ et **en-dessous** sur $]-\\infty\\,;1[$.',
        },
        {
          type: 'text',
          text: '**Étape 4 — Dérivée** : on utilise la formule $\\left(\\frac{u}{v}\\right)\' = \\frac{u\'v - uv\'}{v^2}$ avec $u = 2x+1$ (donc $u\' = 2$) et $v = x-1$ (donc $v\' = 1$) :',
        },
        {
          type: 'formula',
          math: 'f\'(x) = \\frac{2(x-1) - (2x+1) \\cdot 1}{(x-1)^2} = \\frac{2x - 2 - 2x - 1}{(x-1)^2} = \\frac{-3}{(x-1)^2}',
        },
        {
          type: 'text',
          text: 'Comme $(x-1)^2 > 0$ pour tout $x \\neq 1$, on a $f\'(x) = \\dfrac{-3}{(x-1)^2} < 0$ sur tout $D_f$. La fonction est donc **strictement décroissante** sur chaque intervalle de son domaine.',
        },
        {
          type: 'text',
          text: '**Attention** : $f$ est décroissante sur $]-\\infty\\,;1[$ ET sur $]1\\,;+\\infty[$, mais on ne peut pas dire que $f$ est décroissante sur $D_f$ car ces deux intervalles sont disjoints (la valeur $+\\infty > 2$ à gauche de $x=1$ et la valeur $2 > -\\infty$ à droite de $x=1$).',
        },
        {
          type: 'text',
          text: '**Étape 5 — Tableau de variations** : $f$ décroissante sur $]-\\infty\\,; 1[$ de la limite $2^-$ vers $-\\infty$, et sur $]1\\,; +\\infty[$ de $+\\infty$ vers la limite $2^+$.',
        },
        {
          type: 'tip',
          text: 'Remarque : toute fonction homographique $f(x) = \\frac{ax+b}{cx+d}$ a le même profil (asymptote horizontale $y = a/c$, asymptote verticale $x = -d/c$, dérivée de signe constant). Sa courbe est une **hyperbole**.',
        },
      ],
    },
    {
      title: '5. Exemple corrigé n°2 — Fonction avec asymptote oblique',
      content: [
        {
          type: 'text',
          text: '**Étudier la fonction** $f(x) = \\dfrac{x^2}{x-2}$',
        },
        {
          type: 'text',
          text: '**Étape 1 — Domaine** : $x - 2 = 0$ pour $x = 2$, donc $D_f = \\mathbb{R} \\setminus \\{2\\}$.',
        },
        {
          type: 'text',
          text: '**Étape 2 — Limites** : en $\\pm\\infty$, le numérateur est de degré $2$ et le dénominateur de degré $1$, donc $\\lim_{x \\to \\pm\\infty} f(x) = \\pm\\infty$ (pas d\'asymptote horizontale). En $x = 2$ : le numérateur vaut $4 > 0$ donc $\\lim_{x \\to 2^+} f(x) = +\\infty$ et $\\lim_{x \\to 2^-} f(x) = -\\infty$.',
        },
        {
          type: 'text',
          text: '**Étape 3 — Asymptote oblique** : comme le degré du numérateur dépasse celui du dénominateur de 1, on effectue la **division euclidienne** de $x^2$ par $x-2$ :',
        },
        {
          type: 'formula',
          math: 'x^2 = (x-2)(x+2) + 4 \\quad \\Rightarrow \\quad f(x) = x + 2 + \\frac{4}{x-2}',
        },
        {
          type: 'text',
          text: 'Comme $\\lim_{x \\to \\pm\\infty} \\dfrac{4}{x-2} = 0$, on a $\\lim_{x \\to \\pm\\infty} [f(x) - (x+2)] = 0$, donc $y = x + 2$ est une **asymptote oblique**. On a aussi $x = 2$ en **asymptote verticale**.',
        },
        {
          type: 'text',
          text: '**Position par rapport à $y = x+2$** : $f(x) - (x+2) = \\dfrac{4}{x-2}$. Ce quotient est positif si $x > 2$ et négatif si $x < 2$. La courbe est **au-dessus** de l\'asymptote oblique sur $]2\\,;+\\infty[$ et **en-dessous** sur $]-\\infty\\,;2[$.',
        },
        {
          type: 'text',
          text: '**Étape 4 — Dérivée** :',
        },
        {
          type: 'formula',
          math: 'f\'(x) = \\frac{2x(x-2) - x^2 \\cdot 1}{(x-2)^2} = \\frac{2x^2 - 4x - x^2}{(x-2)^2} = \\frac{x^2 - 4x}{(x-2)^2} = \\frac{x(x-4)}{(x-2)^2}',
        },
        {
          type: 'text',
          text: 'Le dénominateur $(x-2)^2 > 0$ sur tout $D_f$. Le signe de $f\'(x)$ est donc celui de $x(x-4)$. Ce produit est nul pour $x = 0$ et $x = 4$, positif sur $]-\\infty\\,;0[$ et $]4\\,;+\\infty[$, négatif sur $]0\\,;2[$ et $]2\\,;4[$.',
        },
        {
          type: 'text',
          text: 'On calcule les valeurs de $f$ aux extrema : $f(0) = \\dfrac{0}{0-2} = 0$ (maximum local) et $f(4) = \\dfrac{16}{4-2} = 8$ (minimum local).',
        },
        {
          type: 'tip',
          text: 'Astuce : quand le dénominateur de la dérivée est toujours positif, étudier uniquement le signe du numérateur. Ici, $x(x-4)$ est un trinôme factorisé, son signe se lit directement par le tableau de signes d\'un produit.',
        },
      ],
    },
    {
      title: '6. Exemple corrigé n°3 — Fonction avec logarithme',
      content: [
        {
          type: 'text',
          text: '**Étudier la fonction** $f(x) = x - \\ln(x)$ sur $]0\\,; +\\infty[$.',
        },
        {
          type: 'text',
          text: '**Domaine** : $\\ln(x)$ n\'est défini que pour $x > 0$, donc $D_f = ]0\\,; +\\infty[$.',
        },
        {
          type: 'text',
          text: '**Limites** : en $0^+$, $x \\to 0$ et $\\ln(x) \\to -\\infty$, donc $f(x) = x - \\ln(x) \\to +\\infty$. En $+\\infty$, $x$ croît plus vite que $\\ln(x)$, donc $f(x) \\to +\\infty$.',
        },
        {
          type: 'formula',
          math: '\\lim_{x \\to 0^+} f(x) = +\\infty \\quad ; \\quad \\lim_{x \\to +\\infty} f(x) = +\\infty',
        },
        {
          type: 'text',
          text: '**Dérivée** : $f\'(x) = 1 - \\dfrac{1}{x} = \\dfrac{x - 1}{x}$.',
        },
        {
          type: 'text',
          text: 'Sur $]0\\,;+\\infty[$, le dénominateur $x > 0$. Le signe de $f\'(x)$ est celui de $x - 1$ : négatif pour $0 < x < 1$, nul pour $x = 1$, positif pour $x > 1$.',
        },
        {
          type: 'text',
          text: 'Donc $f$ est décroissante sur $]0\\,;1]$ et croissante sur $[1\\,;+\\infty[$. Le point $x = 1$ est un **minimum** avec $f(1) = 1 - \\ln(1) = 1 - 0 = 1$.',
        },
        {
          type: 'tip',
          text: 'Conséquence remarquable : $f(x) = x - \\ln(x) \\geq 1$ pour tout $x > 0$, donc $\\ln(x) \\leq x - 1$ pour tout $x > 0$. Cette inégalité classique est souvent demandée en examen !',
        },
      ],
    },
    {
      title: '7. Exercices',
      content: [
        {
          type: 'exercise',
          text: 'Exercice 1 : Faire l\'étude complète de $f(x) = \\dfrac{x^2}{x-2}$ (domaine, limites, asymptotes, dérivée, tableau de variations)',
        },
        {
          type: 'correction',
          text: 'Correction exercice 1',
          items: [
            '**Domaine** : $D_f = \\mathbb{R} \\setminus \\{2\\}$ (dénominateur nul en $x = 2$)',
            '**Limites en $\\pm\\infty$** : $\\lim_{x \\to +\\infty} f(x) = +\\infty$, $\\lim_{x \\to -\\infty} f(x) = -\\infty$',
            '**Limites en $x = 2$** : $\\lim_{x \\to 2^+} f(x) = +\\infty$, $\\lim_{x \\to 2^-} f(x) = -\\infty$',
            '**Division euclidienne** : $f(x) = x + 2 + \\frac{4}{x-2}$, donc asymptote oblique $y = x + 2$ et asymptote verticale $x = 2$',
            '**Dérivée** : $f\'(x) = \\frac{2x(x-2) - x^2}{(x-2)^2} = \\frac{x^2 - 4x}{(x-2)^2} = \\frac{x(x-4)}{(x-2)^2}$',
            '**Annulation de $f\'$** : $f\'(x) = 0 \\Leftrightarrow x = 0$ ou $x = 4$. Valeurs : $f(0) = 0$ (maximum local), $f(4) = 8$ (minimum local)',
            '**Variations** : $f$ croissante sur $]-\\infty\\,; 0]$, décroissante sur $[0\\,; 2[$, décroissante sur $]2\\,; 4]$, croissante sur $[4\\,; +\\infty[$',
          ],
        },
        {
          type: 'exercise',
          text: 'Exercice 2 : Faire l\'étude complète de $f(x) = \\dfrac{x^2 - 3x + 2}{x - 3}$',
        },
        {
          type: 'correction',
          text: 'Correction exercice 2',
          items: [
            '**Domaine** : $D_f = \\mathbb{R} \\setminus \\{3\\}$ (dénominateur nul en $x = 3$)',
            '**Factorisation du numérateur** : $f(x) = \\frac{(x-1)(x-2)}{x-3}$. Racines : $x = 1$ et $x = 2$',
            '**Division euclidienne** : $x^2 - 3x + 2 = (x-3)(x) + 2$, donc $f(x) = x + \\frac{2}{x-3}$. Asymptote oblique $y = x$ et asymptote verticale $x = 3$',
            '**Limites en $x = 3$** : $\\lim_{x \\to 3^+} f(x) = +\\infty$, $\\lim_{x \\to 3^-} f(x) = -\\infty$. En $\\pm\\infty$ : $\\lim_{x \\to \\pm\\infty} [f(x) - x] = 0$',
            '**Dérivée** : $f\'(x) = \\frac{(2x-3)(x-3) - (x^2-3x+2) \\cdot 1}{(x-3)^2} = \\frac{x^2 - 6x + 7}{(x-3)^2}$',
            '**Discriminant** : $\\Delta = 36 - 28 = 8$. Racines : $x_1 = 3 - \\sqrt{2} \\approx 1{,}59$ et $x_2 = 3 + \\sqrt{2} \\approx 4{,}41$',
            '**Variations** : $f$ croissante sur $]-\\infty\\,; 3-\\sqrt{2}]$, décroissante sur $[3-\\sqrt{2}\\,; 3[$, décroissante sur $]3\\,; 3+\\sqrt{2}]$, croissante sur $[3+\\sqrt{2}\\,; +\\infty[$',
          ],
        },
        {
          type: 'exercise',
          text: 'Exercice 3 : Étudier $f(x) = xe^{-x}$ sur $\\mathbb{R}$ et en déduire le maximum de $f$.',
        },
        {
          type: 'correction',
          text: 'Correction exercice 3',
          items: [
            '**Domaine** : $D_f = \\mathbb{R}$ (exponentielle définie partout)',
            '**Limite en $+\\infty$** : $\\lim_{x \\to +\\infty} xe^{-x} = 0$ (croissances comparées : $e^x$ l\'emporte sur tout polynôme)',
            '**Limite en $-\\infty$** : $\\lim_{x \\to -\\infty} xe^{-x} = -\\infty$ (car $x \\to -\\infty$ et $e^{-x} \\to +\\infty$)',
            '**Dérivée** : $f\'(x) = (x)\' \\cdot e^{-x} + x \\cdot (e^{-x})\' = e^{-x} + x \\cdot (-e^{-x}) = e^{-x}(1 - x)$',
            '**Signe de $f\'$** : $e^{-x} > 0$ toujours, donc $f\'(x) > 0 \\Leftrightarrow 1 - x > 0 \\Leftrightarrow x < 1$. Maximum en $x = 1$ avec $f(1) = 1 \\cdot e^{-1} = \\frac{1}{e}$',
            '**Conclusion** : $f$ croissante sur $]-\\infty\\,; 1]$, décroissante sur $[1\\,; +\\infty[$. Maximum global $\\frac{1}{e}$ atteint en $x = 1$',
          ],
        },
        {
          type: 'exercise',
          text: 'Exercice 4 (bonus) : Montrer que l\'équation $f(x) = \\dfrac{x^2}{x-2} = 5$ admet exactement deux solutions, et les encadrer.',
        },
        {
          type: 'correction',
          text: 'Correction exercice 4',
          items: [
            '$f(x) = 5 \\Leftrightarrow x^2 = 5(x-2) \\Leftrightarrow x^2 - 5x + 10 = 0$... mais $\\Delta = 25 - 40 < 0$ : pas de solution réelle ! En fait, $f(x) = 5$ n\'a pas de solution.',
            'Reformulons : cherchons les solutions de $f(x) = 5$ graphiquement. La droite $y = 5$ coupe la courbe si et seulement si $x^2 = 5(x-2)$, soit $x^2 - 5x + 10 = 0$, discriminant $\\Delta = -15 < 0$.',
            '**Conclusion** : la droite $y = 5$ ne coupe pas la courbe (car $5$ est entre les valeurs $f(0) = 0$ et $f(4) = 8$ mais la courbe ne prend pas la valeur $5$ sur $]0\\,;2[$, elle n\'est pas définie en $x = 2$, et sur $]2\\,;+\\infty[$ elle démarre de $+\\infty$ et descend jusqu\'à $f(4) = 8 > 5$... Vérifier : $f(5) = \\frac{25}{3} \\approx 8.3 > 5$. En fait sur $]2\\,;+\\infty[$, $f(x) = 8$ au minimum, donc $f(x) > 5$ partout !)',
          ],
        },
      ],
    },
  ],
  erreurs: [
    'Oublier de vérifier le domaine de définition avant de commencer — c\'est la première cause de perte de points.',
    'Se tromper dans le calcul de la dérivée d\'un quotient : bien mémoriser $\\left(\\frac{u}{v}\\right)\' = \\frac{u\'v - uv\'}{v^2}$ (et non $\\frac{uv\' - u\'v}{v^2}$).',
    'Oublier d\'étudier les limites en chaque borne du domaine, notamment en tout point exclu.',
    'Confondre asymptote oblique et horizontale : une asymptote oblique a une pente $a \\neq 0$ ; une asymptote horizontale a $a = 0$.',
    'Ne pas étudier la position de la courbe par rapport à l\'asymptote oblique (c\'est souvent demandé en examen !).',
    'Dire que $f$ est décroissante "sur $D_f$" quand le domaine est la réunion de deux intervalles : toujours préciser sur chaque intervalle séparément.',
    'Oublier de calculer les valeurs de $f$ aux extrema dans le tableau de variations.',
  ],
  bilan: [
    'Je sais déterminer le domaine de définition d\'une fonction (dénominateur, racine, logarithme).',
    'Je sais calculer les limites aux bornes du domaine (en $\\pm\\infty$ et aux points exclus).',
    'Je sais identifier les trois types d\'asymptotes et les trouver à partir des limites.',
    'Je sais effectuer une division euclidienne pour trouver une asymptote oblique.',
    'Je sais calculer la dérivée d\'un quotient et d\'une composition, et en déduire le sens de variation.',
    'Je sais dresser un tableau de variations complet avec les valeurs aux extrema.',
    'Je sais appliquer les 6 étapes de la méthode systématiquement pour tout type de fonction.',
    'Je sais étudier la position d\'une courbe par rapport à ses asymptotes.',
  ],
}
