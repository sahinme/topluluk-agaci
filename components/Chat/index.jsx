import React, { Component } from "react";
import Messenger from "../Messenger";
import { connect } from "react-redux";
import { getConversationDetailRequest } from "../../lib/conversation/actions";

class Chat extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {
      getConversationDetail,
      location: { state },
    } = this.props;
    state &&
      state.conversationId &&
      getConversationDetail({ id: state.conversationId });
  }
  render() {
    return <Messenger />;
  }
}

const mapDispatchToProps = (dispatch) => ({
  getConversationDetail: (payload) =>
    dispatch(getConversationDetailRequest(payload)),
});

const mapStateToProps = (state) => ({
  conversation: state.selectedConversation.data,
});

export default connect(mapStateToProps, mapDispatchToProps)(Chat);
