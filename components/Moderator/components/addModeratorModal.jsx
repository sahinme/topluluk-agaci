import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import ComboBox from '../../AutoComplete';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import CancelIcon from '@material-ui/icons/Cancel';
import Avatar from '@material-ui/core/Avatar';
import { Button } from '@material-ui/core';
import DeleteCommentPop from '../../CommentList/components/deleteCommentPop';
import Link from 'next/link';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 53;
  const left = 53;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  }
}));

export default function AddModeratorModal(props) {
  const { open, onClose, selectedUser, onChange, onSubmit } = props;

  const classes = useStyles();

  const [modalStyle] = React.useState(getModalStyle);

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <p className="info_text_modal">
        Sadece topluluğa üyen olan kullanıcılar moderatör atanabilir.{' '}
      </p>
      <ComboBox
        labelField="username"
        options={props.options}
        placeholder="Tüm üyeler"
        user={true}
        className="com_users"
        onChange={onChange}
      />
      {selectedUser && (
        <Link href="/u/[username]" as={`/u/${selectedUser.username}`}>
          <ListItem className="add_mod_list_item">
            <ListItemAvatar>
              <Avatar src={selectedUser.profileImg}></Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={selectedUser.username}
              secondary={`Toplam sallamalar: ${selectedUser.postCount}`}
            />
          </ListItem>
        </Link>
      )}
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button
          className="modal_action"
          variant="contained"
          color="primary"
          disabled={!selectedUser}
          onClick={onSubmit}
          startIcon={<SupervisorAccountIcon />}
        >
          İstek gönder
        </Button>
        <Button
          className="modal_action"
          variant="contained"
          color="secondary"
          onClick={onClose}
          startIcon={<CancelIcon />}
        >
          Boşver
        </Button>
      </div>
    </div>
  );

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      {body}
    </Modal>
  );
}
