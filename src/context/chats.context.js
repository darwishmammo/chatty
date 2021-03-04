import React, { createContext, useState, useEffect, useContext } from "react";
import { database } from "../firebase";
import { chatsToArr } from "../utils";
import { useProfile } from "./profile.context";

const ChatsContext = createContext();

export const ChatsProvider = ({ children }) => {
  const [chats, setChats] = useState(null);
  const { profile } = useProfile();

  useEffect(() => {
    const chatListRef = database.ref("chats");

    chatListRef.on("value", (snap) => {
      const data = chatsToArr(snap.val());
      const myChats = data.filter(
        (c) => c.members[0] === profile.email || c.members[1] === profile.email
      );
      setChats(myChats);
    });

    return () => {
      chatListRef.off();
    };
  }, [profile.email]);

  return (
    <ChatsContext.Provider value={chats}>{children}</ChatsContext.Provider>
  );
};

export const useChats = () => useContext(ChatsContext);
