import styled, { css } from 'styled-components';
import type { DividerProps } from './Divider.types';

const horizontalStyle = css<DividerProps>`
  width: 100%;
  height: 1px;
  margin: ${({ margin }) => margin || '16px 0'};
  background-color: ${({ color, theme }) => color || theme.colors.border};
`;

const verticalStyle = css<DividerProps>`
  width: 1px;
  height: 100%;
  margin: ${({ margin }) => margin || '0 16px'};
  background-color: ${({ color, theme }) => color || theme.colors.border};
`;

export const StyledDivider = styled.div<DividerProps>`
  ${({ orientation = 'horizontal' }) =>
    orientation === 'horizontal' ? horizontalStyle : verticalStyle};
  /* 모바일에서 세로 구분선일 경우 자동 숨김 */
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile - 1}px) {
    ${({ orientation }) =>
      orientation === 'vertical' &&
      css`
        display: none;
      `}
  }
`;
