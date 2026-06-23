// 화면에 노출되는 FAQ 섹션 (FAQPage JSON-LD와 1:1 정합, 네이티브 details로 프리렌더·접근성 확보)
import FadeIn from '../common/FadeIn';
import { FAQS } from '../../data/faq';

export default function FAQSection() {
  return (
    <section id="faq" style={{ padding: '88px 0', background: 'var(--bg-soft)' }}>
      <div className="container" style={{ maxWidth: 820, margin: '0 auto', padding: '0 32px' }}>
        <FadeIn>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <span className="section-label">FAQ</span>
            <h2 className="section-title" style={{ fontFamily: "'Nanum Myeongjo', serif", fontSize: 36, fontWeight: 800, letterSpacing: -0.5 }}>
              자주 묻는 질문
            </h2>
            <p style={{ fontSize: 16, color: '#888', marginTop: 12 }}>위치·수업료·실적·내신 대비를 한눈에 확인하세요</p>
          </div>
        </FadeIn>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          {FAQS.map((item, i) => (
            <FadeIn key={i} delay={0.06 * i}>
              <details
                style={{
                  background: '#fff',
                  borderRadius: 12,
                  border: '1px solid var(--line)',
                  boxShadow: 'var(--shadow)',
                  padding: '4px 24px',
                }}
              >
                <summary
                  style={{
                    cursor: 'pointer',
                    listStyle: 'none',
                    padding: '20px 0',
                    fontSize: 17,
                    fontWeight: 700,
                    color: 'var(--ink)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 12,
                  }}
                >
                  <span style={{ color: 'var(--primary)', fontWeight: 800 }}>Q.</span>
                  {item.q}
                </summary>
                <p style={{ fontSize: 15, color: 'var(--text)', lineHeight: 1.85, padding: '0 0 20px', margin: 0 }}>
                  {item.a}
                </p>
              </details>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
