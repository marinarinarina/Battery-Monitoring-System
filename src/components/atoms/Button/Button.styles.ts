import styled, { css } from 'styled-components';
import type { ButtonProps } from './Button.types';

const variantStyles = {
  primary: css`
    background-color: ${({ theme }) => theme.colors.primary};
    color: white;
    border: none;

    &:hover:not(:disabled) {
      background-color: #005fcc;
    }
  `,
  secondary: css`
    background-color: ${({ theme }) => theme.colors.secondary};
    color: white;
    border: none;

    &:hover:not(:disabled) {
      background-color: #4a5568;
    }
  `,
  critical: css`
    background-color: ${({ theme }) => theme.colors.critical};
    color: white;
    border: none;

    &:hover:not(:disabled) {
      background-color: #cc3333;
    }
  `,
  disabled: css`
    background-color: ${({ theme }) => theme.colors.disabled};
    color: #999;
    cursor: not-allowed;
    border: none;
  `,
  custom: css<{ color?: string; textColor?: string; hoverColor?: string }>`
    background-color: ${({ color }) => color ?? 'gray'};
    color: ${({ textColor }) => textColor ?? 'white'};
    border: none;
    
    &:hover:not(:disabled) {
      background-color: ${({ hoverColor, color }) => hoverColor ?? color ?? 'gray'};
      color: ${({ textColor }) => textColor ?? 'gray'};
    }
  `,
};

const sizeStyles = {
  small: css`
    padding: 6px 12px;
    font-size: ${({ theme }) => theme.font.size.caption};
  `,
  medium: css`
    padding: 10px 20px;
    font-size: ${({ theme }) => theme.font.size.body};
  `,
  large: css`
    padding: 14px 28px;
    font-size: ${({ theme }) => theme.font.size.h2};
  `,
};

export const StyledButton = styled.button<ButtonProps>`
  border-radius: ${({ theme }) => theme.radius.button}px;
  font-family: ${({ theme }) => theme.font.family};
  font-weight: ${({ theme }) => theme.font.weight.medium};
  cursor: pointer;
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};
  transition: background-color 0.3s ease;
  user-select: none;

  ${({ variant = 'primary' }) => variantStyles[variant]};
  ${({ size = 'medium' }) => sizeStyles[size]};

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
    outline-offset: 2px;
  }
`;
