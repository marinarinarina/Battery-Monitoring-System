import type { SensorCardProps } from './SensorCard.types';
import { Card, SensorId, SensorValue } from './SensorCard.styles';

export default function SensorCard({ sensorId, value, status }: SensorCardProps) {
  return (
    <Card aria-label={`Sensor ${sensorId} status`}>
      <SensorId>{sensorId}</SensorId>
      <SensorValue status={status}>{value}</SensorValue>
    </Card>
  );
}
