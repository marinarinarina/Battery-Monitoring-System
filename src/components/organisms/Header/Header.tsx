import { useThemeMode } from '@/components/providers/ThemeProvider';
import { ThemeToggle } from '@/components/atoms/ThemeToggle/ThemeToggle';
import { Text } from '@/components/atoms/Text/Text';
import { FiMenu } from 'react-icons/fi';
import { HeaderProps } from './Header.types';
import { HeaderAvatar, HeaderWrapper, Left, Right, HamburgerButton } from './Header.styles';


export default function Header({ onMenuClick, username = "Marina Kim", avatarUrl = "https://randomuser.me/api/portraits/women/31.jpg" }: HeaderProps) {
  const { mode, toggle } = useThemeMode();
  // console.log('Header rendered with mode:', mode);
  return (
    <HeaderWrapper>
      <Left>
        {/* 모바일 햄버거 버튼 (PC에서 숨김) */}
        <HamburgerButton
          aria-label="사이드바 열기"
          onClick={onMenuClick}
        >
          <FiMenu size={20} />
        </HamburgerButton>
      </Left>
      <Right>
        <HeaderAvatar src={avatarUrl} fallback={username[0]} size={32} />
        <Text variant="body" as="span" color="#FFFFFF">
          {username}
        </Text>
        <ThemeToggle mode={mode} onToggle={toggle} />
      </Right>
    </HeaderWrapper>
  );
}
