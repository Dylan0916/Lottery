import '../styles/globals.css';

import { useEffect } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import Layout from '@/components/Layout';
import { reducer } from '@/store';

const store = createStore(reducer);

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');

    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
