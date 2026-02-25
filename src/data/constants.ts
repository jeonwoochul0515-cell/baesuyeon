export const PHONE = "010-4812-6947";
export const ADDRESS = "경상북도 경주시 황성로28번길 6";
export const BLOG_URL = "https://blog.naver.com/kimchi295";
export const REGISTRATION = "신고 제2037-7호";

export const SECTIONS = [
  { id: "home", label: "홈" },
  { id: "about", label: "소개" },
  { id: "program", label: "프로그램" },
  { id: "system", label: "학습시스템" },
  { id: "results", label: "성과" },
  { id: "contact", label: "상담신청" },
] as const;

export const TARGET_SCHOOLS = [
  "경주고", "문화고", "계림고", "경주여고",
  "근화여고", "선덕여고", "황성중", "선덕여중"
];

export const SYSTEM_TAGS = [
  "주차별 개념 시스템",
  "서술형·내신 실전 대비",
  "개별 실수 추적 관리",
  "수능형 사고력 강화",
  "정규+심화+클리닉 체제",
  "1:1 피드백"
];

export const STRENGTHS = [
  { num: "20", unit: "년", label: "수학 전문 경력", sub: "경주 지역 전문" },
  { num: "4", unit: "명", label: "최대 수업 인원", sub: "소규모 그룹 수업" },
  { num: "1:1", unit: "", label: "맞춤형 지도", sub: "개인별 수준 맞춤" },
];

export const EXAM_PREP = [
  { icon: "🔄", title: "유형 반복", desc: "내신 출제 포인트 중심\n유형 반복 훈련" },
  { icon: "📚", title: "부교재 정복", desc: "학교별 부교재·프린트\n완전 정복" },
  { icon: "📝", title: "실전 풀이", desc: "기출·유사문제\n실전 풀이" },
  { icon: "📒", title: "정리 노트", desc: "나만의 정리 노트\n제작 지도" },
];
