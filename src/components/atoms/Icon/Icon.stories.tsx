import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Icon } from './Icon';
import { FaCheck, FaTimes } from 'react-icons/fa';
import { MdSearch } from 'react-icons/md';

const meta: Meta<typeof Icon> = {
  title: 'Atoms/Icon',
  component: Icon,
  tags: ['autodocs'],
  argTypes: {
    icon: { control: false }, // 드롭다운 컨트롤 끔
    size: { control: { type: 'number', min: 12, max: 48 } },
    color: { control: 'color' },
    'aria-label': { control: 'text' },
  },
};
export default meta;

export const Basic: StoryObj<typeof Icon> = {
  args: {
    icon: FaCheck,
    size: 24,
    color: '#1e90ff',
    'aria-label': '체크 아이콘',
  },
};

export const SizeVariants: StoryObj<typeof Icon> = {
  render: () => (
    <div style={{ display: 'flex', gap: 16 }}>
      <Icon icon={FaCheck} size={16} color="#1e90ff" aria-label="16px" />
      <Icon icon={FaCheck} size={24} color="#1e90ff" aria-label="24px" />
      <Icon icon={FaCheck} size={32} color="#1e90ff" aria-label="32px" />
      <Icon icon={FaCheck} size={40} color="#1e90ff" aria-label="40px" />
    </div>
  ),
};

export const ColorVariants: StoryObj<typeof Icon> = {
  render: () => (
    <div style={{ display: 'flex', gap: 16 }}>
      <Icon icon={FaCheck} size={24} color="#1e90ff" aria-label="블루" />
      <Icon icon={FaCheck} size={24} color="#F00" aria-label="레드" />
      <Icon icon={FaCheck} size={24} color="#0f0" aria-label="그린" />
      <Icon icon={FaCheck} size={24} color="#888" aria-label="회색" />
    </div>
  ),
};

export const WithTitleAndAria: StoryObj<typeof Icon> = {
  args: {
    icon: FaTimes,
    size: 24,
    color: '#F00',
    title: '닫기',
    'aria-label': '닫기 아이콘',
  },
};

export const DifferentIcons: StoryObj<typeof Icon> = {
  render: () => (
    <div style={{ display: 'flex', gap: 16 }}>
      <Icon icon={FaCheck} size={24} aria-label="체크" />
      <Icon icon={FaTimes} size={24} aria-label="닫기" />
      <Icon icon={MdSearch} size={24} aria-label="검색" />
    </div>
  ),
};