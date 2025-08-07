import type React from 'react';

export type TextVariant = 'body' | 'caption' | 'label' | 'heading1' | 'heading2';

export interface TextProps {
  variant?: TextVariant;
  color?: string;
  children: React.ReactNode;
  as?: React.ElementType;
  className?: string;
}
