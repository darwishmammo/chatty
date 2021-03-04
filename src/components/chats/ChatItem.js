import React from "react";
import { useProfile } from "../../context/profile.context";
import TimeAgo from "timeago-react";

const ChatItem = ({ chat }) => {
  const { profile } = useProfile();
  const recipient = chat.members.filter((m) => m !== profile.email);
  return (
    <div>
      <div className="d-flex justify-content-between align-items-center">
        <h3 className="text-disappear">{recipient[0]}</h3>
        <TimeAgo
          datetime={new Date(chat.createdAt)}
          className="font-normal text-black-45"
        />
      </div>

      <div className="d-flex align-items-center text-black-70">
        <span>No messages yet...</span>
      </div>
    </div>
  );
};

export default ChatItem;
