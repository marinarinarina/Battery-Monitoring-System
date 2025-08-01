export type SensorStatus = 'normal' | 'warning' | 'critical';

export interface SensorCardProps {
  sensorId: string;
  value: string;
  status: SensorStatus;
}
