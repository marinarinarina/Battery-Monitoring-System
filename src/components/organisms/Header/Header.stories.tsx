import type { Meta, StoryObj, StoryFn, StoryContext } from '@storybook/react';
import Header from './Header';
import { ThemeProvider } from '@/components/providers/ThemeProvider';

const withTheme = (Story: StoryFn, context: StoryContext) => {
  const themeMode = context.globals.themeMode ?? 'light';
  return (
    <ThemeProvider initialMode={themeMode}>
      {Story(context,context)}
    </ThemeProvider>
  );
};

const meta: Meta<typeof Header> = {
  title: 'Organisms/Header',
  component: Header,
  decorators: [withTheme],
  tags: ['autodocs'],
  argTypes: {
    onMenuClick: { action: '메뉴버튼 클릭' },
  },
};
export default meta;

type Story = StoryObj<typeof Header>;

export const Default: Story = {
  args: {
    username: '김마리나',
    avatarUrl: 'https://randomuser.me/api/portraits/men/46.jpg',
  },
};

export const Mobile: Story = {
  args: {
    username: 'Marina',
    avatarUrl: 'https://randomuser.me/api/portraits/men/50.jpg',
  },
  parameters: { viewport: { defaultViewport: 'mobile1' } },
};