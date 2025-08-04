import type { MonitoringCardProps } from './MonitoringCard.types';
import { Wrapper } from './MonitoringCard.styles';
import VideoCard from '../VideoCard/VideoCard';
import SensorCard from '../SensorCard/SensorCard';

function getStatus({ value, isWarning, isCritical }: { value: number; isWarning?: boolean; isCritical?: boolean }) {
  if (isCritical) return 'critical';
  if (isWarning) return 'warning';
  return 'normal';
}

export default function MonitoringCard({
  cameraId,
  location,
  videoSrc,
  vibration,
  noise,
  heat,
  cellTemperature,
  isWarning,
  isCritical,
}: MonitoringCardProps) {
  return (
    <Wrapper>
      <VideoCard
        videoSrc={videoSrc}
        cameraId={cameraId}
        // 나중에 status, error 등 전달
      />
      <SensorCard
        location={location}
        vibration={{ value: vibration, status: getStatus({ value: vibration, isWarning, isCritical }) }}
        noise={{ value: noise, status: getStatus({ value: noise, isWarning, isCritical }) }}
        heat={{ value: heat, status: getStatus({ value: heat, isWarning, isCritical }) }}
        cellTemperature={{ value: cellTemperature, status: getStatus({ value: cellTemperature, isWarning, isCritical }) }}
      />
    </Wrapper>
  );
}