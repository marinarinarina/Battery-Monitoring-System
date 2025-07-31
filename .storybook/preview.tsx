import type { Preview } from '@storybook/nextjs-vite';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../src/styles/GlobalStyle';
import { theme, themeDark } from '../src/styles/theme'; 
import React from 'react';

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme mode',
    defaultValue: 'light',
    toolbar: {
      icon: 'circlehollow',
      items: ['light', 'dark'],
      showName: true,
    },
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