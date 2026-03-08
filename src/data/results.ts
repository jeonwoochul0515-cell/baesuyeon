import type { GradeImprovement, UniversityResult, Testimonial } from '../types';

export const GRADE_IMPROVEMENTS: GradeImprovement[] = [
  {
    name: "김○웅",
    grade: "고3",
    school: "경주고",
    before: "중위권",
    after: "서울대·고려대",
    period: "3년 수강",
    color: "#FF6B6B",
    quote: "3년간 내신·수능 학습 시스템의 힘으로 서울대·고려대에 동시 합격했습니다",
  },
  {
    name: "이○○",
    grade: "고3",
    school: "문화고",
    before: "의대 목표",
    after: "의대 3관왕",
    period: "3년 수강",
    color: "#6C5CE7",
    quote: "3년 내내 이룸수학 시스템으로 전남대·원광대·조선대 의대 동시 합격!",
  },
  {
    name: "○○○",
    grade: "고3",
    school: "경주 지역",
    before: "이공계 목표",
    after: "GIST 합격",
    period: "꾸준 수강",
    color: "#4ECDC4",
    quote: "성균관대 어문계열과 GIST에 동시 합격! 배쌤이 만든 또 하나의 기적",
  },
  {
    name: "경주고 학생",
    grade: "고등부",
    school: "경주고",
    before: "40점",
    after: "50점 향상",
    period: "단기 향상",
    color: "#FFD93D",
    quote: "수학 성적 40점에서 50점 향상! 체계적 기출 분석과 유형 반복의 결과입니다",
  },
];

export const UNIVERSITY_RESULTS: UniversityResult[] = [
  { name: "김○웅", univ: "서울대 · 고려대", dept: "경제학부", type: "3년 수강 · 수시", emoji: "🏛️", color: "#FF6B6B" },
  { name: "이○○", univ: "전남대 · 원광대 · 조선대", dept: "의과대학 3관왕", type: "3년 수강 · 수시", emoji: "🏥", color: "#4ECDC4" },
  { name: "○○○", univ: "성균관대학교", dept: "어문계열", type: "수시 합격", emoji: "📚", color: "#6C5CE7" },
  { name: "○○○", univ: "GIST", dept: "이공계열", type: "동시 합격", emoji: "🔬", color: "#FFD93D" },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    text: "3년 동안 선생님만 믿고 맡겼는데 서울대, 고려대 동시 합격이라는 결과를 받아 정말 감사합니다. 소규모 수업이라 아이 하나하나 세심하게 봐주시고, 내신부터 수능까지 체계적으로 이끌어주셨습니다.",
    parent: "경주고 서울대·고려대 합격생 김○웅 어머니",
    stars: 5,
  },
  {
    text: "3년 내내 이룸수학만 믿고 다녔더니 전남대, 원광대, 조선대 의대에 동시 합격했어요. 소규모라 아이 하나하나 꼼꼼히 봐주시고, 내신 기출 분석이 정말 정확했습니다.",
    parent: "문화고 의대 3관왕 이○○ 학부모",
    stars: 5,
  },
  {
    text: "중학교 때부터 수학을 어려워했는데, 선생님의 1:1 맞춤 지도 덕분에 자신감이 많이 붙었어요. 성적도 꾸준히 올라서 이제는 수학을 좋아하게 되었습니다.",
    parent: "계림중 학부모 박○영",
    stars: 5,
  },
];
