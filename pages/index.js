import React from 'react';
import { connect } from 'react-redux';
import { getCategoriesRequest } from '../lib/category/actions';
import Home from "../components/Layout"
import MainLayout from "../components/mainLayout";
import { toast } from "react-toastify";
import { getHomePostsRequest, getUnauthorizedPostsRequest } from '../lib/home/actions';

toast.configure();

const mapStateToProps = state => ({
  categories: state.categories,
});

const mapDispatchToProps = dispatch => ({
  getAll: () => dispatch(getCategoriesRequest()),
});

class Index extends React.Component {
  static async getInitialProps(ctx) {
    /*  const cookies = ctx.req && ctx.req.headers && ctx.req.headers.cookie;
     let token = null
     if (cookies) {
       token = cookies.split(" ").find(x => x.startsWith('token')).replace('token=', "")
     }
     await ctx.store.execSagaTasks(ctx.isServer, (dispatch) => {
       token ?
         dispatch(
           getHomePostsRequest({
             loaderStart: true,
             token,
             pageNumber: 1, pageSize: 6,
           })
         ) : dispatch(
           getUnauthorizedPostsRequest({
             loaderStart: true,
             pageNumber: 1, pageSize: 6,
           })
         );
     });
     return {}; */
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
