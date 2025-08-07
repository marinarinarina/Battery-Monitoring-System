'use client';

import AppLayout from '@/components/templates/AppLayout/AppLayout';
import MonitoringGrid from '@/components/organisms/MonitoringGrid/MonitoringGrid';
import { useEffect, useState } from 'react';
import { LOCATIONS } from '@/utils/faker.types';


// 임시 더미데이터 생성 함수 (여기선 랜덤, 실무는 faker 라이브러리)
function createFakeCard(idx: number) {
  const random = (min: number, max: number) => (Math.random() * (max - min) + min).toFixed(1);
  const statusRand = Math.random();
  return {
    cameraId: `CAMERA-${String(idx + 1).padStart(3, '0')}`,
    videoSrc: `videos/CAMERA-${String(idx + 1).padStart(3, '0')}.mp4`,
    location: LOCATIONS[idx % LOCATIONS.length],
    vibration: parseFloat(random(1, 7)),
    noise: parseFloat(random(50, 100)),
    heat: parseFloat(random(20, 80)),
    cellTemperature: parseFloat(random(20, 80)),
    isWarning: statusRand > 0.7 && statusRand < 0.9,
    isCritical: statusRand >= 0.9,
  };
}

export default function MonitorPage() {
  const [cards, setCards] = useState<Array<any>>([]);

  useEffect(() => {
    // 9개 카드 더미데이터 생성
    setCards(Array.from({ length: 9 }).map((_, i) => createFakeCard(i)));
  }, []);

  return (
    <AppLayout>
        <MonitoringGrid cards={cards} />
    </AppLayout>
  );
}
