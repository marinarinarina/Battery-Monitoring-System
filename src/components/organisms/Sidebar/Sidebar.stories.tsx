import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import Sidebar from './Sidebar';

const meta: Meta<typeof Sidebar> = {
  title: 'Organisms/Sidebar',
  component: Sidebar,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: '사이드바 컴포넌트로, 대시보드, 모니터링, 로그, 설정 등의 메뉴를 제공합니다. 모바일에서는 오버레이 형태로 표시됩니다. 사이드바는 PC(태블릿 이상)에서는 항상 열려있고, 모바일에서는 상태에 따라 열림/닫힘이 가능합니다.(templates, pages에서 상태확인 가능) 모바일 테스트 시 상단 메뉴의 모바일 뷰로 확인할 수 있습니다.',
      },
    },
  },
  argTypes: {
    open: { control: 'boolean' },
    activeMenu: {
      control: 'radio',
      options: ['dashboard', 'monitor', 'logs', 'settings'],
    },
    onClose: { action: '사이드바 닫기' },
    onNavigate: { action: '메뉴 클릭' },
  },
};
export default meta;

type Story = StoryObj<typeof Sidebar>;

export const Default: Story = {
  args: {
    open: true,
    activeMenu: 'monitor',
  },
};

export const MobileOpen: Story = {
  args: {
    open: true,
    activeMenu: 'dashboard',
  },
  parameters: { viewport: { defaultViewport: 'mobile1' } },
};

export const MobileClosed: Story = {
  args: {
    open: false,
    activeMenu: 'dashboard',
  },
  parameters: { viewport: { defaultViewport: 'mobile1' } },
};
