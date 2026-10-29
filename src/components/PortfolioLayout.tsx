import { Menu, Moon, Sun, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { NavLink, Outlet, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
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
  const { t, i18n } = useTranslation()
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
  const section = portfolioSections.find((item) => item.path === pathname)
  const pageTitle =
    pathname === '/' || pathname === '/overview'
      ? t('overview')
      : pathname === '/booking'
        ? language === 'fr' ? 'Rendez-vous' : 'Booking'
      : section
        ? t(section.id)
        : t('notFound')
  const pageDescription = pathname === '/booking'
    ? language === 'fr' ? 'Demander un rendez-vous.' : 'Request a meeting.'
    : section ? t(`pageTitles.${section.id}`) : t('siteDescription')

  const preferences: PortfolioPreferences = {
    language,
    setLanguage,
    theme,
    setTheme,
  }

  useEffect(() => {
    localStorage.setItem('portfolio-language', language)
    void i18n.changeLanguage(language)
    document.documentElement.lang = language
    document.title = `${pageTitle} — Babacar Thioye`
    document
      .querySelector<HTMLMetaElement>('meta[name="description"]')
      ?.setAttribute('content', pageDescription)
  }, [i18n, language, pageDescription, pageTitle])

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
        isOpen={isMobileMenuOpen}
        onNavigate={() => setIsMobileMenuOpen(false)}
      />
      {isMobileMenuOpen && (
        <button
          className="sidebar-backdrop"
          type="button"
          aria-label={t('closeMenuLabel')}
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
                isMobileMenuOpen ? t('closeMenuLabel') : t('menuLabel')
              }
              aria-expanded={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((isOpen) => !isOpen)}
            >
              {isMobileMenuOpen ? <X size={18} aria-hidden="true" /> : <Menu size={18} aria-hidden="true" />}
            </button>
            <div>
              <p className="workspace-breadcrumb">{t('brand')}</p>
              <h1 className="workspace-title">{pageTitle}</h1>
            </div>
          </div>

          <div className="workspace-actions">
            <button
              className="toolbar-button language-button"
              type="button"
              aria-label={t('languageLabel')}
              title={t('languageLabel')}
              onClick={() => setLanguage(language === 'fr' ? 'en' : 'fr')}
            >
              {language === 'fr' ? 'EN' : 'FR'}
            </button>
            <button
              className="toolbar-button theme-button"
              type="button"
              aria-label={
                theme === 'light' ? t('themeLabel') : t('lightThemeLabel')
              }
              title={
                theme === 'light' ? t('themeLabel') : t('lightThemeLabel')
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
          <span>{t('footer')}</span>
          <span>© {new Date().getFullYear()} Babacar Thioye</span>
          <NavLink to="/contacts">{t('contacts')}</NavLink>
        </footer>
      </div>
    </div>
  )
}
