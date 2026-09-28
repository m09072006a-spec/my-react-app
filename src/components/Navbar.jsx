
import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();

  return (
    <header className="navbar">
      <div className="navbar__inner">
        {/* اللوجو */}
        <div className="navbar__logo">
          <div className="navbar__logo-icon">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
              <circle cx="12" cy="12" r="3.2" fill="currentColor" />
            </svg>
          </div>
          <div className="navbar__logo-text">
            <span className="navbar__logo-title">عدسة</span>
            <span className="navbar__logo-sub">عالم التصوير الفوتوغرافي</span>
          </div>
        </div>

        {/* الروابط */}
        <nav className="navbar__links">
          <NavLink
            to="/"
            end
            className={({ isActive }) => 'navbar__link' + (isActive ? ' navbar__link--active' : '')}
          >
            الرئيسية
          </NavLink>
          <NavLink
            to="/blog"
            className={({ isActive }) => 'navbar__link' + (isActive ? ' navbar__link--active' : '')}
          >
            المدونة
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => 'navbar__link' + (isActive ? ' navbar__link--active' : '')}
          >
            من نحن
          </NavLink>
        </nav>

        {/* البحث والزرار */}
        <div className="navbar__actions">
          <button className="navbar__search" aria-label="بحث">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.8" />
              <path d="M20 20L16.65 16.65" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </button>
          <button className="navbar__cta" onClick={() => navigate('/blog')}>
            ابدأ القراءة
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
