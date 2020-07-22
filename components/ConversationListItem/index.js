import React from 'react';
import moment from "moment";
import imgIcon from "../ProfileCard/images/user.png"


export default function ConversationListItem(props) {

  const { isUnRead, receiver, sender, id, createdDate } = props.data;
  const { user, onSelect, selectedId } = props;
  const data = user && receiver.username == user.username ? sender : receiver;
  return (
    <div style={{ backgroundColor: selectedId == id && "#ededed" }} onClick={() => onSelect(id)} className="conversation-list-item">
      <img className="conversation-photo" src={data.logoPath || imgIcon} />
      <div className="conversation-info">
        <h1 className="conversation-title">{data.username}</h1>
        <p className="conversation-snippet">{moment(createdDate).fromNow()}</p>
      </div>
      {isUnRead && <span className="bullet">•</span>}
    </div>
  );
}