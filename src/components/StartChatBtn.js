import React, { useState } from "react";
import { Alert, Button, Icon, Modal, SelectPicker } from "rsuite";
import firebase from "firebase/app";
import { useContacts } from "../context/contacts.context";
import { useProfile } from "../context/profile.context";
import { database } from "../firebase";
import { useModalState } from "./customHooks";

const StartChatBtn = () => {
  const contacts = useContacts();
  const { isOpen, open, close } = useModalState();
  const [recipient, setRecipient] = useState("");
  const { profile } = useProfile();

  const handleChange = (value) => {
    setRecipient(value);
  };

  const onStart = () => {
    if (recipient === "") {
      Alert.warning("Please Select a Contact to Start a Chat");
      return;
    }
    //query if chat already exist, then forward, otherwise create new chat
    const chatsRef = database.ref("chats");
    const chat = {
      members: [recipient, profile.email],
      createdAt: firebase.database.ServerValue.TIMESTAMP,
    };
    chatsRef.push(chat);
    close();
  };
  return (
    <div className="mt-1">
      <Button block color="green" onClick={open}>
        <Icon icon="comments" /> Start Chat
      </Button>

      <Modal show={isOpen} onHide={close}>
        <Modal.Header>
          <Modal.Title>Start Chat</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <SelectPicker
            data={contacts}
            onChange={handleChange}
            style={{ width: "100%" }}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button block appearance="primary" onClick={onStart}>
            Start
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default StartChatBtn;
