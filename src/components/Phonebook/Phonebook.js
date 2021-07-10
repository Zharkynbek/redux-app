import PhonebookForm from "./PhonebookForm";
import PhonebookList from "./PhonebookList";
import PhonebookFilter from "./PhonebookFilter";

function Phonebook() {
  return (
    <div>
      <h1>Phonebook</h1>
      <PhonebookForm />
      <PhonebookFilter />
      <PhonebookList />
    </div>
  );
}

export default Phonebook;
