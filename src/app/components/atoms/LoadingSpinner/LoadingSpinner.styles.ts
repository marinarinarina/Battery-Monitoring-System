import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div<{ size: number; color: string }>`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  border: ${({ size }) => size / 8}px solid ${({ theme }) => theme.colors.border};
  border-top-color: ${({ color }) => color};
  border-radius: 50%;
  animation: ${rotate} 1s linear infinite;
`;
