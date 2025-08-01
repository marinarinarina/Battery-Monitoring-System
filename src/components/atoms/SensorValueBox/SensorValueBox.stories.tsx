import type { Meta, StoryObj } from '@storybook/react';
import { SensorValueBox } from './SensorValueBox';

const meta: Meta<typeof SensorValueBox> = {
  title: 'Atoms/SensorValueBox',
  component: SensorValueBox,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: '센서 값과 상태를 시각적으로 표시하는 컴포넌트입니다. 색상, 폰트 등은 theme 기반입니다.',
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof SensorValueBox>;

export const Normal: Story = {
  args: { label: '진동', value: '2.4', unit: 'mm/s', status: "critical" },
};
export const Warning: Story = {
  args: { label: '진동', value: '3.8', unit: 'mm/s', status: 'warning' },
};
export const Critical: Story = {
  args: { label: '진동', value: '5.1', unit: 'mm/s', status: 'critical' },
};
