import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { withTheme } from '@/components/__storybook__/withThemeDecorator';
import MonitorPage from './MonitorPage';


const meta: Meta<typeof MonitorPage> = {
  title: 'Pages/MonitorPage',
  component: MonitorPage,
  decorators: [withTheme],
  parameters: { layout: 'fullscreen' },
};
export default meta;

type Story = StoryObj<typeof MonitorPage>;

export const Default: Story = {};
