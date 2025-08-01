export interface AvatarProps {
  src?: string;               // 프로필 이미지 URL
  alt?: string;               // 이미지 대체 텍스트
  size?: number;              // 정사각형 가로/세로 크기(px)
  fallback?: string;          // 이미지 없을 때 대체 텍스트 
  className?: string;
}
