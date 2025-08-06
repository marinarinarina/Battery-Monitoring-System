import styled from 'styled-components';

export const LayoutContainer = styled.main`
  padding-top: ${({ theme }) => theme.layout.headerHeight.desktop}px;
  margin-left: 240px;
  min-height: 100vh;
  padding: 32px;
  background: ${({ theme }) => theme.colors.background};
  box-sizing: border-box;
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet - 1}px) {
    margin-left: 0;
    margin-top: ${({ theme }) => theme.layout.headerHeight.mobile}px;
    padding: 16px;
  }
`;