export interface Sujet {
  id: string
  title: string
  type: 'maths-generales' | 'maths-appliquees' | 'complet'
  description: string
  duration: string
  dayNumber: number
}

export const sujets: Sujet[] = [
  {
    id: 'sujet-1',
    title: 'Sujet n\u00b01 - Maths G\u00e9n\u00e9rales (Analyse)',
    type: 'maths-generales',
    description: 'Fonctions + ln/exp + int\u00e9grales',
    duration: '2h',
    dayNumber: 14,
  },
  {
    id: 'sujet-2',
    title: 'Sujet n\u00b02 - Maths Appliqu\u00e9es',
    type: 'maths-appliquees',
    description: 'Num\u00e9ration + Logique + Circuits',
    duration: '1h30',
    dayNumber: 31,
  },
]
