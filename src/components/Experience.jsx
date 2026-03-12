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
      <span
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '12px',
          color: 'var(--accent)',
          letterSpacing: '0.1em',
        }}
      >
        {number}
      </span>
      <div style={{ flex: 1, height: '1px', background: 'var(--border)' }} />
      <h2
        style={{
          fontFamily: "'Cormorant', serif",
          fontSize: 'clamp(28px, 4vw, 40px)',
          fontWeight: 500,
          color: 'var(--text)',
          letterSpacing: '-0.01em',
        }}
      >
        {title}
      </h2>
    </div>
  );
}

function ExperienceCard({ job, index }) {
  const [ref, inView] = useInView();

  return (
    <div
      ref={ref}
      style={{
        display: 'grid',
        gridTemplateColumns: '200px 1fr',
        gap: '0 40px',
        position: 'relative',
        paddingBottom: '48px',
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(24px)',
        transition: `all 0.65s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.15}s`,
      }}
    >
      {/* Timeline line */}
      <div
        style={{
          position: 'absolute',
          left: '199px',
          top: '8px',
          bottom: 0,
          width: '1px',
          background: 'linear-gradient(to bottom, var(--border-light), var(--border), transparent)',
        }}
      />

      {/* Left: meta */}
      <div style={{ paddingTop: '2px' }}>
        <div
          style={{
            fontSize: '12px',
            fontFamily: "'JetBrains Mono', monospace",
            color: 'var(--text-muted)',
            marginBottom: '6px',
            letterSpacing: '0.05em',
          }}
        >
          {job.period}
        </div>
        <div
          style={{
            display: 'inline-flex',
            padding: '3px 8px',
            background: job.current ? 'var(--accent-dim)' : 'transparent',
            border: `1px solid ${job.current ? 'var(--accent-border)' : 'var(--border)'}`,
            borderRadius: '3px',
            fontSize: '10px',
            fontWeight: 500,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: job.current ? 'var(--accent)' : 'var(--text-dim)',
          }}
        >
          {job.current ? '● Active' : job.type}
        </div>
      </div>

      {/* Right: content */}
      <div style={{ position: 'relative', paddingLeft: '32px' }}>
        {/* Dot on timeline */}
        <div
          style={{
            position: 'absolute',
            left: '-5px',
            top: '8px',
            width: '9px',
            height: '9px',
            borderRadius: '50%',
            background: job.current ? 'var(--accent)' : 'var(--border-light)',
            border: `2px solid ${job.current ? 'var(--accent)' : 'var(--border)'}`,
            boxShadow: job.current ? '0 0 12px rgba(212,168,57,0.4)' : 'none',
          }}
        />

        <div style={{ marginBottom: '4px' }}>
          <h3
            style={{
              fontFamily: "'Cormorant', serif",
              fontSize: 'clamp(22px, 3vw, 28px)',
              fontWeight: 500,
              color: 'var(--text)',
              letterSpacing: '-0.01em',
              lineHeight: 1.1,
            }}
          >
            {job.role}
          </h3>
          <div style={{ fontSize: '14px', color: 'var(--accent)', fontWeight: 500, marginTop: '2px' }}>
            {job.company}
          </div>
        </div>

        <ul style={{ listStyle: 'none', padding: 0, marginTop: '16px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {job.highlights.map((point, i) => (
            <li
              key={i}
              style={{
                display: 'flex',
                gap: '10px',
                fontSize: '14px',
                color: 'var(--text-muted)',
                lineHeight: 1.6,
              }}
            >
              <span style={{ color: 'var(--accent)', flexShrink: 0, marginTop: '2px', fontSize: '12px' }}>▸</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .exp-grid { grid-template-columns: 1fr !important; }
          .exp-grid > div:first-child { padding-bottom: 12px; }
          .timeline-line { display: none !important; }
          .timeline-dot { left: -20px !important; }
        }
      `}</style>
    </div>
  );
}

export default function Experience() {
  return (
    <section
      id="experience"
      style={{
        padding: '80px clamp(24px, 6vw, 96px)',
      }}
    >
      <SectionLabel number="01" title="Work Experience" />

      <div>
        {data.experience.map((job, i) => (
          <ExperienceCard key={job.company} job={job} index={i} />
        ))}
      </div>
    </section>
  );
}
