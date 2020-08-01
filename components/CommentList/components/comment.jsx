import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import SendIcon from '@material-ui/icons/Send';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import CommentOutlinedIcon from '@material-ui/icons/CommentOutlined';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import { TextField, Button } from '@material-ui/core';
import Reply from './reply';
import {
  createReplyRequest,
  likeCommentRequest,
  unlikeCommentRequest,
  deleteCommentRequest,
  deleteCommentModeratorRequest
} from '../../../lib/comment/actions';
import { connect } from 'react-redux';
import { readLocalStorage, isLogged, urlify } from '../../../lib/helpers';
import DeleteCommentPop from './deleteCommentPop';
import moment from 'moment';

const useStyles = makeStyles((theme) => ({
  likeIcon: {
    marginLeft: '0.5rem',
    borderRadius: '2px',
    display: 'inline-block',
    padding: '4px',
    cursor: 'pointer'
  },
  commentIcon: {
    borderRadius: '2px',
    display: 'inline-block',
    padding: '4px'
  },
  deleteIcon: {
    borderRadius: '2px',
    display: 'inline-block',
    padding: '4px',
    cursor: 'pointer',
    marginLeft: '0.5rem'
  }
}));

function Comment(props) {
  const classes = useStyles();
  const [isOpen, setOpen] = useState(false);
  const [text, setText] = useState('');
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [readMore, setReadMore] = React.useState(false);

  const router = useRouter();

  const { item, slug } = props;

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = () => {
    const token = readLocalStorage('token');
    const user = readLocalStorage('user');
    if (!token || !user) {
      router.push('/giris-yap');
      return;
    } else {
      const { createReply, postId, item } = props;
      const values = { postId, commentId: item.id, content: text, slug };
      createReply(values);
      document.getElementById('comment').value = '';
      setOpen(false);
    }
  };

  const onLikeComment = () => {
    if (!isLogged()) {
      router.push('/giris-yap');
    }
    const values = { postId: props.postId, commentId: item.id, slug };
    const { likeComment } = props;
    likeComment(values);
  };

  const onUnlike = () => {
    if (!isLogged()) {
      router.push('/giris-yap');
    }
    const values = { postId: props.postId, commentId: item.id, slug };
    const { unLikeComment } = props;
    unLikeComment(values);
  };

  const onDeleteComment = () => {
    const values = { commentId: item.id, postId: props.postId, slug };
    const { deleteComment } = props;
    deleteComment(values);
    handleClose();
  };

  const onDeleteCommentModerator = () => {
    const values = { commentId: item.id, postId: props.postId, slug };
    const { deleteCommentModerator } = props;
    deleteCommentModerator(values);
    handleClose();
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const renderDeleteIcon = () => {
    const { auth, post } = props;
    let isOk = false;
    if (
      auth &&
      auth.user &&
      auth.user.comMods &&
      auth.user.comMods.length > 0
    ) {
      auth.user.comMods.map((x) => {
        if (x === post.community.slug) {
          isOk = true;
        }
      });
    }
    //setModerator(isOk);
    return isOk;
  };

  const handleDeleteOperation = () => {
    const { auth } = props;
    if (
      renderDeleteIcon() &&
      auth &&
      auth.user &&
      auth.user.username !== item.commentUserInfo.userName
    ) {
      onDeleteCommentModerator();
    } else {
      onDeleteComment();
    }
  };

  const handleContent = (comment) => {
    if (comment.length > 130) {
      return (
        <span>
          <p className="comment_rep_text">{comment.slice(0, 130)}</p>
          <span onClick={() => setReadMore(true)} className="comment_read_more">
            devamı
          </span>
        </span>
      );
    } else {
      return <p className="comment_rep_text"> {comment} </p>;
    }
  };

  const handleContentLong = (comment) => {
    return (
      <span>
        <p className="comment_rep_text">{comment}</p>
        <span onClick={() => setReadMore(false)} className="comment_less_more">
          daha az
        </span>
      </span>
    );
  };

  const renderNameTime = (user, time) => {
    return (
      <div className="reply_info">
        <Link href="/u/[username]" as={`/u/${user}`}>
          <a> {user} </a>
        </Link>
        <span className="posted_by"> {moment(time).fromNow()} </span>
      </div>
    );
  };

  return (
    <React.Fragment key={item.id}>
      <ListItem className="comment_item" alignItems="flex-start">
        <ListItemAvatar>
          <Avatar src={item.commentUserInfo.profileImagePath} />
        </ListItemAvatar>
        <ListItemText
          primary={renderNameTime(
            item.commentUserInfo && item.commentUserInfo.userName,
            item.createdDateTime
          )}
          secondary={
            readMore
              ? handleContentLong(item.content)
              : handleContent(item.content)
          }
        />
      </ListItem>
      <div className="comment_icon_container">
        <CommentOutlinedIcon className={classes.commentIcon} />
        <a onClick={() => setOpen(!isOpen)}>
          <p className="reply_text">{isOpen ? 'boşver' : 'salla'}</p>
        </a>
        <FavoriteBorderOutlinedIcon
          className={
            item.isLoggedLiked
              ? 'checked_comment_like_icon'
              : 'comment_like_icon'
          }
          onClick={item.isLoggedLiked ? onUnlike : onLikeComment}
        />
        <p className="reply_text">{item.likeCount}</p>
        {(item.isLoggedComment || renderDeleteIcon()) && (
          <div>
            <DeleteOutlineIcon
              onClick={handleClick}
              className="comment_delete_icon"
            />
            <DeleteCommentPop
              onSubmit={handleDeleteOperation}
              onClose={handleClose}
              anchorEl={anchorEl}
            />
          </div>
        )}
        {(item.isLoggedComment || renderDeleteIcon()) && (
          <p className="reply_text">sil</p>
        )}
      </div>
      {isOpen && (
        <div>
          <TextField
            id="comment"
            label="Bu gönderiye salla"
            multiline
            name="comment"
            onChange={handleChange}
            rows={4}
            variant="outlined"
            style={{ width: '100%', borderRadius: '10px' }}
          />
          <Button
            className="comment_button"
            variant="contained"
            color="primary"
            disabled={!text}
            onClick={handleSubmit}
            endIcon={<SendIcon />}
          >
            Salla Gitsin
          </Button>
        </div>
      )}
      {item &&
        item.replies &&
        item.replies
          .sort(function (a, b) {
            var key1 = a.createdDateTime;
            var key2 = b.createdDateTime;

            if (key1 < key2) {
              return -1;
            } else if (key1 == key2) {
              return 0;
            } else {
              return 1;
            }
          })
          .map((reply, index) => (
            <Reply
              time={reply.createdDateTime}
              slug={slug}
              key={reply.id}
              item={reply}
              postId={props.postId}
              commentId={item.id}
            />
          ))}
      <Divider variant="inset" component="li" />
    </React.Fragment>
  );
}

const mapDispatchToProps = (dispatch) => ({
  createReply: (payload) => dispatch(createReplyRequest(payload)),
  likeComment: (payload) => dispatch(likeCommentRequest(payload)),
  unLikeComment: (payload) => dispatch(unlikeCommentRequest(payload)),
  deleteComment: (payload) => dispatch(deleteCommentRequest(payload)),
  deleteCommentModerator: (payload) =>
    dispatch(deleteCommentModeratorRequest(payload))
});

const mapStateToProps = (state) => ({
  auth: state.auth.data,
  post: state.postDetail.data
});

export default connect(mapStateToProps, mapDispatchToProps)(Comment);
