import type { SensorCardProps } from './SensorCard.types';
import { Wrapper, Location, Grid, ValueBox, Label, Value } from './SensorCard.styles';

export default function SensorCard({
  location,
  vibration,
  noise,
  heat,
  cellTemperature,
}: SensorCardProps) {
  return (
    <Wrapper>
      <Location>{location}</Location>
      <Grid>
        <ValueBox status={vibration.status}>
          <Label>진동 (mm/s)</Label>
          <Value status={vibration.status}>{vibration.value}</Value>
        </ValueBox>
        <ValueBox status={noise.status}>
          <Label>소음 (dBA)</Label>
          <Value status={noise.status}>{noise.value}</Value>
        </ValueBox>
        <ValueBox status={heat.status}>
          <Label>기기 열 (°C)</Label>
          <Value status={heat.status}>{heat.value}</Value>
        </ValueBox>
        <ValueBox status={cellTemperature.status}>
          <Label>셀 온도 (°C)</Label>
          <Value status={cellTemperature.status}>{cellTemperature.value}</Value>
        </ValueBox>
      </Grid>
    </Wrapper>
  );
}
