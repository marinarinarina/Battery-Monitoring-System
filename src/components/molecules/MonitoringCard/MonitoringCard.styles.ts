import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 0;
  background: ${({ theme }) => theme.colors.card};
  border-radius: ${({ theme }) => theme.radius.card}px;
  box-shadow: ${({ theme }) => theme.shadow.card};
  overflow: hidden;
  aspect-ratio: 4/5;
  padding: ${({ theme }) => theme.spacing.unit}px;
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet - 1}px) {
    aspect-ratio: auto;
    min-height: 320px;
  }
`;