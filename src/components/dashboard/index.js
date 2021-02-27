import React from "react";
import { Button, Drawer, Divider } from "rsuite";
import { useProfile } from "../../context/profile.context";
import StatefulInput from "../StatefulInput";

const Dashboard = ({ onSignOut }) => {
  const { profile } = useProfile();

  const onSave = async (newData) => {
    console.log(newData);
  };

  return (
    <>
      <Drawer.Header>
        <Drawer.Title>Dashboard</Drawer.Title>
      </Drawer.Header>
      <Drawer.Body style={{ height: "80%" }}>
        <h3>Hello {profile.name}</h3>
        <Divider />
        <StatefulInput
          name="nickname"
          initialValue={profile.name}
          onSave={onSave}
          label={<h6 className="mb-2">Nickname</h6>}
        />
      </Drawer.Body>
      <Drawer.Footer>
        <Button block color="red" onClick={onSignOut}>
          Sign Out
        </Button>
      </Drawer.Footer>
    </>
  );
};

export default Dashboard;
