import App from 'next/app';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-next-router'
import withRedux from 'next-redux-wrapper';
import makeStore from '../lib/store';
import MainLayout from '../components/mainLayout';

import "react-image-lightbox/style.css";
import "../components/Loader/index.css";
import '../components/ShareButton/index.css'
import '../components/SocialCard/index.css'
import 'mdbreact/dist/css/mdb.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './custom.css';
import './profile.css'
import './candles.scss'

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
    return { pageProps };
  }

  render() {
    const { Component, pageProps, store } = this.props;
    return (
      <Provider store={store}>
        <ConnectedRouter>
          <MainLayout>
            <Component {...pageProps} />
          </MainLayout>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default withRedux(makeStore)(MyApp);
