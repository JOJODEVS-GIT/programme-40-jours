import { ChapterContent } from './types'

export const chapterContent: ChapterContent = {
  slug: 'complexes',
  title: 'Nombres Complexes',
  icon: '💠',
  importance: 'Chapitre technique mais très rentable en examen. Les exercices sont souvent méthodiques et bien balisés. Les calculs de module, argument et forme exponentielle sont incontournables.',
  days: 'Jours 17–18',
  sections: [
    // ═══════════════════════════════════════
    // SECTION 1 : INTRODUCTION
    // ═══════════════════════════════════════
    {
      title: '1. Idée clé : pourquoi les nombres complexes ?',
      content: [
        {
          type: 'text',
          text: '**Problème de départ** : l\'équation $x^2 + 1 = 0$ n\'a pas de solution dans $\\mathbb{R}$. Pour la résoudre, on **invente** un nombre $i$ tel que $i^2 = -1$.',
        },
        {
          type: 'text',
          text: '**Analogie** : les nombres complexes sont des **nombres à deux dimensions**. Un réel est un point sur une droite. Un complexe $z = a + ib$ est un point dans le **plan complexe** (axe réel horizontal, axe imaginaire vertical). C\'est comme passer de la route (1D) à la carte (2D) !',
        },
        {
          type: 'tip',
          text: 'Exemple visuel : $z = 3 + 4i$ correspond au point $(3, 4)$ dans le plan. $a = 3$ est la partie réelle (abscisse), $b = 4$ est la partie imaginaire (ordonnée). Le module $|z| = 5$ est la distance à l\'origine — c\'est Pythagore : $\\sqrt{3^2 + 4^2} = 5$ !',
        },
        {
          type: 'text',
          text: '**Trois formes** pour écrire un complexe :\n- **Algébrique** : $z = a + ib$ → idéale pour additionner, soustraire\n- **Trigonométrique** : $z = r(\\cos\\theta + i\\sin\\theta)$ → fait apparaître module et argument\n- **Exponentielle** : $z = re^{i\\theta}$ → la plus puissante pour multiplier, diviser, élever à une puissance',
        },
        {
          type: 'tip',
          text: 'Règle d\'or : choisir la bonne forme selon l\'opération. **Addition** → forme algébrique. **Multiplication/puissance** → forme exponentielle. C\'est la clé de la rapidité en examen.',
        },
      ],
    },

    // ═══════════════════════════════════════
    // SECTION 2 : FORME ALGÉBRIQUE
    // ═══════════════════════════════════════
    {
      title: '2. Forme algébrique et opérations',
      content: [
        {
          type: 'text',
          text: '**Définition** : tout nombre complexe $z$ s\'écrit sous forme algébrique :',
        },
        {
          type: 'formula',
          math: 'z = a + ib \\quad \\text{avec } a, b \\in \\mathbb{R}, \\quad i^2 = -1',
        },
        {
          type: 'text',
          text: 'On note $a = \\text{Re}(z)$ la **partie réelle** et $b = \\text{Im}(z)$ la **partie imaginaire**. Deux complexes sont égaux si et seulement si leurs parties réelles ET imaginaires sont égales (identification).',
        },
        {
          type: 'text',
          text: '**Conjugué** : $\\bar{z} = a - ib$. On "retourne" le signe de la partie imaginaire. Géométriquement, c\'est le **symétrique par rapport à l\'axe réel**.',
        },
        {
          type: 'formula',
          math: 'z \\cdot \\bar{z} = (a + ib)(a - ib) = a^2 + b^2 = |z|^2',
        },
        {
          type: 'tip',
          text: 'Propriétés du conjugué à connaître par cœur :\n$\\overline{z_1 + z_2} = \\bar{z}_1 + \\bar{z}_2$\n$\\overline{z_1 z_2} = \\bar{z}_1 \\cdot \\bar{z}_2$\n$\\overline{\\left(\\frac{z_1}{z_2}\\right)} = \\frac{\\bar{z}_1}{\\bar{z}_2}$\n$\\overline{\\bar{z}} = z$\nEt : $z \\in \\mathbb{R} \\Leftrightarrow \\bar{z} = z$ ; $z$ est imaginaire pur $\\Leftrightarrow \\bar{z} = -z$.',
        },
        {
          type: 'text',
          text: '**Exemple concret** : si $z = 2 - 3i$, alors :\n$\\text{Re}(z) = 2$, $\\text{Im}(z) = -3$, $\\bar{z} = 2 + 3i$, $|z|^2 = z\\bar{z} = 4 + 9 = 13$, $|z| = \\sqrt{13}$.',
        },

        // --- OPÉRATIONS ---
        {
          type: 'text',
          text: '**Addition** : on additionne parties réelles et imaginaires séparément.',
        },
        {
          type: 'formula',
          math: '(a + ib) + (c + id) = (a + c) + i(b + d)',
        },
        {
          type: 'text',
          text: '**Multiplication** : on développe comme un produit de binômes, puis on remplace $i^2 = -1$.',
        },
        {
          type: 'formula',
          math: '(a + ib)(c + id) = (ac - bd) + i(ad + bc)',
        },
        {
          type: 'text',
          text: 'Exemple : $(2+3i)(1-i) = 2 \\cdot 1 + 2 \\cdot (-i) + 3i \\cdot 1 + 3i \\cdot (-i) = 2 - 2i + 3i - 3i^2 = 2 + i + 3 = 5 + i$.',
        },
        {
          type: 'method',
          text: '**Méthode : Diviser deux complexes**\nPour calculer $\\frac{z_1}{z_2}$, on multiplie numérateur et dénominateur par le **conjugué** de $z_2$ :\n\n**Étape 1** : Identifier le conjugué du dénominateur. Si $z_2 = c + id$, son conjugué est $\\bar{z_2} = c - id$.\n**Étape 2** : Multiplier en haut et en bas : $\\frac{z_1}{z_2} = \\frac{z_1 \\cdot \\bar{z_2}}{z_2 \\cdot \\bar{z_2}}$.\n**Étape 3** : Le dénominateur devient réel : $z_2 \\bar{z_2} = c^2 + d^2$.\n**Étape 4** : Développer le numérateur et séparer partie réelle / imaginaire.\n\nExemple : $\\frac{3+i}{1+2i} = \\frac{(3+i)(1-2i)}{(1+2i)(1-2i)} = \\frac{3 - 6i + i - 2i^2}{1 + 4} = \\frac{5 - 5i}{5} = 1 - i$.',
        },
        {
          type: 'text',
          text: '**Puissances de $i$** — cycle de période 4 :',
        },
        {
          type: 'table',
          headers: ['Puissance', 'i^0', 'i^1', 'i^2', 'i^3', 'i^4', 'i^5'],
          rows: [
            ['Valeur', '1', 'i', '-1', '-i', '1', 'i'],
          ],
        },
        {
          type: 'tip',
          text: 'Pour $i^n$ : calculer $n \\mod 4$. Si reste $0 \\to 1$, reste $1 \\to i$, reste $2 \\to -1$, reste $3 \\to -i$. Exemple : $i^{43} = i^{4 \\times 10 + 3} = i^3 = -i$.',
        },
      ],
    },

    // ═══════════════════════════════════════
    // SECTION 3 : MODULE ET ARGUMENT
    // ═══════════════════════════════════════
    {
      title: '3. Module et argument',
      content: [
        {
          type: 'text',
          text: '**Module** de $z = a + ib$ : c\'est la **distance** du point $z$ à l\'origine dans le plan complexe.',
        },
        {
          type: 'formula',
          math: '|z| = \\sqrt{a^2 + b^2} \\geq 0',
        },
        {
          type: 'text',
          text: '**Argument** : angle $\\theta = \\arg(z)$ entre l\'axe réel positif et le vecteur $\\overrightarrow{OM}$ (défini modulo $2\\pi$).',
        },
        {
          type: 'formula',
          math: '\\cos(\\theta) = \\frac{a}{|z|} \\quad ; \\quad \\sin(\\theta) = \\frac{b}{|z|}',
        },
        {
          type: 'method',
          text: '**Méthode : Trouver le module et l\'argument**\n\n**Étape 1** : Calculer $|z| = \\sqrt{a^2 + b^2}$.\n**Étape 2** : Calculer $\\cos\\theta = \\frac{a}{|z|}$ et $\\sin\\theta = \\frac{b}{|z|}$.\n**Étape 3** : Identifier le **quadrant** grâce aux signes :\n- $a > 0, b > 0$ → 1er quadrant ($0 < \\theta < \\frac{\\pi}{2}$)\n- $a < 0, b > 0$ → 2ème quadrant ($\\frac{\\pi}{2} < \\theta < \\pi$)\n- $a < 0, b < 0$ → 3ème quadrant ($-\\pi < \\theta < -\\frac{\\pi}{2}$)\n- $a > 0, b < 0$ → 4ème quadrant ($-\\frac{\\pi}{2} < \\theta < 0$)\n**Étape 4** : Reconnaître l\'angle à partir du tableau des valeurs remarquables.\n\nExemple : $z = -1 + i\\sqrt{3}$.\n$|z| = \\sqrt{1 + 3} = 2$. $\\cos\\theta = \\frac{-1}{2}$, $\\sin\\theta = \\frac{\\sqrt{3}}{2}$.\n$a < 0$, $b > 0$ → 2ème quadrant. $\\theta = \\frac{2\\pi}{3}$.',
        },
        {
          type: 'tip',
          text: 'PIÈGE classique : ne JAMAIS utiliser $\\theta = \\arctan(b/a)$ seul ! L\'arctangente ne donne le bon angle que dans le 1er et 4ème quadrant. Il FAUT vérifier les signes de $a$ et $b$ pour placer $\\theta$ dans le bon quadrant.',
        },
        {
          type: 'text',
          text: '**Propriétés du module** :',
        },
        {
          type: 'formula',
          math: '|z_1 z_2| = |z_1| \\cdot |z_2| \\quad ; \\quad \\left|\\frac{z_1}{z_2}\\right| = \\frac{|z_1|}{|z_2|} \\quad ; \\quad |z^n| = |z|^n',
        },
        {
          type: 'formula',
          math: '|z + z\'| \\leq |z| + |z\'| \\quad \\text{(inégalité triangulaire)}',
        },
        {
          type: 'text',
          text: '**Propriétés de l\'argument** (modulo $2\\pi$) :',
        },
        {
          type: 'formula',
          math: '\\arg(z_1 z_2) = \\arg(z_1) + \\arg(z_2) \\quad ; \\quad \\arg\\left(\\frac{z_1}{z_2}\\right) = \\arg(z_1) - \\arg(z_2) \\quad ; \\quad \\arg(z^n) = n\\arg(z)',
        },
        {
          type: 'tip',
          text: 'Mnémo : le module se **multiplie** (comme une distance qu\'on dilate), l\'argument s\'**additionne** (comme une rotation qu\'on compose). Multiplier par $z$ revient à dilater de $|z|$ et tourner de $\\arg(z)$.',
        },
        {
          type: 'text',
          text: '**Tableau de référence des complexes remarquables** :',
        },
        {
          type: 'table',
          headers: ['Complexe $z$', 'Module $|z|$', 'Argument $\\arg(z)$', 'Forme exponentielle'],
          rows: [
            ['1', '1', '0', 'e^{i \\cdot 0}'],
            ['-1', '1', '\\pi', 'e^{i\\pi}'],
            ['i', '1', '\\frac{\\pi}{2}', 'e^{i\\pi/2}'],
            ['-i', '1', '-\\frac{\\pi}{2}', 'e^{-i\\pi/2}'],
            ['1 + i', '\\sqrt{2}', '\\frac{\\pi}{4}', '\\sqrt{2}\\,e^{i\\pi/4}'],
            ['1 + i\\sqrt{3}', '2', '\\frac{\\pi}{3}', '2e^{i\\pi/3}'],
            ['-1 + i\\sqrt{3}', '2', '\\frac{2\\pi}{3}', '2e^{i2\\pi/3}'],
            ['\\sqrt{3} + i', '2', '\\frac{\\pi}{6}', '2e^{i\\pi/6}'],
          ],
        },
      ],
    },

    // ═══════════════════════════════════════
    // SECTION 4 : FORME EXPONENTIELLE
    // ═══════════════════════════════════════
    {
      title: '4. Forme trigonométrique et exponentielle',
      content: [
        {
          type: 'text',
          text: '**Forme trigonométrique** :',
        },
        {
          type: 'formula',
          math: 'z = r\\left[\\cos(\\theta) + i\\sin(\\theta)\\right] \\quad \\text{avec } r = |z|,\\; \\theta = \\arg(z)',
        },
        {
          type: 'text',
          text: '**Forme exponentielle** (notation d\'Euler) — la plus compacte et la plus puissante :',
        },
        {
          type: 'formula',
          math: 'z = r e^{i\\theta} \\quad \\text{où} \\quad e^{i\\theta} = \\cos(\\theta) + i\\sin(\\theta)',
        },
        {
          type: 'method',
          text: '**Méthode : Passer de la forme algébrique à la forme exponentielle**\n\nSoit $z = a + ib$ :\n**Étape 1** : Calculer le module $r = \\sqrt{a^2 + b^2}$.\n**Étape 2** : Calculer $\\cos\\theta = \\frac{a}{r}$ et $\\sin\\theta = \\frac{b}{r}$.\n**Étape 3** : Identifier $\\theta$ grâce au tableau de valeurs remarquables et au quadrant.\n**Étape 4** : Écrire $z = re^{i\\theta}$.\n\nExemple complet : $z = -\\sqrt{3} + i$.\n$r = \\sqrt{3 + 1} = 2$.\n$\\cos\\theta = \\frac{-\\sqrt{3}}{2}$, $\\sin\\theta = \\frac{1}{2}$. Quadrant 2.\n$\\theta = \\pi - \\frac{\\pi}{6} = \\frac{5\\pi}{6}$.\nRésultat : $z = 2e^{i5\\pi/6}$.',
        },
        {
          type: 'method',
          text: '**Méthode : Passer de la forme exponentielle à la forme algébrique**\n\nSoit $z = re^{i\\theta}$ :\n**Étape 1** : Calculer $a = r\\cos\\theta$ (partie réelle).\n**Étape 2** : Calculer $b = r\\sin\\theta$ (partie imaginaire).\n**Étape 3** : Écrire $z = a + ib$.\n\nExemple : $z = 4e^{i\\pi/3}$.\n$a = 4\\cos\\frac{\\pi}{3} = 4 \\times \\frac{1}{2} = 2$.\n$b = 4\\sin\\frac{\\pi}{3} = 4 \\times \\frac{\\sqrt{3}}{2} = 2\\sqrt{3}$.\nRésultat : $z = 2 + 2i\\sqrt{3}$.',
        },
        {
          type: 'tip',
          text: '**Multiplier en exponentielle** est ultra-simple :\n$z_1 z_2 = r_1 e^{i\\theta_1} \\cdot r_2 e^{i\\theta_2} = r_1 r_2 \\, e^{i(\\theta_1+\\theta_2)}$\nOn **multiplie** les modules et on **additionne** les arguments. C\'est pour ça que les puissances sont triviales en forme exponentielle !',
        },
      ],
    },

    // ═══════════════════════════════════════
    // SECTION 5 : MOIVRE ET EULER
    // ═══════════════════════════════════════
    {
      title: '5. Formule de Moivre et formules d\'Euler',
      content: [
        {
          type: 'text',
          text: '**Formule de Moivre** — la formule magique pour les puissances :',
        },
        {
          type: 'formula',
          math: '\\left(\\cos\\theta + i\\sin\\theta\\right)^n = \\cos(n\\theta) + i\\sin(n\\theta)',
        },
        {
          type: 'text',
          text: 'En notation exponentielle, c\'est naturel : $\\left(e^{i\\theta}\\right)^n = e^{in\\theta}$.',
        },
        {
          type: 'method',
          text: '**Méthode : Calculer une puissance avec Moivre**\n\nPour calculer $z^n$ :\n**Étape 1** : Mettre $z$ sous forme exponentielle $z = re^{i\\theta}$.\n**Étape 2** : Appliquer $z^n = r^n e^{in\\theta}$.\n**Étape 3** : Si on veut la forme algébrique, développer $\\cos(n\\theta) + i\\sin(n\\theta)$.\n\nExemple : $(1+i)^8$.\n$1+i = \\sqrt{2}\\,e^{i\\pi/4}$.\n$(1+i)^8 = (\\sqrt{2})^8 \\cdot e^{i \\cdot 8\\pi/4} = 2^4 \\cdot e^{i2\\pi} = 16 \\times 1 = 16$.\nSans forme exponentielle, ce calcul serait infernal !',
        },
        {
          type: 'text',
          text: '**Formules d\'Euler** — exprimer $\\cos$ et $\\sin$ en fonction d\'exponentielles :',
        },
        {
          type: 'formula',
          math: '\\cos(\\theta) = \\frac{e^{i\\theta} + e^{-i\\theta}}{2} \\qquad ; \\qquad \\sin(\\theta) = \\frac{e^{i\\theta} - e^{-i\\theta}}{2i}',
        },
        {
          type: 'method',
          text: '**Méthode : Linéariser $\\cos^n\\theta$ ou $\\sin^n\\theta$ (formules d\'Euler)**\n\nPour exprimer $\\cos^n\\theta$ en somme de cosinus :\n**Étape 1** : Écrire $\\cos\\theta = \\frac{e^{i\\theta} + e^{-i\\theta}}{2}$.\n**Étape 2** : Élever à la puissance $n$ : $(2\\cos\\theta)^n = (e^{i\\theta} + e^{-i\\theta})^n$.\n**Étape 3** : Développer avec le binôme de Newton.\n**Étape 4** : Regrouper les termes $e^{ik\\theta} + e^{-ik\\theta} = 2\\cos(k\\theta)$.\n\nExemple avec $\\cos^2\\theta$ :\n$(2\\cos\\theta)^2 = (e^{i\\theta} + e^{-i\\theta})^2 = e^{2i\\theta} + 2 + e^{-2i\\theta} = 2\\cos(2\\theta) + 2$\n$4\\cos^2\\theta = 2\\cos(2\\theta) + 2$\n$\\cos^2\\theta = \\frac{1 + \\cos(2\\theta)}{2}$\n\nC\'est la formule de linéarisation ! Elle sert à calculer des primitives.',
        },
        {
          type: 'text',
          text: '**Application de Moivre** : pour trouver $\\cos(3\\theta)$, on développe $(\\cos\\theta + i\\sin\\theta)^3$ et on identifie la partie réelle.',
        },
        {
          type: 'formula',
          math: '\\cos(3\\theta) = 4\\cos^3\\theta - 3\\cos\\theta',
        },
        {
          type: 'formula',
          math: '\\sin(3\\theta) = 3\\sin\\theta - 4\\sin^3\\theta',
        },
        {
          type: 'tip',
          text: 'En examen, on vous demandera souvent : "Développer $(\\cos\\theta + i\\sin\\theta)^3$, puis en déduire $\\cos(3\\theta)$ et $\\sin(3\\theta)$." Il suffit de développer le cube, remplacer les $i^2 = -1$ et $i^3 = -i$, puis identifier partie réelle = $\\cos(3\\theta)$ et partie imaginaire = $\\sin(3\\theta)$.',
        },
      ],
    },

    // ═══════════════════════════════════════
    // SECTION 6 : ÉQUATIONS DANS C
    // ═══════════════════════════════════════
    {
      title: '6. Résolution d\'équations dans $\\mathbb{C}$',
      content: [
        {
          type: 'text',
          text: '**Équation du 2nd degré dans $\\mathbb{C}$** : $az^2 + bz + c = 0$ avec $a, b, c \\in \\mathbb{R}$.',
        },
        {
          type: 'formula',
          math: '\\Delta = b^2 - 4ac',
        },
        {
          type: 'text',
          text: 'Si $\\Delta < 0$ : pas de racine réelle, mais **deux racines complexes conjuguées** :',
        },
        {
          type: 'formula',
          math: 'z_{1,2} = \\frac{-b \\pm i\\sqrt{|\\Delta|}}{2a}',
        },
        {
          type: 'method',
          text: '**Méthode : Résoudre $az^2 + bz + c = 0$ dans $\\mathbb{C}$**\n\n**Étape 1** : Calculer $\\Delta = b^2 - 4ac$.\n**Étape 2** :\n- Si $\\Delta > 0$ : 2 racines réelles $z = \\frac{-b \\pm \\sqrt{\\Delta}}{2a}$.\n- Si $\\Delta = 0$ : 1 racine double réelle $z = \\frac{-b}{2a}$.\n- Si $\\Delta < 0$ : 2 racines complexes conjuguées $z = \\frac{-b \\pm i\\sqrt{|\\Delta|}}{2a}$.\n**Étape 3** : Vérifier avec les relations de Viète : $z_1 + z_2 = \\frac{-b}{a}$ et $z_1 z_2 = \\frac{c}{a}$.\n\nExemple : $z^2 - 2z + 5 = 0$.\n$\\Delta = 4 - 20 = -16 < 0$. $\\sqrt{|\\Delta|} = 4$.\n$z_1 = \\frac{2 - 4i}{2} = 1 - 2i$ et $z_2 = \\frac{2 + 4i}{2} = 1 + 2i$.\nVérif : $z_1 + z_2 = 2 = \\frac{-(-2)}{1}$ ✓. $z_1 z_2 = (1-2i)(1+2i) = 1 + 4 = 5 = \\frac{5}{1}$ ✓.',
        },
        {
          type: 'text',
          text: '**Racines $n$-ièmes** : résoudre $z^n = w$ donne exactement $n$ solutions.',
        },
        {
          type: 'formula',
          math: 'z^n = Re^{i\\varphi} \\quad \\Longrightarrow \\quad z_k = R^{1/n} \\, e^{i(\\varphi + 2k\\pi)/n} \\quad \\text{pour } k = 0, 1, \\ldots, n-1',
        },
        {
          type: 'method',
          text: '**Méthode : Trouver les racines $n$-ièmes de $w$**\n\n**Étape 1** : Mettre $w$ sous forme exponentielle $w = Re^{i\\varphi}$.\n**Étape 2** : Le module de chaque racine est $R^{1/n}$.\n**Étape 3** : Les arguments sont $\\theta_k = \\frac{\\varphi + 2k\\pi}{n}$ pour $k = 0, 1, \\ldots, n-1$.\n**Étape 4** : Écrire les $n$ solutions.\n\nExemple : $z^3 = 8$.\n$8 = 8e^{i \\cdot 0}$, donc $R^{1/3} = 2$.\n$z_0 = 2e^{i \\cdot 0} = 2$.\n$z_1 = 2e^{i2\\pi/3} = 2(-\\frac{1}{2} + i\\frac{\\sqrt{3}}{2}) = -1 + i\\sqrt{3}$.\n$z_2 = 2e^{i4\\pi/3} = -1 - i\\sqrt{3}$.\nLes 3 racines sont sur un cercle de rayon 2, espacées de $120°$.',
        },
        {
          type: 'tip',
          text: 'Les $n$ racines $n$-ièmes forment un **polygone régulier** à $n$ côtés inscrit dans un cercle de rayon $R^{1/n}$. L\'angle entre deux racines consécutives est $\\frac{2\\pi}{n}$. Pour les racines de l\'unité ($w = 1$), le polygone est centré à l\'origine.',
        },
      ],
    },

    // ═══════════════════════════════════════
    // SECTION 7 : IDENTITÉ D'EULER ET APPLICATIONS
    // ═══════════════════════════════════════
    {
      title: '7. Identité d\'Euler et applications géométriques',
      content: [
        {
          type: 'text',
          text: '**L\'identité d\'Euler** — considérée comme la plus belle formule des mathématiques :',
        },
        {
          type: 'formula',
          math: 'e^{i\\pi} + 1 = 0',
        },
        {
          type: 'text',
          text: 'Elle relie les 5 constantes fondamentales : $e$, $i$, $\\pi$, $1$ et $0$.',
        },
        {
          type: 'text',
          text: '**Interprétation géométrique** : dans le plan complexe, multiplier $z$ par $e^{i\\alpha}$ effectue une **rotation** d\'angle $\\alpha$ autour de l\'origine. Multiplier par $re^{i\\alpha}$ effectue une **similitude** (rotation + homothétie de rapport $r$).',
        },
        {
          type: 'tip',
          text: 'Applications géométriques à connaître :\n- $iz$ = rotation de $z$ de $\\frac{\\pi}{2}$ (quart de tour direct)\n- $-z$ = rotation de $\\pi$ (demi-tour, symétrie par rapport à l\'origine)\n- $\\bar{z}$ = symétrie par rapport à l\'axe réel\n- $|z_1 - z_2|$ = distance entre les points $z_1$ et $z_2$',
        },
        {
          type: 'method',
          text: '**Méthode : Montrer qu\'un triangle est rectangle/isocèle/équilatéral**\n\nSoient $A(z_A)$, $B(z_B)$, $C(z_C)$ trois points du plan complexe.\n\n**Triangle isocèle** en $A$ : $|z_B - z_A| = |z_C - z_A|$.\n**Triangle rectangle** en $A$ : $\\frac{z_C - z_A}{z_B - z_A}$ est imaginaire pur.\n**Triangle équilatéral** : $\\left|\\frac{z_C - z_A}{z_B - z_A}\\right| = 1$ et $\\arg\\left(\\frac{z_C - z_A}{z_B - z_A}\\right) = \\pm\\frac{\\pi}{3}$.',
        },
      ],
    },

    // ═══════════════════════════════════════
    // SECTION 8 : EXEMPLES CORRIGÉS
    // ═══════════════════════════════════════
    {
      title: '8. Exemples corrigés pas à pas',
      content: [
        {
          type: 'exercise',
          text: 'Exemple 1 : Calculer $(2+3i)(1-i)$ et $\\frac{3+i}{1+2i}$. Mettre sous forme $a + ib$.',
        },
        {
          type: 'correction',
          text: 'Correction exemple 1 — opérations algébriques',
          items: [
            '**Produit** : $(2+3i)(1-i) = 2 - 2i + 3i - 3i^2 = 2 + i + 3 = 5 + i$.',
            '**Division** : on multiplie par le conjugué $\\overline{1+2i} = 1-2i$.',
            '$\\frac{3+i}{1+2i} = \\frac{(3+i)(1-2i)}{(1+2i)(1-2i)} = \\frac{3 - 6i + i - 2i^2}{1 + 4} = \\frac{5 - 5i}{5} = 1 - i$.',
            '**Vérification** : $(1-i)(1+2i) = 1 + 2i - i - 2i^2 = 3 + i$ ✓.',
          ],
        },
        {
          type: 'exercise',
          text: 'Exemple 2 : Mettre $z = 1 + i$ sous forme exponentielle.',
        },
        {
          type: 'correction',
          text: 'Correction exemple 2',
          items: [
            'Module : $|z| = \\sqrt{1^2 + 1^2} = \\sqrt{2}$.',
            'Argument : $\\cos\\theta = \\frac{1}{\\sqrt{2}}$, $\\sin\\theta = \\frac{1}{\\sqrt{2}}$. Les deux positifs → 1er quadrant.',
            '$\\theta = \\frac{\\pi}{4}$.',
            'Résultat : $z = \\sqrt{2}\\,e^{i\\pi/4}$.',
          ],
        },
        {
          type: 'exercise',
          text: 'Exemple 3 : Calculer $(1+i)^{12}$ en utilisant la forme exponentielle.',
        },
        {
          type: 'correction',
          text: 'Correction exemple 3 — puissance via forme exponentielle',
          items: [
            'On sait que $1 + i = \\sqrt{2}\\,e^{i\\pi/4}$.',
            '$(1+i)^{12} = (\\sqrt{2})^{12} \\cdot e^{i \\cdot 12 \\cdot \\pi/4} = 2^6 \\cdot e^{i3\\pi} = 64 \\cdot e^{i\\pi} = 64 \\times (-1) = -64$.',
            'Vérification rapide : $(1+i)^2 = 2i$, $(1+i)^4 = (2i)^2 = -4$, $(1+i)^8 = 16$, $(1+i)^{12} = 16 \\times (-4) = -64$ ✓.',
          ],
        },
        {
          type: 'exercise',
          text: 'Exemple 4 : Résoudre $z^2 = -4$ dans $\\mathbb{C}$.',
        },
        {
          type: 'correction',
          text: 'Correction exemple 4 — racines carrées',
          items: [
            '$-4 = 4e^{i\\pi}$ (module $4$, argument $\\pi$).',
            'Racines : $z_k = \\sqrt{4}\\,e^{i(\\pi + 2k\\pi)/2}$ pour $k = 0, 1$.',
            '$k=0$ : $z_0 = 2e^{i\\pi/2} = 2i$.',
            '$k=1$ : $z_1 = 2e^{i3\\pi/2} = -2i$.',
            'Solutions : $\\boxed{z = 2i \\text{ ou } z = -2i}$.',
            'Vérification : $(2i)^2 = 4i^2 = -4$ ✓ et $(-2i)^2 = 4i^2 = -4$ ✓.',
          ],
        },
        {
          type: 'exercise',
          text: 'Exemple 5 : Calculer le module et l\'argument de $z = -1 + i\\sqrt{3}$, puis en déduire $z^6$.',
        },
        {
          type: 'correction',
          text: 'Correction exemple 5',
          items: [
            'Module : $|z| = \\sqrt{(-1)^2 + (\\sqrt{3})^2} = \\sqrt{1 + 3} = 2$.',
            'Argument : $\\cos\\theta = \\frac{-1}{2}$, $\\sin\\theta = \\frac{\\sqrt{3}}{2}$. Quadrant 2 → $\\theta = \\frac{2\\pi}{3}$.',
            'Forme exponentielle : $z = 2e^{i2\\pi/3}$.',
            '$z^6 = 2^6 \\cdot e^{i \\cdot 6 \\times 2\\pi/3} = 64 \\cdot e^{i4\\pi} = 64 \\cdot 1 = \\boxed{64}$.',
          ],
        },
        {
          type: 'exercise',
          text: 'Exemple 6 : Exprimer $\\cos^3\\theta$ en fonction de $\\cos(3\\theta)$ et $\\cos(\\theta)$ (linéarisation).',
        },
        {
          type: 'correction',
          text: 'Correction exemple 6 — linéarisation par Euler',
          items: [
            'On part de $2\\cos\\theta = e^{i\\theta} + e^{-i\\theta}$.',
            '$(2\\cos\\theta)^3 = (e^{i\\theta} + e^{-i\\theta})^3 = e^{3i\\theta} + 3e^{i\\theta} + 3e^{-i\\theta} + e^{-3i\\theta}$.',
            '$8\\cos^3\\theta = (e^{3i\\theta} + e^{-3i\\theta}) + 3(e^{i\\theta} + e^{-i\\theta}) = 2\\cos(3\\theta) + 6\\cos\\theta$.',
            'Conclusion : $\\boxed{\\cos^3\\theta = \\frac{\\cos(3\\theta) + 3\\cos\\theta}{4}}$.',
          ],
        },
      ],
    },

    // ═══════════════════════════════════════
    // SECTION 9 : EXERCICES
    // ═══════════════════════════════════════
    {
      title: '9. Exercices d\'entraînement',
      content: [
        {
          type: 'exercise',
          text: 'Exercice 1 : Calculer le module et l\'argument de $z = -\\sqrt{3} + i$. Écrire $z$ sous forme exponentielle.',
        },
        {
          type: 'correction',
          text: 'Correction exercice 1',
          items: [
            '$|z| = \\sqrt{3 + 1} = 2$.',
            '$\\cos\\theta = \\frac{-\\sqrt{3}}{2}$, $\\sin\\theta = \\frac{1}{2}$ → 2ème quadrant.',
            '$\\theta = \\pi - \\frac{\\pi}{6} = \\frac{5\\pi}{6}$.',
            '$z = 2e^{i5\\pi/6}$.',
          ],
        },
        {
          type: 'exercise',
          text: 'Exercice 2 : Calculer $\\left(\\frac{1+i\\sqrt{3}}{2}\\right)^3$ par la formule de Moivre.',
        },
        {
          type: 'correction',
          text: 'Correction exercice 2',
          items: [
            '$\\frac{1+i\\sqrt{3}}{2}$ : module $= \\frac{\\sqrt{1+3}}{2} = 1$, argument $= \\frac{\\pi}{3}$.',
            'Donc $\\frac{1+i\\sqrt{3}}{2} = e^{i\\pi/3}$.',
            'Par Moivre : $\\left(e^{i\\pi/3}\\right)^3 = e^{i\\pi} = -1$.',
          ],
        },
        {
          type: 'exercise',
          text: 'Exercice 3 : Résoudre $z^2 - 2z + 5 = 0$ dans $\\mathbb{C}$.',
        },
        {
          type: 'correction',
          text: 'Correction exercice 3',
          items: [
            '$\\Delta = 4 - 20 = -16 < 0$. $\\sqrt{|\\Delta|} = 4$.',
            '$z_1 = \\frac{2 - 4i}{2} = 1 - 2i$ et $z_2 = \\frac{2 + 4i}{2} = 1 + 2i$.',
            'Vérification Viète : $z_1 + z_2 = 2 = \\frac{-(-2)}{1}$ ✓. $z_1 z_2 = (1-2i)(1+2i) = 5 = \\frac{5}{1}$ ✓.',
          ],
        },
        {
          type: 'exercise',
          text: 'Exercice 4 : Résoudre $z^4 = -16$ dans $\\mathbb{C}$. Donner les 4 solutions sous forme algébrique.',
        },
        {
          type: 'correction',
          text: 'Correction exercice 4',
          items: [
            '$-16 = 16e^{i\\pi}$, donc $R^{1/4} = 2$.',
            '$z_k = 2e^{i(\\pi + 2k\\pi)/4}$ pour $k = 0, 1, 2, 3$.',
            '$z_0 = 2e^{i\\pi/4} = 2 \\cdot \\frac{\\sqrt{2}}{2}(1+i) = \\sqrt{2}(1+i) = \\sqrt{2} + i\\sqrt{2}$.',
            '$z_1 = 2e^{i3\\pi/4} = -\\sqrt{2} + i\\sqrt{2}$.',
            '$z_2 = 2e^{i5\\pi/4} = -\\sqrt{2} - i\\sqrt{2}$.',
            '$z_3 = 2e^{i7\\pi/4} = \\sqrt{2} - i\\sqrt{2}$.',
            'Les 4 solutions forment un carré de côté $2\\sqrt{2}$ inscrit dans un cercle de rayon 2.',
          ],
        },
        {
          type: 'exercise',
          text: 'Exercice 5 (Type examen) : Soit $z_1 = 1 + i$ et $z_2 = \\sqrt{3} - i$.\na) Mettre $z_1$ et $z_2$ sous forme exponentielle.\nb) En déduire $\\frac{z_1}{z_2}$ sous forme exponentielle puis algébrique.\nc) En déduire les valeurs exactes de $\\cos\\left(\\frac{\\pi}{12}\\right)$ et $\\sin\\left(\\frac{\\pi}{12}\\right)$.',
        },
        {
          type: 'correction',
          text: 'Correction exercice 5',
          items: [
            'a) $z_1 = \\sqrt{2}\\,e^{i\\pi/4}$ et $z_2 = 2e^{-i\\pi/6}$.',
            'b) $\\frac{z_1}{z_2} = \\frac{\\sqrt{2}}{2} e^{i(\\pi/4 - (-\\pi/6))} = \\frac{\\sqrt{2}}{2} e^{i(\\pi/4 + \\pi/6)} = \\frac{\\sqrt{2}}{2} e^{i5\\pi/12}$.',
            'Calcul algébrique : $\\frac{1+i}{\\sqrt{3}-i} = \\frac{(1+i)(\\sqrt{3}+i)}{(\\sqrt{3}-i)(\\sqrt{3}+i)} = \\frac{\\sqrt{3}+i+i\\sqrt{3}-1}{4} = \\frac{(\\sqrt{3}-1) + i(\\sqrt{3}+1)}{4}$.',
            'c) Par identification : $\\frac{\\sqrt{2}}{2}\\cos\\frac{5\\pi}{12} = \\frac{\\sqrt{3}-1}{4}$, donc $\\cos\\frac{5\\pi}{12} = \\frac{\\sqrt{6}-\\sqrt{2}}{4}$.',
            'Et $\\sin\\frac{5\\pi}{12} = \\frac{\\sqrt{6}+\\sqrt{2}}{4}$. Comme $\\frac{\\pi}{12} = \\frac{\\pi}{2} - \\frac{5\\pi}{12}$ : $\\cos\\frac{\\pi}{12} = \\frac{\\sqrt{6}+\\sqrt{2}}{4}$ et $\\sin\\frac{\\pi}{12} = \\frac{\\sqrt{6}-\\sqrt{2}}{4}$.',
          ],
        },
      ],
    },
  ],
  erreurs: [
    'Oublier que $i^2 = -1$ lors des multiplications — toujours remplacer $i^2$ par $-1$ en cours de calcul.',
    'Se tromper dans le quadrant pour l\'argument : $\\arctan(b/a)$ ne suffit pas ! Vérifier les signes de $a$ et $b$.',
    'Oublier de multiplier par le conjugué du dénominateur pour effectuer une division.',
    'Confondre $|z|^2 = a^2 + b^2$ (pas de racine) et $|z| = \\sqrt{a^2 + b^2}$ (avec racine).',
    'Pour la forme exponentielle, confondre module et argument : $z = re^{i\\theta}$ avec $r > 0$.',
    'Racines $n$-ièmes : oublier qu\'il y a exactement $n$ solutions (ne pas s\'arrêter à la première !).',
    'Oublier le "modulo $2\\pi$" sur les arguments : $\\arg(z)$ n\'est défini qu\'à $2\\pi$ près.',
    'Dans $z^2 = w$ avec $w < 0$, écrire $z = \\sqrt{w}$ au lieu de $z = \\pm i\\sqrt{|w|}$ — les racines carrées de nombres négatifs n\'existent pas dans $\\mathbb{R}$ !',
  ],
  bilan: [
    'Je maîtrise les opérations en forme algébrique (addition, multiplication, division par conjugué).',
    'Je connais les propriétés du conjugué et sais les appliquer ($\\overline{z_1 z_2} = \\bar{z}_1 \\bar{z}_2$, etc.).',
    'Je sais calculer le module $|z| = \\sqrt{a^2+b^2}$ et l\'argument $\\theta$ en vérifiant le quadrant.',
    'Je connais par cœur le tableau des complexes remarquables (module + argument).',
    'Je sais convertir entre les 3 formes : algébrique, trigonométrique, exponentielle.',
    'Je connais et j\'applique la formule de Moivre : $(e^{i\\theta})^n = e^{in\\theta}$.',
    'Je sais utiliser les formules d\'Euler pour linéariser $\\cos^n\\theta$ ou $\\sin^n\\theta$.',
    'Je sais résoudre une équation du 2nd degré dans $\\mathbb{C}$ ($\\Delta < 0$).',
    'Je sais trouver les $n$ racines $n$-ièmes de $w$ et les placer sur un cercle.',
    'Je connais les interprétations géométriques (rotation, symétrie, distance).',
  ],
}
