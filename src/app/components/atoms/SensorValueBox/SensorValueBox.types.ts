export type SensorStatus = 'normal' | 'warning' | 'critical';

export interface SensorValueBoxProps {
  label: string;
  value: string;
  unit?: string;
  status: SensorStatus;
  icon?: React.ReactNode; // 커스텀 아이콘 삽입 용도
  // 확장: width, height, className 등 props 추가 가능
}