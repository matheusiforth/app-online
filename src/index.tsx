import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react'
import { AppRoutes } from './AppRoutes';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ChakraProvider>
    {/* <React.StrictMode> */}
      <AppRoutes />
    {/* </React.StrictMode> */}
  </ChakraProvider>
);

