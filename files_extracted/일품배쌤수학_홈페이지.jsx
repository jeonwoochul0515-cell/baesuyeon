import { useState, useEffect, useRef } from "react";

/*
  ═══════════════════════════════════════════════
  일품배쌤수학 — 배수연 선생님 홈페이지
  경주시 황성동 · 중등/고등 내신 전문
  ═══════════════════════════════════════════════
*/

const PHONE = "010-4812-6947";

const SECTIONS = [
  { id: "home", label: "홈" },
  { id: "about", label: "소개" },
  { id: "program", label: "프로그램" },
  { id: "system", label: "학습시스템" },
  { id: "results", label: "성과" },
  { id: "contact", label: "상담신청" },
];

const PROGRAMS = [
  {
    grade: "초등부",
    badge: "초3~초6",
    color: "#4ECDC4",
    icon: "🌱",
    desc: "수학의 첫 단추를 제대로",
    price: "월 20만원",
    details: [
      "기본 연산력 → 스토리텔링 → 문제 적용",
      "기초 개념 완성 중심 수업",
      "필요시 추가 프린트 및 교재 제공",
    ],
  },
  {
    grade: "중등부",
    badge: "중1~중3",
    color: "#FF6B6B",
    icon: "📐",
    desc: "정규반 · 선행반 맞춤 배정",
    price: "월 30만원",
    details: [
      "학생 역량에 맞춘 반 배정",
      "개념 원리 + 적용 문제 풀이",
      "RPM, 쎈터라이트 등 유형별 문제집 활용",
      "기출·모의고사 기반 고난도 훈련",
    ],
    schedule: "중1 오후 6~7시 / 중2 오후 7~8시",
  },
  {
    grade: "고등부",
    badge: "고1~고3",
    color: "#6C5CE7",
    icon: "🎯",
    desc: "내신반 · 수능반 운영",
    price: "월 40만원",
    details: [
      "학교 진도 + 내신 대비 + 수능 개념·심화 병행",
      "정규 + 심화 + 클리닉 3단계 체제",
      "대학별 고난도 문제 대비 상담 · 로드맵 제공",
    ],
    schedule: "평일 9~10:30 / 10~12 타임 · 주말 수업 운영",
  },
];

const TARGET_SCHOOLS = ["경주고", "문화고", "계림고", "경주여고", "근화여고", "선덕여고", "황성중", "선덕여중"];

const SEO_TAGS = ["일품배쌤수학", "경주수학학원", "경주학원추천", "수학공부법", "황성동수학학원", "수학개념정리", "경주고등수학", "고등수학학원", "수학학습법", "중등수학", "기말고사대비", "수학성적향상", "수학기초", "수학내신대비", "수학실수방지", "서울대합격", "의대합격", "수학1등급"];

const EXAM_PREP = [
  { icon: "🔄", title: "유형 반복", desc: "내신 출제 포인트 중심\n유형 반복 훈련" },
  { icon: "📚", title: "부교재 정복", desc: "학교별 부교재·프린트\n완전 정복" },
  { icon: "📝", title: "실전 풀이", desc: "기출·유사문제\n실전 풀이" },
  { icon: "📒", title: "정리 노트", desc: "나만의 정리 노트\n제작 지도" },
];

const STRENGTHS = [
  { num: "20", unit: "년", label: "수학 전문 경력", sub: "경주 지역 전문" },
  { num: "4", unit: "명", label: "최대 수업 인원", sub: "소규모 그룹 수업" },
  { num: "1:1", unit: "", label: "맞춤형 지도", sub: "개인별 수준 맞춤" },
];

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

