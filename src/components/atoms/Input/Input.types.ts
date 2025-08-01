export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  type?: 'text' | 'number' | 'password' | 'search' | 'email';
  error?: boolean;
  errorMessage?: string;
}
