# SEO/GEO/AEO 최적화 — 작업 노트

작업일: 2026-06-23

## 결정 사항 및 근거

### 1. 프리렌더 도입 (vite-react-ssg, single-page)
- **왜**: 기존엔 본문이 JS로만 렌더링되고 정적 HTML엔 noscript 폴백만 존재. AI 크롤러(대부분 JS 미실행)와 1차 색인에 본문이 안 보임.
- **방식**: `vite-react-ssg/single-page` 엔트리로 전환. App이 단일 라우트라 라우터 없이 적용. `main.tsx`가 `createRoot`를 export, build 스크립트는 `vite-react-ssg build`.
- **SSR 안전성**: App의 모든 window/document 접근은 useEffect·핸들러 내부라 SSR 안전. 확인 완료.
- **결과**: dist/index.html 9.5KB→61KB, 본문 텍스트(배수연·후기·프로그램 등) 정적 출력 확인.
- **noscript 제거**: 프리렌더가 실제 본문을 정적 HTML에 넣으므로 noscript는 중복(+h1 중복 유발)이 되어 삭제.

### 2. 이미지 최적화
- teacher.png 7.9MB(1856×2304 RGBA) → **teacher.webp 72KB**(928×1152). ffmpeg libwebp q82. 알파는 실사용 없어 드롭됨.
- AboutSection: src를 .webp로, width/height(928×1152)·loading=lazy·decoding=async 추가(CLS·LCP 개선).
- 원본 teacher.png 삭제(미참조, 배포 용량 절감).

### 3. OG 이미지 생성
- 기존 og:image 없음 → 1200×630 자체 제작(전역 headless to-png로 HTML 렌더, public/og-image.jpg 78KB).
- index.html에 og:image(+width/height/alt), twitter:card=summary_large_image, twitter:image 추가.

