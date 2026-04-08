import { ChapterContent } from './types'

export const chapterContent: ChapterContent = {
  slug: 'suites',
  title: 'Suites Numériques',
  icon: '🔢',
  importance: 'Les suites reviennent régulièrement en examen, souvent couplées avec les fonctions ou la récurrence. Les formules de somme et de terme général sont à connaître par cœur.',
  days: 'Jours 15–16',
  sections: [
    {
      title: '1. Idée clé : qu\'est-ce qu\'une suite ?',
      content: [
        {
          type: 'text',
          text: 'Une **suite** $(u_n)$ est simplement une liste ordonnée de nombres : $u_0, u_1, u_2, u_3, \\ldots$ On peut la voir comme une **fonction de $\\mathbb{N}$ dans $\\mathbb{R}$** : à chaque entier $n$ on associe un nombre $u_n$.',
        },
        {
          type: 'text',
          text: '**Deux manières de définir une suite** :\n- Par une **formule explicite** : $u_n = 2n + 1$ donne directement $u_n$ en fonction de $n$.\n- Par une **relation de récurrence** : $u_{n+1} = 2u_n + 1$, avec une valeur initiale $u_0$.',
        },
        {
          type: 'tip',
          text: 'Analogie : une suite arithmétique, c\'est comme compter en sautant à intervalles réguliers. Une suite géométrique, c\'est comme doubler (ou halver) à chaque étape. Les deux modèles apparaissent partout en sciences.',
        },
      ],
    },
    {
      title: '2. Suite arithmétique',
      content: [
        {
          type: 'text',
          text: '**Définition** : une suite $(u_n)$ est **arithmétique** de raison $r$ si $u_{n+1} = u_n + r$ pour tout $n$. On ajoute toujours la même quantité.',
        },
        {
          type: 'formula',
          math: 'u_n = u_0 + n r \\quad \\text{(terme général à partir de } u_0 \\text{)}',
        },
        {
          type: 'formula',
          math: 'u_n = u_p + (n - p) r \\quad \\text{(forme générale entre deux indices)}',
        },
        {
          type: 'formula',
          math: 'S_n = \\sum_{k=0}^{n} u_k = (n+1) \\times \\frac{u_0 + u_n}{2} \\quad \\text{(somme des } n+1 \\text{ premiers termes)}',
        },
        {
          type: 'tip',
          text: 'Formule mnémotechnique : $S = \\text{nb de termes} \\times \\dfrac{\\text{premier} + \\text{dernier}}{2}$. C\'est la moyenne du premier et du dernier, multipliée par le nombre de termes.',
        },
        {
          type: 'text',
          text: '**Monotonie** : si $r > 0$, la suite est **croissante** ; si $r < 0$, **décroissante** ; si $r = 0$, **constante**.',
        },
        {
          type: 'text',
          text: '**Limite** : si $r \\neq 0$, alors $\\lim_{n \\to +\\infty} u_n = \\pm \\infty$ (la suite diverge). Une suite arithmétique non constante diverge toujours.',
        },
        {
          type: 'text',
          text: '**Exemple concret** : économies mensuelles. Si on économise 200€ par mois en partant de 500€ : $u_n = 500 + 200n$. Après 12 mois : $u_{12} = 500 + 2400 = 2900$€.',
        },
      ],
    },
    {
      title: '3. Suite géométrique',
      content: [
        {
          type: 'text',
          text: '**Définition** : une suite $(u_n)$ est **géométrique** de raison $q$ si $u_{n+1} = q \\cdot u_n$ pour tout $n$. On multiplie toujours par le même facteur.',
        },
        {
          type: 'formula',
          math: 'u_n = u_0 \\times q^n \\quad \\text{(terme général)}',
        },
        {
          type: 'formula',
          math: 'u_n = u_p \\times q^{n-p} \\quad \\text{(forme générale entre deux indices)}',
        },
        {
          type: 'formula',
          math: 'S_n = \\sum_{k=0}^{n} u_k = u_0 \\times \\frac{1 - q^{n+1}}{1 - q} \\quad (q \\neq 1)',
        },
        {
          type: 'tip',
          text: 'Si $q = 1$, tous les termes sont égaux à $u_0$ et $S_n = (n+1) u_0$.',
        },
        {
          type: 'text',
          text: '**Comportement selon $q$** :',
        },
        {
          type: 'formula',
          math: '|q| < 1 \\Longrightarrow \\lim_{n \\to +\\infty} q^n = 0 \\quad \\text{(convergence vers 0)}',
        },
        {
          type: 'formula',
          math: 'q > 1 \\Longrightarrow \\lim_{n \\to +\\infty} q^n = +\\infty \\quad \\text{(diverge vers } +\\infty \\text{)}',
        },
        {
          type: 'formula',
          math: 'q = -1 \\Longrightarrow q^n \\text{ alterne entre } +1 \\text{ et } -1 \\text{ (diverge)}',
        },
        {
          type: 'text',
          text: '**Exemple concret** : capital avec intérêts composés à 5% par an, capital initial 1000€. $u_n = 1000 \\times 1{,}05^n$. Après 10 ans : $u_{10} = 1000 \\times 1{,}05^{10} \\approx 1629$€.',
        },
        {
          type: 'table',
          headers: ['Valeur de $q$', 'Comportement de $q^n$', 'Suite $(u_n)$ avec $u_0 > 0$'],
          rows: [
            ['q > 1', '\\to +\\infty', '\\text{Croissante, diverge}'],
            ['q = 1', '= 1', '\\text{Constante}'],
            ['0 < q < 1', '\\to 0^+', '\\text{Décroissante, tend vers 0}'],
            ['q = 0', '= 0 \\text{ pour } n \\geq 1', '\\text{Nulle à partir de } u_1'],
            ['-1 < q < 0', '\\to 0 \\text{ en alternant}', '\\text{Alterne de signe, tend vers 0}'],
            ['q = -1', '\\text{alterne } \\pm 1', '\\text{Diverge (alterne)}'],
            ['q < -1', '\\to \\pm\\infty', '\\text{Diverge (alterne, grands termes)}'],
          ],
        },
      ],
    },
    {
      title: '4. Monotonie d\'une suite',
      content: [
        {
          type: 'text',
          text: 'Pour une suite donnée par une formule $u_n = f(n)$ ou une récurrence $u_{n+1} = f(u_n)$, on dispose de trois méthodes pour étudier la monotonie.',
        },
        {
          type: 'method',
          text: '**Méthode 1 — Signe de la différence** :\n- Calculer $u_{n+1} - u_n$\n- Si $u_{n+1} - u_n > 0$ pour tout $n \\geq 0$ → suite strictement croissante\n- Si $u_{n+1} - u_n < 0$ pour tout $n \\geq 0$ → suite strictement décroissante\n- Si $u_{n+1} - u_n = 0$ → suite constante\n\nExemple : $u_n = n^2$. $u_{n+1} - u_n = (n+1)^2 - n^2 = 2n + 1 > 0$. Croissante.',
        },
        {
          type: 'method',
          text: '**Méthode 2 — Quotient** (si $u_n > 0$ pour tout $n$) :\n- Calculer $\\frac{u_{n+1}}{u_n}$\n- Si $> 1$ → croissante\n- Si $< 1$ → décroissante\n- Si $= 1$ → constante\n\nExemple : $u_n = \\frac{1}{n+1}$. $\\frac{u_{n+1}}{u_n} = \\frac{n+1}{n+2} < 1$. Décroissante.',
        },
        {
          type: 'method',
          text: '**Méthode 3 — Fonction associée** (pour $u_{n+1} = f(u_n)$) :\n- Si $f$ est croissante, étudier le signe de $f(x) - x$ :\n  - $f(x) > x$ et $u_0 < \\ell$ → suite croissante\n  - $f(x) < x$ et $u_0 > \\ell$ → suite décroissante\n- Utiliser un tableau de variation ou une représentation graphique (la "toile d\'araignée")',
        },
      ],
    },
    {
      title: '5. Convergence et limites',
      content: [
        {
          type: 'text',
          text: 'Une suite **converge** vers $\\ell$ si $u_n$ se rapproche de $\\ell$ quand $n$ tend vers l\'infini : $\\lim_{n \\to +\\infty} u_n = \\ell$. Sinon, la suite **diverge**.',
        },
        {
          type: 'tip',
          text: 'Théorèmes fondamentaux de convergence :\n- Toute suite **croissante majorée** converge.\n- Toute suite **décroissante minorée** converge.\n(Ces théorèmes ne donnent pas la valeur de la limite — seulement son existence !)',
        },
        {
          type: 'text',
          text: 'Pour une suite récurrente $u_{n+1} = f(u_n)$ qui converge vers $\\ell$, la limite est un **point fixe** de $f$ :',
        },
        {
          type: 'formula',
          math: 'u_{n+1} = f(u_n) \\xrightarrow[n \\to +\\infty]{} \\ell = f(\\ell)',
        },
        {
          type: 'text',
          text: '**Suites adjacentes** : si $(u_n)$ est croissante, $(v_n)$ est décroissante, et $\\lim_{n \\to +\\infty}(v_n - u_n) = 0$, alors les deux suites **convergent vers la même limite** $\\ell$, avec $u_n \\leq \\ell \\leq v_n$ pour tout $n$.',
        },
        {
          type: 'text',
          text: '**Règles de calcul sur les limites** : si $\\lim u_n = \\ell$ et $\\lim v_n = m$ (finies), alors $\\lim(u_n + v_n) = \\ell + m$, $\\lim(u_n \\cdot v_n) = \\ell m$, etc. Attention aux **formes indéterminées** $\\frac{\\infty}{\\infty}$, $\\infty - \\infty$, $0 \\times \\infty$.',
        },
      ],
    },
    {
      title: '6. Suites récurrentes $u_{n+1} = f(u_n)$',
      content: [
        {
          type: 'method',
          text: '**Plan d\'étude complet d\'une suite récurrente** :\n1. **Points fixes** : résoudre $f(x) = x$ → trouver les candidats à la limite.\n2. **Monotonie** : calculer $u_{n+1} - u_n = f(u_n) - u_n$. Signer cette expression.\n3. **Borne** : montrer que la suite est majorée (ou minorée) — souvent par récurrence.\n4. **Convergence** : théorème (croissante + majorée → converge).\n5. **Limite** : la limite $\\ell$ vérifie $\\ell = f(\\ell)$. Choisir la bonne racine selon les bornes.',
        },
        {
          type: 'text',
          text: '**Astuce du changement de variable** : si $u_{n+1} = au_n + b$ (récurrence affine), poser $v_n = u_n - L$ où $L$ est le point fixe ($L = aL + b$, i.e. $L = \\frac{b}{1-a}$). Alors $(v_n)$ est géométrique de raison $a$.',
        },
        {
          type: 'formula',
          math: 'u_{n+1} = au_n + b \\quad \\Longrightarrow \\quad v_n = u_n - \\frac{b}{1-a} \\text{ est géométrique de raison } a',
        },
      ],
    },
    {
      title: '7. Exemples corrigés',
      content: [
        {
          type: 'exercise',
          text: 'Exemple 1 : $(u_n)$ arithmétique avec $u_0 = 3$ et raison $r = 2$. Calculer $u_{10}$, $S_{10} = \\sum_{k=0}^{10} u_k$, et $\\sum_{k=0}^{99} u_k$.',
        },
        {
          type: 'correction',
          text: 'Correction exemple 1',
          items: [
            'Terme général : $u_n = 3 + 2n$.',
            '$u_{10} = 3 + 2 \\times 10 = 23$.',
            '$S_{10}$ : de $u_0$ à $u_{10}$, il y a $11$ termes. $S_{10} = 11 \\times \\frac{u_0 + u_{10}}{2} = 11 \\times \\frac{3 + 23}{2} = 11 \\times 13 = 143$.',
            '$\\sum_{k=0}^{99} u_k$ : 100 termes. $u_{99} = 3 + 198 = 201$. Somme $= 100 \\times \\frac{3 + 201}{2} = 100 \\times 102 = 10200$.',
          ],
        },
        {
          type: 'exercise',
          text: 'Exemple 2 : $(v_n)$ géométrique avec $v_0 = 4$ et raison $q = \\frac{1}{2}$. Calculer $v_5$, $S_5$, et $\\lim_{n \\to +\\infty} v_n$.',
        },
        {
          type: 'correction',
          text: 'Correction exemple 2',
          items: [
            'Terme général : $v_n = 4 \\times \\left(\\frac{1}{2}\\right)^n$.',
            '$v_5 = 4 \\times \\frac{1}{32} = \\frac{4}{32} = \\frac{1}{8}$.',
            '$S_5 = 4 \\times \\frac{1 - (1/2)^6}{1 - 1/2} = 4 \\times \\frac{1 - 1/64}{1/2} = 8 \\times \\frac{63}{64} = \\frac{63}{8}$.',
            '$|q| = \\frac{1}{2} < 1$, donc $\\lim_{n \\to +\\infty} v_n = 0$. La suite décroît vers 0.',
          ],
        },
        {
          type: 'exercise',
          text: 'Exemple 3 : Soit $u_{n+1} = \\frac{1}{2}u_n + 1$ avec $u_0 = 0$. Étudier la convergence et trouver la limite.',
        },
        {
          type: 'correction',
          text: 'Correction exemple 3 (changement de variable)',
          items: [
            'Point fixe : $\\ell = \\frac{1}{2}\\ell + 1 \\Rightarrow \\frac{1}{2}\\ell = 1 \\Rightarrow \\ell = 2$.',
            'Changement de variable : posons $v_n = u_n - 2$.',
            '$v_{n+1} = u_{n+1} - 2 = \\frac{1}{2}u_n + 1 - 2 = \\frac{1}{2}u_n - 1 = \\frac{1}{2}(u_n - 2) = \\frac{1}{2}v_n$.',
            '$(v_n)$ est géométrique de raison $\\frac{1}{2}$ et $v_0 = u_0 - 2 = -2$.',
            'Donc $v_n = -2 \\times \\left(\\frac{1}{2}\\right)^n$ et $u_n = 2 - 2 \\times \\left(\\frac{1}{2}\\right)^n$.',
            '$|1/2| < 1$, donc $\\lim_{n \\to +\\infty} u_n = 2$. Premiers termes : $u_0=0$, $u_1=1$, $u_2=1{,}5$, $u_3=1{,}75$, $\\ldots \\to 2$.',
          ],
        },
        {
          type: 'exercise',
          text: 'Exemple 4 : Montrer que $u_n = \\frac{n}{n+1}$ est croissante et majorée, puis trouver sa limite.',
        },
        {
          type: 'correction',
          text: 'Correction exemple 4',
          items: [
            'Différence : $u_{n+1} - u_n = \\frac{n+1}{n+2} - \\frac{n}{n+1} = \\frac{(n+1)^2 - n(n+2)}{(n+1)(n+2)} = \\frac{n^2+2n+1 - n^2-2n}{(n+1)(n+2)} = \\frac{1}{(n+1)(n+2)} > 0$.',
            'Donc $(u_n)$ est strictement croissante.',
            'Majoration : pour tout $n \\geq 0$, $n < n+1$, donc $\\frac{n}{n+1} < 1$. La suite est majorée par 1.',
            'Croissante et majorée → $(u_n)$ converge. Limite : $\\lim_{n\\to+\\infty} \\frac{n}{n+1} = \\lim_{n\\to+\\infty} \\frac{1}{1+1/n} = 1$.',
          ],
        },
      ],
    },
    {
      title: '8. Exercices d\'entraînement',
      content: [
        {
          type: 'exercise',
          text: 'Exercice 1 : $(u_n)$ arithmétique avec $u_3 = 10$ et $u_7 = 22$. Trouver $u_0$, $r$ et calculer $\\sum_{k=0}^{7} u_k$.',
        },
        {
          type: 'correction',
          text: 'Correction exercice 1',
          items: [
            '$u_7 - u_3 = (7-3)r = 4r = 22 - 10 = 12 \\Rightarrow r = 3$.',
            '$u_0 = u_3 - 3r = 10 - 9 = 1$.',
            '$u_7 = 22$, 8 termes (de $u_0$ à $u_7$). $\\sum_{k=0}^{7} u_k = 8 \\times \\frac{1 + 22}{2} = 8 \\times 11{,}5 = 92$.',
          ],
        },
        {
          type: 'exercise',
          text: 'Exercice 2 : Calculer $\\sum_{k=0}^{9} 3 \\times 2^k$.',
        },
        {
          type: 'correction',
          text: 'Correction exercice 2',
          items: [
            'Suite géométrique : $u_k = 3 \\times 2^k$, donc $u_0 = 3$, raison $q = 2$, nombre de termes = 10.',
            '$S = 3 \\times \\frac{1 - 2^{10}}{1 - 2} = 3 \\times \\frac{1 - 1024}{-1} = 3 \\times 1023 = 3069$.',
          ],
        },
        {
          type: 'exercise',
          text: 'Exercice 3 : Soit $u_{n+1} = \\sqrt{u_n + 2}$ avec $u_0 = 2$. Montrer que la suite est majorée par 2, puis qu\'elle est décroissante.',
        },
        {
          type: 'correction',
          text: 'Correction exercice 3',
          items: [
            'On montre par récurrence que $u_n \\leq 2$ pour tout $n$. Init : $u_0 = 2 \\leq 2$. Hér. : si $u_n \\leq 2$, alors $u_{n+1} = \\sqrt{u_n + 2} \\leq \\sqrt{2 + 2} = \\sqrt{4} = 2$.',
            'Différence : $u_{n+1} - u_n = \\sqrt{u_n + 2} - u_n$. Poser $f(x) = \\sqrt{x+2} - x$. $f(2) = 2 - 2 = 0$ et $f\'(x) = \\frac{1}{2\\sqrt{x+2}} - 1 < 0$ pour $x > 0{,}25$.',
            'Donc pour $u_n \\leq 2$, on a $u_{n+1} \\leq u_n$ → suite décroissante. Décroissante + minorée par 0 → converge.',
            'Limite : $\\ell = \\sqrt{\\ell + 2} \\Rightarrow \\ell^2 = \\ell + 2 \\Rightarrow \\ell^2 - \\ell - 2 = 0 \\Rightarrow (\\ell-2)(\\ell+1) = 0$. Comme $\\ell \\geq 0$, $\\ell = 2$.',
          ],
        },
      ],
    },
  ],
  erreurs: [
    'Confondre arithmétique ($u_{n+1} = u_n + r$, on additionne) et géométrique ($u_{n+1} = q \\cdot u_n$, on multiplie).',
    'Mal compter le nombre de termes : de $u_0$ à $u_n$, il y a $n + 1$ termes, pas $n$.',
    'Oublier la condition $q \\neq 1$ dans la formule de la somme géométrique $\\frac{1 - q^{n+1}}{1-q}$.',
    'Conclure qu\'une suite converge parce qu\'elle est croissante, sans vérifier qu\'elle est majorée.',
    'Pour une suite récurrente $u_{n+1} = f(u_n)$ qui converge, ne pas vérifier que le point fixe est la bonne racine.',
    'Oublier le terme initial $u_p$ dans la formule $u_n = u_p + (n-p)r$ ou $u_n = u_p \\cdot q^{n-p}$.',
  ],
  bilan: [
    'Je connais les formules du terme général et de la somme pour les suites arithmétiques et géométriques.',
    'Je sais étudier la monotonie d\'une suite par la différence $u_{n+1} - u_n$, le quotient $\\frac{u_{n+1}}{u_n}$, ou la fonction associée.',
    'Je connais les critères de convergence (croissante + majorée, décroissante + minorée).',
    'Je sais étudier une suite récurrente $u_{n+1} = f(u_n)$ en 5 étapes (points fixes, monotonie, borne, convergence, limite).',
    'Je sais utiliser le changement de variable $v_n = u_n - L$ pour ramener une récurrence affine à une suite géométrique.',
    'Je sais faire un raisonnement par récurrence pour établir une propriété sur les termes de la suite.',
  ],
}
