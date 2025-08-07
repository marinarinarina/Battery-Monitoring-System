export const theme = {
  colors: {
    // 핵심 색상
    primary: '#0075FF',        // 정보 강조용 (버튼 등)
    secondary: '#5A6B7B',      // 보조 텍스트, 중립 버튼 등
    accent: '#00C896',         // 완료/긍정 상태

    // 경고/위험
    warning: '#FFAD00',
    critical: '#FF4444',

    // 배경 및 텍스트
    background: '#ebebebff',
    backgroundDark: '#1F2937', // 다크 모드 배경
    border: '#b9b9b9ff',
    textPrimary: '#111111',
    textSecondary: '#636363ff', // BFCBCE, 6F90AF
    disabled: '#bcbcbcff',

    switchThumb: '#FFFFFF', // 스위치 썸네일 색상
    header: '#0075FF',
    card: '#FFFFFF',
    sidebar: '#FFFFFF',
    videoBox: '#000000', // 비디오 박스 배경색
    sidebarHover: '#ddefffff',
  },

  sizes: {
    switchWidth: '48px',
    switchHeight: '28px',
  },

  font: {
    family: `'Noto Sans KR', sans-serif`,
    size: {
      h1: '24px', // 페이지, 섹션 제목
      h2: '20px', // 하위 제목, 카드 타이틀
      body: '16px',
      label: '14px', // 폼 레이블, 버튼 텍스트
      caption: '12px',  // 이미지 캡션, 부가 설명, 보조 텍스트
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
    weight: {
      light: 300,
      regular: 400,
      medium: 500,
      bold: 700,
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
    selectPaddingRight: {
      desktop: 40,
      mobile: 30,
    },
    cardPadding: {
      desktop: 16,
      mobile: 12,
    },
    buttonHeight: {
      default: 40,
      small: 32,
    },
    inputVertical: {
      desktop: 12,
      mobile: 10,
    },
    inputHorizontal: {
      desktop: 16,
      mobile: 14,
    },

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
    sidebar: 50,
    header: 60,
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
    
    header: '#30343aff',
    card: '#293445ff',
    sidebar: '#25344dff',
    sidebarHover: '#3a4964ff',
   },
};
