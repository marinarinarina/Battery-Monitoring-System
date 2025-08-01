export interface TooltipProps {
  content: React.ReactNode;       // 툴팁에 표시할 내용
  children: React.ReactNode;      // 툴팁을 감싸는 요소
  position?: 'top' | 'right' | 'bottom' | 'left'; // 툴팁 위치
  delayShow?: number;             // 마우스 올렸을 때 딜레이 (ms)
  delayHide?: number;             // 마우스 뗐을 때 딜레이 (ms)
  className?: string;
}
