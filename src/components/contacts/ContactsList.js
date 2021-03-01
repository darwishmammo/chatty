import React from "react";
import { Nav } from "rsuite";
import ContactItem from "./ContactItem";

const ContactsList = ({ aboveElHeight }) => {
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
      <Nav.Item>
        <ContactItem />
      </Nav.Item>
      <Nav.Item>
        <ContactItem />
      </Nav.Item>
      <Nav.Item>
        <ContactItem />
      </Nav.Item>
      <Nav.Item>
        <ContactItem />
      </Nav.Item>
      <Nav.Item>
        <ContactItem />
      </Nav.Item>
      <Nav.Item>
        <ContactItem />
      </Nav.Item>
      <Nav.Item>
        <ContactItem />
      </Nav.Item>
      <Nav.Item>
        <ContactItem />
      </Nav.Item>
      <Nav.Item>
        <ContactItem />
      </Nav.Item>
      <Nav.Item>
        <ContactItem />
      </Nav.Item>
      <Nav.Item>
        <ContactItem />
      </Nav.Item>
      <Nav.Item>
        <ContactItem />
      </Nav.Item>
      <Nav.Item>
        <ContactItem />
      </Nav.Item>
      <Nav.Item>
        <ContactItem />
      </Nav.Item>
      <Nav.Item>
        <ContactItem />
      </Nav.Item>
      <Nav.Item>
        <ContactItem />
      </Nav.Item>
      <Nav.Item>
        <ContactItem />
      </Nav.Item>
      <Nav.Item>
        <ContactItem />
      </Nav.Item>
      <Nav.Item>
        <ContactItem />
      </Nav.Item>
    </Nav>
  );
};

export default ContactsList;
