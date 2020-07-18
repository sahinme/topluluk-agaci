import React, { useRef, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import clsx from "clsx";
import _ from "lodash";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import NotificationImportantIcon from "@material-ui/icons/NotificationImportant";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Menu from "@material-ui/core/Menu";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MoreIcon from "@material-ui/icons/MoreVert";
import MenuItem from "@material-ui/core/MenuItem";
import Badge from "@material-ui/core/Badge";
import { Button, Avatar, Icon } from "@material-ui/core";
import { readLocalStorage, isLogged } from "../../lib/helpers";
import { logOut } from "../../lib/auth/actions";
import ComboBox from "../AutoComplete";
import {
  getUserCommunitiesRequest,
  ofModeratorsRequest,
} from "../../lib/community/actions";
import MainDrawer from "../Drawer";
import { getCountRequest } from "../../lib/notifications/actions";
import MailIcon from "@material-ui/icons/Mail";
import { connect } from "react-redux";
import { renderImage } from "../ProfileCard";
import { getUnreadsRequest } from "../../lib/messages/actions";
import { searchRequest } from "../../lib/home/actions";
import logo from "../logo.png";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  grow: {
    flexGrow: 1,
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
    width: "7rem",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: "#a3989826",
    "&:hover": {
      backgroundColor: "#59535326",
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "40%",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

function PrimarySearchAppBar(props) {
  const { unReads, unReadMessages } = props;

  const classes = useStyles();
  const router = useRouter();
  const [open, setOpen] = React.useState(false);
  const [auth, setAuth] = React.useState({
    data: { token: null, user: null },
    error: null,
  });
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [user, setUser] = React.useState(false);
  const [userQuery, setUserQuery] = React.useState("");

  useEffect(() => {
    const user = readLocalStorage("user");
    const token = readLocalStorage("token");
    if (user) {
      setUser(user);
    }
    if (user && token) {
      const payload = { data: { user, token }, error: null };
      setAuth(payload);
    }
    const {
      getUserCommunities,
      getUnReads,
      ofModerators,
      getUnReadMessages,
    } = props;
    getUserCommunities();
    getUnReads();
    getUnReadMessages();
    user && user.isModerator && ofModerators();
  }, []);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

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

  const handleSelectChange = (community) => {
    community && router.push(`/t/${community.slug}`);
  };

  const handleSearchChange = (values) => {
    if (values) {
      values.type === "community"
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
      router.push("/giris-yap");
    } else {
      router.push("/topluluk-olustur");
    }
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={() => router.push(`/p/${user.username}`)}>
        Profil
      </MenuItem>
      <MenuItem onClick={props.logOut}>Çıkış</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      {auth.data.token ? (
        <span>
          <MenuItem onClick={() => router.push("/chat")}>
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
          </MenuItem>{" "}
          <MenuItem onClick={props.logOut}>
            <IconButton color="inherit">
              <ExitToAppIcon />
            </IconButton>
            <p>Çıkış</p>
          </MenuItem>
        </span>
      ) : (
        <span>
          <MenuItem onClick={() => router.push("/giris-yap")}>
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
          <MenuItem onClick={() => router.push("/kaydol")}>
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
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Link href="/">
            <img className={classes.title} src={logo} />
          </Link>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <ComboBox
              style={{ width: "100%" }}
              onSearch={onSearch}
              onChange={handleSearchChange}
              placeholder="ara"
              options={props.searchData || []}
              labelField="name"
            />
          </div>

          <div className={classes.grow} />

          <div className={classes.sectionDesktop}>
            {/*  <Button
              onClick={onCreateCommunity}
              variant="contained"
              color="primary"
              style={{ height: "35px", marginTop: "5px" }}
              //className="com_add"
              endIcon={<Icon>send</Icon>}
            >
              Topluluk Aç
            </Button> */}
            {auth.data.token ? (
              <React.Fragment>
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
                  onClick={() => router.push("/bildirimler")}
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
                </IconButton>{" "}
              </React.Fragment>
            ) : (
              <React.Fragment>
                <Button
                  style={{ marginRight: "0.5rem" }}
                  onClick={() => router.push("/kaydol")}
                  variant="contained"
                  color="secondary"
                >
                  Kaydol
                </Button>
                <Button
                  onClick={() => router.push("/giris-yap")}
                  variant="contained"
                  color="primary"
                >
                  Giriş yap
                </Button>
              </React.Fragment>
            )}
          </div>
          <div className={classes.sectionMobile}>
            {/*  <Button
              onClick={onCreateCommunity}
              variant="contained"
              color="primary"
              style={{ height: "35px", marginTop: "5px" }}
              //className="com_add"
              endIcon={<Icon>send</Icon>}
            >
              Topluluk Aç
            </Button> */}
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
      <MainDrawer
        userCommunities={props.userCommunities}
        ofModerators={props.ownCommunities}
        open={open}
        onClose={handleDrawerClose}
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
  search: (payload) => dispatch(searchRequest(payload)),
});

const mapStateToProps = (state) => ({
  //auth: state.auth,
  userCommunities: state.userCommunities.data,
  ownCommunities: state.ofModerators.data,
  unReads: state.unReads.data,
  unReadMessages: state.unReadMessages.unreads,
  searchData: state.home.search,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PrimarySearchAppBar);
