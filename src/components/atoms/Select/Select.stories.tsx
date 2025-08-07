import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Select } from './Select';

const meta: Meta<typeof Select> = {
  title: 'Atoms/Select',
  component: Select,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text', description: '셀렉트 박스 레이블' },
    options: { control: 'object', description: '옵션 배열' },
    error: { control: 'boolean', description: '에러 상태 여부' },
    errorMessage: { control: 'text', description: '에러 메시지' },
  },
};
export default meta;

type Story = StoryObj<typeof Select>;

const sampleOptions = [
  { label: 'Option 1', value: '1' },
  { label: 'Option 2', value: '2' },
  { label: 'Option 3', value: '3' },
];

export const Default: Story = {
  args: {
    label: 'Select Option',
    options: sampleOptions,
  },
};

export const Error: Story = {
  args: {
    label: 'Select Option',
    options: sampleOptions,
    error: true,
    errorMessage: '옵션을 선택해주세요.',
  },
};
