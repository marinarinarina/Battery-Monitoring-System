import type { Meta, StoryObj } from '@storybook/react';
import MonitoringCard from './MonitoringCard';

const meta: Meta<typeof MonitoringCard> = {
  title: 'Molecules/MonitoringCard',
  component: MonitoringCard,
  tags: ['autodocs'],
  argTypes: {
    cameraId: { control: 'text' },
    videoSrc: { control: 'text' },
    location: {
      control: 'select',
      options: [
        '원료 준비 구역',
        '전해액 저장 탱크',
        '셀 로딩',
        '주입 노즐 및 헤드',
        '정량 주입 컨트롤 패널',
        '압력 및 누수 테스트 구역',
        '셀 씰링 및 캡핑',
        '청정 및 오염 방지 구역',
        '알람 및 모니터링 스테이션',
        '폐액 수집 및 처리 구역',
      ],
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
