import React from 'react';

interface DefaultPageProps {
  pageName: string;
}

export default function DefaultPage({ pageName }: DefaultPageProps) {
  return (
    <div style={{
      minHeight: '60vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <span>{pageName} 페이지는 현재 준비 중입니다. 🛠️</span>
    </div>
  );
}
