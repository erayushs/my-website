import { useState } from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, ArrowUpRight, Send, CheckCircle, AlertCircle, Loader } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { data } from '../data';

const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT;

function InputField({ label, type = 'text', name, value, onChange, placeholder, multiline }) {
  const [focused, setFocused] = useState(false);
  const Tag = multiline ? 'textarea' : 'input';

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
      <label style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
        {label}
      </label>
      <Tag
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required
        rows={multiline ? 5 : undefined}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={{
          background: 'var(--surface)',
          border: `1px solid ${focused ? 'var(--accent-border)' : 'var(--border)'}`,
          borderRadius: '6px',
          padding: '12px 14px',
          color: 'var(--text)',
          fontSize: '14px',
          fontFamily: "'Outfit', sans-serif",
          outline: 'none',
          resize: multiline ? 'vertical' : undefined,
          transition: 'border-color 0.2s, box-shadow 0.2s',
          boxShadow: focused ? '0 0 0 3px rgba(212,168,57,0.08)' : 'none',
          width: '100%',
          boxSizing: 'border-box',
        }}
      />
    </div>
  );
}

export default function Contact() {
  const [ref, inView] = useInView();

  const [form, setForm] = useState({ from_name: '', from_email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({ name: form.from_name, email: form.from_email, message: form.message }),
      });
      if (res.ok) {
        setStatus('success');
        setForm({ from_name: '', from_email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" style={{ padding: '80px clamp(24px, 6vw, 96px) 60px', background: 'var(--surface)', borderTop: '1px solid var(--border)' }}>

      {/* Section label */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '64px' }}>
        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '12px', color: 'var(--accent)', letterSpacing: '0.1em' }}>04</span>
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
          gap: '64px',
          alignItems: 'start',
          opacity: inView ? 1 : 0,
          transform: inView ? 'translateY(0)' : 'translateY(24px)',
          transition: 'all 0.7s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        {/* Left: info */}
        <div>
          <h3 style={{ fontFamily: "'Cormorant', serif", fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 300, lineHeight: 1.05, color: 'var(--text)', letterSpacing: '-0.02em', marginBottom: '20px' }}>
            Have a project{' '}
            <em style={{ color: 'var(--accent)', fontStyle: 'italic' }}>in mind?</em>
          </h3>
          <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '36px' }}>
            I'm open to frontend developer roles and freelance projects.
            Fill out the form and I'll get back to you as soon as possible.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {[
              { icon: Mail,     label: 'Email',    value: data.email,                      href: `mailto:${data.email}` },
              { icon: Phone,    label: 'Phone',    value: data.phone,                      href: `tel:${data.phone}` },
              { icon: Github,   label: 'GitHub',   value: 'github.com/erayushs',           href: data.github },
              { icon: Linkedin, label: 'LinkedIn', value: 'linkedin.com/in/erayushsingh', href: data.linkedin },
              { icon: MapPin,   label: 'Location', value: 'Noida, Uttar Pradesh',          href: null },
            ].map(({ icon: Icon, label, value, href }, i) => (
              <ContactRow key={label} icon={Icon} label={label} value={value} href={href} index={i} inView={inView} />
            ))}
          </div>
        </div>

        {/* Right: form */}
        <div
          style={{
            background: 'var(--bg)',
            border: '1px solid var(--border)',
            borderRadius: '12px',
            padding: 'clamp(24px, 4vw, 40px)',
          }}
        >
          {status === 'success' ? (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '16px', padding: '40px 20px', textAlign: 'center' }}>
              <CheckCircle size={48} color="var(--accent)" strokeWidth={1.5} />
              <h4 style={{ fontFamily: "'Cormorant', serif", fontSize: '28px', fontWeight: 500, color: 'var(--text)' }}>Message Sent!</h4>
              <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                Thanks for reaching out. I'll get back to you within 24 hours.
              </p>
              <button
                onClick={() => setStatus('idle')}
                style={{ marginTop: '8px', fontSize: '13px', color: 'var(--accent)', background: 'none', border: 'none', cursor: 'pointer', textDecoration: 'underline' }}
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }} className="form-grid">
                <InputField label="Your Name" name="from_name" value={form.from_name} onChange={handleChange} placeholder="John Doe" />
                <InputField label="Email Address" type="email" name="from_email" value={form.from_email} onChange={handleChange} placeholder="john@example.com" />
              </div>
              <InputField label="Message" name="message" value={form.message} onChange={handleChange} placeholder="Tell me about your project..." multiline />

              {status === 'error' && (
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 14px', background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.2)', borderRadius: '6px' }}>
                  <AlertCircle size={15} color="#ef4444" />
                  <span style={{ fontSize: '13px', color: '#ef4444' }}>Something went wrong. Please try again or email me directly.</span>
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'sending'}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  padding: '13px 24px',
                  background: status === 'sending' ? 'var(--accent-dim)' : 'var(--accent)',
                  color: status === 'sending' ? 'var(--accent)' : '#08080b',
                  border: `1px solid ${status === 'sending' ? 'var(--accent-border)' : 'transparent'}`,
                  borderRadius: '6px',
                  fontSize: '14px',
                  fontWeight: 600,
                  fontFamily: "'Outfit', sans-serif",
                  letterSpacing: '0.04em',
                  cursor: status === 'sending' ? 'not-allowed' : 'pointer',
                  transition: 'all 0.25s',
                  width: '100%',
                }}
                onMouseEnter={(e) => { if (status !== 'sending') { e.currentTarget.style.background = 'var(--accent-hover)'; e.currentTarget.style.transform = 'translateY(-1px)'; }}}
                onMouseLeave={(e) => { if (status !== 'sending') { e.currentTarget.style.background = 'var(--accent)'; e.currentTarget.style.transform = 'translateY(0)'; }}}
              >
                {status === 'sending' ? (
                  <><Loader size={15} style={{ animation: 'spin 1s linear infinite' }} /> Sending...</>
                ) : (
                  <><Send size={15} /> Send Message</>
                )}
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Footer */}
      <div style={{ marginTop: '80px', paddingTop: '28px', borderTop: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
        <span style={{ fontFamily: "'Cormorant', serif", fontSize: '20px', fontWeight: 500, color: 'var(--text-dim)' }}>
          Ayush Singh<span style={{ color: 'var(--accent)' }}>.</span>
        </span>
        <span style={{ fontSize: '12px', color: 'var(--text-dim)', letterSpacing: '0.06em' }}>
          Designed & built with React + Tailwind CSS
        </span>
      </div>

      <style>{`
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @media (max-width: 480px) {
          .form-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

function ContactRow({ icon: Icon, label, value, href, index, inView }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '14px 0', borderBottom: '1px solid var(--border)', opacity: inView ? 1 : 0, transform: inView ? 'translateX(0)' : 'translateX(16px)', transition: `all 0.5s cubic-bezier(0.16, 1, 0.3, 1) ${0.1 + index * 0.08}s` }}>
      <div style={{ width: '34px', height: '34px', borderRadius: '6px', background: 'var(--accent-dim)', border: '1px solid var(--accent-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
        <Icon size={14} color="var(--accent)" strokeWidth={1.5} />
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontSize: '10px', color: 'var(--text-dim)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1px' }}>{label}</div>
        {href ? (
          <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer"
            style={{ fontSize: '13px', color: 'var(--text-muted)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '4px', transition: 'color 0.2s' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}>
            {value}{href.startsWith('http') && <ArrowUpRight size={11} />}
          </a>
        ) : (
          <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>{value}</span>
        )}
      </div>
    </div>
  );
}
