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
import { FiX } from 'react-icons/fi';
import { menus } from '@/utils/menus.types';


export default function Sidebar({ open = true, onClose, activeMenu, onNavigate, as="nav" }: SidebarProps) {
  return (
    <SidebarWrapper as={as} open={open}>
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
