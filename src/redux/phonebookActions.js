import { createAction } from "@reduxjs/toolkit";

export const addContact = createAction("phonebook/AddContact");

export const handleFilterContacts = createAction(
  "phonebook/FilterContact",
  (e) => ({
    payload: e.target.value,
  })
);

export const handleDeleteContacts = createAction("phonebook/DeleteContact");

export const updateContacts = createAction("phonebook/UpdateContacts");
