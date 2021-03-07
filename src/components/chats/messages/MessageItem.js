import React, { memo } from "react";
import TimeAgo from "timeago-react";
import { auth } from "../../../firebase";
import { useHover, useMediaQuery } from "../../customHooks";
import OnlineStatus from "../../OnlineStatus";
import ProfileAvatar from "../../ProfileAvatar";
import IconControlBtn from "./IconControlBtn";

const MessageItem = ({ message, handleDelete }) => {
  const { author, createdAt, text } = message;
  const isMobile = useMediaQuery("(max-width: 992px)");
  const [selfRef, isHovered] = useHover();
  const isAuthor = auth.currentUser.uid === author.uid;
  const canShowIcons = isMobile || isHovered;

  return (
    <li
      className={`padded mb-1 cursor-pointer ${isHovered ? "bg-black-02" : ""}`}
      ref={selfRef}
    >
      <div className="d-flex align-items-center font-bolder mb-1">
        <OnlineStatus uid={author.uid} />
        <ProfileAvatar
          src={author.avatar}
          name={author.name}
          className="ml-1"
          size="xs"
        />

        <span className="ml-2">{author.name}</span>
        <TimeAgo
          datetime={createdAt}
          className="font-normal text-black-45 ml-2"
        />
        {isAuthor && (
          <IconControlBtn
            isVisible={canShowIcons}
            iconName="close"
            tooltip="Delete message"
            onClick={() => handleDelete(message.id)}
          />
        )}
      </div>
      <div>
        <span className="word-break-all">{text}</span>
      </div>
    </li>
  );
};

export default memo(MessageItem);
