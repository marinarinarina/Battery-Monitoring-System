import { LayoutContainer } from './MainLayout.styles';
import type { MainLayoutProps } from './MainLayout.types';


export default function MainLayout({ children, as="main" }: MainLayoutProps) {
  return <LayoutContainer as={as}>{children}</LayoutContainer>;
}
