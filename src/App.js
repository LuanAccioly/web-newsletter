import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './styles/theme';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Routes } from './routes';

function App() {
  const router = createBrowserRouter(Routes);
  return (
    <ChakraProvider theme={theme}>
      <RouterProvider router={router} />
    </ChakraProvider>
  );
}

export default App;
