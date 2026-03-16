import { useState, useEffect } from 'react';
import { data } from '../data';

const navLinks = [
  { label: 'Work', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

function ThemeToggle({ isDark, onToggle }) {
  return (
    <button
      onClick={onToggle}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      style={{
        position: 'relative',
        width: '54px',
        height: '28px',
        borderRadius: '14px',
        background: isDark ? 'rgba(212,168,57,0.12)' : 'rgba(184,146,42,0.14)',
        border: `1px solid ${isDark ? 'rgba(212,168,57,0.3)' : 'rgba(184,146,42,0.4)'}`,
        cursor: 'pointer',
        padding: 0,
        flexShrink: 0,
        transition: 'background 0.3s, border-color 0.3s',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      {/* Moon icon */}
      <span
        style={{
          position: 'absolute',
          left: '6px',
          top: '50%',
          transform: 'translateY(-50%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          opacity: isDark ? 1 : 0.35,
          transition: 'opacity 0.3s',
        }}
      >
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
            fill={isDark ? '#d4a839' : '#b8922a'}
            stroke={isDark ? '#d4a839' : '#b8922a'}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>

      {/* Sun icon */}
      <span
        style={{
          position: 'absolute',
          right: '6px',
          top: '50%',
          transform: 'translateY(-50%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          opacity: isDark ? 0.35 : 1,
          transition: 'opacity 0.3s',
        }}
      >
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="5" fill={isDark ? '#d4a839' : '#b8922a'} />
          <line x1="12" y1="1" x2="12" y2="3" stroke={isDark ? '#d4a839' : '#b8922a'} strokeWidth="2" strokeLinecap="round" />
          <line x1="12" y1="21" x2="12" y2="23" stroke={isDark ? '#d4a839' : '#b8922a'} strokeWidth="2" strokeLinecap="round" />
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" stroke={isDark ? '#d4a839' : '#b8922a'} strokeWidth="2" strokeLinecap="round" />
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" stroke={isDark ? '#d4a839' : '#b8922a'} strokeWidth="2" strokeLinecap="round" />
          <line x1="1" y1="12" x2="3" y2="12" stroke={isDark ? '#d4a839' : '#b8922a'} strokeWidth="2" strokeLinecap="round" />
          <line x1="21" y1="12" x2="23" y2="12" stroke={isDark ? '#d4a839' : '#b8922a'} strokeWidth="2" strokeLinecap="round" />
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" stroke={isDark ? '#d4a839' : '#b8922a'} strokeWidth="2" strokeLinecap="round" />
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" stroke={isDark ? '#d4a839' : '#b8922a'} strokeWidth="2" strokeLinecap="round" />
        </svg>
      </span>

      {/* Sliding thumb */}
      <span
        style={{
          position: 'absolute',
          top: '3px',
          left: isDark ? '3px' : '27px',
          width: '22px',
          height: '22px',
          borderRadius: '50%',
          background: isDark ? 'rgba(212,168,57,0.25)' : 'rgba(184,146,42,0.28)',
          border: `1px solid ${isDark ? 'rgba(212,168,57,0.5)' : 'rgba(184,146,42,0.55)'}`,
          transition: 'left 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), background 0.3s, border-color 0.3s',
        }}
      />
    </button>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved ? saved === 'dark' : true;
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggleTheme = () => setIsDark((prev) => !prev);

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: scrolled ? '14px 32px' : '24px 32px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: scrolled ? 'var(--navbar-scrolled-bg)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
        transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
      }}
    >
      {/* Logo */}
      <a
        href="#hero"
        style={{
          fontFamily: "'Cormorant', serif",
          fontSize: '22px',
          fontWeight: 500,
          color: 'var(--text)',
          textDecoration: 'none',
          letterSpacing: '0.02em',
        }}
      >
        AS<span style={{ color: 'var(--accent)' }}>.</span>
      </a>

      {/* Desktop nav */}
      <nav
        style={{
          display: 'flex',
          gap: '36px',
          alignItems: 'center',
        }}
        className="hidden-mobile"
      >
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            style={{
              color: 'var(--text-muted)',
              textDecoration: 'none',
              fontSize: '13px',
              fontWeight: 500,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              transition: 'color 0.2s',
            }}
            onMouseEnter={(e) => (e.target.style.color = 'var(--text)')}
            onMouseLeave={(e) => (e.target.style.color = 'var(--text-muted)')}
          >
            {link.label}
          </a>
        ))}

        <ThemeToggle isDark={isDark} onToggle={toggleTheme} />

        <a
          href={`mailto:${data.email}`}
          style={{
            padding: '8px 18px',
            background: 'var(--accent-dim)',
            border: '1px solid var(--accent-border)',
            borderRadius: '4px',
            color: 'var(--accent)',
            textDecoration: 'none',
            fontSize: '13px',
            fontWeight: 500,
            letterSpacing: '0.05em',
            transition: 'all 0.2s',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'var(--accent)';
            e.currentTarget.style.color = isDark ? '#08080b' : '#f5f3ef';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'var(--accent-dim)';
            e.currentTarget.style.color = 'var(--accent)';
          }}
        >
          Hire Me
        </a>
      </nav>

      {/* Mobile right controls */}
      <div style={{ display: 'none', alignItems: 'center', gap: '12px' }} className="show-mobile">
        <ThemeToggle isDark={isDark} onToggle={toggleTheme} />

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '4px',
            display: 'flex',
            flexDirection: 'column',
            gap: '5px',
          }}
          aria-label="Toggle menu"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              style={{
                display: 'block',
                width: '22px',
                height: '1.5px',
                background: 'var(--text)',
                transition: 'all 0.25s',
                transformOrigin: 'center',
                transform:
                  menuOpen
                    ? i === 0
                      ? 'translateY(6.5px) rotate(45deg)'
                      : i === 2
                      ? 'translateY(-6.5px) rotate(-45deg)'
                      : 'opacity: 0; scaleX(0)'
                    : 'none',
                opacity: menuOpen && i === 1 ? 0 : 1,
              }}
            />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          style={{
            position: 'fixed',
            top: '64px',
            left: 0,
            right: 0,
            background: 'var(--mobile-menu-bg)',
            backdropFilter: 'blur(20px)',
            borderBottom: '1px solid var(--border)',
            padding: '20px 32px 28px',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                color: 'var(--text)',
                textDecoration: 'none',
                fontSize: '18px',
                fontFamily: "'Cormorant', serif",
                fontWeight: 500,
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href={`mailto:${data.email}`}
            style={{
              color: 'var(--accent)',
              textDecoration: 'none',
              fontSize: '18px',
              fontFamily: "'Cormorant', serif",
            }}
          >
            Hire Me →
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
      `}</style>
    </header>
  );
}
