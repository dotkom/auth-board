import { Provider as AuthProvider } from 'next-auth/client'
import { ClientProvider } from 'client/context/ClientContext';
import { createGlobalStyle, ThemeProvider } from 'styled-components'

const GlobalStyle = createGlobalStyle`

  body, html, #__next {
    height: 100%;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

const theme = {
  colors: {
    primary: '#0070f3',
  },
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <title>Auth-Board</title>
      <GlobalStyle />
      <AuthProvider session={pageProps.session}>
        <ClientProvider >
          <ThemeProvider theme={theme}>
            <Component {...pageProps} />
          </ThemeProvider>
        </ClientProvider>
      </AuthProvider>
    </>
  )
}
