import { ChapterContent } from './types'

export const chapterContent: ChapterContent = {
  slug: 'primitives',
  title: 'Primitives',
  icon: '∫',
  importance: 'Indispensable pour le calcul intégral. Un tableau de primitives bien maîtrisé permet de gagner beaucoup de temps en examen. C\'est la brique de base pour calculer des intégrales.',
  days: 'Jours 8–9',
  sections: [
    {
      title: '1. Définition et intuition',
      content: [
        {
          type: 'text',
          text: '**Définition** : Une fonction $F$ est une **primitive** de $f$ sur un intervalle $I$ si $F\'(x) = f(x)$ pour tout $x \\in I$.',
        },
        {
          type: 'text',
          text: '**Analogie** : Si $f$ représente la vitesse d\'un mobile, alors $F$ représente sa position. Primitiver, c\'est « remonter » de la vitesse à la position.',
        },
        {
          type: 'tip',
          text: 'Si $F$ est une primitive de $f$, alors $F + C$ (avec $C \\in \\mathbb{R}$) est aussi une primitive de $f$. L\'ensemble des primitives de $f$ est $\\{F + C,\\; C \\in \\mathbb{R}\\}$.\n\nIl existe une infinité de primitives, toutes parallèles (décalées verticalement). On les distingue grâce à une condition initiale : par exemple $F(0) = 3$ fixe la valeur de $C$.',
        },
        {
          type: 'text',
          text: '**Vérification** : Pour vérifier qu\'une primitive $F$ est correcte, il suffit de dériver $F$ et de s\'assurer qu\'on retrouve $f$. C\'est un contrôle immédiat et systématique à faire en examen.',
        },
      ],
    },
    {
      title: '2. Tableau des primitives usuelles',
      content: [
        {
          type: 'text',
          text: 'Ce tableau est à connaître **par cœur**. Chaque ligne se vérifie en dérivant $F(x)$ pour retrouver $f(x)$.',
        },
        {
          type: 'table',
          headers: ['Fonction f(x)', 'Primitive F(x)', 'Condition'],
          rows: [
            ['k \\; (\\text{constante})', 'kx', ''],
            ['x^n', '\\frac{x^{n+1}}{n+1}', 'n \\neq -1'],
            ['\\frac{1}{x}', '\\ln|x|', 'x \\neq 0'],
            ['\\frac{1}{x^2} = x^{-2}', '-\\frac{1}{x}', 'x \\neq 0'],
            ['\\frac{1}{\\sqrt{x}} = x^{-1/2}', '2\\sqrt{x}', 'x > 0'],
            ['\\sqrt{x} = x^{1/2}', '\\frac{2}{3}x^{3/2}', 'x > 0'],
            ['e^x', 'e^x', ''],
            ['\\cos(x)', '\\sin(x)', ''],
            ['\\sin(x)', '-\\cos(x)', ''],
            ['\\frac{1}{\\cos^2(x)} = 1 + \\tan^2(x)', '\\tan(x)', 'x \\neq \\frac{\\pi}{2} + k\\pi'],
          ],
        },
        {
          type: 'tip',
          text: '**Mémo rapide** : la primitive de $x^n$ est $\\frac{x^{n+1}}{n+1}$ — on augmente l\'exposant de 1 et on divise par le nouvel exposant. Vérification : $\\left(\\frac{x^{n+1}}{n+1}\\right)\' = \\frac{(n+1)x^n}{n+1} = x^n$. $\\checkmark$',
        },
      ],
    },
    {
      title: '3. Primitives composées — Règle du u\' × g(u)',
      content: [
        {
          type: 'text',
          text: 'Quand la fonction à primitiver est de la forme $u\'(x) \\times g(u(x))$, on utilise les formules de primitives composées. **L\'idée clé** : repérer $u$ (la « fonction intérieure ») et $u\'$ (sa dérivée) dans l\'expression.',
        },
        {
          type: 'table',
          headers: ['Forme de f(x)', 'Primitive F(x)', 'Condition'],
          rows: [
            ['u\' \\cdot u^n', '\\frac{u^{n+1}}{n+1}', 'n \\neq -1'],
            ['\\frac{u\'}{u}', '\\ln|u|', 'u \\neq 0'],
            ['u\' \\cdot e^u', 'e^u', ''],
            ['u\' \\cdot \\cos(u)', '\\sin(u)', ''],
            ['u\' \\cdot \\sin(u)', '-\\cos(u)', ''],
            ['\\frac{u\'}{2\\sqrt{u}}', '\\sqrt{u}', 'u > 0'],
            ['u\' \\cdot \\sqrt{u}', '\\frac{2}{3}u^{3/2}', 'u > 0'],
          ],
        },
        {
          type: 'tip',
          text: '**Astuce coefficient** : Si la dérivée $u\'$ apparaît à un facteur multiplicatif près, on peut ajuster. Exemple : pour $\\int 3x^2 \\cdot e^{x^3}\\,dx$, on a $u = x^3$, $u\' = 3x^2$ — exactement la bonne forme. Primitive : $e^{x^3} + C$.\n\nSi on avait $\\int x^2 e^{x^3}\\,dx$, on écrit $x^2 = \\frac{1}{3} \\cdot 3x^2$, donc la primitive est $\\frac{1}{3}e^{x^3} + C$.',
        },
      ],
    },
    {
      title: '4. Méthode en 4 étapes',
      content: [
        {
          type: 'method',
          text: '**Pour trouver une primitive de f(x)** :\n\n**Étape 1 — Type de fonction** : Est-ce une primitive usuelle (tableau) ou composée ?\n\n**Étape 2 — Si composée** : Identifier $u$ (fonction intérieure) et calculer $u\'$. Vérifier que $u\'$ apparaît bien (à une constante près) dans $f(x)$.\n\n**Étape 3 — Ajuster les coefficients** : Si $u\'$ apparaît à un facteur $k$ près, écrire $f(x) = k \\cdot \\frac{1}{k} \\cdot u\'(x) \\cdot g(u(x))$ et sortir la constante $\\frac{1}{k}$.\n\n**Étape 4 — Vérifier** : Dériver $F(x)$ pour retrouver $f(x)$. Ce contrôle doit être systématique.',
        },
      ],
    },
    {
      title: '5. Exemples corrigés détaillés',
      content: [
        {
          type: 'text',
          text: '**Exemple concret de vérification** : Primitive de $f(x) = 2x$ est $F(x) = x^2 + C$. Vérif : $(x^2 + C)\' = 2x = f(x)$. $\\checkmark$',
        },
        {
          type: 'exercise',
          text: 'Exemple 1 : Trouver une primitive de $f(x) = 3x^2 + 2x - 5$',
        },
        {
          type: 'correction',
          text: 'Correction exemple 1 — primitive terme à terme',
          items: [
            'On primitive chaque terme séparément (linéarité).',
            '$F(x) = \\frac{3x^3}{3} + \\frac{2x^2}{2} - 5x + C = x^3 + x^2 - 5x + C$',
            '**Vérification** : $(x^3 + x^2 - 5x)\' = 3x^2 + 2x - 5 = f(x)$. $\\checkmark$',
          ],
        },
        {
          type: 'exercise',
          text: 'Exemple 2 : Trouver une primitive de $f(x) = \\frac{2x}{x^2 + 1}$',
        },
        {
          type: 'correction',
          text: 'Correction exemple 2 — forme composée $\\frac{u\'}{u}$',
          items: [
            'On pose $u = x^2 + 1$, donc $u\' = 2x$.',
            'On reconnaît la forme $\\frac{u\'}{u}$ dont la primitive est $\\ln|u|$.',
            '$F(x) = \\ln|x^2 + 1| = \\ln(x^2 + 1) + C$ (car $x^2 + 1 > 0$ toujours)',
            '**Vérification** : $(\\ln(x^2+1))\' = \\frac{2x}{x^2+1} = f(x)$. $\\checkmark$',
          ],
        },
        {
          type: 'exercise',
          text: 'Exemple 3 : Trouver une primitive de $f(x) = (4x+2)e^{2x^2+2x}$',
        },
        {
          type: 'correction',
          text: 'Correction exemple 3 — forme composée $u\' \\cdot e^u$',
          items: [
            'On pose $u = 2x^2 + 2x$, donc $u\' = 4x + 2$.',
            'On reconnaît exactement la forme $u\' \\cdot e^u$.',
            '$F(x) = e^{2x^2 + 2x} + C$',
            '**Vérification** : $(e^{2x^2+2x})\' = (4x+2)e^{2x^2+2x} = f(x)$. $\\checkmark$',
          ],
        },
        {
          type: 'exercise',
          text: 'Exemple 4 : Trouver une primitive de $f(x) = 5\\cos(5x+3)$',
        },
        {
          type: 'correction',
          text: 'Correction exemple 4 — forme composée $u\' \\cdot \\cos(u)$',
          items: [
            'On pose $u = 5x + 3$, donc $u\' = 5$.',
            'On reconnaît la forme $u\' \\cdot \\cos(u)$ dont la primitive est $\\sin(u)$.',
            '$F(x) = \\sin(5x + 3) + C$',
            '**Vérification** : $(\\sin(5x+3))\' = 5\\cos(5x+3) = f(x)$. $\\checkmark$',
          ],
        },
        {
          type: 'exercise',
          text: 'Exemple 5 (ajustement de coefficient) : Trouver une primitive de $f(x) = x \\cdot e^{x^2}$',
        },
        {
          type: 'correction',
          text: 'Correction exemple 5 — ajustement de coefficient',
          items: [
            'On pose $u = x^2$, donc $u\' = 2x$.',
            'On a $f(x) = x \\cdot e^{x^2} = \\frac{1}{2} \\cdot 2x \\cdot e^{x^2} = \\frac{1}{2} \\cdot u\' \\cdot e^u$.',
            '$F(x) = \\frac{1}{2} e^{x^2} + C$',
            '**Vérification** : $\\left(\\frac{1}{2} e^{x^2}\\right)\' = \\frac{1}{2} \\cdot 2x \\cdot e^{x^2} = x e^{x^2} = f(x)$. $\\checkmark$',
          ],
        },
      ],
    },
    {
      title: '6. Primitive avec condition initiale',
      content: [
        {
          type: 'text',
          text: 'Parmi toutes les primitives $F(x) = G(x) + C$, une seule vérifie une condition du type $F(x_0) = y_0$. On substitue $x_0$ et $y_0$ pour trouver $C$.',
        },
        {
          type: 'exercise',
          text: 'Exercice : Déterminer la primitive $F$ de $f(x) = 3e^{3x-1}$ telle que $F\\left(\\frac{1}{3}\\right) = 2$.',
        },
        {
          type: 'correction',
          text: 'Correction',
          items: [
            '**Étape 1** — Primitive générale : on pose $u = 3x-1$, $u\' = 3$. Forme $u\' \\cdot e^u$ : $F(x) = e^{3x-1} + C$.',
            '**Étape 2** — Condition initiale : $F\\left(\\frac{1}{3}\\right) = e^{3 \\cdot \\frac{1}{3} - 1} + C = e^{0} + C = 1 + C = 2$, donc $C = 1$.',
            '**Conclusion** : $F(x) = e^{3x-1} + 1$.',
            '**Vérification** : $F\'(x) = 3e^{3x-1} = f(x)$ $\\checkmark$ et $F(\\frac{1}{3}) = 1 + 1 = 2$ $\\checkmark$.',
          ],
        },
      ],
    },
    {
      title: '7. Exercices d\'entraînement',
      content: [
        {
          type: 'exercise',
          text: 'Exercice 1 : Trouver les primitives des fonctions suivantes :',
          items: [
            'f(x) = 4x^3 - 6x + 1',
            'g(x) = \\frac{3}{x^2} = 3x^{-2}',
            'h(x) = 2e^{2x}',
            'k(x) = \\frac{1}{\\sqrt{x}} + \\sqrt{x}',
          ],
        },
        {
          type: 'correction',
          text: 'Correction exercice 1',
          items: [
            '$F(x) = x^4 - 3x^2 + x + C$. Vérif : $(x^4 - 3x^2 + x)\' = 4x^3 - 6x + 1$. $\\checkmark$',
            '$G(x) = 3 \\cdot \\frac{x^{-1}}{-1} + C = -\\frac{3}{x} + C$. Vérif : $\\left(-\\frac{3}{x}\\right)\' = \\frac{3}{x^2}$. $\\checkmark$',
            '$H(x) = e^{2x} + C$. En effet, $(e^{2x})\' = 2e^{2x}$ — la primitive de $2e^{2x}$ est bien $e^{2x}$.',
            '$K(x) = 2\\sqrt{x} + \\frac{2}{3}x^{3/2} + C = 2\\sqrt{x} + \\frac{2x\\sqrt{x}}{3} + C$.',
          ],
        },
        {
          type: 'exercise',
          text: 'Exercice 2 : Formes composées — trouver les primitives :',
          items: [
            'f(x) = \\frac{6x^2}{x^3 + 5}',
            'g(x) = \\frac{x}{\\sqrt{x^2+4}}',
            'h(x) = \\sin(3x - 1)',
            'k(x) = (2x - 1)(x^2 - x + 3)^4',
          ],
        },
        {
          type: 'correction',
          text: 'Correction exercice 2',
          items: [
            '$u = x^3 + 5$, $u\' = 3x^2$. On a $f(x) = 2 \\cdot \\frac{3x^2}{x^3+5} = 2 \\cdot \\frac{u\'}{u}$. Donc $F(x) = 2\\ln|x^3+5| + C$.',
            '$u = x^2 + 4$, $u\' = 2x$. On a $g(x) = \\frac{1}{2} \\cdot \\frac{2x}{\\sqrt{x^2+4}} = \\frac{1}{2} \\cdot \\frac{u\'}{\\sqrt{u}} = \\frac{1}{2} \\cdot \\frac{u\'}{2\\sqrt{u}} \\cdot 2$. Primitive de $\\frac{u\'}{2\\sqrt{u}}$ est $\\sqrt{u}$, donc $G(x) = \\sqrt{x^2+4} + C$.',
            '$u = 3x-1$, $u\' = 3$. $h(x) = \\frac{1}{3} \\cdot 3\\sin(3x-1) = \\frac{1}{3} \\cdot u\' \\cdot \\sin(u)$. Primitive de $u\'\\sin(u)$ est $-\\cos(u)$, donc $H(x) = -\\frac{1}{3}\\cos(3x-1) + C$.',
            '$u = x^2 - x + 3$, $u\' = 2x - 1$. Forme $u\' \\cdot u^4$. Primitive : $\\frac{u^5}{5} = \\frac{(x^2-x+3)^5}{5} + C$.',
          ],
        },
        {
          type: 'exercise',
          text: 'Exercice 3 (condition initiale) : Déterminer la primitive $F$ de $f(x) = \\frac{2x}{x^2+1}$ vérifiant $F(0) = 3$.',
        },
        {
          type: 'correction',
          text: 'Correction exercice 3',
          items: [
            'Primitive générale : $F(x) = \\ln(x^2+1) + C$ (car $x^2+1 > 0$).',
            'Condition : $F(0) = \\ln(1) + C = 0 + C = C = 3$, donc $C = 3$.',
            '**Réponse** : $F(x) = \\ln(x^2+1) + 3$.',
          ],
        },
      ],
    },
  ],
  erreurs: [
    'Oublier la constante $+C$ dans les primitives (erreur classique qui coûte des points)',
    'Confondre primitive de $\\frac{1}{x^2}$ : ce n\'est PAS $\\ln(x^2)$ mais $-\\frac{1}{x}$',
    'Confondre primitive de $\\frac{1}{x}$ ($\\ln|x|$) et de $x^{-2}$ ($-\\frac{1}{x}$)',
    'Oublier de vérifier en dérivant le résultat — c\'est rapide et évite toutes les erreurs',
    'Ne pas voir la forme composée et essayer de primitiver terme à terme un produit',
    'Se tromper dans les coefficients lors de l\'ajustement : $(e^{2x})\' = 2e^{2x}$ donc primitive de $e^{2x}$ est $\\frac{1}{2}e^{2x}$, pas $2e^{2x}$',
    'Oublier la valeur absolue dans $\\ln|u|$ quand $u$ peut être négatif',
    'Pour la condition initiale, ne pas substituer $x_0$ après avoir trouvé la primitive générale',
  ],
  bilan: [
    'Je connais le tableau des primitives usuelles par cœur et je sais le vérifier en dérivant',
    'Je sais reconnaître et calculer les primitives composées en identifiant $u$ et $u\'$',
    'Je sais ajuster les coefficients quand $u\'$ n\'apparaît pas exactement',
    'Je sais déterminer une primitive unique avec une condition initiale $F(x_0) = y_0$',
    'Je vérifie systématiquement en dérivant mon résultat avant de passer à la suite',
  ],
}
