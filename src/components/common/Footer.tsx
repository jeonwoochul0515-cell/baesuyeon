
import { SECTIONS, PHONE, ADDRESS, BLOG_URL, REGISTRATION, BIZ_NAME, OWNER, BIZ_NO } from '../../data/constants';
import { SEO_TAGS } from '../../data/seo';

interface FooterProps {
  scrollTo: (id: string) => void;
}

export default function Footer({ scrollTo }: FooterProps) {
  return (
    <footer style={{
      background: 'var(--ink)', color: 'rgba(255,255,255,0.55)',
      padding: '48px 32px',
    }}>
      <div style={{ maxWidth: 1000, margin: '0 auto', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 32 }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
            <img src="/icons/icon-192x192.png" alt="이룸수학 로고" style={{
              width: 36, height: 36, borderRadius: 10,
              objectFit: 'contain',
            }} />
            <span style={{ fontSize: 16, fontWeight: 700, color: 'rgba(255,255,255,0.8)' }}>이룸수학</span>
          </div>
          <div style={{ fontSize: 13, lineHeight: 2 }}>
            {ADDRESS}<br />
            {PHONE}<br />
            월·수·목·금·토·일 운영 (화요일 휴무)<br />
            {BIZ_NAME} · 대표 {OWNER}<br />
            사업자등록번호 {BIZ_NO}<br />
            {REGISTRATION}
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
          <div style={{ fontSize: 13, fontWeight: 600, color: 'rgba(255,255,255,0.7)', marginBottom: 12 }}>수학 칼럼</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, fontSize: 13 }}>
            {[
              { href: '/columns/gyeongju-math-academy-guide/', label: '경주 수학학원 고르는 기준 5가지' },
              { href: '/columns/gyeongju-naesin-math/', label: '경주 고등학교 내신 수학 대비법' },
              { href: '/columns/gyeongju-math-academy-cost/', label: '경주 수학학원비 총정리' },
              { href: '/columns/tutoring-vs-academy/', label: '수학과외 vs 수학학원' },
              { href: '/columns/', label: '칼럼 전체 보기 →' },
            ].map((c) => (
              <a
                key={c.href}
                href={c.href}
                style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = 'rgba(255,255,255,0.8)')}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = 'rgba(255,255,255,0.4)')}
              >
                {c.label}
              </a>
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
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = '#9DBBE8')}
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
        © 2026 이룸수학. All rights reserved.
      </div>
    </footer>
  );
}
