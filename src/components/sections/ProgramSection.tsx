
import FadeIn from '../common/FadeIn';
import { PROGRAMS } from '../../data/programs';

interface ProgramSectionProps {
  scrollTo: (id: string) => void;
}

export default function ProgramSection({ scrollTo }: ProgramSectionProps) {
  return (
    <section id="program" style={{ padding: '80px 0', background: 'linear-gradient(180deg, #FAFAF7 0%, #F5F3EE 100%)' }}>
      <div className="container" style={{ maxWidth: 1100, margin: '0 auto', padding: '0 32px' }}>
        <FadeIn>
          <div style={{ textAlign: 'center', marginBottom: 60 }}>
            <span className="section-label" style={{ background: '#F0F0FF', color: '#6C5CE7' }}>PROGRAM</span>
            <h2 className="section-title" style={{ fontFamily: "'Nanum Myeongjo', serif", fontSize: 36, fontWeight: 800, letterSpacing: -0.5 }}>
              학년별 맞춤 프로그램
            </h2>
            <p style={{ fontSize: 16, color: '#888', marginTop: 12 }}>학생의 수학적 역량에 맞춰서 반을 배정합니다</p>
          </div>
        </FadeIn>

        <div className="program-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
          {PROGRAMS.map((p, i) => (
            <FadeIn key={i} delay={0.1 * i}>
              <div className="program-card" style={{ height: '100%' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 4, background: p.color, borderRadius: '24px 24px 0 0' }} />
                <div style={{ fontSize: 40, marginBottom: 16 }}>{p.icon}</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
                  <h3 style={{ fontSize: 22, fontWeight: 800, fontFamily: "'Nanum Myeongjo', serif" }}>{p.grade}</h3>
                  <span style={{
                    fontSize: 12, fontWeight: 700, padding: '4px 12px',
                    background: p.color + '15', color: p.color,
                    borderRadius: 20,
                  }}>{p.badge}</span>
                </div>
                <p style={{ fontSize: 15, color: '#888', marginBottom: 20, fontWeight: 500 }}>{p.desc}</p>

                {p.price && (
                  <div style={{
                    display: 'inline-block', marginBottom: 16,
                    padding: '6px 14px', borderRadius: 10,
                    background: p.color + '10', color: p.color,
                    fontSize: 15, fontWeight: 800,
                  }}>
                    {p.price}
                  </div>
                )}

                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {p.details.map((d, j) => (
                    <div key={j} style={{ display: 'flex', gap: 10, fontSize: 14, color: '#555', lineHeight: 1.6 }}>
                      <span style={{ color: p.color, flexShrink: 0, marginTop: 2 }}>✓</span>
                      <span>{d}</span>
                    </div>
                  ))}
                </div>

                {p.schedule && (
                  <div style={{
                    marginTop: 20, padding: '12px 16px',
                    background: '#F8F8FA', borderRadius: 12,
                    fontSize: 13, color: '#666',
                    display: 'flex', alignItems: 'center', gap: 8,
                  }}>
                    <span>🕐</span> {p.schedule}
                  </div>
                )}
              </div>
            </FadeIn>
          ))}
        </div>

        {/* CTA after programs */}
        <FadeIn delay={0.3}>
          <div style={{
            marginTop: 40, textAlign: 'center',
            padding: '32px 24px',
            background: 'white',
            borderRadius: 24,
            border: '1px solid rgba(0,0,0,0.04)',
          }}>
            <div style={{ fontSize: 15, color: '#888', marginBottom: 6 }}>
              어떤 프로그램이 우리 아이에게 맞을지 궁금하시다면
            </div>
            <div style={{ fontSize: 20, fontWeight: 800, color: '#1a1a2e', marginBottom: 20, fontFamily: "'Nanum Myeongjo', serif" }}>
              무료 상담으로 맞춤 안내를 받아보세요
            </div>
            <button className="cta-btn" onClick={() => scrollTo('contact')} style={{ fontSize: 15, padding: '14px 32px' }}>
              프로그램 상담 신청 →
            </button>
            <div style={{ marginTop: 12, fontSize: 12, color: '#bbb' }}>
              반당 최대 4명 · 잔여석이 적을 수 있습니다
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
