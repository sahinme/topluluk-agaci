import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { Row, Col, Container } from "react-bootstrap";
import ProfileCard from "../../components/ProfileCard";
import SocialCard from "../../components/SocialCard";
import { getUserProfile } from "../../lib/users/actions";
import { connect } from "react-redux";
import {
  updateProfileRequest,
  getProfilePostsRequest,
  getProfileRequest,
} from "../../lib/profile/actions";
import CustomizedSnackbars from "../../components/Snackbar";
import { votePostRequest } from "../../lib/posts/actions";
import { Helmet } from "react-helmet";

function Profile(props) {
  const { profile, profilePosts } = props;

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
      page: "user",
      username: profile.username,
    };
    votePost(payload);
  };

  return (
    <div>
      {profile && <Helmet title={profile.username} />}
      <Container style={{ marginTop: "8rem" }}>
        <Row style={{ flexWrap: "wrap-reverse" }}>
          <Col
            style={{ paddingBottom: "10px", paddingTop: "20px" }}
            xs={12}
            md={8}
          >
            {profilePosts && profilePosts.length <= 0 && (
              <CustomizedSnackbars
                onClick={() => router.push("/salla")}
                message="Hiç gönderin yok. Hadi sallamaya başla"
                type="warning"
                style={{ cursor: "pointer" }}
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
                  voteCount={item.voteCount}
                  comments={item.comments}
                  user={
                    profile && {
                      profileImagePath: profile.profileImagePath,
                      userName: profile.username,
                    }
                  }
                />
              ))}
          </Col>
          <Col
            style={{ paddingBottom: "10px", paddingTop: "5rem" }}
            xs={12}
            md={4}
          >
            {profile && (
              <ProfileCard
                gender={profile.gender}
                img={profile.profileImagePath}
                username={profile.username}
                email={profile.emailAddress}
                onSubmit={handleSubmit}
                bio={profile.bio}
              />
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

Profile.getInitialProps = async ({ isServer, store, query }) => {
  await store.execSagaTasks(isServer, (dispatch) => {
    dispatch(getProfilePostsRequest());
    dispatch(getProfileRequest());
  });
  return {};
};

const mapDispatchToProps = (dispatch) => ({
  getProfile: () => dispatch(getProfileRequest({})),
  updateProfile: (payload) => dispatch(updateProfileRequest(payload)),
  getProfilePosts: () => dispatch(getProfilePostsRequest({})),
  votePost: (payload) => dispatch(votePostRequest(payload)),
});

const mapStateToProps = (state) => ({
  profile: state.profileData.data,
  profilePosts: state.profilePosts.data,
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
