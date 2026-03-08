import type { Program } from '../types';

export const PROGRAMS: Program[] = [
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
    desc: "1:1 개별 맞춤수업",
    price: "월 30만원",
    details: [
      "1:1 개별 맞춤수업",
      "개인에 맞는 교재 선정",
      "주말테스트를 통한 완벽복습",
      "기출기반의 내신대비",
    ],
    schedule: "월,수,금 18시~21시",
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
