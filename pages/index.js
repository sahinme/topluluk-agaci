import React from 'react';
import { connect } from 'react-redux';
import { parseCookies, setCookie, destroyCookie } from 'nookies'
import { getCategoriesRequest } from '../lib/category/actions';
import Home from "../components/Layout"
import MainLayout from "../components/mainLayout";
import { getHomePostsRequest, getUnauthorizedPostsRequest } from '../lib/home/actions';
import { getUserCommunitiesRequest } from '../lib/community/actions';
import { getCountRequest } from '../lib/notifications/actions';
import { getUnreadsRequest } from '../lib/messages/actions';
import { isLoggedWithCookies } from '../lib/helpers';

const mapStateToProps = state => ({
  categories: state.categories,
});

const mapDispatchToProps = dispatch => ({
  getAll: () => dispatch(getCategoriesRequest()),
});

class Index extends React.Component {
  static async getInitialProps(ctx) {
    const cookies = parseCookies(ctx);
    await ctx.store.execSagaTasks(ctx.isServer, (dispatch) => {
      isLoggedWithCookies(ctx) ?
        dispatch(getHomePostsRequest({ pageNumber: 1, pageSize: 6, loderStart: true, token: cookies.token }))
        : dispatch(getUnauthorizedPostsRequest({
          pageNumber: 1,
          pageSize: 6,
          loderStart: true,
        }))
      dispatch(getUserCommunitiesRequest({ token: cookies.token }));
      dispatch(getCountRequest());
      dispatch(getUnreadsRequest());
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
