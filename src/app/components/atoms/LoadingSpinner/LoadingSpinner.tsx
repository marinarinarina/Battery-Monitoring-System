import type { LoadingSpinnerProps } from './LoadingSpinner.types';
import { Spinner } from './LoadingSpinner.styles';
import { useTheme } from 'styled-components';

export const LoadingSpinner = ({
  size = 32,
  color,
  className,
  'aria-label': ariaLabel = 'Loading',
}: LoadingSpinnerProps) => {
  const theme = useTheme();
  const spinnerColor = color || theme.colors.primary;

  return <Spinner role="progressbar" aria-label={ariaLabel} size={size} color={spinnerColor} className={className} />;
};
