import { useState } from 'react';
import FadeIn from '../common/FadeIn';
import { PHONE } from '../../data/constants';

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', phone: '', grade: '', message: '' });
  const [formSent, setFormSent] = useState(false);

  const handleSubmit = () => {
    if (!formData.name || !formData.phone) return;
    setFormSent(true);
    setTimeout(() => setFormSent(false), 3000);
  };

  return (
    <section id="contact" style={{ padding: '80px 0 100px', background: 'linear-gradient(180deg, #FAFAF7 0%, #F0EDE6 100%)' }}>
      <div className="container" style={{ maxWidth: 700, margin: '0 auto', padding: '0 32px' }}>
        <FadeIn>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <span className="section-label" style={{ background: '#FFF0F0', color: '#FF6B6B' }}>CONTACT</span>
            <h2 className="section-title" style={{ fontFamily: "'Nanum Myeongjo', serif", fontSize: 36, fontWeight: 800, letterSpacing: -0.5 }}>
              상담 신청
            </h2>
            <p style={{ fontSize: 16, color: '#888', marginTop: 12 }}>편하게 연락 주세요. 친절하게 안내드리겠습니다.</p>
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <a
            href={`tel:${PHONE.replace(/-/g, '')}`}
            style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16,
              padding: '28px 32px',
              background: 'linear-gradient(135deg, #FF6B6B 0%, #ee5a24 100%)',
              borderRadius: 24, marginBottom: 32,
              textDecoration: 'none',
              boxShadow: '0 12px 40px rgba(255,107,107,0.25)',
              transition: 'all 0.3s',
            }}
          >
            <span style={{ fontSize: 32 }}>📞</span>
            <div>
              <div style={{ color: 'rgba(255,255,255,0.8)', fontSize: 13, fontWeight: 500, marginBottom: 4 }}>전화 상담</div>
              <div style={{ color: 'white', fontSize: 28, fontWeight: 900, letterSpacing: 1 }}>{PHONE}</div>
            </div>
          </a>

          <div style={{
            background: 'white', borderRadius: 24, padding: 36,
            boxShadow: '0 4px 24px rgba(0,0,0,0.04)',
            border: '1px solid rgba(0,0,0,0.04)',
          }}>
            <div style={{ fontSize: 18, fontWeight: 700, marginBottom: 24, textAlign: 'center' }}>💬 온라인 상담 신청</div>

            {formSent ? (
              <div style={{ textAlign: 'center', padding: '40px 0' }}>
                <div style={{ fontSize: 48, marginBottom: 16 }}>✅</div>
                <div style={{ fontSize: 18, fontWeight: 700, color: '#4ECDC4' }}>신청이 완료되었습니다!</div>
                <div style={{ fontSize: 14, color: '#888', marginTop: 8 }}>빠른 시간 내에 연락드리겠습니다.</div>
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                <input
                  className="input-field"
                  placeholder="학생 이름"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
                <input
                  className="input-field"
                  placeholder="연락처 (010-0000-0000)"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
                <select
                  className="input-field"
                  value={formData.grade}
                  onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
                  style={{ color: formData.grade ? '#1a1a2e' : '#aaa' }}
                >
                  <option value="">학년 선택</option>
                  <option>초등 3학년</option>
                  <option>초등 4학년</option>
                  <option>초등 5학년</option>
                  <option>초등 6학년</option>
                  <option>중학 1학년</option>
                  <option>중학 2학년</option>
                  <option>중학 3학년</option>
                  <option>고등 1학년</option>
                  <option>고등 2학년</option>
                  <option>고등 3학년</option>
                </select>
                <textarea
                  className="input-field"
                  placeholder="궁금한 점이 있으시면 남겨주세요 (선택)"
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  style={{ resize: 'vertical' }}
                />
                <button
                  className="cta-btn"
                  onClick={handleSubmit}
                  style={{ width: '100%', justifyContent: 'center', fontSize: 16, marginTop: 4 }}
                >
                  상담 신청하기
                </button>
              </div>
            )}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
