import { useInView } from '../hooks/useInView';
import { data } from '../data';

export default function Stats() {
  const [ref, inView] = useInView();

  return (
    <section
      ref={ref}
      style={{
        padding: '0 clamp(24px, 6vw, 96px)',
        marginBottom: '80px',
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
          gap: '1px',
          border: '1px solid var(--border)',
          borderRadius: '8px',
          overflow: 'hidden',
          background: 'var(--border)',
        }}
      >
        {data.stats.map((stat, i) => (
          <div
            key={stat.label}
            style={{
              background: 'var(--surface)',
              padding: '28px 24px',
              opacity: inView ? 1 : 0,
              transform: inView ? 'translateY(0)' : 'translateY(20px)',
              transition: `all 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${i * 0.1}s`,
            }}
          >
            <div
              style={{
                fontFamily: "'Cormorant', serif",
                fontSize: 'clamp(36px, 5vw, 52px)',
                fontWeight: 500,
                color: 'var(--accent)',
                lineHeight: 1,
                marginBottom: '6px',
                letterSpacing: '-0.02em',
              }}
            >
              {stat.value}
            </div>
            <div style={{ fontSize: '13px', fontWeight: 500, color: 'var(--text)', marginBottom: '2px' }}>
              {stat.label}
            </div>
            <div style={{ fontSize: '11px', color: 'var(--text-muted)', letterSpacing: '0.04em' }}>
              {stat.sub}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
