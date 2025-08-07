import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { LoadingSpinner } from './LoadingSpinner';

const meta: Meta<typeof LoadingSpinner> = {
  title: 'Atoms/LoadingSpinner',
  component: LoadingSpinner,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'range', min: 16, max: 128, step: 4 },
      description: '스피너 크기(px)',
    },
    color: {
      control: 'color',
      description: '스피너 색상',
    },
    'aria-label': {
      control: 'text',
      description: '접근성 레이블',
    },
  },
};
export default meta;

type Story = StoryObj<typeof LoadingSpinner>;

export const Default: Story = {
  args: {
    size: 32,
  },
};

export const LargeRed: Story = {
  args: {
    size: 64,
    color: '#FF4444',
  },
};
