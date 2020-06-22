import React from "react";
import { getCategoriesRequest } from "../lib/category/actions";
import { connect } from "react-redux";

function Categories(props) {
  return (
    props.categories && (
      <>
        <div>{props.categories.map((x) => x.slug)}</div>
        <style jsx>{`
          .hello {
            font: 15px Helvetica, Arial, sans-serif;
            background: #eee;
            padding: 100px;
            text-align: center;
            transition: 100ms ease-in background;
          }
          .hello:hover {
            background: #ccc;
          }
        `}</style>
      </>
    )
  );
}

Categories.getInitialProps = async ({ isServer, store }) => {
  await store.execSagaTasks(isServer, (dispatch) => {
    dispatch(getCategoriesRequest());
  });
  return {};
};

const mapDispatchToProps = (dispatch) => ({
  getAll: () => dispatch(getCategoriesRequest()),
});

const mapStateToProps = (state) => ({
  categories: state.categories.data,
});

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
