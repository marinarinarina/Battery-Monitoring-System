import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const Label = styled.label`
  font-size: ${({ theme }) => theme.font.size.caption};
  color: ${({ theme }) => theme.colors.textSecondary};
`;

export const StyledInput = styled.input<{ error?: boolean }>`
  padding: ${({ theme }) => theme.spacing.inputVertical}px ${({ theme }) => theme.spacing.inputHorizontal}px;
  font-size: ${({ theme }) => theme.font.size.body};
  border: 1.5px solid
    ${({ theme, error }) => (error ? theme.colors.critical : theme.colors.border)};
  border-radius: ${({ theme }) => theme.radius.input}px;
  outline: none;
  transition: border-color 0.3s ease;

  &:focus-visible {
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.primary}44;
  }
`;

export const ErrorMessage = styled.span`
  font-size: ${({ theme }) => theme.font.size.caption};
  color: ${({ theme }) => theme.colors.critical};
  min-height: 18px; /* 최소 높이 레이아웃으로 깨짐 방지 */
`;
