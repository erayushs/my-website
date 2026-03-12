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

function SkillGroup({ category, skills, index }) {
  const [ref, inView] = useInView();

  return (
    <div
      ref={ref}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(20px)',
        transition: `all 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.1}s`,
      }}
    >
      <div
        style={{
          fontSize: '11px',
          fontFamily: "'JetBrains Mono', monospace",
          color: 'var(--accent)',
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          marginBottom: '14px',
          fontWeight: 500,
        }}
      >
        {category}
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
        {skills.map((skill) => (
          <SkillTag key={skill} skill={skill} />
        ))}
      </div>
    </div>
  );
}

function SkillTag({ skill }) {
  return (
    <span
      style={{
        padding: '6px 12px',
        background: 'var(--surface-2)',
        border: '1px solid var(--border)',
        borderRadius: '4px',
        fontSize: '13px',
        color: 'var(--text-muted)',
        transition: 'all 0.2s',
        cursor: 'default',
        letterSpacing: '0.02em',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = 'var(--accent-border)';
        e.currentTarget.style.color = 'var(--accent)';
        e.currentTarget.style.background = 'var(--accent-dim)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'var(--border)';
        e.currentTarget.style.color = 'var(--text-muted)';
        e.currentTarget.style.background = 'var(--surface-2)';
      }}
    >
      {skill}
    </span>
  );
}

export default function Skills() {
  return (
    <section
      id="skills"
      style={{
        padding: '80px clamp(24px, 6vw, 96px)',
      }}
    >
      <SectionLabel number="03" title="Technical Skills" />

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 300px), 1fr))',
          gap: '40px 60px',
        }}
      >
        {Object.entries(data.skills).map(([category, skills], i) => (
          <SkillGroup key={category} category={category} skills={skills} index={i} />
        ))}
      </div>

      {/* Education callout */}
      <EducationSection />
    </section>
  );
}

function EducationSection() {
  const [ref, inView] = useInView();

  return (
    <div
      ref={ref}
      style={{
        marginTop: '64px',
        padding: '28px 32px',
        border: '1px solid var(--border)',
        borderRadius: '8px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '16px',
        background: 'var(--surface)',
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(20px)',
        transition: 'all 0.65s cubic-bezier(0.16, 1, 0.3, 1)',
      }}
    >
      <div>
        <div
          style={{
            fontSize: '11px',
            fontFamily: "'JetBrains Mono', monospace",
            color: 'var(--accent)',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            marginBottom: '8px',
          }}
        >
          Education
        </div>
        <div
          style={{
            fontFamily: "'Cormorant', serif",
            fontSize: 'clamp(20px, 2.5vw, 26px)',
            fontWeight: 500,
            color: 'var(--text)',
            letterSpacing: '-0.01em',
          }}
        >
          B.Tech in Civil Engineering
        </div>
        <div style={{ fontSize: '13px', color: 'var(--text-muted)', marginTop: '4px' }}>
          BBAU, Lucknow
        </div>
      </div>
      <div style={{ textAlign: 'right' }}>
        <div
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '13px',
            color: 'var(--text-muted)',
          }}
        >
          2017 – 2021
        </div>
        <div
          style={{
            fontSize: '12px',
            color: 'var(--text-dim)',
            marginTop: '4px',
            fontStyle: 'italic',
          }}
        >
          Self-taught frontend developer
        </div>
      </div>
    </div>
  );
}
