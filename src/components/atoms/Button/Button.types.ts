export type ButtonVariant = 'primary' | 'secondary' | 'critical' | 'disabled';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
}
