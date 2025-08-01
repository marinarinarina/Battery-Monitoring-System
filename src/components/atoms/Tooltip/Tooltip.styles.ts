import styled from 'styled-components';

export const TooltipWrapper = styled.span`
  position: relative;
  display: inline-block;
`;

export const TooltipBubble = styled.div<{ position: string; visible: boolean }>`
  position: absolute;
  padding: 8px 12px;
  background-color: ${({ theme }) => theme.colors.textPrimary};
  color: ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.radius.input}px;
  font-size: ${({ theme }) => theme.font.size.caption};
  white-space: nowrap;
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  pointer-events: none;
  transition: opacity 0.2s ease-in-out;
  z-index: ${({ theme }) => theme.zIndex.tooltip};

  ${({ position }) => {
    switch (position) {
      case 'top':
        return `
          bottom: 100%;
          left: 50%;
          transform: translateX(-50%);
          margin-bottom: 8px;
        `;
      case 'right':
        return `
          top: 50%;
          left: 100%;
          transform: translateY(-50%);
          margin-left: 8px;
        `;
      case 'bottom':
        return `
          top: 100%;
          left: 50%;
          transform: translateX(-50%);
          margin-top: 8px;
        `;
      case 'left':
      default:
        return `
          top: 50%;
          right: 100%;
          transform: translateY(-50%);
          margin-right: 8px;
        `;
    }
  }}
`;
