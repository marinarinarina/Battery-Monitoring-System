import React, { useState, useRef, useEffect } from 'react';
import type { TooltipProps } from './Tooltip.types';
import { TooltipWrapper, TooltipBubble } from './Tooltip.styles';

export const Tooltip = ({
  content,
  children,
  position = 'top',
  delayShow = 300,
  delayHide = 200,
  className,
}: TooltipProps) => {
  const [visible, setVisible] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  const showTooltip = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = window.setTimeout(() => setVisible(true), delayShow);
  };

  const hideTooltip = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = window.setTimeout(() => setVisible(false), delayHide);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <TooltipWrapper
      className={className}
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
      onFocus={showTooltip}
      onBlur={hideTooltip}
      tabIndex={0} // 키보드 포커스 가능하게
      aria-describedby="tooltip-content"
    >
      {children}
      <TooltipBubble
        role="tooltip"
        id="tooltip-content"
        position={position}
        visible={visible}
      >
        {content}
      </TooltipBubble>
    </TooltipWrapper>
  );
};
