import React, { useState } from 'react';
import Header from '@/components/organisms/Header/Header';
import Sidebar from '@/components/organisms/Sidebar/Sidebar';
import MainLayout from '@/components/templates/MainLayout/MainLayout';
import { Overlay } from './AppLayout.styles';


export default function AppLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // PC(태블릿 이상)에서는 항상 열림, 모바일에서는 상태에 따라 열림/닫힘
  const handleMenuClick = () => setSidebarOpen(true);
  const handleSidebarClose = () => setSidebarOpen(false);

  return (
    <>
      <Header onMenuClick={handleMenuClick} />
      <Sidebar
        open={sidebarOpen}
        onClose={handleSidebarClose}
        // activeMenu, onNavigate 등 필요시 추가
      />
      {/* 모바일 사이드바 오픈 시 오버레이 적용 */}
      <Overlay visible={sidebarOpen} onClick={handleSidebarClose} />
      <MainLayout>{children}</MainLayout>
    </>
  );
}
