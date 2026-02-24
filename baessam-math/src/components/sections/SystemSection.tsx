
import FadeIn from '../common/FadeIn';
import { EXAM_PREP, TARGET_SCHOOLS } from '../../data/constants';

export default function SystemSection() {
  return (
    <section id="system" style={{ padding: '80px 0' }}>
      <div className="container" style={{ maxWidth: 1100, margin: '0 auto', padding: '0 32px' }}>
        <FadeIn>
          <div style={{ textAlign: 'center', marginBottom: 60 }}>
            <span className="section-label" style={{ background: '#E8FFF5', color: '#4ECDC4' }}>SYSTEM</span>
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
                <div style={{ fontSize: 36, marginBottom: 14 }}>{e.icon}</div>
                <div style={{ fontSize: 16, fontWeight: 700, color: '#1a1a2e', marginBottom: 8 }}>{e.title}</div>
                <div style={{ fontSize: 14, color: '#888', lineHeight: 1.7, whiteSpace: 'pre-line' }}>{e.desc}</div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* 3-step flow */}
        <FadeIn delay={0.2}>
          <div style={{
            background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
            borderRadius: 28, padding: '48px 40',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            gap: 20, flexWrap: 'wrap', position: 'relative', overflow: 'hidden',
          }}>
            <div style={{ position: 'absolute', inset: 0, opacity: 0.03, background: 'radial-gradient(circle at 30% 50%, white 0%, transparent 60%)' }} />
            {[
              { step: 'STEP 1', title: '개념 이해', icon: '💡', color: '#4ECDC4' },
              { step: 'STEP 2', title: '유형 훈련', icon: '✏️', color: '#FFD93D' },
              { step: 'STEP 3', title: '실전 적용', icon: '🎯', color: '#FF6B6B' },
            ].map((s, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
                <div style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
                  <div style={{ fontSize: 11, color: s.color, fontWeight: 700, letterSpacing: 2, marginBottom: 8 }}>{s.step}</div>
                  <div style={{
                    width: 72, height: 72, borderRadius: 20,
                    background: `${s.color}15`,
                    border: `2px solid ${s.color}30`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 32, margin: '0 auto 8px',
                  }}>{s.icon}</div>
                  <div style={{ color: 'white', fontSize: 15, fontWeight: 700 }}>{s.title}</div>
                </div>
                {i < 2 && <div style={{ color: 'rgba(255,255,255,0.2)', fontSize: 24, fontWeight: 300 }}>→</div>}
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Target Schools */}
        <FadeIn delay={0.3}>
          <div style={{
            marginTop: 48, textAlign: 'center',
            padding: '32px 24px',
            background: 'white', borderRadius: 24,
            border: '1px solid rgba(0,0,0,0.04)',
            boxShadow: '0 2px 16px rgba(0,0,0,0.02)',
          }}>
            <div style={{ fontSize: 14, color: '#888', fontWeight: 600, marginBottom: 16 }}>📍 경주 지역 맞춤 내신 분석 대상 학교</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 10 }}>
              {TARGET_SCHOOLS.map((s, i) => (
                <span key={i} style={{
                  padding: '8px 18px', borderRadius: 30,
                  background: '#F5F3EE', fontSize: 14, fontWeight: 600,
                  color: '#555',
                }}>{s}</span>
              ))}
            </div>
            <div style={{ marginTop: 20, display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 16 }}>
              {['주차별 개념 시스템', '서술형·내신 실전 대비', '개별 실수 추적 관리', '수능형 사고력 강화', '정규+심화+클리닉 체제', '1:1 피드백'].map((t, i) => (
                <span key={i} style={{ fontSize: 13, color: '#999' }}>✓ {t}</span>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
