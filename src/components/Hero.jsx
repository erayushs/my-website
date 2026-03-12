import { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';
import { data } from '../data';

const roles = ['Frontend Developer', 'React Specialist', 'Performance Engineer', 'UI Builder'];

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  useEffect(() => {
    const current = roles[roleIdx];
    let timeout;

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 65);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2400);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIdx((i) => (i + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIdx]);

  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '0 clamp(24px, 6vw, 96px)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background decorative elements */}
      <div
        style={{
          position: 'absolute',
          top: '15%',
          right: '-10%',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(212,168,57,0.06) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '10%',
          left: '-5%',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(212,168,57,0.04) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      {/* Vertical label */}
      <div
        style={{
          position: 'absolute',
          right: 'clamp(16px, 4vw, 48px)',
          top: '50%',
          transform: 'translateY(-50%) rotate(90deg)',
          transformOrigin: 'center center',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          opacity: 0.3,
        }}
        className="portfolio-label"
      >
        <span style={{ width: '40px', height: '1px', background: 'var(--text-muted)' }} />
        <span style={{ fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 500 }}>
          Portfolio 2026
        </span>
      </div>

      {/* Content: two-column */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 'clamp(32px, 6vw, 80px)',
          width: '100%',
          maxWidth: '1100px',
          opacity: visible ? 1 : 0,
          transition: 'opacity 0.3s',
        }}
      >
      {/* Left column */}
      <div style={{ flex: 1, minWidth: 0 }}>
        {/* Pre-title tag */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            marginBottom: '28px',
            opacity: visible ? 1 : 0,
            animation: visible ? 'fadeUp 0.6s ease 0.1s forwards' : 'none',
            animationFillMode: 'both',
          }}
        >
          <span
            style={{
              width: '7px',
              height: '7px',
              borderRadius: '50%',
              background: 'var(--accent)',
              animation: 'pulse-dot 2s infinite',
            }}
          />
          <span
            style={{
              fontSize: '12px',
              fontWeight: 500,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'var(--accent)',
            }}
          >
            Available for opportunities
          </span>
        </div>

        {/* Main heading */}
        <h1
          style={{
            fontFamily: "'Cormorant', serif",
            fontSize: 'clamp(56px, 9vw, 130px)',
            fontWeight: 300,
            lineHeight: 0.9,
            letterSpacing: '-0.02em',
            color: 'var(--text)',
            marginBottom: '4px',
            animation: visible ? 'fadeUp 0.7s ease 0.2s forwards' : 'none',
            animationFillMode: 'both',
            opacity: 0,
          }}
        >
          Ayush
        </h1>
        <h1
          style={{
            fontFamily: "'Cormorant', serif",
            fontSize: 'clamp(56px, 9vw, 130px)',
            fontWeight: 600,
            lineHeight: 0.9,
            letterSpacing: '-0.02em',
            color: 'var(--text)',
            marginBottom: '32px',
            animation: visible ? 'fadeUp 0.7s ease 0.3s forwards' : 'none',
            animationFillMode: 'both',
            opacity: 0,
            fontStyle: 'italic',
          }}
        >
          Singh<span style={{ color: 'var(--accent)' }}>.</span>
        </h1>

        {/* Typewriter role */}
        <div
          style={{
            fontSize: 'clamp(20px, 3vw, 28px)',
            fontWeight: 400,
            color: 'var(--text-muted)',
            marginBottom: '24px',
            animation: visible ? 'fadeUp 0.7s ease 0.45s forwards' : 'none',
            animationFillMode: 'both',
            opacity: 0,
            minHeight: '36px',
          }}
        >
          <span style={{ color: 'var(--accent-hover)', fontFamily: "'JetBrains Mono', monospace", fontSize: 'clamp(16px, 2vw, 20px)' }}>
            &gt;{' '}
          </span>
          {displayed}
          <span
            style={{
              display: 'inline-block',
              width: '2px',
              height: '1.1em',
              background: 'var(--accent)',
              verticalAlign: 'text-bottom',
              marginLeft: '2px',
              animation: 'pulse-dot 0.8s infinite',
            }}
          />
        </div>

        {/* Description */}
        <p
          style={{
            fontSize: 'clamp(15px, 1.5vw, 17px)',
            color: 'var(--text-muted)',
            maxWidth: '520px',
            lineHeight: 1.7,
            marginBottom: '44px',
            animation: visible ? 'fadeUp 0.7s ease 0.6s forwards' : 'none',
            animationFillMode: 'both',
            opacity: 0,
          }}
        >
          {data.summary}
        </p>

        {/* CTA buttons */}
        <div
          style={{
            display: 'flex',
            gap: '16px',
            flexWrap: 'wrap',
            marginBottom: '56px',
            animation: visible ? 'fadeUp 0.7s ease 0.75s forwards' : 'none',
            animationFillMode: 'both',
            opacity: 0,
          }}
        >
          <a
            href="#projects"
            style={{
              padding: '13px 28px',
              background: 'var(--accent)',
              color: '#08080b',
              borderRadius: '4px',
              textDecoration: 'none',
              fontSize: '14px',
              fontWeight: 600,
              letterSpacing: '0.05em',
              transition: 'all 0.25s',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'var(--accent-hover)';
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(212,168,57,0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'var(--accent)';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            View Projects
          </a>
          <a
            href={`mailto:${data.email}`}
            style={{
              padding: '13px 28px',
              background: 'transparent',
              border: '1px solid var(--border-light)',
              color: 'var(--text)',
              borderRadius: '4px',
              textDecoration: 'none',
              fontSize: '14px',
              fontWeight: 500,
              letterSpacing: '0.05em',
              transition: 'all 0.25s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--text-muted)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'var(--border-light)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            Get in Touch
          </a>
        </div>

        {/* Social links */}
        <div
          style={{
            display: 'flex',
            gap: '20px',
            alignItems: 'center',
            animation: visible ? 'fadeUp 0.7s ease 0.9s forwards' : 'none',
            animationFillMode: 'both',
            opacity: 0,
          }}
        >
          {[
            { icon: Github, href: data.github, label: 'GitHub' },
            { icon: Linkedin, href: data.linkedin, label: 'LinkedIn' },
            { icon: Mail, href: `mailto:${data.email}`, label: 'Email' },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              aria-label={label}
              style={{
                color: 'var(--text-dim)',
                transition: 'all 0.2s',
                display: 'flex',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--accent)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--text-dim)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <Icon size={20} strokeWidth={1.5} />
            </a>
          ))}
          <span style={{ width: '1px', height: '16px', background: 'var(--border)' }} />
          <span style={{ fontSize: '12px', color: 'var(--text-dim)', letterSpacing: '0.08em' }}>
            Noida, India
          </span>
        </div>
      </div>{/* end left column */}

      {/* Right column: photo */}
      <div
        style={{
          flexShrink: 0,
          animation: visible ? 'fadeIn 0.9s ease 0.5s forwards' : 'none',
          animationFillMode: 'both',
          opacity: 0,
        }}
        className="hero-photo-col"
      >
        <div
          style={{
            position: 'relative',
            width: 'clamp(260px, 28vw, 380px)',
            height: 'clamp(260px, 28vw, 380px)',
          }}
        >
          {/* Amber ring */}
          <div
            style={{
              position: 'absolute',
              inset: '-3px',
              borderRadius: '50%',
              background: 'conic-gradient(var(--accent) 0deg, transparent 120deg, var(--accent) 240deg, transparent 300deg, var(--accent) 360deg)',
              animation: 'spin-slow 8s linear infinite',
            }}
          />
          {/* Dark gap ring */}
          <div
            style={{
              position: 'absolute',
              inset: '3px',
              borderRadius: '50%',
              background: 'var(--bg)',
              zIndex: 1,
            }}
          />
          {/* Photo */}
          <img
            src="https://avatars.githubusercontent.com/u/128415637?v=4"
            alt="Ayush Singh"
            style={{
              position: 'absolute',
              inset: '8px',
              width: 'calc(100% - 16px)',
              height: 'calc(100% - 16px)',
              borderRadius: '50%',
              objectFit: 'cover',
              zIndex: 2,
              filter: 'grayscale(20%)',
            }}
          />
          {/* Subtle bottom gradient overlay */}
          <div
            style={{
              position: 'absolute',
              inset: '8px',
              borderRadius: '50%',
              background: 'linear-gradient(to top, rgba(8,8,11,0.3) 0%, transparent 50%)',
              zIndex: 3,
            }}
          />
        </div>
      </div>

      </div>{/* end outer flex */}

      {/* Scroll indicator */}
      <a
        href="#experience"
        style={{
          position: 'absolute',
          bottom: '36px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px',
          color: 'var(--text-dim)',
          textDecoration: 'none',
          animation: visible ? 'fadeIn 0.7s ease 1.2s forwards' : 'none',
          animationFillMode: 'both',
          opacity: 0,
        }}
      >
        <span style={{ fontSize: '10px', letterSpacing: '0.15em', textTransform: 'uppercase' }}>Scroll</span>
        <ArrowDown size={14} style={{ animation: 'pulse-dot 1.5s infinite' }} />
      </a>

      <style>{`
        @keyframes pulse-dot {
          0%, 100% { opacity: 1; transform: translateY(0); }
          50% { opacity: 0.5; transform: translateY(3px); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @media (max-width: 768px) {
          .hero-photo-col { display: none !important; }
          .portfolio-label { display: none !important; }
        }
      `}</style>
    </section>
  );
}
