import { Navigate, Route, Routes, Link } from 'react-router-dom'
import { PortfolioLayout } from '../components/PortfolioLayout'
import { OverviewPage } from '../pages/OverviewPage'
import { SectionPage } from '../pages/SectionPage'
import { BookingPage } from '../features/booking/BookingPage'
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
      <Link className="primary-button" to="/">{content.backToOverview}</Link>
    </section>
  )
}

function PortfolioRoutes() {
  return (
    <Routes>
      <Route element={<PortfolioLayout />}>
        <Route index element={<OverviewPage />} />
        <Route path="/overview" element={<Navigate to="/" replace />} />
        {portfolioSections.map((section) => (
          <Route
            key={section.id}
            path={section.path}
            element={<SectionPage section={section.id} />}
          />
        ))}
        <Route path="/publication" element={<Navigate to="/publications" replace />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}

export default PortfolioRoutes
