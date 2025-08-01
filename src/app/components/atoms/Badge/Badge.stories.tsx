import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from './Badge';

const meta: Meta<typeof Badge> = {
  title: 'Atoms/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'radio',
      options: ['normal', 'warning', 'critical'],
      description: '뱃지 스타일 종류',
    },
    children: {
      control: 'text',
      description: '뱃지 텍스트',
    },
  },
};
export default meta;

type Story = StoryObj<typeof Badge>;

export const Normal: Story = {
  args: {
    variant: 'normal',
    children: 'Normal',
  },
};

export const Warning: Story = {
  args: {
    variant: 'warning',
    children: 'Warning',
  },
};

export const critical: Story = {
  args: {
    variant: 'critical',
    children: 'critical',
  },
};
