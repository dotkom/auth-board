import { Provider as AuthProvider } from 'next-auth/client';
import { ClientProvider } from 'client/context/ClientContext';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '@dotkomonline/design-system';
import React from 'react';

const theme = {
  colors: {
    primary: '#0070f3',
  },
};

export default function App({ Component, pageProps }) {
  return (
    <>
      <title>Auth-Board</title>
      <link
        href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,700|Source+Serif+Pro|Source+Code+Pro|Material+Icons+Outlined"
        rel="stylesheet"
      />
      <GlobalStyle />
      <AuthProvider session={pageProps.session}>
        <ClientProvider>
          <ThemeProvider theme={theme}>
            <Component {...pageProps} />
          </ThemeProvider>
        </ClientProvider>
      </AuthProvider>
    </>
  );
}
