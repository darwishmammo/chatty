import React from "react";
import { Button, Icon } from "rsuite";
import { useMediaQuery, useModalState } from "../customHooks";
import { Drawer } from "rsuite";
import Dashboard from ".";

const ToggleDashboard = () => {
  const { isOpen, close, open } = useModalState();
  const isMobile = useMediaQuery("(max-width: 992px)");

  return (
    <>
      <Button block color="blue" onClick={open}>
        <Icon icon="dashboard" /> Dashboard
      </Button>
      <Drawer full={isMobile} show={isOpen} onHide={close} placement="left">
        <Dashboard />
      </Drawer>
    </>
  );
};

export default ToggleDashboard;
