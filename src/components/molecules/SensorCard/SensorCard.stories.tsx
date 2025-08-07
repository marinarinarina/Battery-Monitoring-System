import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import SensorCard from './SensorCard';
import { LOCATIONS } from '@/utils/faker.types';

const meta: Meta<typeof SensorCard> = {
  title: 'Molecules/SensorCard',
  component: SensorCard,
  tags: ['autodocs'],
  argTypes: {
    location: {
      control: 'select',
      options: LOCATIONS,
      description: '센서 설치 구역',
    },
  },
};
export default meta;

type Story = StoryObj<typeof SensorCard>;

export const Default: Story = {
  args: {
    location: '셀 로딩',
    vibration: { value: 2.4, status: 'normal' },
    noise: { value: 65.0, status: 'normal' },
    heat: { value: 35.0, status: 'normal' },
    cellTemperature: { value: 33.1, status: 'normal' },
  },
};

export const Warning: Story = {
  args: {
    location: '압력 및 누수 테스트 구역',
    vibration: { value: 4.1, status: 'warning' },
    noise: { value: 72.4, status: 'warning' },
    heat: { value: 42.0, status: 'normal' },
    cellTemperature: { value: 33.0, status: 'normal' },
  },
};

export const Critical: Story = {
  args: {
    location: '알람 및 모니터링 스테이션',
    vibration: { value: 6.5, status: 'critical' },
    noise: { value: 85.0, status: 'critical' },
    heat: { value: 48.0, status: 'warning' },
    cellTemperature: { value: 38.0, status: 'normal' },
  },
};
