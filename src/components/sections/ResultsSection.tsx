
import FadeIn from '../common/FadeIn';
import { GRADE_IMPROVEMENTS, UNIVERSITY_RESULTS, TESTIMONIALS } from '../../data/results';

interface ResultsSectionProps {
  scrollTo: (id: string) => void;
}

export default function ResultsSection({ scrollTo }: ResultsSectionProps) {
  return (
    <section id="results" style={{ padding: '88px 0', background: 'var(--bg-soft)' }}>
      <div className="container" style={{ maxWidth: 1100, margin: '0 auto', padding: '0 32px' }}>
        <FadeIn>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <span className="section-label">RESULTS</span>
            <h2 className="section-title" style={{ fontFamily: "'Nanum Myeongjo', serif", fontSize: 36, fontWeight: 800, letterSpacing: -0.5 }}>
              우리 학생들의 이야기
            </h2>
            <p style={{ fontSize: 16, color: '#888', marginTop: 12 }}>꾸준한 노력이 만들어낸 결과입니다</p>
          </div>
        </FadeIn>

        {/* Grade Improvement Cases */}
        <FadeIn delay={0.1}>
          <div style={{ marginBottom: 48 }}>
            <div style={{ marginBottom: 24 }}>
              <h3 style={{ fontSize: 20, fontWeight: 800, fontFamily: "'Nanum Myeongjo', serif", color: 'var(--ink)' }}>성적 상승 사례</h3>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 20 }}>
              {GRADE_IMPROVEMENTS.map((s, i) => (
                <FadeIn key={i} delay={0.08 * i}>
                  <div
                    style={{
                      background: 'white',
                      borderRadius: 20,
                      padding: '28px 24px',
                      border: '1px solid rgba(0,0,0,0.04)',
                      boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
                      transition: 'all 0.3s ease',
                      cursor: 'default',
                      position: 'relative',
                      overflow: 'hidden',
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.07)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.03)'; }}
                  >
                    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: s.color }} />

                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 20 }}>
                      <div>
                        <div style={{ fontSize: 17, fontWeight: 800, color: '#1a1a2e' }}>{s.name} 학생</div>
                        <div style={{ fontSize: 13, color: '#999', marginTop: 4 }}>{s.school} · {s.grade}</div>
                      </div>
                      <div style={{
                        padding: '4px 12px',
                        background: s.color + '12',
                        color: s.color,
                        borderRadius: 20,
                        fontSize: 12, fontWeight: 700,
                      }}>
                        {s.period}
                      </div>
                    </div>

                    <div style={{
                      display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16,
                      padding: '18px 0',
                      background: '#FAFAF7',
                      borderRadius: 14,
                      marginBottom: 18,
                    }}>
                      <div style={{ textAlign: 'center' }}>
                        <div style={{ fontSize: 12, color: '#aaa', marginBottom: 4, fontWeight: 600 }}>BEFORE</div>
                        <div style={{ fontSize: 28, fontWeight: 900, color: '#ccc' }}>{s.before}</div>
                      </div>
                      <div style={{ fontSize: 24, color: s.color, fontWeight: 700, display: 'flex', alignItems: 'center' }}>→</div>
                      <div style={{ textAlign: 'center' }}>
                        <div style={{ fontSize: 12, color: '#aaa', marginBottom: 4, fontWeight: 600 }}>AFTER</div>
                        <div style={{ fontSize: 28, fontWeight: 900, color: s.color }}>{s.after}</div>
                      </div>
                    </div>

                    <div style={{
                      fontSize: 14, color: '#666', lineHeight: 1.7,
                      fontStyle: 'italic',
                      padding: '12px 16px',
                      background: '#FAFAF7',
                      borderRadius: 12,
                      borderLeft: `3px solid ${s.color}30`,
                    }}>
                      "{s.quote}"
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* University Admission Cases */}
        <FadeIn delay={0.2}>
          <div>
            <div style={{ marginBottom: 24 }}>
              <h3 style={{ fontSize: 20, fontWeight: 800, fontFamily: "'Nanum Myeongjo', serif", color: 'var(--ink)' }}>대학 합격 사례</h3>
            </div>

            <div style={{
              background: 'var(--primary-dark)',
              borderRadius: 20, padding: '40px 32px',
            }}>
              <div>
                <div style={{ textAlign: 'center', marginBottom: 32 }}>
                  <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)', fontWeight: 600, letterSpacing: 2, marginBottom: 8 }}>2026 수시 합격 현황</div>
                  <div style={{ fontSize: 24, fontWeight: 800, color: 'white', fontFamily: "'Nanum Myeongjo', serif" }}>
                    이룸수학에서 꿈을 이룬 학생들
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16 }}>
                  {UNIVERSITY_RESULTS.map((u, i) => (
                    <div
                      key={i}
                      style={{
                        background: 'rgba(255,255,255,0.05)',
                        border: '1px solid rgba(255,255,255,0.08)',
                        borderRadius: 16,
                        padding: '22px 20px',
                        backdropFilter: 'blur(10px)',
                        transition: 'all 0.3s',
                      }}
                      onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; e.currentTarget.style.borderColor = u.color + '40'; }}
                      onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; }}
                    >
                      <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.7)', fontWeight: 700, marginBottom: 6 }}>{u.type}</div>
                      <div style={{ fontSize: 16, fontWeight: 800, color: 'white', marginBottom: 4 }}>{u.univ}</div>
                      <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)' }}>{u.dept}</div>
                      <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)', marginTop: 8 }}>{u.name} 학생</div>
                    </div>
                  ))}
                </div>

                <div style={{
                  textAlign: 'center', marginTop: 32,
                  fontSize: 13, color: 'rgba(255,255,255,0.25)', lineHeight: 1.6,
                }}>
                  ※ 개인정보 보호를 위해 이름은 익명 처리하였습니다<br />
                  ※ 실제 학생·학부모 동의 하에 게재된 사례입니다
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Testimonials */}
        <FadeIn delay={0.3}>
          <div style={{ marginTop: 48 }}>
            <div style={{ marginBottom: 24 }}>
              <h3 style={{ fontSize: 20, fontWeight: 800, fontFamily: "'Nanum Myeongjo', serif", color: 'var(--ink)' }}>학부모 후기</h3>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 20 }}>
              {TESTIMONIALS.map((t, i) => (
                <div
                  key={i}
                  style={{
                    background: 'white',
                    borderRadius: 20,
                    padding: '28px 24px',
                    border: '1px solid rgba(0,0,0,0.04)',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
                  }}
                >
                  <div style={{ fontSize: 15, marginBottom: 14, letterSpacing: 2, color: 'var(--gold)' }}>
                    {'★'.repeat(t.stars)}
                  </div>
                  <p style={{ fontSize: 15, color: 'var(--text)', lineHeight: 1.8, marginBottom: 16 }}>
                    "{t.text}"
                  </p>
                  <div style={{
                    fontSize: 13, color: 'var(--muted)', fontWeight: 600,
                    paddingTop: 14,
                    borderTop: '1px solid var(--line)',
                  }}>
                    — {t.parent}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* CTA after testimonials */}
        <FadeIn delay={0.4}>
          <div style={{
            marginTop: 48, textAlign: 'center',
            padding: '44px 24px',
            background: 'var(--primary-dark)',
            borderRadius: 20,
          }}>
            <div>
              <div style={{ fontSize: 22, fontWeight: 800, color: 'white', marginBottom: 10, fontFamily: "'Nanum Myeongjo', serif" }}>
                다음 성공 이야기의 주인공은<br />우리 아이가 될 수 있습니다
              </div>
              <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.7)', marginBottom: 24 }}>
                서울대·의대 합격생을 배출한 검증된 시스템으로 시작하세요
              </div>
              <button className="cta-btn" onClick={() => scrollTo('contact')} style={{ fontSize: 16, padding: '15px 38px', background: '#fff', color: 'var(--primary-dark)', boxShadow: 'none' }}>
                무료 상담 신청
              </button>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
