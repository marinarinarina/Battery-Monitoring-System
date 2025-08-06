import type { Meta, StoryObj, StoryFn, StoryContext } from '@storybook/react';
import AppLayout from './AppLayout';
import { ThemeProvider } from '@/components/providers/ThemeProvider';

const withTheme = (Story: StoryFn, context: StoryContext) => {
  const themeMode = context.globals.themeMode ?? 'light';
  return (
    <ThemeProvider initialMode={themeMode}>
      {Story(context,context)}
    </ThemeProvider>
  );
};

const meta: Meta<typeof AppLayout> = {
  title: 'Templates/AppLayout',
  component: AppLayout,
  decorators: [withTheme],
  parameters: {
    layout: 'fullscreen',
  },
};
export default meta;

type Story = StoryObj<typeof AppLayout>;

export const Default: Story = {
  args: {
    children: (
      <div>
        <h1>메인 콘텐츠 영역</h1>
        <p>
          여기에서는 메인 콘텐츠 구조나 페이지 이동, 다크모드, 사용자 인증 등 공통 기능을 테스트합니다.<br />
          모바일 뷰포트에서는 햄버거 메뉴와 사이드바 닫기 버튼이 활성화됩니다.
        </p>
      </div>
    ),
  },
};
