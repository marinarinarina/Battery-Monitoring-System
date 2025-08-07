import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Avatar } from './Avatar';

const meta: Meta<typeof Avatar> = {
  title: 'Atoms/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: '사용자 프로필 사진을 표시하는 원형 아바타 컴포넌트입니다.',
      },
    },
  },
  argTypes: {
    src: { control: 'text', description: '아바타 이미지 URL' },
    alt: { control: 'text', description: '이미지 대체 텍스트' },
    size: { control: 'number', description: '아바타 크기(px)' },
    fallback: { control: 'text', description: '이미지 없을 때 표시할 텍스트' },
  },
};
export default meta;

type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  args: {
    size: 40,
    fallback: 'MK',
  },
};

export const WithImage: Story = {
  args: {
    src: 'https://randomuser.me/api/portraits/men/45.jpg',
    alt: 'User Profile',
    size: 48,
  },
};
