import React from 'react';
import { connect } from 'react-redux';
import { getCategoriesRequest } from '../lib/category/actions';
import Home from "../components/Layout"
import MainLayout from "../components/mainLayout";

const mapStateToProps = state => ({
  categories: state.categories,
});

const mapDispatchToProps = dispatch => ({
  getAll: () => dispatch(getCategoriesRequest()),
});

class Index extends React.Component {
  static async getInitialProps(ctx) {
    const cookies = ctx.req && ctx.req.headers && ctx.req.headers.cookie;
    return { cookies };
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
