import React, { useState } from "react";
import ContactBookForm from "./ContactBookForm";
import InformationTable from "./InformationTable";
import "./styles.css";

const DetailsBookApplication = () => {
  const [contactBookEntries, setContactBookEntries] = useState("");
  const [entryToEdit, setEntryToEdit] = useState(null);

  const addEntriesToList = (newEntry) => {
    setContactBookEntries([...contactBookEntries, newEntry]);
  };

  const editEntry = (entry) => {
    setEntryToEdit(entry);
  };

  const updateEntry = (updatedEntry) => {
    console.log("updatedEntry", updatedEntry);
    setContactBookEntries(
      contactBookEntries.map((entry) =>
        entry.id === updatedEntry.id ? updatedEntry : entry
      )
    );
  };
  const deleteEntry = (id) => {
    debugger;
    setContactBookEntries(
      contactBookEntries.filter((entry) => entry.id !== id)
    );
  };

  const clearEdit = () => {
    setEntryToEdit(null);
  };
  return (
    <div>
      <ContactBookForm
        addEntriesToList={addEntriesToList}
        editEntry={updateEntry}
        entryToEdit={entryToEdit}
        clearEdit={clearEdit}
      />
      {contactBookEntries && (
        <InformationTable
          entries={contactBookEntries}
          editEntry={editEntry}
          deleteEntry={deleteEntry}
        />
      )}
    </div>
  );
};
export default DetailsBookApplication;
