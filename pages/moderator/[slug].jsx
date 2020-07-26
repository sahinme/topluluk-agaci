import React, { useEffect, useState } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Paper, TextField, Button } from '@material-ui/core';
import InfiniteScroll from 'react-infinite-scroll-component';
import EditIcon from '@material-ui/icons/Edit';
import SocialCard from '../../components/SocialCard';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import IconButton from '@material-ui/core/IconButton';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import {
  getCommunityRequest,
  updateCommunityRequest,
  getUsers,
  deleteUserRequest,
  getCommunityPostsRequest,
  addModeratorRequest
} from '../../lib/community/actions';
import { votePostRequest, handlePinPostRequest } from '../../lib/posts/actions';
import InfoCard from '../../components/Moderator/components/InfoCard';
import ComboBox from '../../components/AutoComplete';
import UserModal from '../../components/Moderator/components/userModal';
import Loader from '../../components/Loader';
import { readLocalStorage } from '../../lib/helpers';
import { useRouter } from 'next/router';
import MainLayout from '../../components/mainLayout';
import { clearStoreRequest } from '../../lib/commonActions';
import AddModeratorModal from '../../components/Moderator/components/addModeratorModal';
import planetLogo from '../t/planet.png';
import RulesAccardion from '../../components/Accordion';

