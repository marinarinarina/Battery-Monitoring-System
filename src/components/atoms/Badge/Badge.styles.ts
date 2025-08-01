import styled, { css } from 'styled-components';
import type { BadgeProps } from './Badge.types';

const variantStyles = {
  normal: css`
    background-color: ${({ theme }) => theme.colors.accent};
    color: white;
  `,
  warning: css`
    background-color: ${({ theme }) => theme.colors.warning};
    color: black;
  `,
  critical: css`
    background-color: ${({ theme }) => theme.colors.critical};
    color: white;
  `,
};

export const StyledBadge = styled.span<Pick<BadgeProps, 'variant'>>`
  display: inline-block;
  padding: 4px 12px;
  border-radius: 9999px;
  font-size: ${({ theme }) => theme.font.size.caption};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  ${({ variant = 'normal' }) => variantStyles[variant]};
  user-select: none;
`;
