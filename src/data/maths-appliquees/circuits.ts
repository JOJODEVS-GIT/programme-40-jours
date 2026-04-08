import type { ChapterContent } from '../maths-generales/types'

export const circuitsContent: ChapterContent = {
  slug: 'circuits',
  title: 'Circuits Électroniques',
  icon: '⚡',
  importance: 'Important - conception de circuits combinatoires',
  days: 'Jours 28-30',
  sections: [
    {
      title: 'Demi-additionneur (Half Adder)',
      content: [
        {
          type: 'text',
          text: "Le **demi-additionneur** additionne $2$ bits $A$ et $B$, et produit une **Somme** $S$ et une **Retenue** $C$ (Carry). Il ne gère pas de retenue entrante.",
        },
        {
          type: 'table',
          headers: ['$A$', '$B$', '$S$ (Somme)', '$C$ (Retenue)'],
          rows: [
            ['$0$', '$0$', '$0$', '$0$'],
            ['$0$', '$1$', '$1$', '$0$'],
            ['$1$', '$0$', '$1$', '$0$'],
            ['$1$', '$1$', '$0$', '$1$'],
          ],
        },
        {
          type: 'text',
          text: "Équations logiques du demi-additionneur :",
        },
        {
          type: 'formula',
          math: 'S = A \\oplus B \\quad \\text{(XOR)}',
        },
        {
          type: 'formula',
          math: 'C = A \\cdot B \\quad \\text{(AND)}',
        },
        {
          type: 'text',
          text: "**Interprétation** : La somme $S$ vaut $1$ quand $A$ et $B$ sont différents (XOR). La retenue $C$ vaut $1$ seulement quand $A = 1$ et $B = 1$ (car $1 + 1 = 10_2$).",
        },
        {
          type: 'text',
          text: "**Implémentation** : Le demi-additionneur utilise :\n- $1$ porte XOR pour calculer $S$\n- $1$ porte AND pour calculer $C$\nTotal : $2$ portes logiques.",
        },
        {
          type: 'tip',
          text: "Le demi-additionneur ne gère PAS de retenue entrante ($C_{in}$). Pour additionner des nombres multi-bits (avec propagation de retenue), il faut un additionneur complet.",
        },
      ],
    },
    {
      title: 'Additionneur complet (Full Adder)',
      content: [
        {
          type: 'text',
          text: "L'**additionneur complet** additionne $2$ bits $A$ et $B$ avec une **retenue entrante** $C_{in}$. Il produit une **Somme** $S$ et une **retenue sortante** $C_{out}$. C'est le bloc de base des additionneurs multi-bits.",
        },
        {
          type: 'table',
          headers: ['$A$', '$B$', '$C_{in}$', '$S$', '$C_{out}$'],
          rows: [
            ['$0$', '$0$', '$0$', '$0$', '$0$'],
            ['$0$', '$0$', '$1$', '$1$', '$0$'],
            ['$0$', '$1$', '$0$', '$1$', '$0$'],
            ['$0$', '$1$', '$1$', '$0$', '$1$'],
            ['$1$', '$0$', '$0$', '$1$', '$0$'],
            ['$1$', '$0$', '$1$', '$0$', '$1$'],
            ['$1$', '$1$', '$0$', '$0$', '$1$'],
            ['$1$', '$1$', '$1$', '$1$', '$1$'],
          ],
        },
        {
          type: 'text',
          text: "Équations logiques de l'additionneur complet :",
        },
        {
          type: 'formula',
          math: 'S = A \\oplus B \\oplus C_{in}',
        },
        {
          type: 'formula',
          math: 'C_{out} = A \\cdot B + C_{in} \\cdot (A \\oplus B)',
        },
        {
          type: 'text',
          text: "**Forme alternative** pour $C_{out}$ (majorité — vaut $1$ si au moins deux entrées parmi $A, B, C_{in}$ valent $1$) :",
        },
        {
          type: 'formula',
          math: 'C_{out} = A \\cdot B + A \\cdot C_{in} + B \\cdot C_{in}',
        },
        {
          type: 'text',
          text: "**Exemple d'utilisation : addition de $(1011)_2 + (0110)_2$ avec additionneur 4 bits**\n\nOn chaîne 4 additionneurs complets (le $C_{out}$ de chaque étage alimente le $C_{in}$ de l'étage suivant) :\n\n```\nBit 0 : A=1, B=0, Cin=0  → S=1, Cout=0\nBit 1 : A=1, B=1, Cin=0  → S=0, Cout=1\nBit 2 : A=0, B=1, Cin=1  → S=0, Cout=1\nBit 3 : A=1, B=0, Cin=1  → S=0, Cout=1\nRésultat : Cout=1, S=0001 → 10001₂ = 17₁₀\n```\nVérification : $11 + 6 = 17$ ✓",
        },
        {
          type: 'tip',
          text: "Un additionneur complet peut être réalisé avec **2 demi-additionneurs et une porte OU** : on calcule d'abord $A \\oplus B$ avec un demi-additionneur, puis on ajoute $C_{in}$ avec un second demi-additionneur. Le $C_{out}$ final est le OU des deux retenues partielles.",
        },
      ],
    },
    {
      title: 'Comparateur 1 bit',
      content: [
        {
          type: 'text',
          text: "Le **comparateur 1 bit** compare deux bits $A$ et $B$ et fournit trois sorties mutuellement exclusives : $E$ (égalité $A=B$), $G$ ($A > B$), $L$ ($A < B$).",
        },
        {
          type: 'table',
          headers: ['$A$', '$B$', '$E\\ (A=B)$', '$G\\ (A>B)$', '$L\\ (A<B)$'],
          rows: [
            ['$0$', '$0$', '$1$', '$0$', '$0$'],
            ['$0$', '$1$', '$0$', '$0$', '$1$'],
            ['$1$', '$0$', '$0$', '$1$', '$0$'],
            ['$1$', '$1$', '$1$', '$0$', '$0$'],
          ],
        },
        {
          type: 'text',
          text: "Équations logiques du comparateur 1 bit :",
        },
        {
          type: 'formula',
          math: 'E = \\overline{A \\oplus B} = A \\cdot B + \\overline{A} \\cdot \\overline{B}',
        },
        {
          type: 'formula',
          math: 'G = A \\cdot \\overline{B}',
        },
        {
          type: 'formula',
          math: 'L = \\overline{A} \\cdot B',
        },
        {
          type: 'text',
          text: "**Vérification des équations** :\n\n$G = A \\cdot \\overline{B}$ : $A=1, B=0$ → $G = 1 \\cdot 1 = 1$ ✓. Tous les autres cas → $G = 0$ ✓\n\n$L = \\overline{A} \\cdot B$ : $A=0, B=1$ → $L = 1 \\cdot 1 = 1$ ✓. Tous les autres cas → $L = 0$ ✓\n\n$E = A \\cdot B + \\overline{A} \\cdot \\overline{B}$ : $A=0, B=0$ → $0 + 1 = 1$ ✓. $A=1, B=1$ → $1 + 0 = 1$ ✓. $A=0, B=1$ → $0 + 0 = 0$ ✓",
        },
        {
          type: 'tip',
          text: "Notez que $E + G + L = 1$ toujours (l'une des trois sorties est toujours active). De plus, $E = \\overline{A \\oplus B}$ (XNOR) et $G + L = A \\oplus B$ (XOR).",
        },
      ],
    },
    {
      title: 'Multiplexeur (MUX)',
      content: [
        {
          type: 'text',
          text: "Le **multiplexeur** (MUX) est un circuit combinatoire qui sélectionne **une entrée parmi $N$** et la dirige vers une **sortie unique**, en fonction des **lignes de sélection** $S$. C'est un « aiguillage » numérique.",
        },
        {
          type: 'text',
          text: "**MUX 2 vers 1** — 1 bit de sélection $S$, entrées $I_0$ et $I_1$ :\n\nSi $S = 0$ → $Y = I_0$ (on sélectionne l'entrée $0$)\nSi $S = 1$ → $Y = I_1$ (on sélectionne l'entrée $1$)",
        },
        {
          type: 'formula',
          math: 'Y = \\overline{S} \\cdot I_0 + S \\cdot I_1',
        },
        {
          type: 'text',
          text: "**MUX 4 vers 1** — 2 bits de sélection $S_1 S_0$, entrées $I_0, I_1, I_2, I_3$ :\n\n$S_1 S_0 = 00$ → $Y = I_0$\n$S_1 S_0 = 01$ → $Y = I_1$\n$S_1 S_0 = 10$ → $Y = I_2$\n$S_1 S_0 = 11$ → $Y = I_3$",
        },
        {
          type: 'formula',
          math: 'Y = \\overline{S_1} \\cdot \\overline{S_0} \\cdot I_0 + \\overline{S_1} \\cdot S_0 \\cdot I_1 + S_1 \\cdot \\overline{S_0} \\cdot I_2 + S_1 \\cdot S_0 \\cdot I_3',
        },
        {
          type: 'text',
          text: "**Application clé : réaliser n'importe quelle fonction booléenne avec un MUX**\n\nPour réaliser $F(A, B)$ avec un MUX 4 vers 1 :\n1. Poser $S_1 = A$ et $S_0 = B$ (les variables sont les bits de sélection)\n2. Pour chaque combinaison $(A, B)$, calculer $F$ et affecter la valeur à $I_{correspondant}$\n\nExemple : $F = A \\oplus B$ avec MUX 4→1 ($S_1 = A$, $S_0 = B$) :\n$A=0, B=0$ : $F=0$ → $I_0 = 0$\n$A=0, B=1$ : $F=1$ → $I_1 = 1$\n$A=1, B=0$ : $F=1$ → $I_2 = 1$\n$A=1, B=1$ : $F=0$ → $I_3 = 0$",
        },
        {
          type: 'tip',
          text: "Un MUX $2^n$ vers $1$ utilise $n$ bits de sélection et $2^n$ entrées de données. Règle générale : un MUX $2^n$ vers $1$ peut réaliser **n'importe quelle fonction booléenne** à $n$ variables en connectant les entrées $I_k$ aux valeurs $0$ ou $1$ de la table de vérité.",
        },
      ],
    },
    {
      title: 'Démultiplexeur (DEMUX)',
      content: [
        {
          type: 'text',
          text: "Le **démultiplexeur** (DEMUX) fait l'opération inverse du MUX : il dirige **une entrée unique** $E$ vers **l'une des $N$ sorties**, en fonction des lignes de sélection $S$. Une seule sortie est active à la fois.",
        },
        {
          type: 'text',
          text: "**DEMUX 1 vers 4** — 2 bits de sélection $S_1 S_0$, entrée $E$, sorties $Y_0, Y_1, Y_2, Y_3$ :\n\n$S_1 S_0 = 00$ → $Y_0 = E$, $Y_1 = Y_2 = Y_3 = 0$\n$S_1 S_0 = 01$ → $Y_1 = E$, $Y_0 = Y_2 = Y_3 = 0$\n$S_1 S_0 = 10$ → $Y_2 = E$, $Y_0 = Y_1 = Y_3 = 0$\n$S_1 S_0 = 11$ → $Y_3 = E$, $Y_0 = Y_1 = Y_2 = 0$",
        },
        {
          type: 'formula',
          math: 'Y_0 = E \\cdot \\overline{S_1} \\cdot \\overline{S_0}',
        },
        {
          type: 'formula',
          math: 'Y_1 = E \\cdot \\overline{S_1} \\cdot S_0',
        },
        {
          type: 'formula',
          math: 'Y_2 = E \\cdot S_1 \\cdot \\overline{S_0}',
        },
        {
          type: 'formula',
          math: 'Y_3 = E \\cdot S_1 \\cdot S_0',
        },
        {
          type: 'text',
          text: "**Exemple** : Si $S_1 S_0 = 10$ et $E = 1$, alors $Y_2 = 1 \\cdot 1 \\cdot 1 = 1$ et $Y_0 = Y_1 = Y_3 = 0$.\n\nSi $E = 0$, toutes les sorties sont à $0$ quelle que soit la sélection.",
        },
        {
          type: 'tip',
          text: "Remarque fondamentale : chaque équation $Y_i = E \\cdot (\\text{minterme de }S_1 S_0)$. Si $E = 1$ en permanence, le DEMUX se comporte comme un **décodeur** : il active exactement la sortie $i$ correspondant au code binaire $S_1 S_0 = i$.",
        },
      ],
    },
    {
      title: 'Codeur et Décodeur',
      content: [
        {
          type: 'text',
          text: "Le **décodeur** convertit un code binaire de $n$ bits en $2^n$ sorties, dont **une seule est active** ($= 1$) à la fois. Il réalise la fonction de sélection d'une ligne parmi $2^n$.",
        },
        {
          type: 'text',
          text: "**Décodeur 2 vers 4** (entrées $A$ et $B$, sorties $Y_0, Y_1, Y_2, Y_3$) :",
        },
        {
          type: 'table',
          headers: ['$A$', '$B$', '$Y_0$', '$Y_1$', '$Y_2$', '$Y_3$'],
          rows: [
            ['$0$', '$0$', '$1$', '$0$', '$0$', '$0$'],
            ['$0$', '$1$', '$0$', '$1$', '$0$', '$0$'],
            ['$1$', '$0$', '$0$', '$0$', '$1$', '$0$'],
            ['$1$', '$1$', '$0$', '$0$', '$0$', '$1$'],
          ],
        },
        {
          type: 'formula',
          math: 'Y_0 = \\overline{A} \\cdot \\overline{B}, \\quad Y_1 = \\overline{A} \\cdot B, \\quad Y_2 = A \\cdot \\overline{B}, \\quad Y_3 = A \\cdot B',
        },
        {
          type: 'text',
          text: "**Application : réaliser une fonction avec un décodeur**\n\nUn décodeur $n$ vers $2^n$ génère tous les mintermes. Pour réaliser $F$, on connecte une porte OU entre les sorties correspondant aux mintermes de $F$.\n\nExemple : $F(A,B) = A \\oplus B = \\sum m(1, 2)$\n\nAvec le décodeur 2→4 : $F = Y_1 + Y_2 = \\overline{A} \\cdot B + A \\cdot \\overline{B}$ ✓",
        },
        {
          type: 'text',
          text: "Le **codeur** (encodeur) fait l'inverse : il convertit $2^n$ entrées (dont **une seule est active** à la fois) en un code binaire de $n$ bits. Par exemple, un codeur 4 vers 2 :\n\n$I_0 = 1 \\Rightarrow S_1 S_0 = 00$\n$I_1 = 1 \\Rightarrow S_1 S_0 = 01$\n$I_2 = 1 \\Rightarrow S_1 S_0 = 10$\n$I_3 = 1 \\Rightarrow S_1 S_0 = 11$",
        },
        {
          type: 'formula',
          math: 'S_0 = I_1 + I_3, \\quad S_1 = I_2 + I_3',
        },
        {
          type: 'tip',
          text: "Le décodeur est très puissant : il peut réaliser **n'importe quelle fonction** à $n$ variables en connectant ses sorties à une porte OU. C'est une alternative directe au MUX pour l'implémentation de fonctions logiques.",
        },
      ],
    },
    {
      title: 'Méthode de conception d\'un circuit combinatoire',
      content: [
        {
          type: 'method',
          text: "Méthode : Concevoir un circuit combinatoire en 4 étapes\n1. ANALYSER l'énoncé : identifier les entrées (variables) et les sorties (fonctions)\n2. TABLE DE VÉRITÉ : lister toutes les combinaisons d'entrées (2^n lignes) et calculer la sortie\n3. SIMPLIFIER les équations : par Karnaugh ou algèbre de Boole\n4. LOGIGRAMME : dessiner le schéma logique avec les portes correspondant aux équations simplifiées",
        },
        {
          type: 'text',
          text: "**Exemple complet : Circuit détectant si un nombre de 3 bits est strictement supérieur à 5**",
        },
        {
          type: 'text',
          text: "**Étape 1** — Entrées : $A, B, C$ ($3$ bits représentant un nombre de $0$ à $7$). Sortie : $F = 1$ si $ABC_2 > 5$.",
        },
        {
          type: 'text',
          text: "**Étape 2** — Table de vérité :",
        },
        {
          type: 'table',
          headers: ['$A$', '$B$', '$C$', 'Valeur décimale', '$F$'],
          rows: [
            ['$0$', '$0$', '$0$', '$0$', '$0$'],
            ['$0$', '$0$', '$1$', '$1$', '$0$'],
            ['$0$', '$1$', '$0$', '$2$', '$0$'],
            ['$0$', '$1$', '$1$', '$3$', '$0$'],
            ['$1$', '$0$', '$0$', '$4$', '$0$'],
            ['$1$', '$0$', '$1$', '$5$', '$0$'],
            ['$1$', '$1$', '$0$', '$6$', '$1$'],
            ['$1$', '$1$', '$1$', '$7$', '$1$'],
          ],
        },
        {
          type: 'text',
          text: "**Étape 3** — Simplification : $F = \\sum m(6, 7)$",
        },
        {
          type: 'formula',
          math: 'F = A \\cdot B \\cdot \\overline{C} + A \\cdot B \\cdot C = A \\cdot B \\cdot (\\overline{C} + C) = A \\cdot B',
        },
        {
          type: 'text',
          text: "**Étape 4** — Logigramme : Le circuit se réduit à une **seule porte AND** entre $A$ et $B$. $C$ n'intervient pas dans la sortie : le nombre est $> 5$ ssi $A = 1$ ET $B = 1$ (valeurs $6 = 110_2$ et $7 = 111_2$).",
        },
        {
          type: 'tip',
          text: "Toujours vérifier le résultat simplifié sur quelques cas de la table de vérité. Ici : $A=1, B=1, C=0 \\Rightarrow F = 1 \\cdot 1 = 1$ (valeur $6 > 5$) ✓. $A=1, B=0, C=1 \\Rightarrow F = 1 \\cdot 0 = 0$ (valeur $5$ non strictement $> 5$) ✓.",
        },
      ],
    },
    {
      title: 'Exercices corrigés',
      content: [
        {
          type: 'exercise',
          text: "Exercice 1 : Donner la table de vérité et les équations d'un **demi-soustracteur** (entrées $A$ et $B$, sorties $D$ = différence et $E$ = emprunt, avec $D = A - B$). Comparer avec le demi-additionneur.",
        },
        {
          type: 'correction',
          text: "Table de vérité du demi-soustracteur :\nA=0, B=0 : D=0, E=0  (0-0=0, pas d'emprunt)\nA=0, B=1 : D=1, E=1  (0-1 : on emprunte, D=1 car 10₂-1=1)\nA=1, B=0 : D=1, E=0  (1-0=1, pas d'emprunt)\nA=1, B=1 : D=0, E=0  (1-1=0, pas d'emprunt)\n\nÉquations (par lecture directe de la table) :\nD = A XOR B = A ⊕ B  (même équation que la somme du demi-additionneur !)\nE = A barre . B     (emprunt quand B=1 et A=0)\n\nComparaison avec le demi-additionneur :\n- Somme S = Différence D = A ⊕ B (identiques)\n- Retenue C = A . B  ≠  Emprunt E = A barre . B\nDifférence : dans la retenue A et B sont deux 1 ; dans l'emprunt A=0 et B=1.",
        },
        {
          type: 'exercise',
          text: "Exercice 2 : Réaliser la fonction $F(A,B) = A \\oplus B$ avec un MUX 4 vers 1. Préciser les valeurs de $I_0, I_1, I_2, I_3$ et les connexions de sélection.",
        },
        {
          type: 'correction',
          text: "On prend A et B comme bits de sélection : S1 = A, S0 = B.\n\nTable de vérité de XOR et affectation des entrées du MUX :\nA=0, B=0 : F=0  → S1S0=00 → I0 = 0\nA=0, B=1 : F=1  → S1S0=01 → I1 = 1\nA=1, B=0 : F=1  → S1S0=10 → I2 = 1\nA=1, B=1 : F=0  → S1S0=11 → I3 = 0\n\nCâblage : I0 = GND (0), I1 = VCC (1), I2 = VCC (1), I3 = GND (0)\nS1 connecté à A, S0 connecté à B.\n\nVérification : Y = S1bar.S0bar.I0 + S1bar.S0.I1 + S1.S0bar.I2 + S1.S0.I3\n= S1bar.S0bar.0 + S1bar.S0.1 + S1.S0bar.1 + S1.S0.0\n= A barre.B + A.B barre = A XOR B ✓",
        },
        {
          type: 'exercise',
          text: "Exercice 3 : Concevoir un circuit qui détecte si un nombre de 3 bits $(A, B, C)$ est un **multiple de 3** (valeurs : $0, 3, 6$). Appliquer les 4 étapes.",
        },
        {
          type: 'correction',
          text: "Étape 1 — Entrées : A, B, C. Sortie : F = 1 si ABC₂ est multiple de 3.\n\nÉtape 2 — Table de vérité :\n0 (000) → F=1  (0 = 0×3)\n1 (001) → F=0\n2 (010) → F=0\n3 (011) → F=1  (3 = 1×3)\n4 (100) → F=0\n5 (101) → F=0\n6 (110) → F=1  (6 = 2×3)\n7 (111) → F=0\n\nÉtape 3 — F = Σm(0, 3, 6)\n\nTableau de Karnaugh :\nA\\BC | 00  01  11  10\n  0  |  1   0   1   0\n  1  |  0   0   0   1\n\nGroupements :\n- m3 (A=0,B=1,C=1) : case isolée (aucun 1 adjacent) → A barre.B.C\n- m6 (A=1,B=1,C=0) : case isolée → A.B.C barre\n- m0 (A=0,B=0,C=0) : case isolée → A barre.B barre.C barre\n\nF = A barre.B barre.C barre + A barre.B.C + A.B.C barre\n\nÉtape 4 — Logigramme : 3 portes NON (pour A barre, B barre, C barre) + 3 portes AND à 3 entrées + 1 porte OU à 3 entrées = 7 portes au total.\n\nVérification :\n- F(0,0,0) : 1.1.1 = 1 ✓\n- F(0,1,1) : 1.1.1 = 1 ✓\n- F(1,1,0) : 1.1.1 = 1 ✓\n- F(1,0,1) : tous les termes = 0 ✓",
        },
        {
          type: 'exercise',
          text: "Exercice 4 : Vérifier que l'additionneur complet peut s'implémenter avec 2 demi-additionneurs et une porte OU. Donner le schéma en blocs.",
        },
        {
          type: 'correction',
          text: "Structure avec 2 demi-additionneurs (HA) :\n\nHA1 : entrées A et B\n  - Somme S1 = A ⊕ B\n  - Retenue C1 = A . B\n\nHA2 : entrées S1 et Cin\n  - Somme S = S1 ⊕ Cin = (A ⊕ B) ⊕ Cin = A ⊕ B ⊕ Cin  ✓ (équation de S)\n  - Retenue C2 = S1 . Cin = (A ⊕ B) . Cin\n\nPorte OU finale : Cout = C1 + C2 = A.B + (A ⊕ B).Cin  ✓ (équation de Cout)\n\nSchéma en blocs :\nA, B ──→ [HA1] ──S1──→ [HA2] ──S──→ Sortie S\n                └──C1──→ [OU] ──→ Cout\nCin ──────────────────→ [HA2]\n                      └──C2──→ [OU]\n\nNombre de portes : 2 HA × (1 XOR + 1 AND) + 1 OR = 5 portes logiques.",
        },
      ],
    },
  ],
  erreurs: [
    "Confondre les équations du demi-additionneur ($C = A \\cdot B$) et du demi-soustracteur ($E = \\overline{A} \\cdot B$)",
    "Oublier la retenue entrante $C_{in}$ dans les équations de l'additionneur complet",
    "Se tromper dans les équations du DEMUX : oublier de multiplier par l'entrée $E$ (sans $E$, c'est un décodeur, pas un DEMUX)",
    "Pour le MUX, oublier que l'ordre des sélections est $S_{n-1}, \\ldots, S_1, S_0$ (MSB en premier)",
    "Ne pas suivre les 4 étapes de conception dans l'ordre — surtout sauter la simplification",
    "Oublier de simplifier les équations avant de dessiner le logigramme (circuit plus complexe et coûteux)",
  ],
  bilan: [
    "Je connais le demi-additionneur ($S = A \\oplus B$, $C = A \\cdot B$) et l'additionneur complet ($S = A \\oplus B \\oplus C_{in}$)",
    "Je sais chaîner des additionneurs complets pour additionner des nombres multi-bits",
    "Je sais utiliser un comparateur 1 bit ($E$, $G$, $L$) et justifier ses équations",
    "Je connais le MUX et sais l'utiliser pour implémenter n'importe quelle fonction booléenne",
    "Je connais le DEMUX et sais que DEMUX avec $E=1$ se comporte comme un décodeur",
    "Je sais utiliser un décodeur pour réaliser une fonction par OU des mintermes",
    "Je sais concevoir un circuit combinatoire en 4 étapes : analyse, table de vérité, simplification, logigramme",
  ],
}
