import { DefaultTheme, Theme } from '@react-navigation/native';

export const theme: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'transparent',
  },
};
