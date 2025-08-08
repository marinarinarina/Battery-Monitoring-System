# 📌 Cloud-based Lithium-ion Battery Process Monitoring UI/UX System

## 📖 프로젝트 개요
이 프로젝트는 **리튬이온 배터리 생산 공정**에서 센서 데이터와 영상 정보를 기반으로 이상 상태(경고/위험)를 직관적으로 모니터링할 수 있는 **웹 UI/UX 시스템**입니다.  

UI/UX 엔지니어링 관점에서, **아토믹 디자인 패턴**을 적용하여 재사용성과 유지보수성을 높였고, **Storybook**을 통해 개발자가 아니더라도 기획·디자인·QA 등 모든 실무자가 실제 UI를 테스트하고 피드백할 수 있는 백오피스 환경을 구축했습니다.

---

## 🚀 주요 기능 (개발 완료된 기능)
- **아토믹 디자인 패턴 기반 UI 설계**
  - Atom → Molecule → Organism → Template → Page 구조 적용
  - 전역 디자인 토큰(theme.ts)과 GlobalStyle로 일관된 스타일 유지
- **모니터링 대시보드**
  - Faker.js를 사용해 랜덤 센서 데이터/영상 데이터 생성
  - 공정 위치별 센서값(진동, 소음, 발열, 셀 온도)과 상태(정상/경고/위험) 시각화
  - 경고·위험 상태를 색상과 아이콘으로 직관적으로 표시
- **영상 카드(VideoCard)**
  - 각 공정별 CCTV 영상 미리보기
  - 반응형(모바일/데스크탑) 지원
- **사이드바 & 헤더 UI**
  - 모바일/데스크탑 반응형 토글 메뉴
  - 현재 활성 메뉴 표시(active state)
  - 다크/라이트 모드 토글
- **레이아웃**
  - Grid Layout을 적용해 Header, Sidebar, MainContent 영역 구조화
  - 모바일 환경에서 Sidebar 슬라이드 애니메이션 적용
- **Storybook 기반 UI 테스트**
  - 각 컴포넌트별 독립 테스트 가능
  - Storybook에서 상태 변경·테마 변경·반응형 확인 지원
  - Router Mock 적용으로 라우팅 환경 UI 테스트 가능

---

## 🛠 사용 기술 및 도구
**Frontend:** Next.js 15, React 19, TypeScript, Styled-components  
**UI 패턴:** Atomic Design Pattern  
**상태 관리:** React Hooks (useState, useEffect 등)  
**테스트/미리보기:** Storybook 9 (@storybook/nextjs-vite), next-router-mock  
**데이터 생성:** Faker.js  
**배포:** Vercel(프로젝트), Chromatic(Storybook)  
**기타:** ESLint, Prettier, GitHub

---

## 📂 폴더 구조(요약)
```
src
┣ app
┃ ┣ monitor
┃ ┣ dashboard
┃ ┣ logs
┃ ┣ settings
┃ ┣ login
┃ ┗ layout.tsx
┣ components
┃ ┣ atoms
┃ ┣ molecules
┃ ┣ organisms
┃ ┣ templates
┃ ┣ pages
┃ ┗ providers
┣ styles
┗ utils
```

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
