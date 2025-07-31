import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: typeof import('./theme').theme.colors;
    font: typeof import('./theme').theme.font;
    spacing: typeof import('./theme').theme.spacing;
    radius: typeof import('./theme').theme.radius;
    shadow: typeof import('./theme').theme.shadow;
  }
}
