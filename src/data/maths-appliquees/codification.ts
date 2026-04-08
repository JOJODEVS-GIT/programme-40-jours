import type { ChapterContent } from '../maths-generales/types'

export const codificationContent: ChapterContent = {
  slug: 'codification',
  title: "Codification de l'Information",
  icon: '💻',
  importance: 'Fondamental - base de tout le programme de maths appliquées',
  days: 'Jours 22-23',
  sections: [
    {
      title: 'Les 4 bases de numération',
      content: [
        {
          type: 'text',
          text: "En informatique, on utilise principalement 4 systèmes de numération. Chaque système a une **base** qui définit le nombre de symboles utilisés. La base $b$ signifie que chaque position vaut $b$ fois plus que la position précédente.",
        },
        {
          type: 'table',
          headers: ['Base', 'Nom', 'Symboles', 'Préfixe notation'],
          rows: [
            ['$2$', 'Binaire', '$0, 1$', '$0b$ ou indice $_2$'],
            ['$8$', 'Octal', '$0, 1, 2, 3, 4, 5, 6, 7$', '$0o$ ou indice $_8$'],
            ['$10$', 'Décimal', '$0, 1, 2, \\ldots, 9$', '(aucun) ou indice $_{10}$'],
            ['$16$', 'Hexadécimal', '$0, 1, \\ldots, 9, A, B, C, D, E, F$', '$0x$ ou indice $_{16}$'],
          ],
        },
        {
          type: 'text',
          text: "En hexadécimal, les lettres $A$ à $F$ valent respectivement $10$ à $15$ en décimal. Ainsi $A_{16} = 10_{10}$, $B_{16} = 11_{10}$, ..., $F_{16} = 15_{10}$.",
        },
        {
          type: 'table',
          headers: ['Décimal', 'Binaire', 'Octal', 'Hexa'],
          rows: [
            ['$0$', '$0000$', '$0$', '$0$'],
            ['$1$', '$0001$', '$1$', '$1$'],
            ['$2$', '$0010$', '$2$', '$2$'],
            ['$3$', '$0011$', '$3$', '$3$'],
            ['$4$', '$0100$', '$4$', '$4$'],
            ['$5$', '$0101$', '$5$', '$5$'],
            ['$6$', '$0110$', '$6$', '$6$'],
            ['$7$', '$0111$', '$7$', '$7$'],
            ['$8$', '$1000$', '$10$', '$8$'],
            ['$9$', '$1001$', '$11$', '$9$'],
            ['$10$', '$1010$', '$12$', '$A$'],
            ['$11$', '$1011$', '$13$', '$B$'],
            ['$12$', '$1100$', '$14$', '$C$'],
            ['$13$', '$1101$', '$15$', '$D$'],
            ['$14$', '$1110$', '$16$', '$E$'],
            ['$15$', '$1111$', '$17$', '$F$'],
          ],
        },
        {
          type: 'tip',
          text: "Astuce mémo : Apprenez ce tableau par coeur jusqu'à 15. En particulier retenez que $8 = 1000_2$, $4 = 0100_2$, $2 = 0010_2$, $1 = 0001_2$ — ce sont les puissances de 2 !",
        },
      ],
    },
    {
      title: 'Conversions entre bases — Décimal vers Binaire',
      content: [
        {
          type: 'text',
          text: "**Méthode des divisions successives par 2** : on divise par $2$ et on lit les restes **de bas en haut** (du dernier reste au premier).",
        },
        {
          type: 'method',
          text: "Méthode : Décimal → Binaire (divisions successives)\n1. Diviser le nombre décimal par 2\n2. Noter le reste (0 ou 1) — c'est le bit de poids le plus faible (LSB) en premier\n3. Recommencer avec le quotient entier\n4. S'arrêter quand le quotient vaut 0\n5. Lire les restes de BAS en HAUT → c'est le nombre binaire",
        },
        {
          type: 'text',
          text: "**Exemple détaillé : Convertir $(25)_{10}$ en binaire**\n\n$25 \\div 2 = 12$ reste $\\mathbf{1}$ ← bit $b_0$ (LSB)\n$12 \\div 2 = 6$ reste $\\mathbf{0}$ ← bit $b_1$\n$6 \\div 2 = 3$ reste $\\mathbf{0}$ ← bit $b_2$\n$3 \\div 2 = 1$ reste $\\mathbf{1}$ ← bit $b_3$\n$1 \\div 2 = 0$ reste $\\mathbf{1}$ ← bit $b_4$ (MSB)\n\nOn lit de bas en haut : $(25)_{10} = (11001)_2$\n\nVérification : $1 \\times 2^4 + 1 \\times 2^3 + 0 \\times 2^2 + 0 \\times 2^1 + 1 \\times 2^0 = 16 + 8 + 0 + 0 + 1 = 25$ ✓",
        },
        {
          type: 'text',
          text: "**Exemple détaillé : Convertir $(156)_{10}$ en binaire**\n\n$156 \\div 2 = 78$ reste $\\mathbf{0}$\n$78 \\div 2 = 39$ reste $\\mathbf{0}$\n$39 \\div 2 = 19$ reste $\\mathbf{1}$\n$19 \\div 2 = 9$ reste $\\mathbf{1}$\n$9 \\div 2 = 4$ reste $\\mathbf{1}$\n$4 \\div 2 = 2$ reste $\\mathbf{0}$\n$2 \\div 2 = 1$ reste $\\mathbf{0}$\n$1 \\div 2 = 0$ reste $\\mathbf{1}$\n\nLecture de bas en haut : $(156)_{10} = (10011100)_2$",
        },
      ],
    },
    {
      title: 'Conversions entre bases — Binaire vers Décimal',
      content: [
        {
          type: 'text',
          text: "**Méthode des puissances de 2** : chaque bit $b_i$ à la position $i$ (de droite, en partant de $0$) contribue $b_i \\times 2^i$ à la valeur décimale.",
        },
        {
          type: 'formula',
          math: '(b_n b_{n-1} \\ldots b_1 b_0)_2 = b_n \\times 2^n + b_{n-1} \\times 2^{n-1} + \\ldots + b_1 \\times 2^1 + b_0 \\times 2^0',
        },
        {
          type: 'text',
          text: "**Rappel des puissances de 2** : $2^0=1$, $2^1=2$, $2^2=4$, $2^3=8$, $2^4=16$, $2^5=32$, $2^6=64$, $2^7=128$, $2^8=256$.",
        },
        {
          type: 'text',
          text: "**Exemple : Convertir $(10110011)_2$ en décimal**\n\nPositions (droite → gauche) : $b_7 b_6 b_5 b_4 b_3 b_2 b_1 b_0 = 1\\ 0\\ 1\\ 1\\ 0\\ 0\\ 1\\ 1$\n\n$= 1 \\times 128 + 0 \\times 64 + 1 \\times 32 + 1 \\times 16 + 0 \\times 8 + 0 \\times 4 + 1 \\times 2 + 1 \\times 1$\n$= 128 + 0 + 32 + 16 + 0 + 0 + 2 + 1$\n$= (179)_{10}$",
        },
        {
          type: 'text',
          text: "**Exemple : Convertir $(1101)_2$ en décimal**\n\n$= 1 \\times 2^3 + 1 \\times 2^2 + 0 \\times 2^1 + 1 \\times 2^0 = 8 + 4 + 0 + 1 = (13)_{10}$",
        },
        {
          type: 'tip',
          text: "Astuce : Identifiez d'abord les bits à 1 et additionnez uniquement les puissances de 2 correspondantes. Inutile de calculer les termes nuls.",
        },
      ],
    },
    {
      title: 'Conversions Binaire ↔ Octal ↔ Hexadécimal',
      content: [
        {
          type: 'text',
          text: "**Binaire ↔ Octal** : on regroupe les bits par **paquets de 3** en partant de la droite. On complète avec des $0$ à gauche si nécessaire.",
        },
        {
          type: 'text',
          text: "**Exemple : $(10110011)_2$ en octal**\n\nOn regroupe par 3 depuis la droite :\n$\\underbrace{010}_{2}\\, \\underbrace{110}_{6}\\, \\underbrace{011}_{3}$\n\nDonc $(10110011)_2 = (263)_8$\n\nVérification : $2 \\times 64 + 6 \\times 8 + 3 = 128 + 48 + 3 = 179_{10}$ ✓",
        },
        {
          type: 'text',
          text: "**Binaire ↔ Hexadécimal** : on regroupe les bits par **paquets de 4** en partant de la droite. On complète avec des $0$ à gauche si nécessaire.",
        },
        {
          type: 'text',
          text: "**Exemple : $(10110011)_2$ en hexadécimal**\n\nOn regroupe par 4 depuis la droite :\n$\\underbrace{1011}_{B}\\, \\underbrace{0011}_{3}$\n\nDonc $(10110011)_2 = (B3)_{16}$\n\nVérification : $11 \\times 16 + 3 = 176 + 3 = 179_{10}$ ✓",
        },
        {
          type: 'text',
          text: "**Octal ↔ Hexadécimal** : on passe toujours par le binaire. Octal → Binaire (groupes de 3) → Hexadécimal (groupes de 4).",
        },
        {
          type: 'text',
          text: "**Exemple : $(263)_8$ en hexadécimal**\n\nÉtape 1 — Octal → Binaire : $2 = 010$, $6 = 110$, $3 = 011$ → $(010110011)_2$\nÉtape 2 — Binaire → Hexa (groupes de 4) : $\\underbrace{1011}_{B}\\, \\underbrace{0011}_{3}$ → $(B3)_{16}$",
        },
        {
          type: 'tip',
          text: "Règle d'or : pour passer entre octal et hexa, passez TOUJOURS par le binaire comme intermédiaire ! Ne tentez jamais de convertir directement.",
        },
      ],
    },
    {
      title: 'Code BCD (Binary Coded Decimal)',
      content: [
        {
          type: 'text',
          text: "Le code **BCD** (Binary Coded Decimal) représente chaque chiffre décimal **séparément** sur **4 bits**. C'est fondamentalement différent de la conversion binaire classique : on code chiffre par chiffre, pas le nombre entier.",
        },
        {
          type: 'method',
          text: "Méthode : Codage BCD\n1. Écrire chaque chiffre décimal séparément\n2. Convertir chaque chiffre individuel en binaire sur exactement 4 bits\n3. Concaténer (coller) les groupes de 4 bits obtenus",
        },
        {
          type: 'text',
          text: "**Exemple : Coder $25$ en BCD**\n\nChiffre $2$ → $0010$\nChiffre $5$ → $0101$\n\n$(25)_{10}$ en BCD $= 0010\\ 0101$\n\nAttention : $(25)_{10}$ en binaire pur $= (11001)_2$ — ce sont deux choses différentes !",
        },
        {
          type: 'text',
          text: "**Exemple : Coder $89$ en BCD**\n\nChiffre $8$ → $1000$\nChiffre $9$ → $1001$\n\n$(89)_{10}$ en BCD $= 1000\\ 1001$",
        },
        {
          type: 'text',
          text: "**Exemple : Coder $304$ en BCD**\n\nChiffre $3$ → $0011$\nChiffre $0$ → $0000$\nChiffre $4$ → $0100$\n\n$(304)_{10}$ en BCD $= 0011\\ 0000\\ 0100$",
        },
        {
          type: 'tip',
          text: "ATTENTION : En BCD, les combinaisons $1010$ à $1111$ (soit $10$ à $15$) sont **interdites** car un chiffre décimal va de $0$ à $9$ seulement. Si vous obtenez ces codes, c'est une erreur ! Ne confondez jamais BCD et binaire pur : $25_{BCD} = 0010\\ 0101 \\neq 11001_2$.",
        },
      ],
    },
    {
      title: 'Code Gray (code réfléchi)',
      content: [
        {
          type: 'text',
          text: "Le **code Gray** est un code binaire dans lequel deux valeurs consécutives ne diffèrent que d'**un seul bit** (distance de Hamming = 1). Cette propriété le rend précieux pour les tableaux de Karnaugh et les capteurs de position.",
        },
        {
          type: 'table',
          headers: ['Décimal', 'Binaire', 'Gray', 'Différence (bits changés)'],
          rows: [
            ['$0$', '$000$', '$000$', '—'],
            ['$1$', '$001$', '$001$', '$1$ bit changé'],
            ['$2$', '$010$', '$011$', '$1$ bit changé'],
            ['$3$', '$011$', '$010$', '$1$ bit changé'],
            ['$4$', '$100$', '$110$', '$1$ bit changé'],
            ['$5$', '$101$', '$111$', '$1$ bit changé'],
            ['$6$', '$110$', '$101$', '$1$ bit changé'],
            ['$7$', '$111$', '$100$', '$1$ bit changé'],
          ],
        },
        {
          type: 'method',
          text: "Méthode : Conversion Binaire → Gray\n1. Le premier bit (MSB, bit de gauche) reste identique : G_{n} = B_{n}\n2. Pour chaque bit suivant : G_i = B_{i+1} XOR B_i (XOR du bit binaire courant et du bit binaire précédent)\n\nExemple : Binaire 1011 → Gray\nG3 = B3 = 1\nG2 = B3 XOR B2 = 1 XOR 0 = 1\nG1 = B2 XOR B1 = 0 XOR 1 = 1\nG0 = B1 XOR B0 = 1 XOR 1 = 0\nRésultat : Gray = 1110",
        },
        {
          type: 'method',
          text: "Méthode : Conversion Gray → Binaire\n1. Le premier bit (MSB) reste identique : B_{n} = G_{n}\n2. Pour chaque bit suivant : B_i = B_{i+1} XOR G_i (XOR du bit BINAIRE précédent déjà converti et du bit Gray courant)\n\nExemple : Gray 1110 → Binaire\nB3 = G3 = 1\nB2 = B3 XOR G2 = 1 XOR 1 = 0\nB1 = B2 XOR G1 = 0 XOR 1 = 1\nB0 = B1 XOR G0 = 1 XOR 0 = 1\nRésultat : Binaire = 1011",
        },
        {
          type: 'tip',
          text: "Rappel XOR : $0 \\oplus 0 = 0$, $0 \\oplus 1 = 1$, $1 \\oplus 0 = 1$, $1 \\oplus 1 = 0$. Le XOR retourne $1$ si les deux bits sont **différents**, $0$ s'ils sont **identiques**.",
        },
      ],
    },
    {
      title: 'Complément à 2 (représentation des nombres signés)',
      content: [
        {
          type: 'text',
          text: "Le **complément à 2** est la méthode standard utilisée par tous les processeurs modernes pour représenter les entiers relatifs (positifs et négatifs) en binaire.",
        },
        {
          type: 'text',
          text: "Sur $n$ bits, le complément à 2 permet de représenter les entiers de $-2^{n-1}$ à $2^{n-1}-1$.\n\nSur $8$ bits : de $-128$ à $+127$\nSur $16$ bits : de $-32768$ à $+32767$",
        },
        {
          type: 'method',
          text: "Méthode : Représenter un nombre négatif en complément à 2\n1. Écrire la valeur absolue du nombre en binaire sur n bits\n2. Inverser TOUS les bits (complément à 1 = NOT bit à bit)\n3. Ajouter 1 au résultat (en binaire)\n\nRègle clé : Le MSB (bit de gauche) vaut 0 pour les positifs, 1 pour les négatifs.",
        },
        {
          type: 'text',
          text: "**Exemple : Représenter $-5$ sur $8$ bits**\n\nÉtape 1 — $+5$ en binaire sur 8 bits : $00000101$\nÉtape 2 — Complément à 1 (inversion bit à bit) : $11111010$\nÉtape 3 — Ajouter $1$ : $11111010 + 1 = 11111011$\n\nDonc $-5$ sur 8 bits $= 11111011$",
        },
        {
          type: 'text',
          text: "**Exemple : Représenter $-89$ sur $8$ bits**\n\nÉtape 1 — $+89$ en binaire sur 8 bits : $01011001$\nÉtape 2 — Complément à 1 : $10100110$\nÉtape 3 — Ajouter $1$ : $10100110 + 1 = 10100111$\n\nDonc $-89$ sur 8 bits $= 10100111$",
        },
        {
          type: 'text',
          text: "**Vérification : Lire un nombre signé en complément à 2**\n\nSi le MSB est $1$, le nombre est négatif. Pour trouver sa valeur :\n1. Inverser tous les bits\n2. Ajouter $1$\n3. Lire le résultat et mettre un signe moins\n\nExemple : $11111011$ → MSB $= 1$ donc négatif\nInversion : $00000100$, Ajouter $1$ : $00000101 = 5$\nDonc $11111011 = -5$ ✓",
        },
        {
          type: 'tip',
          text: "Cas particuliers : $00000000 = 0$ et $10000000 = -128$ (sur 8 bits). La valeur $-128$ n'a pas d'opposé positif sur 8 bits (car $+128$ dépasse $+127$) !",
        },
      ],
    },
    {
      title: 'Addition en binaire',
      content: [
        {
          type: 'text',
          text: "Les règles d'addition en binaire sont les mêmes qu'en décimal, mais avec seulement $0$ et $1$. La retenue (carry) se propage vers la gauche.",
        },
        {
          type: 'table',
          headers: ['$A$', '$B$', 'Somme $S$', 'Retenue $C$'],
          rows: [
            ['$0$', '$0$', '$0$', '$0$'],
            ['$0$', '$1$', '$1$', '$0$'],
            ['$1$', '$0$', '$1$', '$0$'],
            ['$1$', '$1$', '$0$', '$1$ ← retenue !'],
          ],
        },
        {
          type: 'text',
          text: "**Règle clé** : $1 + 1 = 10_2$ (somme $= 0$, retenue $= 1$) et $1 + 1 + 1 = 11_2$ (somme $= 1$, retenue $= 1$).",
        },
        {
          type: 'text',
          text: "**Exemple : Additionner $(1011)_2 + (0110)_2$**\n\n```\n  Retenues :  1 1 1 0\n      A    :  1 0 1 1\n    + B    :  0 1 1 0\n            --------\n    Résultat: 1 0 0 0 1\n```\n\nVérification décimale : $11 + 6 = 17 = (10001)_2$ ✓",
        },
        {
          type: 'text',
          text: "**Exemple : Additionner $(10110011)_2 + (01001101)_2$**\n\n$179 + 77 = 256 = (100000000)_2$\n\nRésultat sur 8 bits : $00000000$ avec un bit de retenue $= 1$ → **débordement** (overflow) !",
        },
        {
          type: 'tip',
          text: "Débordement (overflow) : Si le résultat d'une addition sur $n$ bits dépasse $2^n - 1$ (non signé) ou sort de l'intervalle $[-2^{n-1}, 2^{n-1}-1]$ (signé), il y a un débordement. Le bit de retenue sortant indique ce problème.",
        },
      ],
    },
    {
      title: 'Exercices corrigés',
      content: [
        {
          type: 'exercise',
          text: "Exercice 1 : Convertir $(156)_{10}$ en binaire, octal et hexadécimal. Détailler toutes les étapes.",
        },
        {
          type: 'correction',
          text: "Binaire (divisions successives par 2) :\n156 ÷ 2 = 78 reste 0\n 78 ÷ 2 = 39 reste 0\n 39 ÷ 2 = 19 reste 1\n 19 ÷ 2 =  9 reste 1\n  9 ÷ 2 =  4 reste 1\n  4 ÷ 2 =  2 reste 0\n  2 ÷ 2 =  1 reste 0\n  1 ÷ 2 =  0 reste 1\nLecture de bas en haut : (156)₁₀ = (10011100)₂\n\nOctal (regroupement par 3 bits) :\n10011100 → 010 | 011 | 100 → 2, 3, 4\n(156)₁₀ = (234)₈\nVérif : 2×64 + 3×8 + 4 = 128 + 24 + 4 = 156 ✓\n\nHexadécimal (regroupement par 4 bits) :\n10011100 → 1001 | 1100 → 9, C\n(156)₁₀ = (9C)₁₆\nVérif : 9×16 + 12 = 144 + 12 = 156 ✓",
        },
        {
          type: 'exercise',
          text: "Exercice 2 : Convertir $(10110011)_2$ en décimal, octal et hexadécimal.",
        },
        {
          type: 'correction',
          text: "Décimal :\n1×128 + 0×64 + 1×32 + 1×16 + 0×8 + 0×4 + 1×2 + 1×1\n= 128 + 32 + 16 + 2 + 1 = (179)₁₀\n\nOctal (groupes de 3) :\n010 | 110 | 011 → 2, 6, 3\n(10110011)₂ = (263)₈\n\nHexadécimal (groupes de 4) :\n1011 | 0011 → B, 3\n(10110011)₂ = (B3)₁₆",
        },
        {
          type: 'exercise',
          text: "Exercice 3 : Coder $89$ en BCD puis représenter $-89$ en complément à 2 sur 8 bits. Vérifier.",
        },
        {
          type: 'correction',
          text: "BCD de 89 :\nChiffre 8 → 1000\nChiffre 9 → 1001\n89 en BCD = 1000 1001\n\nComplément à 2 de -89 sur 8 bits :\nÉtape 1 — +89 en binaire sur 8 bits : 01011001\nÉtape 2 — Complément à 1 (inversion) : 10100110\nÉtape 3 — Ajouter 1 : 10100110 + 1 = 10100111\n\n-89 sur 8 bits = 10100111\n\nVérification (retour au décimal) :\nMSB = 1 donc négatif.\nInversion de 10100111 → 01011000, ajouter 1 → 01011001\n01011001 = 64+16+8+1 = 89\nDonc 10100111 représente bien -89 ✓",
        },
        {
          type: 'exercise',
          text: "Exercice 4 : Convertir $(1011)_2$ en code Gray. Puis reconvertir le code Gray obtenu en binaire pour vérifier.",
        },
        {
          type: 'correction',
          text: "Binaire 1011 → Gray :\nG3 = B3 = 1\nG2 = B3 XOR B2 = 1 XOR 0 = 1\nG1 = B2 XOR B1 = 0 XOR 1 = 1\nG0 = B1 XOR B0 = 1 XOR 1 = 0\nCode Gray = 1110\n\nVérification Gray 1110 → Binaire :\nB3 = G3 = 1\nB2 = B3 XOR G2 = 1 XOR 1 = 0\nB1 = B2 XOR G1 = 0 XOR 1 = 1\nB0 = B1 XOR G0 = 1 XOR 0 = 1\nBinaire = 1011 ✓",
        },
      ],
    },
  ],
  erreurs: [
    "Confondre BCD et conversion binaire classique : $25_{BCD} = 0010\\ 0101 \\neq 11001_2$",
    "Oublier de compléter les groupes de bits avec des $0$ à gauche avant le regroupement (octal/hexa)",
    "Se tromper dans le sens de lecture des restes des divisions successives : on lit **de bas en haut**",
    "Oublier d'ajouter $1$ après l'inversion (complément à 1) pour obtenir le complément à 2",
    "Dans la conversion Gray → Binaire, utiliser le bit Gray précédent au lieu du bit BINAIRE précédent déjà converti",
    "En BCD, accepter des codes $\\geq 1010$ (interdits car > 9 en décimal)",
  ],
  bilan: [
    "Je sais convertir un entier décimal en binaire par divisions successives",
    "Je sais convertir du binaire en décimal par la méthode des puissances de 2",
    "Je sais convertir entre binaire, octal et hexadécimal par regroupement de bits",
    "Je sais coder un nombre décimal en BCD (chiffre par chiffre sur 4 bits)",
    "Je sais convertir entre binaire et code Gray dans les deux sens",
    "Je sais représenter un entier négatif en complément à 2 sur $n$ bits",
    "Je sais additionner deux nombres binaires en gérant la retenue",
  ],
}
