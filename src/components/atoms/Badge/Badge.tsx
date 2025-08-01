import type { BadgeProps } from './Badge.types';
import { StyledBadge } from './Badge.styles';

export const Badge = ({ variant = 'normal', children }: BadgeProps) => {
  return <StyledBadge variant={variant}>{children}</StyledBadge>;
};
