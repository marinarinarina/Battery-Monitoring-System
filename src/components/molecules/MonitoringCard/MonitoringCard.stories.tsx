import type { Meta, StoryObj } from '@storybook/react';
import MonitoringCard from './MonitoringCard';
import { LOCATIONS } from '@/utils/faker';

const meta: Meta<typeof MonitoringCard> = {
  title: 'Molecules/MonitoringCard',
  component: MonitoringCard,
  tags: ['autodocs'],
  argTypes: {
    cameraId: { control: 'text' },
    videoSrc: { control: 'text' },
    location: {
      control: 'select',
      values: LOCATIONS,
    },
    vibration: { control: 'number' },
    noise: { control: 'number' },
    heat: { control: 'number' },
    cellTemperature: { control: 'number' },
    isWarning: { control: 'boolean' },
    isCritical: { control: 'boolean' },
  },
};
export default meta;

type Story = StoryObj<typeof MonitoringCard>;

export const Default: Story = {
  args: {
    cameraId: 'CAMERA-001',
    videoSrc: '/videos/CAMERA-001.mp4',
    location: '원료 준비 구역',
    vibration: 3.2,
    noise: 72.4,
    heat: 65.0,
    cellTemperature: 63.3,
    isWarning: false,
    isCritical: false,
  },
};

export const Warning: Story = {
  args: {
    ...Default.args,
    isWarning: true,
    vibration: 4.1,
    noise: 75.0,
  },
};

export const Critical: Story = {
  args: {
    ...Default.args,
    isCritical: true,
    vibration: 6.2,
    heat: 80.0,
  },
};
