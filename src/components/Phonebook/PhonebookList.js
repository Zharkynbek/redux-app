import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../../redux/phonebookActions";
import filterContacts from "../../helpers/filterContacts";

const PhonebookList = ({
  filter,
  contacts,
  onDeleteContact,
  onUpdateContacts,
}) => {
  const filteredContacts = filterContacts(contacts, filter);
  useEffect(() => {
    if (localStorage.getItem("contacts") !== null) {
      onUpdateContacts(JSON.parse(localStorage.getItem("contacts")));
    }
  }, [onUpdateContacts]);
  return (
    <ul>
      {filteredContacts.map(({ name, number, id }) => (
        <li key={id}>
          <p>{name}</p>
          <p>{number}</p>
          <button onClick={() => onDeleteContact(id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

const mapStateToProps = (state) => {
  return {
    contacts: state.phonebook.contacts,
    filter: state.phonebook.filter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onDeleteContact: (id) => dispatch(actions.handleDeleteContacts(id)),
    onUpdateContacts: (contacts) => dispatch(actions.updateContacts(contacts)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PhonebookList);
