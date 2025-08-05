import {
  SidebarIcon,
  SidebarTitle,
  SidebarWrapper,
  MenuList,
  MenuItemButton,
  CloseButton,
} from './Sidebar.styles';
import { SidebarProps } from './Sidebar.types';
import { Icon } from '@/components/atoms/Icon/Icon';
import { Text } from '@/components/atoms/Text/Text';
import { FiMonitor, FiBarChart2, FiList, FiSettings, FiX } from 'react-icons/fi';


const menus = [
  { key: 'dashboard', label: '대시보드', icon: FiBarChart2 },
  { key: 'monitor', label: '모니터링', icon: FiMonitor },
  { key: 'logs', label: '로그 기록', icon: FiList },
  { key: 'settings', label: '설정', icon: FiSettings },
];

export default function Sidebar({ open = true, onClose, activeMenu, onNavigate }: SidebarProps) {
  return (
    <SidebarWrapper open={open}>
      <SidebarTitle>실시간 공정 모니터링</SidebarTitle>
      {/* 모바일 닫기버튼 */}
      {onClose && (
        <CloseButton variant="primary" size="small" aria-label="사이드바 닫기" onClick={onClose}>
          <Icon icon={FiX} size={24} />
        </CloseButton>
      )}
      <MenuList>
        {menus.map(menu => (
          <li key={menu.key}>
            <MenuItemButton
              size="medium"
              active={activeMenu === menu.key}
              aria-current={activeMenu === menu.key ? 'page' : undefined}
              onClick={() => onNavigate?.(menu.key)}
            >
              <SidebarIcon icon={menu.icon} size={16} />
              <Text variant="body" as="span">{menu.label}</Text>
            </MenuItemButton>
          </li>
        ))}
      </MenuList>
      {/* ...하단 기타 */}
    </SidebarWrapper>
  );
}
