import React from "react";
import { Link } from "react-router-dom";
import { Nav, Loader } from "rsuite";
import { useContacts } from "../../context/contacts.context";
import ContactItem from "./ContactItem";

const ContactsList = ({ aboveElHeight }) => {
  const contacts = useContacts();

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
      {!contacts && (
        <Loader center vertical content="Loading" speed="slow" size="md" />
      )}
      {contacts &&
        contacts.length > 0 &&
        contacts.map((contact) => (
          <Nav.Item componentClass={Link} to="/chats/someid" key={contact.id}>
            <ContactItem contact={contact} />
          </Nav.Item>
        ))}
    </Nav>
  );
};

export default ContactsList;
