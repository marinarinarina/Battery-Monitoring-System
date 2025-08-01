import type { Meta, StoryObj } from '@storybook/react';
import MonitorPage from '@/app/monitor/page'; 

const meta: Meta<typeof MonitorPage> = {
  title: 'Pages/MonitorPage',
  component: MonitorPage,
  parameters: {
    layout: 'fullscreen',
  },
};
export default meta;

type Story = StoryObj<typeof MonitorPage>;

export const Default: Story = {};
