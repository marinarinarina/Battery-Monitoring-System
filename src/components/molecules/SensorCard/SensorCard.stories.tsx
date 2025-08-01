import type { Meta, StoryObj } from '@storybook/react';
import SensorCard from './SensorCard';

const meta: Meta<typeof SensorCard> = {
  title: 'Molecules/SensorCard',
  component: SensorCard,
  tags: ['autodocs'],
  argTypes: {
    sensorId: { control: 'text', description: '센서 ID' },
    value: { control: 'text', description: '센서 값' },
    status: {
      control: 'radio',
      options: ['normal', 'warning', 'critical'],
      description: '센서 상태',
    },
  },
};
export default meta;

type Story = StoryObj<typeof SensorCard>;

export const Normal: Story = {
  args: { sensorId: 'A1', value: '2.4', status: 'normal' },
};
export const Warning: Story = {
  args: { sensorId: 'B2', value: '4.1', status: 'warning' },
};
export const Critical: Story = {
  args: { sensorId: 'C3', value: '5.7', status: 'critical' },
};
