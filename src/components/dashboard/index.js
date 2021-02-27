import React from "react";
import { Button, Drawer, Divider, Alert } from "rsuite";
import { useProfile } from "../../context/profile.context";
import { database } from "../../firebase";
import StatefulInput from "../StatefulInput";
import AvatarUpload from "./AvatarUpload";

const Dashboard = ({ onSignOut }) => {
  const { profile } = useProfile();

  const onSave = async (newData) => {
    const userNicknameRef = database
      .ref(`/profiles/${profile.uid}`)
      .child("name");

    try {
      await userNicknameRef.set(newData);

      Alert.success("Nickname has been updated", 4000);
    } catch (err) {
      Alert.error(err.message, 4000);
    }
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
        <AvatarUpload />
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
