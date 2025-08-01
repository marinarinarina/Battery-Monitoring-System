import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Radio } from './Radio';

const meta: Meta<typeof Radio> = {
  title: 'Atoms/Radio',
  component: Radio,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text', description: '레이블 텍스트' },
    checked: { control: 'boolean', description: '라디오 선택' }, 
    error: { control: 'boolean', description: '에러 상태' },
    onChange: { action: 'changed', description: '라디오 변경 이벤트' },
  },
};
export default meta;

type Story = StoryObj<typeof Radio>;

// 1. 기본 고정 상태 스토리
export const Default: Story = {
  args: {
    label: 'Radio label',
    checked: false,
  },
};

export const Checked: Story = {
  args: {
    label: 'Checked radio',
    checked: true,
  },
};

export const Error: Story = {
  args: {
    label: 'Radio with error',
    checked: false,
    error: true,
  },
};

export const Interactive: Story = {
  render: (args) => {
    const [checked, setChecked] = useState(args.checked ?? false);

    return (
      <Radio
        {...args}
        checked={checked}
        onChange={() => setChecked(!checked)}
      />
    );
  },
  args: {
    label: 'Interactive radio',
    checked: false,
    error: false,
  },
};