function CommunityPage(props) {
  const router = useRouter();
  const [pageNumber, setNumber] = useState(1);
  const [auth, setAuth] = useState({ token: null, user: null });

  useEffect(() => {
    const data = {
      token: readLocalStorage('token'),
      user: readLocalStorage('user')
    };
    setAuth(data);
    const { getCommunity, getUsers, getPosts } = props;
    const { slug } = router.query;
    if (!data.user.isModerator) {
      router.back();
    }
    const isExist = data.user.comMods.find((x) => x === slug);
    if (!isExist) {
      router.back();
    }
    getCommunity({ slug, loaderStart: true });
    getUsers({ slug });
    getPosts({ pageNumber: 1, pageSize: 6, slug, loaderStart: true });
    return () => {
      props.clearStore('community_posts');
    };
  }, [router.asPath]);

  const [isEditName, setEditName] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
  const [addModModalOpen, setModModal] = useState(false);
  const [selectedUser, setUser] = useState({});
  const [userForModerator, setModeratorRequest] = useState(null);
  const [values, setValues] = useState({
    name: ''
  });

  const onVote = (values) => {
    const { votePost, community } = props;
    values.page = 'community';
    values.slug = community.slug;
    votePost(values);
  };

  const handlePin = (payload) => {
    payload.pageSize = 6;
    props.handlePin(payload);
  };

  const handleNameChange = (e) => {
    const newValues = { ...values };
    newValues.name = e.target.value;
    setValues(newValues);
  };

  const handleSubmit = (description) => {
    const newValues = { ...values };
    newValues.slug = community.slug;
    newValues.description = description;
    const { updateCommunity } = props;
    updateCommunity(newValues);
    setEditName(false);
  };

  const handleLogoChange = (event, input) => {
    const { updateCommunity } = props;
    event.preventDefault();
    let imageFile = event.target.files[0];
    const newValues = {};
    newValues.logo = imageFile;
    newValues.slug = community.slug;
    updateCommunity(newValues);
  };

  const handleCoverPhotoChange = (event, input) => {
    const { updateCommunity } = props;
    event.preventDefault();
    let imageFile = event.target.files[0];
    const newValues = {};
    newValues.coverPhoto = imageFile;
    newValues.slug = community.slug;
    updateCommunity(newValues);
  };

  const onSelectChange = (user) => {
    setUser(user);
    setModalOpen(true);
  };

  const onModeratorSelect = (user) => {
    setModeratorRequest(user);
  };

  const handleUserDelete = (payload) => {
    const values = {
      slug: community.slug,
      username: payload.username
    };
    props.deleteUser(values);
    setModalOpen(false);
  };

  const onAddModerator = () => {
    const payload = {
      userId: userForModerator.userId,
      communitySlug: community.slug
    };
    props.addModerator(payload);
    setModModal(false);
  };

  const renderNameArea = () => {
    if (isEditName) {
      return (
        <React.Fragment>
          <TextField
            id="outlined-basic"
            label="İsim"
            variant="outlined"
            defaultValue={community.name}
            onChange={handleNameChange}
          />
          <div>
            <HighlightOffIcon
              onClick={() => setEditName(false)}
              className="close_icon"
            />
            <CheckCircleOutlineIcon
              onClick={values.name == '' ? () => {} : handleSubmit}
              className="check_icon"
            />
          </div>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <h3 className="com_title">{community.name}</h3>
          <small className="com_member_count">s/{community.name} |</small>
          <small className="com_member_count">
            {community && community.members && community.members.length} Üye
          </small>
        </React.Fragment>
      );
    }
  };

  const fetchMoreData = () => {
    const newNumber = pageNumber + 1;
    const { getPosts } = props;
    getPosts({
      pageNumber: newNumber,
      pageSize: 6,
      slug: community.slug,
      loaderStart: false
    });
    setNumber(newNumber);
  };

  const { community, posts } = props;
  return (
    community && (
      <MainLayout>
        <div>
          <Row style={{ height: '240px' }}>
            <input
              style={{ display: 'none' }}
              accept="image/*"
              id="icon-button-file"
              type="file"
              onChange={(event) =>
                handleCoverPhotoChange(event, { name: 'file' })
              }
            />
            <label className="cover_upload_icon" htmlFor="icon-button-file">
              <IconButton
                color="primary"
                aria-label="upload picture"
                component="span"
              >
                <PhotoCamera />
              </IconButton>
            </label>
            <img
              className={
                community.coverImagePath
                  ? 'com_cover_image'
                  : 'com_cover_image_null'
              }
              src={community.coverImagePath}
              alt=""
            />
          </Row>
          <Row>
            <Paper className="com_bar">
              <Col className="com_bar_info" md={8}>
                <img
                  className="profile_img"
                  src={community.logoPath || planetLogo}
                  alt=""
                />
                <div>
                  <label htmlFor="myInput">
                    <EditIcon className="profile_edit_icon" />
                  </label>
                  <input
                    id="myInput"
                    style={{ display: 'none' }}
                    type={'file'}
                    onChange={(event) =>
                      handleLogoChange(event, { name: 'file' })
                    }
                  />
                </div>
                <div className="com_name">
                  <div className="com_bar_title">{renderNameArea()}</div>
                  {!isEditName && (
                    <div className="join_button_container">
                      <EditIcon
                        onClick={() => setEditName(true)}
                        className="profile_edit_icon"
                      />
                    </div>
                  )}
                </div>
              </Col>
            </Paper>
          </Row>
          <Container style={{ marginTop: '1rem' }}>
            <Row style={{ marginTop: '1rem' }}>
              <Col
                style={{ paddingBottom: '10px', paddingTop: '20px' }}
                xs={12}
                md={8}
              >
                <ComboBox
                  labelField="username"
                  options={props.users}
                  placeholder="Tüm üyeler"
                  user={true}
                  className="com_users"
                  onChange={onSelectChange}
                />
                <Button
                  variant="contained"
                  color="default"
                  onClick={() => setModModal(true)}
                  //className={classes.button}
                  startIcon={<SupervisorAccountIcon />}
                >
                  Moderator Ekle
                </Button>
                {selectedUser && (
                  <UserModal
                    data={selectedUser}
                    open={isModalOpen}
                    onClose={() => setModalOpen(false)}
                    onDeleteButton={handleUserDelete}
                  />
                )}
                <InfiniteScroll
                  dataLength={posts && posts.results && posts.results.length}
                  next={fetchMoreData}
                  hasMore={posts && posts.hasNext}
                  loader={<Loader overlay={false} />}
                >
                  {posts &&
                    posts.results &&
                    posts.results.length > 0 &&
                    posts.results
                      .filter((x) => x.isPinned)
                      .map((item) => (
                        <SocialCard
                          pageNumber={item.pageNumber}
                          key={item.id}
                          handlePin={handlePin}
                          id={item.id}
                          pSlug={item.slug}
                          isPinned={item.isPinned}
                          isPinneable={true}
                          img={item.mediaContentPath}
                          createdDate={item.createdDateTime}
                          content={item.content}
                          contentType={item.contentType}
                          community={{
                            name: community.name,
                            slug: community.slug,
                            logoPath: community.logoPath
                          }}
                          comments={item.commentsCount}
                          user={item.user}
                          linkUrl={item.linkUrl}
                          voteCount={item.voteCount}
                          userPostVote={item.userPostVote}
                          onVote={onVote}
                          isModerator={true}
                          pageDto={{ pageSize: 6, pageNumber }}
                        />
                      ))}
                  {posts &&
                    posts.results &&
                    posts.results.length > 0 &&
                    posts.results
                      .filter((x) => !x.isPinned)
                      .map((item) => (
                        <SocialCard
                          pageNumber={item.pageNumber}
                          key={item.id}
                          handlePin={handlePin}
                          id={item.id}
                          pSlug={item.slug}
                          isPinned={item.isPinned}
                          isPinneable={true}
                          img={item.mediaContentPath}
                          createdDate={item.createdDateTime}
                          content={item.content}
                          contentType={item.contentType}
                          community={{
                            name: community.name,
                            slug: community.slug,
                            logoPath: community.logoPath
                          }}
                          comments={item.commentsCount}
                          user={item.user}
                          linkUrl={item.linkUrl}
                          voteCount={item.voteCount}
                          userPostVote={item.userPostVote}
                          onVote={onVote}
                          isModerator={true}
                          pageDto={{ pageSize: 6, pageNumber }}
                        />
                      ))}
                </InfiniteScroll>
              </Col>
              <Col style={{ paddingBottom: '10px' }} xs={12} md={4}>
                <div className="com_right_bar">
                  <InfoCard
                    moderators={community.moderators}
                    description={community.description}
                    onSubmit={handleSubmit}
                  />
                </div>
                {/*  <RulesAccardion /> */}
              </Col>
            </Row>
          </Container>
        </div>
        <AddModeratorModal
          labelField="username"
          options={props.users}
          placeholder="Tüm üyeler"
          onSubmit={onAddModerator}
          open={addModModalOpen}
          user={true}
          selectedUser={userForModerator}
          className="com_users"
          onChange={onModeratorSelect}
          onClose={() => setModModal(false)}
        />
      </MainLayout>
    )
  );
}

const mapDispatchToProps = (dispatch) => ({
  getCommunity: (payload) => dispatch(getCommunityRequest(payload)),
  votePost: (payload) => dispatch(votePostRequest(payload)),
  updateCommunity: (payload) => dispatch(updateCommunityRequest(payload)),
  getUsers: (payload) => dispatch(getUsers(payload)),
  deleteUser: (payload) => dispatch(deleteUserRequest(payload)),
  getPosts: (payload) => dispatch(getCommunityPostsRequest(payload)),
  addModerator: (payload) => dispatch(addModeratorRequest(payload)),
  clearStore: (name) => dispatch(clearStoreRequest(name)),
  handlePin: (payload) => dispatch(handlePinPostRequest(payload))
});

const mapStateToProps = (state) => ({
  community: state.community.data,
  //auth: state.auth.data,
  posts: state.community.pagedData,
  users: state.communityUsers.data
});

export default connect(mapStateToProps, mapDispatchToProps)(CommunityPage);
