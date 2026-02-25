interface MidCTAProps {
  scrollTo: (id: string) => void;
  headline: string;
  sub: string;
  buttonText?: string;
  variant?: 'warm' | 'dark';
}

export default function MidCTA({ scrollTo, headline, sub, buttonText = '무료 상담 신청하기', variant = 'warm' }: MidCTAProps) {
  const isDark = variant === 'dark';

  return (
    <div style={{
      padding: '56px 24px',
      background: isDark
        ? 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)'
        : 'linear-gradient(135deg, #FFF5F5 0%, #FFF0E6 100%)',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {isDark && (
        <div style={{
          position: 'absolute', inset: 0, opacity: 0.05,
          background: 'radial-gradient(circle at 50% 50%, rgba(255,107,107,0.5) 0%, transparent 60%)',
        }} />
      )}
      <div style={{ position: 'relative', zIndex: 1, maxWidth: 600, margin: '0 auto' }}>
        <div style={{
          fontSize: 24, fontWeight: 800,
          fontFamily: "'Nanum Myeongjo', serif",
          color: isDark ? 'white' : '#1a1a2e',
          marginBottom: 12, lineHeight: 1.4,
        }}>
          {headline}
        </div>
        <div style={{
          fontSize: 15, color: isDark ? 'rgba(255,255,255,0.6)' : '#888',
          marginBottom: 28, lineHeight: 1.6,
        }}>
          {sub}
        </div>
        <button
          className="cta-btn cta-pulse"
          onClick={() => scrollTo('contact')}
          style={{ fontSize: 16, padding: '16px 40px' }}
        >
          {buttonText} →
        </button>
        <div style={{
          marginTop: 14, fontSize: 13,
          color: isDark ? 'rgba(255,255,255,0.35)' : '#bbb',
        }}>
          상담은 무료이며 부담 없이 문의하실 수 있습니다
        </div>
      </div>
    </div>
  );
}
