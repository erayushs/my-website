import { useState } from 'react';
import { Github, ExternalLink, ArrowUpRight } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { data } from '../data';

function SectionLabel({ number, title }) {
  const [ref, inView] = useInView();
  return (
    <div
      ref={ref}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '16px',
        marginBottom: '56px',
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateX(0)' : 'translateX(-20px)',
        transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
      }}
    >
      <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '12px', color: 'var(--accent)', letterSpacing: '0.1em' }}>
        {number}
      </span>
      <div style={{ flex: 1, height: '1px', background: 'var(--border)' }} />
      <h2 style={{ fontFamily: "'Cormorant', serif", fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 500, color: 'var(--text)', letterSpacing: '-0.01em' }}>
        {title}
      </h2>
    </div>
  );
}

function ProjectCard({ project, index }) {
  const [ref, inView] = useInView();
  const [hovered, setHovered] = useState(false);

  const handleCardClick = () => {
    if (project.demo) window.open(project.demo, '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={handleCardClick}
      style={{
        background: hovered ? 'var(--surface-2)' : 'var(--surface)',
        border: `1px solid ${hovered ? 'var(--border-light)' : 'var(--border)'}`,
        borderRadius: '8px',
        padding: '28px',
        position: 'relative',
        overflow: 'hidden',
        cursor: project.demo ? 'pointer' : 'default',
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(28px)',
        transition: `opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.08}s,
                     transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.08}s,
                     background 0.25s, border-color 0.25s, box-shadow 0.25s`,
        boxShadow: hovered ? '0 16px 40px rgba(0,0,0,0.3)' : 'none',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Glow accent on hover */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '1px',
          background: hovered ? 'linear-gradient(90deg, transparent, var(--accent), transparent)' : 'transparent',
          transition: 'background 0.35s',
        }}
      />

      {/* Live indicator */}
      {project.demo && (
        <div style={{
          position: 'absolute',
          top: '14px',
          right: '14px',
          display: 'flex',
          alignItems: 'center',
          gap: '5px',
          opacity: hovered ? 1 : 0,
          transform: hovered ? 'translateY(0)' : 'translateY(-4px)',
          transition: 'all 0.2s',
          pointerEvents: 'none',
        }}>
          <span style={{ fontSize: '10px', color: 'var(--accent)', letterSpacing: '0.08em', fontWeight: 500 }}>LIVE</span>
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent)', boxShadow: '0 0 6px var(--accent)' }} />
        </div>
      )}

      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '14px', gap: '12px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
          <h3
            style={{
              fontFamily: "'Cormorant', serif",
              fontSize: 'clamp(20px, 2.5vw, 24px)',
              fontWeight: 500,
              color: 'var(--text)',
              letterSpacing: '-0.01em',
              lineHeight: 1.1,
            }}
          >
            {project.name}
          </h3>
          {project.badge && (
            <span
              style={{
                padding: '3px 8px',
                background: 'rgba(212,168,57,0.15)',
                border: '1px solid var(--accent-border)',
                borderRadius: '100px',
                fontSize: '10px',
                fontWeight: 600,
                color: 'var(--accent)',
                letterSpacing: '0.06em',
                whiteSpace: 'nowrap',
              }}
            >
              {project.badge}
            </span>
          )}
          {project.featured && !project.badge && (
            <span
              style={{
                padding: '3px 8px',
                background: 'rgba(212,168,57,0.08)',
                border: '1px solid rgba(212,168,57,0.15)',
                borderRadius: '100px',
                fontSize: '10px',
                fontWeight: 600,
                color: 'var(--accent)',
                letterSpacing: '0.06em',
              }}
            >
              Featured
            </span>
          )}
        </div>

        {/* Links */}
        <div style={{ display: 'flex', gap: '8px', flexShrink: 0 }}>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: hovered ? 'var(--text-muted)' : 'var(--text-dim)',
                transition: 'color 0.2s, transform 0.2s',
                display: 'flex',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--accent)';
                e.currentTarget.style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = hovered ? 'var(--text-muted)' : 'var(--text-dim)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
              aria-label="GitHub"
              onClick={(e) => e.stopPropagation()}
            >
              <Github size={16} strokeWidth={1.5} />
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'var(--text-dim)', transition: 'color 0.2s', display: 'flex' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-dim)')}
              aria-label="Live Demo"
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink size={16} strokeWidth={1.5} />
            </a>
          )}
        </div>
      </div>

      {/* Description */}
      <p
        style={{
          fontSize: '13.5px',
          color: 'var(--text-muted)',
          lineHeight: 1.65,
          flex: 1,
          marginBottom: '20px',
        }}
      >
        {project.desc}
      </p>

      {/* Tags */}
      <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
        {project.tags.map((tag) => (
          <span
            key={tag}
            style={{
              padding: '3px 10px',
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid var(--border)',
              borderRadius: '3px',
              fontSize: '11px',
              fontFamily: "'JetBrains Mono', monospace",
              color: 'var(--text-muted)',
              letterSpacing: '0.04em',
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      style={{
        padding: '80px clamp(24px, 6vw, 96px)',
        background: 'var(--surface)',
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
      }}
    >
      <SectionLabel number="02" title="Selected Projects" />

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 340px), 1fr))',
          gap: '16px',
        }}
      >
        {data.projects.map((project, i) => (
          <ProjectCard key={project.name} project={project} index={i} />
        ))}
      </div>

      <div
        style={{
          marginTop: '40px',
          textAlign: 'center',
        }}
      >
        <a
          href={data.github}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            fontSize: '13px',
            color: 'var(--text-muted)',
            textDecoration: 'none',
            letterSpacing: '0.05em',
            borderBottom: '1px solid var(--border)',
            paddingBottom: '2px',
            transition: 'all 0.2s',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = 'var(--accent)';
            e.currentTarget.style.borderBottomColor = 'var(--accent-border)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = 'var(--text-muted)';
            e.currentTarget.style.borderBottomColor = 'var(--border)';
          }}
        >
          View all 48 repositories on GitHub
          <ArrowUpRight size={14} />
        </a>
      </div>
    </section>
  );
}
