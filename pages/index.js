import React from 'react';
import { connect } from 'react-redux';
import { getCategoriesRequest } from '../lib/category/actions';
import Home from "../components/Layout"
import MainLayout from "../components/mainLayout";
import { getHomePostsRequest, getUnauthorizedPostsRequest } from '../lib/home/actions';

const mapStateToProps = state => ({
  categories: state.categories,
});

const mapDispatchToProps = dispatch => ({
  getAll: () => dispatch(getCategoriesRequest()),
});

class Index extends React.Component {
  static async getInitialProps({ isServer, store }) {
    await store.execSagaTasks(isServer, (dispatch) => {
      dispatch(getCategoriesRequest())
      const auth = store.getState().auth;
      if (auth.data.token) {
        dispatch(getHomePostsRequest({ pageNumber: 1, pageSize: 6, loderStart: true }));
      } else {
        dispatch(getUnauthorizedPostsRequest({
          pageNumber: 1,
          pageSize: 6,
          loderStart: true,
        }))
      }
    });
    return {};
  }

  render() {
    return (
      <div>
        <MainLayout>
          <Home />
        </MainLayout>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);
