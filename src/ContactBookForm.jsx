import React, { useState } from "react";
import "./contactBookForm.css";

export const ContactBookForm = ({
  addEntriesToList,
  editEntry,
  entryToEdit,
  clearEdit,
}) => {
  const [fullName, setFullName] = useState(entryToEdit?.fullName || "");
  const [email, setEmail] = useState(entryToEdit?.email || "");
  const [gender, setGender] = useState(entryToEdit?.gender || "");
  const [birthDate, setBirthDate] = useState(entryToEdit?.birthDate || "");
  const [education, setEducation] = useState(entryToEdit?.education || "");
  const [addedOn, setAddedOn] = useState(entryToEdit?.addedOn || "");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!fullName.trim()) {
      setError("Full name is required");
      return;
    }
    if (!email.trim()) {
      setError("Email is required");
      return;
    }
    if (!gender.trim()) {
      setError("Gender is required");
      return;
    }
    if (!birthDate.trim()) {
      setError("Birth date  is required");
      return;
    }
    if (!education.trim()) {
      setError("Education is required");
      return;
    }
    if (!addedOn.trim()) {
      setError("Added On is required");
      return;
    }

    setError("");
    if (entryToEdit) {
      editEntry({
        fullName,
        email,
        gender,
        birthDate,
        education,
        addedOn,
        id: entryToEdit.id,
      });
    } else {
      addEntriesToList({
        fullName,
        email,
        gender,
        birthDate,
        education,
        addedOn,
        id: Date.now(),
      });
    }

    setFullName("");
    setEmail("");
    setGender("");
    setBirthDate("");
    setEducation("");
    setAddedOn("");
    clearEdit();
  };
  return (
    <form onSubmit={handleSubmit} className="formContainer">
      {error && <p className="error">{error}</p>}
      <label> Full Name: </label>
      <br />
      <input
        className="fullnameIp"
        name="userFullName"
        type="text"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
      />
      <br />
      <label> Email: </label>
      <br />
      <input
        className="fullnameIp"
        name="userEmail"
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <label> Gender: </label>
      <br />
      <input
        className="fullnameIp"
        name="gender"
        type="text"
        value={gender}
        onChange={(e) => setGender(e.target.value)}
      />
      <br />
      <label> Birth Date: </label>
      <br />
      <input
        className="fullnameIp"
        name="birthDate"
        type="text"
        value={birthDate}
        onChange={(e) => setBirthDate(e.target.value)}
      />
      <br />
      <label> Education: </label>
      <br />
      <input
        className="fullnameIp"
        name="education"
        type="text"
        value={education}
        onChange={(e) => setEducation(e.target.value)}
      />
      <br />
      <label> Added On: </label>
      <br />
      <input
        className="fullnameIp"
        name="Education"
        type="text"
        value={addedOn}
        onChange={(e) => setAddedOn(e.target.value)}
      />
      <br />
      <input
        className="submitBtn"
        type="submit"
        value={entryToEdit ? "Update User" : "Add Contact"}
      />
      {entryToEdit && (
        <button className="cancelBtn" type="button" onClick={clearEdit}>
          Cancel
        </button>
      )}
    </form>
  );
};

export default ContactBookForm;
