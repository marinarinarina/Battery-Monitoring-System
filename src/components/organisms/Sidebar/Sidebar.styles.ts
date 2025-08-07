import styled from 'styled-components';
import { Button } from '@/components/atoms/Button/Button';
import { Icon } from '@/components/atoms/Icon/Icon';
import { Text } from '@/components/atoms/Text/Text';

export const SidebarIcon = styled(Icon)`
  margin-right: 12px;
  display: inline-block;
  vertical-align: middle;
`;

export const SidebarWrapper = styled.nav<{ open?: boolean }>`
  width: 240px;
  background: ${({ theme }) => theme.colors.sidebar};
  color: ${({ theme }) => theme.colors.textSecondary};
  padding: 32px 0 32px 0;
  height: 100vh;
  position: static;
  top: 0;
  z-index: ${({ theme }) => theme.zIndex.sidebar};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet - 1}px) {
    position: fixed;
    left: 0;
    top: 0;
    height: 100vh;
    width: 72vw;
    max-width: 320px;
    padding: 0;
    box-shadow: 2px 0 16px rgba(0,0,0,0.12);
    background: ${({ theme }) => theme.colors.sidebar};
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-110%)')};
    transition: transform 0.25s cubic-bezier(0.68, -0.55, 0.27, 1.55);
    display: block;
  }
`;

export const MenuList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 2px;
  margin: 0;
  padding: 0;
  list-style: none;
  justify-content: center;  
  align-items: stretch;    
  height: 100%;   
  width: 100%;
`;

export const MenuItemButton = styled(Button).attrs(({ theme }) => ({
  variant: 'custom',
  hoverColor: theme.colors.sidebarHover,
}))<{ active?: boolean }>`
  width: 100%;
  justify-content: flex-start;
  padding: 10px 12px;
  margin-bottom: 2px;
  border-radius: 8px;
  font-size: ${({ theme }) => theme.font.size.body};
  font-weight: ${({ theme }) => theme.font.weight.regular};
  background: ${({ theme, active }) =>
    active ? `${theme.colors.primary}11` : 'none'};
  color: ${({ theme, active }) =>
    active ? theme.colors.primary : theme.colors.textPrimary};
  transition: background 0.2s, color 0.2s;
`;

export const CloseButton = styled(Button).attrs(({ theme }) => ({
  variant: 'custom',
  color: 'none',
  hoverColor: theme.colors.sidebarHover,
}))`
  position: absolute;
  top: 0;
  right: 0;
  font-size: 24px;
  border: none;
  color: inherit;
  display: none;
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet - 1}px) {
    display: block;
  }
`;

export const SidebarTitle = styled(Text).attrs({
  as: 'h2',
  variant: 'heading2',
})`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 40px 0 24px 0;
  letter-spacing: 0.2px;
`;