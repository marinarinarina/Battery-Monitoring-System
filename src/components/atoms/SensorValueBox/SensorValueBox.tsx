import { Wrapper, Label, ValueRow, Value, Unit, StatusIcon } from './SensorValueBox.styles';
import type { SensorValueBoxProps } from './SensorValueBox.types';

const statusIconMap = {
  normal: '🟢',    
  warning: '🟡',
  critical: '🔴',
};
// label: 진동 (mm/s), 소음 (dBA), 기기 열 (°C), 셀 온도 (°C)
export function SensorValueBox({ label, value, unit, status, icon }: SensorValueBoxProps) {
  return (
    <Wrapper status={status} aria-live={status === 'critical' ? 'assertive' : 'polite'}>
      <Label>{label}</Label>
      <ValueRow>
        <StatusIcon
          status={status}
          aria-label={
            status === 'normal'
              ? '정상'
              : status === 'warning'
              ? '경고'
              : '위험'
          }
        >
          {icon || statusIconMap[status]}
        </StatusIcon>
        <Value status={status}>{value}</Value>
        {unit && <Unit>{unit}</Unit>}
      </ValueRow>
    </Wrapper>
  );
}
