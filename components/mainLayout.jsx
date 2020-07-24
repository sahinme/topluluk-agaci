import React, { useState, useEffect } from 'react';
import Head from 'next/head';

import EmailIcon from '@material-ui/icons/Email';
import Loader from './Loader';
//import PrimarySearchAppBar from "./Header";
import { connect } from 'react-redux';
import SendSuggestionModal from './sendSuggestionModal';
import { sendSuggestRequest } from '../lib/users/actions';
import HeaderExample from './Examples/header';
import { logOut } from '../lib/auth/actions';
import { readLocalStorage } from '../lib/helpers';

function MainLayout(props) {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState(null);
  const [email, setEmail] = useState(null);
  const { loader } = props;

  useEffect(() => {
    const user = readLocalStorage('user');
    if (user && user.username === 'saymer') {
      props.logOut();
    }
  }, []);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = () => {
    const payload = { content: text, email };
    props.sendSuggest(payload);
    setOpen(false);
  };

  return (
    <div>
      <Head>
        <title>Hep Beraber Sallıyoruz | Saalla</title>
        <meta
          name="description"
          content="Saalla, insanların ilgi alanlarına göre sallayabildikleri topluluk ağıdır. İlgilendiğiniz toplulukları bulun ve çevrimiçi bir topluluğun parçası olun!"
        />
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <HeaderExample />
      {loader.loading && <Loader />}
      {props.children}
      <div className="icon-bar">
        <a onClick={() => setOpen(!open)} className="facebook">
          <EmailIcon />
        </a>
      </div>
      <SendSuggestionModal
        onChange={handleChange}
        onChangeEmail={handleChangeEmail}
        onSubmit={handleSubmit}
        text={text}
        open={open}
        onClose={() => setOpen(false)}
      />
    </div>
  );
}

const mapStateToProps = (state) => ({
  loader: state.loader
});

const mapDispatchToProps = (dispatch) => ({
  sendSuggest: (payload) => dispatch(sendSuggestRequest(payload)),
  logOut: () => dispatch(logOut())
});

export default connect(mapStateToProps, mapDispatchToProps)(MainLayout);
