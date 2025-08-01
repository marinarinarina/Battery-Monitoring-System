export type BadgeVariant = 'normal' | 'warning' | 'critical';

export interface BadgeProps {
  variant?: BadgeVariant;
  children: React.ReactNode;
}
