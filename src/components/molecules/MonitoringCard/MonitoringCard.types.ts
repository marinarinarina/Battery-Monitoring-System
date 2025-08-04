export interface MonitoringCardProps {
  cameraId: string;
  location: string;
  videoSrc: string;
  vibration: number;
  noise: number;
  heat: number;
  cellTemperature: number;
  isWarning?: boolean;
  isCritical?: boolean;
}