import React, { useState, useEffect } from 'react';
import { withRouter } from 'next/router';
import { connect } from 'react-redux';
import { Row, Col, Container } from 'react-bootstrap';
import PopularTags from '../components/PopularTags';
import TabPanelList from '../components/tabPanel';
import ComboBox from '../components/AutoComplete';
import MainLayout from '../components/mainLayout';
import { getUserCommunitiesRequest } from '../lib/community/actions';
import { createPostRequest } from '../lib/posts/actions';
import { getParameterByName } from '../lib/helpers';

function CreatePost(props) {
  const [community, setCommunity] = useState(null);
  useEffect(() => {
    const {
      getUserCommunities,
      communities,
      router: { query }
    } = props;
    getUserCommunities({});
    if (query && query.is) {
      setCommunity(communities.find((x) => x.slug === query.is));
    }
  }, []);

  const handleChange = (option) => {
    setCommunity(option);
  };

  const handleSubmit = (values) => {
    const { createPost } = props;
    values.communitySlug = community.slug;
    createPost(values);
  };

  const {
    communities,
    router: { query }
  } = props;
  return (
    <MainLayout>
      <Container>
        <Row style={{ marginTop: '1rem' }}>
          <Col
            style={{ paddingBottom: '10px', paddingTop: '20px' }}
            xs={12}
            md={8}
          >
            <ComboBox
              defaultValue={
                communities && communities.length > 0
                  ? communities.find((x) => x.slug === query.is)
                  : null
              }
              onChange={handleChange}
              options={communities}
              labelField="name"
              placeholder="Topluluk seç"
            />
            <TabPanelList community={community} onSubmit={handleSubmit} />
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

const mapDispatchToProps = (dispatch) => ({
  getUserCommunities: (payload) => dispatch(getUserCommunitiesRequest(payload)),
  createPost: (payload) => dispatch(createPostRequest(payload))
});

const mapStateToProps = (state) => ({
  communities: state.userCommunities.data
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(CreatePost));
