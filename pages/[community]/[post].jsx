import React from "react";
import { useRouter } from "next/router";
import { Row, Col, Container } from "react-bootstrap";
import PopularTags from "../../components/PopularTags";
import { getPostDetailRequest, votePostRequest } from "../../lib/posts/actions";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
/* import { htmlToText } from "../../lib/helpers";
 */ import PostDetailCard from "../../components/PostDetailCard";

function PostDetail(props) {
  /* useEffect(() => {
    const {
      getPostDetail,
      match: { params },
    } = props;
    getPostDetail({ slug: params.pSlug, loaderStart: true });
  }, []); */

  const onVote = (values) => {
    const { votePost } = props;
    values.page = "post_detail";
    votePost(values);
  };

  const { post } = props;
  return (
    <div>
      {/*  {post && post.community && (
        <Helmet>
          <title>
            {post.community.name +
              " salladı: " +
              htmlToText(post.content) +
              " | Saalla"}
          </title>
          <meta charSet="utf-8" />
          <meta
            name="description"
            content={
              post.community.name +
              " salladı: " +
              htmlToText(post.content).slice(0, 100)
            }
          />
          <link
            href={`https://saalla.com/${post.community.slug}/${post.slug}`}
          />
        </Helmet>
      )} */}
      <Container style={{ marginTop: "6rem" }}>
        <Row style={{ marginTop: "1rem" }}>
          <Col
            style={{ paddingBottom: "10px", paddingTop: "20px" }}
            xs={12}
            md={8}
          >
            {post && (
              <PostDetailCard
                id={post.id}
                img={post.contentPath}
                createdDate={post.createdDateTime}
                content={post.content}
                // contentType={post.contentType}
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
    </div>
  );
}

PostDetail.getInitialProps = async ({ isServer, store, query }) => {
  await store.execSagaTasks(isServer, (dispatch) => {
    const { community, post } = query;
    dispatch(getPostDetailRequest({ slug: post, loaderStart: true }));
  });
  return {};
};

const mapDispatchToProps = (dispatch) => ({
  getPostDetail: (payload) => dispatch(getPostDetailRequest(payload)),
  votePost: (payload) => dispatch(votePostRequest(payload)),
});

const mapStateToProps = (state) => ({
  post: state.postDetail.data,
});

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail);
