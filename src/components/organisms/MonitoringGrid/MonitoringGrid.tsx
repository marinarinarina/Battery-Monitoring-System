
import MonitoringCard from '@/components/molecules/MonitoringCard/MonitoringCard';
import { MonitoringGridProps } from './MonitoringGrid.types';
import { Grid } from './MonitoringGrid.styles';

export default function MonitoringGrid({ cards }: MonitoringGridProps) {
  return (
    <Grid>
      {cards.map((card, idx) => (
        <MonitoringCard key={card.cameraId + idx} {...card} />
      ))}
    </Grid>
  );
}

