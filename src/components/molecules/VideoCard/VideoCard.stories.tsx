import type { Meta, StoryObj } from '@storybook/react';
import VideoCard from './VideoCard';
import { VIDEO_FILES } from '@/utils/faker.types';

const meta: Meta<typeof VideoCard> = {
  title: 'Molecules/VideoCard',
  component: VideoCard,
  tags: ['autodocs'],
  argTypes: {
    cameraId: { control: 'text', description: '카메라/장비 ID' },
    videoSrc: { control: 'text', description: '비디오 파일 경로' },
    error: { control: 'boolean', description: '카메라 오류 상태' },
    loading: { control: 'boolean', description: '비디오 로딩 중' },
    status: {
      control: 'radio',
      options: ['live', 'offline'],
      description: '카메라 상태',
    },
    onRetry: { action: '재시도', description: '오류 시 재시도 콜백' },
  },
};
export default meta;

type Story = StoryObj<typeof VideoCard>;

// 기본 라이브 영상 카드
export const Live: Story = {
  args: {
    cameraId: 'CAM-01',
    videoSrc: VIDEO_FILES[0],
    status: 'live',
    loading: false,
    error: false,
  },
};

// 영상 로딩 중
export const Loading: Story = {
  args: {
    cameraId: 'CAM-02',
    videoSrc: VIDEO_FILES[1],
    status: 'live',
    loading: true,
    error: false,
  },
};

// 카메라 오류 상태 (재시도 버튼 포함)
export const Error: Story = {
  args: {
    cameraId: 'CAM-03',
    videoSrc: VIDEO_FILES[2],
    error: true,
    status: 'offline',
  },
};

export const Offline: Story = {
  args: {
    cameraId: 'CAM-04',
    videoSrc: VIDEO_FILES[3],
    status: 'offline',
    loading: false,
    error: false,
  },
};
