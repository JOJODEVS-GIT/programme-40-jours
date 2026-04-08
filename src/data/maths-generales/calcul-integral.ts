import { ChapterContent } from './types'

export const chapterContent: ChapterContent = {
  slug: 'calcul-integral',
  title: 'Calcul Intégral',
  icon: '📐',
  importance: 'Chapitre majeur. Le calcul d\'intégrales et d\'aires est un classique d\'examen. Maîtriser la définition, les propriétés et les techniques (changement de variable, IPP) est indispensable.',
  days: 'Jours 10–11',
  sections: [
    {
      title: '1. Définition de l\'intégrale',
      content: [
        {
          type: 'text',
          text: '**Définition** : Si $F$ est une primitive de $f$ sur $[a\\,;\\,b]$, l\'intégrale de $f$ de $a$ à $b$ est :',
        },
        {
          type: 'formula',
          math: '\\int_a^b f(x) \\,dx = F(b) - F(a) = \\left[F(x)\\right]_a^b',
        },
        {
          type: 'text',
          text: '**Notation crochet** : $\\left[F(x)\\right]_a^b$ signifie « on évalue $F$ en $b$, puis on soustrait $F$ évalué en $a$ ». L\'ordre est crucial : $F(b) - F(a)$, jamais $F(a) - F(b)$.',
        },
        {
          type: 'tip',
          text: 'L\'intégrale est un **nombre** (pas une fonction). Elle dépend de $a$ et $b$, mais pas de $x$ (variable muette). On aurait le même résultat en écrivant $\\int_a^b f(t)\\,dt$.\n\n**Exemple concret** : $\\int_0^1 2x\\,dx = \\left[x^2\\right]_0^1 = 1^2 - 0^2 = 1$. Vérif : $F(x) = x^2$, $F\'(x) = 2x$. $\\checkmark$',
        },
        {
          type: 'text',
          text: '**Interprétation intuitive** : L\'intégrale est la « somme continue » des valeurs de $f$ entre $a$ et $b$, pondérées par les infiniment petits $dx$. C\'est la limite d\'une somme de rectangles de largeur $dx$ et de hauteur $f(x)$.',
        },
      ],
    },
    {
      title: '2. Propriétés de l\'intégrale',
      content: [
        {
          type: 'text',
          text: '**Linéarité** (somme et constante) :',
        },
        {
          type: 'formula',
          math: '\\int_a^b \\left[f(x) + g(x)\\right] dx = \\int_a^b f(x)\\,dx + \\int_a^b g(x)\\,dx',
        },
        {
          type: 'formula',
          math: '\\int_a^b k \\cdot f(x)\\,dx = k \\int_a^b f(x)\\,dx \\quad (k \\in \\mathbb{R})',
        },
        {
          type: 'text',
          text: '**Relation de Chasles** (découpage de l\'intervalle) :',
        },
        {
          type: 'formula',
          math: '\\int_a^b f(x)\\,dx = \\int_a^c f(x)\\,dx + \\int_c^b f(x)\\,dx \\quad \\text{(pour tout } c \\in \\mathbb{R}\\text{)}',
        },
        {
          type: 'text',
          text: '**Inversion des bornes** et intégrale nulle :',
        },
        {
          type: 'formula',
          math: '\\int_a^b f(x)\\,dx = -\\int_b^a f(x)\\,dx \\qquad \\int_a^a f(x)\\,dx = 0',
        },
        {
          type: 'text',
          text: '**Positivité** : si $f(x) \\geq 0$ sur $[a\\,;\\,b]$, alors $\\int_a^b f(x)\\,dx \\geq 0$.',
        },
        {
          type: 'text',
          text: '**Comparaison** : si $f(x) \\leq g(x)$ sur $[a\\,;\\,b]$, alors $\\int_a^b f(x)\\,dx \\leq \\int_a^b g(x)\\,dx$.',
        },
        {
          type: 'tip',
          text: '**Utilisation pratique de Chasles** : si $f$ change de signe en $c \\in ]a\\,;\\,b[$, on découpe :\n$\\int_a^b f(x)\\,dx = \\int_a^c f(x)\\,dx + \\int_c^b f(x)\\,dx$.\nCela est utile pour les calculs d\'aire (voir section 3).',
        },
      ],
    },
    {
      title: '3. Interprétation géométrique — Calcul d\'aire',
      content: [
        {
          type: 'text',
          text: '**Cas fondamental** : si $f(x) \\geq 0$ sur $[a\\,;\\,b]$, alors $\\int_a^b f(x)\\,dx$ est l\'**aire** de la surface délimitée par la courbe $\\mathcal{C}_f$, l\'axe des abscisses et les droites $x = a$, $x = b$. L\'unité est l\'unité d\'aire (u.a.).',
        },
        {
          type: 'text',
          text: '**Aire entre deux courbes** : si $f(x) \\geq g(x)$ sur $[a\\,;\\,b]$, l\'aire de la surface comprise entre $\\mathcal{C}_f$ et $\\mathcal{C}_g$ est :',
        },
        {
          type: 'formula',
          math: '\\mathcal{A} = \\int_a^b \\left[f(x) - g(x)\\right] dx \\quad \\text{(en unités d\'aire)}',
        },
        {
          type: 'text',
          text: '**Attention au signe** : quand $f$ change de signe sur $[a\\,;\\,b]$, l\'intégrale $\\int_a^b f(x)\\,dx$ peut être négative, mais une **aire est toujours positive**. Il faut découper en sous-intervalles :',
        },
        {
          type: 'formula',
          math: '\\mathcal{A} = \\int_a^b |f(x)|\\,dx = \\int_a^c f(x)\\,dx - \\int_c^b f(x)\\,dx \\quad \\text{si } f \\geq 0 \\text{ sur } [a,c] \\text{ et } f \\leq 0 \\text{ sur } [c,b]',
        },
        {
          type: 'tip',
          text: '**Méthode pour les aires** :\n1. Trouver les intersections des courbes (résoudre $f(x) = g(x)$)\n2. Étudier le signe de $f(x) - g(x)$ sur chaque sous-intervalle\n3. Découper l\'intégrale si nécessaire et prendre la valeur absolue\n4. Ne jamais oublier de préciser l\'unité : u.a.',
        },
        {
          type: 'text',
          text: '**Exemple** : Aire entre $f(x) = x^2$ et $g(x) = x$ sur $[0\\,;\\,1]$.\nOn résout $x^2 = x \\Rightarrow x(x-1) = 0 \\Rightarrow x = 0$ ou $x = 1$.\nSur $]0\\,;\\,1[$, $x > x^2$ donc $g \\geq f$, ainsi $\\mathcal{A} = \\int_0^1 (x - x^2)\\,dx = \\left[\\frac{x^2}{2} - \\frac{x^3}{3}\\right]_0^1 = \\frac{1}{2} - \\frac{1}{3} = \\frac{1}{6}$ u.a.',
        },
      ],
    },
    {
      title: '4. Intégrale d\'une fonction composée',
      content: [
        {
          type: 'text',
          text: 'Quand l\'intégrande est de la forme $u\'(x) \\cdot g(u(x))$, on reconnaît directement la primitive. C\'est la transposition en intégrale des primitives composées.',
        },
        {
          type: 'table',
          headers: ['Intégrande f(x)', 'Intégrale \\int_a^b f(x)\\,dx'],
          rows: [
            ['u\' \\cdot u^n \\; (n \\neq -1)', '\\left[\\frac{u^{n+1}}{n+1}\\right]_a^b'],
            ['\\frac{u\'}{u}', '\\left[\\ln|u|\\right]_a^b'],
            ['u\' \\cdot e^u', '\\left[e^u\\right]_a^b'],
            ['u\' \\cdot \\cos(u)', '\\left[\\sin(u)\\right]_a^b'],
            ['u\' \\cdot \\sin(u)', '\\left[-\\cos(u)\\right]_a^b'],
          ],
        },
        {
          type: 'tip',
          text: '**Exemple** : $\\int_0^1 (2x+1)e^{x^2+x}\\,dx$. On pose $u = x^2 + x$, $u\' = 2x+1$. Forme $u\'e^u$. Résultat : $\\left[e^{x^2+x}\\right]_0^1 = e^{1+1} - e^0 = e^2 - 1$.',
        },
      ],
    },
    {
      title: '5. Intégration par parties (IPP)',
      content: [
        {
          type: 'formula',
          math: '\\int_a^b u\'(x)\\,v(x)\\,dx = \\left[u(x)\\,v(x)\\right]_a^b - \\int_a^b u(x)\\,v\'(x)\\,dx',
        },
        {
          type: 'method',
          text: '**Méthode IPP — 4 étapes** :\n\n**Étape 1** : Identifier les deux facteurs dans le produit.\n\n**Étape 2** : Choisir $v$ et $u\'$ selon la règle LIPET (voir astuce ci-dessous). Calculer $u$ (primitive de $u\'$) et $v\'$ (dérivée de $v$).\n\n**Étape 3** : Appliquer la formule $\\left[uv\\right]_a^b - \\int_a^b u\\,v\'\\,dx$.\n\n**Étape 4** : L\'intégrale restante $\\int_a^b u\\,v\'\\,dx$ doit être **plus simple** que celle de départ. Si ce n\'est pas le cas, revoir le choix de $u\'$ et $v$.',
        },
        {
          type: 'tip',
          text: '**Règle LIPET pour choisir $v$** (le facteur que l\'on ne dérive PAS) :\n- **L**ogarithme\n- **I**nverse trigonométrique (arcsin, arccos, arctan)\n- **P**olynôme\n- **E**xponentielle\n- **T**rigonométrie\n\nOn choisit $v$ dans la catégorie la plus haute. Exemples : dans $x\\ln(x)$, $v = \\ln(x)$ ; dans $xe^x$, $v = x$ (polynôme) et $u\' = e^x$.\n\n**Mnémotechnique** : on préfère dériver les logarithmes (leur dérivée est simple) et primitiver les exponentielles (leur primitive est simple).',
        },
        {
          type: 'text',
          text: '**Quand utiliser l\'IPP ?** Quand l\'intégrande est un **produit** de deux types de fonctions différents (polynôme × exponentielle, polynôme × trigonométrique, logarithme × polynôme, etc.) et qu\'on ne reconnaît pas une primitive composée directe.',
        },
      ],
    },
    {
      title: '6. Exemples corrigés pas à pas',
      content: [
        {
          type: 'exercise',
          text: 'Exemple 1 : Calculer $\\int_0^2 (3x^2 + 2x - 1)\\,dx$',
        },
        {
          type: 'correction',
          text: 'Correction exemple 1 — intégrale directe',
          items: [
            '**Primitive** : $F(x) = x^3 + x^2 - x$.',
            '$\\int_0^2 (3x^2 + 2x - 1)\\,dx = \\left[x^3 + x^2 - x\\right]_0^2$',
            '$= (2^3 + 2^2 - 2) - (0^3 + 0^2 - 0) = (8 + 4 - 2) - 0 = 10$.',
          ],
        },
        {
          type: 'exercise',
          text: 'Exemple 2 : Calculer $\\int_1^e \\frac{1}{x}\\,dx$',
        },
        {
          type: 'correction',
          text: 'Correction exemple 2 — intégrale logarithmique',
          items: [
            '**Primitive** : $F(x) = \\ln(x)$ (sur $]0\\,;\\,+\\infty[$).',
            '$\\int_1^e \\frac{1}{x}\\,dx = \\left[\\ln(x)\\right]_1^e = \\ln(e) - \\ln(1) = 1 - 0 = 1$.',
            '**Interprétation** : l\'aire sous la courbe $y = \\frac{1}{x}$ entre $x=1$ et $x=e$ vaut exactement 1.',
          ],
        },
        {
          type: 'exercise',
          text: 'Exemple 3 : Calculer $\\int_0^1 x e^x\\,dx$ par IPP.',
        },
        {
          type: 'correction',
          text: 'Correction exemple 3 — IPP avec polynôme × exponentielle',
          items: [
            '**Choix** : $v = x \\Rightarrow v\' = 1$ et $u\' = e^x \\Rightarrow u = e^x$ (on choisit $v$ = polynôme car $u\' = e^x$ se primitive facilement).',
            '$\\int_0^1 x e^x\\,dx = \\left[x e^x\\right]_0^1 - \\int_0^1 1 \\cdot e^x\\,dx$',
            '$= (1 \\cdot e^1 - 0 \\cdot e^0) - \\left[e^x\\right]_0^1 = e - (e^1 - e^0) = e - e + 1 = 1$.',
          ],
        },
        {
          type: 'exercise',
          text: 'Exemple 4 : Calculer l\'aire entre $f(x) = x^2$ et $g(x) = x$ sur $[0\\,;\\,1]$.',
        },
        {
          type: 'correction',
          text: 'Correction exemple 4 — aire entre deux courbes',
          items: [
            '**Intersections** : $x^2 = x \\Rightarrow x(x-1) = 0 \\Rightarrow x = 0$ ou $x = 1$.',
            '**Signe** : sur $]0\\,;\\,1[$, $x - x^2 = x(1-x) > 0$, donc $g(x) = x \\geq f(x) = x^2$.',
            '$\\mathcal{A} = \\int_0^1 (x - x^2)\\,dx = \\left[\\frac{x^2}{2} - \\frac{x^3}{3}\\right]_0^1 = \\left(\\frac{1}{2} - \\frac{1}{3}\\right) - 0 = \\frac{3-2}{6} = \\frac{1}{6}$ u.a.',
          ],
        },
        {
          type: 'exercise',
          text: 'Exemple 5 (aire avec changement de signe) : Calculer l\'aire entre la courbe de $f(x) = x^2 - 1$ et l\'axe des abscisses sur $[-1\\,;\\,2]$.',
        },
        {
          type: 'correction',
          text: 'Correction exemple 5 — découpage selon le signe',
          items: [
            '**Signe de $f$** : $x^2 - 1 = 0 \\Rightarrow x = \\pm 1$. $f \\leq 0$ sur $[-1\\,;\\,1]$ et $f \\geq 0$ sur $[1\\,;\\,2]$.',
            '**Découpage** : $\\mathcal{A} = \\left|\\int_{-1}^{1}(x^2-1)\\,dx\\right| + \\int_{1}^{2}(x^2-1)\\,dx$.',
            '$\\int_{-1}^{1}(x^2-1)\\,dx = \\left[\\frac{x^3}{3} - x\\right]_{-1}^{1} = \\left(\\frac{1}{3}-1\\right) - \\left(-\\frac{1}{3}+1\\right) = -\\frac{2}{3} - \\frac{2}{3} = -\\frac{4}{3}$. Valeur absolue : $\\frac{4}{3}$.',
            '$\\int_{1}^{2}(x^2-1)\\,dx = \\left[\\frac{x^3}{3} - x\\right]_{1}^{2} = \\left(\\frac{8}{3}-2\\right) - \\left(\\frac{1}{3}-1\\right) = \\frac{2}{3} + \\frac{2}{3} = \\frac{4}{3}$.',
            '$\\mathcal{A} = \\frac{4}{3} + \\frac{4}{3} = \\frac{8}{3}$ u.a.',
          ],
        },
      ],
    },
    {
      title: '7. Exercices d\'entraînement',
      content: [
        {
          type: 'exercise',
          text: 'Exercice 1 : Calculer les intégrales suivantes.',
          items: [
            '\\int_0^3 (2x + 1)\\,dx',
            '\\int_1^4 \\frac{1}{\\sqrt{x}}\\,dx',
            '\\int_0^{\\pi} \\sin(x)\\,dx',
            '\\int_0^{\\ln 2} e^x\\,dx',
          ],
        },
        {
          type: 'correction',
          text: 'Correction exercice 1',
          items: [
            '$\\left[x^2 + x\\right]_0^3 = (9 + 3) - 0 = 12$.',
            '$\\left[2\\sqrt{x}\\right]_1^4 = 2\\sqrt{4} - 2\\sqrt{1} = 4 - 2 = 2$.',
            '$\\left[-\\cos(x)\\right]_0^{\\pi} = -\\cos(\\pi) + \\cos(0) = 1 + 1 = 2$. (**Interprétation** : l\'aire sous $\\sin(x)$ entre $0$ et $\\pi$ vaut 2 u.a.)',
            '$\\left[e^x\\right]_0^{\\ln 2} = e^{\\ln 2} - e^0 = 2 - 1 = 1$.',
          ],
        },
        {
          type: 'exercise',
          text: 'Exercice 2 : Calculer $\\int_0^1 (2x+1)e^{x^2+x}\\,dx$.',
        },
        {
          type: 'correction',
          text: 'Correction exercice 2 — forme composée $u\'e^u$',
          items: [
            'On pose $u = x^2 + x$, $u\' = 2x + 1$. On reconnaît la forme $u\' e^u$.',
            '$\\int_0^1 (2x+1)e^{x^2+x}\\,dx = \\left[e^{x^2+x}\\right]_0^1 = e^{1+1} - e^{0+0} = e^2 - 1$.',
          ],
        },
        {
          type: 'exercise',
          text: 'Exercice 3 : Calculer $\\int_1^e x\\ln(x)\\,dx$ par IPP.',
        },
        {
          type: 'correction',
          text: 'Correction exercice 3 — IPP avec logarithme × polynôme',
          items: [
            '**Choix** : $v = \\ln(x) \\Rightarrow v\' = \\frac{1}{x}$ et $u\' = x \\Rightarrow u = \\frac{x^2}{2}$ (on choisit $v = \\ln(x)$ car le logarithme figure en tête de LIPET).',
            '$\\int_1^e x\\ln(x)\\,dx = \\left[\\frac{x^2}{2}\\ln(x)\\right]_1^e - \\int_1^e \\frac{x^2}{2} \\cdot \\frac{1}{x}\\,dx$',
            '$= \\left[\\frac{x^2}{2}\\ln(x)\\right]_1^e - \\int_1^e \\frac{x}{2}\\,dx$',
            '$= \\left(\\frac{e^2}{2} \\cdot 1 - \\frac{1}{2} \\cdot 0\\right) - \\left[\\frac{x^2}{4}\\right]_1^e = \\frac{e^2}{2} - \\frac{e^2 - 1}{4} = \\frac{2e^2 - e^2 + 1}{4} = \\frac{e^2 + 1}{4}$.',
          ],
        },
        {
          type: 'exercise',
          text: 'Exercice 4 (aire) : Calculer l\'aire entre les courbes $f(x) = e^x$ et $g(x) = x + 1$ sur $[0\\,;\\,1]$.',
        },
        {
          type: 'correction',
          text: 'Correction exercice 4',
          items: [
            'Sur $[0\\,;\\,1]$ : $e^x \\geq x + 1$ (l\'exponentielle est au-dessus de sa tangente en $0$).',
            '$\\mathcal{A} = \\int_0^1 (e^x - x - 1)\\,dx = \\left[e^x - \\frac{x^2}{2} - x\\right]_0^1$',
            '$= \\left(e - \\frac{1}{2} - 1\\right) - (1 - 0 - 0) = e - \\frac{3}{2} - 1 = e - \\frac{5}{2}$ u.a. $\\approx 0{,}22$ u.a.',
          ],
        },
      ],
    },
  ],
  erreurs: [
    'Oublier de mettre les bornes après le crochet : $\\left[F(x)\\right]_a^b = F(b) - F(a)$ et non $F(x)$',
    'Inverser $F(b) - F(a)$ en $F(a) - F(b)$ — l\'ordre est toujours borne supérieure moins borne inférieure',
    'Confondre aire et intégrale quand $f$ change de signe : une intégrale peut être négative, une aire est toujours positive',
    'Pour les aires, ne pas étudier le signe de $f(x) - g(x)$ avant d\'intégrer',
    'Mal choisir $u\'$ et $v$ dans l\'IPP : l\'intégrale restante doit être plus simple (si elle est plus compliquée, inverser les rôles)',
    'Oublier le signe moins dans la formule d\'IPP : $\\left[uv\\right]_a^b \\mathbf{-} \\int_a^b uv\'\\,dx$',
    'Confondre $\\int_a^b f = \\int_a^c f + \\int_c^b f$ (Chasles) avec $\\int_a^b (f+g) = \\int_a^b f + \\int_a^b g$ (linéarité)',
    'Ne pas simplifier $\\ln(1) = 0$ et $\\ln(e) = 1$ dans l\'évaluation numérique',
  ],
  bilan: [
    'Je sais calculer une intégrale à l\'aide de primitives et évaluer le crochet $\\left[F(x)\\right]_a^b$',
    'Je connais et j\'applique les propriétés de l\'intégrale (linéarité, Chasles, positivité)',
    'Je sais calculer une aire sous une courbe et entre deux courbes, en traitant les changements de signe',
    'Je maîtrise l\'intégration par parties et je sais choisir $u\'$ et $v$ avec la règle LIPET',
    'Je sais reconnaître les formes composées ($u\'e^u$, $\\frac{u\'}{u}$, etc.) dans une intégrale',
  ],
}
