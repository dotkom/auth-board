import { Provider as AuthProvider } from 'next-auth/client';
import { ClientProvider } from 'client/context/ClientContext';
import { createGlobalStyle } from 'styled-components';
import React from 'react';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    primary: '#0070f3',
  },
});

const ExtendedGlobalStyle = createGlobalStyle`
  html, body, #__next {
    height: 100%;
  }

  h1, h2, h3 {
    font-family: Poppins;
  }


  h1 {
    font-size: xx-large;
  }

  h2 {
    font-size: x-large;
  }

`;

export default function App({ Component, pageProps }) {
  return (
    <>
      <title>Auth-Board</title>
      <link
        href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,700|Source+Serif+Pro|Source+Code+Pro|Material+Icons+Outlined|Poppins:ital,wght@0,300;0,400;0,500:0,700;1,400;1,700|"
        rel="stylesheet"
      />
      <ExtendedGlobalStyle />
      <AuthProvider session={pageProps.session}>
        <ClientProvider>
          <ChakraProvider theme={theme}>
            <Component {...pageProps} />
          </ChakraProvider>
        </ClientProvider>
      </AuthProvider>
    </>
  );
}
