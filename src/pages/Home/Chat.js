import React from "react";
import ChatTop from "../../components/chats/top";
import Messages from "../../components/chats/messages";
import ChatBottom from "../../components/chats/bottom";
import { useParams } from "react-router";
import { useChats } from "../../context/chats.context";
import { Loader } from "rsuite";
import { CurrentChatProvider } from "../../context/current-chat.context";

const Chat = () => {
  const { chatId } = useParams();
  const chats = useChats();

  if (!chats) {
    return <Loader center vertical size="md" content="Loading" speed="slow" />;
  }

  const currentChat = chats.find((chat) => chat.id === chatId);

  if (!currentChat) {
    return <h6 className="text-center mt-page">Chat {chatId} not found</h6>;
  }

  const { createdAt, members } = currentChat;

  const currentChatData = {
    createdAt,
    members,
  };

  return (
    <CurrentChatProvider data={currentChatData}>
      <div className="chat-top">
        <ChatTop />
      </div>
      <div className="chat-middle">
        <Messages />
      </div>
      <div className="chat-bottom">
        <ChatBottom />
      </div>
    </CurrentChatProvider>
  );
};

export default Chat;
