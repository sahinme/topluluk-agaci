import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import MainLayout from '../components/mainLayout';
import { Button } from '@material-ui/core';
import Link from 'next/link';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  paper: {
    textAlign: 'center',
    color: theme.palette.text.secondary,
    padding: '3rem'
  },
  image: {
    width: '100%',
    maxWidth: '100%',
    height: 'auto'
  },
  item_grid: {
    padding: '0px !important'
  }
}));

export default function AboutUs() {
  const classes = useStyles();

  return (
    <MainLayout>
      <div className={classes.root}>
        <Grid
          style={{ height: '100vh', backgroundColor: 'white' }}
          container
          spacing={3}
        >
          <Grid style={{ padding: 0 }} item sm={12} xs={12}>
            <Paper className={classes.paper}>
              <img src="/topluluk.jpg" className={classes.image} />
            </Paper>
          </Grid>
          <Grid style={{ padding: 0 }} item sm={12} xs={12}>
            <Paper className={classes.paper}>
              <img src="/topluluk-2.jpg" className={classes.image} />
            </Paper>
          </Grid>
          <Grid style={{ padding: 0 }} item sm={12} xs={12}>
            <Paper className={classes.paper}>
              <img src="/moderator.jpg" className={classes.image} />
            </Paper>
          </Grid>
          <Grid style={{ padding: 0 }} item sm={12} xs={12}>
            <Paper className={classes.paper}>
              <img src="/puan.jpg" className={classes.image} />
            </Paper>
          </Grid>
          <Grid style={{ padding: 0 }} item sm={12} xs={12}>
            <Paper className={classes.paper}>
              <Link href="/kaydol">
                <Button variant="contained" color="primary">
                  Keşfetmeye Başla
                </Button>
              </Link>
              <Link href="/">
                <img
                  src="/logo2.png"
                  style={{ width: '100px', cursor: 'pointer' }}
                />
              </Link>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </MainLayout>
  );
}
