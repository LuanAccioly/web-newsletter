import { extendTheme } from '@chakra-ui/react';

const config = {
  initialColorMode: 'light',
  useSystemColorMode: true,
  disableTransitionOnChange: false,
};

const colors = {
  background: {
    light: '#F0F2F5',
    dark: '#0f1112',
  },
};

const theme = extendTheme({
  styles: {
    global: (props) => ({
      body: {
        transition: 'background-color .3s linear',
        color: props.colorMode === 'dark' ? 'white.primary' : 'black.secondary',
        backgroundColor:
          props.colorMode === 'dark' ? 'background.dark' : 'background.light',
      },
    }),
  },
  config,
  colors,
});

export default theme;
