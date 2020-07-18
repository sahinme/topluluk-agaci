import React, { useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import { connect } from "react-redux";
import CommunityList from "../../components/List";
import MainLayout from "../../components/mainLayout";
import {
  getCategoriesRequest,
  getComsByCategoryRequest,
} from "../../lib/category/actions";
import Categories from "../../components/Categories";
import { getAllCommunitiesRequest } from "../../lib/community/actions";

function Explore(props) {
  const [category, setCategory] = useState(null);

  const onSelectCategory = (category) => {
    setCategory(category);
    const { getCommunities } = props;
    getCommunities({ name: category.slug });
  };

  const onSelectAll = () => {
    props.getAllCom();
    setCategory(null);
  };

  const { categories, communities } = props;
  return (
    <MainLayout>
      <Container>
        <Row style={{ marginTop: "1rem", flexWrap: "wrap-reverse" }}>
          <Col style={{ paddingBottom: "10px" }} xs={12} md={8}>
            <CommunityList category={category} items={communities || []} />
          </Col>
          <Col style={{ paddingBottom: "10px" }} xs={12} md={4}>
            <div
              style={{ position: "-webkit-sticky", position: "sticky", top: 0 }}
            >
              <Categories
                onSelect={onSelectCategory}
                items={categories || []}
                onAllSelect={onSelectAll}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </MainLayout>
  );
}

Explore.getInitialProps = async ({ isServer, store, query }) => {
  await store.execSagaTasks(isServer, (dispatch) => {
    dispatch(getCategoriesRequest());
    dispatch(getAllCommunitiesRequest());
  });
  return {};
};

const mapDispatchToProps = (dispatch) => ({
  getCategories: () => dispatch(getCategoriesRequest()),
  getCommunities: (payload) => dispatch(getComsByCategoryRequest(payload)),
  getAllCom: (payload) => dispatch(getAllCommunitiesRequest(payload)),
});

const mapStateToProps = (state) => ({
  categories: state.categories.data,
  communities: state.comsByCategory.data,
  allCom: state.communities.data,
});

export default connect(mapStateToProps, mapDispatchToProps)(Explore);
