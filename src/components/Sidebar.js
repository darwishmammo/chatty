import React, { useEffect, useRef, useState } from "react";
import ToggleDashboard from "./dashboard/ToggleDashboard";
import AddContactToggle from "./AddContactToggle";
import { Divider } from "rsuite";
// import ContactsList from "./contacts/ContactsList";
import StartChatBtn from "./StartChatBtn";
import ChatsList from "./chats/ChatsList";

const Sidebar = () => {
  const topSidebarRef = useRef();
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (topSidebarRef.current) {
      setHeight(topSidebarRef.current.scrollHeight);
    }
  }, [topSidebarRef]);
  return (
    <div className="h-100 pt-2">
      <div ref={topSidebarRef}>
        <ToggleDashboard />
        <AddContactToggle />
        <StartChatBtn />
        <Divider>Chats List</Divider>
      </div>
      {/* <ContactsList aboveElHeight={height} /> */}
      <ChatsList aboveElHeight={height} />
    </div>
  );
};

export default Sidebar;
