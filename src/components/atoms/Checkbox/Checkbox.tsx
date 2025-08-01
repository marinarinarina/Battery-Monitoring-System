import type { CheckboxProps } from './Checkbox.types';
import {
  Wrapper,
  HiddenCheckbox,
  StyledCheckbox,
  LabelText,
} from './Checkbox.styles';

export const Checkbox = ({ label, checked, error, id, ...rest }: CheckboxProps) => {
  const inputId = id || `checkbox-${Math.random().toString(36).slice(2, 9)}`;

  return (
    <Wrapper htmlFor={inputId}>
      <HiddenCheckbox id={inputId} checked={checked} aria-invalid={error} {...rest} />
      <StyledCheckbox checked={checked} error={error} />
      {label && <LabelText>{label}</LabelText>}
    </Wrapper>
  );
};
