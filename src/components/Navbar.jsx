import { useState, useEffect } from 'react';
import { data } from '../data';

const navLinks = [
  { label: 'Work', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

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
        background: scrolled ? 'rgba(8,8,11,0.92)' : 'transparent',
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
            e.currentTarget.style.color = '#08080b';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'var(--accent-dim)';
            e.currentTarget.style.color = 'var(--accent)';
          }}
        >
          Hire Me
        </a>
      </nav>

      {/* Mobile hamburger */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        style={{
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          padding: '4px',
          display: 'none',
          flexDirection: 'column',
          gap: '5px',
        }}
        className="show-mobile"
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

      {/* Mobile menu */}
      {menuOpen && (
        <div
          style={{
            position: 'fixed',
            top: '64px',
            left: 0,
            right: 0,
            background: 'rgba(8,8,11,0.97)',
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
