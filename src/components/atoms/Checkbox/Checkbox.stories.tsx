import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from './Checkbox';
import React, { useState } from 'react';

const meta: Meta<typeof Checkbox> = {
  title: 'Atoms/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text', description: '레이블 텍스트' },
    checked: { control: 'boolean', description: '체크 여부' },
    error: { control: 'boolean', description: '에러 상태' },
    onChange: { action: 'changed', description: '체크박스 변경 이벤트' },
  },
};
export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: {
    label: 'Checkbox label',
    checked: false,
  },
};

export const Checked: Story = {
  args: {
    label: 'Checked Checkbox',
    checked: true,
  },
};

export const Error: Story = {
  args: {
    label: 'Checkbox with Error',
    checked: false,
    error: true,
  },
};

export const Interactive: Story = {
  render: (args) => {
    const [checked, setChecked] = useState(false);
    return (
      <Checkbox
        {...args}
        checked={checked}
        onChange={e => setChecked(e.target.checked)}
        label='클릭 시 체크 상태 변경'
      />
    );
  },
  args: {
    label: 'Interactive checkbox',
    checked: false,
    error: false,
  },
};
