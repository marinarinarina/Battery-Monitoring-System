import { FiMonitor, FiBarChart2, FiList, FiSettings } from 'react-icons/fi';
import type { IconType } from 'react-icons';

export interface AppMenuItem {
  key: string;
  label: string;
  icon: IconType;
  path: string;
}

export const menus: AppMenuItem[] = [
  { key: 'monitor', label: '모니터링', icon: FiMonitor, path: '/monitor' },
  { key: 'dashboard', label: '대시보드', icon: FiBarChart2, path: '/dashboard' },
  { key: 'logs', label: '로그 기록', icon: FiList, path: '/logs' },
  { key: 'settings', label: '설정', icon: FiSettings, path: '/settings' },
];
