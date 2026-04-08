import { ChapterContent } from './types'

export const chapterContent: ChapterContent = {
  slug: 'logarithme',
  title: 'Fonction Logarithme Népérien',
  icon: '📊',
  importance: 'Très fréquent en examen. Le logarithme intervient dans l\'étude de fonctions, les équations et les croissances comparées.',
  days: 'Jours 4–5',
  sections: [
    {
      title: '1. Définition et propriétés fondamentales',
      content: [
        {
          type: 'text',
          text: '**Définition** : La fonction logarithme népérien, notée $\\ln$, est définie sur $]0 ; +\\infty[$ comme la **réciproque** de la fonction exponentielle. Autrement dit, $\\ln$ et $\\exp$ se « défont » mutuellement.',
        },
        {
          type: 'formula',
          math: 'y = \\ln(x) \\Leftrightarrow x = e^y \\quad (x > 0)',
        },
        {
          type: 'formula',
          math: '\\ln(1) = 0 \\quad ; \\quad \\ln(e) = 1',
        },
        {
          type: 'tip',
          text: '**Intuition** : $\\ln(x)$ répond à la question "à quelle puissance dois-je élever $e$ pour obtenir $x$ ?". Par exemple $\\ln(e^3) = 3$ car $e^3$ est bien $e$ à la puissance $3$.',
        },
        {
          type: 'text',
          text: '**Relations réciproques fondamentales** — à mémoriser absolument :',
        },
        {
          type: 'formula',
          math: 'e^{\\ln(x)} = x \\quad (x > 0) \\qquad ; \\qquad \\ln(e^x) = x \\quad (x \\in \\mathbb{R})',
        },
        {
          type: 'tip',
          text: 'Exemples concrets : $e^{\\ln 5} = 5$, $\\ln(e^3) = 3$, $\\ln(e^{-2}) = -2$, $e^{\\ln 7} = 7$. Ces égalités s\'utilisent très souvent pour simplifier des expressions.',
        },
        {
          type: 'text',
          text: '**Propriétés algébriques** — le logarithme transforme les produits en sommes :',
        },
        {
          type: 'formula',
          math: '\\ln(ab) = \\ln(a) + \\ln(b)',
        },
        {
          type: 'formula',
          math: '\\ln\\left(\\frac{a}{b}\\right) = \\ln(a) - \\ln(b)',
        },
        {
          type: 'formula',
          math: '\\ln(a^n) = n \\ln(a)',
        },
        {
          type: 'formula',
          math: '\\ln\\left(\\frac{1}{a}\\right) = -\\ln(a)',
        },
        {
          type: 'formula',
          math: '\\ln(\\sqrt{a}) = \\frac{1}{2}\\ln(a)',
        },
        {
          type: 'tip',
          text: 'Le logarithme transforme les **produits en sommes**, les **quotients en différences**, et les **puissances en produits**. C\'est sa force principale ! Exemple : $\\ln(8) = \\ln(2^3) = 3\\ln(2)$.',
        },
        {
          type: 'text',
          text: '**Exemples numériques** à connaître : $\\ln(e^2) = 2$, $\\ln(e^{-1}) = -1$, $\\ln\\!\\left(\\frac{1}{e}\\right) = -1$, $\\ln(\\sqrt{e}) = \\frac{1}{2}$.',
        },
      ],
    },
    {
      title: '2. Dérivée et sens de variation',
      content: [
        {
          type: 'text',
          text: '**Dérivée de $\\ln(x)$** sur $]0 ; +\\infty[$ :',
        },
        {
          type: 'formula',
          math: '(\\ln(x))\' = \\frac{1}{x} \\quad \\text{pour } x > 0',
        },
        {
          type: 'text',
          text: '**Dérivée composée** : si $u$ est une fonction dérivable et strictement positive :',
        },
        {
          type: 'formula',
          math: '(\\ln(u))\' = \\frac{u\'}{u}',
        },
        {
          type: 'tip',
          text: 'Mémo : la dérivée de $\\ln(u)$ c\'est "la dérivée de ce qu\'il y a dedans, divisée par ce qu\'il y a dedans". Exemple : si $f(x) = \\ln(3x^2 + 1)$, alors $f\'(x) = \\frac{6x}{3x^2+1}$.',
        },
        {
          type: 'text',
          text: 'Comme $\\frac{1}{x} > 0$ pour tout $x > 0$, la fonction $\\ln$ est **strictement croissante** sur $]0 ; +\\infty[$.',
        },
        {
          type: 'tip',
          text: 'Conséquence directe (très utile en équations/inéquations) : $\\ln(a) = \\ln(b) \\Leftrightarrow a = b$ (avec $a, b > 0$) et $\\ln(a) < \\ln(b) \\Leftrightarrow a < b$.',
        },
        {
          type: 'text',
          text: '**Exemples de dérivées** : $[\\ln(2x+3)]\' = \\frac{2}{2x+3}$, $[\\ln(x^2)]\' = \\frac{2x}{x^2} = \\frac{2}{x}$ (pour $x > 0$), $[x\\ln(x)]\' = \\ln(x) + x \\cdot \\frac{1}{x} = \\ln(x) + 1$.',
        },
      ],
    },
    {
      title: '3. Limites à connaître',
      content: [
        {
          type: 'text',
          text: '**Limites aux bornes du domaine** :',
        },
        {
          type: 'formula',
          math: '\\lim_{x \\to +\\infty} \\ln(x) = +\\infty',
        },
        {
          type: 'formula',
          math: '\\lim_{x \\to 0^+} \\ln(x) = -\\infty',
        },
        {
          type: 'tip',
          text: 'Mnémotechnique : $\\ln$ tend vers $-\\infty$ quand $x$ tend vers $0$ par la droite (la courbe descend vers l\'asymptote verticale $x = 0$), et vers $+\\infty$ quand $x$ tend vers $+\\infty$ (mais très lentement !)',
        },
        {
          type: 'text',
          text: '**Croissances comparées** (très important en examen !) : $\\ln$ est "vaincue" par toute puissance positive en $+\\infty$, et $x$ "écrase" $\\ln(x)$ en $0^+$.',
        },
        {
          type: 'formula',
          math: '\\lim_{x \\to +\\infty} \\frac{\\ln(x)}{x} = 0 \\quad \\text{(l\'exponentielle l\'emporte sur le log)}',
        },
        {
          type: 'formula',
          math: '\\lim_{x \\to 0^+} x \\ln(x) = 0',
        },
        {
          type: 'formula',
          math: '\\lim_{x \\to +\\infty} \\frac{\\ln(x)}{x^n} = 0 \\quad \\text{pour tout } n > 0',
        },
        {
          type: 'tip',
          text: 'Retenir : "En $+\\infty$, toute puissance de $x$ l\'emporte sur $\\ln(x)$." En $0^+$, $x$ tend vers $0$ plus vite que $\\ln(x)$ ne tend vers $-\\infty$. Ainsi $x\\ln(x) \\to 0$ en $0^+$.',
        },
        {
          type: 'text',
          text: '**Application** : $\\lim_{x \\to +\\infty} \\frac{\\ln(x)}{\\sqrt{x}} = 0$ (car $\\sqrt{x} = x^{1/2}$ est une puissance positive), $\\lim_{x \\to 0^+} x^2 \\ln(x) = 0$.',
        },
      ],
    },
    {
      title: '4. Méthodes : équations et inéquations avec ln',
      content: [
        {
          type: 'method',
          text: '**Résoudre une équation avec $\\ln$** :\n1. Déterminer les **conditions d\'existence** (CE) : tous les arguments du $\\ln$ doivent être $> 0$\n2. Utiliser les propriétés pour regrouper en un seul $\\ln$ de chaque côté\n3. Appliquer : $\\ln(A) = \\ln(B) \\Leftrightarrow A = B$ (avec $A, B > 0$), ou $\\ln(A) = k \\Leftrightarrow A = e^k$\n4. **Vérifier** que la solution respecte les CE',
        },
        {
          type: 'method',
          text: '**Résoudre une inéquation avec $\\ln$** :\n1. Conditions d\'existence\n2. Regrouper en un seul $\\ln$ de chaque côté si possible\n3. Utiliser la **croissance** : $\\ln(A) \\leq \\ln(B) \\Leftrightarrow A \\leq B$ (avec $A, B > 0$)\n4. Intersecter avec les CE (attention !)',
        },
        {
          type: 'exercise',
          text: 'Exercice 1 : Résoudre $\\ln(2x-1) = \\ln(x+3)$',
        },
        {
          type: 'correction',
          text: 'Correction exercice 1 — Étapes détaillées',
          items: [
            '**CE :** $2x - 1 > 0$ et $x + 3 > 0$, soit $x > \\frac{1}{2}$ et $x > -3$. Donc CE : $x > \\frac{1}{2}$.',
            '**Équation :** $\\ln(2x-1) = \\ln(x+3)$ par bijectivité $\\Leftrightarrow 2x - 1 = x + 3 \\Leftrightarrow x = 4$.',
            '**Vérification :** $4 > \\frac{1}{2}$ ✓. On vérifie : $\\ln(7) = \\ln(7)$ ✓.',
            '**Solution :** $S = \\{4\\}$.',
          ],
        },
        {
          type: 'exercise',
          text: 'Exercice 2 : Résoudre $\\ln(x^2 - 1) \\leq \\ln(3)$',
        },
        {
          type: 'correction',
          text: 'Correction exercice 2 — Étapes détaillées',
          items: [
            '**CE :** $x^2 - 1 > 0 \\Leftrightarrow (x-1)(x+1) > 0 \\Leftrightarrow x \\in ]-\\infty ; -1[ \\cup ]1 ; +\\infty[$.',
            '**Inéquation :** $\\ln(x^2-1) \\leq \\ln(3)$. Par croissance de $\\ln$ : $x^2 - 1 \\leq 3 \\Leftrightarrow x^2 \\leq 4 \\Leftrightarrow -2 \\leq x \\leq 2$.',
            '**Intersection avec CE :** $\\{-2 \\leq x \\leq 2\\} \\cap \\{x \\in ]-\\infty ; -1[ \\cup ]1 ; +\\infty[\\}$.',
            '**Solution :** $S = [-2 ; -1[ \\cup ]1 ; 2]$.',
          ],
        },
        {
          type: 'exercise',
          text: 'Exercice 3 : Résoudre $\\ln(x) + \\ln(x-2) = \\ln(3)$',
        },
        {
          type: 'correction',
          text: 'Correction exercice 3 — Étapes détaillées',
          items: [
            '**CE :** $x > 0$ et $x - 2 > 0$, soit $x > 2$.',
            '**Regroupement :** $\\ln(x) + \\ln(x-2) = \\ln(x(x-2))$. Donc $\\ln(x(x-2)) = \\ln(3)$.',
            '**Bijectivité :** $x(x-2) = 3 \\Leftrightarrow x^2 - 2x - 3 = 0$.',
            '**Discriminant :** $\\Delta = 4 + 12 = 16$. $x_1 = \\frac{2-4}{2} = -1$ et $x_2 = \\frac{2+4}{2} = 3$.',
            '$x = -1$ ne vérifie pas la CE ($-1 \\not> 2$). $x = 3$ vérifie la CE ($3 > 2$) ✓.',
            '**Solution :** $S = \\{3\\}$.',
          ],
        },
      ],
    },
    {
      title: '5. Exemple complet : étude de $f(x) = \\ln(x^2 - 1)$',
      content: [
        {
          type: 'text',
          text: 'Objectif : mener l\'étude complète de $f(x) = \\ln(x^2 - 1)$.',
        },
        {
          type: 'text',
          text: '**Étape 1 — Domaine** : on veut $x^2 - 1 > 0$, soit $(x-1)(x+1) > 0$. Tableau de signes : $D_f = ]-\\infty ; -1[ \\cup ]1 ; +\\infty[$.',
        },
        {
          type: 'text',
          text: '**Étape 2 — Parité** : $f(-x) = \\ln((-x)^2 - 1) = \\ln(x^2-1) = f(x)$. Donc $f$ est **paire** (symétrie par rapport à l\'axe des ordonnées).',
        },
        {
          type: 'text',
          text: '**Étape 3 — Limites** :',
        },
        {
          type: 'formula',
          math: '\\lim_{x \\to +\\infty} f(x) = +\\infty \\quad ; \\quad \\lim_{x \\to -\\infty} f(x) = +\\infty',
        },
        {
          type: 'formula',
          math: '\\lim_{x \\to 1^+} f(x) = -\\infty \\quad ; \\quad \\lim_{x \\to (-1)^-} f(x) = -\\infty',
        },
        {
          type: 'text',
          text: 'Asymptotes verticales : $x = 1$ et $x = -1$.',
        },
        {
          type: 'text',
          text: '**Étape 4 — Dérivée** : $u = x^2 - 1$, $u\' = 2x$, donc $f\'(x) = \\frac{u\'}{u} = \\frac{2x}{x^2 - 1}$.',
        },
        {
          type: 'formula',
          math: 'f\'(x) = \\frac{2x}{x^2 - 1}',
        },
        {
          type: 'text',
          text: '**Étape 5 — Signe de $f\'$** : Sur $]1 ; +\\infty[$ : numérateur $2x > 0$, dénominateur $x^2-1 > 0$ → $f\'(x) > 0$, $f$ est **croissante**.',
        },
        {
          type: 'text',
          text: 'Sur $]-\\infty ; -1[$ : $2x < 0$, $x^2-1 > 0$ → $f\'(x) < 0$, $f$ est **décroissante**.',
        },
        {
          type: 'tip',
          text: 'Remarque : $f(x) = 0 \\Leftrightarrow \\ln(x^2-1) = 0 \\Leftrightarrow x^2 - 1 = e^0 = 1 \\Leftrightarrow x^2 = 2 \\Leftrightarrow x = \\pm\\sqrt{2}$. La courbe coupe l\'axe des abscisses en $x = \\sqrt{2}$ et $x = -\\sqrt{2}$.',
        },
      ],
    },
    {
      title: '6. Exercice complet : étude de $g(x) = x - \\ln(x)$',
      content: [
        {
          type: 'exercise',
          text: 'Étudier $g(x) = x - \\ln(x)$ sur $]0 ; +\\infty[$ : domaine, limites, dérivée, variations, minimum.',
        },
        {
          type: 'correction',
          text: 'Correction — étude complète de $g(x) = x - \\ln(x)$',
          items: [
            '**Domaine :** $D_g = ]0 ; +\\infty[$ (contrainte de $\\ln(x)$).',
            '**Limite en $0^+$ :** $\\lim_{x \\to 0^+} g(x) = 0 - (-\\infty) = +\\infty$.',
            '**Limite en $+\\infty$ :** $\\lim_{x \\to +\\infty} x - \\ln(x) = +\\infty$ car $x$ l\'emporte sur $\\ln(x)$.',
            '**Dérivée :** $g\'(x) = 1 - \\frac{1}{x} = \\frac{x-1}{x}$.',
            '**Signe de $g\'$ :** $g\'(x) = 0 \\Leftrightarrow x = 1$. $g\'(x) < 0$ sur $]0;1[$ (décroissante) et $g\'(x) > 0$ sur $]1;+\\infty[$ (croissante).',
            '**Minimum :** en $x = 1$, $g(1) = 1 - \\ln(1) = 1 - 0 = 1$. Le minimum de $g$ est $1 > 0$.',
            '**Conclusion :** $g(x) \\geq 1 > 0$ pour tout $x > 0$, donc $x - \\ln(x) > 0$, autrement dit $\\ln(x) < x$ pour tout $x > 0$.',
          ],
        },
        {
          type: 'exercise',
          text: 'Exercice bonus : Simplifier $\\ln(e^3) + 2\\ln(5) - \\ln(25)$',
        },
        {
          type: 'correction',
          text: 'Correction — simplification pas à pas',
          items: [
            '$\\ln(e^3) = 3$ (relation réciproque $\\ln(e^x) = x$).',
            '$2\\ln(5) = \\ln(5^2) = \\ln(25)$ (propriété $n\\ln(a) = \\ln(a^n)$).',
            'Donc $\\ln(e^3) + 2\\ln(5) - \\ln(25) = 3 + \\ln(25) - \\ln(25) = 3$.',
            '**Résultat :** la valeur est $3$.',
          ],
        },
      ],
    },
  ],
  erreurs: [
    'Écrire $\\ln(a+b) = \\ln(a) + \\ln(b)$ — **FAUX** ! La règle est $\\ln(ab) = \\ln(a) + \\ln(b)$ (produit, pas somme)',
    'Oublier les **conditions d\'existence** : $\\ln$ n\'est défini que pour des arguments **strictement positifs**',
    'Écrire $\\ln(x^2) = 2\\ln(x)$ — vrai seulement si $x > 0$ ! En général $\\ln(x^2) = 2\\ln|x|$',
    'Ne pas connaître les **croissances comparées** : $\\frac{\\ln(x)}{x} \\to 0$ et $x\\ln(x) \\to 0$ en $0^+$',
    'Oublier de vérifier les conditions d\'existence après avoir trouvé une solution',
    'Confondre $\\ln(e) = 1$ et $\\ln(1) = 0$ — les deux sont à mémoriser impérativement',
  ],
  bilan: [
    'Je connais la définition du logarithme et le lien $\\ln(e^x) = x$ et $e^{\\ln(x)} = x$',
    'Je maîtrise les propriétés algébriques : $\\ln(ab) = \\ln a + \\ln b$, $\\ln(a^n) = n\\ln a$, etc.',
    'Je sais calculer $[\\ln(u)]\' = \\frac{u\'}{u}$ et l\'appliquer sur des fonctions composées',
    'Je connais les limites fondamentales et les croissances comparées',
    'Je sais résoudre des équations et inéquations avec $\\ln$ en posant les CE',
    'Je sais mener l\'étude complète d\'une fonction contenant $\\ln$',
    'Je connais les exemples numériques : $\\ln(e^3) = 3$, $e^{\\ln 5} = 5$, $\\ln(1) = 0$, $\\ln(e) = 1$',
  ],
}
