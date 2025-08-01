import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Atoms/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'radio',
      options: ['primary', 'secondary', 'critical', 'disabled'],
      description: '버튼 스타일 종류',
    },
    size: {
      control: 'radio',
      options: ['small', 'medium', 'large'],
      description: '버튼 크기',
    },
    fullWidth: {
      control: 'boolean',
      description: '가로폭 100% 여부',
    },
    onClick: {
      action: 'clicked',
      description: '클릭 이벤트',
      table: { category: 'Events' },
    },
  },
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    size: 'medium',
    children: 'Primary Button',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    size: 'medium',
    children: 'Secondary Button',
  },
};

export const critical: Story = {
  args: {
    variant: 'critical',
    size: 'medium',
    children: 'critical Button',
  },
};

export const Disabled: Story = {
  args: {
    variant: 'disabled',
    size: 'medium',
    children: 'Disabled Button',
    disabled: true,
  },
};

export const FullWidth: Story = {
  args: {
    variant: 'primary',
    size: 'medium',
    fullWidth: true,
    children: 'Full Width Button',
  },
};

export const Small: Story = {
  args: {
    variant: 'primary',
    size: 'small',
    children: 'Small Button',
  },
};

export const Large: Story = {
  args: {
    variant: 'primary',
    size: 'large',
    children: 'Large Button',
  },
};