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

function ExperienceCard({ job, index }) {
  const [ref, inView] = useInView();

  return (
    <>
      <style>{`
        .exp-card {
          display: grid;
          grid-template-columns: 200px 1fr;
          gap: 0 40px;
          position: relative;
          padding-bottom: 48px;
        }
        .exp-timeline-line {
          position: absolute;
          left: 199px;
          top: 8px;
          bottom: 0;
          width: 1px;
          background: linear-gradient(to bottom, var(--border-light), var(--border), transparent);
        }
        .exp-meta {
          padding-top: 2px;
        }
        .exp-content {
          position: relative;
          padding-left: 32px;
        }
        .exp-dot {
          position: absolute;
          left: -5px;
          top: 8px;
        }

        @media (max-width: 640px) {
          .exp-card {
            grid-template-columns: 1fr;
            gap: 0;
            padding-bottom: 36px;
            padding-left: 20px;
            border-left: 1px solid var(--border-light);
          }
          .exp-card:last-child {
            border-left-color: transparent;
          }
          .exp-timeline-line {
            display: none;
          }
          .exp-meta {
            display: flex;
            align-items: center;
            gap: 10px;
            flex-wrap: wrap;
            margin-bottom: 10px;
            padding-top: 0;
          }
          .exp-content {
            padding-left: 0;
          }
          .exp-dot {
            left: -25px;
            top: 6px;
          }
        }
      `}</style>

      <div
        ref={ref}
        className="exp-card"
        style={{
          opacity: inView ? 1 : 0,
          transform: inView ? 'translateY(0)' : 'translateY(24px)',
          transition: `opacity 0.65s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.15}s,
                       transform 0.65s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.15}s`,
        }}
      >
        {/* Timeline vertical line (desktop) */}
        <div className="exp-timeline-line" />

        {/* Left: meta */}
        <div className="exp-meta">
          <div style={{
            fontSize: '12px',
            fontFamily: "'JetBrains Mono', monospace",
            color: 'var(--text-muted)',
            letterSpacing: '0.05em',
          }}>
            {job.period}
          </div>
          <div style={{
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
            whiteSpace: 'nowrap',
          }}>
            {job.current ? '● Active' : job.type}
          </div>
        </div>

        {/* Right: content */}
        <div className="exp-content">
          {/* Dot on timeline */}
          <div
            className="exp-dot"
            style={{
              position: 'absolute',
              width: '9px',
              height: '9px',
              borderRadius: '50%',
              background: job.current ? 'var(--accent)' : 'var(--border-light)',
              border: `2px solid ${job.current ? 'var(--accent)' : 'var(--border)'}`,
              boxShadow: job.current ? '0 0 12px rgba(212,168,57,0.4)' : 'none',
            }}
          />

          <h3 style={{
            fontFamily: "'Cormorant', serif",
            fontSize: 'clamp(22px, 3vw, 28px)',
            fontWeight: 500,
            color: 'var(--text)',
            letterSpacing: '-0.01em',
            lineHeight: 1.1,
          }}>
            {job.role}
          </h3>
          <div style={{ fontSize: '14px', color: 'var(--accent)', fontWeight: 500, marginTop: '2px', marginBottom: '16px' }}>
            {job.company}
          </div>

          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {job.highlights.map((point, i) => (
              <li key={i} style={{ display: 'flex', gap: '10px', fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                <span style={{ color: 'var(--accent)', flexShrink: 0, marginTop: '2px', fontSize: '12px' }}>▸</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default function Experience() {
  return (
    <section id="experience" style={{ padding: '80px clamp(24px, 6vw, 96px)' }}>
      <SectionLabel number="01" title="Work Experience" />
      <div>
        {data.experience.map((job, i) => (
          <ExperienceCard key={job.company} job={job} index={i} />
        ))}
      </div>
    </section>
  );
}
