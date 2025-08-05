export interface SidebarProps {
  open?: boolean; // 모바일 토글
  onClose?: () => void;
  activeMenu?: string;
  onNavigate?: (menu: string) => void;
}