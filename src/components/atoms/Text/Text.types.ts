import type React from 'react';

export type TextVariant = 'body' | 'caption' | 'label' | 'heading1' | 'heading2';

export interface TextProps {
  variant?: TextVariant;
  children: React.ReactNode;
  // Text 컴포넌트에 as prop을 사용하면 어떤 HTML 태그로든 렌더링 가능, 'div' | 'span' | 'h1' 등 , 접근성(A11y)과 SEO , 스타일 재사용
  as?: React.ElementType
  className?: string;
}
