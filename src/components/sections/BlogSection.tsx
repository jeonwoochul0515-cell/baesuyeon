// 네이버 블로그 최신 글 3건을 카드로 노출하는 소식 섹션
import FadeIn from '../common/FadeIn';
import { BLOG_POSTS } from '../../data/posts';
import { BLOG_URL } from '../../data/constants';

export default function BlogSection() {
  return (
    <section id="blog" style={{ padding: '88px 0' }}>
      <div className="container" style={{ maxWidth: 1100, margin: '0 auto', padding: '0 32px' }}>
        <FadeIn>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <span className="section-label">BLOG</span>
            <h2 className="section-title" style={{ fontFamily: "'Nanum Myeongjo', serif", fontSize: 36, fontWeight: 800, letterSpacing: -0.5 }}>
              최신 블로그 글
            </h2>
            <p style={{ fontSize: 16, color: '#888', marginTop: 12 }}>경주 황성동 이룸수학의 학습법·내신 분석 칼럼을 확인하세요</p>
          </div>
        </FadeIn>

        <div className="blog-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
          {BLOG_POSTS.map((post, i) => (
            <FadeIn key={i} delay={0.08 * i}>
              <a
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex', flexDirection: 'column', height: '100%',
                  background: 'white', borderRadius: 18,
                  border: '1px solid var(--line)',
                  boxShadow: 'var(--shadow)',
                  padding: '26px 24px', textDecoration: 'none',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = 'var(--shadow-hover)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'var(--shadow)'; }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
                  <span style={{
                    fontSize: 12, fontWeight: 700, color: 'var(--primary)',
                    background: 'var(--bg-tint)', borderRadius: 6, padding: '4px 12px',
                  }}>{post.category}</span>
                  <span style={{ fontSize: 13, color: 'var(--muted)' }}>{post.date}</span>
                </div>
                <h3 style={{
                  fontSize: 18, fontWeight: 800, color: 'var(--ink)',
                  lineHeight: 1.45, marginBottom: 12,
                }}>{post.title}</h3>
                <p style={{ fontSize: 14, color: 'var(--text)', lineHeight: 1.7, flex: 1, margin: 0 }}>{post.excerpt}</p>
                <span style={{ fontSize: 14, fontWeight: 700, color: 'var(--primary)', marginTop: 18 }}>블로그에서 읽기 →</span>
              </a>
            </FadeIn>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: 40 }}>
          <a
            href={BLOG_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '14px 32px', borderRadius: 40,
              background: '#03C75A', color: 'white',
              fontSize: 15, fontWeight: 700, textDecoration: 'none',
            }}
          >
            네이버 블로그 전체 글 보기 →
          </a>
        </div>

        <FadeIn>
          <div style={{
            marginTop: 56, background: 'var(--bg-tint, #F4F7FB)', borderRadius: 18,
            padding: '30px 32px',
          }}>
            <h3 style={{ fontSize: 18, fontWeight: 800, color: 'var(--ink)', marginBottom: 6 }}>
              학부모를 위한 수학 칼럼
            </h3>
            <p style={{ fontSize: 14, color: '#888', marginBottom: 18 }}>
              학원 선택부터 내신 대비까지, 상담 때 자주 받는 질문을 글로 정리했습니다
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                { href: '/columns/gyeongju-math-academy-guide/', label: '경주 수학학원, 어떻게 골라야 할까? — 학부모 확인 기준 5가지' },
                { href: '/columns/gyeongju-naesin-math/', label: '경주 고등학교 내신 수학, 어떻게 대비하나? — 학교별 3단계 준비법' },
                { href: '/columns/gyeongju-math-academy-cost/', label: '경주 수학학원비는 얼마인가요? — 학년별 수강료 총정리' },
                { href: '/columns/tutoring-vs-academy/', label: '경주에서 수학과외와 수학학원, 어느 쪽이 맞을까?' },
              ].map((c) => (
                <a key={c.href} href={c.href} style={{ fontSize: 15, fontWeight: 600, color: 'var(--primary)', textDecoration: 'none' }}>
                  → {c.label}
                </a>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
