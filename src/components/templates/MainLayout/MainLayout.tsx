import { LayoutContainer } from './MainLayout.styles';
import type { MainLayoutProps } from './MainLayout.types';


export default function MainLayout({ children }: MainLayoutProps) {
  return <LayoutContainer>{children}</LayoutContainer>;
}
