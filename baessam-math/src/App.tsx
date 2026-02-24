import { useState, useEffect } from 'react';
import { SECTIONS, PHONE } from './data/constants';
import { SEO_TAGS } from './data/seo';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import ProgramSection from './components/sections/ProgramSection';
import SystemSection from './components/sections/SystemSection';
import ResultsSection from './components/sections/ResultsSection';
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
    document.title = '일품배쌤수학 | 경주 황성동 중등·고등 수학 전문학원';
    const meta = document.createElement('meta');
    meta.name = 'keywords';
    meta.content = SEO_TAGS.join(', ');
    document.head.appendChild(meta);
    const desc = document.createElement('meta');
    desc.name = 'description';
    desc.content = '경주 황성동 일품배쌤수학. 20년 경력 수학 전문 강사, 최대 4명 소규모 맞춤 수업. 서울대·의대 합격 배출. 초등 20만원, 중등 30만원, 고등 40만원. 신고 제2037-7호';
    document.head.appendChild(desc);
    return () => { document.head.removeChild(meta); document.head.removeChild(desc); };
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

  return (
    <>
      <Navbar
        activeNav={activeNav}
        scrollY={scrollY}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        scrollTo={scrollTo}
      />
      <HeroSection scrollTo={scrollTo} />
      <AboutSection />
      <ProgramSection />
      <SystemSection />
      <ResultsSection />
      <ContactSection />
      <Footer scrollTo={scrollTo} />

      {/* Floating CTA (Mobile) */}
      <a
        href={`tel:${PHONE.replace(/-/g, '')}`}
        style={{
          position: 'fixed', bottom: 24, right: 24,
          width: 60, height: 60, borderRadius: '50%',
          background: 'linear-gradient(135deg, #FF6B6B, #ee5a24)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 28, color: 'white',
          boxShadow: '0 8px 30px rgba(255,107,107,0.4)',
          zIndex: 90,
          transition: 'transform 0.3s',
          textDecoration: 'none',
          opacity: scrollY > 400 ? 1 : 0,
          pointerEvents: scrollY > 400 ? 'auto' : 'none',
        }}
      >
        📞
      </a>
    </>
  );
}
