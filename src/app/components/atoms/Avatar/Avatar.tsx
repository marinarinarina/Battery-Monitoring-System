import type { AvatarProps } from './Avatar.types';
import { AvatarWrapper, AvatarImage } from './Avatar.styles';

export const Avatar = ({
  src,
  alt = 'avatar',
  size = 40,
  fallback,
  className,
}: AvatarProps) => {
  const renderFallback = () => {
    if (!fallback) return null;
    // 이니셜 (예: 이름 첫 글자) 추출 가능
    if (fallback.length > 2) return fallback.slice(0, 2).toUpperCase();
    return fallback.toUpperCase();
  };

  return (
    <AvatarWrapper size={size} className={className} role="img" aria-label={alt}>
      {src ? <AvatarImage src={src} alt={alt} /> : renderFallback()}
    </AvatarWrapper>
  );
};
