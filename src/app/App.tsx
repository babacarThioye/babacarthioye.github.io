import { Navigate, Route, Routes } from 'react-router-dom'
import { PortfolioLayout } from '../components/PortfolioLayout'
import { OverviewPage } from '../pages/OverviewPage'
import { SectionPage } from '../pages/SectionPage'
import { portfolioSections } from '../data/sections'
import { translations } from './translations'
import { usePortfolioPreferences } from './preferences'

function NotFoundPage() {
  const { language } = usePortfolioPreferences()
  const content = translations[language]

  return (
    <section className="not-found-page">
      <p className="page-eyebrow">404</p>
      <h2>{content.notFound}</h2>
      <Navigate to="/overview" replace />
    </section>
  )
}

function PortfolioRoutes() {
  return (
    <Routes>
      <Route element={<PortfolioLayout />}>
        <Route index element={<Navigate to="/overview" replace />} />
        <Route path="/overview" element={<OverviewPage />} />
        {portfolioSections.map((section) => (
          <Route
            key={section.id}
            path={section.path}
            element={<SectionPage section={section.id} />}
          />
        ))}
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}

export default PortfolioRoutes
