import React, { useState } from "react";
import ContactBookForm from "./ContactBookForm";

import "./InformationTable.css";

const InformationTable = ({ entries, editEntry, deleteEntry }) => {
  return (
    <div className="contactInfo">
      <div>
        <hr />
        <p className="tableTitle">Contact List</p>
      </div>
      <table className="tableBox">
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Birth Date</th>
            <th>Education</th>
            <th>Added On</th>
          </tr>
        </thead>
        <tbody>
          {entries.map((entry, index) => {
            return (
              <tr key={index}>
                <td className="tableCell">{entry.fullName}</td>
                <td className="tableCell">{entry.email}</td>
                <td className="tableCell">{entry.gender}</td>
                <td className="tableCell">{entry.birthDate}</td>
                <td className="tableCell">{entry.education}</td>
                <td className="tableCell">{entry.addedOn}</td>
                <div className="btnDiv">
                  <button className="editBtn" onClick={() => editEntry(entry)}>
                    Edit
                  </button>
                  <button
                    className="deleteBtn"
                    onClick={() => deleteEntry(entry.id)}
                  >
                    Delete
                  </button>
                </div>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default InformationTable;
