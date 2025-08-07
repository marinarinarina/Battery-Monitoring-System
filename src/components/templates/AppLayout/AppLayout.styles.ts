import styled from 'styled-components';
import { HeaderWrapper as BaseHeaderWrapper } from '@/components/organisms/Header/Header.styles';
import { SidebarWrapper as BaseSidebarWrapper } from '@/components/organisms/Sidebar/Sidebar.styles';   


// 모바일에서 Sidebar가 오버레이 될 때 전체를 덮는 반투명한 배경(클릭시 닫힘)
export const Overlay = styled.div<{ visible: boolean }>`
  display: ${({ visible }) => (visible ? 'block' : 'none')};
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(0,0,0,0.2);
  z-index: ${({ theme }) => theme.zIndex.sidebar - 1};
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    display: none;
  }
`;

export const AppGrid = styled.div`
  display: grid;
  grid-template-areas:
    "header header"
    "sidebar main";
  grid-template-columns: 240px 1fr;
  grid-template-rows: ${({ theme }) => theme.layout.headerHeight.desktop}px 1fr;
  min-height: 100vh;
  width: 100vw;
  box-sizing: border-box;
  background: ${({ theme }) => theme.colors.background};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet - 1}px) {
    grid-template-areas:
      "header"
      "main";
    grid-template-columns: 1fr;
    grid-template-rows: ${({ theme }) => theme.layout.headerHeight.mobile}px 1fr;
  }
`;

// 그리드 레이아웃 적용 시 기존 위치 속성은 모두 무시
export const GridHeader = styled(BaseHeaderWrapper)`
  grid-area: header;
  position: static;
  top: auto;
  left: auto;
  right: auto;
  width: auto;
  min-width: 0;
`;

export const GridSidebar = styled(BaseSidebarWrapper)`
  grid-area: sidebar;
  position: sticky;
  top: ${({ theme }) => theme.layout.headerHeight.desktop}px;
  height: calc(100vh - ${({ theme }) => theme.layout.headerHeight.desktop}px);
  left: auto;
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet - 1}px) {
    top: ${({ theme }) => theme.layout.headerHeight.mobile}px;
    position: fixed;
  }
`;
