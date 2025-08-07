import type { StoryFn, StoryContext } from '@storybook/nextjs-vite';
import { ThemeProvider } from '@/components/providers/ThemeProvider';

export const withTheme = (Story: StoryFn, context: StoryContext) => {
  const themeMode = context.globals.themeMode ?? 'light';
  return (
    <ThemeProvider initialMode={themeMode}>
      {Story(context.args, context)}
    </ThemeProvider>
  );
};