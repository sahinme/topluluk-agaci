import React from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import logo from '../logo.png';
import planetLogo from '../../pages/t/planet.png';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex'
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  hide: {
    display: 'none'
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end'
  },
  content: {
    flexGrow: 1,
    //padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: -drawerWidth
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: 0
  },
  avatarImg: {
    backgroundPosition: '50%',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100%',
    borderRadius: '24px',
    boxSizing: 'border-box',
    flex: 'none',
    height: '32px',
    width: '32px',
    margin: '0 8px'
  }
}));

export default function DrawerExample({
  handleDrawerClose,
  isOpen,
  userCommunities,
  ofModerators
}) {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={isOpen}
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div className={classes.drawerHeader}>
          <Link href="/">
            <img
              style={{ width: '7rem', marginRight: '1rem' }}
              src="/saalla-red.png"
              alt=""
            />
          </Link>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          <Link href="/">
            <ListItem button key="home">
              <ListItemText primary="Ana Sayfa" />
            </ListItem>
          </Link>
          <b style={{ marginLeft: '1rem' }}>Toplulukların</b>
          <Divider style={{ marginTop: '1rem' }} />
          {userCommunities &&
            userCommunities.length > 0 &&
            userCommunities.map((item, index) => (
              <span key={item.slug}>
                <Link href="/t/[community]" as={`/t/${item.slug}`}>
                  <ListItem button key={item.name}>
                    <img
                      className={classes.avatarImg}
                      src={item.logoPath || planetLogo}
                      alt=""
                    />
                    <ListItemText primary={item.name} />
                  </ListItem>
                </Link>
              </span>
            ))}
        </List>
        <Divider />
        <List>
          <b style={{ marginLeft: '1rem' }}>Yönettiğin Topluluklar</b>
          <Divider style={{ marginTop: '1rem' }} />
          {ofModerators &&
            ofModerators.length > 0 &&
            ofModerators.map((item, index) => (
              <span key={item.slug}>
                <Link href="/moderator/[slug]" as={`/moderator/${item.slug}`}>
                  <ListItem button key={item.name}>
                    <img
                      className={classes.avatarImg}
                      src={item.logoPath || planetLogo}
                      alt=""
                    />
                    <ListItemText primary={item.name} />
                  </ListItem>
                </Link>
              </span>
            ))}
        </List>
      </Drawer>
    </>
  );
}
