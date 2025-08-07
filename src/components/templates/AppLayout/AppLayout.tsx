'use client';

// import { usePathname, useRouter } from 'next/navigation';
import React, { useState } from 'react';
import Header from '@/components/organisms/Header/Header';
import Sidebar from '@/components/organisms/Sidebar/Sidebar';
import MainLayout from '@/components/templates/MainLayout/MainLayout';
import { Overlay, AppGrid, GridHeader, GridSidebar } from './AppLayout.styles';
// import { menus } from '@/utils/menus.types';

// const pathname = usePathname();
// const router = useRouter();

/* 현재 경로에 해당하는 menu.key 추출 (ex: /logs/abc -> logs)
const activeMenu = menus.find(menu => pathname.startsWith(menu.path))?.key || '';
const handleNavigate = (menuKey: string) => {
  const menu = menus.find(m => m.key === menuKey);
  if (menu) router.push(menu.path);
};
*/
export default function AppLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // PC(태블릿 이상)에서는 항상 열림, 모바일에서는 상태에 따라 열림/닫힘
  const handleMenuClick = () => setSidebarOpen(true);
  const handleSidebarClose = () => setSidebarOpen(false);

  return (
    <AppGrid>
      <GridHeader>
        <Header as="div" onMenuClick={handleMenuClick} />
      </GridHeader>
      <GridSidebar open={sidebarOpen}>
        <Sidebar
          // activeMenu={activeMenu}
          // onNavigate={handleNavigate}
          as="div"
          open={sidebarOpen}
          onClose={handleSidebarClose}
        />
      </GridSidebar>
      {/* 모바일 사이드바 오픈 시 오버레이 적용 */}
      <Overlay visible={sidebarOpen} onClick={handleSidebarClose} />
      <MainLayout>{children}</MainLayout>
    </AppGrid>
  );
}
