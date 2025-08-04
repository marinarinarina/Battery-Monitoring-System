import type { VideoCardProps } from './VideoCard.types';
import { VideoHeader, VideoBox, ErrorBox, CameraId } from './VideoCard.styles';
import { Badge } from '@/components/atoms/Badge/Badge';
import { Button } from '@/components/atoms/Button/Button';
import { LoadingSpinner } from '@/components/atoms/LoadingSpinner/LoadingSpinner';
import { Icon } from '@/components/atoms/Icon/Icon';
import { FiCamera, FiAlertTriangle } from 'react-icons/fi';

export default function VideoCard({
  videoSrc,
  cameraId,
  error,
  loading,
  status = 'live',
  onRetry,
  className,
  children,
}: VideoCardProps) {
  return (
    <>
      <VideoHeader>
        <Icon icon={FiCamera} size={16} aria-label="카메라 아이콘" />
        <CameraId>{cameraId}</CameraId>
        {status === 'live' && <Badge variant="normal">LIVE</Badge>}
        {status === 'offline' && <Badge variant="critical">OFFLINE</Badge>}
      </VideoHeader>
      {error ? (
        <ErrorBox>
          <Icon icon={FiAlertTriangle} size={16} color="#FF4444" aria-label="오류" />
          카메라 오류
          {onRetry && (
            <Button variant="critical" size="small" style={{ marginLeft: 4 }} onClick={onRetry}>
              재시도
            </Button>
          )}
        </ErrorBox>
      ) : (
        <VideoBox>
          {loading ? (
            <LoadingSpinner size={32} aria-label="영상 로딩 중" />
          ) : (
            <video
              src={videoSrc}
              controls
              width="100%"
              style={{
                borderRadius: 0,
                objectFit: 'cover',
                display: 'block',
              }}
            />
          )}
        </VideoBox>
      )}
      {children}
    </>
  );
}
