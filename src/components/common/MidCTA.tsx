// 섹션 사이 상담 유도 배너 — light(연한 배경)/dark(딥블루) 두 변형
interface MidCTAProps {
  scrollTo: (id: string) => void;
  headline: string;
  sub: string;
  buttonText?: string;
  variant?: 'warm' | 'dark';
}

export default function MidCTA({ scrollTo, headline, sub, buttonText = '무료 상담 신청', variant = 'warm' }: MidCTAProps) {
  const isDark = variant === 'dark';

  return (
    <div style={{
      padding: '56px 24px',
      background: isDark ? 'var(--primary-dark)' : 'var(--bg-soft)',
      borderTop: '1px solid var(--line)',
      borderBottom: '1px solid var(--line)',
      textAlign: 'center',
    }}>
      <div style={{ maxWidth: 600, margin: '0 auto' }}>
        <div style={{
          fontSize: 24, fontWeight: 800,
          fontFamily: "'Nanum Myeongjo', serif",
          color: isDark ? '#fff' : 'var(--ink)',
          marginBottom: 12, lineHeight: 1.45,
        }}>
          {headline}
        </div>
        <div style={{
          fontSize: 15, color: isDark ? 'rgba(255,255,255,0.75)' : 'var(--text)',
          marginBottom: 26, lineHeight: 1.6,
        }}>
          {sub}
        </div>
        <button
          className="cta-btn"
          onClick={() => scrollTo('contact')}
          style={isDark ? { fontSize: 16, padding: '15px 38px', background: '#fff', color: 'var(--primary-dark)', boxShadow: 'none' } : { fontSize: 16, padding: '15px 38px' }}
        >
          {buttonText}
        </button>
        <div style={{
          marginTop: 14, fontSize: 13,
          color: isDark ? 'rgba(255,255,255,0.55)' : 'var(--muted)',
        }}>
          상담은 무료이며 부담 없이 문의하실 수 있습니다
        </div>
      </div>
    </div>
  );
}
