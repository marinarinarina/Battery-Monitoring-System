import { ReactNode } from 'react';
import type React from 'react';

export interface MainLayoutProps {
  children: ReactNode;
  as?: React.ElementType;
}