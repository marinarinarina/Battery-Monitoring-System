import styled from 'styled-components';

export const LayoutContainer = styled.main`
  margin-top: ${({ theme }) => theme.layout.headerHeight.desktop}px;
  margin-left: 240px;
  min-height: calc(100vh - ${({ theme }) => theme.layout.headerHeight.desktop}px);
  padding: ${({ theme }) => theme.layout.sidePadding.desktop}px;
  background: ${({ theme }) => theme.colors.background};
  box-sizing: border-box;
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet - 1}px) {
    margin-left: 0;
    margin-top: ${({ theme }) => theme.layout.headerHeight.mobile}px;
    padding: 16px;
  }
`;