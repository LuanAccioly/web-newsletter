import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './styles/theme';
import { Newsletter } from './Pages/Newsletter';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Newsletter />
    </ChakraProvider>
  );
}

export default App;
