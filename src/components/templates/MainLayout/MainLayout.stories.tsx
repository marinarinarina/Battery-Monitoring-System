import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import MainLayout from './MainLayout';


const meta: Meta<typeof MainLayout> = {
  title: 'Templates/MainLayout',
  component: MainLayout,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};
export default meta;

type Story = StoryObj<typeof MainLayout>;

export const Default: Story = {
  args: {
    children: (
      <div>
        <h1>페이지 콘텐츠</h1>
        <p>여기는 각 페이지에서 children으로 전달될 콘텐츠 영역입니다.</p>
      </div>
    ),
  },
};