### 4. 구조화 데이터/메타 정리
- alternateName 중복("이룸수학" 2회) → ["경주수학학원 이룸수학","황성동수학학원"].
- sameAs에 인스타그램(https://www.instagram.com/iroom_math) 추가.
- aggregateRating(reviewCount 3, 5.0)은 화면 학부모 후기 3건과 정합 → 유지.

### 5. robots.txt / sitemap / llms.txt
- robots.txt: Yeti·Googlebot·bingbot + AI 검색봇(OAI-SearchBot·ChatGPT-User·PerplexityBot·Perplexity-User·Claude-SearchBot·Claude-User·Google-Extended) 명시 허용.
- sitemap lastmod 2026-02-25 → 2026-06-23.
- llms.txt 신규(핵심 정보·실적·내신학교·채널).

### 6. 좌표·우편번호 교정 (실제 주소 기준)
- 기존 35.8562/129.2246/우편 38065는 실제 위치(황성동 용담로104번길)에서 약 1km 오차.
- Nominatim + 우편번호 교차검증 → **35.8666 / 129.2119 / 38082**로 교정. 건물번지는 OSM 미등록이라 도로 중심점 기준.

### 7. 화면 FAQ 섹션 추가 (검증 중 발견한 위반 수정)
- 문제: FAQPage JSON-LD 4문항이 화면엔 전혀 없었음 → 구글 FAQ 정책 + 가이드 "화면 FAQ↔스키마 1:1" 위반.
- 수정: `src/data/faq.ts`(단일 출처) + `FAQSection.tsx`(네이티브 details) 추가, App에 성과→상담 사이 배치.
- 주의: faq.ts와 index.html의 FAQPage JSON-LD는 수동 동기화. faq.ts 수정 시 JSON-LD도 동일하게 맞출 것.
- 검증: dist 본문에 4문항 노출 확인, JSON-LD와 텍스트 일치.

### 8. 블로그 연결 + 최신 글 노출
- 블로그를 kimchi295 → iroommath1(학원 공식, "구 일품배샘수학")로 전 파일 교체.
- `src/data/posts.ts`(RSS 기반 최신 3건) + `BlogSection.tsx` 추가. 정적이라 수동 갱신(파일에 RSS 출처 명시).
- 인스타 @iroom_math는 기존 등록과 동일(QR 확인). "지정 3개 게시물"은 사용자 제공 대기 중.

### 9. 전체 리뉴얼 — "AI 느낌" 제거 (40대 학부모 신뢰형)
- 방향: 깔끔한 모던 화이트 + 딥블루(#2456A6) 단일 포인트. 범위: 전체 시각 개편.
- global.css에 디자인 토큰(:root 변수) 도입, 전 컴포넌트가 var() 참조.
- 제거: 다크 그라데이션 히어로, 떠다니는 수학기호, 그라데이션 텍스트, glow, pulse/shimmer/float 애니메이션, 압박 배지("잔여석"), 이모지 다수, 5색 혼용.
- 색 통일: programs.ts/results.ts의 코랄·퍼플·민트·옐로우 → 블루 계열(+별점만 골드 #C2912F).
- 브랜드색은 유지: 카카오 #FEE500, 네이버 #03C75A, 구글 #4285F4, 인스타 그라데이션.
- 검증: build/lint 통과, 프리뷰 스크린샷으로 hero·program·results 육안 확인.

## 미적용/후속 권장 (사용자 판단 필요)
- **hero h1**이 "우리 아이 수학 성적, 지금이 바꿀 때입니다"(슬로건). SEO상 브랜드·키워드("경주수학학원 이룸수학") 포함 h1이 유리하나 마케팅 카피라 미변경. 필요 시 협의.
- **IndexNow / 수집요청**: 배포 후 네이버 Search Advisor·구글 GSC에 사이트맵 재제출 + 수집요청 권장.
- **GA4/검색콘솔**: 색인·AI 인용 모니터링 루프.

## 검증
- npm run build 성공, npm run lint 통과.
- dist: h1 1개, og:image 4태그, teacher.webp만 참조, 본문 텍스트 정적 출력.

---

## 2026-07-21 재최적화 — 채점 루프 (목표 평균 95)

가이드(NAVER_SEO / SEO·AEO·GEO) 기준 6개 카테고리 자동 채점 스크립트로 기준점 측정 후 부족분 수정.

### 채점 방식
- scratchpad/score.mjs: dist/index.html + public 파일을 읽어 기술토대·메타마크업·구조화데이터·AEO·GEO·EEAT 6축 채점, 평균 산출.
- 기준점 **83.3점** → 수정 후 **100점** (1회차 달성).

### 수정 내역
1. **sitemap.xml** lastmod 2026-06-23 → 2026-07-21 (신선도).
2. **keywords 정리**: index.html·seo.ts 40개(중복 '경주고수학') → 핵심 24개, 중복 제거 (가이드 "키워드 남용 금지").
3. **h1 키워드 보강**: 히어로 h1에 "경주 황성동 중·고등 수학학원 이룸수학" 키워드 라인 추가(슬로건은 유지). 상단 배지는 "반당 최대 5명·20년 경력"으로 변경(중복 회피). ← notes의 미적용 항목 해소.
4. **FAQ 4→7문항**: 소규모 인원·상담 방법·수업 시간 추가. faq.ts ↔ index.html FAQPage JSON-LD 1:1 동기화 유지.
5. **화면 FAQ 질문형 h3**: summary 내 질문을 <h3>로 감싸 AEO 질문형 헤딩 확보.
6. **구조화 데이터 신규 5블록**: WebPage(datePublished/dateModified), Person(배수연), Course(초/중/고 CourseInstance+Offer 수강료), HowTo(4단계 학습 시스템), ItemList+Review(학부모 후기 3건).

### 검증
- npm run build 성공, npm run lint 통과(경고 0).
- dist: h1 1개(키워드 포함), JSON-LD 8블록 전부 파싱 정상, FAQPage 7문항=화면 7문항, HowTo 4스텝, Review 3건.
- 6축 전부 100점, 평균 100.

### 주의(유지보수)
- faq.ts 수정 시 index.html FAQPage JSON-LD도 반드시 동일하게 맞출 것(수동 동기화).
- Course의 Offer 가격(200000/300000/400000)은 programs.ts 수강료와 정합. 요금 변경 시 양쪽 수정.
- 배포 후 네이버 Search Advisor·구글 GSC 사이트맵 재제출 + 수집요청 권장(사용자 작업).

---

## 2026-07-21 히어로 배경 동영상 추가

사용자 요청. 히어로에 "한국 여학생이 수학(도형) 공부하는" 배경 영상.

### 제작
- higgsfield: soul_2로 정지 이미지 2장 생성(도형 문제집·삼각자·파란 조끼 교복) → 2안 선택 → kling3_0_turbo(image-to-video, 16:9, 1080p, 5s)로 애니메이션(펜 필기 미세 동작).
- ffmpeg 후처리: 720p·무음·부메랑(정방향+역방향)으로 이음새 없는 루프 → **mp4 395KB / webm 330KB**(원본 6.87MB). 포스터 webp 41KB.
- 산출물: public/hero-loop.mp4, hero-loop.webm, hero-poster.webp.

### 구현
- HeroSection: <video autoPlay muted loop playsInline preload=metadata poster> + webm/mp4 소스, 그 위 .hero-overlay(딥네이비 그라데이션), 텍스트 흰색 계열로 전환(textShadow).
- global.css .hero-section 배경 #0F1E3C, .hero-video(object-fit cover, object-position 65%, transform scale1.08, **filter blur(3px) brightness .92**), .hero-overlay 2중 그라데이션. prefers-reduced-motion 시 영상 숨김.

### AI 가짜 텍스트 처리 (사용자 지적)
- soul_2가 이미지 좌측 여백에 판독 불가 가짜 한글/글자를 넣음. 배경 영상 전체 blur(3px)로 **가짜 한글 + 책 글자 모두 흐릿 처리**해 판독 불가. 브라우저 확대로 검증 완료.

### 검증/영향
- build·lint 통과. SEO 재채점 여전히 평균 100(영상은 배경, h1 키워드·구조화데이터 그대로 유지).
- 성능: 배경 영상은 preload=metadata + poster(41KB)라 LCP는 포스터가 담당. 총 영상 <400KB로 경량. prefers-reduced-motion 대응.
- 디자인: 기존 라이트 화이트 히어로 → 딥네이비 영상 히어로로 변경(다른 섹션은 라이트 유지). 되돌리려면 HeroSection의 video/overlay 제거 + 텍스트색 var(--ink)/(--text)로 환원, .hero-section 배경 복구.
