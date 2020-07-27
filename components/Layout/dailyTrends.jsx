import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { Row, Col, Container } from 'react-bootstrap';
import { connect } from 'react-redux';
import { getPopularCommnityListRequest } from '../../lib/community/actions';
import { getDailyTrendsRequest } from '../../lib/home/actions';
import { votePostRequest } from '../../lib/posts/actions';
import Loader from '../Loader';
import { clearStoreRequest } from '../../lib/commonActions';
import { Helmet } from 'react-helmet';
import InfiniteScroll from 'react-infinite-scroll-component';
import SocialCard from '../SocialCard';
import PopularTags from '../PopularTags';
import CreatePostTab from '../CreatePostTab';
import CustomizedSnackbars from '../Snackbar';
import { readLocalStorage } from '../../lib/helpers';
import { parseCookies } from 'nookies';

function DailyTrends(props) {
  const [pageNumber, setNumber] = useState(1);
  const [auth, setAuth] = React.useState({
    data: { token: null, user: null },
    error: null
  });
  useEffect(() => {
    const user = readLocalStorage('user');
    const token = readLocalStorage('token');
    if (user && token) {
      const payload = { data: { user, token }, error: null };
      setAuth(payload);
    }
    const { getTrendsPosts } = props;
    getTrendsPosts({ pageNumber: 1, pageSize: 6, loderStart: true });
    return () => {
      props.clearStore('trends');
    };
  }, []);

  const onVote = (values) => {
    const { votePost } = props;
    const payload = { ...values, pageSize: 6, isVoted: true };
    votePost(payload);
  };

  const fetchMoreData = () => {
    const newNumber = pageNumber + 1;
    const { getTrendsPosts } = props;
    getTrendsPosts({
      pageNumber: newNumber,
      pageSize: 6
    });
    setNumber(newNumber);
  };

  const { home, userCommunities } = props;
  return (
    <div className="l_layout">
      <Head>
        <title>Günün Trend Sallamaları | Saalla</title>
        <meta
          name="description"
          content="Saalla, insanların ilgi alanlarına göre sallayabildikleri topluluk ağıdır. İlgilendiğiniz toplulukları bulun ve çevrimiçi bir topluluğun parçası olun!"
        />
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Container>
        <Row style={{ marginTop: '1rem' }}>
          <Col xs={12} md={12}>
            <CreatePostTab user={auth.user} />
          </Col>
        </Row>
        <Row>
          <Col
            style={{
              paddingBottom: '4px',
              paddingTop: '20px'
            }}
            xs={12}
            md={8}
          >
            <b>Populer Sallamalar</b>
          </Col>
        </Row>
        <Row style={{ flexWrap: 'wrap-reverse' }}>
          <Col
            style={{
              paddingBottom: '10px',
              paddingTop: '20px'
            }}
            xs={12}
            md={8}
          >
            {userCommunities && userCommunities.length <= 0 && (
              <Link href="/kesfet">
                <CustomizedSnackbars
                  message="Topluluklari Kesfet - Hiçbir topluluğa üye değilsin Şimdi tam zamanı"
                  type="warning"
                  style={{ cursor: 'pointer' }}
                />
              </Link>
            )}
            <InfiniteScroll
              dataLength={home && home.results && home.results.length}
              next={fetchMoreData}
              hasMore={home && home.hasNext}
              loader={<Loader overlay={false} />}
            >
              {home.results.map((item) => (
                <SocialCard
                  key={item.id}
                  pSlug={item.slug}
                  id={item.id}
                  img={item.mediaContentPath}
                  createdDate={item.createdDateTime}
                  content={item.content}
                  contentType={item.contentType}
                  community={item.community}
                  pageNumber={item.pageNumber}
                  comments={item.comments}
                  user={item.user}
                  linkUrl={item.linkUrl}
                  voteCount={item.voteCount}
                  userPostVote={item.userPostVote}
                  onVote={onVote}
                  profilePosts={false}
                />
              ))}
            </InfiniteScroll>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  getPopularsCommunity: () => dispatch(getPopularCommnityListRequest({})),
  clearStore: (name) => dispatch(clearStoreRequest(name)),
  getTrendsPosts: (payload) => dispatch(getDailyTrendsRequest(payload)),
  votePost: (payload) => dispatch(votePostRequest(payload))
});

const mapStateToProps = (state) => ({
  home: state.home.data,
  userCommunities: state.userCommunities.data
});

export default connect(mapStateToProps, mapDispatchToProps)(DailyTrends);
