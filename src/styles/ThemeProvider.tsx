import { ChakraProvider } from '@chakra-ui/react';
import { theme } from './theme';

type ThemeProviderProps = {
  children: React.ReactNode;
};

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
};

export { ThemeProvider };
