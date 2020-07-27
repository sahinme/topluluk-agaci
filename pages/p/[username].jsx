import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { Row, Col, Container } from 'react-bootstrap';
import ProfileCard from '../../components/ProfileCard';
import SocialCard from '../../components/SocialCard';
import MainLayout from '../../components/mainLayout';
import { getUserProfile } from '../../lib/users/actions';
import { connect } from 'react-redux';
import {
  updateProfileRequest,
  getProfilePostsRequest,
  getProfileRequest
} from '../../lib/profile/actions';
import CustomizedSnackbars from '../../components/Snackbar';
import { votePostRequest } from '../../lib/posts/actions';
import { Helmet } from 'react-helmet';
import ExampleProfileCard from '../../components/exampleProfileCard';

function Profile(props) {
  const { profile, profilePosts } = props;

  useEffect(() => {
    const { getProfile, getProfilePosts } = props;
    getProfile({});
    getProfilePosts();
  }, []);

  const router = useRouter();

  const handleSubmit = (values) => {
    const { updateProfile } = props;
    updateProfile(values);
  };

  const onVote = (values) => {
    const { votePost } = props;
    const payload = {
      ...values,
      loaderStart: false,
      page: 'user',
      username: profile.username
    };
    votePost(payload);
  };

  return (
    <MainLayout>
      {profile && <Helmet title={profile.username} />}
      <Container>
        <Row style={{ flexWrap: 'wrap-reverse' }}>
          <Col
            style={{ paddingBottom: '10px', paddingTop: '20px' }}
            xs={12}
            md={8}
          >
            {profilePosts && profilePosts.length <= 0 && (
              <CustomizedSnackbars
                onClick={() => router.push('/salla')}
                message="Hiç gönderin yok. Hadi sallamaya başla"
                type="warning"
                style={{ cursor: 'pointer' }}
              />
            )}
            {profilePosts &&
              profilePosts.map((item) => (
                <SocialCard
                  profilePosts={true}
                  id={item.id}
                  pSlug={item.slug}
                  img={item.mediaContentPath}
                  createdDate={item.createdDateTime}
                  content={item.content}
                  contentType={item.contentType}
                  community={item.community}
                  linkUrl={item.linkUrl}
                  onVote={onVote}
                  voteCount={item.voteCount}
                  comments={item.comments}
                  userPostVote={item.userPostVote}
                  user={
                    profile && {
                      profileImagePath: profile.profileImagePath,
                      userName: profile.username
                    }
                  }
                />
              ))}
          </Col>
          <Col
            style={{ paddingBottom: '10px', paddingTop: '5rem' }}
            xs={12}
            md={4}
          >
            {profile && (
              <ExampleProfileCard
                gender={profile.gender}
                img={profile.profileImagePath}
                sPoint={profile.sPoint}
                username={profile.username}
                email={profile.emailAddress}
                onSubmit={handleSubmit}
                isEditMode={true}
                bio={profile.bio}
              />
            )}
          </Col>
        </Row>
      </Container>
    </MainLayout>
  );
}

const mapDispatchToProps = (dispatch) => ({
  getProfile: () => dispatch(getProfileRequest({})),
  updateProfile: (payload) => dispatch(updateProfileRequest(payload)),
  getProfilePosts: () => dispatch(getProfilePostsRequest({})),
  votePost: (payload) => dispatch(votePostRequest(payload))
});

const mapStateToProps = (state) => ({
  profile: state.profileData.data,
  profilePosts: state.profilePosts.data
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
