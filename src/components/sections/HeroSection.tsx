
import { PHONE, STRENGTHS } from '../../data/constants';

interface HeroSectionProps {
  scrollTo: (id: string) => void;
}

export default function HeroSection({ scrollTo }: HeroSectionProps) {
  return (
    <section id="home" className="hero-section">
      <div className="hero-grid" />
      <div className="float-math" style={{ top: '15%', left: '10%' }}>&#x222B;</div>
      <div className="float-math" style={{ top: '60%', right: '8%', animationDelay: '5s', fontSize: 60 }}>&pi;</div>
      <div className="float-math" style={{ bottom: '20%', left: '25%', animationDelay: '10s', fontSize: 50 }}>&Sigma;</div>
      <div className="float-math" style={{ top: '30%', right: '25%', animationDelay: '7s', fontSize: 70 }}>&infin;</div>

      <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', padding: '0 24px', maxWidth: 800 }}>
        {/* Scarcity badge */}
        <div style={{
          display: 'inline-block',
          padding: '8px 20px',
          background: 'rgba(255,107,107,0.15)',
          border: '1px solid rgba(255,107,107,0.25)',
          borderRadius: 30,
          fontSize: 14, fontWeight: 700,
          color: '#FF9F9F',
          marginBottom: 28,
          animation: 'fadeInUp 0.8s ease, badgePulse 2.5s ease-in-out infinite',
          letterSpacing: 1,
        }}>
          반당 최대 4명 · 잔여석 문의
        </div>

        <h1
          className="hero-title"
          style={{
            fontFamily: "'Nanum Myeongjo', serif",
            fontSize: 52, fontWeight: 800, lineHeight: 1.25,
            color: 'white', letterSpacing: -1,
            animation: 'fadeInUp 0.8s ease 0.15s both',
          }}
        >
          우리 아이 수학 성적,<br />
          <span style={{
            background: 'linear-gradient(135deg, #FF6B6B 0%, #FFD93D 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>
            지금이 바꿀 때입니다
          </span>
        </h1>

        <p
          className="hero-sub"
          style={{
            fontSize: 20, color: 'rgba(255,255,255,0.65)',
            lineHeight: 1.7, marginTop: 24,
            animation: 'fadeInUp 0.8s ease 0.3s both',
            fontWeight: 300,
          }}
        >
          20년 경력 배수연 선생님의 1:1 맞춤 수업<br />
          서울대·의대 합격생을 배출한 검증된 학습 시스템
        </p>

        {/* Social proof line */}
        <div style={{
          marginTop: 20,
          animation: 'fadeInUp 0.8s ease 0.38s both',
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
          fontSize: 14, color: 'rgba(255,255,255,0.45)',
        }}>
          <span style={{ fontSize: 16 }}>⭐⭐⭐⭐⭐</span>
          <span>학부모 만족도 — "든든한 버팀목"</span>
        </div>

        <div style={{ marginTop: 36, animation: 'fadeInUp 0.8s ease 0.45s both', display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
          <button
            className="cta-btn cta-pulse"
            onClick={() => scrollTo('contact')}
            style={{ fontSize: 18, padding: '18px 44px' }}
          >
            무료 상담 신청하기 →
          </button>
          <a
            href={`tel:${PHONE.replace(/-/g, '')}`}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '16px 36px',
              background: 'rgba(255,255,255,0.08)',
              border: '1px solid rgba(255,255,255,0.15)',
              color: 'white', borderRadius: 60,
              fontSize: 17, fontWeight: 600,
              textDecoration: 'none',
              backdropFilter: 'blur(10px)',
              transition: 'all 0.3s',
            }}
          >
            📞 바로 전화하기
          </a>
        </div>

        <div style={{
          marginTop: 16,
          animation: 'fadeInUp 0.8s ease 0.5s both',
          fontSize: 13, color: 'rgba(255,255,255,0.35)',
        }}>
          상담은 무료입니다 · 부담 없이 문의하세요
        </div>

        <div style={{
          marginTop: 52,
          display: 'flex', gap: 40, justifyContent: 'center',
          animation: 'fadeInUp 0.8s ease 0.6s both',
          flexWrap: 'wrap',
        }}>
          {STRENGTHS.map((s, i) => (
            <div key={i} style={{ textAlign: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'center', gap: 2 }}>
                <span style={{ fontSize: 40, fontWeight: 900, color: 'white', fontFamily: "'Nanum Myeongjo', serif" }}>{s.num}</span>
                <span style={{ fontSize: 18, fontWeight: 600, color: 'rgba(255,255,255,0.6)' }}>{s.unit}</span>
              </div>
              <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', marginTop: 4, fontWeight: 500 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: 120,
        background: 'linear-gradient(to top, #FAFAF7, transparent)',
      }} />
    </section>
  );
}
