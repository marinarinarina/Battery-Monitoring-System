import { SwitchWrapper, SwitchTrack, SwitchThumb } from './ThemeToggle.styles';
import type { ThemeToggleProps } from './ThemeToggle.types';

export const ThemeToggle = ({ mode, onToggle }: ThemeToggleProps) => {
  const checked = mode === 'dark';

  return (
    <SwitchWrapper
      checked={checked}
      aria-checked={checked}
      aria-label="Toggle dark mode"
      role="switch"
      type="button"
      onClick={onToggle}
    >
      <SwitchTrack checked={checked} />
      <SwitchThumb checked={checked} />
    </SwitchWrapper>
  );
};