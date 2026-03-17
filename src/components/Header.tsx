import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import './Header.css'
import beesmartLogo from '../assets/images/logo/besmart_logo.png'

export interface NavItem {
  label: string
  icon?: string
  to?: string
  href?: string
}

interface HeaderProps {
  navItems: NavItem[]
  actions?: React.ReactNode
}

const Header = ({ navItems, actions }: HeaderProps) => {
  const navigate = useNavigate()
  const location = useLocation()

  return (
    <header className="shared-header">
      <div className="shared-header-inner">
        <div className="shared-header-left">
          <div className="shared-logo">
            <img src={beesmartLogo} alt="BeSmart Logo" className="shared-logo-img" />
          </div>
        </div>

        <nav className="shared-nav">
          {navItems.map((item) => {
            const isActive = item.to ? location.pathname === item.to : false
            const className = `shared-nav-link${isActive ? ' shared-nav-link-active' : ''}`

            if (item.to) {
              return (
                <a key={item.label} className={className} onClick={() => navigate(item.to!)}>
                  {item.icon && <span className="material-symbols-outlined">{item.icon}</span>}
                  {item.label}
                </a>
              )
            }

            return (
              <a key={item.label} className={className} href={item.href || '#'}>
                {item.icon && <span className="material-symbols-outlined">{item.icon}</span>}
                {item.label}
              </a>
            )
          })}
        </nav>

        {actions && <div className="shared-header-actions">{actions}</div>}
      </div>
    </header>
  )
}

export default Header
