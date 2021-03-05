import React, { useState, useCallback, useRef, useEffect } from "react";
import { useCurrentChat } from "../../../context/current-chat.context";
import {
  Button,
  Modal,
  Form,
  ControlLabel,
  FormControl,
  FormGroup,
  Schema,
  Alert,
} from "rsuite";
import firebase from "firebase/app";
import { useProfile } from "../../../context/profile.context";
import { database } from "../../../firebase";
import { useModalState } from "../../customHooks";
import { useContacts } from "../../../context/contacts.context";

const { StringType, NumberType } = Schema.Types;

const model = Schema.Model({
  name: StringType().isRequired("Name is required"),
  phone: NumberType().isRequired("Phone is required"),
  address: StringType(),
});

const INITIAL_FORM = {
  name: "",
  phone: "",
  address: "",
};

const ContactInfoBtnModal = () => {
  const recipient = useCurrentChat((v) => v.recipient);
  const contacts = useContacts();
  const [contact, setContact] = useState(null);
  const { isOpen, open, close } = useModalState();
  const { profile } = useProfile();
  const [formValue, setFormValue] = useState({
    name: "",
    phone: "",
    address: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const formRef = useRef();
  const onFormChange = useCallback((value) => {
    console.log(value);
    setFormValue(value);
  }, []);

  useEffect(() => {
    if (contacts) {
      const currentContact = contacts.filter((c) => c.email === recipient)[0];
      const { name, phone, address, id } = currentContact;
      setContact({ name, phone, address });
    }
  }, [contacts, recipient]);

  const onSubmit = async () => {
    if (!formRef.current.check()) {
      return;
    }

    setIsLoading(true);

    const contactData = {
      ...formValue,
    };

    try {
      const userContacts = database.ref(`/contacts/${profile.uid}`);

      await userContacts.update(contactData);

      Alert.info(`${formValue.name} has been updated`, 4000);

      setIsLoading(false);
      setFormValue(INITIAL_FORM);
      close();
    } catch (err) {
      setIsLoading(false);
      Alert.error(err.message, 4000);
    }
  };

  return (
    <div className="mt-1">
      <Button appearance="link" className="px-0" onClick={open}>
        Edit Contact
      </Button>

      <Modal show={isOpen} onHide={close}>
        <Modal.Header>
          <Modal.Title>About {recipient}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form
            fluid
            onChange={onFormChange}
            formValue={contact}
            model={model}
            ref={formRef}
          >
            <FormGroup>
              <ControlLabel>Name</ControlLabel>
              <FormControl name="name" placeholder="Name" />
            </FormGroup>

            <FormGroup>
              <ControlLabel>Phone</ControlLabel>
              <FormControl
                name="phone"
                type="number"
                placeholder="Phone Number"
              />
            </FormGroup>
            <FormGroup>
              <ControlLabel>Address</ControlLabel>
              <FormControl name="address" placeholder="Address" />
            </FormGroup>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            block
            appearance="primary"
            onClick={onSubmit}
            disabled={isLoading}
          >
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ContactInfoBtnModal;
