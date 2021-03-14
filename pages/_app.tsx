import withRedux from 'next-redux-wrapper';
import App from 'next/app';
// import { useEffect } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import Layout from '@/components/Layout';
import { reducer } from '@/store';

const store = createStore(reducer);
const makeStore = () => store;

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    const pageProps = Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : {};

    // Anything returned here can be access by the client
    return { pageProps };
  }

  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');

    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }

  render() {
    // Information that was returned  from 'getInitialProps' are stored in the props i.e. pageProps
    const { Component, pageProps } = this.props;

    return (
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    );
  }
}

// function MyApp({ Component, pageProps }) {
//   useEffect(() => {
//     // Remove the server-side injected CSS.
//     const jssStyles = document.querySelector('#jss-server-side');

//     if (jssStyles) {
//       jssStyles.parentElement.removeChild(jssStyles);
//     }
//   }, []);

//   return (
//     <Provider store={store}>
//       <Layout>
//         <Component {...pageProps} />
//       </Layout>
//     </Provider>
//   );
// }

export default withRedux(makeStore)(MyApp);
