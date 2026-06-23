// 인스타그램 지정 게시물 3개를 공식 임베드로 노출하는 섹션
import { useEffect } from 'react';
import FadeIn from '../common/FadeIn';
import { INSTAGRAM_PERMALINKS, INSTAGRAM_PROFILE } from '../../data/instagram';

type InstgrmWindow = Window & { instgrm?: { Embeds: { process: () => void } } };

export default function InstagramSection() {
  useEffect(() => {
    const w = window as InstgrmWindow;
    if (w.instgrm) {
      w.instgrm.Embeds.process();
      return;
    }
    const id = 'instagram-embed-js';
    if (document.getElementById(id)) return;
    const s = document.createElement('script');
    s.id = id;
    s.async = true;
    s.src = 'https://www.instagram.com/embed.js';
    document.body.appendChild(s);
  }, []);

  return (
    <section id="instagram" style={{ padding: '88px 0', background: 'var(--bg-soft)' }}>
      <div className="container" style={{ maxWidth: 1100, margin: '0 auto', padding: '0 32px' }}>
        <FadeIn>
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <span className="section-label">INSTAGRAM</span>
            <h2 className="section-title" style={{ fontFamily: "'Nanum Myeongjo', serif", fontSize: 36, fontWeight: 800, letterSpacing: -0.5 }}>
              인스타그램
            </h2>
            <p style={{ fontSize: 16, color: 'var(--text)', marginTop: 12 }}>이룸수학의 일상과 수업 소식을 전해드립니다</p>
          </div>
        </FadeIn>

        <div
          className="insta-grid"
          style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20, justifyItems: 'center' }}
        >
          {INSTAGRAM_PERMALINKS.map((url) => (
            <blockquote
              key={url}
              className="instagram-media"
              data-instgrm-permalink={url}
              data-instgrm-version="14"
              style={{
                background: '#fff',
                border: '1px solid var(--line)',
                borderRadius: 12,
                margin: 0,
                maxWidth: 340,
                width: '100%',
                minWidth: 'auto',
                boxShadow: 'var(--shadow)',
              }}
            >
              <a href={url} target="_blank" rel="noopener noreferrer" style={{ display: 'block', padding: 20, color: 'var(--primary)', textDecoration: 'none', fontWeight: 600 }}>
                인스타그램에서 보기
              </a>
            </blockquote>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: 40 }}>
          <a
            href={INSTAGRAM_PROFILE}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '14px 32px', borderRadius: 10,
              background: 'linear-gradient(135deg, #F58529, #DD2A7B, #8134AF, #515BD4)',
              color: 'white', fontSize: 15, fontWeight: 700, textDecoration: 'none',
            }}
          >
            인스타그램 팔로우 @iroom_math
          </a>
        </div>
      </div>
    </section>
  );
}
