export const addContact = (contact) => {
  localStorage.getItem("contacts") !== null
    ? localStorage.setItem(
        "contacts",
        JSON.stringify([
          ...JSON.parse(localStorage.getItem("contacts")),
          contact,
        ])
      )
    : localStorage.setItem("contacts", JSON.stringify([contact]));
  return {
    type: "phonebook/AddContact",
    payload: contact,
  };
};

export const handleFilterContacts = (e) => ({
  type: "phonebook/FilterContact",
  payload: e.target.value,
});

export const handleDeleteContacts = (id) => {
  const contactsFromLocal = JSON.parse(localStorage.getItem("contacts"));
  const contactsArrayWithoutDeletedContact = contactsFromLocal.filter(
    (contact) => contact.id !== id
  );
  localStorage.setItem(
    "contacts",
    JSON.stringify(contactsArrayWithoutDeletedContact)
  );
  return {
    type: "phonebook/DeleteContact",
    payload: id,
  };
};

export const updateContacts = (contacts) => ({
  type: "phonebook/UpdateContacts",
  payload: contacts,
});
