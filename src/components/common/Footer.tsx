
import { SECTIONS, PHONE, ADDRESS, BLOG_URL, REGISTRATION } from '../../data/constants';
import { SEO_TAGS } from '../../data/seo';

interface FooterProps {
  scrollTo: (id: string) => void;
}

export default function Footer({ scrollTo }: FooterProps) {
  return (
    <footer style={{
      background: '#1a1a2e', color: 'rgba(255,255,255,0.5)',
      padding: '48px 32px',
    }}>
      <div style={{ maxWidth: 1000, margin: '0 auto', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 32 }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
            <div style={{
              width: 36, height: 36, borderRadius: 10,
              background: 'linear-gradient(135deg, #FF6B6B, #ee5a24)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: 'white', fontWeight: 900, fontSize: 16,
              fontFamily: "'Nanum Myeongjo', serif",
            }}>배</div>
            <span style={{ fontSize: 16, fontWeight: 700, color: 'rgba(255,255,255,0.8)' }}>일품배쌤수학</span>
          </div>
          <div style={{ fontSize: 13, lineHeight: 2 }}>
            📍 {ADDRESS}<br />
            📞 {PHONE}<br />
            🕐 평일 · 주말 수업 운영<br />
            📋 {REGISTRATION}
          </div>
        </div>

        <div>
          <div style={{ fontSize: 13, fontWeight: 600, color: 'rgba(255,255,255,0.7)', marginBottom: 12 }}>바로가기</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, fontSize: 13 }}>
            {SECTIONS.map((s) => (
              <button
                key={s.id}
                onClick={() => scrollTo(s.id)}
                style={{
                  background: 'none', border: 'none',
                  color: 'rgba(255,255,255,0.4)', cursor: 'pointer',
                  textAlign: 'left', padding: 0, fontSize: 13,
                  fontFamily: 'inherit',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = 'rgba(255,255,255,0.8)')}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = 'rgba(255,255,255,0.4)')}
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>

        <div>
          <div style={{ fontSize: 13, fontWeight: 600, color: 'rgba(255,255,255,0.7)', marginBottom: 12 }}>블로그</div>
          <div style={{ fontSize: 13 }}>
            <a
              href={BLOG_URL}
              target="_blank"
              rel="noreferrer"
              style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = '#4ECDC4')}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = 'rgba(255,255,255,0.4)')}
            >
              네이버 블로그 →
            </a>
          </div>
        </div>
      </div>

      <div style={{
        maxWidth: 1000, margin: '24px auto 0',
        display: 'flex', flexWrap: 'wrap', gap: 6, justifyContent: 'center',
      }}>
        {SEO_TAGS.map((tag, i) => (
          <span key={i} style={{
            fontSize: 11, padding: '3px 10px', borderRadius: 20,
            background: 'rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.35)',
          }}>#{tag}</span>
        ))}
      </div>

      <div style={{
        maxWidth: 1000, margin: '32px auto 0',
        paddingTop: 24, borderTop: '1px solid rgba(255,255,255,0.06)',
        fontSize: 12, textAlign: 'center', color: 'rgba(255,255,255,0.25)',
      }}>
        © 2025 일품배쌤수학. All rights reserved.
      </div>
    </footer>
  );
}
