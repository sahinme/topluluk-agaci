import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import VideoCallOutlinedIcon from '@material-ui/icons/VideoCallOutlined';
import LinkOutlinedIcon from '@material-ui/icons/LinkOutlined';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import BorderColorTwoToneIcon from '@material-ui/icons/BorderColorTwoTone';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { IconButton, Divider } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import Link from 'next/link';
import { isLogged } from '../lib/helpers';
import { useRouter } from 'next/router';

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
    boxShadow: '0 0 0 1px rgba(0,0,0,.15), 0 2px 3px rgba(0,0,0,.2) !important',
    cursor: 'pointer'
  },
  button: {
    margin: theme.spacing(1)
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
}));

export default function CreatePostBox({ user, slug }) {
  const classes = useStyles();
  const router = useRouter();

  const handleClick = () => {
    isLogged()
      ? router.push(`/salla?is=${slug || ''}`)
      : router.push('/giris-yap');
  };
  return (
    <Card onClick={handleClick} className={classes.root}>
      <CardContent>
        <IconButton
          className="salla_pen"
          text
          aria-label="delete" /* className={classes.margin} */
        >
          <BorderColorTwoToneIcon fontSize="default" />{' '}
          <span className="salla_text">sallamaya başla</span>
        </IconButton>
      </CardContent>
      <Divider />
      <CardActions
        className="salla_box_actions"
        style={{ justifyContent: 'space-between' }}
      >
        <Button
          className="salla_box_button"
          size="large"
          startIcon={<ImageOutlinedIcon style={{ color: 'blue' }} />}
        >
          Resim
        </Button>
        <Button
          size="large"
          className="salla_box_button"
          startIcon={<VideoCallOutlinedIcon style={{ color: '#ef7e37' }} />}
        >
          Video
        </Button>
        <Button
          size="large"
          className="salla_box_button"
          startIcon={<LinkOutlinedIcon style={{ color: '#2de117' }} />}
        >
          Link
        </Button>
      </CardActions>
    </Card>
  );
}
