
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
        background: scrollY > 80 ? 'rgba(250,250,247,0.92)' : 'transparent',
        backdropFilter: scrollY > 80 ? 'blur(20px)' : 'none',
        borderBottom: scrollY > 80 ? '1px solid rgba(0,0,0,0.06)' : '1px solid transparent',
        padding: scrollY > 80 ? '12px 0' : '20px 0',
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <button onClick={() => scrollTo('home')} style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{
            width: 40, height: 40, borderRadius: 12,
            background: 'linear-gradient(135deg, #FF6B6B, #ee5a24)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: 'white', fontWeight: 900, fontSize: 18,
            fontFamily: "'Nanum Myeongjo', serif",
          }}>배</div>
          <span style={{
            fontSize: 18, fontWeight: 800, letterSpacing: -0.5,
            color: scrollY > 80 ? '#1a1a2e' : 'white',
            transition: 'color 0.3s',
          }}>일품배쌤수학</span>
        </button>

        <div className="desktop-nav" style={{ display: 'flex', gap: 4 }}>
          {SECTIONS.map((s) => (
            <button
              key={s.id}
              className="nav-link"
              onClick={() => scrollTo(s.id)}
              style={{
                color: activeNav === s.id
                  ? '#FF6B6B'
                  : scrollY > 80 ? '#555' : 'rgba(255,255,255,0.8)',
                fontWeight: activeNav === s.id ? 700 : 500,
              }}
            >
              {s.label}
            </button>
          ))}
          <a
            href={`tel:${PHONE.replace(/-/g, '')}`}
            className="cta-btn"
            style={{ padding: '10px 24px', fontSize: 14, marginLeft: 8 }}
          >
            📞 상담 전화
          </a>
        </div>

        <button
          className="mobile-menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            display: 'none', background: 'none', border: 'none',
            fontSize: 28, cursor: 'pointer', padding: 4,
            color: scrollY > 80 ? '#1a1a2e' : 'white',
          }}
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {menuOpen && (
        <div style={{
          position: 'absolute', top: '100%', left: 0, right: 0,
          background: 'rgba(250,250,247,0.98)', backdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(0,0,0,0.06)',
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
                color: activeNav === s.id ? '#FF6B6B' : '#333',
                cursor: 'pointer', fontFamily: 'inherit',
                borderBottom: '1px solid rgba(0,0,0,0.04)',
              }}
            >
              {s.label}
            </button>
          ))}
          <a
            href={`tel:${PHONE.replace(/-/g, '')}`}
            style={{
              display: 'block', textAlign: 'center', marginTop: 16,
              padding: '14px', background: '#FF6B6B', color: 'white',
              borderRadius: 14, fontWeight: 700, fontSize: 16,
              textDecoration: 'none',
            }}
          >
            📞 상담 전화하기
          </a>
        </div>
      )}
    </nav>
  );
}
