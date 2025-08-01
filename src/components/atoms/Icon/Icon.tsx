import type { IconProps } from './Icon.types';

export const Icon = ({ icon: IconComponent, size = 24, color, title, 'aria-label': ariaLabel }: IconProps) => (
  <IconComponent
    size={size}
    color={color}
    title={title}
    aria-label={ariaLabel}
    role={ariaLabel ? 'img' : undefined}
    focusable="false"
  />
);
