
import { PHONE, STRENGTHS } from '../../data/constants';

interface HeroSectionProps {
  scrollTo: (id: string) => void;
}

export default function HeroSection({ scrollTo }: HeroSectionProps) {
  return (
    <section id="home" className="hero-section">
      <div className="hero-grid" />
      <div className="float-math" style={{ top: '15%', left: '10%' }}>∫</div>
      <div className="float-math" style={{ top: '60%', right: '8%', animationDelay: '5s', fontSize: 60 }}>π</div>
      <div className="float-math" style={{ bottom: '20%', left: '25%', animationDelay: '10s', fontSize: 50 }}>Σ</div>
      <div className="float-math" style={{ top: '30%', right: '25%', animationDelay: '7s', fontSize: 70 }}>∞</div>

      <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', padding: '0 24px', maxWidth: 800 }}>
        <div style={{
          display: 'inline-block',
          padding: '8px 20px',
          background: 'rgba(255,107,107,0.15)',
          borderRadius: 30,
          fontSize: 14, fontWeight: 600,
          color: '#FF9F9F',
          marginBottom: 28,
          animation: 'fadeInUp 0.8s ease',
          letterSpacing: 1,
        }}>
          경주 황성동 · 중등/고등 내신 전문
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
          수학이 어려운 순간,<br />
          <span style={{
            background: 'linear-gradient(135deg, #FF6B6B 0%, #FFD93D 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>
            배쌤이 함께합니다
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
          학생 한 명 한 명에게 맞춘 1:1 개념 설명<br />
          최대 4명 소규모 수업으로 확실한 성적 향상
        </p>

        <div style={{ marginTop: 40, animation: 'fadeInUp 0.8s ease 0.45s both', display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
          <button className="cta-btn" onClick={() => scrollTo('contact')}>
            상담 신청하기 →
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
            📞 {PHONE}
          </a>
        </div>

        <div style={{
          marginTop: 60,
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
