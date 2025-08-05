import type { Meta, StoryObj } from '@storybook/react';
import Sidebar from './Sidebar';

const meta: Meta<typeof Sidebar> = {
  title: 'Organisms/Sidebar',
  component: Sidebar,
  tags: ['autodocs'],
  argTypes: {
    open: { control: 'boolean' },
    activeMenu: {
      control: 'radio',
      options: ['dashboard', 'monitor', 'logs', 'settings'],
    },
    onClose: { action: '사이드바 닫기' },
    onNavigate: { action: '메뉴 클릭' },
  },
};
export default meta;

type Story = StoryObj<typeof Sidebar>;

export const Default: Story = {
  args: {
    open: true,
    activeMenu: 'monitor',
  },
};

export const MobileOpen: Story = {
  args: {
    open: true,
    activeMenu: 'dashboard',
  },
  parameters: { viewport: { defaultViewport: 'mobile1' } },
};

export const MobileClosed: Story = {
  args: {
    open: false,
    activeMenu: 'dashboard',
  },
  parameters: { viewport: { defaultViewport: 'mobile1' } },
};
