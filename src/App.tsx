import { useState, useEffect } from 'react';
import { SECTIONS, PHONE } from './data/constants';
import { SEO_TAGS } from './data/seo';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import MidCTA from './components/common/MidCTA';
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import ProgramSection from './components/sections/ProgramSection';
import SystemSection from './components/sections/SystemSection';
import ResultsSection from './components/sections/ResultsSection';
import BlogSection from './components/sections/BlogSection';
import FAQSection from './components/sections/FAQSection';
import ContactSection from './components/sections/ContactSection';

export default function App() {
  const [activeNav, setActiveNav] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const h = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', h, { passive: true });
    return () => window.removeEventListener('scroll', h);
  }, []);

  useEffect(() => {
    document.title = '경주수학학원 이룸수학 | 황성동 중등·고등 수학 전문학원 (최대5명)';
    // Update existing meta tags instead of creating duplicates
    const existingDesc = document.querySelector('meta[name="description"]');
    if (existingDesc) {
      existingDesc.setAttribute('content', '경주수학학원 이룸수학. 경주시 황성동 위치, 20년 경력 수학 전문 강사 배수연. 최대 5명 소규모 맞춤 수업. 서울대·의대 합격 배출. 경주고, 문화고, 계림고, 경주여고 내신 전문. ☎ 010-4812-6947');
    }
    const existingKeywords = document.querySelector('meta[name="keywords"]');
    if (existingKeywords) {
      existingKeywords.setAttribute('content', SEO_TAGS.join(', '));
    }
    return () => {};
  }, []);

  useEffect(() => {
    const sections = SECTIONS.map((s) => document.getElementById(s.id));
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveNav(e.target.id);
        });
      },
      { threshold: 0.3 }
    );
    sections.forEach((s) => s && obs.observe(s));
    return () => obs.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  const showFloatingBar = scrollY > 600;
  const isNearContact = activeNav === 'contact';

  return (
    <>
      <Navbar
        activeNav={activeNav}
        scrollY={scrollY}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        scrollTo={scrollTo}
      />

      {/* Trust strip under hero */}
      <HeroSection scrollTo={scrollTo} />
      <div className="trust-strip">
        <span>서울대·의대 합격 배출</span>
        <span>반당 최대 5명 소규모</span>
        <span>20년 경력</span>
        <span>신고 제2037-7호</span>
      </div>

      <AboutSection scrollTo={scrollTo} />

      <MidCTA
        scrollTo={scrollTo}
        headline="우리 아이도 달라질 수 있습니다"
        sub="20년 경력의 맞춤 지도로 성적 변화를 경험하세요"
        variant="warm"
      />

      <ProgramSection scrollTo={scrollTo} />
      <SystemSection />

      <MidCTA
        scrollTo={scrollTo}
        headline="체계적인 학습 시스템이 궁금하시다면"
        sub="배쌤의 4단계 내신 대비 전략을 직접 상담받아보세요"
        variant="dark"
      />

      <ResultsSection scrollTo={scrollTo} />
      <BlogSection />
      <FAQSection />
      <ContactSection />
      <Footer scrollTo={scrollTo} />

      {/* Floating CTA Bar (bottom) */}
      <div
        className={`floating-cta-bar ${(!showFloatingBar || isNearContact) ? 'hidden' : ''}`}
      >
        <div style={{ color: 'var(--ink)', fontSize: 14.5, fontWeight: 600 }}>
          <span style={{ color: 'var(--muted)', fontSize: 13 }}>반당 최대 5명</span>
          {' · '}
          <span>무료 상담</span>
        </div>
        <button
          onClick={() => scrollTo('contact')}
          className="cta-btn"
          style={{ padding: '10px 24px', fontSize: 14 }}
        >
          상담 신청
        </button>
        <a
          href={`tel:${PHONE.replace(/-/g, '')}`}
          style={{
            background: '#fff', color: 'var(--ink)',
            border: '1px solid var(--line)',
            borderRadius: 10,
            padding: '10px 18px', fontSize: 14, fontWeight: 600,
            textDecoration: 'none',
          }}
        >
          전화
        </a>
        <a
          href="https://open.kakao.com/o/pnVVYrki"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            background: '#FEE500', color: '#3C1E1E',
            border: 'none',
            borderRadius: 10,
            padding: '10px 18px', fontSize: 14, fontWeight: 700,
            textDecoration: 'none',
          }}
        >
          카카오톡
        </a>
      </div>
    </>
  );
}
