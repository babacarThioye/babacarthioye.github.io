import { lazy, Suspense } from 'react'
import { Navigate, Route, Routes, Link } from 'react-router-dom'
import { PortfolioLayout } from '../components/PortfolioLayout'
import { OverviewPage } from '../pages/OverviewPage'
import { BookingPage } from '../features/booking/BookingPage'
import { useTranslation } from 'react-i18next'

const ResearchPage = lazy(() => import('../pages/ResearchPage').then(({ ResearchPage }) => ({ default: ResearchPage })))
const ProjectsPage = lazy(() => import('../pages/ProjectsPage').then(({ ProjectsPage }) => ({ default: ProjectsPage })))
const PublicationsPage = lazy(() => import('../pages/PublicationsPage').then(({ PublicationsPage }) => ({ default: PublicationsPage })))
const TeachingPage = lazy(() => import('../pages/TeachingPage').then(({ TeachingPage }) => ({ default: TeachingPage })))
const ServicesPage = lazy(() => import('../pages/ServicesPage').then(({ ServicesPage }) => ({ default: ServicesPage })))
const AwardsPage = lazy(() => import('../pages/AwardsPage').then(({ AwardsPage }) => ({ default: AwardsPage })))
const ExperiencesPage = lazy(() => import('../pages/ExperiencesPage').then(({ ExperiencesPage }) => ({ default: ExperiencesPage })))
const EducationPage = lazy(() => import('../pages/EducationPage').then(({ EducationPage }) => ({ default: EducationPage })))
const ContactsPage = lazy(() => import('../pages/ContactsPage').then(({ ContactsPage }) => ({ default: ContactsPage })))
const DashboardPage = lazy(() => import('../pages/DashboardPage').then(({ DashboardPage }) => ({ default: DashboardPage })))
const StudentsPage = lazy(() => import('../pages/StudentsPage').then(({ StudentsPage }) => ({ default: StudentsPage })))

function NotFoundPage() {
  const { t } = useTranslation()

  return (
    <section className="not-found-page">
      <p className="page-eyebrow">404</p>
      <h2>{t('notFound')}</h2>
      <Link className="primary-button" to="/">{t('backToOverview')}</Link>
    </section>
  )
}

function PortfolioRoutes() {
  return (
    <Routes>
      <Route element={<PortfolioLayout />}>
        <Route index element={<OverviewPage />} />
        <Route path="/overview" element={<Navigate to="/" replace />} />
        <Route path="/dashboard" element={<Suspense fallback={null}><DashboardPage /></Suspense>} />
        <Route path="/research" element={<Suspense fallback={null}><ResearchPage /></Suspense>} />
        <Route path="/projects" element={<Suspense fallback={null}><ProjectsPage /></Suspense>} />
        <Route path="/publications" element={<Suspense fallback={null}><PublicationsPage /></Suspense>} />
        <Route path="/teaching" element={<Suspense fallback={null}><TeachingPage /></Suspense>} />
        <Route path="/students" element={<Suspense fallback={null}><StudentsPage /></Suspense>} />
        <Route path="/services" element={<Suspense fallback={null}><ServicesPage /></Suspense>} />
        <Route path="/awards" element={<Suspense fallback={null}><AwardsPage /></Suspense>} />
        <Route path="/experiences" element={<Suspense fallback={null}><ExperiencesPage /></Suspense>} />
        <Route path="/education" element={<Suspense fallback={null}><EducationPage /></Suspense>} />
        <Route path="/contacts" element={<Suspense fallback={null}><ContactsPage /></Suspense>} />
        <Route path="/publication" element={<Navigate to="/publications" replace />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}

export default PortfolioRoutes
