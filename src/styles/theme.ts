import { extendTheme } from '@chakra-ui/react';
import { Button } from './components';

export const theme = extendTheme({
  components: {
    Button,
  },
  breakpoints: {
    sm: '30em',
    md: '48em',
    lg: '62em',
    xl: '80em',
    '2xl': '96em',
  },
  colors: {
    black: '',
    white: '',
    blackAlpha: {
      50: 'rgba(35, 35, 35, 0.6)',
    },
  },
  fontWeights: {
    thin: 100,
  },
});
