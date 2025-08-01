import type { RadioProps } from './Radio.types';
import { Wrapper, HiddenRadio, StyledRadio, LabelText } from './Radio.styles';

export const Radio = ({ label, checked, error, id, ...rest }: RadioProps) => {
  const inputId = id || `radio-${Math.random().toString(36).slice(2, 9)}`;

  return (
    <Wrapper htmlFor={inputId}>
      <HiddenRadio id={inputId} checked={checked} aria-invalid={error} {...rest} />
      <StyledRadio checked={checked} error={error} />
      {label && <LabelText>{label}</LabelText>}
    </Wrapper>
  );
};
