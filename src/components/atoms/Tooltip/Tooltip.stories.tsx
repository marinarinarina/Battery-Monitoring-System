import type { Meta, StoryObj } from '@storybook/react';
import { Tooltip } from './Tooltip';

const meta: Meta<typeof Tooltip> = {
  title: 'Atoms/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  argTypes: {
    content: { control: 'text', description: '툴팁 내용' },
    position: {
      control: 'radio',
      options: ['top', 'right', 'bottom', 'left'],
      description: '툴팁 위치',
    },
    delayShow: {
      control: { type: 'number', min: 0, max: 2000 },
      description: '마우스 올렸을 때 툴팁 표시 지연(ms)',
    },
    delayHide: {
      control: { type: 'number', min: 0, max: 2000 },
      description: '마우스 뗐을 때 툴팁 숨김 지연(ms)',
    },
  },
};
export default meta;

type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  args: {
    content: '툴팁 예시 텍스트',
    position: 'top',
    delayShow: 300,
    delayHide: 200,
    children: <button>여기에 마우스를 올리면 툴팁이 뜹니다.</button>,
  },
};
