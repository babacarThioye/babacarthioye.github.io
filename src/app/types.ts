export type Language = 'fr' | 'en'
export type Theme = 'light' | 'dark'

export interface PortfolioPreferences {
  language: Language
  setLanguage: (language: Language) => void
  theme: Theme
  setTheme: (theme: Theme) => void
}
