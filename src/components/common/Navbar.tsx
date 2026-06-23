
import { SECTIONS, PHONE } from '../../data/constants';

interface NavbarProps {
  activeNav: string;
  scrollY: number;
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
  scrollTo: (id: string) => void;
}

export default function Navbar({ activeNav, scrollY, menuOpen, setMenuOpen, scrollTo }: NavbarProps) {
  return (
    <nav
      className="nav-fixed"
      style={{
        background: scrollY > 80 ? 'rgba(255,255,255,0.92)' : 'rgba(255,255,255,0.6)',
        backdropFilter: 'blur(16px)',
        borderBottom: scrollY > 80 ? '1px solid var(--line)' : '1px solid transparent',
        padding: scrollY > 80 ? '12px 0' : '18px 0',
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <button onClick={() => scrollTo('home')} style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 10 }}>
          <img src="/icons/icon-192x192.png" alt="이룸수학 로고" style={{
            width: 40, height: 40, borderRadius: 12,
            objectFit: 'contain',
          }} />
          <span style={{
            fontSize: 18, fontWeight: 800, letterSpacing: -0.5,
            color: 'var(--ink)',
          }}>이룸수학</span>
        </button>

        <div className="desktop-nav" style={{ display: 'flex', gap: 4 }}>
          {SECTIONS.map((s) => (
            <button
              key={s.id}
              className="nav-link"
              onClick={() => scrollTo(s.id)}
              style={{
                color: activeNav === s.id ? 'var(--primary)' : '#555',
                fontWeight: activeNav === s.id ? 700 : 500,
              }}
            >
              {s.label}
            </button>
          ))}
          <a
            href={`tel:${PHONE.replace(/-/g, '')}`}
            className="cta-btn"
            style={{ padding: '10px 22px', fontSize: 14, marginLeft: 8 }}
          >
            상담 전화
          </a>
        </div>

        <button
          className="mobile-menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            display: 'none', background: 'none', border: 'none',
            fontSize: 28, cursor: 'pointer', padding: 4,
            color: 'var(--ink)',
          }}
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {menuOpen && (
        <div style={{
          position: 'absolute', top: '100%', left: 0, right: 0,
          background: 'rgba(255,255,255,0.98)', backdropFilter: 'blur(20px)',
          borderBottom: '1px solid var(--line)',
          padding: '16px 32px',
        }}>
          {SECTIONS.map((s) => (
            <button
              key={s.id}
              onClick={() => scrollTo(s.id)}
              style={{
                display: 'block', width: '100%', textAlign: 'left',
                padding: '14px 0', border: 'none', background: 'none',
                fontSize: 16, fontWeight: activeNav === s.id ? 700 : 400,
                color: activeNav === s.id ? 'var(--primary)' : '#333',
                cursor: 'pointer', fontFamily: 'inherit',
                borderBottom: '1px solid var(--line)',
              }}
            >
              {s.label}
            </button>
          ))}
          <a
            href={`tel:${PHONE.replace(/-/g, '')}`}
            style={{
              display: 'block', textAlign: 'center', marginTop: 16,
              padding: '14px', background: 'var(--primary)', color: 'white',
              borderRadius: 10, fontWeight: 700, fontSize: 16,
              textDecoration: 'none',
            }}
          >
            상담 전화하기
          </a>
        </div>
      )}
    </nav>
  );
}
