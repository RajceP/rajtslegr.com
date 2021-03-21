import { ThemeProvider } from 'next-themes';
import { AppProps } from 'next/app';
import '../styles/index.css';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider defaultTheme="light" attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default App;
