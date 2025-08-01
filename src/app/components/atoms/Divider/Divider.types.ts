export interface DividerProps {
  orientation?: 'horizontal' | 'vertical';  // 구분선 방향, 기본 horizontal
  margin?: string;                         // 외부 여백, CSS 단위
  color?: string;                         // 구분선 색상 (theme.colors 활용 권장)
  className?: string;
}
