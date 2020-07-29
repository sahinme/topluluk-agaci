import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import NotificationImportantIcon from '@material-ui/icons/NotificationImportant';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import DrawerExample from './drawer';
import logo from '../logo.png';

import ComboBox from '../AutoComplete';

import { readLocalStorage, isLogged } from '../../lib/helpers';

import { renderImage } from '../ProfileCard';
import { getUnreadsRequest } from '../../lib/messages/actions';
import { searchRequest } from '../../lib/home/actions';
import { getCountRequest } from '../../lib/notifications/actions';
import {
  getUserCommunitiesRequest,
  ofModeratorsRequest
} from '../../lib/community/actions';
import { logOut } from '../../lib/auth/actions';
import { Avatar, Button, Icon } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
      width: '100px'
    }
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto'
    }
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputRoot: {
    color: 'inherit'
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch'
    }
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex'
    }
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
  }
}));

function HeaderExample(props) {
  const {
    getUserCommunities,
    getUnReads,
    ofModerators,
    getUnReadMessages,
    unReads,
    unReadMessages
  } = props;

  const router = useRouter();
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [auth, setAuth] = React.useState({
    data: { token: null, user: null },
    error: null
  });
  const [user, setUser] = React.useState(false);
  const [userQuery, setUserQuery] = React.useState('');

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  useEffect(() => {
    const user = readLocalStorage('user');
    const token = readLocalStorage('token');
    if (user) {
      setUser(user);
    }
    if (user && token) {
      const payload = { data: { user, token }, error: null };
      setAuth(payload);
    }
    getUserCommunities();
    getUnReads();
    getUnReadMessages();
    user && user.isModerator && ofModerators();
  }, []);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  const handleSearchChange = (values) => {
    if (values) {
      values.type === 'community'
        ? router.push(`/t/${values.name}`)
        : router.push(`/u/${values.name}`);
    } else {
      return;
    }
  };

  const delayedQuery = useRef(_.debounce((q) => props.search({ text: q }), 500))
    .current;
  const onSearch = (e) => {
    setUserQuery(e.target.value);
    delayedQuery(e.target.value);
  };

  const onCreateCommunity = () => {
    if (!isLogged()) {
      router.push('/giris-yap');
    } else {
      router.push('/topluluk-olustur');
    }
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={() => router.push(`/p/${user.username}`)}>
        Profil
      </MenuItem>
      <MenuItem onClick={props.logOut}>Çıkış</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      {auth.data.token ? (
        <span>
          <MenuItem onClick={() => router.push('/chat')}>
            <IconButton aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={unReadMessages} color="secondary">
                <MailIcon />
              </Badge>
            </IconButton>
            <p>Mesajlar</p>
          </MenuItem>
          <MenuItem onClick={() => router.push(`/bildirimler`)}>
            <IconButton aria-label="show 11 new notifications" color="inherit">
              <Badge badgeContent={unReads && unReads.count} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <p>Bildirimler</p>
          </MenuItem>
          <MenuItem onClick={() => router.push(`/p/${user.username}`)}>
            <IconButton
              aria-label="account of current user"
              aria-controls="primary-search-account-menu"
              aria-haspopup="true"
              color="inherit"
            >
              <Avatar
                className="header_avatar"
                src={renderImage(user.profileImagePath, user.gender)}
              />
            </IconButton>
            <p>Profil</p>
          </MenuItem>{' '}
          <MenuItem onClick={props.logOut}>
            <IconButton color="inherit">
              <ExitToAppIcon />
            </IconButton>
            <p>Çıkış</p>
          </MenuItem>
        </span>
      ) : (
        <span>
          <MenuItem onClick={() => router.push('/giris-yap')}>
            <IconButton
              aria-label="account of current user"
              aria-controls="primary-search-account-menu"
              aria-haspopup="true"
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <p>Giriş Yap</p>
          </MenuItem>
          <MenuItem onClick={() => router.push('/kaydol')}>
            <IconButton
              aria-label="account of current user"
              aria-controls="primary-search-account-menu"
              aria-haspopup="true"
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <p>Kaydol</p>
          </MenuItem>
        </span>
      )}
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            onClick={handleDrawerOpen}
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
          <Link href="/">
            <img className="mobile_logo" src="/favicon2.png" />
          </Link>
          <Link href="/">
            <img
              style={{ cursor: 'pointer' }}
              className={classes.title}
              src="/saalla-5.png"
            />
          </Link>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <ComboBox
              style={{ width: '100%' }}
              customClasses={{
                root: classes.inputRoot,
                input: classes.inputInput
              }}
              inputProps={{ 'aria-label': 'search' }}
              onSearch={onSearch}
              onChange={handleSearchChange}
              placeholder="ara"
              options={props.searchData || []}
              labelField="name"
            />
          </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <Button
              onClick={onCreateCommunity}
              variant="contained"
              color="primary"
              className={auth.data.token ? 'com_add_but_out' : 'com_add_but'}
            >
              Topluluk Aç
            </Button>
            {auth.data.token ? (
              <span>
                <Link href="/chat" as="/chat">
                  <IconButton
                    //onClick={() => router.push("/chat")}
                    aria-label="show 4 new mails"
                    color="inherit"
                  >
                    <Badge badgeContent={unReadMessages} color="secondary">
                      <MailIcon />
                    </Badge>
                  </IconButton>
                </Link>
                <IconButton
                  onClick={() => router.push('/bildirimler')}
                  aria-label="show 17 new notifications"
                  color="inherit"
                >
                  <Badge
                    badgeContent={unReads && unReads.count}
                    color="secondary"
                  >
                    <NotificationImportantIcon />
                  </Badge>
                </IconButton>
                <IconButton
                  edge="end"
                  aria-label="account of current user"
                  aria-controls={menuId}
                  aria-haspopup="true"
                  onClick={handleProfileMenuOpen}
                  color="inherit"
                >
                  <Avatar
                    className="header_avatar"
                    src={user.profileImagePath}
                  />
                </IconButton>{' '}
              </span>
            ) : (
              <span>
                <Button
                  style={{ marginRight: '0.5rem' }}
                  onClick={() => router.push('/kaydol')}
                  variant="contained"
                  color="secondary"
                >
                  Kaydol
                </Button>
                <Button
                  onClick={() => router.push('/giris-yap')}
                  variant="contained"
                  color="primary"
                >
                  Giriş yap
                </Button>
              </span>
            )}
          </div>
          <div className={classes.sectionMobile}>
            <Button
              onClick={onCreateCommunity}
              variant="contained"
              color="primary"
              style={{
                height: '35px',
                marginTop: '5px',
                fontSize: '10px',
                fontWeight: 500
              }}
              //className="com_add"
            >
              Topluluk Aç
            </Button>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <Badge
                badgeContent={unReads && unReadMessages + unReads.count}
                color="secondary"
              >
                <MoreIcon />
              </Badge>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
      <DrawerExample
        userCommunities={props.userCommunities}
        ofModerators={props.ownCommunities}
        handleDrawerClose={handleDrawerClose}
        isOpen={drawerOpen}
      />
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  logOut: () => dispatch(logOut()),
  getUserCommunities: () => dispatch(getUserCommunitiesRequest()),
  ofModerators: () => dispatch(ofModeratorsRequest()),
  getUnReads: () => dispatch(getCountRequest()),
  getUnReadMessages: () => dispatch(getUnreadsRequest()),
  search: (payload) => dispatch(searchRequest(payload))
});

const mapStateToProps = (state) => ({
  //auth: state.auth,
  userCommunities: state.userCommunities.data,
  ownCommunities: state.ofModerators.data,
  unReads: state.unReads.data,
  unReadMessages: state.unReadMessages.unreads,
  searchData: state.home.search
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderExample);
