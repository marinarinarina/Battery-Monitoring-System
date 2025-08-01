import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: typeof import('./theme').theme.colors;
    sizes: typeof import('./theme').theme.sizes;
    font: typeof import('./theme').theme.font;
    breakpoints: typeof import('./theme').theme.breakpoints;
    layout: typeof import('./theme').theme.layout;
    zIndex: typeof import('./theme').theme.zIndex;  
    transition: typeof import('./theme').theme.transition;
    spacing: typeof import('./theme').theme.spacing;
    radius: typeof import('./theme').theme.radius;
    shadow: typeof import('./theme').theme.shadow;
  }
}
