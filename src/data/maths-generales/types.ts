export interface ContentBlock {
  type: 'text' | 'formula' | 'table' | 'exercise' | 'correction' | 'tip' | 'method'
  text?: string
  math?: string
  rows?: string[][]
  headers?: string[]
  items?: string[]
}

export interface Section {
  title: string
  content: ContentBlock[]
}

export interface ChapterContent {
  slug: string
  title: string
  icon: string
  importance: string
  days: string
  sections: Section[]
  erreurs: string[]
  bilan: string[]
}
