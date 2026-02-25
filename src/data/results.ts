import type { GradeImprovement, UniversityResult, Testimonial } from '../types';

export const GRADE_IMPROVEMENTS: GradeImprovement[] = [
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
    quote: "3년 내내 이룸수학 시스템으로 전남대·원광대 의대 동시 합격!",
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
];

export const UNIVERSITY_RESULTS: UniversityResult[] = [
  { name: "김○웅", univ: "서울대학교", dept: "경제학부", type: "3년 수강 · 수시", emoji: "🏛️", color: "#FF6B6B" },
  { name: "세○", univ: "서울대학교", dept: "합격", type: "학부모 감사편지", emoji: "🎓", color: "#FF8C42" },
  { name: "이○○", univ: "전남대 · 원광대", dept: "의과대학 2관왕", type: "3년 수강 · 수시", emoji: "🏥", color: "#4ECDC4" },
  { name: "○○○", univ: "성균관대학교", dept: "어문계열", type: "수시 합격", emoji: "📚", color: "#6C5CE7" },
  { name: "○○○", univ: "UNIST", dept: "이공계열", type: "동시 합격", emoji: "🔬", color: "#FFD93D" },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    text: "선생님은 든든한 버팀목이 되어주셨습니다. 선생님의 가르침 덕분에 아이의 고교 시절이 빛나는 결실로 마무리될 수 있었습니다. 서울대 합격이라는 결실을 맺게 해주셔서 진심으로 감사합니다.",
    parent: "서울대 합격생 세○ 어머니",
    stars: 5,
  },
  {
    text: "3년 내내 이룸수학만 믿고 다녔더니 전남대, 원광대 의대에 동시 합격했어요. 소규모라 아이 하나하나 꼼꼼히 봐주시고, 내신 기출 분석이 정말 정확했습니다.",
    parent: "문화고 의대 2관왕 이○○ 학부모",
    stars: 5,
  },
  {
    text: "경주고에서 김○웅이가 3년간 배쌤과 함께 성장해서 서울대 경제학부에 합격했습니다. 개념부터 수능까지 체계적인 내신·수능 학습 시스템 덕분입니다.",
    parent: "경주고 서울대 합격생 학부모",
    stars: 5,
  },
];
