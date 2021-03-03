import React from "react";
import { Col, Grid, Row } from "rsuite";
import Sidebar from "../components/Sidebar";
import { ChatsProvider } from "../context/chats.context";
import { ContactsProvider } from "../context/contacts.context";

const Home = () => {
  return (
    <ContactsProvider>
      <ChatsProvider>
        <Grid fluid className="h-100">
          <Row className="h-100">
            <Col xs={24} md={8} className="h-100">
              <Sidebar />
            </Col>
          </Row>
        </Grid>
      </ChatsProvider>
    </ContactsProvider>
  );
};

export default Home;
