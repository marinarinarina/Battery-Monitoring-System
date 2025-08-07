import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { withTheme } from '@/components/__storybook__/withThemeDecorator';
import Header from './Header';

const meta: Meta<typeof Header> = {
  title: 'Organisms/Header',
  component: Header,
  decorators: [withTheme],
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: '헤더 컴포넌트로, 로고와 사용자 프로필을 표시합니다. 모바일에서는 메뉴 버튼이 표시됩니다. 모바일 테스트 시 상단 메뉴의 모바일 뷰로 확인할 수 있습니다.',
      },
    },
  },
  argTypes: {
    onMenuClick: { action: '메뉴버튼 클릭' },
  },
};
export default meta;

type Story = StoryObj<typeof Header>;

export const Default: Story = {
  args: {
    username: '김마리나',
    avatarUrl: 'https://randomuser.me/api/portraits/men/46.jpg',
  },
};

export const Mobile: Story = {
  args: {
    username: 'Marina',
    avatarUrl: 'https://randomuser.me/api/portraits/men/50.jpg',
  },
  parameters: { viewport: { defaultViewport: 'mobile1' } },
};