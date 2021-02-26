import React, { useCallback } from "react";
import { Alert, Button, Icon } from "rsuite";
import { useMediaQuery, useModalState } from "../customHooks";
import { Drawer } from "rsuite";
import Dashboard from ".";
import { auth } from "../../firebase";

const ToggleDashboard = () => {
  const { isOpen, close, open } = useModalState();
  const isMobile = useMediaQuery("(max-width: 992px)");
  const onSignOut = useCallback(() => {
    auth.signOut();
    Alert.info("Signed out successfully!", 4000);
    close();
  }, [close]);

  return (
    <>
      <Button block color="blue" onClick={open}>
        <Icon icon="dashboard" /> Dashboard
      </Button>
      <Drawer full={isMobile} show={isOpen} onHide={close} placement="left">
        <Dashboard onSignOut={onSignOut} />
      </Drawer>
    </>
  );
};

export default ToggleDashboard;
