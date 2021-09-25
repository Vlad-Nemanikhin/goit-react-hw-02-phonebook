import React from "react";
import PropTypes from "prop-types";
import { Insert, Text, Button, Link } from "./contacts.styled";

const ContactList = ({ contactsList, onRemove }) => {
  return contactsList.map((contact) => (
    <Insert key={contact.id}>
      <Text>{contact.name}:</Text>
      <Link href={`tel:${contact.number}`}>{contact.number}</Link>
      <Button type="button" onClick={() => onRemove(contact.id)}>
        Delete
      </Button>
    </Insert>
  ));
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onRemove: PropTypes.func.isRequired,
};

export default ContactList;
