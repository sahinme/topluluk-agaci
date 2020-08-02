import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { connect } from 'react-redux';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Alert } from 'reactstrap';
import { loginRequest } from '../lib/auth/actions';
import { setErrorRequest } from '../lib/error/actions';
//import Candles from "../components/candles";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

function SignIn(props) {
  useEffect(() => {
    const listener = (event) => {
      if (event.code === 'Enter' || event.code === 'NumpadEnter') {
        handleSubmit();
      }
    };
    document.addEventListener('keydown', listener);
    return () => {
      document.removeEventListener('keydown', listener);
      props.clearErrors();
    };
  }, []);

  const [values, setValue] = useState({
    username: null,
    password: null
  });

  const handleChange = ({ currentTarget: input }) => {
    const currentValues = values;
    currentValues[input.id] = input.value;
    setValue(currentValues);
  };

  const classes = useStyles();

  const handleSubmit = async () => {
    const { login } = props;
    login(values.username, values.password);
  };

  return (
    <Container component="main" maxWidth="xs">
      {/* <Candles /> */}
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Giriş Yap
        </Typography>
        {props.errors.loginError ? (
          <Alert color="danger">Kullanıcı adı veya şifre yanlış!</Alert>
        ) : null}

        <Grid style={{ marginTop: 10 }} container spacing={2}>
          <Grid item xs={12}>
            <TextField
              onChange={handleChange}
              variant="outlined"
              required
              fullWidth
              id="username"
              label="Kullanici Adi"
              name="username"
              autoComplete="username"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              onChange={handleChange}
              variant="outlined"
              required
              fullWidth
              name="password"
              label="Şifre"
              type="password"
              id="password"
              autoComplete="current-password"
            />
          </Grid>
        </Grid>
        <Button
          type="submit"
          onClick={handleSubmit}
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          Giriş Yap
        </Button>
        <Grid container justify="flex-end">
          <Grid item xs>
            <Link href="/sifremi-unuttum">
              <a>Şifreyi mi unuttun?</a>
            </Link>
          </Grid>
          <Grid item>
            <Link href="/kaydol">
              <a>Hesabın yok mu? Hemen kaydol</a>
            </Link>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
}
/* 
SignIn.getInitialProps = async ({ isServer, store }) => {
  await store.execSagaTasks(isServer, (dispatch) => {
    dispatch(getCategoriesRequest());
  });
  return {};
}; */

const mapDispatchToProps = (dispatch) => ({
  login: (username, password) => dispatch(loginRequest(username, password)),
  clearErrors: (errorType) => dispatch(setErrorRequest(errorType))
});

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
