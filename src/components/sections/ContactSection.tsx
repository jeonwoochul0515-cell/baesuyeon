import { useState } from 'react';
import FadeIn from '../common/FadeIn';
import { PHONE, ADDRESS } from '../../data/constants';

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', phone: '', grade: '', message: '' });
  const [formSent, setFormSent] = useState(false);

  const handleSubmit = () => {
    if (!formData.name || !formData.phone) return;
    setFormSent(true);
    setTimeout(() => setFormSent(false), 3000);
  };

  return (
    <section id="contact" style={{ padding: '88px 0 100px', background: 'var(--bg-soft)' }}>
      <div className="container" style={{ maxWidth: 700, margin: '0 auto', padding: '0 32px' }}>
        <FadeIn>
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <span className="section-label">CONTACT</span>
            <h2 className="section-title" style={{ fontFamily: "'Nanum Myeongjo', serif", fontSize: 36, fontWeight: 800, letterSpacing: -0.5 }}>
              지금 바로 상담 신청하세요
            </h2>
            <p style={{ fontSize: 16, color: 'var(--text)', marginTop: 12, lineHeight: 1.7 }}>
              상담은 <strong style={{ color: 'var(--primary)' }}>무료</strong>이며, 아이의 현재 수준과 목표에 맞는 학습 방향을 안내드립니다.
            </p>
          </div>
        </FadeIn>

        {/* Trust signals */}
        <FadeIn delay={0.08}>
          <div style={{
            display: 'flex', justifyContent: 'center', gap: 20, marginBottom: 32, flexWrap: 'wrap',
          }}>
            {['서울대·의대 합격 배출', '반당 최대 5명', '20년 경력'].map((t, i) => (
              <div key={i} style={{
                display: 'flex', alignItems: 'center', gap: 6,
                padding: '8px 16px', background: '#fff',
                borderRadius: 8, fontSize: 13, fontWeight: 600, color: 'var(--text)',
                border: '1px solid var(--line)',
              }}>
                {t}
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <a
            href={`tel:${PHONE.replace(/-/g, '')}`}
            style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12,
              padding: '26px 32px',
              background: 'var(--primary)',
              borderRadius: 16, marginBottom: 20,
              textDecoration: 'none',
              boxShadow: '0 6px 20px rgba(36,86,166,0.2)',
            }}
          >
            <div style={{ textAlign: 'center' }}>
              <div style={{ color: 'rgba(255,255,255,0.85)', fontSize: 13, fontWeight: 500, marginBottom: 4 }}>지금 바로 전화 상담</div>
              <div style={{ color: 'white', fontSize: 28, fontWeight: 900, letterSpacing: 1 }}>{PHONE}</div>
            </div>
          </a>

          <a
            href="https://open.kakao.com/o/pnVVYrki"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 14,
              padding: '22px 32px',
              background: '#FEE500',
              borderRadius: 16, marginBottom: 32,
              textDecoration: 'none',
              boxShadow: '0 6px 20px rgba(254,229,0,0.25)',
            }}
          >
            <svg width="36" height="36" viewBox="0 0 256 256" fill="none">
              <path d="M128 36C70.6 36 24 72.2 24 116.8c0 29 19.5 54.4 48.8 68.8-2.1 7.8-7.6 28.3-8.7 32.7-.1.5-.2 1.1.2 1.5.4.4 1 .5 1.5.3 5.5-1.2 31.6-21.4 36.6-25 8.3 1.2 16.9 1.8 25.6 1.8 57.4 0 104-36.2 104-80.8S185.4 36 128 36z" fill="#3C1E1E"/>
            </svg>
            <div>
              <div style={{ color: 'rgba(60,30,30,0.7)', fontSize: 13, fontWeight: 500, marginBottom: 4 }}>카카오톡 상담 문의</div>
              <div style={{ color: '#3C1E1E', fontSize: 22, fontWeight: 900 }}>카카오톡으로 상담하기</div>
            </div>
          </a>

          <div style={{
            background: '#fff', borderRadius: 16, padding: 36,
            boxShadow: 'var(--shadow)',
            border: '1px solid var(--line)',
          }}>
            <div style={{ fontSize: 18, fontWeight: 700, marginBottom: 8, textAlign: 'center', color: 'var(--ink)' }}>온라인 상담 신청</div>
            <div style={{ fontSize: 13, color: 'var(--muted)', textAlign: 'center', marginBottom: 24 }}>
              이름과 연락처만 남겨주시면 빠르게 연락드립니다
            </div>

            {formSent ? (
              <div style={{ textAlign: 'center', padding: '40px 0' }}>
                <div style={{ fontSize: 18, fontWeight: 700, color: 'var(--primary)' }}>신청이 완료되었습니다</div>
                <div style={{ fontSize: 14, color: 'var(--text)', marginTop: 8 }}>빠른 시간 내에 연락드리겠습니다.</div>
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                <input
                  className="input-field"
                  placeholder="학생 이름"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  autoFocus={false}
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
                  style={{ color: formData.grade ? 'var(--ink)' : 'var(--muted)' }}
                >
                  <option value="">학년 선택 (선택사항)</option>
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
                  style={{ width: '100%', justifyContent: 'center', fontSize: 17, marginTop: 4, padding: '17px 36px' }}
                >
                  무료 상담 신청하기
                </button>
                <div style={{ textAlign: 'center', fontSize: 12, color: 'var(--muted)', marginTop: 4 }}>
                  개인정보는 상담 목적으로만 사용되며 안전하게 관리됩니다
                </div>
              </div>
            )}
          </div>

          {/* Urgency note */}
          <div style={{
            marginTop: 24, padding: '16px 20px',
            background: 'var(--bg-tint)',
            border: '1px solid #DCE6F5',
            borderRadius: 12,
            textAlign: 'center',
            fontSize: 14, color: 'var(--primary-dark)', lineHeight: 1.6,
          }}>
            <strong>반당 최대 5명</strong> 소규모로 운영되어 정원이 제한됩니다. 미리 상담 신청해 주세요.
          </div>

          {/* Location & Google Maps */}
          <div style={{
            marginTop: 32, background: '#fff', borderRadius: 16, overflow: 'hidden',
            boxShadow: 'var(--shadow)',
            border: '1px solid var(--line)',
          }}>
            <div style={{
              width: '100%', height: 280, position: 'relative',
              background: '#f0f0f0',
            }}>
              <iframe
                src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=%EA%B2%BD%EC%A3%BC%EC%8B%9C+%EC%9A%A9%EB%8B%B4%EB%A1%9C+104%EB%B2%88%EA%B8%B8+29-2"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="이룸수학 위치"
              />
            </div>
            <div style={{ padding: '24px 28px' }}>
              <div style={{ fontSize: 16, fontWeight: 700, marginBottom: 8, color: 'var(--ink)' }}>
                {ADDRESS}
              </div>
              <div style={{ fontSize: 13, color: 'var(--text)', marginBottom: 16, lineHeight: 1.6 }}>
                경주시 황성동 위치
              </div>
              <a
                href="https://maps.google.com/?q=%EA%B2%BD%EC%A3%BC%EC%8B%9C+%EC%9A%A9%EB%8B%B4%EB%A1%9C+104%EB%B2%88%EA%B8%B8+29-2"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  padding: '12px 24px',
                  background: '#4285F4',
                  color: 'white',
                  borderRadius: 8,
                  fontSize: 14, fontWeight: 600,
                  textDecoration: 'none',
                  boxShadow: '0 4px 12px rgba(66,133,244,0.25)',
                }}
              >
                Google 지도에서 보기
              </a>
            </div>
          </div>

          {/* Blog & Instagram */}
          <div style={{
            marginTop: 32, background: '#fff', borderRadius: 16, padding: 36,
            boxShadow: 'var(--shadow)',
            border: '1px solid var(--line)',
            textAlign: 'center',
          }}>
            <div style={{ fontSize: 20, fontWeight: 800, marginBottom: 8, color: 'var(--ink)' }}>
              좀 더 자세한 이야기를 듣고 싶다면?
            </div>
            <div style={{ fontSize: 14, color: 'var(--text)', marginBottom: 28, lineHeight: 1.6 }}>
              이룸수학의 수업 이야기, 학생 후기, 수학 공부 팁을 확인하세요
            </div>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
              <a
                href="https://blog.naver.com/iroommath1"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex', alignItems: 'center', gap: 12,
                  padding: '20px 36px',
                  background: '#03C75A',
                  color: 'white',
                  borderRadius: 20,
                  fontSize: 18, fontWeight: 800,
                  textDecoration: 'none',
                  transition: 'all 0.3s',
                  boxShadow: '0 8px 24px rgba(3,199,90,0.3)',
                  flex: '1 1 200px',
                  justifyContent: 'center',
                }}
              >
                <span style={{ fontSize: 24, fontWeight: 900, background: 'white', color: '#03C75A', borderRadius: 6, width: 32, height: 32, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>N</span>
                네이버 블로그
              </a>
              <a
                href="https://www.instagram.com/iroom_math?igsh=MXdxMnZtdDViZ2dxZg=="
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex', alignItems: 'center', gap: 12,
                  padding: '20px 36px',
                  background: 'linear-gradient(135deg, #F58529, #DD2A7B, #8134AF, #515BD4)',
                  color: 'white',
                  borderRadius: 20,
                  fontSize: 18, fontWeight: 800,
                  textDecoration: 'none',
                  transition: 'all 0.3s',
                  boxShadow: '0 8px 24px rgba(221,42,123,0.3)',
                  flex: '1 1 200px',
                  justifyContent: 'center',
                }}
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
                인스타그램
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
