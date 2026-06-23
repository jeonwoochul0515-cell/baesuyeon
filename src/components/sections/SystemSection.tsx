
import FadeIn from '../common/FadeIn';
import { EXAM_PREP, TARGET_SCHOOLS } from '../../data/constants';

export default function SystemSection() {
  return (
    <section id="system" style={{ padding: '88px 0' }}>
      <div className="container" style={{ maxWidth: 1100, margin: '0 auto', padding: '0 32px' }}>
        <FadeIn>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <span className="section-label">SYSTEM</span>
            <h2 className="section-title" style={{ fontFamily: "'Nanum Myeongjo', serif", fontSize: 36, fontWeight: 800, letterSpacing: -0.5 }}>
              내신·시험 대비 전략
            </h2>
            <p style={{ fontSize: 16, color: '#888', marginTop: 12 }}>체계적인 4단계 시스템으로 시험에 완벽 대비합니다</p>
          </div>
        </FadeIn>

        <div className="exam-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20, marginBottom: 60 }}>
          {EXAM_PREP.map((e, i) => (
            <FadeIn key={i} delay={0.08 * i}>
              <div className="exam-card">
                <div style={{
                  width: 36, height: 36, borderRadius: 9, margin: '0 auto 14px',
                  background: 'var(--bg-tint)', color: 'var(--primary)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontWeight: 800, fontSize: 15,
                }}>{i + 1}</div>
                <div style={{ fontSize: 16, fontWeight: 700, color: 'var(--ink)', marginBottom: 8 }}>{e.title}</div>
                <div style={{ fontSize: 14, color: 'var(--text)', lineHeight: 1.7, whiteSpace: 'pre-line' }}>{e.desc}</div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* 3-step flow */}
        <FadeIn delay={0.2}>
          <div style={{
            background: 'var(--primary-dark)',
            borderRadius: 20, padding: '48px 40px',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            gap: 20, flexWrap: 'wrap',
          }}>
            {[
              { step: 'STEP 1', title: '개념 이해' },
              { step: 'STEP 2', title: '유형 훈련' },
              { step: 'STEP 3', title: '실전 적용' },
            ].map((s, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.55)', fontWeight: 700, letterSpacing: 2, marginBottom: 8 }}>{s.step}</div>
                  <div style={{
                    width: 64, height: 64, borderRadius: 16,
                    background: 'rgba(255,255,255,0.1)',
                    border: '1px solid rgba(255,255,255,0.2)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 24, fontWeight: 800, color: '#fff',
                    margin: '0 auto 10px',
                    fontFamily: "'Nanum Myeongjo', serif",
                  }}>{i + 1}</div>
                  <div style={{ color: 'white', fontSize: 15, fontWeight: 700 }}>{s.title}</div>
                </div>
                {i < 2 && <div style={{ color: 'rgba(255,255,255,0.3)', fontSize: 22, fontWeight: 300 }}>→</div>}
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Target Schools */}
        <FadeIn delay={0.3}>
          <div style={{
            marginTop: 48, textAlign: 'center',
            padding: '36px 24px',
            background: '#fff', borderRadius: 16,
            border: '1px solid var(--line)',
            boxShadow: 'var(--shadow)',
          }}>
            <div style={{ fontSize: 14, color: 'var(--text)', fontWeight: 700, marginBottom: 18 }}>경주 지역 맞춤 내신 분석 대상 학교</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 10 }}>
              {TARGET_SCHOOLS.map((s, i) => (
                <span key={i} style={{
                  padding: '8px 16px', borderRadius: 8,
                  background: 'var(--bg-soft)', border: '1px solid var(--line)',
                  fontSize: 14, fontWeight: 600,
                  color: 'var(--text)',
                }}>{s}</span>
              ))}
            </div>
            <div style={{ marginTop: 20, display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 16 }}>
              {['주차별 개념 시스템', '서술형·내신 실전 대비', '개별 실수 추적 관리', '수능형 사고력 강화', '정규+심화+클리닉 체제', '1:1 피드백'].map((t, i) => (
                <span key={i} style={{ fontSize: 13, color: 'var(--muted)' }}>· {t}</span>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
