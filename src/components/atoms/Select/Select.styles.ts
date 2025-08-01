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

export const StyledSelect = styled.select<{ error?: boolean }>`
  color: ${({ theme }) => theme.colors.textPrimary};
  padding: ${({ theme }) => theme.spacing.inputVertical}px ${({ theme }) => theme.spacing.inputHorizontal}px;
  padding-right: ${({ theme }) => theme.spacing.selectPaddingRight.desktop}px;
  font-size: ${({ theme }) => theme.font.size.label};
  border: 1.5px solid
    ${({ theme, error }) => (error ? theme.colors.critical : theme.colors.border)};
  border-radius: ${({ theme }) => theme.radius.input}px;
  outline: none;
  appearance: none;
  background-color: ${({ theme }) => theme.colors.background};
  background-image: url("data:image/svg+xml;charset=US-ASCII,%3csvg width='14' height='8' viewBox='0 0 14 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M1 1L7 7L13 1' stroke='%23666' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 12px center;
  background-size: 14px 8px;
  transition: border-color 0.3s ease;
  option {
    color: ${({ theme }) => theme.colors.textPrimary};
  }

  &:focus-visible {
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.primary}44;
  }
`;

export const ErrorMessage = styled.span`
  font-size: ${({ theme }) => theme.font.size.caption};
  color: ${({ theme }) => theme.colors.critical};
  min-height: 18px;
`;
