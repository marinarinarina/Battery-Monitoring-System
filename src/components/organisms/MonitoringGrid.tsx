import styled from 'styled-components';
import SensorCard from '../molecules/SensorCard/SensorCard';
import type { SensorStatus } from '@/components/molecules/SensorCard/SensorCard.types';

type Sensor = {
  id: string;
  value: string;
  status: SensorStatus; 
};

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet - 1}px) {
    grid-template-columns: 1fr;
  }
`;

export default function MonitoringGrid() {
  // 임시 더미 데이터 4개
  const sensors: Sensor[] = [
    { id: 'A1', value: '2.3', status: 'normal' },
    { id: 'B2', value: '3.7', status: 'warning' },
    { id: 'C3', value: '5.2', status: 'critical' },
    { id: 'D4', value: '1.1', status: 'normal' },
  ];

  return (
    <Grid>
      {sensors.map((sensor) => (
        <SensorCard key={sensor.id} sensorId={sensor.id} value={sensor.value} status={sensor.status} />
      ))}
    </Grid>
  );
}

