export interface Program {
  grade: string;
  badge: string;
  color: string;
  icon: string;
  desc: string;
  price: string;
  details: string[];
  schedule?: string;
}

export interface Strength {
  num: string;
  unit: string;
  label: string;
  sub: string;
}

export interface ExamPrepItem {
  icon: string;
  title: string;
  desc: string;
}

export interface GradeImprovement {
  name: string;
  grade: string;
  school: string;
  before: string;
  after: string;
  period: string;
  color: string;
  quote: string;
}

export interface UniversityResult {
  name: string;
  univ: string;
  dept: string;
  type: string;
  emoji: string;
  color: string;
}

export interface Testimonial {
  text: string;
  parent: string;
  stars: number;
}

export interface NavSection {
  id: string;
  label: string;
}
