import '../styles/globals.css';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import Layout from '@/components/Layout';
import { reducer } from '@/store';

const store = createStore(reducer);

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
