import styled from 'styled-components';
import type { SensorStatus } from './SensorCard.types';

export const Wrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Location = styled.h3`
  font-size: ${({ theme }) => theme.font.size.body};
  color: ${({ theme }) => theme.colors.textPrimary};
  font-weight: ${({ theme }) => theme.font.weight.medium};
  margin-bottom: 8px;
`;

export const Grid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 10px;
`;

export const ValueBox = styled.div<{ status: SensorStatus }>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px;
  border-radius: 8px;
`;

export const Label = styled.span`
  font-size: ${({ theme }) => theme.font.size.caption};
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 2px;
`;

export const Value = styled.span<{ status: SensorStatus }>`
  font-size: ${({ theme }) => theme.font.size.h2};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  color: ${({ theme, status }) =>
    status === 'normal'
      ? theme.colors.accent
      : status === 'warning'
      ? theme.colors.warning
      : theme.colors.critical};
`;

