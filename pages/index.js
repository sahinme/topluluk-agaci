import React from 'react';
import Link from "next/Link"
import { connect } from 'react-redux';
import { getCategoriesRequest } from '../lib/category/actions';
import Home from "../components/Layout"
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
      console.log("girdi")
      const auth = store.getState().auth;
      console.log("auth", auth.data.token)
      if (auth.data.token) {
        dispatch(getHomePostsRequest({ pageNumber: 1, pageSize: 6, loderStart: true }));
      } else {
        console.log("else girdi")
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
        <Home />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);
