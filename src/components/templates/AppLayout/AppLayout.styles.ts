import styled from 'styled-components';

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