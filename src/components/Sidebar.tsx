import { LayoutDashboard } from 'lucide-react'
import { Link, NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { portfolioSections } from '../data/sections'

interface SidebarProps {
  isOpen: boolean
  onNavigate: () => void
}

export function Sidebar({ isOpen, onNavigate }: SidebarProps) {
  const { t } = useTranslation()

  return (
    <aside className={`sidebar${isOpen ? ' sidebar-open' : ''}`}>
      <Link className="sidebar-brand" to="/" onClick={onNavigate}>
        <span className="sidebar-brand-mark" aria-hidden="true">
          BT
        </span>
        <span className="sidebar-brand-copy">
          <strong>Babacar Thioye</strong>
          <span>{t('brand')}</span>
        </span>
      </Link>

      <div className="sidebar-profile">
        <span className="profile-monogram" aria-hidden="true">
          BT
        </span>
        <div>
          <strong>Babacar Thioye</strong>
          <span>{t('sidebarDescription')}</span>
        </div>
      </div>

      <nav className="sidebar-navigation" aria-label={t('navigationLabel')}>
        <span className="sidebar-caption">{t('brand')}</span>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `sidebar-link${isActive ? ' sidebar-link-active' : ''}`
          }
          onClick={onNavigate}
        >
          <span className="sidebar-icon" aria-hidden="true">
            <LayoutDashboard size={16} strokeWidth={1.8} />
          </span>
          <span>{t('overview')}</span>
        </NavLink>

        {portfolioSections.map((section) => (
          <NavLink
            key={section.id}
            to={section.path}
            className={({ isActive }) =>
              `sidebar-link${isActive ? ' sidebar-link-active' : ''}`
            }
            onClick={onNavigate}
          >
            <span className="sidebar-icon" aria-hidden="true"><section.icon size={16} strokeWidth={1.8} /></span>
            <span>{t(section.id)}</span>
          </NavLink>
        ))}
      </nav>

      <div className="sidebar-footer">
        <span className="sidebar-footer-note">© {new Date().getFullYear()}</span>
      </div>
    </aside>
  )
}
