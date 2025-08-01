import styled from 'styled-components';

export const Wrapper = styled.label`
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
`;

export const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

export const StyledCheckbox = styled.span<{ checked?: boolean; error?: boolean }>`
  width: 16px;
  height: 16px;
  background: ${({ theme, checked, error }) =>
    error ? theme.colors.critical : checked ? theme.colors.primary : theme.colors.background};
  border: 1.5px solid
    ${({ theme, checked, error }) =>
      error ? theme.colors.critical : checked ? theme.colors.primary : theme.colors.border};
  border-radius: 4px;
  transition: all 150ms;
  display: inline-block;
  position: relative;

  ${HiddenCheckbox}:focus-visible + & {
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.primary};
  }

  &::after {
    content: '';
    position: absolute;
    display: ${({ checked }) => (checked ? 'block' : 'none')};
    left: 4px;
    top: 1px;
    width: 4px;
    height: 8px;
    border: solid white;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
  }
`;

export const LabelText = styled.span`
  margin-left: 8px;
  font-size: ${({ theme }) => theme.font.size.body};
  color: ${({ theme }) => theme.colors.textPrimary};
`;
