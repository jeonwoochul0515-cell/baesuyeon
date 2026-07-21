# SEO/GEO/AEO 최적화 체크리스트

## A. 기술 토대
- [x] robots.txt — 검색봇 + Yeti + AI 검색봇 명시 허용
- [x] sitemap.xml — lastmod 최신화(2026-06-23)
- [x] llms.txt 추가

## B. 메타 / 구조화 데이터 (index.html)
- [x] og:image 추가 (1200×630 생성)
- [x] twitter:card → summary_large_image, twitter:image 추가
- [x] og:image:width/height/alt
- [x] sameAs에 인스타그램 추가
- [x] alternateName 중복 제거
- [x] aggregateRating ↔ 화면 후기 정합 확인 (3건 정합, 유지)

## C. 프리렌더 (SPA → 정적 본문)
- [x] vite-react-ssg 도입 (single-page)
- [x] main.tsx 엔트리 변경
- [x] build 스크립트 변경
- [x] dist/index.html 본문에 실제 텍스트 출력 확인
- [x] SSR-unsafe 코드 점검(이상 없음)
- [x] noscript 폴백 제거(프리렌더로 중복)

## D. 성능
- [x] teacher.png 7.9MB → teacher.webp 72KB
- [x] img width/height/loading=lazy/decoding=async
- [x] 미사용 teacher.png 삭제

## E. 검증
- [x] npm run build 성공
- [x] dist 산출물에 본문 HTML 포함 확인 (h1 1개)
- [x] npm run lint 통과

## 후속 (배포 후, 사용자)
- [ ] 네이버 Search Advisor·구글 GSC 사이트맵 재제출 + 수집요청
- [ ] (선택) hero h1 키워드 보강 협의

---

## 2026-07-21 재최적화 (채점 83.3 → 100, 목표 95 달성)
- [x] sitemap lastmod 최신화(2026-07-21)
- [x] keywords 중복 제거·24개로 정리
- [x] h1 브랜드·지역 키워드 보강
- [x] FAQ 4→7문항 확장(화면↔JSON-LD 동기화)
- [x] 화면 FAQ 질문형 h3 헤딩
- [x] 구조화 데이터: WebPage/Person/Course+Offer/HowTo/Review 추가
- [x] build·lint 통과, 6축 전부 100점
