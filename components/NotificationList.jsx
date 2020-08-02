import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import { Button } from '@material-ui/core';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import CancelIcon from '@material-ui/icons/Cancel';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import Avatar from '@material-ui/core/Avatar';
import { Divider, ListSubheader } from '@material-ui/core';
import 'moment/locale/tr';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import moment from 'moment';
import { useRouter } from 'next/router';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    paddingBottom: '0',
    paddingTop: '0',
    border: '1px double #00000057 !important;'
  }
}));

export default function NotificationList(props) {
  moment.locale();

  const classes = useStyles();
  const router = useRouter();
  const { items, handleModReq } = props;

  const renderModRequest = (item) => {
    return (
      <>
        <ListItem
          style={{ backgroundColor: !item.isRead && '#cacacaa6' }}
          //onClick={() => router.push(`/${item.targetName}`)}
          //button
        >
          <ListItemIcon>
            <NotificationsNoneIcon
              fontSize="large"
              style={{ color: '#40eb3d' }}
            />
          </ListItemIcon>
          <ListItemAvatar>
            <Avatar src={item.imgPath} />
          </ListItemAvatar>
          <ListItemText
            primary={item.content}
            secondary={moment(item.createdDate).fromNow()}
          />
        </ListItem>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Button
            style={{ backgroundColor: '#28B351' }}
            className="modal_action"
            disabled={item.isRead}
            variant="contained"
            color="primary"
            onClick={() =>
              handleModReq({ comSlug: item.targetName.substring(3), value: 20 })
            }
            startIcon={<CheckCircleOutlineIcon />}
          >
            Onayla
          </Button>
          <Button
            className="modal_action"
            variant="contained"
            color="secondary"
            disabled={item.isRead}
            onClick={() =>
              handleModReq({ comSlug: item.targetName.substring(3), value: 30 })
            }
            startIcon={<CancelIcon />}
          >
            Reddet
          </Button>
        </div>
      </>
    );
  };

  return (
    <List
      subheader={
        <React.Fragment>
          <ListSubheader>Bildirimlerin</ListSubheader>
          <Divider />
        </React.Fragment>
      }
      className={classes.root}
    >
      {items &&
        items.length > 0 &&
        items.map((item) => {
          return item.type === 80 ? (
            renderModRequest(item)
          ) : (
            <React.Fragment>
              <ListItem
                style={{ backgroundColor: !item.isRead && '#cacacaa6' }}
                onClick={() =>
                  router.push('/[community]/[post]', `/${item.targetName}`)
                }
                button
              >
                <ListItemIcon>
                  <NotificationsNoneIcon
                    fontSize="large"
                    style={{ color: '#40eb3d' }}
                  />
                </ListItemIcon>
                <ListItemAvatar>
                  <Avatar src={item.imgPath} />
                </ListItemAvatar>
                <ListItemText
                  primary={
                    item.content.length > 70
                      ? item.content.slice(0, 70) + '...'
                      : item.content
                  }
                  secondary={
                    item.targetName.split('/')[0] +
                    ': ' +
                    moment(item.createdDate).fromNow()
                  }
                />
              </ListItem>
              <Divider />
            </React.Fragment>
          );
        })}
    </List>
  );
}
