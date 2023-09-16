import React, { useState } from "react";
import "./Folder.css";
import FormCreation from "../FormContent/FormCreation";
import NoteCreation from "../NoteCreation/NoteCreation";

function Folder() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    mobile: "",
    creditCardNumber: "",
    frontend: "",
    backend: "",
    infrastructure: "",
    devops: "",
    male: "",
  });
  const [finalData, setFinalData] = useState([]);
  const [showForm, setShowForm] = useState(true);

  const handleSubmit = (event) => {
    event.preventDefault();
    setFinalData((finalData) => [...finalData, formData]);
    setShowForm(false);
  };

  const handleChange = (event) => {
    const val = event.target.value;
    setFormData({ ...formData, [event.target.name]: val });
  };

const handleCheckBox = (event) => {
  const { name, checked } = event.target;

  const updatedFormData = { ...formData };

  if (checked) {
    updatedFormData[name] = true;
  } else {
    delete updatedFormData[name];
  }

  setFormData(updatedFormData);
};

  const handleRadiobtn = (event) => {
    const value= event.target;
    setFormData({
      ...formData,
      male: value === "male",
      
      female: value === "female",
    });
  };

  const handleShowForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="Folder-Section">
      <button className="New-Button" onClick={handleShowForm}>
        NEW - FORM
      </button>
      {showForm ? (
        <div className="container">
          <FormCreation
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            handleRadiobtn={handleRadiobtn}
            handleCheckBox={handleCheckBox}
            formData={formData}
          />
        </div>
      ) : (
        <NoteCreation finalData={finalData} formData={formData} />
      )}
    </div>
  );
}

export default Folder;
