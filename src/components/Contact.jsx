import { Github, Linkedin, Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { data } from '../data';

export default function Contact() {
  const [ref, inView] = useInView();

  return (
    <section
      id="contact"
      style={{
        padding: '80px clamp(24px, 6vw, 96px) 60px',
        background: 'var(--surface)',
        borderTop: '1px solid var(--border)',
      }}
    >
      {/* Section label */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '16px',
          marginBottom: '64px',
        }}
      >
        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '12px', color: 'var(--accent)', letterSpacing: '0.1em' }}>
          04
        </span>
        <div style={{ flex: 1, height: '1px', background: 'var(--border)' }} />
        <h2 style={{ fontFamily: "'Cormorant', serif", fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 500, color: 'var(--text)', letterSpacing: '-0.01em' }}>
          Let's Work Together
        </h2>
      </div>

      <div
        ref={ref}
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
          gap: '60px',
          alignItems: 'start',
          opacity: inView ? 1 : 0,
          transform: inView ? 'translateY(0)' : 'translateY(24px)',
          transition: 'all 0.7s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        {/* Left: CTA */}
        <div>
          <h3
            style={{
              fontFamily: "'Cormorant', serif",
              fontSize: 'clamp(36px, 5vw, 64px)',
              fontWeight: 300,
              lineHeight: 1,
              color: 'var(--text)',
              letterSpacing: '-0.02em',
              marginBottom: '24px',
            }}
          >
            Have a project{' '}
            <em style={{ color: 'var(--accent)', fontStyle: 'italic' }}>in mind?</em>
          </h3>
          <p
            style={{
              fontSize: '15px',
              color: 'var(--text-muted)',
              lineHeight: 1.7,
              maxWidth: '400px',
              marginBottom: '36px',
            }}
          >
            I'm currently open to frontend developer roles and freelance projects.
            Whether you need a performance-obsessed React dev or someone to build
            your design system from scratch — let's talk.
          </p>
          <a
            href={`mailto:${data.email}`}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '14px 28px',
              background: 'var(--accent)',
              color: '#08080b',
              borderRadius: '4px',
              textDecoration: 'none',
              fontSize: '14px',
              fontWeight: 600,
              letterSpacing: '0.04em',
              transition: 'all 0.25s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'var(--accent-hover)';
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(212,168,57,0.35)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'var(--accent)';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <Mail size={15} />
            Send an Email
          </a>
        </div>

        {/* Right: contacts */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
          {[
            { icon: Mail, label: 'Email', value: data.email, href: `mailto:${data.email}` },
            { icon: Phone, label: 'Phone', value: data.phone, href: `tel:${data.phone}` },
            { icon: Github, label: 'GitHub', value: 'github.com/erayushs', href: data.github },
            { icon: Linkedin, label: 'LinkedIn', value: 'linkedin.com/in/erayushsingh', href: data.linkedin },
            { icon: MapPin, label: 'Location', value: 'Noida, Uttar Pradesh', href: null },
          ].map(({ icon: Icon, label, value, href }, i) => (
            <ContactRow key={label} icon={Icon} label={label} value={value} href={href} index={i} inView={inView} />
          ))}
        </div>
      </div>

      {/* Footer */}
      <div
        style={{
          marginTop: '80px',
          paddingTop: '28px',
          borderTop: '1px solid var(--border)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '12px',
        }}
      >
        <span
          style={{
            fontFamily: "'Cormorant', serif",
            fontSize: '20px',
            fontWeight: 500,
            color: 'var(--text-dim)',
          }}
        >
          Ayush Singh<span style={{ color: 'var(--accent)' }}>.</span>
        </span>
        <span style={{ fontSize: '12px', color: 'var(--text-dim)', letterSpacing: '0.06em' }}>
          Designed & built with React + Tailwind CSS
        </span>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  );
}

function ContactRow({ icon: Icon, label, value, href, index, inView }) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '16px',
        padding: '16px 0',
        borderBottom: '1px solid var(--border)',
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateX(0)' : 'translateX(16px)',
        transition: `all 0.5s cubic-bezier(0.16, 1, 0.3, 1) ${0.1 + index * 0.08}s`,
      }}
    >
      <div
        style={{
          width: '36px',
          height: '36px',
          borderRadius: '6px',
          background: 'var(--accent-dim)',
          border: '1px solid var(--accent-border)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
        }}
      >
        <Icon size={15} color="var(--accent)" strokeWidth={1.5} />
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontSize: '10px', color: 'var(--text-dim)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '2px' }}>
          {label}
        </div>
        {href ? (
          <a
            href={href}
            target={href.startsWith('http') ? '_blank' : undefined}
            rel="noopener noreferrer"
            style={{
              fontSize: '13px',
              color: 'var(--text-muted)',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              transition: 'color 0.2s',
              fontFamily: href.startsWith('mailto') || href.startsWith('tel') ? 'inherit' : "'JetBrains Mono', monospace",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
          >
            {value}
            {href.startsWith('http') && <ArrowUpRight size={11} />}
          </a>
        ) : (
          <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>{value}</span>
        )}
      </div>
    </div>
  );
}
