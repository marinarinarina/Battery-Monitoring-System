import type { DividerProps } from './Divider.types';
import { StyledDivider } from './Divider.styles';

export const Divider = ({ orientation = 'horizontal', margin, color, className }: DividerProps) => {
  return <StyledDivider orientation={orientation} margin={margin} color={color} className={className} />;
};
