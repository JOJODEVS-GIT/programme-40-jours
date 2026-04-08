import { ChapterContent } from './types'

export const chapterContent: ChapterContent = {
  slug: 'remise-a-niveau',
  title: 'Remise à Niveau',
  icon: '🔧',
  importance: 'Fondamental — base de tout le programme. Sans maîtrise de ces outils, les chapitres suivants seront impossibles. Ce chapitre couvre 7 thèmes essentiels qui reviennent dans TOUS les sujets d\'examen.',
  days: 'Jour 1',
  sections: [
    // ═══════════════════════════════════════
    // SECTION 1 : CALCULS DE BASE
    // ═══════════════════════════════════════
    {
      title: '1. Calculs de base',
      content: [
        {
          type: 'text',
          text: 'Les fractions, puissances et racines carrées sont les briques fondamentales du calcul. Maîtrisez-les parfaitement avant de passer à la suite. Ces outils interviennent dans **chaque** exercice du programme.',
        },

        // --- FRACTIONS ---
        {
          type: 'text',
          text: '**Règles sur les fractions**',
        },
        {
          type: 'text',
          text: 'Pensez aux fractions comme à des parts de pizza : $\\frac{1}{4}$ c\'est 1 part sur 4. Pour additionner $\\frac{1}{4} + \\frac{1}{3}$, il faut d\'abord découper les pizzas en parts égales (dénominateur commun = 12), puis additionner les parts. Toute opération sur les fractions repose sur la notion de **dénominateur commun** pour l\'addition, et de **simplification** pour la multiplication.',
        },
        {
          type: 'formula',
          math: '\\frac{a}{b} + \\frac{c}{d} = \\frac{ad + bc}{bd}',
        },
        {
          type: 'formula',
          math: '\\frac{a}{b} - \\frac{c}{d} = \\frac{ad - bc}{bd}',
        },
        {
          type: 'formula',
          math: '\\frac{a}{b} \\times \\frac{c}{d} = \\frac{a \\times c}{b \\times d}',
        },
        {
          type: 'formula',
          math: '\\frac{a}{b} \\div \\frac{c}{d} = \\frac{a}{b} \\times \\frac{d}{c} = \\frac{ad}{bc}',
        },
        {
          type: 'tip',
          text: 'Pour simplifier une fraction, divisez numérateur et dénominateur par leur PGCD. Exemple : $\\frac{12}{18} = \\frac{12 \\div 6}{18 \\div 6} = \\frac{2}{3}$. Autre exemple : $\\frac{15}{35} = \\frac{15 \\div 5}{35 \\div 5} = \\frac{3}{7}$. Toujours simplifier en dernier !',
        },
        {
          type: 'method',
          text: '**Méthode : Additionner deux fractions**\n1. Trouver le dénominateur commun (PPCM des dénominateurs)\n2. Multiplier chaque fraction pour obtenir ce dénominateur\n3. Additionner les numérateurs\n4. Simplifier le résultat si possible\n\nExemple : $\\frac{2}{3} + \\frac{5}{4}$\n→ PPCM(3, 4) = 12\n→ $\\frac{8}{12} + \\frac{15}{12} = \\frac{23}{12}$\n\nAutre exemple : $\\frac{3}{8} - \\frac{1}{6}$\n→ PPCM(8, 6) = 24\n→ $\\frac{9}{24} - \\frac{4}{24} = \\frac{5}{24}$',
        },

        // --- PUISSANCES ---
        {
          type: 'text',
          text: '**Règles sur les puissances**',
        },
        {
          type: 'text',
          text: 'Les puissances permettent d\'écrire des produits répétés de manière compacte : $a^n = a \\times a \\times \\cdots \\times a$ ($n$ fois). Imaginez les règles comme les **lois de la physique des exposants** : elles ne changent jamais. Voici les 6 règles essentielles :',
        },
        {
          type: 'formula',
          math: 'a^m \\times a^n = a^{m+n}',
        },
        {
          type: 'formula',
          math: '\\frac{a^m}{a^n} = a^{m-n}',
        },
        {
          type: 'formula',
          math: '(a^m)^n = a^{m \\times n}',
        },
        {
          type: 'formula',
          math: '(ab)^n = a^n \\times b^n',
        },
        {
          type: 'formula',
          math: 'a^{-n} = \\frac{1}{a^n}',
        },
        {
          type: 'formula',
          math: 'a^0 = 1 \\quad (a \\neq 0)',
        },
        {
          type: 'tip',
          text: 'Exemples concrets pour ne pas oublier : $2^3 \\times 2^4 = 2^7 = 128$ (on additionne 3 + 4). Et $(3^2)^4 = 3^8 = 6561$ (on multiplie 2 × 4). PIÈGE : $2^3 \\times 3^3 = (2 \\times 3)^3 = 6^3$ — mais $2^3 \\times 3^4$ ne se simplifie pas (bases différentes ET exposants différents) !',
        },
        {
          type: 'text',
          text: '**Puissances fractionnaires** — le lien entre puissances et racines :',
        },
        {
          type: 'formula',
          math: 'a^{\\frac{1}{n}} = \\sqrt[n]{a} \\qquad a^{\\frac{p}{q}} = \\left(\\sqrt[q]{a}\\right)^p = \\sqrt[q]{a^p}',
        },
        {
          type: 'tip',
          text: 'En particulier : $a^{\\frac{1}{2}} = \\sqrt{a}$ et $a^{\\frac{1}{3}} = \\sqrt[3]{a}$. Cette notation est très utilisée dans les chapitres sur les dérivées et les primitives. Exemple pratique : $8^{\\frac{2}{3}} = (\\sqrt[3]{8})^2 = 2^2 = 4$.',
        },

        // --- RACINES ---
        {
          type: 'text',
          text: '**Racines carrées**',
        },
        {
          type: 'text',
          text: 'La racine carrée $\\sqrt{a}$ n\'est définie que pour $a \\geq 0$ et est toujours positive. Intuition : $\\sqrt{9} = 3$ car $3^2 = 9$. Attention : $\\sqrt{a^2} = |a|$ (et non $a$), car $\\sqrt{(-3)^2} = \\sqrt{9} = 3 = |-3|$.',
        },
        {
          type: 'formula',
          math: '\\sqrt{a \\times b} = \\sqrt{a} \\times \\sqrt{b}',
        },
        {
          type: 'formula',
          math: '\\sqrt{\\frac{a}{b}} = \\frac{\\sqrt{a}}{\\sqrt{b}}',
        },
        {
          type: 'formula',
          math: '(\\sqrt{a})^2 = a',
        },
        {
          type: 'formula',
          math: '\\sqrt{a^2} = |a|',
        },
        {
          type: 'method',
          text: '**Méthode : Simplifier une racine carrée**\n1. Décomposer le nombre sous la racine en produit de facteurs\n2. Chercher les carrés parfaits (4, 9, 16, 25, 36, 49, 64, ...)\n3. Extraire les carrés parfaits\n\nExemple : $\\sqrt{72} = \\sqrt{36 \\times 2} = 6\\sqrt{2}$\nAutre exemple : $\\sqrt{200} = \\sqrt{100 \\times 2} = 10\\sqrt{2}$\nEncore : $\\sqrt{75} = \\sqrt{25 \\times 3} = 5\\sqrt{3}$',
        },
        {
          type: 'method',
          text: '**Méthode : Rationaliser un dénominateur**\nOn multiplie numérateur et dénominateur par la racine du dénominateur :\n$\\frac{a}{\\sqrt{b}} = \\frac{a \\times \\sqrt{b}}{\\sqrt{b} \\times \\sqrt{b}} = \\frac{a\\sqrt{b}}{b}$\n\nPour un dénominateur de la forme $a + \\sqrt{b}$, on multiplie par le **conjugué** $a - \\sqrt{b}$ :\n$\\frac{1}{3 + \\sqrt{2}} = \\frac{3 - \\sqrt{2}}{(3+\\sqrt{2})(3-\\sqrt{2})} = \\frac{3 - \\sqrt{2}}{9 - 2} = \\frac{3 - \\sqrt{2}}{7}$\n\nAnalyse : $(a+\\sqrt{b})(a-\\sqrt{b}) = a^2 - b$ (identité remarquable !) — c\'est pourquoi le conjugué "détruit" la racine.',
        },
      ],
    },

    // ═══════════════════════════════════════
    // SECTION 2 : IDENTITÉS + 2ND DEGRÉ
    // ═══════════════════════════════════════
    {
      title: '2. Identités remarquables et équations du 2nd degré',
      content: [
        {
          type: 'text',
          text: '**Les trois identités remarquables** à connaître par cœur. Pensez-y comme à des **recettes de cuisine** : si vous avez les bons ingrédients ($a$ et $b$), vous obtenez toujours le même résultat. Il faut les reconnaître dans les deux sens (développer ET factoriser) :',
        },
        {
          type: 'formula',
          math: '(a+b)^2 = a^2 + 2ab + b^2',
        },
        {
          type: 'formula',
          math: '(a-b)^2 = a^2 - 2ab + b^2',
        },
        {
          type: 'formula',
          math: '(a+b)(a-b) = a^2 - b^2',
        },
        {
          type: 'tip',
          text: 'Astuce de reconnaissance : si vous voyez $a^2 - b^2$, pensez immédiatement à $(a-b)(a+b)$. Si vous voyez $a^2 + 2ab + b^2$, c\'est $(a+b)^2$. Chercher l\'identité remarquable est souvent la clé de la factorisation. Exemple : $x^2 - 25 = (x-5)(x+5)$ car $25 = 5^2$.',
        },
        {
          type: 'text',
          text: '**Factorisation** : la factorisation est l\'opération inverse du développement. Elle est essentielle pour résoudre des équations et simplifier des expressions. L\'objectif est de transformer une **somme** en **produit** (car un produit = 0 si et seulement si un des facteurs = 0).',
        },
        {
          type: 'method',
          text: '**Méthode : Factoriser une expression**\n1. Chercher un **facteur commun** à tous les termes\n2. Si pas de facteur commun, chercher une **identité remarquable**\n3. Si c\'est un trinôme $ax^2 + bx + c$ : utiliser le **discriminant**\n\nExemple : $6x^3 - 9x^2 = 3x^2(2x - 3)$ (facteur commun $3x^2$)\nExemple : $x^2 - 16 = (x-4)(x+4)$ (identité $a^2 - b^2$)\nExemple : $4x^2 - 12x + 9 = (2x-3)^2$ (identité $(a-b)^2$ avec $a = 2x$, $b = 3$)',
        },

        // --- SECOND DEGRÉ ---
        {
          type: 'text',
          text: '**Équation du second degré** : pour $ax^2 + bx + c = 0$ avec $a \\neq 0$. La démarche est toujours la même : calculer le discriminant $\\Delta$, puis lire la solution selon son signe.',
        },
        {
          type: 'formula',
          math: '\\Delta = b^2 - 4ac',
        },
        {
          type: 'text',
          text: 'Si $\\Delta > 0$ : deux solutions réelles distinctes',
        },
        {
          type: 'formula',
          math: 'x_1 = \\frac{-b - \\sqrt{\\Delta}}{2a} \\quad ; \\quad x_2 = \\frac{-b + \\sqrt{\\Delta}}{2a}',
        },
        {
          type: 'text',
          text: 'Si $\\Delta = 0$ : une solution double $x_0 = \\frac{-b}{2a}$',
        },
        {
          type: 'text',
          text: 'Si $\\Delta < 0$ : pas de solution réelle (mais 2 solutions complexes, voir chapitre Complexes).',
        },
        {
          type: 'method',
          text: '**Méthode : Résoudre $ax^2 + bx + c = 0$**\n1. Identifier $a$, $b$ et $c$ (attention aux signes !)\n2. Calculer $\\Delta = b^2 - 4ac$\n3. Selon le signe de $\\Delta$, appliquer la formule\n4. Vérifier en remplaçant dans l\'équation\n\nExemple : $2x^2 - 5x + 3 = 0$\n$a = 2$, $b = -5$, $c = 3$\n$\\Delta = (-5)^2 - 4 \\times 2 \\times 3 = 25 - 24 = 1 > 0$\n$x_1 = \\frac{5 - 1}{4} = 1$, $x_2 = \\frac{5 + 1}{4} = \\frac{3}{2}$\nVérif : $2(1)^2 - 5(1) + 3 = 2 - 5 + 3 = 0$ ✓',
        },
        {
          type: 'text',
          text: '**Forme factorisée** : si $\\Delta \\geq 0$, on peut écrire',
        },
        {
          type: 'formula',
          math: 'ax^2 + bx + c = a(x - x_1)(x - x_2)',
        },
        {
          type: 'text',
          text: '**Relations de Viète** (somme et produit des racines) — utiles pour vérifier sans calculer :',
        },
        {
          type: 'formula',
          math: 'x_1 + x_2 = -\\frac{b}{a} \\qquad x_1 \\times x_2 = \\frac{c}{a}',
        },
        {
          type: 'tip',
          text: 'Les relations de Viète permettent de vérifier rapidement vos résultats : la somme des racines vaut $-\\frac{b}{a}$ et le produit vaut $\\frac{c}{a}$. Pour $2x^2 - 5x + 3 = 0$ : somme $= 1 + \\frac{3}{2} = \\frac{5}{2} = -\\frac{-5}{2}$ ✓ et produit $= 1 \\times \\frac{3}{2} = \\frac{3}{2} = \\frac{3}{2}$ ✓. Si ça ne colle pas, vous avez fait une erreur !',
        },
        {
          type: 'text',
          text: '**Signe du trinôme** : le signe de $ax^2 + bx + c$ dépend de $a$ et de $\\Delta$',
        },
        {
          type: 'table',
          headers: ['Cas', 'Signe du trinôme'],
          rows: [
            ['\\Delta < 0', 'Même signe que a pour tout x'],
            ['\\Delta = 0', 'Même signe que a, nul en x_0'],
            ['\\Delta > 0', 'Du signe de a à l\'extérieur des racines, du signe opposé entre les racines'],
          ],
        },
        {
          type: 'tip',
          text: 'Mnémotechnique pour le signe du trinôme : "le trinôme est du signe de $a$ **à l\'extérieur** des racines". Si $a > 0$ : le trinôme est positif loin des racines (la parabole est ouverte vers le haut). Si $a < 0$ : le trinôme est négatif loin des racines.',
        },
      ],
    },

    // ═══════════════════════════════════════
    // SECTION 3 : DÉRIVÉES
    // ═══════════════════════════════════════
    {
      title: '3. Dérivées',
      content: [
        {
          type: 'text',
          text: 'La dérivée mesure la **vitesse de variation** d\'une fonction. Intuition : si $f$ représente une position en fonction du temps, alors $f\'$ est la vitesse. Si $f\'(x) > 0$, la fonction croît ; si $f\'(x) < 0$, elle décroît ; si $f\'(x) = 0$, c\'est un extremum potentiel. La dérivée est l\'outil central de l\'analyse.',
        },
        {
          type: 'tip',
          text: 'Exemple concret : $f(x) = x^2$ représente l\'aire d\'un carré de côté $x$. Sa dérivée $f\'(x) = 2x$ donne la vitesse à laquelle cette aire augmente quand on agrandit le côté. En $x = 3$ : $f\'(3) = 6$ — l\'aire augmente de 6 unités par unité de côté ajoutée.',
        },
        {
          type: 'text',
          text: '**Tableau des dérivées usuelles**',
        },
        {
          type: 'table',
          headers: ['Fonction f(x)', 'Dérivée f\'(x)', 'Domaine'],
          rows: [
            ['k \\text{ (constante)}', '0', '\\mathbb{R}'],
            ['x', '1', '\\mathbb{R}'],
            ['x^n', 'nx^{n-1}', '\\mathbb{R}'],
            ['\\frac{1}{x}', '-\\frac{1}{x^2}', '\\mathbb{R}^*'],
            ['\\frac{1}{x^n}', '-\\frac{n}{x^{n+1}}', '\\mathbb{R}^*'],
            ['\\sqrt{x}', '\\frac{1}{2\\sqrt{x}}', '\\mathbb{R}^{+*}'],
            ['e^x', 'e^x', '\\mathbb{R}'],
            ['\\ln(x)', '\\frac{1}{x}', '\\mathbb{R}^{+*}'],
            ['\\sin(x)', '\\cos(x)', '\\mathbb{R}'],
            ['\\cos(x)', '-\\sin(x)', '\\mathbb{R}'],
            ['\\tan(x)', '1 + \\tan^2(x) = \\frac{1}{\\cos^2(x)}', '\\mathbb{R} \\setminus \\{\\frac{\\pi}{2} + k\\pi\\}'],
          ],
        },
        {
          type: 'text',
          text: '**Règles de dérivation**',
        },
        {
          type: 'table',
          headers: ['Opération', 'Formule'],
          rows: [
            ['\\text{Somme}', '(u + v)\' = u\' + v\''],
            ['\\text{Constante} \\times', '(ku)\' = ku\''],
            ['\\text{Produit}', '(uv)\' = u\'v + uv\''],
            ['\\text{Quotient}', '\\left(\\frac{u}{v}\\right)\' = \\frac{u\'v - uv\'}{v^2}'],
            ['\\text{Composée}', '[f(g(x))]\' = g\'(x) \\times f\'(g(x))'],
          ],
        },
        {
          type: 'method',
          text: '**Méthode : Dériver une fonction composée**\nUne fonction composée est de la forme $f(u(x))$. C\'est comme des **poupées russes** : on dérive l\'extérieur, puis on multiplie par la dérivée de l\'intérieur.\n\nRègle : dériver l\'extérieur × dériver l\'intérieur.\n\nExemples courants :\n• $(u^n)\' = n \\cdot u\' \\cdot u^{n-1}$\n• $(e^u)\' = u\' \\cdot e^u$\n• $(\\ln u)\' = \\frac{u\'}{u}$\n• $(\\sqrt{u})\' = \\frac{u\'}{2\\sqrt{u}}$\n\nExemple 1 : $f(x) = e^{3x^2+1}$\nIci $u(x) = 3x^2 + 1$, donc $u\'(x) = 6x$\n$f\'(x) = 6x \\cdot e^{3x^2+1}$\n\nExemple 2 : $g(x) = \\ln(2x + 5)$\nIci $u(x) = 2x + 5$, donc $u\'(x) = 2$\n$g\'(x) = \\frac{2}{2x + 5}$\n\nExemple 3 : $h(x) = (4x^3 - 1)^5$\nIci $u(x) = 4x^3 - 1$, donc $u\'(x) = 12x^2$\n$h\'(x) = 5 \\cdot 12x^2 \\cdot (4x^3 - 1)^4 = 60x^2(4x^3 - 1)^4$',
        },
        {
          type: 'text',
          text: '**Équation de la tangente** à la courbe de $f$ au point d\'abscisse $a$ :',
        },
        {
          type: 'formula',
          math: 'y = f\'(a)(x - a) + f(a)',
        },
        {
          type: 'tip',
          text: 'Pour trouver l\'équation de la tangente, il faut calculer $f(a)$ (l\'ordonnée du point de tangence) et $f\'(a)$ (le coefficient directeur = la pente). Exemple : pour $f(x) = x^3$ en $a = 2$ : $f(2) = 8$, $f\'(x) = 3x^2$, $f\'(2) = 12$. Tangente : $y = 12(x - 2) + 8 = 12x - 16$.',
        },
      ],
    },

    // ═══════════════════════════════════════
    // SECTION 4 : LIMITES
    // ═══════════════════════════════════════
    {
      title: '4. Limites — bases',
      content: [
        {
          type: 'text',
          text: 'La limite décrit le **comportement d\'une fonction quand $x$ tend vers une valeur** (finie ou infinie). Imaginez que vous vous approchez d\'un mur : la limite vous dit à quelle hauteur vous arriveriez si vous pouviez traverser le mur. C\'est essentiel pour déterminer les asymptotes et le comportement global d\'une fonction.',
        },
        {
          type: 'text',
          text: '**Limites de référence à connaître par cœur**',
        },
        {
          type: 'table',
          headers: ['Limite', 'Résultat'],
          rows: [
            ['\\lim_{x \\to +\\infty} x^n \\;(n \\geq 1)', '+\\infty'],
            ['\\lim_{x \\to +\\infty} e^x', '+\\infty'],
            ['\\lim_{x \\to -\\infty} e^x', '0^+'],
            ['\\lim_{x \\to +\\infty} \\ln(x)', '+\\infty'],
            ['\\lim_{x \\to 0^+} \\ln(x)', '-\\infty'],
            ['\\lim_{x \\to +\\infty} \\frac{1}{x}', '0^+'],
            ['\\lim_{x \\to 0^+} \\frac{1}{x}', '+\\infty'],
            ['\\lim_{x \\to 0^-} \\frac{1}{x}', '-\\infty'],
          ],
        },
        {
          type: 'text',
          text: '**Règles opératoires** (quand les limites ne sont pas indéterminées) :',
        },
        {
          type: 'table',
          headers: ['Opération', 'Règle'],
          rows: [
            ['\\text{Somme}', '\\lim(f+g) = \\lim f + \\lim g'],
            ['\\text{Produit}', '\\lim(fg) = \\lim f \\times \\lim g'],
            ['\\text{Quotient}', '\\lim(f/g) = \\lim f / \\lim g \\;(\\text{si } \\lim g \\neq 0)'],
            ['\\text{Composée}', '\\lim f(g(x)) = f(\\lim g(x))'],
          ],
        },
        {
          type: 'text',
          text: '**Règle des polynômes** : en $\\pm\\infty$, la limite d\'un polynôme est la limite de son **terme de plus haut degré** (les autres termes deviennent négligeables). Exemple : $\\lim_{x \\to +\\infty} (3x^4 - 100x^3 + 2) = \\lim_{x \\to +\\infty} 3x^4 = +\\infty$.',
        },
        {
          type: 'formula',
          math: '\\lim_{x \\to \\pm\\infty} (a_n x^n + \\cdots + a_0) = \\lim_{x \\to \\pm\\infty} a_n x^n',
        },
        {
          type: 'text',
          text: '**Fractions rationnelles** : en $\\pm\\infty$, on compare les degrés du numérateur ($n$) et du dénominateur ($d$).',
        },
        {
          type: 'table',
          headers: ['Cas', 'Limite en ±∞'],
          rows: [
            ['n < d', '0'],
            ['n = d', '\\frac{\\text{coeff dominant num}}{\\text{coeff dominant den}}'],
            ['n > d', '\\pm\\infty'],
          ],
        },
        {
          type: 'tip',
          text: 'Exemple pour les 3 cas : $\\frac{2x+1}{x^2-3} \\to 0$ (degré 1 < 2) ; $\\frac{5x^2-1}{2x^2+7} \\to \\frac{5}{2}$ (même degré 2, rapport des coefficients) ; $\\frac{x^3+1}{x-4} \\to +\\infty$ (degré 3 > 1).',
        },
        {
          type: 'text',
          text: '**Les 7 formes indéterminées** (FI) à résoudre au cas par cas :',
        },
        {
          type: 'formula',
          math: '\\frac{0}{0} \\quad ; \\quad \\frac{\\infty}{\\infty} \\quad ; \\quad 0 \\times \\infty \\quad ; \\quad \\infty - \\infty \\quad ; \\quad 1^\\infty \\quad ; \\quad 0^0 \\quad ; \\quad \\infty^0',
        },
        {
          type: 'method',
          text: '**Méthode : Lever une forme indéterminée**\n\n• **$\\frac{0}{0}$** → Factoriser numérateur et dénominateur, simplifier\n• **$\\frac{\\infty}{\\infty}$** → Factoriser par le terme dominant\n• **$\\infty - \\infty$** → Mettre en facteur ou multiplier par le conjugué\n• **$0 \\times \\infty$** → Transformer en fraction ($\\frac{0}{1/\\infty}$ ou $\\frac{\\infty}{1/0}$)\n\nExemple FI $\\frac{0}{0}$ :\n$\\lim_{x \\to 2} \\frac{x^2 - 4}{x - 2} = \\lim_{x \\to 2} \\frac{(x-2)(x+2)}{x-2} = \\lim_{x \\to 2} (x+2) = 4$\n\nExemple FI $\\frac{\\infty}{\\infty}$ :\n$\\lim_{x \\to +\\infty} \\frac{3x^2 - 2x}{x^2 + 1} = \\lim_{x \\to +\\infty} \\frac{x^2(3 - 2/x)}{x^2(1 + 1/x^2)} = \\frac{3}{1} = 3$\n\nExemple FI $\\infty - \\infty$ :\n$\\lim_{x \\to +\\infty} (\\sqrt{x+1} - \\sqrt{x}) = \\lim \\frac{1}{\\sqrt{x+1}+\\sqrt{x}} = 0$',
        },
        {
          type: 'text',
          text: '**Croissances comparées** (très important pour la suite du programme) :',
        },
        {
          type: 'formula',
          math: '\\lim_{x \\to +\\infty} \\frac{e^x}{x^n} = +\\infty \\qquad \\text{(l\'exponentielle l\'emporte sur tout polynôme)}',
        },
        {
          type: 'formula',
          math: '\\lim_{x \\to +\\infty} \\frac{\\ln(x)}{x^n} = 0 \\qquad \\text{(le logarithme est dominé par tout polynôme)}',
        },
        {
          type: 'tip',
          text: 'Hiérarchie de croissance : $\\ln(x) \\ll x^n \\ll e^x$ en $+\\infty$. Mnémotechnique : "L\'Exponentielle Écrase Tout" (EET). Exemple : même $x^{1000}$ finit par être écrasé par $e^x$. En pratique : $\\lim_{x \\to +\\infty} \\frac{e^x}{x^{100}} = +\\infty$.',
        },

        // --- ASYMPTOTES ---
        {
          type: 'text',
          text: '**Asymptotes** — les 3 types à connaître :',
        },
        {
          type: 'text',
          text: '• **Asymptote horizontale** $y = \\ell$ : si $\\lim_{x \\to \\pm\\infty} f(x) = \\ell$\n• **Asymptote verticale** $x = a$ : si $\\lim_{x \\to a} f(x) = \\pm\\infty$\n• **Asymptote oblique** $y = mx + p$ : si $\\lim_{x \\to \\pm\\infty} [f(x) - (mx+p)] = 0$',
        },
        {
          type: 'method',
          text: '**Méthode : Trouver une asymptote oblique $y = mx + p$**\n1. Calculer $m = \\lim_{x \\to \\pm\\infty} \\frac{f(x)}{x}$\n2. Si $m$ est fini et non nul, calculer $p = \\lim_{x \\to \\pm\\infty} [f(x) - mx]$\n3. Si $p$ est fini, alors $y = mx + p$ est asymptote oblique\n\nExemple : $f(x) = \\frac{x^2 + 1}{x} = x + \\frac{1}{x}$\n$m = \\lim \\frac{f(x)}{x} = \\lim \\frac{x^2+1}{x^2} = 1$\n$p = \\lim [f(x) - x] = \\lim \\frac{1}{x} = 0$\nAsymptote oblique : $y = x$',
        },
      ],
    },

    // ═══════════════════════════════════════
    // SECTION 5 : INÉQUATIONS
    // ═══════════════════════════════════════
    {
      title: '5. Inéquations et tableau de signes',
      content: [
        {
          type: 'text',
          text: 'Résoudre une inéquation revient à trouver l\'ensemble des valeurs de $x$ vérifiant l\'inégalité. Le tableau de signes est l\'outil fondamental. Pensez-y comme à une **cartographie des signes** : vous dessinez le territoire où l\'expression est positive ou négative.',
        },
        {
          type: 'method',
          text: '**Méthode : Résoudre une inéquation avec tableau de signes**\n1. Mettre tout d\'un côté : $f(x) \\geq 0$\n2. Factoriser $f(x)$ si possible\n3. Trouver les racines de chaque facteur (valeurs qui annulent)\n4. Identifier les valeurs interdites (dénominateur = 0)\n5. Dresser le tableau de signes\n6. Lire la solution en fonction de l\'inégalité demandée\n\nExemple : $(x - 2)(x + 5) \\geq 0$\nRacines : $x = 2$ et $x = -5$\nTableau : le produit est $\\geq 0$ pour $x \\leq -5$ ou $x \\geq 2$\nSolution : $S = ]-\\infty ; -5] \\cup [2 ; +\\infty[$',
        },
        {
          type: 'text',
          text: '**Règle des signes** : le signe d\'un produit/quotient se détermine par :',
        },
        {
          type: 'table',
          headers: ['×', '+', '-'],
          rows: [
            ['+', '+', '-'],
            ['-', '-', '+'],
          ],
        },
        {
          type: 'tip',
          text: 'Un facteur $(x - a)$ est négatif pour $x < a$ et positif pour $x > a$. Astuce pour se souvenir : c\'est comme une thermomètre — en dessous de $a$ il fait froid (négatif). Un facteur du 1er degré change de signe en passant par sa racine ; un facteur du 2nd degré avec $\\Delta < 0$ garde un signe constant (toujours positif si $a > 0$, toujours négatif si $a < 0$).',
        },
        {
          type: 'method',
          text: '**Méthode : Résoudre une inéquation avec quotient**\nPour $\\frac{f(x)}{g(x)} \\geq 0$ :\n1. Ne JAMAIS multiplier par $g(x)$ (on ne connaît pas son signe)\n2. Étudier le signe du numérateur et du dénominateur séparément\n3. Appliquer la règle des signes dans le tableau\n4. Exclure les valeurs où $g(x) = 0$ de la solution\n\nExemple : $\\frac{x - 3}{x + 1} < 0$\nNumérateur nul en $x = 3$, dénominateur nul en $x = -1$ (exclu)\nTableau de signes → quotient négatif pour $x \\in ]-1 ; 3[$\n(on exclut $x = -1$ car valeur interdite)',
        },
        {
          type: 'text',
          text: '**Valeur absolue** : pour résoudre $|f(x)| \\leq a$ (avec $a > 0$). Interprétation géométrique : $|x|$ est la distance de $x$ à $0$ sur la droite réelle.',
        },
        {
          type: 'formula',
          math: '|f(x)| \\leq a \\iff -a \\leq f(x) \\leq a',
        },
        {
          type: 'formula',
          math: '|f(x)| \\geq a \\iff f(x) \\leq -a \\;\\text{ ou }\\; f(x) \\geq a',
        },
        {
          type: 'tip',
          text: 'Exemple : $|3x - 6| \\leq 9 \\iff -9 \\leq 3x - 6 \\leq 9 \\iff -3 \\leq 3x \\leq 15 \\iff -1 \\leq x \\leq 5$. La solution est l\'intervalle $[-1 ; 5]$. Vérification en $x = 2$ (milieu) : $|3(2) - 6| = 0 \\leq 9$ ✓.',
        },
      ],
    },

    // ═══════════════════════════════════════
    // SECTION 6 : SYSTÈMES
    // ═══════════════════════════════════════
    {
      title: '6. Systèmes d\'équations',
      content: [
        {
          type: 'text',
          text: 'Un système de 2 équations à 2 inconnues modélise de nombreux problèmes concrets (mélange de produits, tarifs, vitesses...). L\'idée : chaque équation est une **contrainte** et on cherche le point qui satisfait toutes les contraintes simultanément. Trois méthodes de résolution :',
        },
        {
          type: 'method',
          text: '**Méthode 1 : Substitution**\n1. Isoler une variable dans une des équations\n2. Remplacer dans l\'autre équation\n3. Résoudre l\'équation à une inconnue obtenue\n4. Reporter dans l\'expression isolée\n\nIdéale quand un coefficient vaut 1 ou -1.\n\nExemple : $\\begin{cases} 2x + y = 7 \\\\ x - y = 2 \\end{cases}$\nDe la 2ème : $x = y + 2$\nDans la 1ère : $2(y+2) + y = 7 \\Rightarrow 3y = 3 \\Rightarrow y = 1$\nDonc $x = 1 + 2 = 3$. Solution : $(3 ; 1)$.',
        },
        {
          type: 'method',
          text: '**Méthode 2 : Combinaison (addition)**\n1. Multiplier les équations par des coefficients pour aligner\n2. Additionner ou soustraire pour éliminer une variable\n3. Résoudre, puis reporter\n\nIdéale quand les coefficients se simplifient bien.\n\nExemple : $\\begin{cases} 3x + 2y = 8 \\\\ 3x - y = 5 \\end{cases}$\nSoustraction : $3y = 3 \\Rightarrow y = 1$\nReporter : $3x + 2 = 8 \\Rightarrow x = 2$. Solution : $(2 ; 1)$.',
        },
        {
          type: 'method',
          text: '**Méthode 3 : Formules de Cramer (déterminant)**\nPour $\\begin{cases} ax + by = e \\\\ cx + dy = f \\end{cases}$\n\n$D = ad - bc$ (déterminant du système)\n\nSi $D \\neq 0$ : $x = \\frac{ed - bf}{D}$ et $y = \\frac{af - ec}{D}$\n\nCette méthode sera approfondie dans le chapitre Matrices.',
        },
        {
          type: 'tip',
          text: 'Si $D = 0$ : le système est soit **impossible** (pas de solution — les deux droites sont parallèles) soit **indéterminé** (infinité de solutions — les deux équations représentent la même droite). On vérifie en regardant si les deux équations sont proportionnelles.',
        },
      ],
    },

    // ═══════════════════════════════════════
    // SECTION 7 : TRIGONOMÉTRIE
    // ═══════════════════════════════════════
    {
      title: '7. Trigonométrie de base',
      content: [
        {
          type: 'text',
          text: '**Valeurs remarquables à connaître par cœur** — elles reviennent dans presque tous les sujets. Astuce : pensez au cercle trigonométrique. Les angles $\\frac{\\pi}{6}$, $\\frac{\\pi}{4}$, $\\frac{\\pi}{3}$ correspondent à des triangles équilatéral et isocèle que vous pouvez reconstituer de mémoire.',
        },
        {
          type: 'table',
          headers: ['\\theta', '0', '\\frac{\\pi}{6}', '\\frac{\\pi}{4}', '\\frac{\\pi}{3}', '\\frac{\\pi}{2}', '\\pi'],
          rows: [
            ['\\cos\\theta', '1', '\\frac{\\sqrt{3}}{2}', '\\frac{\\sqrt{2}}{2}', '\\frac{1}{2}', '0', '-1'],
            ['\\sin\\theta', '0', '\\frac{1}{2}', '\\frac{\\sqrt{2}}{2}', '\\frac{\\sqrt{3}}{2}', '1', '0'],
            ['\\tan\\theta', '0', '\\frac{1}{\\sqrt{3}}', '1', '\\sqrt{3}', '\\text{n.d.}', '0'],
          ],
        },
        {
          type: 'method',
          text: '**Méthode : Retrouver les valeurs remarquables**\nMnémotechnique pour le sinus (angles de 0 à $\\frac{\\pi}{2}$) — la règle du "$\\frac{\\sqrt{n}}{2}$" :\n$\\sin(0) = \\frac{\\sqrt{0}}{2} = 0$\n$\\sin\\left(\\frac{\\pi}{6}\\right) = \\frac{\\sqrt{1}}{2} = \\frac{1}{2}$\n$\\sin\\left(\\frac{\\pi}{4}\\right) = \\frac{\\sqrt{2}}{2}$\n$\\sin\\left(\\frac{\\pi}{3}\\right) = \\frac{\\sqrt{3}}{2}$\n$\\sin\\left(\\frac{\\pi}{2}\\right) = \\frac{\\sqrt{4}}{2} = 1$\n\nPour le cosinus, c\'est l\'ordre inverse : $\\cos\\theta = \\sin\\left(\\frac{\\pi}{2} - \\theta\\right)$',
        },
        {
          type: 'text',
          text: '**Formules fondamentales**',
        },
        {
          type: 'formula',
          math: '\\cos^2(x) + \\sin^2(x) = 1',
        },
        {
          type: 'formula',
          math: '\\tan(x) = \\frac{\\sin(x)}{\\cos(x)}',
        },
        {
          type: 'formula',
          math: '1 + \\tan^2(x) = \\frac{1}{\\cos^2(x)}',
        },
        {
          type: 'text',
          text: '**Formules d\'addition**',
        },
        {
          type: 'formula',
          math: '\\cos(a+b) = \\cos a \\cos b - \\sin a \\sin b',
        },
        {
          type: 'formula',
          math: '\\cos(a-b) = \\cos a \\cos b + \\sin a \\sin b',
        },
        {
          type: 'formula',
          math: '\\sin(a+b) = \\sin a \\cos b + \\cos a \\sin b',
        },
        {
          type: 'formula',
          math: '\\sin(a-b) = \\sin a \\cos b - \\cos a \\sin b',
        },
        {
          type: 'tip',
          text: 'Mnémotechnique pour ne pas confondre $\\cos(a+b)$ et $\\sin(a+b)$ : pour le cosinus, les signes sont **inversés** (+ à gauche donne − à droite) ; pour le sinus, les signes sont **identiques** (+ à gauche donne + à droite). Ou encore : cos = cos×cos − sin×sin ; sin = sin×cos + cos×sin.',
        },
        {
          type: 'text',
          text: '**Formules de duplication** (cas particulier $a = b$)',
        },
        {
          type: 'formula',
          math: '\\cos(2x) = \\cos^2(x) - \\sin^2(x) = 2\\cos^2(x) - 1 = 1 - 2\\sin^2(x)',
        },
        {
          type: 'formula',
          math: '\\sin(2x) = 2\\sin(x)\\cos(x)',
        },
        {
          type: 'text',
          text: '**Formules de linéarisation** (utiles pour les primitives)',
        },
        {
          type: 'formula',
          math: '\\cos^2(x) = \\frac{1 + \\cos(2x)}{2} \\qquad \\sin^2(x) = \\frac{1 - \\cos(2x)}{2}',
        },
        {
          type: 'tip',
          text: 'Les formules de linéarisation sont essentielles pour calculer les primitives de $\\cos^2(x)$ et $\\sin^2(x)$. Elles reviennent très souvent en examen. Exemple : $\\int \\cos^2(x)\\,dx = \\int \\frac{1 + \\cos(2x)}{2}\\,dx = \\frac{x}{2} + \\frac{\\sin(2x)}{4} + C$.',
        },
        {
          type: 'text',
          text: '**Angles associés** — pour ramener à un angle du premier quadrant :',
        },
        {
          type: 'table',
          headers: ['Angle', '\\cos', '\\sin'],
          rows: [
            ['\\pi - x', '-\\cos x', '\\sin x'],
            ['\\pi + x', '-\\cos x', '-\\sin x'],
            ['-x', '\\cos x', '-\\sin x'],
            ['\\frac{\\pi}{2} - x', '\\sin x', '\\cos x'],
            ['\\frac{\\pi}{2} + x', '-\\sin x', '\\cos x'],
          ],
        },
        {
          type: 'tip',
          text: 'Pour mémoriser les angles associés : visualisez le cercle trigonométrique et la symétrie. L\'angle $\\pi - x$ est le symétrique de $x$ par rapport à l\'axe des ordonnées : même $\\sin$, $\\cos$ opposé. L\'angle $-x$ est le symétrique par rapport à l\'axe des abscisses : même $\\cos$, $\\sin$ opposé.',
        },
      ],
    },

    // ═══════════════════════════════════════
    // SECTION 8 : EXERCICES SUPPLÉMENTAIRES (MIXTES)
    // ═══════════════════════════════════════
    {
      title: '8. Exercices — Calculs de base',
      content: [
        {
          type: 'exercise',
          text: 'Exercice 1 : Calculer les expressions suivantes et simplifier.',
          items: [
            '\\frac{2}{3} + \\frac{5}{4}',
            '\\frac{7}{6} \\times \\frac{3}{14}',
            '\\frac{\\frac{2}{5}}{\\frac{3}{7}}',
            '\\frac{1}{x+1} + \\frac{1}{x-1}',
          ],
        },
        {
          type: 'correction',
          text: 'Correction exercice 1',
          items: [
            '$\\frac{2}{3} + \\frac{5}{4} = \\frac{8}{12} + \\frac{15}{12} = \\frac{23}{12}$',
            '$\\frac{7}{6} \\times \\frac{3}{14} = \\frac{21}{84} = \\frac{1}{4}$',
            '$\\frac{\\frac{2}{5}}{\\frac{3}{7}} = \\frac{2}{5} \\times \\frac{7}{3} = \\frac{14}{15}$',
            '$\\frac{1}{x+1} + \\frac{1}{x-1} = \\frac{(x-1) + (x+1)}{(x+1)(x-1)} = \\frac{2x}{x^2 - 1}$',
          ],
        },
        {
          type: 'exercise',
          text: 'Exercice 2 : Simplifier les expressions avec puissances et racines.',
          items: [
            '2^3 \\times 2^5',
            '\\frac{3^7}{3^4}',
            '(5^2)^3',
            '4^{-2}',
            '\\sqrt{50}',
            '\\sqrt{12} + 3\\sqrt{3}',
            '\\frac{6}{\\sqrt{2}}',
            '\\frac{2}{3 - \\sqrt{5}}',
          ],
        },
        {
          type: 'correction',
          text: 'Correction exercice 2',
          items: [
            '$2^3 \\times 2^5 = 2^{3+5} = 2^8 = 256$',
            '$\\frac{3^7}{3^4} = 3^{7-4} = 3^3 = 27$',
            '$(5^2)^3 = 5^{6} = 15\\,625$',
            '$4^{-2} = \\frac{1}{4^2} = \\frac{1}{16}$',
            '$\\sqrt{50} = \\sqrt{25 \\times 2} = 5\\sqrt{2}$',
            '$\\sqrt{12} + 3\\sqrt{3} = 2\\sqrt{3} + 3\\sqrt{3} = 5\\sqrt{3}$',
            '$\\frac{6}{\\sqrt{2}} = \\frac{6\\sqrt{2}}{2} = 3\\sqrt{2}$',
            '$\\frac{2}{3 - \\sqrt{5}} = \\frac{2(3 + \\sqrt{5})}{(3)^2 - (\\sqrt{5})^2} = \\frac{2(3 + \\sqrt{5})}{4} = \\frac{3 + \\sqrt{5}}{2}$',
          ],
        },
      ],
    },
    {
      title: '9. Exercices — Identités, factorisation et 2nd degré',
      content: [
        {
          type: 'exercise',
          text: 'Exercice 3 : Développer et factoriser.',
          items: [
            '(3x+2)^2',
            '(2x-5)^2',
            'x^2 - 9',
            '4x^2 + 12x + 9',
            '9x^2 - 24x + 16',
          ],
        },
        {
          type: 'correction',
          text: 'Correction exercice 3',
          items: [
            '$(3x+2)^2 = 9x^2 + 12x + 4$',
            '$(2x-5)^2 = 4x^2 - 20x + 25$',
            '$x^2 - 9 = (x-3)(x+3)$',
            '$4x^2 + 12x + 9 = (2x+3)^2$',
            '$9x^2 - 24x + 16 = (3x-4)^2$',
          ],
        },
        {
          type: 'exercise',
          text: 'Exercice 4 : Résoudre les équations du second degré.',
          items: [
            '2x^2 - 5x + 3 = 0',
            'x^2 + 4x + 4 = 0',
            'x^2 + x + 1 = 0',
            '3x^2 - 7x + 2 = 0',
            '-x^2 + 6x - 5 = 0',
          ],
        },
        {
          type: 'correction',
          text: 'Correction exercice 4',
          items: [
            '$\\Delta = 25 - 24 = 1 > 0$. $x_1 = \\frac{5-1}{4} = 1$ et $x_2 = \\frac{5+1}{4} = \\frac{3}{2}$. Vérif Viète : $1 + \\frac{3}{2} = \\frac{5}{2}$ $\\checkmark$',
            '$\\Delta = 16 - 16 = 0$. $x_0 = \\frac{-4}{2} = -2$ (solution double)',
            '$\\Delta = 1 - 4 = -3 < 0$. Pas de solution réelle.',
            '$\\Delta = 49 - 24 = 25 > 0$. $x_1 = \\frac{7-5}{6} = \\frac{1}{3}$ et $x_2 = \\frac{7+5}{6} = 2$',
            '$\\Delta = 36 - 20 = 16 > 0$. $x_1 = \\frac{-6-4}{-2} = 5$ et $x_2 = \\frac{-6+4}{-2} = 1$',
          ],
        },
      ],
    },
    {
      title: '10. Exercices — Dérivées',
      content: [
        {
          type: 'exercise',
          text: 'Exercice 5 : Calculer les dérivées des fonctions suivantes.',
          items: [
            'f(x) = 3x^4 - 2x^2 + 5x - 1',
            'g(x) = (2x+1)(x^2-3)',
            'h(x) = \\frac{x+1}{x-1}',
            'k(x) = e^{2x+1}',
            'p(x) = x^2 \\ln(x)',
            'q(x) = \\frac{e^x}{x^2}',
            'r(x) = \\sqrt{3x^2 + 1}',
          ],
        },
        {
          type: 'correction',
          text: 'Correction exercice 5',
          items: [
            '$f\'(x) = 12x^3 - 4x + 5$',
            '$g\'(x) = 2(x^2-3) + (2x+1)(2x) = 2x^2 - 6 + 4x^2 + 2x = 6x^2 + 2x - 6$',
            '$h\'(x) = \\frac{1 \\cdot (x-1) - (x+1) \\cdot 1}{(x-1)^2} = \\frac{-2}{(x-1)^2}$',
            '$k\'(x) = 2e^{2x+1}$ (composée : $u = 2x+1$, $u\' = 2$)',
            '$p\'(x) = 2x \\ln(x) + x^2 \\cdot \\frac{1}{x} = 2x\\ln(x) + x = x(2\\ln(x) + 1)$',
            '$q\'(x) = \\frac{e^x \\cdot x^2 - e^x \\cdot 2x}{x^4} = \\frac{e^x(x^2 - 2x)}{x^4} = \\frac{e^x(x - 2)}{x^3}$',
            '$r\'(x) = \\frac{6x}{2\\sqrt{3x^2+1}} = \\frac{3x}{\\sqrt{3x^2+1}}$ (composée : $u = 3x^2+1$, $u\' = 6x$)',
          ],
        },
        {
          type: 'exercise',
          text: 'Exercice 6 : Déterminer l\'équation de la tangente à la courbe de $f(x) = x^2 - 3x + 1$ au point d\'abscisse $x = 2$.',
        },
        {
          type: 'correction',
          text: 'Correction exercice 6',
          items: [
            '$f(2) = 4 - 6 + 1 = -1$, donc le point est $(2\\,;\\,-1)$',
            '$f\'(x) = 2x - 3$, donc $f\'(2) = 4 - 3 = 1$',
            'Tangente : $y = f\'(2)(x - 2) + f(2) = 1 \\cdot (x - 2) + (-1) = x - 3$',
          ],
        },
      ],
    },
    {
      title: '11. Exercices — Limites',
      content: [
        {
          type: 'exercise',
          text: 'Exercice 7 : Calculer les limites suivantes.',
          items: [
            '\\lim_{x \\to +\\infty} \\frac{2x^3 - x + 1}{5x^3 + 3x^2}',
            '\\lim_{x \\to +\\infty} (x^2 - 3x + 1)',
            '\\lim_{x \\to 2} \\frac{x^2 - 4}{x - 2}',
            '\\lim_{x \\to +\\infty} \\frac{3x + 1}{x^2 - 5}',
            '\\lim_{x \\to +\\infty} (\\sqrt{x+1} - \\sqrt{x})',
            '\\lim_{x \\to 0} \\frac{e^x - 1}{x}',
          ],
        },
        {
          type: 'correction',
          text: 'Correction exercice 7',
          items: [
            'FI $\\frac{\\infty}{\\infty}$. On factorise par $x^3$ : $\\frac{x^3(2 - 1/x^2 + 1/x^3)}{x^3(5 + 3/x)} \\to \\frac{2}{5}$',
            'Terme dominant $x^2 \\to +\\infty$, donc $\\lim = +\\infty$',
            'FI $\\frac{0}{0}$. $\\frac{x^2-4}{x-2} = \\frac{(x-2)(x+2)}{x-2} = x + 2 \\to 4$',
            '$\\deg(\\text{num}) = 1 < 2 = \\deg(\\text{den})$, donc $\\lim = 0$',
            'FI $\\infty - \\infty$. On multiplie par le conjugué : $\\frac{(\\sqrt{x+1} - \\sqrt{x})(\\sqrt{x+1} + \\sqrt{x})}{\\sqrt{x+1} + \\sqrt{x}} = \\frac{1}{\\sqrt{x+1} + \\sqrt{x}} \\to 0$',
            'C\'est la dérivée de $e^x$ en $x = 0$, donc $\\lim = e^0 = 1$ (limite fondamentale)',
          ],
        },
      ],
    },
    {
      title: '12. Exercices — Inéquations, systèmes et trigonométrie',
      content: [
        {
          type: 'exercise',
          text: 'Exercice 8 : Résoudre les inéquations.',
          items: [
            '(x-1)(x+3) \\geq 0',
            '\\frac{x+2}{x-4} < 0',
            'x^2 - 5x + 6 \\leq 0',
            '|2x - 3| \\leq 5',
          ],
        },
        {
          type: 'correction',
          text: 'Correction exercice 8',
          items: [
            'Racines : $x = 1$ et $x = -3$. $S = ]-\\infty ; -3] \\cup [1 ; +\\infty[$',
            'Racines : $x = -2$ et $x = 4$ (valeur interdite). $S = ]-2 ; 4[$',
            '$\\Delta = 25 - 24 = 1$. $x_1 = 2$, $x_2 = 3$. $a = 1 > 0$ $\\Rightarrow$ négatif entre les racines. $S = [2 ; 3]$',
            '$|2x-3| \\leq 5 \\iff -5 \\leq 2x-3 \\leq 5 \\iff -1 \\leq x \\leq 4$. $S = [-1 ; 4]$',
          ],
        },
        {
          type: 'exercise',
          text: 'Exercice 9 : Résoudre les systèmes suivants.',
          items: [
            '\\begin{cases} 2x + y = 7 \\\\ x - y = 2 \\end{cases}',
            '\\begin{cases} 3x + 2y = 12 \\\\ x - y = 1 \\end{cases}',
            '\\begin{cases} 4x - 3y = 5 \\\\ 2x + y = 7 \\end{cases}',
          ],
        },
        {
          type: 'correction',
          text: 'Correction exercice 9',
          items: [
            'Combinaison : $3x = 9 \\Rightarrow x = 3$ puis $y = 7 - 6 = 1$. Solution : $(3 ; 1)$',
            'Substitution : $x = 1 + y$, $3(1+y) + 2y = 12 \\Rightarrow 5y = 9 \\Rightarrow y = \\frac{9}{5}$, $x = \\frac{14}{5}$',
            'De la 2ème : $y = 7 - 2x$. $4x - 3(7-2x) = 5 \\Rightarrow 10x = 26 \\Rightarrow x = 2{,}6$, $y = 1{,}8$',
          ],
        },
        {
          type: 'exercise',
          text: 'Exercice 10 : Trigonométrie — calculer les valeurs exactes.',
          items: [
            '\\cos\\left(\\frac{\\pi}{3}\\right) + \\sin\\left(\\frac{\\pi}{6}\\right)',
            '\\sin\\left(\\frac{\\pi}{4} + \\frac{\\pi}{3}\\right)',
            '\\cos\\left(\\frac{5\\pi}{6}\\right)',
            '\\sin\\left(\\frac{7\\pi}{4}\\right)',
            '\\cos^2\\left(\\frac{\\pi}{8}\\right)',
          ],
        },
        {
          type: 'correction',
          text: 'Correction exercice 10',
          items: [
            '$\\cos\\left(\\frac{\\pi}{3}\\right) + \\sin\\left(\\frac{\\pi}{6}\\right) = \\frac{1}{2} + \\frac{1}{2} = 1$',
            '$\\sin\\left(\\frac{\\pi}{4} + \\frac{\\pi}{3}\\right) = \\frac{\\sqrt{2}}{2} \\cdot \\frac{1}{2} + \\frac{\\sqrt{2}}{2} \\cdot \\frac{\\sqrt{3}}{2} = \\frac{\\sqrt{2} + \\sqrt{6}}{4}$',
            '$\\cos\\left(\\frac{5\\pi}{6}\\right) = \\cos\\left(\\pi - \\frac{\\pi}{6}\\right) = -\\cos\\left(\\frac{\\pi}{6}\\right) = -\\frac{\\sqrt{3}}{2}$',
            '$\\sin\\left(\\frac{7\\pi}{4}\\right) = \\sin\\left(2\\pi - \\frac{\\pi}{4}\\right) = -\\sin\\left(\\frac{\\pi}{4}\\right) = -\\frac{\\sqrt{2}}{2}$',
            '$\\cos^2\\left(\\frac{\\pi}{8}\\right) = \\frac{1 + \\cos\\left(\\frac{\\pi}{4}\\right)}{2} = \\frac{2 + \\sqrt{2}}{4}$ (linéarisation)',
          ],
        },
      ],
    },

    // ═══════════════════════════════════════
    // SECTION 13 : EXERCICE TYPE EXAMEN
    // ═══════════════════════════════════════
    {
      title: '13. Exercice type examen — Synthèse',
      content: [
        {
          type: 'exercise',
          text: 'Exercice 11 (Type DT IMI) : Soit $f(x) = \\frac{x^2 - 4x + 3}{x - 1}$.\n\na) Déterminer le domaine de définition de $f$.\nb) Simplifier l\'expression de $f(x)$ pour $x \\neq 1$.\nc) Calculer $\\lim_{x \\to 1} f(x)$.\nd) Calculer $f\'(x)$ après simplification.\ne) Résoudre $f(x) \\geq 0$.',
        },
        {
          type: 'correction',
          text: 'Correction exercice 11',
          items: [
            '$D_f = \\mathbb{R} \\setminus \\{1\\}$ car le dénominateur s\'annule en $x = 1$.',
            '$x^2 - 4x + 3 = (x-1)(x-3)$ ($\\Delta = 16-12 = 4$, racines 1 et 3). Donc $f(x) = \\frac{(x-1)(x-3)}{x-1} = x - 3$ pour $x \\neq 1$.',
            '$\\lim_{x \\to 1} f(x) = \\lim_{x \\to 1} (x - 3) = -2$. FI $\\frac{0}{0}$ levée par factorisation.',
            '$f(x) = x - 3$ après simplification, donc $f\'(x) = 1$ pour tout $x \\neq 1$.',
            '$f(x) \\geq 0 \\iff x - 3 \\geq 0 \\iff x \\geq 3$. Solution : $S = [3 ; +\\infty[$.',
          ],
        },
      ],
    },
  ],
  erreurs: [
    'Confondre $\\frac{a+b}{c} = \\frac{a}{c} + \\frac{b}{c}$ (correct) avec $\\frac{a}{b+c} = \\frac{a}{b} + \\frac{a}{c}$ (FAUX !)',
    'Croire que $\\sqrt{a+b} = \\sqrt{a} + \\sqrt{b}$ — c\'est FAUX. Exemple : $\\sqrt{9+16} = \\sqrt{25} = 5 \\neq 3 + 4 = 7$.',
    'Oublier que $(a+b)^2 \\neq a^2 + b^2$ — il manque le double produit $2ab$. Exemple : $(3+4)^2 = 49$ mais $9 + 16 = 25$.',
    'Se tromper dans la règle du quotient des dérivées : le numérateur est $u\'v - uv\'$ (et non $uv\' - u\'v$). Mnémo : "Numérateur prime × Dénominateur − Numérateur × Dénominateur prime" ($u\'v - uv\'$).',
    'Conclure trop vite sur une forme indéterminée sans la lever — toujours factoriser ou transformer avant de conclure.',
    'Oublier les valeurs interdites dans les inéquations avec quotient — le dénominateur ne peut jamais être nul.',
    'Confondre $\\cos(a+b)$ et $\\cos(a) + \\cos(b)$ — le cosinus n\'est PAS linéaire ! $\\cos\\left(\\frac{\\pi}{3} + \\frac{\\pi}{6}\\right) = \\cos\\left(\\frac{\\pi}{2}\\right) = 0 \\neq \\frac{1}{2} + \\frac{\\sqrt{3}}{2}$.',
    'Oublier de vérifier ses solutions en les réinjectant dans l\'équation de départ, surtout pour les équations avec des racines ou des logarithmes.',
    'Multiplier les deux membres d\'une inéquation par une quantité sans vérifier son signe — si le facteur est négatif, le sens de l\'inégalité **s\'inverse**.',
  ],
  bilan: [
    'Je sais manipuler fractions, puissances et racines carrées sans erreur',
    'Je sais rationaliser un dénominateur (conjugué)',
    'Je connais les 3 identités remarquables et je sais factoriser',
    'Je maîtrise la résolution par le discriminant et les relations de Viète',
    'Je connais le signe du trinôme selon $\\Delta$',
    'Je sais dériver toutes les fonctions usuelles et appliquer les 5 règles',
    'Je sais dériver une fonction composée (règle de la chaîne)',
    'Je sais calculer des limites et identifier/lever les 7 formes indéterminées',
    'Je connais les croissances comparées ($\\ln \\ll x^n \\ll e^x$)',
    'Je sais résoudre une inéquation avec tableau de signes',
    'Je sais résoudre un système par substitution, combinaison ou Cramer',
    'Je connais par cœur les valeurs remarquables en trigonométrie',
    'Je connais les formules d\'addition, duplication et linéarisation',
  ],
}
