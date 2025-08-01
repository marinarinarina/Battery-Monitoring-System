import styled from 'styled-components';
import { ReactNode } from 'react';

const Container = styled.div`
  display: flex;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.background};
`;

const Sidebar = styled.nav`
  width: 240px;
  background-color: ${({ theme }) => theme.colors.backgroundDark};
  color: ${({ theme }) => theme.colors.textPrimary};
  padding: 16px;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile - 1}px) {
    display: none; /* 모바일에서 사이드바 숨김 */
  }
`;

const Header = styled.header`
  height: 64px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  display: flex;
  align-items: center;
  padding: 0 24px;
  font-size: ${({ theme }) => theme.font.size.h2};
`;

const ContentWrapper = styled.main`
  flex-grow: 1;
  padding: 24px;
  overflow-y: auto;
`;

interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <>
      <Header>Monitoring System</Header>
      <Container>
        <Sidebar>
          {/* 네비게이션 메뉴 */}
          <div>Dashboard</div>
          <div>Monitoring</div>
          <div>Logs</div>
          <div>Settings</div>
        </Sidebar>
        <ContentWrapper>{children}</ContentWrapper>
      </Container>
    </>
  );
}
