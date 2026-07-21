// 첫 화면 히어로 — 한국 여학생 수학 공부 배경 영상 위 딥네이비 오버레이 + 흰색 텍스트
import { PHONE, STRENGTHS } from '../../data/constants';

interface HeroSectionProps {
  scrollTo: (id: string) => void;
}

export default function HeroSection({ scrollTo }: HeroSectionProps) {
  return (
    <section id="home" className="hero-section">
      <video
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/hero-poster.webp"
        aria-hidden="true"
      >
        <source src="/hero-loop.webm" type="video/webm" />
        <source src="/hero-loop.mp4" type="video/mp4" />
      </video>
      <div className="hero-overlay" aria-hidden="true" />

      <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', padding: '120px 24px 64px', maxWidth: 820 }}>
        <div style={{
          display: 'inline-block',
          padding: '7px 18px',
          background: 'rgba(255,255,255,0.14)',
          border: '1px solid rgba(255,255,255,0.35)',
          borderRadius: 8,
          fontSize: 14, fontWeight: 700,
          color: '#fff',
          marginBottom: 28,
          letterSpacing: 0.3,
          backdropFilter: 'blur(4px)',
          animation: 'fadeInUp 0.7s ease',
        }}>
          반당 최대 5명 · 20년 경력 소규모 맞춤
        </div>

        <h1
          className="hero-title"
          style={{
            fontFamily: "'Nanum Myeongjo', serif",
            fontSize: 50, fontWeight: 800, lineHeight: 1.3,
            color: '#fff', letterSpacing: -1,
            textShadow: '0 2px 18px rgba(0,0,0,0.35)',
            animation: 'fadeInUp 0.7s ease 0.1s both',
          }}
        >
          <span style={{ display: 'block', fontSize: 20, fontWeight: 700, color: '#BcD2F0', letterSpacing: -0.3, marginBottom: 10 }}>
            경주 황성동 중·고등 수학학원 이룸수학
          </span>
          기초부터 입시까지,<br />
          <span style={{ color: '#9FC0EC' }}>한 명 한 명 맞춰 지도합니다</span>
        </h1>

        <p
          className="hero-sub"
          style={{
            fontSize: 19, color: 'rgba(255,255,255,0.92)',
            lineHeight: 1.75, marginTop: 22,
            textShadow: '0 1px 12px rgba(0,0,0,0.35)',
            animation: 'fadeInUp 0.7s ease 0.2s both',
            fontWeight: 400,
          }}
        >
          20년 경력 배수연 선생님의 1:1 맞춤 수업.<br />
          반당 최대 5명 소규모로 정확하게 지도합니다.
        </p>

        <div style={{
          marginTop: 18,
          animation: 'fadeInUp 0.7s ease 0.28s both',
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
          fontSize: 14, color: 'rgba(255,255,255,0.85)',
        }}>
          <span style={{ color: '#F2C75A', letterSpacing: 1 }}>★★★★★</span>
          <span>서울대·의대 합격생을 배출한 학습 시스템</span>
        </div>

        <div style={{ marginTop: 34, animation: 'fadeInUp 0.7s ease 0.36s both', display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
          <button
            className="cta-btn"
            onClick={() => scrollTo('contact')}
            style={{ fontSize: 17, padding: '16px 40px' }}
          >
            무료 상담 신청
          </button>
          <a
            href={`tel:${PHONE.replace(/-/g, '')}`}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '15px 34px',
              background: '#fff',
              border: '1px solid var(--line)',
              color: 'var(--ink)', borderRadius: 10,
              fontSize: 16, fontWeight: 600,
              textDecoration: 'none',
              transition: 'border-color 0.2s, color 0.2s',
            }}
          >
            전화 상담 {PHONE}
          </a>
        </div>

        <div style={{
          marginTop: 14,
          animation: 'fadeInUp 0.7s ease 0.42s both',
          fontSize: 13.5, color: 'rgba(255,255,255,0.78)',
        }}>
          상담은 무료입니다. 부담 없이 문의하세요.
        </div>

        <div style={{
          marginTop: 56,
          display: 'flex', gap: 48, justifyContent: 'center',
          animation: 'fadeInUp 0.7s ease 0.5s both',
          flexWrap: 'wrap',
        }}>
          {STRENGTHS.map((s, i) => (
            <div key={i} style={{ textAlign: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'center', gap: 2 }}>
                <span style={{ fontSize: 38, fontWeight: 800, color: '#fff', fontFamily: "'Nanum Myeongjo', serif", textShadow: '0 1px 12px rgba(0,0,0,0.3)' }}>{s.num}</span>
                <span style={{ fontSize: 17, fontWeight: 600, color: '#9FC0EC' }}>{s.unit}</span>
              </div>
              <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.82)', marginTop: 4, fontWeight: 500 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
