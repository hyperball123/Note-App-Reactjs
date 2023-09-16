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

  // Create a copy of the formData object
  const updatedFormData = { ...formData };

  // Set the property to true if checked, or remove it if unchecked
  if (checked) {
    updatedFormData[name] = true;
  } else {
    delete updatedFormData[name];
  }

  // Update the state with the modified formData
  setFormData(updatedFormData);
};

  const handleRadiobtn = (event) => {
    const value= event.target;
    setFormData({
      ...formData,
      male: value === "male",
      // Set `male` to `true` if "male" is selected, otherwise set `false`.
      // This way, `formData.male` will be `true` for "Male" and `false` for "Female".
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
        // <NoteCreation finalData={finalData} />
        <NoteCreation finalData={finalData} formData={formData} />
      )}
    </div>
  );
}

export default Folder;
