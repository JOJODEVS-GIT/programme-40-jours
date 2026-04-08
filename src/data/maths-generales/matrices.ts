import { ChapterContent } from './types'

export const chapterContent: ChapterContent = {
  slug: 'matrices',
  title: 'Calcul Matriciel',
  icon: '🧮',
  importance: 'Les matrices sont présentes dans de nombreux sujets d\'examen, souvent liées à la résolution de systèmes linéaires. Maîtriser le produit matriciel, le déterminant et l\'inverse est indispensable.',
  days: 'Jours 19–20',
  sections: [
    {
      title: '1. Définitions fondamentales',
      content: [
        {
          type: 'text',
          text: '**Matrice** : tableau rectangulaire de nombres réels à $n$ lignes et $p$ colonnes. On note $M_{n,p}(\\mathbb{R})$ l\'ensemble des matrices $n \\times p$. Un élément est noté $a_{ij}$ (ligne $i$, colonne $j$).',
        },
        {
          type: 'text',
          text: 'Une matrice $A \\in M_{2,3}(\\mathbb{R})$ a $2$ lignes et $3$ colonnes :',
        },
        {
          type: 'formula',
          math: 'A = \\begin{pmatrix} a_{11} & a_{12} & a_{13} \\\\ a_{21} & a_{22} & a_{23} \\end{pmatrix} \\in M_{2,3}(\\mathbb{R})',
        },
        {
          type: 'text',
          text: '**Matrice carrée** : même nombre de lignes et de colonnes. Une matrice $n \\times n$ appartient à $M_n(\\mathbb{R})$.',
        },
        {
          type: 'text',
          text: '**Matrice identité** $I_n$ : matrice carrée $n \\times n$ avec des $1$ sur la diagonale principale et des $0$ partout ailleurs. Elle joue le rôle du neutre pour le produit : $A \\times I_n = I_n \\times A = A$.',
        },
        {
          type: 'formula',
          math: 'I_2 = \\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix} \\qquad I_3 = \\begin{pmatrix} 1 & 0 & 0 \\\\ 0 & 1 & 0 \\\\ 0 & 0 & 1 \\end{pmatrix}',
        },
        {
          type: 'text',
          text: '**Matrice nulle** $0_{n,p}$ : tous les coefficients sont nuls. C\'est le neutre pour l\'addition.',
        },
        {
          type: 'text',
          text: '**Matrice transposée** : $A^T$ (ou ${}^t\\!A$) est obtenue en échangeant lignes et colonnes. Si $A \\in M_{n,p}$ alors $A^T \\in M_{p,n}$. On a $(A^T)_{ij} = (A)_{ji}$.',
        },
        {
          type: 'formula',
          math: 'A = \\begin{pmatrix} 1 & 2 & 3 \\\\ 4 & 5 & 6 \\end{pmatrix} \\implies A^T = \\begin{pmatrix} 1 & 4 \\\\ 2 & 5 \\\\ 3 & 6 \\end{pmatrix}',
        },
        {
          type: 'text',
          text: '**Matrice symétrique** : $A^T = A$, c\'est-à-dire $a_{ij} = a_{ji}$ pour tout $i, j$. Toujours carrée.',
        },
        {
          type: 'text',
          text: '**Matrice diagonale** : matrice carrée dont tous les coefficients hors de la diagonale principale sont nuls.',
        },
        {
          type: 'formula',
          math: 'D = \\begin{pmatrix} d_1 & 0 & 0 \\\\ 0 & d_2 & 0 \\\\ 0 & 0 & d_3 \\end{pmatrix}',
        },
        {
          type: 'tip',
          text: '**Moyen mnémotechnique** : l\'indice $a_{ij}$ se lit "ligne $i$, colonne $j$" — comme les coordonnées $(x, y)$ mais avec ligne d\'abord.',
        },
      ],
    },
    {
      title: '2. Opérations sur les matrices',
      content: [
        {
          type: 'text',
          text: '**Addition** : deux matrices $A$ et $B$ de même taille $n \\times p$ s\'additionnent terme à terme. Le résultat est une matrice $n \\times p$.',
        },
        {
          type: 'formula',
          math: '\\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix} + \\begin{pmatrix} 5 & -1 \\\\ 0 & 2 \\end{pmatrix} = \\begin{pmatrix} 1+5 & 2+(-1) \\\\ 3+0 & 4+2 \\end{pmatrix} = \\begin{pmatrix} 6 & 1 \\\\ 3 & 6 \\end{pmatrix}',
        },
        {
          type: 'text',
          text: '**Multiplication par un scalaire** : $\\lambda A$ multiplie chaque coefficient de $A$ par le réel $\\lambda$.',
        },
        {
          type: 'formula',
          math: '3 \\times \\begin{pmatrix} 1 & -2 \\\\ 4 & 0 \\end{pmatrix} = \\begin{pmatrix} 3 & -6 \\\\ 12 & 0 \\end{pmatrix}',
        },
        {
          type: 'text',
          text: '**Produit matriciel** $AB$ : le produit $A \\times B$ n\'est défini que si le nombre de **colonnes** de $A$ est égal au nombre de **lignes** de $B$.',
        },
        {
          type: 'formula',
          math: '\\text{Si } A \\in M_{n,p}(\\mathbb{R}) \\text{ et } B \\in M_{p,q}(\\mathbb{R}) \\implies AB \\in M_{n,q}(\\mathbb{R})',
        },
        {
          type: 'text',
          text: 'Formule générale : le coefficient à la ligne $i$, colonne $j$ du produit $AB$ est le produit scalaire de la ligne $i$ de $A$ par la colonne $j$ de $B$ :',
        },
        {
          type: 'formula',
          math: '(AB)_{ij} = \\sum_{k=1}^{p} a_{ik} \\cdot b_{kj} = a_{i1}b_{1j} + a_{i2}b_{2j} + \\cdots + a_{ip}b_{pj}',
        },
        {
          type: 'text',
          text: '**Règle pratique $2 \\times 2$** : pour calculer $AB$ avec $A, B \\in M_2(\\mathbb{R})$, chaque coefficient $(i,j)$ est la somme des produits terme à terme de la ligne $i$ de $A$ par la colonne $j$ de $B$ :',
        },
        {
          type: 'formula',
          math: '\\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix} \\times \\begin{pmatrix} e & f \\\\ g & h \\end{pmatrix} = \\begin{pmatrix} ae+bg & af+bh \\\\ ce+dg & cf+dh \\end{pmatrix}',
        },
        {
          type: 'tip',
          text: 'Attention : le produit matriciel n\'est **PAS commutatif** ! En général $AB \\neq BA$, même quand les deux produits sont définis. Exemples de propriétés valides : $(AB)C = A(BC)$ (associativité) et $A(B+C) = AB + AC$ (distributivité).',
        },
        {
          type: 'text',
          text: '**Propriétés de la transposée** :\n- $(A+B)^T = A^T + B^T$\n- $(\\lambda A)^T = \\lambda A^T$\n- $(AB)^T = B^T A^T$ (attention à l\'ordre !)\n- $(A^T)^T = A$',
        },
      ],
    },
    {
      title: '3. Déterminant d\'une matrice carrée',
      content: [
        {
          type: 'text',
          text: '**Déterminant $2 \\times 2$** : pour $A = \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}$, le déterminant est $\\det(A) = ad - bc$ (produit de la diagonale principale moins produit de l\'anti-diagonale).',
        },
        {
          type: 'formula',
          math: '\\det\\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix} = ad - bc',
        },
        {
          type: 'text',
          text: '**Exemple numérique** : calculons $\\det(A)$ pour $A = \\begin{pmatrix} 3 & 2 \\\\ 1 & 5 \\end{pmatrix}$ :',
        },
        {
          type: 'formula',
          math: '\\det(A) = 3 \\times 5 - 2 \\times 1 = 15 - 2 = 13',
        },
        {
          type: 'text',
          text: '**Déterminant $3 \\times 3$ — règle de Sarrus** : pour $A = \\begin{pmatrix} a & b & c \\\\ d & e & f \\\\ g & h & i \\end{pmatrix}$, on développe selon la première ligne :',
        },
        {
          type: 'formula',
          math: '\\det(A) = a(ei - fh) - b(di - fg) + c(dh - eg)',
        },
        {
          type: 'text',
          text: '**Exemple $3 \\times 3$** : calculons $\\det\\begin{pmatrix} 1 & 2 & 0 \\\\ 3 & 1 & 4 \\\\ 0 & 2 & 1 \\end{pmatrix}$ :',
        },
        {
          type: 'formula',
          math: '\\det = 1 \\cdot (1 \\cdot 1 - 4 \\cdot 2) - 2 \\cdot (3 \\cdot 1 - 4 \\cdot 0) + 0 \\cdot (3 \\cdot 2 - 1 \\cdot 0)',
        },
        {
          type: 'formula',
          math: '= 1 \\cdot (1 - 8) - 2 \\cdot (3 - 0) + 0 = -7 - 6 + 0 = -13',
        },
        {
          type: 'text',
          text: '**Propriétés importantes** :',
        },
        {
          type: 'formula',
          math: '\\det(AB) = \\det(A) \\cdot \\det(B)',
        },
        {
          type: 'formula',
          math: '\\det(\\lambda A) = \\lambda^n \\det(A) \\quad \\text{pour } A \\in M_n(\\mathbb{R})',
        },
        {
          type: 'formula',
          math: '\\det(A^T) = \\det(A) \\qquad \\det(A^{-1}) = \\frac{1}{\\det(A)}',
        },
        {
          type: 'text',
          text: 'La matrice $A$ est **inversible** si et seulement si $\\det(A) \\neq 0$.',
        },
        {
          type: 'tip',
          text: '**Astuce** pour le déterminant $2 \\times 2$ : dessiner deux flèches en croix — flèche descendante $\\rightarrow$ produit $ad$ (signe $+$), flèche montante $\\rightarrow$ produit $bc$ (signe $-$). $\\det = ad - bc$.',
        },
      ],
    },
    {
      title: '4. Inverse d\'une matrice $2 \\times 2$',
      content: [
        {
          type: 'text',
          text: 'Une matrice $A$ est **inversible** si et seulement si $\\det(A) \\neq 0$. Dans ce cas, il existe une unique matrice $A^{-1}$ telle que $A \\times A^{-1} = A^{-1} \\times A = I_n$.',
        },
        {
          type: 'text',
          text: '**Formule de l\'inverse $2 \\times 2$** : pour $A = \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}$ avec $\\det(A) = ad - bc \\neq 0$ :',
        },
        {
          type: 'formula',
          math: 'A^{-1} = \\frac{1}{\\det(A)} \\begin{pmatrix} d & -b \\\\ -c & a \\end{pmatrix} = \\frac{1}{ad-bc} \\begin{pmatrix} d & -b \\\\ -c & a \\end{pmatrix}',
        },
        {
          type: 'tip',
          text: '**Moyen mnémotechnique en 3 étapes** :\n1. Calculer $\\det(A) = ad - bc$\n2. **Échanger** les éléments diagonaux ($a \\leftrightarrow d$)\n3. **Changer le signe** des éléments anti-diagonaux ($b \\to -b$, $c \\to -c$)\n4. Diviser toute la matrice par $\\det(A)$',
        },
        {
          type: 'text',
          text: '**Exemple** : calculons $A^{-1}$ pour $A = \\begin{pmatrix} 4 & 1 \\\\ 7 & 2 \\end{pmatrix}$ :',
        },
        {
          type: 'formula',
          math: '\\det(A) = 4 \\times 2 - 1 \\times 7 = 8 - 7 = 1',
        },
        {
          type: 'formula',
          math: 'A^{-1} = \\frac{1}{1} \\begin{pmatrix} 2 & -1 \\\\ -7 & 4 \\end{pmatrix} = \\begin{pmatrix} 2 & -1 \\\\ -7 & 4 \\end{pmatrix}',
        },
        {
          type: 'text',
          text: '**Vérification** : on contrôle toujours que $A \\times A^{-1} = I_2$ :',
        },
        {
          type: 'formula',
          math: '\\begin{pmatrix} 4 & 1 \\\\ 7 & 2 \\end{pmatrix} \\times \\begin{pmatrix} 2 & -1 \\\\ -7 & 4 \\end{pmatrix} = \\begin{pmatrix} 8-7 & -4+4 \\\\ 14-14 & -7+8 \\end{pmatrix} = \\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix} = I_2 \\checkmark',
        },
        {
          type: 'text',
          text: '**Propriétés de l\'inverse** :\n- $(A^{-1})^{-1} = A$\n- $(AB)^{-1} = B^{-1}A^{-1}$ (attention à l\'ordre !)\n- $(A^T)^{-1} = (A^{-1})^T$\n- $\\det(A^{-1}) = \\dfrac{1}{\\det(A)}$',
        },
      ],
    },
    {
      title: '5. Résolution de systèmes linéaires : méthode matricielle $AX = B$',
      content: [
        {
          type: 'text',
          text: 'Tout système linéaire de $n$ équations à $n$ inconnues peut s\'écrire sous forme matricielle $AX = B$, où $A$ est la **matrice des coefficients** ($n \\times n$), $X$ est le **vecteur des inconnues** et $B$ est le **vecteur des seconds membres**.',
        },
        {
          type: 'formula',
          math: '\\begin{cases} ax + by = e \\\\ cx + dy = f \\end{cases} \\quad \\Longleftrightarrow \\quad \\underbrace{\\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}}_{A} \\underbrace{\\begin{pmatrix} x \\\\ y \\end{pmatrix}}_{X} = \\underbrace{\\begin{pmatrix} e \\\\ f \\end{pmatrix}}_{B}',
        },
        {
          type: 'method',
          text: '**Méthode de résolution par inverse matriciel** :\n1. Identifier $A$, $X$ et $B$ depuis le système\n2. Calculer $\\det(A) = ad - bc$\n3. **Si $\\det(A) \\neq 0$** : calculer $A^{-1}$ puis $X = A^{-1}B$ → solution unique\n4. **Si $\\det(A) = 0$** : le système est soit **incompatible** (aucune solution), soit a une **infinité de solutions** (à étudier au cas par cas par substitution)',
        },
        {
          type: 'text',
          text: 'Quand $\\det(A) \\neq 0$, on multiplie à gauche par $A^{-1}$ les deux membres : $A^{-1}(AX) = A^{-1}B$, d\'où $(A^{-1}A)X = A^{-1}B$, soit $I_n X = A^{-1}B$, c\'est-à-dire $X = A^{-1}B$.',
        },
        {
          type: 'tip',
          text: '**Attention** : on multiplie toujours $A^{-1}$ **à gauche** des deux membres, car le produit matriciel n\'est pas commutatif. $A^{-1}B \\neq BA^{-1}$ en général.',
        },
        {
          type: 'text',
          text: '**Règle de Cramer** (alternative) : pour un système $2 \\times 2$, les solutions sont directement données par :',
        },
        {
          type: 'formula',
          math: 'x = \\frac{\\det\\begin{pmatrix} e & b \\\\ f & d \\end{pmatrix}}{\\det(A)} = \\frac{ed - bf}{ad - bc} \\qquad y = \\frac{\\det\\begin{pmatrix} a & e \\\\ c & f \\end{pmatrix}}{\\det(A)} = \\frac{af - ce}{ad - bc}',
        },
        {
          type: 'text',
          text: 'La règle de Cramer remplace la colonne des coefficients de l\'inconnue cherchée par la colonne $B$ des seconds membres pour former le déterminant numérateur.',
        },
      ],
    },
    {
      title: '6. Exemples corrigés pas à pas',
      content: [
        {
          type: 'exercise',
          text: 'Exemple 1 : Calculer le produit $A \\times B$ avec $A = \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}$ et $B = \\begin{pmatrix} 5 & 6 \\\\ 7 & 8 \\end{pmatrix}$.',
        },
        {
          type: 'correction',
          text: 'Correction exemple 1 — Produit matriciel $2 \\times 2$',
          items: [
            '**Étape 1** : vérifier les dimensions. $A \\in M_2(\\mathbb{R})$ et $B \\in M_2(\\mathbb{R})$, donc $AB \\in M_2(\\mathbb{R})$ — produit défini.',
            '**Étape 2** : calculer chaque coefficient. Coefficient $(1,1)$ = ligne 1 de $A$ $\\cdot$ colonne 1 de $B$ : $1 \\times 5 + 2 \\times 7 = 5 + 14 = 19$',
            'Coefficient $(1,2)$ = ligne 1 de $A$ $\\cdot$ colonne 2 de $B$ : $1 \\times 6 + 2 \\times 8 = 6 + 16 = 22$',
            'Coefficient $(2,1)$ = ligne 2 de $A$ $\\cdot$ colonne 1 de $B$ : $3 \\times 5 + 4 \\times 7 = 15 + 28 = 43$',
            'Coefficient $(2,2)$ = ligne 2 de $A$ $\\cdot$ colonne 2 de $B$ : $3 \\times 6 + 4 \\times 8 = 18 + 32 = 50$',
            '**Résultat** : $AB = \\begin{pmatrix} 19 & 22 \\\\ 43 & 50 \\end{pmatrix}$',
            '**Vérification de non-commutativité** : $BA = \\begin{pmatrix} 5 \\times 1 + 6 \\times 3 & 5 \\times 2 + 6 \\times 4 \\\\ 7 \\times 1 + 8 \\times 3 & 7 \\times 2 + 8 \\times 4 \\end{pmatrix} = \\begin{pmatrix} 23 & 34 \\\\ 31 & 46 \\end{pmatrix} \\neq AB$ — comme attendu !',
          ],
        },
        {
          type: 'exercise',
          text: 'Exemple 2 : Calculer l\'inverse de $A = \\begin{pmatrix} 3 & 1 \\\\ 5 & 2 \\end{pmatrix}$, puis vérifier le résultat.',
        },
        {
          type: 'correction',
          text: 'Correction exemple 2 — Inverse d\'une matrice $2 \\times 2$',
          items: [
            '**Étape 1** : calculer le déterminant. $\\det(A) = 3 \\times 2 - 1 \\times 5 = 6 - 5 = 1$',
            '**Étape 2** : comme $\\det(A) = 1 \\neq 0$, la matrice est inversible.',
            '**Étape 3** : appliquer la formule — échanger $3$ et $2$ sur la diagonale, changer le signe de $1$ et $5$ : $A^{-1} = \\frac{1}{1} \\begin{pmatrix} 2 & -1 \\\\ -5 & 3 \\end{pmatrix} = \\begin{pmatrix} 2 & -1 \\\\ -5 & 3 \\end{pmatrix}$',
            '**Vérification** : $A \\times A^{-1} = \\begin{pmatrix} 3 & 1 \\\\ 5 & 2 \\end{pmatrix} \\begin{pmatrix} 2 & -1 \\\\ -5 & 3 \\end{pmatrix} = \\begin{pmatrix} 6-5 & -3+3 \\\\ 10-10 & -5+6 \\end{pmatrix} = \\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix} = I_2$ ✓',
          ],
        },
        {
          type: 'exercise',
          text: 'Exemple 3 : Résoudre par calcul matriciel le système $\\begin{cases} 3x + y = 7 \\\\ 5x + 2y = 12 \\end{cases}$',
        },
        {
          type: 'correction',
          text: 'Correction exemple 3 — Résolution $AX = B$',
          items: [
            '**Étape 1** : mise en forme matricielle. $A = \\begin{pmatrix} 3 & 1 \\\\ 5 & 2 \\end{pmatrix}$, $X = \\begin{pmatrix} x \\\\ y \\end{pmatrix}$, $B = \\begin{pmatrix} 7 \\\\ 12 \\end{pmatrix}$',
            '**Étape 2** : on a déjà calculé $\\det(A) = 1 \\neq 0$ et $A^{-1} = \\begin{pmatrix} 2 & -1 \\\\ -5 & 3 \\end{pmatrix}$ (exemple 2).',
            '**Étape 3** : $X = A^{-1}B = \\begin{pmatrix} 2 & -1 \\\\ -5 & 3 \\end{pmatrix} \\begin{pmatrix} 7 \\\\ 12 \\end{pmatrix} = \\begin{pmatrix} 2 \\times 7 + (-1) \\times 12 \\\\ (-5) \\times 7 + 3 \\times 12 \\end{pmatrix} = \\begin{pmatrix} 14 - 12 \\\\ -35 + 36 \\end{pmatrix} = \\begin{pmatrix} 2 \\\\ 1 \\end{pmatrix}$',
            '**Solution** : $x = 2$, $y = 1$',
            '**Vérification** dans le système original : $3(2) + 1(1) = 7$ ✓ et $5(2) + 2(1) = 12$ ✓',
          ],
        },
        {
          type: 'exercise',
          text: 'Exemple 4 (Règle de Cramer) : Résoudre $\\begin{cases} 2x - y = 3 \\\\ x + 4y = 9 \\end{cases}$ par la règle de Cramer.',
        },
        {
          type: 'correction',
          text: 'Correction exemple 4 — Règle de Cramer',
          items: [
            '**Étape 1** : identifier $a=2$, $b=-1$, $c=1$, $d=4$, $e=3$ (second membre de l\'éq. 1), $f=9$ (second membre de l\'éq. 2).',
            '**Étape 2** : $\\det(A) = 2 \\times 4 - (-1) \\times 1 = 8 + 1 = 9 \\neq 0$ → solution unique.',
            '**Étape 3** : $x = \\dfrac{\\det\\begin{pmatrix} 3 & -1 \\\\ 9 & 4 \\end{pmatrix}}{9} = \\dfrac{3 \\times 4 - (-1) \\times 9}{9} = \\dfrac{12 + 9}{9} = \\dfrac{21}{9} = \\dfrac{7}{3}$',
            '**Étape 4** : $y = \\dfrac{\\det\\begin{pmatrix} 2 & 3 \\\\ 1 & 9 \\end{pmatrix}}{9} = \\dfrac{2 \\times 9 - 3 \\times 1}{9} = \\dfrac{18 - 3}{9} = \\dfrac{15}{9} = \\dfrac{5}{3}$',
            '**Solution** : $x = \\dfrac{7}{3}$, $y = \\dfrac{5}{3}$',
            '**Vérification** : $2 \\cdot \\dfrac{7}{3} - \\dfrac{5}{3} = \\dfrac{14-5}{3} = \\dfrac{9}{3} = 3$ ✓ et $\\dfrac{7}{3} + 4 \\cdot \\dfrac{5}{3} = \\dfrac{7+20}{3} = \\dfrac{27}{3} = 9$ ✓',
          ],
        },
        {
          type: 'exercise',
          text: 'Exemple 5 : Analyser le système $\\begin{cases} 2x + 4y = 6 \\\\ x + 2y = 3 \\end{cases}$ — que se passe-t-il si $\\det(A) = 0$ ?',
        },
        {
          type: 'correction',
          text: 'Correction exemple 5 — Cas $\\det(A) = 0$',
          items: [
            '$A = \\begin{pmatrix} 2 & 4 \\\\ 1 & 2 \\end{pmatrix}$, $\\det(A) = 2 \\times 2 - 4 \\times 1 = 4 - 4 = 0$',
            'La deuxième équation est $x + 2y = 3$, et la première est $2(x + 2y) = 6$, c\'est-à-dire $x + 2y = 3$ — elles sont **identiques** !',
            'Le système a une **infinité de solutions** : toutes les paires $(x, y)$ vérifiant $x + 2y = 3$, soit $x = 3 - 2t$, $y = t$ pour tout $t \\in \\mathbb{R}$.',
            '**Conclusion** : quand $\\det(A) = 0$, on ne peut pas utiliser la méthode inverse. On substitue à la place.',
          ],
        },
      ],
    },
    {
      title: '7. Exercices d\'entraînement',
      content: [
        {
          type: 'exercise',
          text: 'Exercice 1 : Soit $A = \\begin{pmatrix} 2 & -1 \\\\ 4 & 3 \\end{pmatrix}$. Calculer $A^2 = A \\times A$.',
        },
        {
          type: 'correction',
          text: 'Correction exercice 1',
          items: [
            '$A^2 = \\begin{pmatrix} 2 & -1 \\\\ 4 & 3 \\end{pmatrix} \\times \\begin{pmatrix} 2 & -1 \\\\ 4 & 3 \\end{pmatrix}$',
            'Coefficient $(1,1)$ : $2 \\times 2 + (-1) \\times 4 = 4 - 4 = 0$',
            'Coefficient $(1,2)$ : $2 \\times (-1) + (-1) \\times 3 = -2 - 3 = -5$',
            'Coefficient $(2,1)$ : $4 \\times 2 + 3 \\times 4 = 8 + 12 = 20$',
            'Coefficient $(2,2)$ : $4 \\times (-1) + 3 \\times 3 = -4 + 9 = 5$',
            '$A^2 = \\begin{pmatrix} 0 & -5 \\\\ 20 & 5 \\end{pmatrix}$',
          ],
        },
        {
          type: 'exercise',
          text: 'Exercice 2 : Calculer l\'inverse de $B = \\begin{pmatrix} 4 & 7 \\\\ 2 & 6 \\end{pmatrix}$ et vérifier que $B \\times B^{-1} = I_2$.',
        },
        {
          type: 'correction',
          text: 'Correction exercice 2',
          items: [
            '$\\det(B) = 4 \\times 6 - 7 \\times 2 = 24 - 14 = 10$',
            'Comme $\\det(B) = 10 \\neq 0$, $B$ est inversible.',
            '$B^{-1} = \\dfrac{1}{10} \\begin{pmatrix} 6 & -7 \\\\ -2 & 4 \\end{pmatrix} = \\begin{pmatrix} 0{,}6 & -0{,}7 \\\\ -0{,}2 & 0{,}4 \\end{pmatrix}$',
            '**Vérification** : $B \\times B^{-1} = \\begin{pmatrix} 4 & 7 \\\\ 2 & 6 \\end{pmatrix} \\begin{pmatrix} 0{,}6 & -0{,}7 \\\\ -0{,}2 & 0{,}4 \\end{pmatrix} = \\begin{pmatrix} 2{,}4-1{,}4 & -2{,}8+2{,}8 \\\\ 1{,}2-1{,}2 & -1{,}4+2{,}4 \\end{pmatrix} = \\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix} = I_2$ ✓',
          ],
        },
        {
          type: 'exercise',
          text: 'Exercice 3 : Résoudre par calcul matriciel $\\begin{cases} 2x + 3y = 8 \\\\ x + 2y = 5 \\end{cases}$. Vérifier dans le système original.',
        },
        {
          type: 'correction',
          text: 'Correction exercice 3',
          items: [
            '$A = \\begin{pmatrix} 2 & 3 \\\\ 1 & 2 \\end{pmatrix}$, $B = \\begin{pmatrix} 8 \\\\ 5 \\end{pmatrix}$',
            '$\\det(A) = 2 \\times 2 - 3 \\times 1 = 4 - 3 = 1 \\neq 0$ → solution unique.',
            '$A^{-1} = \\dfrac{1}{1} \\begin{pmatrix} 2 & -3 \\\\ -1 & 2 \\end{pmatrix} = \\begin{pmatrix} 2 & -3 \\\\ -1 & 2 \\end{pmatrix}$',
            '$X = A^{-1}B = \\begin{pmatrix} 2 & -3 \\\\ -1 & 2 \\end{pmatrix} \\begin{pmatrix} 8 \\\\ 5 \\end{pmatrix} = \\begin{pmatrix} 16 - 15 \\\\ -8 + 10 \\end{pmatrix} = \\begin{pmatrix} 1 \\\\ 2 \\end{pmatrix}$',
            '**Solution** : $x = 1$, $y = 2$',
            '**Vérification** : $2(1) + 3(2) = 2 + 6 = 8$ ✓ et $1 + 2(2) = 1 + 4 = 5$ ✓',
          ],
        },
        {
          type: 'exercise',
          text: 'Exercice 4 (challenge) : Soit $A = \\begin{pmatrix} 1 & 2 \\\\ 3 & 7 \\end{pmatrix}$ et $B = \\begin{pmatrix} 3 \\\\ 11 \\end{pmatrix}$. Résoudre $AX = B$, puis vérifier. Calculer aussi $\\det(A^2)$.',
        },
        {
          type: 'correction',
          text: 'Correction exercice 4',
          items: [
            '**Résolution** : $\\det(A) = 1 \\times 7 - 2 \\times 3 = 7 - 6 = 1$',
            '$A^{-1} = \\begin{pmatrix} 7 & -2 \\\\ -3 & 1 \\end{pmatrix}$',
            '$X = A^{-1}B = \\begin{pmatrix} 7 & -2 \\\\ -3 & 1 \\end{pmatrix} \\begin{pmatrix} 3 \\\\ 11 \\end{pmatrix} = \\begin{pmatrix} 21 - 22 \\\\ -9 + 11 \\end{pmatrix} = \\begin{pmatrix} -1 \\\\ 2 \\end{pmatrix}$, donc $x = -1$, $y = 2$',
            '**Vérification** : $1(-1) + 2(2) = -1 + 4 = 3$ ✓ et $3(-1) + 7(2) = -3 + 14 = 11$ ✓',
            '**Déterminant de $A^2$** : $\\det(A^2) = \\det(A \\cdot A) = \\det(A) \\cdot \\det(A) = 1 \\times 1 = 1$ (propriété $\\det(AB) = \\det(A)\\det(B)$)',
          ],
        },
      ],
    },
    {
      title: '8. Conseils pour l\'examen',
      content: [
        {
          type: 'tip',
          text: '**Avant de calculer l\'inverse** : toujours vérifier que $\\det(A) \\neq 0$. Si $\\det(A) = 0$, l\'inverse n\'existe pas et la méthode $X = A^{-1}B$ est inapplicable.',
        },
        {
          type: 'tip',
          text: '**Après avoir trouvé $X$** : toujours **vérifier** en substituant dans le système original. Cela détecte les erreurs de calcul et peut rapporter des points même si la méthode est partiellement correcte.',
        },
        {
          type: 'tip',
          text: '**Pour la règle de Cramer** : on remplace dans $\\det(A)$ uniquement la colonne correspondant à l\'inconnue cherchée par la colonne $B$. Pour $x$ → remplacer la colonne 1 ; pour $y$ → remplacer la colonne 2.',
        },
        {
          type: 'tip',
          text: '**Produit $A^{-1}B$** : attention à l\'ordre ! C\'est toujours $A^{-1}$ **fois** $B$, pas $B$ fois $A^{-1}$. Vérifier aussi que les dimensions sont compatibles (matrice $2 \\times 2$ fois vecteur $2 \\times 1$ donne un vecteur $2 \\times 1$).',
        },
        {
          type: 'method',
          text: '**Récapitulatif — résoudre $AX = B$ en 5 étapes** :\n1. Écrire le système sous la forme $AX = B$ (identifier $A$, $X$, $B$)\n2. Calculer $\\det(A) = ad - bc$\n3. Si $\\det(A) \\neq 0$ : calculer $A^{-1} = \\frac{1}{\\det(A)} \\begin{pmatrix} d & -b \\\\ -c & a \\end{pmatrix}$\n4. Calculer $X = A^{-1}B$ (produit matriciel $2 \\times 2$ fois $2 \\times 1$)\n5. Vérifier la solution dans le système original',
        },
      ],
    },
  ],
  erreurs: [
    'Oublier que le produit matriciel n\'est **PAS commutatif** : $AB \\neq BA$ en général — toujours respecter l\'ordre',
    'Se tromper dans la formule de l\'inverse : il faut **échanger** les éléments diagonaux ($a \\leftrightarrow d$) ET **changer le signe** des anti-diagonaux ($b \\to -b$, $c \\to -c$)',
    'Oublier de vérifier que $\\det(A) \\neq 0$ avant de calculer $A^{-1}$ — si $\\det(A) = 0$, l\'inverse n\'existe pas',
    'Confondre les indices : le coefficient $(AB)_{ij}$ est la somme des produits de la **ligne $i$** de $A$ par la **colonne $j$** de $B$',
    'Ne pas vérifier le résultat en substituant dans le système — une vérification prend 30 secondes et évite de perdre tous les points',
    'Pour la règle de Cramer, remplacer la mauvaise colonne : pour $x$ on remplace la colonne 1, pour $y$ la colonne 2',
    'Oublier de diviser par $\\det(A)$ dans la formule de $A^{-1}$ — une erreur fréquente quand $\\det(A) = 1$',
  ],
  bilan: [
    'Je sais effectuer l\'addition et la multiplication scalaire de matrices de même taille',
    'Je maîtrise le produit matriciel $2 \\times 2$ : vérifier la compatibilité des dimensions, calculer chaque coefficient $(AB)_{ij}$',
    'Je sais calculer un déterminant $2 \\times 2$ : $\\det(A) = ad - bc$',
    'Je sais calculer l\'inverse d\'une matrice $2 \\times 2$ quand $\\det(A) \\neq 0$ : $A^{-1} = \\frac{1}{\\det(A)} \\begin{pmatrix} d & -b \\\\ -c & a \\end{pmatrix}$',
    'Je sais résoudre un système $2 \\times 2$ par la méthode matricielle $X = A^{-1}B$ et vérifier la solution',
    'Je connais la règle de Cramer comme méthode alternative pour résoudre $AX = B$',
    'Je sais identifier les cas $\\det(A) = 0$ et analyser le système par substitution',
  ],
}
