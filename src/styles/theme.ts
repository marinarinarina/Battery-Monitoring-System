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
    backgroundDark: '#1F2937', // 다크 모드 배경
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
  // 반응형 대응
  breakpoints: {
    mobile: 0,
    tablet: 769,
    desktop: 1024,
  },

  layout: {
    headerHeight: {
      desktop: 64,
      mobile: 48,
    },
    footerHeight: {
      desktop: 56,
      mobile: 48,
    },
    sidePadding: {
      desktop: 32,
      mobile: 16,
    },
    maxWidth: 1200, // 데스크탑 컨테이너 최대폭
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
    card: 12,
  },

  shadow: {
    card: '0px 2px 8px rgba(0,0,0,0.05)',
    tooltip: '0px 4px 12px rgba(0, 0, 0, 0.1)',
  },

  zIndex: {
    base: 0,
    dropdown: 10,
    tooltip: 20,
    modal: 30,
    toast: 40,
  },

  transition: {
    fast: '150ms ease-in-out',
    medium: '300ms ease',
    slow: '500ms ease-out',
  },
};

export const themeDark = {
  ...theme,
  colors: { 
    ...theme.colors,
    background: '#1F2937',
    textPrimary: '#F9FAFB',
    textSecondary: '#D1D5DB',
    border: '#374151',
    disabled: '#4B5563',  
   },
};
