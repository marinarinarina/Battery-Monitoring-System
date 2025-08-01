import type { Meta, StoryObj } from '@storybook/react';
import { Text } from './Text';

const meta: Meta<typeof Text> = {
  title: 'Atoms/Text',
  component: Text,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'radio',
      options: ['body', 'caption', 'label', 'heading1', 'heading2'],
      description: '텍스트 스타일 종류',
    },
    as: {
      control: 'text',
      description: '사용할 HTML 태그',
    },
    children: {
      control: 'text',
      description: '표시할 텍스트',
    },
  },
};
export default meta;

type Story = StoryObj<typeof Text>;

export const Body: Story = {
  args: {
    variant: 'body',
    children: 'This is body text.',
  },
};

export const Caption: Story = {
  args: {
    variant: 'caption',
    children: 'This is caption text.',
  },
};

export const Label: Story = {
  args: {
    variant: 'label',
    children: 'This is a label.',
  },
};

export const Heading1: Story = {
  args: {
    variant: 'heading1',
    children: 'This is heading 1.',
    as: 'h1',
  },
};

export const Heading2: Story = {
  args: {
    variant: 'heading2',
    children: 'This is heading 2.',
    as: 'h2',
  },
};