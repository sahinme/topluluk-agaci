import React, { useEffect, useState } from 'react';
import { NextSeo } from 'next-seo';
import { Row, Col, Container } from 'react-bootstrap';
import InfiniteScroll from 'react-infinite-scroll-component';
import { connect } from 'react-redux';
import { Paper } from '@material-ui/core';
import InfoCard from '../../components/InfoCard';
import MainLayout from '../../components/mainLayout';
import {
  getCommunityRequest,
  getCommunityPostsRequest
} from '../../lib/community/actions';
import { joinCommunityRequest } from '../../lib/users/actions';
import ActionButton from '../../components/ActionButton';
import { votePostRequest } from '../../lib/posts/actions';
import Loader from '../../components/Loader';
import { clearStoreRequest } from '../../lib/commonActions';
import CreatePostTab from '../../components/CreatePostTab';
import CreatePostBox from '../../components/CreatePostBox';
import SocialCard from '../../components/SocialCard';
import { parseCookies } from 'nookies';
import { readLocalStorage } from '../../lib/helpers';
import { useRouter } from 'next/router';
import planetLogo from './planet.png';
import Link from 'next/link';
import RulesAccardion from '../../components/Accordion';

function CommunityPage(props) {
  const router = useRouter();
  const [pageNumber, setNumber] = useState(1);
  useEffect(() => {
    props.getCommunity({ slug: router.query.community });
    props.getPosts({
      pageNumber: 1,
      pageSize: 6,
      slug: router.query.community,
      loaderStart: true
    });
    return () => {
      props.clearStore('community_posts');
    };
  }, [router.asPath]);

  const element = () => {
    const { community } = props;
    const token = readLocalStorage('token');
    const user = readLocalStorage('user');
    if (!token) return <ActionButton isLogged={false} />;
    let isJoined = false;
    community &&
      community.members &&
      community.members.length > 0 &&
      community.members.map((member) => {
        if (member.username == user.username) {
          isJoined = true;
        }
      });
    return (
      <ActionButton isLogged={true} isJoined={isJoined} slug={community.slug} />
    );
  };

  const onVote = (values) => {
    const { votePost, community } = props;
    values.page = 'community';
    values.cSlug = community.slug;
    values.communityId = community.id;
    values.pageSize = 6;
    values.loaderStart = false;
    votePost(values);
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

  const isModeratorThis = () => {
    let result = false;
    const user = readLocalStorage('user');
    if (user && user.comMods) {
      user.comMods.map((x) => {
        if (x === community.slug) {
          result = true;
        }
      });
    }
    return result;
  };

  const { community, posts } = props;
  return (
    community && (
      <MainLayout>
        <NextSeo
          title={community.name + ' topluluğu | Saalla '}
          description={community.description}
          canonical={`https://saalla.com/t/${community.slug}`}
          openGraph={{
            url: `https://saalla.com/t/${community.slug}`,
            title: community.name + ' topluluğu | Saalla ',
            description: community.description,
            images:
              community.logoPath !== null
                ? [{ url: community.logoPath, alt: community.name }]
                : []
          }}
        />
        <Row style={{ height: '250px' }}>
          <img
            className={
              community.coverImagePath
                ? 'com_cover_image'
                : 'com_cover_image_null'
            }
            src={community.coverImagePath}
            alt={community.name}
          />
        </Row>
        <Row>
          <Paper className="com_bar">
            <Col className="com_bar_info" md={8}>
              <img
                className="profile_img"
                src={community.logoPath || planetLogo}
                alt={community.name}
              />
              <div className="com_name">
                <div className="com_bar_title">
                  <h3 className="com_title">{community.name}</h3>
                  <small className="com_member_count">
                    t/{community.slug + ' |'}
                  </small>
                  <small className="com_member_count">
                    {community && community.members && community.members.length}
                    &nbsp;Üye
                  </small>
                </div>
                <div className="join_button_container">{element()}</div>
              </div>
            </Col>
          </Paper>
        </Row>
        <Container style={{ marginTop: '1rem' }}>
          <Row>
            <Col
              style={{
                paddingBottom: '4px',
                paddingTop: '20px'
              }}
              xs={12}
              md={8}
            >
              <CreatePostBox slug={community.slug} />
              {/*  <b>Populer Sallamalar</b> */}
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={12}>
              {isModeratorThis() && (
                <div style={{ display: 'flex' }}>
                  <p>Bu topluluğun moderatörüsün.</p>
                  <Link
                    href="/moderator/[slug]"
                    as={`/moderator/${community.slug}`}
                  >
                    &nbsp; Yönetici sayfasına geçiş yap
                  </Link>{' '}
                </div>
              )}
            </Col>
          </Row>

          <Row style={{ marginTop: '1rem', flexWrap: 'wrap-reverse' }}>
            <Col
              style={{ paddingBottom: '10px', paddingTop: '20px' }}
              xs={12}
              md={8}
            >
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
                        id={item.id}
                        pSlug={item.slug}
                        isPinned={item.isPinned}
                        img={item.mediaContentPath}
                        createdDate={item.createdDateTime}
                        content={item.content}
                        contentType={item.contentType}
                        community={{
                          name: community.name,
                          slug: community.slug,
                          logoPath: community.logoPath
                        }}
                        comments={item.comments}
                        user={item.user}
                        linkUrl={item.linkUrl}
                        voteCount={item.voteCount}
                        userPostVote={item.userPostVote}
                        onVote={onVote}
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
                        id={item.id}
                        pSlug={item.slug}
                        img={item.mediaContentPath}
                        createdDate={item.createdDateTime}
                        content={item.content}
                        contentType={item.contentType}
                        community={{
                          name: community.name,
                          slug: community.slug,
                          logoPath: community.logoPath
                        }}
                        comments={item.comments}
                        user={item.user}
                        linkUrl={item.linkUrl}
                        voteCount={item.voteCount}
                        userPostVote={item.userPostVote}
                        onVote={onVote}
                      />
                    ))}
              </InfiniteScroll>
            </Col>
            <Col style={{ paddingBottom: '10px' }} xs={12} md={4}>
              <div className="com_right_bar">
                <InfoCard
                  moderators={community.moderators}
                  description={community.description}
                />
              </div>
              {/* <RulesAccardion /> */}
            </Col>
          </Row>
        </Container>
      </MainLayout>
    )
  );
}

/* CommunityPage.getInitialProps = async (ctx) => {
  await ctx.store.execSagaTasks(ctx.isServer, (dispatch) => {
    const { community } = ctx.query;
    dispatch(
      getCommunityRequest({
        slug: community,
        loaderStart: true,
        token: parseCookies(ctx).token,
      })
    );
    dispatch(
      getCommunityPostsRequest({
        pageNumber: 1,
        pageSize: 6,
        slug: community,
        loaderStart: true,
        token: parseCookies(ctx).token,
      })
    );
  });
  return {};
}; */

const mapDispatchToProps = (dispatch) => ({
  getCommunity: (payload) => dispatch(getCommunityRequest(payload)),
  joinCommunity: (payload) => dispatch(joinCommunityRequest(payload)),
  votePost: (payload) => dispatch(votePostRequest(payload)),
  getPosts: (payload) => dispatch(getCommunityPostsRequest(payload)),
  clearStore: (name) => dispatch(clearStoreRequest(name))
});

const mapStateToProps = (state) => ({
  community: state.community.data,
  posts: state.community.pagedData
  //auth: state.auth.data,
});

export default connect(mapStateToProps, mapDispatchToProps)(CommunityPage);
