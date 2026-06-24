// 학점나비(hakjum.school) 가입 학원 — AI 대입 컨설팅 무료 제공 홍보 모달
import { useEffect, useState } from 'react';

interface PromoModalProps {
  scrollTo: (id: string) => void;
}

const HIDE_KEY = 'hakjum_promo_hidden_until';

export default function PromoModal({ scrollTo }: PromoModalProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const until = Number(localStorage.getItem(HIDE_KEY) || 0);
    if (Date.now() < until) return;
    const t = setTimeout(() => setOpen(true), 900);
    return () => clearTimeout(t);
  }, []);

  if (!open) return null;

  const close = () => setOpen(false);
  const hideToday = () => {
    localStorage.setItem(HIDE_KEY, String(Date.now() + 24 * 60 * 60 * 1000));
    setOpen(false);
  };
  const goContact = () => {
    setOpen(false);
    scrollTo('contact');
  };

  return (
    <div
      onClick={close}
      style={{
        position: 'fixed', inset: 0, zIndex: 1000,
        background: 'rgba(15,23,42,0.55)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: 20,
        animation: 'fadeInUp 0.3s ease',
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          position: 'relative',
          background: '#fff', borderRadius: 18,
          maxWidth: 420, width: '100%',
          boxShadow: '0 20px 60px rgba(15,23,42,0.3)',
          overflow: 'hidden',
        }}
      >
        <button
          onClick={close}
          aria-label="닫기"
          style={{
            position: 'absolute', top: 12, right: 12, zIndex: 2,
            background: 'rgba(0,0,0,0.4)', border: 'none',
            width: 32, height: 32, borderRadius: 8,
            fontSize: 16, cursor: 'pointer', color: '#fff',
            lineHeight: 1,
          }}
        >
          ✕
        </button>

        <img
          src="/hakjum-promo.png"
          alt="학점나비 - AI 대입 진학 컨설팅 (2028 대입 · 고교학점제)"
          width={1200}
          height={630}
          style={{ display: 'block', width: '100%', height: 'auto' }}
        />

        <div style={{ padding: '24px 28px 26px', textAlign: 'center' }}>
          <div style={{
            display: 'inline-block', padding: '5px 14px',
            background: 'var(--bg-tint)', borderRadius: 20,
            fontSize: 12.5, fontWeight: 700, color: 'var(--primary)',
            marginBottom: 14, letterSpacing: 0.3,
          }}>
            이룸수학 × 학점나비 가입 학원
          </div>

          <div style={{
            fontSize: 22, fontWeight: 800, color: 'var(--ink)', lineHeight: 1.4,
            fontFamily: "'Nanum Myeongjo', serif",
          }}>
            AI 대입 컨설팅 <span style={{ color: 'var(--primary)' }}>무료 제공</span>
          </div>

          <p style={{ fontSize: 14.5, color: 'var(--text)', lineHeight: 1.75, margin: '12px 0 0' }}>
            이룸수학은 <strong style={{ color: 'var(--ink)' }}>학점나비</strong> 가입 학원입니다.
            AI 맞춤 과목 추천·진학 설계·입결 분석을
            <strong style={{ color: 'var(--primary)' }}> 무료로</strong> 받아보세요.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 22 }}>
            <button
              className="cta-btn"
              onClick={goContact}
              style={{ width: '100%', justifyContent: 'center', fontSize: 16, padding: '15px' }}
            >
              무료 컨설팅 신청하기
            </button>
            <a
              href="https://hakjum.school"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                width: '100%', padding: '13px', borderRadius: 10,
                border: '1px solid var(--line)', color: 'var(--ink)',
                fontSize: 15, fontWeight: 600, textDecoration: 'none',
              }}
            >
              학점나비 자세히 보기
            </a>
          </div>

          <button
            onClick={hideToday}
            style={{
              marginTop: 16, background: 'none', border: 'none',
              color: 'var(--muted)', fontSize: 13, cursor: 'pointer',
              fontFamily: 'inherit', textDecoration: 'underline',
            }}
          >
            오늘 하루 보지 않기
          </button>
        </div>
      </div>
    </div>
  );
}
