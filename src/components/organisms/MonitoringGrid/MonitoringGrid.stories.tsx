import type { Meta, StoryObj } from '@storybook/react';
import MonitoringGrid from './MonitoringGrid';
import type { MonitoringCardProps } from '@/components/molecules/MonitoringCard/MonitoringCard.types';
import { LOCATIONS, VIDEO_FILES } from '@/utils/faker.types';


const exampleCards: MonitoringCardProps[] = [
  {
    cameraId: 'CAMERA-001',
    videoSrc: VIDEO_FILES[0],
    location: LOCATIONS[0],
    vibration: 3.2,
    noise: 72.4,
    heat: 65.0,
    cellTemperature: 63.3,
    isWarning: false,
    isCritical: false,
  },
  {
    cameraId: 'CAMERA-002',
    videoSrc: VIDEO_FILES[1],
    location: LOCATIONS[1],
    vibration: 4.8,
    noise: 80.1,
    heat: 68.5,
    cellTemperature: 70.0,
    isWarning: true,
    isCritical: false,
  },
  {
    cameraId: 'CAMERA-003',
    videoSrc: VIDEO_FILES[2],
    location: LOCATIONS[2],
    vibration: 7.1,
    noise: 95.2,
    heat: 90.0,
    cellTemperature: 92.5,
    isWarning: false,
    isCritical: true,
  },
  {
    cameraId: 'CAMERA-004',
    videoSrc: VIDEO_FILES[3],
    location: LOCATIONS[3],
    vibration: 7.1,
    noise: 95.2,
    heat: 90.0,
    cellTemperature: 92.5,
    isWarning: false,
    isCritical: true,
  },
];

const meta: Meta<typeof MonitoringGrid> = {
  title: 'Organisms/MonitoringGrid',
  component: MonitoringGrid,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: '모니터링 그리드 컴포넌트로, 여러 모니터링 카드를 그리드 형태로 표시합니다. 각 카드는 카메라 영상(테스트용 영상)과 함께 진동, 소음, 열, 셀 온도 데이터를 표시합니다.',
      },
    },
    layout: 'fullscreen',
  },
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof MonitoringGrid>;

export const Default: Story = {
  args: {
    cards: exampleCards,
  },
};
