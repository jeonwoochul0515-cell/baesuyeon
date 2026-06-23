// 네이버 블로그(iroommath1) 최신 글을 사이트에 노출하기 위한 데이터
// ※ 정적 사이트라 자동 갱신되지 않음. 새 글 발행 시 이 배열을 최신 3건으로 갱신할 것.
//    출처 RSS: https://rss.blog.naver.com/iroommath1.xml
export interface BlogPost {
  title: string;
  url: string;
  date: string; // 표시용 YYYY.MM.DD
  category: string;
  excerpt: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    title: "고2 수학 대수 시험 완전 정복 — 지수·로그·삼각함수 핵심 총정리",
    url: "https://blog.naver.com/iroommath1/224263876879",
    date: "2026.04.24",
    category: "수업·커리큘럼",
    excerpt: "수능까지 이어지는 고2 대수 파트. 지수·로그와 삼각함수의 출제 포인트와 효율적인 학습법을 단원별로 정리했습니다.",
  },
  {
    title: "지금부터라도 충분해요 — 고1 첫 중간고사, 이것만 꼭 잡고 가세요",
    url: "https://blog.naver.com/iroommath1/224261649044",
    date: "2026.04.22",
    category: "수업·커리큘럼",
    excerpt: "다항식의 연산과 복소수 등 고1 첫 중간고사 핵심 단원을 짚어, 지금 시작해도 충분한 대비 전략을 안내합니다.",
  },
  {
    title: "중3 수학 1·2단원 시험대비 완벽 정리",
    url: "https://blog.naver.com/iroommath1/224258936323",
    date: "2026.04.20",
    category: "수업·커리큘럼",
    excerpt: "제곱근과 실수부터 인수분해 활용까지, 경주 지역 학교별로 꼭 잡아야 할 중3 첫 시험 핵심만 골라 정리했습니다.",
  },
];
