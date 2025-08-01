import type { InputProps } from './Input.types';
import { Wrapper, Label, StyledInput, ErrorMessage } from './Input.styles';

export const Input = ({ label, type = 'text', error, errorMessage, id, ...rest }: InputProps) => {
  // id는 label과 연결하기 위해 필수 (없으면 React가 warning)
  const inputId = id || `input-${Math.random().toString(36).slice(2, 9)}`;

  return (
    <Wrapper>
      {label && <Label htmlFor={inputId}>{label}</Label>}
      <StyledInput id={inputId} type={type} error={error} aria-invalid={error} {...rest} />
      {error && errorMessage && <ErrorMessage role="alert">{errorMessage}</ErrorMessage>}
    </Wrapper>
  );
};
