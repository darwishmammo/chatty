import React from "react";
import { Button, Icon } from "rsuite";
import { useModalState } from "../customHooks";
import { Drawer } from "rsuite";
import Dashboard from ".";

const ToggleDashboard = () => {
  const { isOpen, close, open } = useModalState();

  return (
    <>
      <Button block color="blue" onClick={open}>
        <Icon icon="dashboard" /> Dashboard
      </Button>
      <Drawer show={isOpen} onHide={close} placement="left">
        <Dashboard />
      </Drawer>
    </>
  );
};

export default ToggleDashboard;
