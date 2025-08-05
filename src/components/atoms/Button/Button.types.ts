export type ButtonVariant = 'primary' | 'secondary' | 'critical' | 'disabled' | 'custom';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
  color?: string; // custom 버튼 배경색       
  hoverColor?: string;    
  textColor?: string;  // custom 버튼 텍스트 색상  
}
