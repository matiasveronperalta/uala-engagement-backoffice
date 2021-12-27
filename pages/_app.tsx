import type { AppProps } from 'next/app';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import '../styles/styles.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#3564FD',
    },
  },
  typography: {
    fontFamily: 'Public Sans',
    button: {
      textTransform: 'none',
      containedPrimary: {
        '&:hover': {
          backgroundColor: '#0030b7',
        },
      },
    },
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
