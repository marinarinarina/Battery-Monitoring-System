import type { Meta, StoryObj, StoryFn, StoryContext } from '@storybook/react';
import MonitorPage from './MonitorPage';
import { ThemeProvider } from '@/components/providers/ThemeProvider';

const withTheme = (Story: StoryFn, context: StoryContext) => {
  const themeMode = context.globals.themeMode ?? 'light';
  return (
    <ThemeProvider initialMode={themeMode}>
      {Story(context,context)}
    </ThemeProvider>
  );
};

const meta: Meta<typeof MonitorPage> = {
  title: 'Pages/MonitorPage',
  component: MonitorPage,
  decorators: [withTheme],
  parameters: { layout: 'fullscreen' },
};
export default meta;

type Story = StoryObj<typeof MonitorPage>;

export const Default: Story = {};
