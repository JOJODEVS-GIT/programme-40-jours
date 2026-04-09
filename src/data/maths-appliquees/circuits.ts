import type { ChapterContent } from '../maths-generales/types'

export const circuitsContent: ChapterContent = {
  slug: 'circuits',
  title: 'Circuits Électroniques',
  icon: '⚡',
  importance: 'Chapitre très concret et rentable en examen. Les circuits combinatoires (additionneurs, MUX, décodeurs) sont des questions classiques avec une méthode systématique en 4 étapes. Bien maîtrisé = points quasi-garantis.',
  days: 'Jours 28-30',
  sections: [
    // ═══════════════════════════════════════
    // SECTION 1 : DEMI-ADDITIONNEUR
    // ═══════════════════════════════════════
    {
      title: '1. Demi-additionneur (Half Adder)',
      content: [
        {
          type: 'text',
          text: 'Le **demi-additionneur** est le circuit le plus simple : il additionne **2 bits** $A$ et $B$ et produit une **Somme** $S$ et une **Retenue** $C$ (Carry). Il ne gère pas de retenue entrante.',
        },
        {
          type: 'tip',
          text: 'Analogie : c\'est comme additionner deux chiffres à la main. $0 + 0 = 0$, $0 + 1 = 1$, $1 + 0 = 1$, mais $1 + 1 = 10_2$ (on écrit $0$ et on retient $1$). La somme $S$ est le chiffre des unités, la retenue $C$ est le chiffre qu\'on reporte.',
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
          text: 'Équations logiques :',
        },
        {
          type: 'formula',
          math: 'S = A \\oplus B \\quad \\text{(XOR)} \\qquad C = A \\cdot B \\quad \\text{(AND)}',
        },
        {
          type: 'text',
          text: '**Interprétation** : $S$ vaut $1$ quand $A$ et $B$ sont **différents** (XOR = "ou exclusif"). $C$ vaut $1$ seulement quand les **deux** valent $1$ (AND). Coût : **2 portes** (1 XOR + 1 AND).',
        },
        {
          type: 'tip',
          text: 'Le demi-additionneur ne gère PAS de retenue entrante $C_{in}$. Pour additionner des nombres multi-bits (avec propagation de retenue), il faut un **additionneur complet**.',
        },
      ],
    },

    // ═══════════════════════════════════════
    // SECTION 2 : ADDITIONNEUR COMPLET
    // ═══════════════════════════════════════
    {
      title: '2. Additionneur complet (Full Adder)',
      content: [
        {
          type: 'text',
          text: 'L\'**additionneur complet** additionne $2$ bits $A$ et $B$ **plus une retenue entrante** $C_{in}$. Il produit une Somme $S$ et une Retenue sortante $C_{out}$. C\'est le bloc de base pour additionner des nombres multi-bits.',
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
          text: 'Équations logiques :',
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
          text: '**Forme alternative** de $C_{out}$ (fonction majorité — vaut $1$ si **au moins 2** entrées sur 3 valent $1$) :',
        },
        {
          type: 'formula',
          math: 'C_{out} = A \\cdot B + A \\cdot C_{in} + B \\cdot C_{in}',
        },
        {
          type: 'method',
          text: '**Méthode : Construire un additionneur $n$ bits (Ripple Carry)**\n\nPour additionner deux nombres de $n$ bits, on chaîne $n$ additionneurs complets :\n**Étape 1** : Le $C_{in}$ du bit 0 (LSB) est mis à $0$.\n**Étape 2** : Le $C_{out}$ de chaque étage alimente le $C_{in}$ de l\'étage suivant.\n**Étape 3** : Le $C_{out}$ du dernier étage (MSB) est le bit de retenue finale (overflow).\n\nExemple : $(1011)_2 + (0110)_2$\nBit 0 : $A=1, B=0, C_{in}=0$ → $S=1, C_{out}=0$\nBit 1 : $A=1, B=1, C_{in}=0$ → $S=0, C_{out}=1$\nBit 2 : $A=0, B=1, C_{in}=1$ → $S=0, C_{out}=1$\nBit 3 : $A=1, B=0, C_{in}=1$ → $S=0, C_{out}=1$\nRésultat : $C_{out}=1$, $S=0001$ → $(10001)_2 = 17_{10}$. Vérification : $11 + 6 = 17$ ✓',
        },
        {
          type: 'tip',
          text: 'Un additionneur complet = **2 demi-additionneurs + 1 porte OU** :\nHA1 calcule $A \\oplus B$ et $A \\cdot B$, puis HA2 ajoute $C_{in}$. Le $C_{out}$ final est le OU des deux retenues partielles.',
        },
      ],
    },

    // ═══════════════════════════════════════
    // SECTION 3 : COMPARATEUR
    // ═══════════════════════════════════════
    {
      title: '3. Comparateur 1 bit',
      content: [
        {
          type: 'text',
          text: 'Le **comparateur 1 bit** compare deux bits $A$ et $B$ et fournit **3 sorties mutuellement exclusives** :',
        },
        {
          type: 'table',
          headers: ['$A$', '$B$', '$E$ ($A=B$)', '$G$ ($A>B$)', '$L$ ($A<B$)'],
          rows: [
            ['$0$', '$0$', '$1$', '$0$', '$0$'],
            ['$0$', '$1$', '$0$', '$0$', '$1$'],
            ['$1$', '$0$', '$0$', '$1$', '$0$'],
            ['$1$', '$1$', '$1$', '$0$', '$0$'],
          ],
        },
        {
          type: 'text',
          text: 'Équations logiques :',
        },
        {
          type: 'formula',
          math: 'E = \\overline{A \\oplus B} = A \\cdot B + \\overline{A} \\cdot \\overline{B} \\quad \\text{(XNOR)}',
        },
        {
          type: 'formula',
          math: 'G = A \\cdot \\overline{B} \\qquad L = \\overline{A} \\cdot B',
        },
        {
          type: 'text',
          text: '**Vérification** :\n$G$ : $A=1, B=0$ → $G = 1 \\cdot 1 = 1$ ✓. Tous les autres cas → $G = 0$ ✓.\n$E$ : $A=B=0$ → $0 + 1 = 1$ ✓. $A=B=1$ → $1 + 0 = 1$ ✓.\nDe plus : $E + G + L = 1$ toujours (exactement une sortie active).',
        },
        {
          type: 'tip',
          text: 'Relation utile : $E = \\overline{A \\oplus B}$ (XNOR) et $G + L = A \\oplus B$ (XOR). Le comparateur est au cœur des circuits de contrôle d\'égalité (mot de passe, adresse mémoire).',
        },
      ],
    },

    // ═══════════════════════════════════════
    // SECTION 4 : MULTIPLEXEUR
    // ═══════════════════════════════════════
    {
      title: '4. Multiplexeur (MUX)',
      content: [
        {
          type: 'text',
          text: 'Le **multiplexeur** (MUX) est un **aiguillage numérique** : il sélectionne **une entrée parmi $2^n$** et la dirige vers une sortie unique, grâce à $n$ bits de sélection.',
        },
        {
          type: 'text',
          text: '**MUX 2 vers 1** ($1$ bit de sélection $S$) :',
        },
        {
          type: 'formula',
          math: 'Y = \\overline{S} \\cdot I_0 + S \\cdot I_1',
        },
        {
          type: 'text',
          text: 'Si $S = 0$ → $Y = I_0$. Si $S = 1$ → $Y = I_1$.',
        },
        {
          type: 'text',
          text: '**MUX 4 vers 1** ($2$ bits de sélection $S_1 S_0$) :',
        },
        {
          type: 'formula',
          math: 'Y = \\overline{S_1} \\cdot \\overline{S_0} \\cdot I_0 + \\overline{S_1} \\cdot S_0 \\cdot I_1 + S_1 \\cdot \\overline{S_0} \\cdot I_2 + S_1 \\cdot S_0 \\cdot I_3',
        },
        {
          type: 'method',
          text: '**Méthode : Réaliser une fonction booléenne avec un MUX**\n\nPour implémenter $F(A, B)$ avec un MUX $4 \\to 1$ :\n**Étape 1** : Connecter les variables aux bits de sélection : $S_1 = A$, $S_0 = B$.\n**Étape 2** : Pour chaque combinaison $(A, B)$, lire la valeur de $F$ dans la table de vérité.\n**Étape 3** : Connecter chaque entrée $I_k$ à la valeur correspondante ($0$ = GND, $1$ = VCC).\n\nExemple : $F = A \\oplus B$ avec MUX $4 \\to 1$ :\n$A=0, B=0$ : $F=0$ → $I_0 = 0$\n$A=0, B=1$ : $F=1$ → $I_1 = 1$\n$A=1, B=0$ : $F=1$ → $I_2 = 1$\n$A=1, B=1$ : $F=0$ → $I_3 = 0$\n\nRègle générale : un MUX $2^n \\to 1$ peut réaliser **n\'importe quelle fonction** à $n$ variables.',
        },
        {
          type: 'tip',
          text: 'Astuce examen : avec un MUX $2^{n-1} \\to 1$, on peut aussi réaliser une fonction à $n$ variables ! On met $n-1$ variables en sélection et la $n$-ème variable (ou son complément, ou $0$, ou $1$) sur les entrées $I_k$. Ça réduit le nombre d\'entrées par 2.',
        },
      ],
    },

    // ═══════════════════════════════════════
    // SECTION 5 : DÉMULTIPLEXEUR
    // ═══════════════════════════════════════
    {
      title: '5. Démultiplexeur (DEMUX)',
      content: [
        {
          type: 'text',
          text: 'Le **démultiplexeur** fait l\'opération **inverse** du MUX : il dirige **une entrée unique** $E$ vers **l\'une des $2^n$ sorties**, selon les $n$ bits de sélection. Une seule sortie est active à la fois.',
        },
        {
          type: 'text',
          text: '**DEMUX 1 vers 4** ($2$ bits de sélection $S_1 S_0$) :',
        },
        {
          type: 'formula',
          math: 'Y_0 = E \\cdot \\overline{S_1} \\cdot \\overline{S_0} \\qquad Y_1 = E \\cdot \\overline{S_1} \\cdot S_0 \\qquad Y_2 = E \\cdot S_1 \\cdot \\overline{S_0} \\qquad Y_3 = E \\cdot S_1 \\cdot S_0',
        },
        {
          type: 'text',
          text: '**Exemple** : si $S_1 S_0 = 10$ et $E = 1$ → $Y_2 = 1 \\cdot 1 \\cdot 1 = 1$, toutes les autres sorties $= 0$.',
        },
        {
          type: 'tip',
          text: 'Chaque sortie $Y_i = E \\times (\\text{minterme}_i)$. Si on fixe $E = 1$ en permanence, le DEMUX se comporte comme un **décodeur** : il active exactement la sortie $i$ correspondant au code binaire $S_1 S_0 = i$.',
        },
      ],
    },

    // ═══════════════════════════════════════
    // SECTION 6 : CODEUR / DÉCODEUR
    // ═══════════════════════════════════════
    {
      title: '6. Codeur et Décodeur',
      content: [
        {
          type: 'text',
          text: 'Le **décodeur** $n \\to 2^n$ convertit un code binaire de $n$ bits en $2^n$ sorties, dont **une seule est active**. Chaque sortie correspond à un **minterme**.',
        },
        {
          type: 'text',
          text: '**Décodeur 2 vers 4** (entrées $A, B$, sorties $Y_0$ à $Y_3$) :',
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
          math: 'Y_0 = \\overline{A} \\cdot \\overline{B} \\quad Y_1 = \\overline{A} \\cdot B \\quad Y_2 = A \\cdot \\overline{B} \\quad Y_3 = A \\cdot B',
        },
        {
          type: 'method',
          text: '**Méthode : Réaliser une fonction avec un décodeur**\n\nUn décodeur $n \\to 2^n$ génère **tous les mintermes**. Pour réaliser $F$, il suffit d\'une porte OU :\n**Étape 1** : Identifier les mintermes de $F$ dans la table de vérité.\n**Étape 2** : Connecter les sorties correspondantes du décodeur à une porte OU.\n\nExemple : $F(A,B) = A \\oplus B = \\sum m(1, 2)$\n$F = Y_1 + Y_2 = \\overline{A} \\cdot B + A \\cdot \\overline{B}$ ✓',
        },
        {
          type: 'text',
          text: 'Le **codeur** (encodeur) fait l\'inverse : il convertit $2^n$ entrées (une seule active) en un code binaire de $n$ bits.',
        },
        {
          type: 'formula',
          math: 'S_0 = I_1 + I_3 \\qquad S_1 = I_2 + I_3',
        },
        {
          type: 'tip',
          text: 'Le décodeur est très puissant : il peut réaliser **n\'importe quelle fonction** à $n$ variables avec une seule porte OU supplémentaire. C\'est une alternative au MUX pour l\'implémentation de fonctions.',
        },
      ],
    },

    // ═══════════════════════════════════════
    // SECTION 7 : MÉTHODE DE CONCEPTION
    // ═══════════════════════════════════════
    {
      title: '7. Méthode de conception d\'un circuit combinatoire',
      content: [
        {
          type: 'method',
          text: '**Méthode : Concevoir un circuit combinatoire en 4 étapes**\n\n**Étape 1 — ANALYSER** : Identifier les entrées (variables) et les sorties (fonctions). Donner des noms clairs.\n**Étape 2 — TABLE DE VÉRITÉ** : Lister toutes les $2^n$ combinaisons d\'entrées et calculer chaque sortie.\n**Étape 3 — SIMPLIFIER** : Utiliser Karnaugh ou l\'algèbre de Boole pour obtenir l\'expression minimale.\n**Étape 4 — LOGIGRAMME** : Dessiner le schéma logique avec les portes correspondant aux équations simplifiées.\n\nToujours **vérifier** le résultat sur 2-3 cas de la table de vérité !',
        },
        {
          type: 'text',
          text: '**Exemple complet : détecteur "nombre $> 5$" sur 3 bits**',
        },
        {
          type: 'text',
          text: '**Étape 1** : Entrées $A, B, C$ (3 bits, nombre de $0$ à $7$). Sortie $F = 1$ si $ABC_2 > 5$.',
        },
        {
          type: 'table',
          headers: ['$A$', '$B$', '$C$', 'Décimal', '$F$'],
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
          text: '**Étape 3** : $F = \\sum m(6, 7) = A \\cdot B \\cdot \\overline{C} + A \\cdot B \\cdot C = A \\cdot B \\cdot (\\overline{C} + C) = A \\cdot B$.',
        },
        {
          type: 'formula',
          math: 'F = A \\cdot B',
        },
        {
          type: 'text',
          text: '**Étape 4** : Une seule porte AND ! $C$ n\'intervient pas. Vérification : $A=1, B=1, C=0$ → $F = 1$ (valeur $6 > 5$) ✓. $A=1, B=0, C=1$ → $F = 0$ (valeur $5$, pas $> 5$) ✓.',
        },
        {
          type: 'method',
          text: '**Méthode : Choisir le bon composant pour implémenter une fonction**\n\n- **Portes logiques** : pour les fonctions simples (peu de termes après simplification).\n- **MUX $2^n \\to 1$** : connecter les variables en sélection, les valeurs de $F$ en entrées. Rapide à câbler.\n- **Décodeur $n \\to 2^n$ + porte OU** : connecter les mintermes de $F$ à l\'OU. Pratique quand plusieurs fonctions partagent le même décodeur.\n- **ROM/PROM** : pour des fonctions complexes, on stocke la table de vérité directement en mémoire.',
        },
      ],
    },

    // ═══════════════════════════════════════
    // SECTION 8 : EXERCICES
    // ═══════════════════════════════════════
    {
      title: '8. Exercices corrigés',
      content: [
        // --- EXERCICE 1 ---
        {
          type: 'exercise',
          text: 'Exercice 1 : Donner la table de vérité et les équations d\'un **demi-soustracteur** (entrées $A, B$, sorties $D$ = différence et $E$ = emprunt, avec $D = A - B$).',
          items: [
            'D = ?',
            'E = ?',
            '\\text{Comparer avec le demi-additionneur}',
          ],
        },
        {
          type: 'correction',
          text: 'Correction exercice 1',
          items: [
            'Table de vérité : $A=0, B=0$ → $D=0, E=0$ | $A=0, B=1$ → $D=1, E=1$ (emprunt) | $A=1, B=0$ → $D=1, E=0$ | $A=1, B=1$ → $D=0, E=0$.',
            '$D = A \\oplus B$ (identique à la somme du demi-additionneur !).',
            '$E = \\overline{A} \\cdot B$ (emprunt quand $B=1$ et $A=0$).',
            'Comparaison : $S_{\\text{add}} = D_{\\text{sous}} = A \\oplus B$ (identiques), mais $C_{\\text{add}} = A \\cdot B \\neq E_{\\text{sous}} = \\overline{A} \\cdot B$ (le $A$ est complémenté dans l\'emprunt).',
          ],
        },

        // --- EXERCICE 2 ---
        {
          type: 'exercise',
          text: 'Exercice 2 : Réaliser $F(A,B) = A \\oplus B$ avec un MUX 4 vers 1. Donner les valeurs de $I_0, I_1, I_2, I_3$.',
        },
        {
          type: 'correction',
          text: 'Correction exercice 2',
          items: [
            'On pose $S_1 = A$, $S_0 = B$ (variables = sélection).',
            '$A=0, B=0$ : $F=0$ → $I_0 = 0$. $A=0, B=1$ : $F=1$ → $I_1 = 1$.',
            '$A=1, B=0$ : $F=1$ → $I_2 = 1$. $A=1, B=1$ : $F=0$ → $I_3 = 0$.',
            'Câblage : $I_0 = \\text{GND}$, $I_1 = V_{CC}$, $I_2 = V_{CC}$, $I_3 = \\text{GND}$.',
            'Vérification : $Y = \\overline{A} \\cdot B \\cdot 1 + A \\cdot \\overline{B} \\cdot 1 = \\overline{A} \\cdot B + A \\cdot \\overline{B} = A \\oplus B$ ✓.',
          ],
        },

        // --- EXERCICE 3 ---
        {
          type: 'exercise',
          text: 'Exercice 3 : Concevoir un circuit qui détecte si un nombre de 3 bits $(A, B, C)$ est un **multiple de 3** (valeurs : $0, 3, 6$).',
          items: [
            '\\text{Étape 1 : Identifier entrées/sorties}',
            '\\text{Étape 2 : Table de vérité}',
            '\\text{Étape 3 : Simplifier par Karnaugh}',
            '\\text{Étape 4 : Logigramme}',
          ],
        },
        {
          type: 'correction',
          text: 'Correction exercice 3',
          items: [
            'Entrées : $A, B, C$. Sortie : $F = 1$ si $ABC_2 \\in \\{0, 3, 6\\}$, soit $F = \\sum m(0, 3, 6)$.',
            'Karnaugh ($A$ en ligne, $BC$ en colonnes) : $m_0$ en case $(0, 00)$, $m_3$ en case $(0, 11)$, $m_6$ en case $(1, 10)$. Aucun groupement possible (cases isolées).',
            '$F = \\overline{A} \\cdot \\overline{B} \\cdot \\overline{C} + \\overline{A} \\cdot B \\cdot C + A \\cdot B \\cdot \\overline{C}$.',
            'Logigramme : 3 inverseurs + 3 portes AND à 3 entrées + 1 porte OR à 3 entrées = **7 portes**.',
            'Vérification : $F(0,0,0) = 1$ ✓, $F(0,1,1) = 1$ ✓, $F(1,1,0) = 1$ ✓, $F(1,0,1) = 0$ ✓.',
          ],
        },

        // --- EXERCICE 4 ---
        {
          type: 'exercise',
          text: 'Exercice 4 : Montrer que l\'additionneur complet peut s\'implémenter avec **2 demi-additionneurs et 1 porte OU**. Donner les équations intermédiaires.',
        },
        {
          type: 'correction',
          text: 'Correction exercice 4',
          items: [
            'HA1 (entrées $A, B$) : $S_1 = A \\oplus B$, $C_1 = A \\cdot B$.',
            'HA2 (entrées $S_1, C_{in}$) : $S = S_1 \\oplus C_{in} = (A \\oplus B) \\oplus C_{in} = A \\oplus B \\oplus C_{in}$ ✓.',
            '$C_2 = S_1 \\cdot C_{in} = (A \\oplus B) \\cdot C_{in}$.',
            'Porte OU : $C_{out} = C_1 + C_2 = A \\cdot B + (A \\oplus B) \\cdot C_{in}$ ✓.',
            'Coût total : 2 XOR + 2 AND + 1 OR = **5 portes logiques**.',
          ],
        },

        // --- EXERCICE 5 ---
        {
          type: 'exercise',
          text: 'Exercice 5 : Réaliser la fonction $F(A, B, C) = \\sum m(1, 2, 4, 7)$ avec un **décodeur 3 vers 8** et une porte OU.',
        },
        {
          type: 'correction',
          text: 'Correction exercice 5',
          items: [
            'Le décodeur $3 \\to 8$ génère les 8 mintermes $Y_0$ à $Y_7$ à partir des entrées $A, B, C$.',
            '$F = \\sum m(1, 2, 4, 7) = Y_1 + Y_2 + Y_4 + Y_7$.',
            'Câblage : connecter $Y_1$, $Y_2$, $Y_4$ et $Y_7$ à une porte OU à 4 entrées.',
            'Vérification : $F(0,0,1) = Y_1 = 1$ ✓. $F(1,1,1) = Y_7 = 1$ ✓. $F(0,1,1) = Y_3 = 0$ ✓.',
          ],
        },

        // --- EXERCICE 6 (TYPE EXAMEN) ---
        {
          type: 'exercise',
          text: 'Exercice 6 (Type examen) : On veut concevoir un circuit qui convertit un code BCD (4 bits $A, B, C, D$ représentant un chiffre de $0$ à $9$) en afficheur 7 segments. Donner l\'équation simplifiée du segment $a$ (horizontal du haut), sachant qu\'il est allumé pour les chiffres $0, 2, 3, 5, 6, 7, 8, 9$.',
          items: [
            '\\text{Identifier les mintermes de } a',
            '\\text{Simplifier par Karnaugh (4 variables, avec don\'t care pour 10-15)}',
            '\\text{Donner l\'équation simplifiée}',
          ],
        },
        {
          type: 'correction',
          text: 'Correction exercice 6',
          items: [
            '$a = 1$ pour les chiffres $0, 2, 3, 5, 6, 7, 8, 9$ soit $a = \\sum m(0, 2, 3, 5, 6, 7, 8, 9) + \\sum d(10, 11, 12, 13, 14, 15)$.',
            '$a = 0$ seulement pour $1$ ($0001$) et $4$ ($0100$).',
            'Karnaugh 4 variables avec don\'t care ($d = 1$ pour $10$ à $15$) : on peut former de grands groupements.',
            'Résultat simplifié : $a = A + C + B \\cdot D + \\overline{B} \\cdot \\overline{D}$ (ou de façon équivalente $a = A + C + (B \\odot D)$).',
            'Vérification : chiffre $1$ ($0001$) → $a = 0 + 0 + 0 \\cdot 1 + 1 \\cdot 0 = 0$ ✓. Chiffre $4$ ($0100$) → $a = 0 + 0 + 1 \\cdot 0 + 0 \\cdot 1 = 0$ ✓. Chiffre $7$ ($0111$) → $a = 0 + 1 + \\ldots = 1$ ✓.',
          ],
        },
      ],
    },
  ],
  erreurs: [
    'Confondre les équations du demi-additionneur ($C = A \\cdot B$) et du demi-soustracteur ($E = \\overline{A} \\cdot B$) — le $A$ est complémenté dans l\'emprunt !',
    'Oublier la retenue entrante $C_{in}$ dans l\'additionneur complet — sans $C_{in}$, c\'est un demi-additionneur.',
    'Se tromper DEMUX vs décodeur : le DEMUX a une entrée $E$ qui multiplie chaque sortie. Avec $E = 1$, DEMUX = décodeur.',
    'Pour le MUX, confondre l\'ordre des sélections : $S_1 S_0 = 10$ sélectionne $I_2$ (pas $I_1$). Le code binaire indique l\'indice de l\'entrée.',
    'Sauter la simplification (étape 3) et dessiner un logigramme non optimisé — coût inutilement élevé.',
    'Oublier de compter les don\'t care en Karnaugh pour les codes BCD (les combinaisons $10$ à $15$ n\'existent pas, on les traite comme des don\'t care).',
    'Confondre MUX et DEMUX : le MUX a **plusieurs entrées, une sortie**. Le DEMUX a **une entrée, plusieurs sorties**.',
  ],
  bilan: [
    'Je connais le demi-additionneur ($S = A \\oplus B$, $C = A \\cdot B$) et le demi-soustracteur ($D = A \\oplus B$, $E = \\overline{A} \\cdot B$).',
    'Je connais l\'additionneur complet ($S = A \\oplus B \\oplus C_{in}$, $C_{out} = A \\cdot B + C_{in}(A \\oplus B)$).',
    'Je sais chaîner $n$ additionneurs complets pour construire un additionneur $n$ bits (ripple carry).',
    'Je connais le comparateur 1 bit ($E = \\overline{A \\oplus B}$, $G = A \\cdot \\overline{B}$, $L = \\overline{A} \\cdot B$).',
    'Je sais utiliser un MUX $2^n \\to 1$ pour implémenter n\'importe quelle fonction à $n$ variables.',
    'Je connais le DEMUX et le décodeur, et la relation entre les deux ($E = 1$ → DEMUX = décodeur).',
    'Je sais réaliser une fonction avec un décodeur + porte OU sur les mintermes.',
    'Je maîtrise la méthode en 4 étapes : analyser, table de vérité, simplifier, logigramme.',
    'Je sais choisir entre portes logiques, MUX, décodeur ou ROM pour implémenter une fonction.',
  ],
}
