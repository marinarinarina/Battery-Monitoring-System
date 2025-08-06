import AppLayout from '@/components/templates/AppLayout/AppLayout';
import MainLayout from '@/components/templates/MainLayout/MainLayout';
import MonitoringGrid from '@/components/organisms/MonitoringGrid/MonitoringGrid';
import { useEffect, useState } from 'react';

// Faker 데이터 생성 - 나중에 utils/faker.ts로 분리하기
const LOCATIONS = [
  '원료 준비 구역', '전해액 저장 탱크', '셀 로딩', '주입 노즐 및 헤드',
  '정량 주입 컨트롤 패널', '압력 및 누수 테스트 구역', '셀 씰링 및 캡핑',
  '청정 및 오염 방지 구역', '알람 및 모니터링 스테이션', '폐액 수집 및 처리 구역',
];

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
