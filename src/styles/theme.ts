// 디자인 토큰 기반 테마 객체 정의
export const theme = {
  colors: {
    // 핵심 색상
    primary: '#0075FF',        // 정보 강조용 (버튼 등)
    secondary: '#5A6B7B',      // 보조 텍스트, 중립 버튼 등
    accent: '#00C896',         // 완료/긍정 상태

    // 경고/위험
    warning: '#FFAD00',
    danger: '#FF4444',

    // 배경 및 텍스트
    background: '#F9FAFB',
    backgroundDark: '#1C1C1E',
    cardDark: '#2A2A2E',
    border: '#E0E0E0',

    textPrimary: '#111111',
    textSecondary: '#666666',
    disabled: '#CCCCCC',
  },

  font: {
    family: `'Noto Sans KR', sans-serif`,
    size: {
      h1: '24px',
      h2: '20px',
      body: '16px',
      caption: '12px',
    },
    lineHeight: {
      h1: '32px',
      h2: '28px',
      body: '24px',
      caption: '16px',
    },
    letterSpacing: {
      default: '0.2px',
      tight: '-0.4px',
    },
  },

  spacing: {
    unit: 8,
    sectionPadding: 24,
    cardPadding: {
      desktop: 16,
      mobile: 12,
    },
    buttonHeight: {
      default: 40,
      small: 32,
    },
    inputPadding: '12px 16px',
    sectionGap: 32,
  },

  radius: {
    button: 8,
    input: 6,
  },

  shadow: {
    card: '0px 2px 8px rgba(0,0,0,0.05)',
  },
};
