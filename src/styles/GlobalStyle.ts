// 전역 스타일 정의
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    width: 100%;
    font-family: ${({ theme }) => theme.font.family};
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.textPrimary};
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
  }

  button, input, textarea {
    font-family: inherit;
    color: inherit;
    background: none;
    border: none;
    outline: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  img, video {
    max-width: 100%;
    display: block;
  }
`;