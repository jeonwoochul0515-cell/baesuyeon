// 빌드타임 프리렌더(vite-react-ssg)로 본문을 정적 HTML로 출력하는 단일 페이지 엔트리
import { StrictMode } from 'react';
import { ViteReactSSG } from 'vite-react-ssg/single-page';
import './styles/global.css';
import App from './App';

export const createRoot = ViteReactSSG(
  <StrictMode>
    <App />
  </StrictMode>,
);
