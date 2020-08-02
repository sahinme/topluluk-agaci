import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';
import { Row, Col, Container } from 'react-bootstrap';
import PopularTags from '../../components/PopularTags';
import MainLayout from '../../components/mainLayout';
import { getPostDetailRequest, votePostRequest } from '../../lib/posts/actions';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { htmlToText } from '../../lib/helpers';
import PostDetailCard from '../../components/PostDetailCard';
import { parseCookies } from 'nookies';

function PostDetail(props) {
  const { post } = props;
  const [isMounted, setMount] = useState(false);

  const router = useRouter();
  useEffect(() => {
    /* const { getPostDetail } = props;
    const { query } = router;
    getPostDetail({ slug: query.post, loaderStart: true }); */
    setMount(true);
  }, []);

  const featuredImage = {
    url: post && post.contentPath,
    alt: post && post.slug
  };

  const onVote = (values) => {
    const { votePost } = props;
    values.page = 'post_detail';
    votePost(values);
  };

  const handleTitle = (content) => {
    const title = htmlToText(content);
    const _title = title.length > 130 ? title.slice(0, 120) : title;
    return _title;
  };

  return (
    <MainLayout>
      {post && post.community && isMounted && (
        <NextSeo
          title={
            post.community.name +
            ' salladı: ' +
            handleTitle(post.content) +
            ' | Saalla'
          }
          description={
            post.community.name +
              ' salladı: ' +
              htmlToText(post.content).slice(0, 100) || ''
          }
          canonical={`https://saalla.com/${post.community.slug}/${post.slug}`}
          openGraph={{
            url: `https://saalla.com/${post.community.slug}/${post.slug}`,
            title:
              post.community.name +
              ' salladı: ' +
              handleTitle(post.content) +
              ' | Saalla',
            description:
              post.community.name +
                ' salladı: ' +
                htmlToText(post.content).slice(0, 100) || '',
            images: post.contentType === 10 ? [featuredImage] : []
          }}
        />
      )}
      <Container>
        <Row style={{ marginTop: '1rem' }}>
          <Col
            style={{ paddingBottom: '10px', paddingTop: '20px' }}
            xs={12}
            md={8}
          >
            {post && (
              <PostDetailCard
                slug={post.slug}
                id={post.id}
                img={post.contentPath}
                createdDate={post.createdDateTime}
                content={post.content}
                contentType={post.contentType}
                community={post.community}
                comments={post.comments}
                user={post.userInfo}
                linkUrl={post.linkUrl}
                onVote={onVote}
                voteCount={post.voteCount}
                userPostVote={post.userPostVote}
              />
            )}
          </Col>
          <Col style={{ paddingBottom: '10px' }} xs={12} md={4}>
            <div
              style={{ position: '-webkit-sticky', position: 'sticky', top: 0 }}
            >
              <PopularTags />
            </div>
          </Col>
        </Row>
      </Container>
    </MainLayout>
  );
}

PostDetail.getInitialProps = async (ctx) => {
  await ctx.store.execSagaTasks(ctx.isServer, (dispatch) => {
    const { post } = ctx.query;
    dispatch(
      getPostDetailRequest({
        slug: post,
        loaderStart: true,
        token: parseCookies(ctx).token,
        isServer: true
      })
    );
  });
  return {};
};

const mapDispatchToProps = (dispatch) => ({
  getPostDetail: (payload) => dispatch(getPostDetailRequest(payload)),
  votePost: (payload) => dispatch(votePostRequest(payload))
});

const mapStateToProps = (state) => ({
  post: state.postDetail.data
});

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail);
