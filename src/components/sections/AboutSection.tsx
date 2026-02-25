
import FadeIn from '../common/FadeIn';

interface AboutSectionProps {
  scrollTo: (id: string) => void;
}

export default function AboutSection({ scrollTo }: AboutSectionProps) {
  return (
    <section id="about" style={{ padding: '100px 0 80px' }}>
      <div className="container" style={{ maxWidth: 1000, margin: '0 auto', padding: '0 32px' }}>
        <FadeIn>
          <div style={{ textAlign: 'center', marginBottom: 60 }}>
            <span className="section-label" style={{ background: '#FFF0F0', color: '#FF6B6B' }}>ABOUT</span>
            <h2 className="section-title" style={{ fontFamily: "'Nanum Myeongjo', serif", fontSize: 36, fontWeight: 800, lineHeight: 1.4, letterSpacing: -0.5 }}>
              배수연 선생님을<br />소개합니다
            </h2>
          </div>
        </FadeIn>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center' }}>
          <FadeIn delay={0.1} direction="left">
            <div style={{
              background: 'linear-gradient(135deg, #1a1a2e 0%, #0f3460 100%)',
              borderRadius: 28, padding: 40, color: 'white',
              position: 'relative', overflow: 'hidden',
            }}>
              <div style={{ position: 'absolute', top: -20, right: -20, fontSize: 120, opacity: 0.05, fontFamily: "'Nanum Myeongjo', serif" }}>數</div>
              <div style={{ fontSize: 48, marginBottom: 20 }}>👨‍🏫</div>
              <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', fontWeight: 600, letterSpacing: 1, marginBottom: 8 }}>TEACHER</div>
              <div style={{ fontSize: 28, fontWeight: 800, fontFamily: "'Nanum Myeongjo', serif", marginBottom: 8 }}>배수연</div>
              <div style={{ fontSize: 15, color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>
                일품배쌤수학 원장<br />
                20년 경력 수학 전문 강사<br />
                중등·고등 내신 전문
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2} direction="right">
            <div>
              <p style={{ fontSize: 17, lineHeight: 2, color: '#444', fontWeight: 400 }}>
                20년 경력의 수학 전문 강사로서, 많은 학생들과 함께 공부해오면서
                <strong style={{ color: '#1a1a2e' }}> 한 명 한 명에게 정확히 맞춘 수업</strong>이
                가장 효과적이라는 것을 경험으로 알게 되었습니다.
              </p>
              <p style={{ fontSize: 17, lineHeight: 2, color: '#444', fontWeight: 400, marginTop: 20 }}>
                개념→유형→실전→오답까지 완전 맞춤형으로 지도하며,
                학교별 기출·성취도 기반 내신 분석을 제공합니다.
                소규모 정확 지도를 통해
                <strong style={{ color: '#FF6B6B' }}> "성적을 올리는 수업"</strong>을 목표로 합니다.
              </p>
              <div style={{
                marginTop: 28, padding: '20px 24px',
                background: '#FFF8F0',
                borderLeft: '4px solid #FF6B6B',
                borderRadius: '0 14px 14px 0',
                fontSize: 15, color: '#666', lineHeight: 1.7, fontStyle: 'italic',
              }}>
                "여러분에게 쉽게 다가가기 위해 노력합니다.<br />
                내신 대비와 수능 준비는 물론, 대학별 고난도 문제까지<br />
                체계적으로 안내드립니다."
              </div>
            </div>
          </FadeIn>
        </div>

        {/* CTA after about */}
        <FadeIn delay={0.3}>
          <div style={{
            marginTop: 48, textAlign: 'center',
            padding: '36px 24px',
            background: 'linear-gradient(135deg, #FFF5F5, #FFF0E6)',
            borderRadius: 24,
          }}>
            <div style={{ fontSize: 18, fontWeight: 700, color: '#1a1a2e', marginBottom: 8, fontFamily: "'Nanum Myeongjo', serif" }}>
              20년 경험의 배쌤과 함께 시작하세요
            </div>
            <div style={{ fontSize: 14, color: '#888', marginBottom: 20 }}>
              아이의 현재 수준과 목표에 맞는 학습 방향을 상담해드립니다
            </div>
            <button className="cta-btn" onClick={() => scrollTo('contact')} style={{ fontSize: 15, padding: '14px 32px' }}>
              무료 상담 신청 →
            </button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
