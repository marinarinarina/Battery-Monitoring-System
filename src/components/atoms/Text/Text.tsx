'use client';

import { StyledText } from './Text.styles';
import type { TextProps } from './Text.types';

export const Text = ({ variant = 'body', color, children, as, className }: TextProps) => {
  return (
    <StyledText as={as} variant={variant} color={color} className={className}>
      {children}
    </StyledText>
  );
};
