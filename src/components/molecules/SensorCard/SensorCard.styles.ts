import styled from 'styled-components';
import type { SensorStatus } from './SensorCard.types';

export const Card = styled.section`
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.radius.card};
  box-shadow: ${({ theme }) => theme.shadow.card};
  padding: ${({ theme }) => theme.spacing.cardPadding.desktop}px;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.unit}px;
`;

export const SensorId = styled.h2`
  font-size: ${({ theme }) => theme.font.size.body};
  color: ${({ theme }) => theme.colors.textPrimary};
`;

export const SensorValue = styled.span<{ status: SensorStatus }>`
  font-size: ${({ theme }) => theme.font.size.h1};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  color: ${({ theme, status }) =>
    status === 'normal'
      ? theme.colors.accent
      : status === 'warning'
      ? theme.colors.warning
      : theme.colors.critical};
`;
