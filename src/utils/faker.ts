export const LOCATIONS = [
  '원료 준비 구역', '전해액 저장 탱크', '셀 로딩', '주입 노즐 및 헤드',
  '정량 주입 컨트롤 패널', '압력 및 누수 테스트 구역', '셀 씰링 및 캡핑',
  '청정 및 오염 방지 구역', '알람 및 모니터링 스테이션', '폐액 수집 및 처리 구역',
] as const;


export type LocationType = (typeof LOCATIONS)[number];