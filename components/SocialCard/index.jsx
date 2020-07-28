import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import ReactPlayer from 'react-player';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import moment from 'moment';
import 'moment/locale/tr';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Divider } from '@material-ui/core';
import { MDBIcon, MDBTooltip } from 'mdbreact';
import Skeleton from '@material-ui/lab/Skeleton';
import LinkPreview from '../LinkPreview';
import { readLocalStorage } from '../../lib/helpers';
import PostMenu from '../postMenu';
import {
  deletePostRequest,
  deleteModeratorRequest
} from '../../lib/posts/actions';
import { connect } from 'react-redux';
import DeleteCommentPop from '../CommentList/components/deleteCommentPop';
import ImageModal from '../ImageModal';
import ShareButton from '../ShareButton';
import planetLogo from '../../pages/t/planet.png';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex'
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
    backgroundSize: 'contain'
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: 'rotate(180deg)'
  },
  postImage: {
    borderRadius: '20px',
    maxHeight: '512px',
    maxWidth: '100%'
  },
  leftSide: {
    width: '48px',
    backgroundColor: '#edebebcc'
  }
}));

function SocialCard(props) {
  const classes = useStyles();
  const router = useRouter();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [popupAnchor, setPopupAnchor] = React.useState(null);
  const [isOpen, setOpen] = React.useState(false);

  moment.locale();

  const {
    id,
    img,
    createdDate,
    content,
    pSlug,
    contentType,
    community,
    comments,
    user,
    linkUrl,
    voteCount,
    userPostVote,
    onVote,
    profilePosts,
    isModerator,
    auth,
    pageNumber,
    isPinneable,
    handlePin,
    isPinned
  } = props;

  const handleVote = (value) => {
    const values = { postId: id, value, pageNumber };
    onVote(values);
  };

  const onPinClick = (value) => {
    const payload = { slug: pSlug, value, pageNumber, cSlug: community.slug };
    handlePin(payload);
  };

  const renderMedia = () => {
    if (contentType == 50) {
      return (
        <div className="linkPreview_container">
          <LinkPreview url={linkUrl} />
        </div>
      );
    }
    if (contentType == 20) {
      return (
        <div className="player-wrapper">
          <ReactPlayer className="react-player" controls url={img} />
        </div>
      );
    }
    if (contentType == 60) {
      return (
        <div className="player-wrapper">
          <ReactPlayer className="react-player" controls url={linkUrl} />
        </div>
      );
    } else {
      return (
        <div className="imgContainer">
          <img
            onClick={() => setOpen(true)}
            className={classes.postImage}
            src={img}
            alt={contentType === 10 ? pSlug : ''}
          />
          {isOpen && (
            <ImageModal imageUrl={img} onClose={() => setOpen(false)} />
          )}
        </div>
      );
    }
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClosePopup = () => {
    setPopupAnchor(null);
  };

  const onDeleteClick = (event) => {
    setPopupAnchor(event.currentTarget);
  };

  const onDeletePost = () => {
    const { deletePost } = props;
    deletePost({ id });
    setPopupAnchor(false);
  };

  const onDeleteModerator = () => {
    const { moderatorDelete, pageDto } = props;
    const payload = {
      slug: community.slug,
      postId: id,
      pageNumber: pageDto.pageNumber,
      pageSize: pageDto.pageSize
    };
    moderatorDelete(payload);
    setPopupAnchor(null);
    setAnchorEl(null);
  };

  const menuItems = [
    !profilePosts && { title: 'Şikayet Et', onClick: handleClose },
    profilePosts ? { title: 'Sil', onClick: onDeleteClick } : null
  ];

  const moderatorItems = [
    { title: 'Şikayet Et', onClick: handleClose },
    { title: 'Sil', onClick: onDeleteClick }
  ];

  const calculateSallamaCount = (comments) => {
    let count = 0;
    if (comments && comments.length > 0) {
      comments.map((x) => (count += x.replyCount));
      count += comments.length;
    }
    return count;
  };

  return (
    <Card className="post_card">
      <div className={classes.leftSide}>
        <div className="vote_cont">
          <MDBIcon
            className={
              userPostVote && userPostVote.value == 1
                ? 'angle-double-up_checked'
                : 'angle-double-up'
            }
            icon="angle-double-up"
            onClick={() => {
              const token = readLocalStorage('token');
              token
                ? handleVote(userPostVote && userPostVote.value == 1 ? 0 : 1)
                : router.push('/giris-yap');
            }}
          />
          <p className="vote">{voteCount}</p>
          <MDBIcon
            className={
              userPostVote && userPostVote.value == -1
                ? 'angle-double-down_checked'
                : 'angle-double-down'
            }
            icon="angle-double-down"
            onClick={() =>
              handleVote(userPostVote && userPostVote.value == -1 ? 0 : -1)
            }
          />
        </div>
      </div>
      <div style={{ width: '100%', overflow: 'hidden' }}>
        {isPinned && (
          <span
            style={{ marginLeft: '18px', fontWeight: 500 }}
            className="posted_by"
          >
            <MDBIcon
              style={{
                color: 'gray',
                marginRight: '10px'
              }}
              icon="thumbtack"
            />
            Sabitlenmiş Sallama
          </span>
        )}

        <CardHeader
          className="post_card_header"
          style={{ padding: '16px 16px 0 16px' }}
          avatar={
            !id ? (
              <Skeleton
                animation="wave"
                variant="circle"
                width={40}
                height={40}
              />
            ) : (
              <Avatar
                aria-label="recipe"
                src={community.logoPath || planetLogo}
                className={classes.avatar}
              ></Avatar>
            )
          }
          action={
            <div>
              {isPinneable && (
                <MDBTooltip domElement tag="span" material placement="top">
                  <span>
                    <MDBIcon
                      onClick={() => onPinClick(!isPinned)}
                      style={{
                        cursor: 'pointer',
                        color: isPinned ? 'red' : 'gray'
                      }}
                      icon="thumbtack"
                    />
                  </span>
                  <span>{isPinned ? 'Ayır' : 'Sabitle'}</span>
                </MDBTooltip>
              )}
              <IconButton
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={handleClick}
                aria-label="settings"
              >
                <MoreVertIcon />
              </IconButton>
              <PostMenu
                open={Boolean(anchorEl)}
                onClose={handleClose}
                anchorEl={anchorEl}
                onClose={handleClose}
                menuItems={isModerator ? moderatorItems : menuItems}
              />
              <DeleteCommentPop
                onSubmit={isModerator ? onDeleteModerator : onDeletePost}
                onClose={handleClosePopup}
                anchorEl={popupAnchor}
              />
            </div>
          }
          title={
            !id ? (
              <Skeleton
                animation="wave"
                height={10}
                width="80%"
                style={{ marginBottom: 6 }}
              />
            ) : (
              <>
                <Link href={'/t/[community]'} as={`/t/${community.slug}`}>
                  <a>{community.name}</a>
                </Link>
                <small
                  style={{ margin: '4px', fontWeight: 600, fontSize: '92%' }}
                >
                  /
                </small>
                {user && (
                  <Link
                    as={
                      auth && auth.user && auth.user.username == user.userName
                        ? `/p/${user.userName}`
                        : `/u/${user.userName}`
                    }
                    href={
                      auth && auth.user && auth.user.username == user.userName
                        ? `/p/[username]`
                        : `/u/[username]`
                    }
                  >
                    <a style={{ cursor: 'pointer' }}>
                      <span className="posted_by">
                        {'u/' + user.userName + ' ' + 'tarafından'}
                      </span>
                    </a>
                  </Link>
                )}
              </>
            )
          }
          subheader={createdDate && moment(createdDate).fromNow()}
        />
        <Link as={`/${community.slug}/${pSlug}`} href={'/[community]/[post]'}>
          <div className="content_container">
            <CardContent
              className="post_content_area"
              style={{ padding: '5px 16px 16px 25px' }}
            >
              {!id ? (
                <Skeleton
                  animation="wave"
                  variant="rect"
                  className={classes.media}
                />
              ) : (
                <div
                  className="card_post_content"
                  dangerouslySetInnerHTML={{ __html: content }}
                />
              )}
            </CardContent>
            {renderMedia()}
          </div>
        </Link>
        <Divider style={{ margin: '15px 0px 0px 0px' }} />

        <CardActions
          style={{ padding: '0px', paddingLeft: '3.5rem' }}
          disableSpacing
        >
          <Link as={`/${community.slug}/${pSlug}`} href="/[community]/[post]">
            <MDBIcon
              style={{ margin: '0.5rem', cursor: 'pointer' }}
              size="lg"
              far
              icon="comment-dots"
            />
          </Link>
          <Link as={`/${community.slug}/${pSlug}`} href="/[community]/[post]">
            <small style={{ marginLeft: '-5px', cursor: 'pointer' }}>
              {comments && calculateSallamaCount(comments)} sallama
            </small>
          </Link>
          <ShareButton />
        </CardActions>
      </div>
    </Card>
  );
}

const mapDispatchToProps = (dispatch) => ({
  deletePost: (payload) => dispatch(deletePostRequest(payload)),
  moderatorDelete: (payload) => dispatch(deleteModeratorRequest(payload))
});

const mapStateToProps = (state) => ({
  auth: state.auth && state.auth.data
});

export default connect(mapStateToProps, mapDispatchToProps)(SocialCard);
