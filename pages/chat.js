import React, { Component } from "react";
import { connect } from "react-redux";
import Messenger from "../components/Messenger";
import { getConversationDetailRequest } from "../lib/conversation/actions";
import { withRouter } from "next/router";

class Chat extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const {
            getConversationDetail,
            router: { query },
        } = this.props;
        query &&
            query.conversationId &&
            getConversationDetail({ id: query.conversationId });
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Chat));
