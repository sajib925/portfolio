import GlobalStyle  from '../styles/GlobalsStyle.js';

function MyApp({ Component, pageProps }) {
  return (
    <>
    <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp
