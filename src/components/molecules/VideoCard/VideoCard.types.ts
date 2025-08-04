export type VideoStatus = 'live' | 'offline';

export interface VideoCardProps {
  videoSrc: string;                  // 영상 파일 경로
  cameraId: string;                  // 카메라/장비 ID
  error?: boolean;                   // 오류 상태
  loading?: boolean;                 // 영상 로딩 중
  status?: VideoStatus;              // 카메라 상태는 'live' 또는 'offline'
  onRetry?: () => void;              // 오류 시 재시도 콜백
  className?: string;
  children?: React.ReactNode;        // 비디오카드와 함께 렌더링할 자식 요소(센서카드)
}