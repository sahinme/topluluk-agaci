import App from 'next/app';
import { Provider } from 'react-redux';
import Router from "next/router";
import { ConnectedRouter } from 'connected-next-router'
import withRedux from 'next-redux-wrapper';
import makeStore from '../lib/store';
import Index from "./index"


import "react-image-lightbox/style.css";
import "../components/Loader/index.css";
import '../components/ShareButton/index.css'
import '../components/SocialCard/index.css'
import 'mdbreact/dist/css/mdb.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import './custom.css';
import './profile.css'
import '../components/Compose/Compose.css';
import '../components/ConversationList/ConversationList.css';
import '../components/ConversationListItem/ConversationListItem.css';
import '../components/ConversationSearch/ConversationSearch.css'
import '../components/Message/Message.css'
import '../components/MessageList/MessageList.css'
import '../components/Messenger/Messenger.css'
import '../components/Toolbar/Toolbar.css'
import '../components/ToolbarButton/ToolbarButton.css'
import '../components/exUserCard.scss'
import { readLocalStorage } from '../lib/helpers';




class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
    return { pageProps };
  }

  render() {
    const { Component, pageProps, store, router } = this.props;
    const token = readLocalStorage('token')
    let allowed = true;
    if ((router.pathname.startsWith("/topluluk-olustur") || router.pathname.startsWith('/salla')) && !token) {
      allowed = false;
    }
    return (
      <Provider store={store}>
        <ConnectedRouter>
          {!allowed ? <Index {...pageProps} /> : <Component {...pageProps} />}
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default withRedux(makeStore)(MyApp);
