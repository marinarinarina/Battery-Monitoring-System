import styled, { css } from 'styled-components';
import type { TextVariant } from './Text.types';

const variantStyles = {
  heading1: css`
    font-size: ${({ theme }) => theme.font.size.h1};
    line-height: ${({ theme }) => theme.font.lineHeight.h1};
    font-weight: ${({ theme }) => theme.font.weight.bold};
  `,
  heading2: css`
    font-size: ${({ theme }) => theme.font.size.h2};
    line-height: ${({ theme }) => theme.font.lineHeight.h2};
    font-weight: ${({ theme }) => theme.font.weight.medium};
  `,
  body: css`
    font-size: ${({ theme }) => theme.font.size.body};
    line-height: ${({ theme }) => theme.font.lineHeight.body};
    font-weight: ${({ theme }) => theme.font.weight.regular};
  `,
  caption: css`
    font-size: ${({ theme }) => theme.font.size.caption};
    line-height: ${({ theme }) => theme.font.lineHeight.caption};
    font-weight: ${({ theme }) => theme.font.weight.light};
  `,
  label: css`
    font-size: ${({ theme }) => theme.font.size.caption};
    line-height: ${({ theme }) => theme.font.lineHeight.caption};
    font-weight: ${({ theme }) => theme.font.weight.medium};
  `,
};

export const StyledText = styled.span<{ variant?: TextVariant }>`
  color: ${({ theme }) => theme.colors.textPrimary};
  ${({ variant = 'body' }) => variantStyles[variant]};
`;
