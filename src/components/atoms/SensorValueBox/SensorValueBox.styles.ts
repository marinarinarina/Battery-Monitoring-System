import styled from 'styled-components';
import type { SensorStatus } from './SensorValueBox.types';

export const Wrapper = styled.section<{ status: SensorStatus }>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing.unit / 2}px;
  padding: ${({ theme }) => theme.spacing.unit * 1.5}px;
  background: ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.radius.input}px;
  border: 1.5px solid
    ${({ theme, status }) =>
      status === 'normal'
        ? theme.colors.accent
        : status === 'warning'
        ? theme.colors.warning
        : theme.colors.critical};
`;

export const Label = styled.span`
  font-size: ${({ theme }) => theme.font.size.caption};
  color: ${({ theme }) => theme.colors.textSecondary};
  font-weight: ${({ theme }) => theme.font.weight.medium};
`;

export const ValueRow = styled.span`
  display: flex;
  align-items: baseline;
  gap: 0.3em;
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

export const Unit = styled.span`
  font-size: ${({ theme }) => theme.font.size.caption};
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-left: 0.25em;
`;

export const StatusIcon = styled.span<{ status: SensorStatus }>`
  display: inline-block;
  font-size: 1.1em;
  margin-right: 0.25em;
  aria-hidden: true;
  color: ${({ theme, status }) =>
    status === 'normal'
      ? theme.colors.accent
      : status === 'warning'
      ? theme.colors.warning
      : theme.colors.critical};
`;