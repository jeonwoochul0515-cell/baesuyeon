// hakjum.school 가입 학원 — AI 대입 컨설팅 무료 제공 홍보 모달
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
            position: 'absolute', top: 12, right: 12,
            background: 'rgba(255,255,255,0.85)', border: 'none',
            width: 32, height: 32, borderRadius: 8,
            fontSize: 18, cursor: 'pointer', color: '#fff',
            lineHeight: 1,
          }}
        >
          <span style={{ color: 'rgba(255,255,255,0.9)' }}>✕</span>
        </button>

        <div style={{
          background: 'var(--primary-dark)',
          padding: '32px 28px 26px', textAlign: 'center',
        }}>
          <div style={{
            display: 'inline-block', padding: '5px 14px',
            background: 'rgba(255,255,255,0.15)', borderRadius: 20,
            fontSize: 12.5, fontWeight: 700, color: '#fff',
            marginBottom: 14, letterSpacing: 0.3,
          }}>
            hakjum.school 가입 학원
          </div>
          <div style={{
            fontSize: 25, fontWeight: 800, color: '#fff', lineHeight: 1.4,
            fontFamily: "'Nanum Myeongjo', serif",
          }}>
            AI 대입 컨설팅<br />
            <span style={{ color: '#FFD27A' }}>무료 제공</span>
          </div>
        </div>

        <div style={{ padding: '24px 28px 26px', textAlign: 'center' }}>
          <p style={{ fontSize: 15, color: 'var(--text)', lineHeight: 1.75, margin: 0 }}>
            이룸수학은 <strong style={{ color: 'var(--ink)' }}>hakjum.school 가입 학원</strong>으로,
            AI 기반 대입 컨설팅을 <strong style={{ color: 'var(--primary)' }}>무료로</strong> 제공합니다.
            우리 아이에게 맞는 입시 전략을 지금 받아보세요.
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
              hakjum.school 자세히 보기
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
