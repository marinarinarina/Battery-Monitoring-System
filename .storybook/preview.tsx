import type { Preview } from '@storybook/nextjs-vite';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../src/styles/GlobalStyle';
import { theme, themeDark } from '../src/styles/theme'; 

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: '다크/라이트 모드 전환',
    defaultValue: 'light',
    toolbar: {
      icon: 'circlehollow',
      items: [
        { value: 'light', title: '라이트' },
        { value: 'dark', title: '다크' },
      ],
      showName: true,
      dynamicTitle: true,
    },
  },
  initialGlobals: {
    theme: 'light',
  },
};

export const decorators = [
  (Story, context) => {
    const isDark = context.globals.theme === 'dark';
    return (
      <ThemeProvider theme={isDark ? themeDark : theme}>
        <GlobalStyle />
          <Story />
      </ThemeProvider>
    );
  },
];

export const parameters: Preview['parameters'] = {
  layout: 'centered',
  controls: {
    expanded: true,
  },
  a11y: {
    test: 'todo'
  },
};