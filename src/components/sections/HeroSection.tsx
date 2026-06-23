// 첫 화면 히어로 — 화이트 배경, 딥블루 포인트의 차분한 신뢰형 구성
import { PHONE, STRENGTHS } from '../../data/constants';

interface HeroSectionProps {
  scrollTo: (id: string) => void;
}

export default function HeroSection({ scrollTo }: HeroSectionProps) {
  return (
    <section id="home" className="hero-section">
      <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', padding: '120px 24px 64px', maxWidth: 820 }}>
        <div style={{
          display: 'inline-block',
          padding: '7px 18px',
          background: 'var(--bg-tint)',
          border: '1px solid #DCE6F5',
          borderRadius: 8,
          fontSize: 14, fontWeight: 700,
          color: 'var(--primary)',
          marginBottom: 28,
          letterSpacing: 0.3,
          animation: 'fadeInUp 0.7s ease',
        }}>
          경주 황성동 · 중·고등 수학 전문
        </div>

        <h1
          className="hero-title"
          style={{
            fontFamily: "'Nanum Myeongjo', serif",
            fontSize: 50, fontWeight: 800, lineHeight: 1.3,
            color: 'var(--ink)', letterSpacing: -1,
            animation: 'fadeInUp 0.7s ease 0.1s both',
          }}
        >
          기초부터 입시까지,<br />
          <span style={{ color: 'var(--primary)' }}>한 명 한 명 맞춰 지도합니다</span>
        </h1>

        <p
          className="hero-sub"
          style={{
            fontSize: 19, color: 'var(--text)',
            lineHeight: 1.75, marginTop: 22,
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
          fontSize: 14, color: 'var(--muted)',
        }}>
          <span style={{ color: 'var(--gold)', letterSpacing: 1 }}>★★★★★</span>
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
          fontSize: 13.5, color: 'var(--muted)',
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
                <span style={{ fontSize: 38, fontWeight: 800, color: 'var(--primary)', fontFamily: "'Nanum Myeongjo', serif" }}>{s.num}</span>
                <span style={{ fontSize: 17, fontWeight: 600, color: 'var(--primary-soft)' }}>{s.unit}</span>
              </div>
              <div style={{ fontSize: 14, color: 'var(--muted)', marginTop: 4, fontWeight: 500 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
