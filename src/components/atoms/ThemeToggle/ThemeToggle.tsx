import { SwitchWrapper, SwitchTrack, SwitchThumb } from './ThemeToggle.styles';
import type { ThemeToggleProps } from './ThemeToggle.types';

export const ThemeToggle = ({ mode, onToggle }: ThemeToggleProps) => {
  const checked = mode === 'dark';

  return (
    <SwitchWrapper
      checked={checked}
      aria-checked={checked}
      aria-label="다크모드 전환"
      role="switch"
      type="button"
      tabIndex={0}
      onClick={onToggle}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onToggle();
        }
      }}
    >
      <SwitchTrack checked={checked} />
      <SwitchThumb checked={checked} />
    </SwitchWrapper>
  );
};