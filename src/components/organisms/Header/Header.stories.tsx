import type { Meta, StoryObj } from '@storybook/react';
import { withTheme } from '@/components/__storybook__/withThemeDecorator';
import Header from './Header';


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