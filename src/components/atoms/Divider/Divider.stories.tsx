import type { Meta, StoryObj } from '@storybook/react';
import { Divider } from './Divider';

const meta: Meta<typeof Divider> = {
  title: 'Atoms/Divider',
  component: Divider,
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: 'radio',
      options: ['horizontal', 'vertical'],
      description: '구분선 방향',
    },
    margin: {
      control: 'text',
      description: '외부 여백(CSS 단위)',
    },
    color: {
      control: 'color',
      description: '구분선 색상',
    },
  },
};
export default meta;

type Story = StoryObj<typeof Divider>;

export const Horizontal: Story = {
  args: {
    orientation: 'horizontal',
    margin: '16px 0',
  },
};

export const Vertical: Story = {
  args: {
    orientation: "horizontal",
    margin: "4 16px",
  },
};
