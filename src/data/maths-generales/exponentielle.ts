import { ChapterContent } from './types'

export const chapterContent: ChapterContent = {
  slug: 'exponentielle',
  title: 'Fonction Exponentielle',
  icon: '📉',
  importance: 'Aussi fréquent que le logarithme. L\'exponentielle apparaît dans les études de fonctions, les équations différentielles et les suites.',
  days: 'Jours 6–7',
  sections: [
    {
      title: '1. Définition et propriétés',
      content: [
        {
          type: 'text',
          text: '**Définition** : La fonction exponentielle, notée $\\exp$ ou $e^x$, est la **réciproque** du logarithme népérien. C\'est l\'unique fonction dérivable sur $\\mathbb{R}$ telle que $f\' = f$ et $f(0) = 1$.',
        },
        {
          type: 'tip',
          text: '**Intuition** : $e^x$ est "la fonction qui est sa propre dérivée". Elle modélise la croissance exponentielle : plus elle est grande, plus elle croît vite. Sa valeur en $0$ est $1$.',
        },
        {
          type: 'text',
          text: '**Relations réciproques** avec $\\ln$ — à mémoriser :',
        },
        {
          type: 'formula',
          math: 'e^{\\ln(x)} = x \\quad (x > 0) \\qquad ; \\qquad \\ln(e^x) = x \\quad (x \\in \\mathbb{R})',
        },
        {
          type: 'tip',
          text: 'Exemples concrets : $e^{\\ln 3} = 3$, $\\ln(e^5) = 5$, $e^{\\ln 7} = 7$, $\\ln(e^{-2}) = -2$. Ces simplifications sont très fréquentes en examen.',
        },
        {
          type: 'text',
          text: '**Propriétés algébriques** — l\'exponentielle transforme les sommes en produits :',
        },
        {
          type: 'formula',
          math: 'e^{a+b} = e^a \\times e^b',
        },
        {
          type: 'formula',
          math: 'e^{a-b} = \\frac{e^a}{e^b}',
        },
        {
          type: 'formula',
          math: '(e^a)^n = e^{na}',
        },
        {
          type: 'formula',
          math: 'e^0 = 1 \\quad ; \\quad e^1 = e \\approx 2{,}718',
        },
        {
          type: 'formula',
          math: 'e^x > 0 \\quad \\text{pour tout } x \\in \\mathbb{R}',
        },
        {
          type: 'tip',
          text: 'L\'exponentielle est **TOUJOURS strictement positive**. Donc $e^{f(x)} = 0$ n\'a **jamais** de solution ! Si on vous demande de résoudre $e^{2x-1} = 0$, la réponse est immédiate : aucune solution.',
        },
        {
          type: 'text',
          text: '**Exemples de simplifications** : $e^{2}\\cdot e^{3} = e^{5}$, $\\frac{e^7}{e^3} = e^{7-3} = e^4$, $(e^2)^4 = e^8$, $e^{-x} = \\frac{1}{e^x}$.',
        },
      ],
    },
    {
      title: '2. Dérivée et sens de variation',
      content: [
        {
          type: 'text',
          text: '**Dérivée de $e^x$** (cas de base) :',
        },
        {
          type: 'formula',
          math: '(e^x)\' = e^x',
        },
        {
          type: 'text',
          text: '**Dérivée composée** : si $u$ est une fonction dérivable,',
        },
        {
          type: 'formula',
          math: '(e^{u})\' = u\' \\cdot e^{u}',
        },
        {
          type: 'tip',
          text: 'Mémo : la dérivée de $e^{u}$ c\'est "la dérivée de l\'exposant, fois $e$ à la même puissance". Exemple : $(e^{3x^2+1})\' = 6x \\cdot e^{3x^2+1}$.',
        },
        {
          type: 'text',
          text: 'Comme $e^x > 0$ pour tout $x$, la fonction exponentielle est **strictement croissante** sur $\\mathbb{R}$.',
        },
        {
          type: 'tip',
          text: 'Conséquence directe : $e^a = e^b \\Leftrightarrow a = b$ et $e^a < e^b \\Leftrightarrow a < b$. La bijection permet de "passer au $\\ln$" des deux côtés.',
        },
        {
          type: 'text',
          text: '**Exemples de dérivées** : $(e^{-x})\' = -e^{-x}$, $(e^{2x+3})\' = 2e^{2x+3}$, $(xe^x)\' = e^x + xe^x = e^x(1+x)$.',
        },
      ],
    },
    {
      title: '3. Limites à connaître',
      content: [
        {
          type: 'text',
          text: '**Limites aux extrémités** de $\\mathbb{R}$ :',
        },
        {
          type: 'formula',
          math: '\\lim_{x \\to +\\infty} e^x = +\\infty',
        },
        {
          type: 'formula',
          math: '\\lim_{x \\to -\\infty} e^x = 0',
        },
        {
          type: 'tip',
          text: 'Mnémotechnique : $e^x \\to 0$ en $-\\infty$ (la courbe admet $y = 0$ comme asymptote horizontale à gauche) et $e^x \\to +\\infty$ en $+\\infty$ (elle "explose").',
        },
        {
          type: 'text',
          text: '**Croissances comparées** (très important en examen !) : $e^x$ est "plus forte" que n\'importe quelle puissance de $x$ en $+\\infty$.',
        },
        {
          type: 'formula',
          math: '\\lim_{x \\to +\\infty} \\frac{e^x}{x^n} = +\\infty \\quad \\text{pour tout } n \\in \\mathbb{N}',
        },
        {
          type: 'formula',
          math: '\\lim_{x \\to -\\infty} x^n e^x = 0 \\quad \\text{pour tout } n \\in \\mathbb{N}',
        },
        {
          type: 'tip',
          text: 'Retenir : "L\'exponentielle l\'emporte toujours sur les puissances en $+\\infty$" et "en $-\\infty$, $e^x$ tend vers $0$ plus vite que toute puissance". Exemples : $\\lim_{x \\to +\\infty} \\frac{e^x}{x^{100}} = +\\infty$, $\\lim_{x \\to -\\infty} x^{50} e^x = 0$.',
        },
        {
          type: 'text',
          text: '**Limite usuelle à reconnaître** : $\\lim_{x \\to +\\infty} x e^{-x} = \\lim_{x \\to +\\infty} \\frac{x}{e^x} = 0$, et plus généralement $\\lim_{x \\to +\\infty} x^n e^{-x} = 0$ pour tout $n \\in \\mathbb{N}$.',
        },
      ],
    },
    {
      title: '4. Méthodes',
      content: [
        {
          type: 'method',
          text: '**Résoudre une équation avec $\\exp$** :\n1. Isoler l\'exponentielle : $e^{f(x)} = k$\n2. Si $k \\leq 0$ : **pas de solution** (car $e^x > 0$ toujours)\n3. Si $k > 0$ : passer au $\\ln$ des deux côtés → $f(x) = \\ln(k)$\n4. Résoudre l\'équation obtenue\n\nExemple : $e^{3x-2} = 5$ → $3x - 2 = \\ln(5)$ → $x = \\frac{\\ln(5) + 2}{3}$',
        },
        {
          type: 'method',
          text: '**Changement de variable** pour les équations du type $ae^{2x} + be^x + c = 0$ :\nPoser $X = e^x$ avec $X > 0$.\nL\'équation devient $aX^2 + bX + c = 0$ (trinôme du second degré en $X$).\nAttention : ne garder que les solutions avec $X > 0$, puis résoudre $e^x = X$ en faisant $x = \\ln(X)$.\n\nExemple : $e^{2x} - 3e^x + 2 = 0$ devient $X^2 - 3X + 2 = 0$.',
        },
        {
          type: 'method',
          text: '**Résoudre une inéquation avec $\\exp$** :\nUtiliser la croissance stricte : $e^{f(x)} < e^{g(x)} \\Leftrightarrow f(x) < g(x)$.\nIl suffit de comparer les exposants !\n\nExemple : $e^{2x+1} > e^{x-3}$ → $2x+1 > x-3$ → $x > -4$.',
        },
        {
          type: 'exercise',
          text: 'Exercice 1 : Résoudre $e^{2x} - 3e^x + 2 = 0$',
        },
        {
          type: 'correction',
          text: 'Correction exercice 1 — Changement de variable',
          items: [
            '**Changement de variable :** Posons $X = e^x$ avec $X > 0$. L\'équation devient $X^2 - 3X + 2 = 0$.',
            '**Discriminant :** $\\Delta = 9 - 8 = 1 > 0$. $X_1 = \\frac{3-1}{2} = 1$ et $X_2 = \\frac{3+1}{2} = 2$.',
            '**Retour à $x$ :** $e^x = 1 \\Rightarrow x = \\ln(1) = 0$ et $e^x = 2 \\Rightarrow x = \\ln(2)$.',
            '**Vérification :** pour $x = 0$ : $e^0 - 3e^0 + 2 = 1 - 3 + 2 = 0$ ✓. Pour $x = \\ln(2)$ : $e^{2\\ln 2} - 3e^{\\ln 2} + 2 = 4 - 6 + 2 = 0$ ✓.',
            '**Solution :** $S = \\{0 ; \\ln(2)\\}$.',
          ],
        },
        {
          type: 'exercise',
          text: 'Exercice 2 : Résoudre $e^{2x+1} > e^{x-3}$',
        },
        {
          type: 'correction',
          text: 'Correction exercice 2 — Inéquation',
          items: [
            '**Méthode :** $\\exp$ est strictement croissante, donc $e^{2x+1} > e^{x-3} \\Leftrightarrow 2x+1 > x-3$.',
            '**Résolution :** $2x + 1 > x - 3 \\Leftrightarrow x > -4$.',
            '**Solution :** $S = ]-4 ; +\\infty[$.',
          ],
        },
        {
          type: 'exercise',
          text: 'Exercice 3 : Résoudre $2e^{2x} - 5e^x + 2 = 0$',
        },
        {
          type: 'correction',
          text: 'Correction exercice 3 — Changement de variable',
          items: [
            '**Changement de variable :** $X = e^x$ ($X > 0$). L\'équation devient $2X^2 - 5X + 2 = 0$.',
            '**Discriminant :** $\\Delta = 25 - 16 = 9$. $X_1 = \\frac{5-3}{4} = \\frac{1}{2}$ et $X_2 = \\frac{5+3}{4} = 2$. Les deux sont $> 0$ ✓.',
            '$e^x = \\frac{1}{2} \\Rightarrow x = \\ln\\left(\\frac{1}{2}\\right) = -\\ln(2)$.',
            '$e^x = 2 \\Rightarrow x = \\ln(2)$.',
            '**Solution :** $S = \\{-\\ln(2) ; \\ln(2)\\}$.',
          ],
        },
      ],
    },
    {
      title: '5. Exemple complet : étude de $f(x) = x \\cdot e^{-x}$',
      content: [
        {
          type: 'text',
          text: 'Objectif : mener l\'étude complète de $f(x) = x \\cdot e^{-x}$.',
        },
        {
          type: 'text',
          text: '**Étape 1 — Domaine** : $e^{-x}$ est définie sur $\\mathbb{R}$ entier. Donc $D_f = \\mathbb{R}$.',
        },
        {
          type: 'text',
          text: '**Étape 2 — Limites** :',
        },
        {
          type: 'formula',
          math: '\\lim_{x \\to +\\infty} x e^{-x} = \\lim_{x \\to +\\infty} \\frac{x}{e^x} = 0 \\quad \\text{(croissance comparée)}',
        },
        {
          type: 'formula',
          math: '\\lim_{x \\to -\\infty} x e^{-x} = -\\infty \\times (+\\infty) = -\\infty',
        },
        {
          type: 'text',
          text: 'Asymptote horizontale $y = 0$ en $+\\infty$. Pas d\'asymptote en $-\\infty$.',
        },
        {
          type: 'text',
          text: '**Étape 3 — Dérivée** : produit de $u = x$ et $v = e^{-x}$, donc $(uv)\' = u\'v + uv\'$ :',
        },
        {
          type: 'formula',
          math: 'f\'(x) = 1 \\cdot e^{-x} + x \\cdot (-e^{-x}) = e^{-x}(1-x)',
        },
        {
          type: 'text',
          text: '**Étape 4 — Signe de $f\'$** : $e^{-x} > 0$ toujours, donc le signe de $f\'(x)$ est celui de $(1-x)$.',
        },
        {
          type: 'text',
          text: '$f\'(x) > 0 \\Leftrightarrow x < 1$ (croissante) et $f\'(x) < 0 \\Leftrightarrow x > 1$ (décroissante).',
        },
        {
          type: 'text',
          text: '**Étape 5 — Maximum** : en $x = 1$, $f(1) = 1 \\cdot e^{-1} = \\frac{1}{e} \\approx 0{,}368$.',
        },
        {
          type: 'text',
          text: '$f$ est croissante sur $]-\\infty ; 1]$ et décroissante sur $[1 ; +\\infty[$. Maximum en $x = 1$.',
        },
        {
          type: 'tip',
          text: 'Remarque utile : $f(x) = 0 \\Leftrightarrow x e^{-x} = 0$. Comme $e^{-x} \\neq 0$, on a $f(x) = 0 \\Leftrightarrow x = 0$. La courbe coupe l\'axe des abscisses uniquement en $x = 0$.',
        },
      ],
    },
    {
      title: '6. Exemple complet : étude de $g(x) = (x^2-1)e^x$',
      content: [
        {
          type: 'exercise',
          text: 'Étudier $g(x) = (x^2-1)e^x$ : domaine, limites, dérivée, variations.',
        },
        {
          type: 'correction',
          text: 'Correction — étude complète de $g(x) = (x^2-1)e^x$',
          items: [
            '**Domaine :** $D_g = \\mathbb{R}$ (pas de contrainte).',
            '**Limites :** $\\lim_{x \\to +\\infty} g(x) = +\\infty$ (exp l\'emporte). $\\lim_{x \\to -\\infty} g(x) = 0$ (croissance comparée : $x^2 e^x \\to 0$).',
            '**Asymptote :** $y = 0$ est asymptote horizontale en $-\\infty$.',
            '**Dérivée :** $g\'(x) = 2x \\cdot e^x + (x^2-1) \\cdot e^x = e^x(x^2 + 2x - 1)$.',
            '**Racines :** $x^2 + 2x - 1 = 0 \\Rightarrow \\Delta = 4 + 4 = 8 \\Rightarrow x = -1 \\pm \\sqrt{2}$.',
            '**Signe de $g\'$ :** $e^x > 0$ toujours, donc signe de $g\'$ = signe de $x^2 + 2x - 1 = (x-(-1+\\sqrt{2}))(x-(-1-\\sqrt{2}))$.',
            '**Variations :** $g$ croissante sur $]-\\infty ; -1-\\sqrt{2}]$, décroissante sur $[-1-\\sqrt{2} ; -1+\\sqrt{2}]$, croissante sur $[-1+\\sqrt{2} ; +\\infty[$.',
          ],
        },
      ],
    },
  ],
  erreurs: [
    'Écrire $e^{a+b} = e^a + e^b$ — **FAUX** ! La règle est $e^{a+b} = e^a \\times e^b$ (somme → produit)',
    'Oublier que $e^x > 0$ toujours : $e^x = 0$ n\'a **pas** de solution, et $e^x = -5$ non plus',
    'Se tromper dans le signe de la dérivée de $e^{-x}$ : $(e^{-x})\' = -e^{-x}$ (dérivée de l\'exposant $= -1$)',
    'Ne pas penser au changement de variable $X = e^x$ pour les équations du type $ae^{2x} + be^x + c = 0$',
    'Oublier la contrainte $X > 0$ lors du changement de variable $X = e^x$',
    'Confondre croissances comparées : $\\frac{e^x}{x^n} \\to +\\infty$ en $+\\infty$ (exp domine) mais $x^n e^x \\to 0$ en $-\\infty$',
  ],
  bilan: [
    'Je connais les propriétés algébriques de l\'exponentielle : $e^{a+b} = e^a e^b$, $(e^a)^n = e^{na}$',
    'Je sais que $e^x > 0$ pour tout $x \\in \\mathbb{R}$ et j\'en tire les conséquences',
    'Je sais dériver $e^u$ avec la forme composée : $(e^u)\' = u\' e^u$',
    'Je connais les limites et les croissances comparées en $+\\infty$ et $-\\infty$',
    'Je sais résoudre des équations ($e^{f(x)} = k \\Rightarrow f(x) = \\ln k$ si $k > 0$) et inéquations avec $\\exp$',
    'Je maîtrise le changement de variable $X = e^x$ ($X > 0$) pour les trinômes en $e^x$',
    'Je sais mener l\'étude complète d\'une fonction contenant $\\exp$',
  ],
}
