const initialState = {
  phonebook: {
    contacts: [],
    filter: "",
  },
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "phonebook/AddContact":
      return {
        ...state,
        phonebook: {
          ...state.phonebook,
          contacts: [...state.phonebook.contacts, payload],
        },
      };
    case "phonebook/FilterContact":
      return {
        ...state,
        phonebook: {
          ...state.phonebook,
          filter: payload,
        },
      };
    case "phonebook/DeleteContact":
      return {
        ...state,
        phonebook: {
          ...state.phonebook,
          contacts: state.phonebook.contacts.filter(({ id }) => id !== payload),
        },
      };
    case "phonebook/UpdateContacts":
      return {
        ...state,
        phonebook: {
          ...state.phonebook,
          contacts: payload,
        },
      };
    default:
      return state;
  }
};
