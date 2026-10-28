import { Menu, Moon, Sun, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { NavLink, Outlet, useLocation } from 'react-router-dom'
import { translations } from '../app/translations'
import type { Language, PortfolioPreferences, Theme } from '../app/types'
import { portfolioSections } from '../data/sections'
import { Sidebar } from './Sidebar'

function getStoredPreference<T extends string>(
  key: string,
  validValues: readonly T[],
  fallback: T,
): T {
  const storedValue = localStorage.getItem(key)
  return validValues.find((value) => value === storedValue) ?? fallback
}

export function PortfolioLayout() {
  const [language, setLanguage] = useState<Language>(() =>
    getStoredPreference('portfolio-language', ['fr', 'en'], 'en'),
  )
  const [theme, setTheme] = useState<Theme>(() =>
    getStoredPreference(
      'portfolio-theme',
      ['light', 'dark'],
      window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light',
    ),
  )
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { pathname } = useLocation()
  const content = translations[language]
  const section = portfolioSections.find((item) => item.path === pathname)
  const pageTitle =
    pathname === '/' || pathname === '/overview'
      ? content.overview
      : pathname === '/booking'
        ? language === 'fr' ? 'Rendez-vous' : 'Booking'
      : section
        ? content[section.id]
        : content.notFound
  const pageDescription = pathname === '/booking'
    ? language === 'fr' ? 'Demander un rendez-vous.' : 'Request a meeting.'
    : section ? content.pageTitles[section.id] : content.overviewIntro

  const preferences: PortfolioPreferences = {
    language,
    setLanguage,
    theme,
    setTheme,
  }

  useEffect(() => {
    localStorage.setItem('portfolio-language', language)
    document.documentElement.lang = language
    document.title = `${pageTitle} — Babacar Thioye`
    document
      .querySelector<HTMLMetaElement>('meta[name="description"]')
      ?.setAttribute('content', pageDescription)
  }, [language, pageDescription, pageTitle])

  useEffect(() => {
    localStorage.setItem('portfolio-theme', theme)
    document.documentElement.style.colorScheme = theme
    document
      .querySelector<HTMLMetaElement>('meta[name="theme-color"]')
      ?.setAttribute('content', theme === 'dark' ? '#111b22' : '#f7f8f6')
  }, [theme])

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsMobileMenuOpen(false)
    }
    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [])

  return (
    <div className="portfolio-shell" data-theme={theme}>
      <a className="skip-link" href="#main-content">{language === 'fr' ? 'Aller au contenu' : 'Skip to content'}</a>
      <Sidebar
        language={language}
        isOpen={isMobileMenuOpen}
        onNavigate={() => setIsMobileMenuOpen(false)}
      />
      {isMobileMenuOpen && (
        <button
          className="sidebar-backdrop"
          type="button"
          aria-label={content.closeMenuLabel}
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      <div className="workspace">
        <header className="workspace-header">
          <div className="workspace-heading">
            <button
              className="mobile-menu-button"
              type="button"
              aria-label={
                isMobileMenuOpen ? content.closeMenuLabel : content.menuLabel
              }
              aria-expanded={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((isOpen) => !isOpen)}
            >
              {isMobileMenuOpen ? <X size={18} aria-hidden="true" /> : <Menu size={18} aria-hidden="true" />}
            </button>
            <div>
              <p className="workspace-breadcrumb">{content.brand}</p>
              <h1 className="workspace-title">{pageTitle}</h1>
            </div>
          </div>

          <div className="workspace-actions">
            <button
              className="toolbar-button language-button"
              type="button"
              aria-label={content.languageLabel}
              title={content.languageLabel}
              onClick={() => setLanguage(language === 'fr' ? 'en' : 'fr')}
            >
              {language === 'fr' ? 'EN' : 'FR'}
            </button>
            <button
              className="toolbar-button theme-button"
              type="button"
              aria-label={
                theme === 'light' ? content.themeLabel : content.lightThemeLabel
              }
              title={
                theme === 'light' ? content.themeLabel : content.lightThemeLabel
              }
              aria-pressed={theme === 'dark'}
              onClick={() =>
                setTheme((currentTheme) =>
                  currentTheme === 'light' ? 'dark' : 'light',
                )
              }
            >
              {theme === 'light' ? <Moon size={17} aria-hidden="true" /> : <Sun size={17} aria-hidden="true" />}
            </button>
          </div>
        </header>

        <main id="main-content" className="page-content" tabIndex={-1}>
          <Outlet context={preferences} />
        </main>

        <footer className="workspace-footer">
          <span>{content.footer}</span>
          <span>© {new Date().getFullYear()} Babacar Thioye</span>
          <NavLink to="/contacts">{content.contacts}</NavLink>
        </footer>
      </div>
    </div>
  )
}
