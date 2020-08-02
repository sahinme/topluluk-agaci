import React from 'react';
import { connect } from 'react-redux';
import { getCategoriesRequest } from '../lib/category/actions';
import Home from "../components/Layout"
import MainLayout from "../components/mainLayout";
import { toast } from "react-toastify";
import { getHomePostsRequest, getUnauthorizedPostsRequest } from '../lib/home/actions';
import { parseCookies } from 'nookies';

toast.configure();

const mapStateToProps = state => ({
  categories: state.categories,
});

const mapDispatchToProps = dispatch => ({
  getAll: () => dispatch(getCategoriesRequest()),
});

class Index extends React.Component {
  static async getInitialProps(ctx) {
    await ctx.store.execSagaTasks(ctx.isServer, (dispatch) => {
      const cookies = parseCookies(ctx);
      cookies && cookies.token ?
        dispatch(
          getHomePostsRequest({
            loaderStart: true,
            pageNumber: 1, pageSize: 6,
            token: cookies.token,
            isServer: true
          })
        ) : dispatch(
          getUnauthorizedPostsRequest({
            loaderStart: true,
            pageNumber: 1, pageSize: 6,
          })
        );
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
