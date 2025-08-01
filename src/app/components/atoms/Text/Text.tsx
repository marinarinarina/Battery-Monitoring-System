import { StyledText } from './Text.styles';
import type { TextProps } from './Text.types';

export const Text = ({ variant = 'body', children, as, className }: TextProps) => {
  return (
    <StyledText as={as} variant={variant} className={className}>
      {children}
    </StyledText>
  );
};
