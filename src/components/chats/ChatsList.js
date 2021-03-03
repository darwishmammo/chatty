import React from "react";
import { Link } from "react-router-dom";
import { Nav, Loader } from "rsuite";
import { useChats } from "../../context/chats.context";
import ChatItem from "./ChatItem";

const ChatsList = ({ aboveElHeight }) => {
  const chats = useChats();

  return (
    <Nav
      appearance="subtle"
      vertical
      reversed
      className="overflow-y-scroll custom-scroll"
      style={{
        height: `calc(100% - ${aboveElHeight}px)`,
      }}
    >
      {!chats && (
        <Loader center vertical content="Loading" speed="slow" size="md" />
      )}
      {chats &&
        chats.length > 0 &&
        chats.map((chat) => (
          <Nav.Item
            componentClass={Link}
            to={`/chats/${chat.id}`}
            key={chat.id}
          >
            <ChatItem chat={chat} />
          </Nav.Item>
        ))}
    </Nav>
  );
};

export default ChatsList;
