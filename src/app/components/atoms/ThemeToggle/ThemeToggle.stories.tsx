import type { Meta, StoryObj } from '@storybook/react';
import { ThemeToggle } from './ThemeToggle';

const meta: Meta<typeof ThemeToggle> = {
  title: 'Atoms/ThemeToggle',
  component: ThemeToggle,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: '다크모드 ON/OFF를 토글하는 스위치 컴포넌트입니다. 클릭 시 실제로 light/dark가 전환됩니다.',
      },
    },
  },
  argTypes: {
    mode: {
      description: '현재 테마 상태 (light: Off, dark: On)',
      control: { type: 'radio' },
      options: ['light', 'dark'],
      table: { defaultValue: { summary: 'light' } },
    },
    onToggle: {
      description: '스위치 클릭 시 실행되는 콜백 함수',
      action: 'toggled',
      table: { category: 'Events' },
    },
  },
};
export default meta;

type Story = StoryObj<typeof ThemeToggle>;


export const Interactive: Story = {
  args: {
    mode: 'light',
  },
  render: (args, { updateArgs }) => (
    <ThemeToggle
      mode={args.mode}
      onToggle={() => {
        updateArgs!({ mode: args.mode === 'light' ? 'dark' : 'light' });
      }}
    />
  ),
  parameters: {
    docs: {
      description: {
        story: '클릭 시 light/dark 모드 전환',
      },
    },
  },
};
