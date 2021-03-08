import React, { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router";
import { Alert } from "rsuite";
import { database } from "../../../firebase";
import { toArrWithId } from "../../../utils";
import MessageItem from "./MessageItem";

const Messages = () => {
  const { chatId } = useParams();
  const [messages, setMessages] = useState(null);

  const isChatEmpty = messages && messages.length === 0;
  const canShowMessages = messages && messages.length > 0;

  useEffect(() => {
    const messagesRef = database.ref("/messages");

    messagesRef
      .orderByChild("chatId")
      .equalTo(chatId)
      .on("value", (snap) => {
        const data = toArrWithId(snap.val());
        setMessages(data);
      });

    return () => {
      messagesRef.off("value");
    };
  }, [chatId]);

  const handleDelete = useCallback(
    async (msgId) => {
      if (!window.confirm("Delete this message?")) {
        return;
      }
      const isLast = messages[messages.length - 1].id === msgId;
      const updates = {};
      updates[`/messages/${msgId}`] = null;
      if (isLast && messages.length > 1) {
        updates[`/chats/${chatId}/lastMessage`] = {
          ...messages[messages.length - 2],
          msgId: messages[messages.length - 2].id,
        };
      }
      if (isLast && messages.length === 1) {
        updates[`/chats/${chatId}/lastMessage`] = null;
      }
      try {
        await database.ref().update(updates);
        Alert.info("Message deleted");
      } catch (err) {
        Alert.error(err.message);
      }
    },
    [chatId, messages]
  );

  return (
    <ul className="msg-list custom-scroll">
      {isChatEmpty && <li>No messages yet</li>}
      {canShowMessages &&
        messages.map((msg) => (
          <MessageItem key={msg.id} message={msg} handleDelete={handleDelete} />
        ))}
    </ul>
  );
};

export default Messages;
