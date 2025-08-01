import type { ButtonProps } from './Button.types';
import { StyledButton } from './Button.styles';

export const Button = ({
  variant = 'primary',
  size = 'medium',
  fullWidth = false,
  children,
  ...rest
}: ButtonProps) => {
  return (
    <StyledButton variant={variant} size={size} fullWidth={fullWidth} {...rest}>
      {children}
    </StyledButton>
  );
};
