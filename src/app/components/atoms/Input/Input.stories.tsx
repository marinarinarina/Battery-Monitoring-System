import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

const meta: Meta<typeof Input> = {
  title: 'Atoms/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text', description: '입력 필드 레이블' },
    type: {
      control: 'select',
      options: ['text', 'number', 'password', 'search', 'email'],
      description: '입력 타입',
    },
    error: { control: 'boolean', description: '에러 상태 여부' },
    errorMessage: { control: 'text', description: '에러 메시지' },
  },
};
export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: { label: 'Username', type: 'text' },
};

export const Error: Story = {
  args: { label: 'Email', type: 'email', error: true, errorMessage: '이메일 형식이 올바르지 않습니다.' },
};
