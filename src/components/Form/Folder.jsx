import React, { useState } from "react";
import "./Folder.css";
import FormCreation from "../FormContent/FormCreation";
import NoteCreation from "../NoteCreation/NoteCreation";

function Folder() {
  const inititalState = {
    title: "",
    description: "",
    mobile: "",
    creditCardNumber: "",
    frontend: "",
    backend: "",
    infrastructure: "",
    devops: "",
    gender: "",
  };
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    mobile: "",
    creditCardNumber: "",
    frontend: "",
    backend: "",
    infrastructure: "",
    devops: "",
    gender:""
  });
  const [finalData, setFinalData] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (formData.title === "") {
      setError(`Title is required`);
      // event.preventDefault();
    } else if (formData.description === "") {
      setError(`Description is required`);
    } else if (formData.description === "") {
      setError(`Description is required`);
    } else if (!isValidMobileFormat(formData.mobile)) {
      setError(`Mobile no. is required , format : +91 9823202338`);
    } else if (formData.male === "checked") {
      setError("Gender is required");
    } else {
      setFinalData((finalData) => [...finalData, formData]);
      setShowForm(false);
      setFormData(inititalState);
    }
  };

  const isValidMobileFormat = (phoneNumber) => {
    // const phonePattern = /^\+\d{2} \d{10}$/;
    const phonePattern = /^\+\d{2} \d{10}$/;
    return phonePattern.test(phoneNumber);
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
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleShowForm = () => {
    setError("");
    setShowForm(!showForm);
  };

  return (
    <div className="Folder-Section">
      <button className="New-Button" onClick={handleShowForm}>
        NEW - FORM
      </button>
      {showForm ? (
        <div className="container">
          {error && <h2 className="errors"> {error}</h2>}
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
