import type { SelectProps } from './Select.types';
import { Wrapper, Label, StyledSelect, ErrorMessage } from './Select.styles';

export const Select = ({ label, options, error, errorMessage, id, ...rest }: SelectProps) => {
  const selectId = id || `select-${Math.random().toString(36).slice(2, 9)}`;

  return (
    <Wrapper>
      {label && <Label htmlFor={selectId}>{label}</Label>}
      <StyledSelect id={selectId} aria-invalid={error} error={error} {...rest}>
        {options.map(({ label, value }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </StyledSelect>
      {error && errorMessage && <ErrorMessage role="alert">{errorMessage}</ErrorMessage>}
    </Wrapper>
  );
};