function FadeIn({ children, delay = 0, direction = "up", style = {} }) {
  const [ref, visible] = useInView();
  const transforms = {
    up: "translateY(40px)",
    down: "translateY(-40px)",
    left: "translateX(40px)",
    right: "translateX(-40px)",
    none: "none",
  };
  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : transforms[direction],
        transition: `opacity 0.8s cubic-bezier(0.16,1,0.3,1) ${delay}s, transform 0.8s cubic-bezier(0.16,1,0.3,1) ${delay}s`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

export default function App() {
  const [activeNav, setActiveNav] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [formData, setFormData] = useState({ name: "", phone: "", grade: "", message: "" });
  const [formSent, setFormSent] = useState(false);

  useEffect(() => {
    const h = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  useEffect(() => {
    document.title = "일품배쌤수학 | 경주 황성동 중등·고등 수학 전문학원";
    const meta = document.createElement("meta");
    meta.name = "keywords";
    meta.content = SEO_TAGS.join(", ");
    document.head.appendChild(meta);
    const desc = document.createElement("meta");
    desc.name = "description";
    desc.content = "경주 황성동 일품배쌤수학. 20년 경력 수학 전문 강사, 최대 4명 소규모 맞춤 수업. 서울대·의대 합격 배출. 초등 20만원, 중등 30만원, 고등 40만원. 신고 제2037-7호";
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

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const handleSubmit = () => {
    if (!formData.name || !formData.phone) return;
    setFormSent(true);
    setTimeout(() => setFormSent(false), 3000);
  };

  return (
    <div style={{ fontFamily: "'Pretendard', 'Noto Sans KR', -apple-system, sans-serif", color: "#1a1a2e", background: "#FAFAF7", minHeight: "100vh", overflowX: "hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;600;700;800;900&family=Nanum+Myeongjo:wght@400;700;800&display=swap');

        * { margin: 0; padding: 0; box-sizing: border-box; }
        html { scroll-behavior: smooth; }

        ::selection { background: #FF6B6B; color: white; }

        .nav-fixed {
          position: fixed; top: 0; left: 0; right: 0; z-index: 100;
          transition: all 0.4s cubic-bezier(0.16,1,0.3,1);
        }

        .hero-section {
          position: relative;
          min-height: 100vh;
          display: flex; align-items: center; justify-content: center;
          background: linear-gradient(165deg, #1a1a2e 0%, #16213e 40%, #0f3460 100%);
          overflow: hidden;
        }

        .hero-section::before {
          content: '';
          position: absolute; inset: 0;
          background: 
            radial-gradient(circle at 20% 50%, rgba(255,107,107,0.12) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(78,205,196,0.1) 0%, transparent 40%),
            radial-gradient(circle at 60% 80%, rgba(108,92,231,0.08) 0%, transparent 40%);
        }

        .hero-grid {
          position: absolute; inset: 0; opacity: 0.04;
          background-image: 
            linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px);
          background-size: 60px 60px;
        }

        .float-math {
          position: absolute; font-size: 80px; opacity: 0.03; color: white;
          animation: floatSlow 20s infinite ease-in-out;
          font-family: 'Nanum Myeongjo', serif;
        }

        @keyframes floatSlow {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(5deg); }
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }

        .program-card {
          background: white;
          border-radius: 24px;
          padding: 36px 28px;
          border: 1px solid rgba(0,0,0,0.04);
          box-shadow: 0 4px 24px rgba(0,0,0,0.03);
          transition: all 0.4s cubic-bezier(0.16,1,0.3,1);
          cursor: default;
          position: relative;
          overflow: hidden;
        }
        .program-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 60px rgba(0,0,0,0.08);
        }
        .program-card::before {
          content: '';
          position: absolute; top: 0; left: 0; right: 0; height: 4px;
          border-radius: 24px 24px 0 0;
        }

        .exam-card {
          background: white;
          border-radius: 20px;
          padding: 28px 20px;
          text-align: center;
          border: 1px solid rgba(0,0,0,0.04);
          box-shadow: 0 2px 16px rgba(0,0,0,0.02);
          transition: all 0.3s ease;
        }
        .exam-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 40px rgba(0,0,0,0.06);
        }

        .strength-card {
          text-align: center;
          padding: 40px 24px;
          border-radius: 24px;
          background: linear-gradient(135deg, #fff 0%, #F8F9FF 100%);
          border: 1px solid rgba(108,92,231,0.08);
          transition: all 0.3s ease;
        }
        .strength-card:hover {
          border-color: rgba(108,92,231,0.2);
          box-shadow: 0 8px 32px rgba(108,92,231,0.08);
        }

        .cta-btn {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 16px 36px;
          background: linear-gradient(135deg, #FF6B6B 0%, #ee5a24 100%);
          color: white; border: none; border-radius: 60px;
          font-size: 17px; font-weight: 700;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.16,1,0.3,1);
          box-shadow: 0 8px 30px rgba(255,107,107,0.3);
          text-decoration: none;
          font-family: inherit;
        }
        .cta-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 14px 40px rgba(255,107,107,0.4);
        }

        .input-field {
          width: 100%;
          padding: 16px 20px;
          border: 2px solid #eee;
          border-radius: 14px;
          font-size: 15px;
          font-family: inherit;
          transition: border-color 0.3s;
          background: white;
          outline: none;
          color: #1a1a2e;
        }
        .input-field:focus {
          border-color: #FF6B6B;
        }
        .input-field::placeholder {
          color: #aaa;
        }

        .section-label {
          display: inline-block;
          font-size: 13px; font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          padding: 6px 16px;
          border-radius: 30px;
          margin-bottom: 16px;
        }

        .nav-link {
          background: none; border: none;
          font-size: 15px; font-weight: 500;
          cursor: pointer; padding: 8px 16px;
          border-radius: 8px;
          transition: all 0.2s;
          font-family: inherit;
          color: inherit;
        }
        .nav-link:hover { background: rgba(0,0,0,0.04); }

        @media (max-width: 768px) {
          .hero-title { font-size: 36px !important; }
          .hero-sub { font-size: 18px !important; }
          .section-title { font-size: 28px !important; }
          .program-grid { grid-template-columns: 1fr !important; }
          .exam-grid { grid-template-columns: 1fr 1fr !important; }
          .strength-grid { grid-template-columns: 1fr !important; }
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
          .container { padding: 0 20px !important; }
        }
      `}</style>

      {/* ═══ NAVIGATION ═══ */}
      <nav
        className="nav-fixed"
        style={{
          background: scrollY > 80 ? "rgba(250,250,247,0.92)" : "transparent",
          backdropFilter: scrollY > 80 ? "blur(20px)" : "none",
          borderBottom: scrollY > 80 ? "1px solid rgba(0,0,0,0.06)" : "1px solid transparent",
          padding: scrollY > 80 ? "12px 0" : "20px 0",
        }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <button onClick={() => scrollTo("home")} style={{ background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{
              width: 40, height: 40, borderRadius: 12,
              background: "linear-gradient(135deg, #FF6B6B, #ee5a24)",
              display: "flex", alignItems: "center", justifyContent: "center",
              color: "white", fontWeight: 900, fontSize: 18,
              fontFamily: "'Nanum Myeongjo', serif",
            }}>배</div>
            <span style={{
              fontSize: 18, fontWeight: 800, letterSpacing: -0.5,
              color: scrollY > 80 ? "#1a1a2e" : "white",
              transition: "color 0.3s",
            }}>일품배쌤수학</span>
          </button>

          <div className="desktop-nav" style={{ display: "flex", gap: 4 }}>
            {SECTIONS.map((s) => (
              <button
                key={s.id}
                className="nav-link"
                onClick={() => scrollTo(s.id)}
                style={{
                  color: activeNav === s.id
                    ? "#FF6B6B"
                    : scrollY > 80 ? "#555" : "rgba(255,255,255,0.8)",
                  fontWeight: activeNav === s.id ? 700 : 500,
                }}
              >
                {s.label}
              </button>
            ))}
            <a
              href={`tel:${PHONE.replace(/-/g, "")}`}
              className="cta-btn"
              style={{ padding: "10px 24px", fontSize: 14, marginLeft: 8 }}
            >
              📞 상담 전화
            </a>
          </div>

          <button
            className="mobile-menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              display: "none", background: "none", border: "none",
              fontSize: 28, cursor: "pointer", padding: 4,
              color: scrollY > 80 ? "#1a1a2e" : "white",
            }}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>

        {menuOpen && (
          <div style={{
            position: "absolute", top: "100%", left: 0, right: 0,
            background: "rgba(250,250,247,0.98)", backdropFilter: "blur(20px)",
            borderBottom: "1px solid rgba(0,0,0,0.06)",
            padding: "16px 32px",
          }}>
            {SECTIONS.map((s) => (
              <button
                key={s.id}
                onClick={() => scrollTo(s.id)}
                style={{
                  display: "block", width: "100%", textAlign: "left",
                  padding: "14px 0", border: "none", background: "none",
                  fontSize: 16, fontWeight: activeNav === s.id ? 700 : 400,
                  color: activeNav === s.id ? "#FF6B6B" : "#333",
                  cursor: "pointer", fontFamily: "inherit",
                  borderBottom: "1px solid rgba(0,0,0,0.04)",
                }}
              >
                {s.label}
              </button>
            ))}
            <a
              href={`tel:${PHONE.replace(/-/g, "")}`}
              style={{
                display: "block", textAlign: "center", marginTop: 16,
                padding: "14px", background: "#FF6B6B", color: "white",
                borderRadius: 14, fontWeight: 700, fontSize: 16,
                textDecoration: "none",
              }}
            >
              📞 상담 전화하기
            </a>
          </div>
        )}
      </nav>

      {/* ═══ HERO ═══ */}
      <section id="home" className="hero-section">
        <div className="hero-grid" />
        <div className="float-math" style={{ top: "15%", left: "10%" }}>∫</div>
        <div className="float-math" style={{ top: "60%", right: "8%", animationDelay: "5s", fontSize: 60 }}>π</div>
        <div className="float-math" style={{ bottom: "20%", left: "25%", animationDelay: "10s", fontSize: 50 }}>Σ</div>
        <div className="float-math" style={{ top: "30%", right: "25%", animationDelay: "7s", fontSize: 70 }}>∞</div>

        <div style={{ position: "relative", zIndex: 2, textAlign: "center", padding: "0 24px", maxWidth: 800 }}>
          <div style={{
            display: "inline-block",
            padding: "8px 20px",
            background: "rgba(255,107,107,0.15)",
            borderRadius: 30,
            fontSize: 14, fontWeight: 600,
            color: "#FF9F9F",
            marginBottom: 28,
            animation: "fadeInUp 0.8s ease",
            letterSpacing: 1,
          }}>
            경주 황성동 · 중등/고등 내신 전문
          </div>

          <h1
            className="hero-title"
            style={{
              fontFamily: "'Nanum Myeongjo', serif",
              fontSize: 52, fontWeight: 800, lineHeight: 1.25,
              color: "white", letterSpacing: -1,
              animation: "fadeInUp 0.8s ease 0.15s both",
            }}
          >
            수학이 어려운 순간,<br />
            <span style={{
              background: "linear-gradient(135deg, #FF6B6B 0%, #FFD93D 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>
              배쌤이 함께합니다
            </span>
          </h1>

          <p
            className="hero-sub"
            style={{
              fontSize: 20, color: "rgba(255,255,255,0.65)",
              lineHeight: 1.7, marginTop: 24,
              animation: "fadeInUp 0.8s ease 0.3s both",
              fontWeight: 300,
            }}
          >
            학생 한 명 한 명에게 맞춘 1:1 개념 설명<br />
            최대 4명 소규모 수업으로 확실한 성적 향상
          </p>

          <div style={{ marginTop: 40, animation: "fadeInUp 0.8s ease 0.45s both", display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <button className="cta-btn" onClick={() => scrollTo("contact")}>
              상담 신청하기 →
            </button>
            <a
              href={`tel:${PHONE.replace(/-/g, "")}`}
              style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                padding: "16px 36px",
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.15)",
                color: "white", borderRadius: 60,
                fontSize: 17, fontWeight: 600,
                textDecoration: "none",
                backdropFilter: "blur(10px)",
                transition: "all 0.3s",
              }}
            >
              📞 {PHONE}
            </a>
          </div>

          <div style={{
            marginTop: 60,
            display: "flex", gap: 40, justifyContent: "center",
            animation: "fadeInUp 0.8s ease 0.6s both",
            flexWrap: "wrap",
          }}>
            {STRENGTHS.map((s, i) => (
              <div key={i} style={{ textAlign: "center" }}>
                <div style={{ display: "flex", alignItems: "baseline", justifyContent: "center", gap: 2 }}>
                  <span style={{ fontSize: 40, fontWeight: 900, color: "white", fontFamily: "'Nanum Myeongjo', serif" }}>{s.num}</span>
                  <span style={{ fontSize: 18, fontWeight: 600, color: "rgba(255,255,255,0.6)" }}>{s.unit}</span>
                </div>
                <div style={{ fontSize: 14, color: "rgba(255,255,255,0.5)", marginTop: 4, fontWeight: 500 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* bottom gradient fade */}
        <div style={{
          position: "absolute", bottom: 0, left: 0, right: 0, height: 120,
          background: "linear-gradient(to top, #FAFAF7, transparent)",
        }} />
      </section>

      {/* ═══ ABOUT ═══ */}
      <section id="about" style={{ padding: "100px 0 80px" }}>
        <div className="container" style={{ maxWidth: 1000, margin: "0 auto", padding: "0 32px" }}>
          <FadeIn>
            <div style={{ textAlign: "center", marginBottom: 60 }}>
              <span className="section-label" style={{ background: "#FFF0F0", color: "#FF6B6B" }}>ABOUT</span>
              <h2 className="section-title" style={{ fontFamily: "'Nanum Myeongjo', serif", fontSize: 36, fontWeight: 800, lineHeight: 1.4, letterSpacing: -0.5 }}>
                배수연 선생님을<br />소개합니다
              </h2>
            </div>
          </FadeIn>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center" }}>
            <FadeIn delay={0.1} direction="left" style={{}}>
              <div style={{
                background: "linear-gradient(135deg, #1a1a2e 0%, #0f3460 100%)",
                borderRadius: 28, padding: 40, color: "white",
                position: "relative", overflow: "hidden",
              }}>
                <div style={{ position: "absolute", top: -20, right: -20, fontSize: 120, opacity: 0.05, fontFamily: "'Nanum Myeongjo', serif" }}>數</div>
                <div style={{ fontSize: 48, marginBottom: 20 }}>👨‍🏫</div>
                <div style={{ fontSize: 14, color: "rgba(255,255,255,0.5)", fontWeight: 600, letterSpacing: 1, marginBottom: 8 }}>TEACHER</div>
                <div style={{ fontSize: 28, fontWeight: 800, fontFamily: "'Nanum Myeongjo', serif", marginBottom: 8 }}>배수연</div>
                <div style={{ fontSize: 15, color: "rgba(255,255,255,0.6)", lineHeight: 1.6 }}>
                  일품배쌤수학 원장<br />
                  20년 경력 수학 전문 강사<br />
                  중등·고등 내신 전문
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.2} direction="right" style={{}}>
              <div>
                <p style={{ fontSize: 17, lineHeight: 2, color: "#444", fontWeight: 400 }}>
                  20년 경력의 수학 전문 강사로서, 많은 학생들과 함께 공부해오면서
                  <strong style={{ color: "#1a1a2e" }}> 한 명 한 명에게 정확히 맞춘 수업</strong>이
                  가장 효과적이라는 것을 경험으로 알게 되었습니다.
                </p>
                <p style={{ fontSize: 17, lineHeight: 2, color: "#444", fontWeight: 400, marginTop: 20 }}>
                  개념→유형→실전→오답까지 완전 맞춤형으로 지도하며,
                  학교별 기출·성취도 기반 내신 분석을 제공합니다.
                  소규모 정확 지도를 통해
                  <strong style={{ color: "#FF6B6B" }}> "성적을 올리는 수업"</strong>을 목표로 합니다.
                </p>
                <div style={{
                  marginTop: 28, padding: "20px 24px",
                  background: "#FFF8F0",
                  borderLeft: "4px solid #FF6B6B",
                  borderRadius: "0 14px 14px 0",
                  fontSize: 15, color: "#666", lineHeight: 1.7, fontStyle: "italic",
                }}>
                  "여러분에게 쉽게 다가가기 위해 노력합니다.<br />
                  내신 대비와 수능 준비는 물론, 대학별 고난도 문제까지<br />
                  체계적으로 안내드립니다."
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ═══ PROGRAMS ═══ */}
      <section id="program" style={{ padding: "80px 0", background: "linear-gradient(180deg, #FAFAF7 0%, #F5F3EE 100%)" }}>
        <div className="container" style={{ maxWidth: 1100, margin: "0 auto", padding: "0 32px" }}>
          <FadeIn>
            <div style={{ textAlign: "center", marginBottom: 60 }}>
              <span className="section-label" style={{ background: "#F0F0FF", color: "#6C5CE7" }}>PROGRAM</span>
              <h2 className="section-title" style={{ fontFamily: "'Nanum Myeongjo', serif", fontSize: 36, fontWeight: 800, letterSpacing: -0.5 }}>
                학년별 맞춤 프로그램
              </h2>
              <p style={{ fontSize: 16, color: "#888", marginTop: 12 }}>학생의 수학적 역량에 맞춰서 반을 배정합니다</p>
            </div>
          </FadeIn>

          <div className="program-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
            {PROGRAMS.map((p, i) => (
              <FadeIn key={i} delay={0.1 * i}>
                <div className="program-card" style={{ height: "100%" }}>
                  <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 4, background: p.color, borderRadius: "24px 24px 0 0" }} />
                  <div style={{ fontSize: 40, marginBottom: 16 }}>{p.icon}</div>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                    <h3 style={{ fontSize: 22, fontWeight: 800, fontFamily: "'Nanum Myeongjo', serif" }}>{p.grade}</h3>
                    <span style={{
                      fontSize: 12, fontWeight: 700, padding: "4px 12px",
                      background: p.color + "15", color: p.color,
                      borderRadius: 20,
                    }}>{p.badge}</span>
                  </div>
                  <p style={{ fontSize: 15, color: "#888", marginBottom: 20, fontWeight: 500 }}>{p.desc}</p>

                  {p.price && (
                    <div style={{
                      display: "inline-block", marginBottom: 16,
                      padding: "6px 14px", borderRadius: 10,
                      background: p.color + "10", color: p.color,
                      fontSize: 15, fontWeight: 800,
                    }}>
                      {p.price}
                    </div>
                  )}

                  <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                    {p.details.map((d, j) => (
                      <div key={j} style={{ display: "flex", gap: 10, fontSize: 14, color: "#555", lineHeight: 1.6 }}>
                        <span style={{ color: p.color, flexShrink: 0, marginTop: 2 }}>✓</span>
                        <span>{d}</span>
                      </div>
                    ))}
                  </div>

                  {p.schedule && (
                    <div style={{
                      marginTop: 20, padding: "12px 16px",
                      background: "#F8F8FA", borderRadius: 12,
                      fontSize: 13, color: "#666",
                      display: "flex", alignItems: "center", gap: 8,
                    }}>
                      <span>🕐</span> {p.schedule}
                    </div>
                  )}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ LEARNING SYSTEM ═══ */}
      <section id="system" style={{ padding: "80px 0" }}>
        <div className="container" style={{ maxWidth: 1100, margin: "0 auto", padding: "0 32px" }}>
          <FadeIn>
            <div style={{ textAlign: "center", marginBottom: 60 }}>
              <span className="section-label" style={{ background: "#E8FFF5", color: "#4ECDC4" }}>SYSTEM</span>
              <h2 className="section-title" style={{ fontFamily: "'Nanum Myeongjo', serif", fontSize: 36, fontWeight: 800, letterSpacing: -0.5 }}>
                내신·시험 대비 전략
              </h2>
              <p style={{ fontSize: 16, color: "#888", marginTop: 12 }}>체계적인 4단계 시스템으로 시험에 완벽 대비합니다</p>
            </div>
          </FadeIn>

          <div className="exam-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20, marginBottom: 60 }}>
            {EXAM_PREP.map((e, i) => (
              <FadeIn key={i} delay={0.08 * i}>
                <div className="exam-card">
                  <div style={{ fontSize: 36, marginBottom: 14 }}>{e.icon}</div>
                  <div style={{ fontSize: 16, fontWeight: 700, color: "#1a1a2e", marginBottom: 8 }}>{e.title}</div>
                  <div style={{ fontSize: 14, color: "#888", lineHeight: 1.7, whiteSpace: "pre-line" }}>{e.desc}</div>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* 3-step flow */}
          <FadeIn delay={0.2}>
            <div style={{
              background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)",
              borderRadius: 28, padding: "48px 40",
              display: "flex", alignItems: "center", justifyContent: "center",
              gap: 20, flexWrap: "wrap", position: "relative", overflow: "hidden",
            }}>
              <div style={{ position: "absolute", inset: 0, opacity: 0.03, background: "radial-gradient(circle at 30% 50%, white 0%, transparent 60%)" }} />
              {[
                { step: "STEP 1", title: "개념 이해", icon: "💡", color: "#4ECDC4" },
                { step: "STEP 2", title: "유형 훈련", icon: "✏️", color: "#FFD93D" },
                { step: "STEP 3", title: "실전 적용", icon: "🎯", color: "#FF6B6B" },
              ].map((s, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 20 }}>
                  <div style={{ textAlign: "center", position: "relative", zIndex: 1 }}>
                    <div style={{ fontSize: 11, color: s.color, fontWeight: 700, letterSpacing: 2, marginBottom: 8 }}>{s.step}</div>
                    <div style={{
                      width: 72, height: 72, borderRadius: 20,
                      background: `${s.color}15`,
                      border: `2px solid ${s.color}30`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: 32, margin: "0 auto 8px",
                    }}>{s.icon}</div>
                    <div style={{ color: "white", fontSize: 15, fontWeight: 700 }}>{s.title}</div>
                  </div>
                  {i < 2 && <div style={{ color: "rgba(255,255,255,0.2)", fontSize: 24, fontWeight: 300 }}>→</div>}
                </div>
              ))}
            </div>
          </FadeIn>

          {/* Target Schools */}
          <FadeIn delay={0.3}>
            <div style={{
              marginTop: 48, textAlign: "center",
              padding: "32px 24px",
              background: "white", borderRadius: 24,
              border: "1px solid rgba(0,0,0,0.04)",
              boxShadow: "0 2px 16px rgba(0,0,0,0.02)",
            }}>
              <div style={{ fontSize: 14, color: "#888", fontWeight: 600, marginBottom: 16 }}>📍 경주 지역 맞춤 내신 분석 대상 학교</div>
              <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 10 }}>
                {TARGET_SCHOOLS.map((s, i) => (
                  <span key={i} style={{
                    padding: "8px 18px", borderRadius: 30,
                    background: "#F5F3EE", fontSize: 14, fontWeight: 600,
                    color: "#555",
                  }}>{s}</span>
                ))}
              </div>
              <div style={{ marginTop: 20, display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 16 }}>
                {["주차별 개념 시스템", "서술형·내신 실전 대비", "개별 실수 추적 관리", "수능형 사고력 강화", "정규+심화+클리닉 체제", "1:1 피드백"].map((t, i) => (
                  <span key={i} style={{ fontSize: 13, color: "#999" }}>✓ {t}</span>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ═══ SUCCESS STORIES ═══ */}
      <section id="results" style={{ padding: "80px 0", background: "linear-gradient(180deg, #FAFAF7 0%, #F5F3EE 100%)" }}>
        <div className="container" style={{ maxWidth: 1100, margin: "0 auto", padding: "0 32px" }}>
          <FadeIn>
            <div style={{ textAlign: "center", marginBottom: 60 }}>
              <span className="section-label" style={{ background: "#FFF5E6", color: "#FF8C42" }}>RESULTS</span>
              <h2 className="section-title" style={{ fontFamily: "'Nanum Myeongjo', serif", fontSize: 36, fontWeight: 800, letterSpacing: -0.5 }}>
                우리 학생들의 이야기
              </h2>
              <p style={{ fontSize: 16, color: "#888", marginTop: 12 }}>꾸준한 노력이 만들어낸 결과입니다</p>
            </div>
          </FadeIn>

          {/* Grade Improvement Cases */}
          <FadeIn delay={0.1}>
            <div style={{ marginBottom: 48 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 24 }}>
                <span style={{ fontSize: 24 }}>📈</span>
                <h3 style={{ fontSize: 20, fontWeight: 800, fontFamily: "'Nanum Myeongjo', serif" }}>성적 상승 사례</h3>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 20 }}>
                {[
                  {
                    name: "김○웅",
                    grade: "고3",
                    school: "경주고",
                    before: "중위권",
                    after: "서울대",
                    period: "3년 수강",
                    color: "#FF6B6B",
                    quote: "3년간 내신·수능 학습 시스템의 힘으로 서울대 경제학부에 합격했습니다",
                  },
                  {
                    name: "이○○",
                    grade: "고3",
                    school: "문화고",
                    before: "의대 목표",
                    after: "의대 2관왕",
                    period: "3년 수강",
                    color: "#6C5CE7",
                    quote: "3년 내내 일품배쌤수학 시스템으로 전남대·원광대 의대 동시 합격!",
                  },
                  {
                    name: "○○○",
                    grade: "고3",
                    school: "경주 지역",
                    before: "이공계 목표",
                    after: "UNIST 합격",
                    period: "꾸준 수강",
                    color: "#4ECDC4",
                    quote: "성균관대 어문계열과 UNIST에 동시 합격! 배쌤이 만든 또 하나의 기적",
                  },
                  {
                    name: "경주고 학생",
                    grade: "고등부",
                    school: "경주고",
                    before: "40점대",
                    after: "50점대↑",
                    period: "단기 향상",
                    color: "#FFD93D",
                    quote: "기말고사 100점 클럽 달성! 체계적 기출 분석과 유형 반복의 결과입니다",
                  },
                ].map((s, i) => (
                  <FadeIn key={i} delay={0.08 * i}>
                    <div style={{
                      background: "white",
                      borderRadius: 20,
                      padding: "28px 24px",
                      border: "1px solid rgba(0,0,0,0.04)",
                      boxShadow: "0 4px 20px rgba(0,0,0,0.03)",
                      transition: "all 0.3s ease",
                      cursor: "default",
                      position: "relative",
                      overflow: "hidden",
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 12px 40px rgba(0,0,0,0.07)"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.03)"; }}
                    >
                      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: s.color }} />

                      {/* Header */}
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 20 }}>
                        <div>
                          <div style={{ fontSize: 17, fontWeight: 800, color: "#1a1a2e" }}>{s.name} 학생</div>
                          <div style={{ fontSize: 13, color: "#999", marginTop: 4 }}>{s.school} · {s.grade}</div>
                        </div>
                        <div style={{
                          padding: "4px 12px",
                          background: s.color + "12",
                          color: s.color,
                          borderRadius: 20,
                          fontSize: 12, fontWeight: 700,
                        }}>
                          {s.period}
                        </div>
                      </div>

                      {/* Score Change */}
                      <div style={{
                        display: "flex", alignItems: "center", justifyContent: "center", gap: 16,
                        padding: "18px 0",
                        background: "#FAFAF7",
                        borderRadius: 14,
                        marginBottom: 18,
                      }}>
                        <div style={{ textAlign: "center" }}>
                          <div style={{ fontSize: 12, color: "#aaa", marginBottom: 4, fontWeight: 600 }}>BEFORE</div>
                          <div style={{ fontSize: 28, fontWeight: 900, color: "#ccc" }}>{s.before}</div>
                        </div>
                        <div style={{
                          fontSize: 24, color: s.color, fontWeight: 700,
                          display: "flex", alignItems: "center",
                        }}>→</div>
                        <div style={{ textAlign: "center" }}>
                          <div style={{ fontSize: 12, color: "#aaa", marginBottom: 4, fontWeight: 600 }}>AFTER</div>
                          <div style={{ fontSize: 28, fontWeight: 900, color: s.color }}>{s.after}</div>
                        </div>
                      </div>

                      {/* Quote */}
                      <div style={{
                        fontSize: 14, color: "#666", lineHeight: 1.7,
                        fontStyle: "italic",
                        padding: "12px 16px",
                        background: "#FAFAF7",
                        borderRadius: 12,
                        borderLeft: `3px solid ${s.color}30`,
                      }}>
                        "{s.quote}"
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* University Admission Cases */}
          <FadeIn delay={0.2}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 24 }}>
                <span style={{ fontSize: 24 }}>🎓</span>
                <h3 style={{ fontSize: 20, fontWeight: 800, fontFamily: "'Nanum Myeongjo', serif" }}>대학 합격 사례</h3>
              </div>

              <div style={{
                background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)",
                borderRadius: 24, padding: "40px 32px",
                position: "relative", overflow: "hidden",
              }}>
                <div style={{ position: "absolute", inset: 0, opacity: 0.03, background: "radial-gradient(circle at 70% 30%, white 0%, transparent 50%)" }} />

                <div style={{ position: "relative", zIndex: 1 }}>
                  <div style={{ textAlign: "center", marginBottom: 32 }}>
                    <div style={{ fontSize: 14, color: "rgba(255,255,255,0.4)", fontWeight: 600, letterSpacing: 2, marginBottom: 8 }}>2026 수시 합격 현황</div>
                    <div style={{ fontSize: 24, fontWeight: 800, color: "white", fontFamily: "'Nanum Myeongjo', serif" }}>
                      일품배쌤에서 꿈을 이룬 학생들
                    </div>
                  </div>

                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 16 }}>
                    {[
                      { name: "김○웅", univ: "서울대학교", dept: "경제학부", type: "3년 수강 · 수시", emoji: "🏛️", color: "#FF6B6B" },
                      { name: "세○", univ: "서울대학교", dept: "합격", type: "학부모 감사편지", emoji: "🎓", color: "#FF8C42" },
                      { name: "이○○", univ: "전남대 · 원광대", dept: "의과대학 2관왕", type: "3년 수강 · 수시", emoji: "🏥", color: "#4ECDC4" },
                      { name: "○○○", univ: "성균관대학교", dept: "어문계열", type: "수시 합격", emoji: "📚", color: "#6C5CE7" },
                      { name: "○○○", univ: "UNIST", dept: "이공계열", type: "동시 합격", emoji: "🔬", color: "#FFD93D" },
                    ].map((u, i) => (
                      <div
                        key={i}
                        style={{
                          background: "rgba(255,255,255,0.05)",
                          border: "1px solid rgba(255,255,255,0.08)",
                          borderRadius: 16,
                          padding: "22px 20px",
                          backdropFilter: "blur(10px)",
                          transition: "all 0.3s",
                        }}
                        onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.1)"; e.currentTarget.style.borderColor = u.color + "40"; }}
                        onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.05)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; }}
                      >
                        <div style={{ fontSize: 28, marginBottom: 10 }}>{u.emoji}</div>
                        <div style={{ fontSize: 12, color: u.color, fontWeight: 700, marginBottom: 6 }}>{u.type}</div>
                        <div style={{ fontSize: 16, fontWeight: 800, color: "white", marginBottom: 4 }}>{u.univ}</div>
                        <div style={{ fontSize: 13, color: "rgba(255,255,255,0.5)" }}>{u.dept}</div>
                        <div style={{ fontSize: 12, color: "rgba(255,255,255,0.3)", marginTop: 8 }}>{u.name} 학생</div>
                      </div>
                    ))}
                  </div>

                  <div style={{
                    textAlign: "center", marginTop: 32,
                    fontSize: 13, color: "rgba(255,255,255,0.25)", lineHeight: 1.6,
                  }}>
                    ※ 개인정보 보호를 위해 이름은 익명 처리하였습니다<br />
                    ※ 실제 학생·학부모 동의 하에 게재된 사례입니다
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Testimonials */}
          <FadeIn delay={0.3}>
            <div style={{ marginTop: 48 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 24 }}>
                <span style={{ fontSize: 24 }}>💬</span>
                <h3 style={{ fontSize: 20, fontWeight: 800, fontFamily: "'Nanum Myeongjo', serif" }}>학부모 후기</h3>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 20 }}>
                {[
                  {
                    text: "선생님은 든든한 버팀목이 되어주셨습니다. 선생님의 가르침 덕분에 아이의 고교 시절이 빛나는 결실로 마무리될 수 있었습니다. 서울대 합격이라는 결실을 맺게 해주셔서 진심으로 감사합니다.",
                    parent: "서울대 합격생 세○ 어머니",
                    stars: 5,
                  },
                  {
                    text: "3년 내내 일품배쌤수학만 믿고 다녔더니 전남대, 원광대 의대에 동시 합격했어요. 소규모라 아이 하나하나 꼼꼼히 봐주시고, 내신 기출 분석이 정말 정확했습니다.",
                    parent: "문화고 의대 2관왕 이○○ 학부모",
                    stars: 5,
                  },
                  {
                    text: "경주고에서 김○웅이가 3년간 배쌤과 함께 성장해서 서울대 경제학부에 합격했습니다. 개념부터 수능까지 체계적인 내신·수능 학습 시스템 덕분입니다.",
                    parent: "경주고 서울대 합격생 학부모",
                    stars: 5,
                  },
                ].map((t, i) => (
                  <div
                    key={i}
                    style={{
                      background: "white",
                      borderRadius: 20,
                      padding: "28px 24px",
                      border: "1px solid rgba(0,0,0,0.04)",
                      boxShadow: "0 4px 20px rgba(0,0,0,0.03)",
                    }}
                  >
                    <div style={{ fontSize: 16, marginBottom: 14, letterSpacing: 2 }}>
                      {"⭐".repeat(t.stars)}
                    </div>
                    <p style={{ fontSize: 15, color: "#555", lineHeight: 1.8, marginBottom: 16 }}>
                      "{t.text}"
                    </p>
                    <div style={{
                      fontSize: 13, color: "#aaa", fontWeight: 600,
                      paddingTop: 14,
                      borderTop: "1px solid #f0f0f0",
                    }}>
                      — {t.parent}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ═══ CONTACT ═══ */}
      <section id="contact" style={{ padding: "80px 0 100px", background: "linear-gradient(180deg, #FAFAF7 0%, #F0EDE6 100%)" }}>
        <div className="container" style={{ maxWidth: 700, margin: "0 auto", padding: "0 32px" }}>
          <FadeIn>
            <div style={{ textAlign: "center", marginBottom: 48 }}>
              <span className="section-label" style={{ background: "#FFF0F0", color: "#FF6B6B" }}>CONTACT</span>
              <h2 className="section-title" style={{ fontFamily: "'Nanum Myeongjo', serif", fontSize: 36, fontWeight: 800, letterSpacing: -0.5 }}>
                상담 신청
              </h2>
              <p style={{ fontSize: 16, color: "#888", marginTop: 12 }}>편하게 연락 주세요. 친절하게 안내드리겠습니다.</p>
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            {/* Phone CTA */}
            <a
              href={`tel:${PHONE.replace(/-/g, "")}`}
              style={{
                display: "flex", alignItems: "center", justifyContent: "center", gap: 16,
                padding: "28px 32px",
                background: "linear-gradient(135deg, #FF6B6B 0%, #ee5a24 100%)",
                borderRadius: 24, marginBottom: 32,
                textDecoration: "none",
                boxShadow: "0 12px 40px rgba(255,107,107,0.25)",
                transition: "all 0.3s",
              }}
            >
              <span style={{ fontSize: 32 }}>📞</span>
              <div>
                <div style={{ color: "rgba(255,255,255,0.8)", fontSize: 13, fontWeight: 500, marginBottom: 4 }}>전화 상담</div>
                <div style={{ color: "white", fontSize: 28, fontWeight: 900, letterSpacing: 1 }}>{PHONE}</div>
              </div>
            </a>

            {/* Form */}
            <div style={{
              background: "white", borderRadius: 24, padding: 36,
              boxShadow: "0 4px 24px rgba(0,0,0,0.04)",
              border: "1px solid rgba(0,0,0,0.04)",
            }}>
              <div style={{ fontSize: 18, fontWeight: 700, marginBottom: 24, textAlign: "center" }}>💬 온라인 상담 신청</div>

              {formSent ? (
                <div style={{ textAlign: "center", padding: "40px 0" }}>
                  <div style={{ fontSize: 48, marginBottom: 16 }}>✅</div>
                  <div style={{ fontSize: 18, fontWeight: 700, color: "#4ECDC4" }}>신청이 완료되었습니다!</div>
                  <div style={{ fontSize: 14, color: "#888", marginTop: 8 }}>빠른 시간 내에 연락드리겠습니다.</div>
                </div>
              ) : (
                <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
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
                    style={{ color: formData.grade ? "#1a1a2e" : "#aaa" }}
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
                    style={{ resize: "vertical" }}
                  />
                  <button
                    className="cta-btn"
                    onClick={handleSubmit}
                    style={{ width: "100%", justifyContent: "center", fontSize: 16, marginTop: 4 }}
                  >
                    상담 신청하기
                  </button>
                </div>
              )}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ═══ FOOTER ═══ */}
      <footer style={{
        background: "#1a1a2e", color: "rgba(255,255,255,0.5)",
        padding: "48px 32px",
      }}>
        <div style={{ maxWidth: 1000, margin: "0 auto", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 32 }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
              <div style={{
                width: 36, height: 36, borderRadius: 10,
                background: "linear-gradient(135deg, #FF6B6B, #ee5a24)",
                display: "flex", alignItems: "center", justifyContent: "center",
                color: "white", fontWeight: 900, fontSize: 16,
                fontFamily: "'Nanum Myeongjo', serif",
              }}>배</div>
              <span style={{ fontSize: 16, fontWeight: 700, color: "rgba(255,255,255,0.8)" }}>일품배쌤수학</span>
            </div>
            <div style={{ fontSize: 13, lineHeight: 2 }}>
              📍 경상북도 경주시 황성로28번길 6<br />
              📞 {PHONE}<br />
              🕐 평일 · 주말 수업 운영<br />
              📋 신고 제2037-7호
            </div>
          </div>

          <div>
            <div style={{ fontSize: 13, fontWeight: 600, color: "rgba(255,255,255,0.7)", marginBottom: 12 }}>바로가기</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8, fontSize: 13 }}>
              {SECTIONS.map((s) => (
                <button
                  key={s.id}
                  onClick={() => scrollTo(s.id)}
                  style={{
                    background: "none", border: "none",
                    color: "rgba(255,255,255,0.4)", cursor: "pointer",
                    textAlign: "left", padding: 0, fontSize: 13,
                    fontFamily: "inherit",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => (e.target.style.color = "rgba(255,255,255,0.8)")}
                  onMouseLeave={(e) => (e.target.style.color = "rgba(255,255,255,0.4)")}
                >
                  {s.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <div style={{ fontSize: 13, fontWeight: 600, color: "rgba(255,255,255,0.7)", marginBottom: 12 }}>블로그</div>
            <div style={{ fontSize: 13 }}>
              <a
                href="https://blog.naver.com/kimchi295"
                target="_blank"
                rel="noreferrer"
                style={{ color: "rgba(255,255,255,0.4)", textDecoration: "none", transition: "color 0.2s" }}
                onMouseEnter={(e) => (e.target.style.color = "#4ECDC4")}
                onMouseLeave={(e) => (e.target.style.color = "rgba(255,255,255,0.4)")}
              >
                네이버 블로그 →
              </a>
            </div>
          </div>
        </div>

        <div style={{
          maxWidth: 1000, margin: "24px auto 0",
          display: "flex", flexWrap: "wrap", gap: 6, justifyContent: "center",
        }}>
          {SEO_TAGS.map((tag, i) => (
            <span key={i} style={{
              fontSize: 11, padding: "3px 10px", borderRadius: 20,
              background: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.35)",
            }}>#{tag}</span>
          ))}
        </div>

        <div style={{
          maxWidth: 1000, margin: "32px auto 0",
          paddingTop: 24, borderTop: "1px solid rgba(255,255,255,0.06)",
          fontSize: 12, textAlign: "center", color: "rgba(255,255,255,0.25)",
        }}>
          © 2025 일품배쌤수학. All rights reserved.
        </div>
      </footer>

      {/* ═══ FLOATING CTA (Mobile) ═══ */}
      <a
        href={`tel:${PHONE.replace(/-/g, "")}`}
        style={{
          position: "fixed", bottom: 24, right: 24,
          width: 60, height: 60, borderRadius: "50%",
          background: "linear-gradient(135deg, #FF6B6B, #ee5a24)",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 28, color: "white",
          boxShadow: "0 8px 30px rgba(255,107,107,0.4)",
          zIndex: 90,
          transition: "transform 0.3s",
          textDecoration: "none",
          opacity: scrollY > 400 ? 1 : 0,
          pointerEvents: scrollY > 400 ? "auto" : "none",
        }}
      >
        📞
      </a>
    </div>
  );
}
