export type SensorStatus = 'normal' | 'warning' | 'critical';

export interface SensorCardProps {
  location: string; 
  vibration: { value: number; status: SensorStatus };
  noise: { value: number; status: SensorStatus };
  heat: { value: number; status: SensorStatus };
  cellTemperature: { value: number; status: SensorStatus };
}

