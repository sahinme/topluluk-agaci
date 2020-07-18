import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import { Row, Col, Container } from "react-bootstrap";
import PopularTags from "../../components/PopularTags";
import MainLayout from "../../components/mainLayout";
import { getPostDetailRequest, votePostRequest } from "../../lib/posts/actions";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import { htmlToText } from "../../lib/helpers";
import PostDetailCard from "../../components/PostDetailCard";

function PostDetail(props) {
  const router = useRouter();
  useEffect(() => {
    const { getPostDetail } = props;
    const { query } = router;
    getPostDetail({ slug: query.post, loaderStart: true });
  }, []);

  const onVote = (values) => {
    const { votePost } = props;
    values.page = "post_detail";
    votePost(values);
  };

  const { post } = props;
  return (
    <MainLayout>
      <Head>
        {post && post.community && (
          <title>
            {post.community.name +
              " salladı: " +
              htmlToText(post.content) +
              " | Saalla"}
          </title>
        )}
        {post && post.community && (
          <meta
            name="description"
            content={
              post.community.name +
                " salladı: " +
                htmlToText(post.content).slice(0, 100) || ""
            }
          />
        )}
      </Head>
      <Container>
        <Row style={{ marginTop: "1rem" }}>
          <Col
            style={{ paddingBottom: "10px", paddingTop: "20px" }}
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
          <Col style={{ paddingBottom: "10px" }} xs={12} md={4}>
            <div
              style={{ position: "-webkit-sticky", position: "sticky", top: 0 }}
            >
              <PopularTags />
            </div>
          </Col>
        </Row>
      </Container>
    </MainLayout>
  );
}

/* PostDetail.getInitialProps = async (ctx) => {
  await ctx.store.execSagaTasks(ctx.isServer, (dispatch) => {
    const { post } = ctx.query;
    dispatch(
      getPostDetailRequest({
        slug: post,
        loaderStart: true,
        token: parseCookies(ctx).token,
      })
    );
  });
  return {};
}; */

const mapDispatchToProps = (dispatch) => ({
  getPostDetail: (payload) => dispatch(getPostDetailRequest(payload)),
  votePost: (payload) => dispatch(votePostRequest(payload)),
});

const mapStateToProps = (state) => ({
  post: state.postDetail.data,
});

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail);
