import styled from 'styled-components';

export const SwitchWrapper = styled.button<{ checked: boolean }>`
  display: inline-flex;
  align-items: center;
  width: 48px;
  height: 28px;
  border: none;
  background: none;
  cursor: pointer;
  padding: 0;
  position: relative;
  /* 스크린리더 접근성 */
  outline: none;

  &:focus-visible {
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.primary};
  }
`;

export const SwitchTrack = styled.span<{ checked: boolean }>`
  width: 100%;
  height: 100%;
  border-radius: 14px;
  transition: background 0.2s;
  background: ${({ theme, checked }) =>
    checked ? theme.colors.primary : theme.colors.disabled};
  display: block;
  position: absolute;
  top: 0;
  left: 0;
`;

export const SwitchThumb = styled.span<{ checked: boolean }>`
  display: block;
  position: absolute;
  top: 4px;
  left: ${({ checked }) => (checked ? '24px' : '4px')};
  width: 20px;
  height: 20px;
  border-radius: 50%;
  transition: left 0.2s, background 0.2s;
  background: #FFF;
  box-shadow: 0 1px 4px rgba(0,0,0,0.13);
  z-index: 1;
`;