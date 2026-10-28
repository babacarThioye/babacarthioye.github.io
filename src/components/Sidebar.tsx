import { Link, NavLink } from 'react-router-dom'
import { translations } from '../app/translations'
import type { Language } from '../app/types'
import { portfolioSections } from '../data/sections'

interface SidebarProps {
  language: Language
  isOpen: boolean
  onNavigate: () => void
}

export function Sidebar({ language, isOpen, onNavigate }: SidebarProps) {
  const content = translations[language]

  return (
    <aside className={`sidebar${isOpen ? ' sidebar-open' : ''}`}>
      <Link className="sidebar-brand" to="/overview" onClick={onNavigate}>
        <span className="sidebar-brand-mark" aria-hidden="true">
          BT
        </span>
        <span className="sidebar-brand-copy">
          <strong>Babacar Thioye</strong>
          <span>{content.brand}</span>
        </span>
      </Link>

      <div className="sidebar-profile">
        <span className="profile-monogram" aria-hidden="true">
          BT
        </span>
        <div>
          <strong>Babacar Thioye</strong>
          <span>{content.sidebarDescription}</span>
        </div>
      </div>

      <nav className="sidebar-navigation" aria-label={content.navigationLabel}>
        <span className="sidebar-caption">{content.brand}</span>
        <NavLink
          to="/overview"
          className={({ isActive }) =>
            `sidebar-link${isActive ? ' sidebar-link-active' : ''}`
          }
          onClick={onNavigate}
        >
          <span className="sidebar-icon" aria-hidden="true">
            ◫
          </span>
          <span>{content.overview}</span>
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
            <span className="sidebar-icon" aria-hidden="true">
              {section.icon}
            </span>
            <span>{content[section.id]}</span>
          </NavLink>
        ))}
      </nav>

      <div className="sidebar-footer">
        <span className="sidebar-footer-note">© {new Date().getFullYear()}</span>
      </div>
    </aside>
  )
}
