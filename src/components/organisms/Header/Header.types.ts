import type React from 'react';

export interface HeaderProps {
  onMenuClick?: () => void;      // 모바일용 햄버거 콜백
  username?: string;             // 우측 사용자 이름
  avatarUrl?: string;            // 프로필 사진
  as?: React.ElementType;
}