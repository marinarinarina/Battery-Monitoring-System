import styled from 'styled-components';
import { Avatar } from '@/components/atoms/Avatar/Avatar';
import { Button } from '@/components/atoms/Button/Button';

export const HeaderAvatar = styled(Avatar)`
  margin-left: 10px;
  display: inline-block;
  vertical-align: middle;
`;

export const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100vw;
  min-width: 0;
  height: ${({ theme }) => theme.layout.headerHeight.desktop}px;
  background: ${({ theme }) => theme.colors.header};
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 ${({ theme }) => theme.layout.sidePadding.desktop}px;
  z-index: ${({ theme }) => theme.zIndex.header};
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet - 1}px) {
    height: ${({ theme }) => theme.layout.headerHeight.mobile}px;
    padding: 0 ${({ theme }) => theme.layout.sidePadding.mobile}px;
  }
`;

export const Left = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const HamburgerButton = styled(Button)`
  display: none;
  background: none;
  color: inherit;
  border: none;
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet - 1}px) {
    display: flex;
    align-items: center;
    margin-right: ${({ theme }) => theme.spacing.unit}px;
  }
`;
