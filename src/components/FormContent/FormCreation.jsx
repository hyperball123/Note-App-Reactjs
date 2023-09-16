import React from "react";

function FormCreation({
  handleChange,
  handleSubmit,
  handleRadiobtn,
  handleCheckBox,
  formData
}) {
  return (
    <form className="Form" onSubmit={handleSubmit}>
      <h1>Enter Your Details</h1>
      <div className="title box">
        <label className="title label" htmlFor="title" name="title">
          Title
        </label>
        <input
          className="input Title"
          type="text"
          name="title"
          id="title"
          placeholder="Title"
          onChange={handleChange}
        />
      </div>
      <div className="description box">
        <label className="About label" htmlFor="description" name="title">
          About
        </label>
        <input
          onChange={handleChange}
          className="input About"
          type="text"
          name="description"
          id="description"
          placeholder="Description"
        />
      </div>
      <div className="Mobile box">
        <label className="Mobile label" htmlFor="mobile" name="mobile">
          Mobile
        </label>
        <input
          onChange={handleChange}
          className="input Mobile"
          type="tel"
          name="mobile"
          id="mobile"
          placeholder="Mobile"
          pattern="\+\d{2} \d{10}"
          title="Please enter a valid mobile number in the format +91 2323232323"
          required
        />
      </div>
      <div className="credit-card box">
        <label htmlFor="creditCardNumber" className="creditCardNumber label">
          Credit
        </label>
        <input
          onChange={handleChange}
          className="input credit-card-input"
          type="text"
          id="creditCardNumber"
          name="creditCardNumber"
          pattern="[0-9]{4} [0-9]{4} [0-9]{4} [0-9]{4}"
          title="Credit card number must be 16 to 19 digits long."
          placeholder="XXXX XXXX XXXX XXXX"
          required
        />
        {/* <br /> */}
        <label htmlFor="expirationDate">Expiration Date (MM/YY):</label>
        <input
          className="input"
          type="datetime-local"
          id="expirationDate"
          name="expirationDate"
          pattern="(0[1-9]|1[0-2])\/[0-9]{2}"
          title="Enter a valid expiration date in MM/YY format."
          required
        />
        {/* <br /> */}
        <label htmlFor="cvv">CVV:</label>
        <input
          className="cvv input"
          type="text"
          id="cvv"
          name="cvv"
          pattern="[0-9]{3,4}"
          title="CVV must be 3 or 4 digits."
          required
        />
      </div>
      <div className="checkbox-container">
        <div className="checkbox box">
          <label htmlFor="frontend" className="checkbox-label">
            frontend:
          </label>
          <input
            className="frontend checkbox"
            type="checkbox"
            name="frontend"
            id="frontend"
            checked={formData.frontend}
            onChange={handleCheckBox}
          />
        </div>
        <div className="checkbox box">
          <label htmlFor="backend" className="checkbox-label">
            backend:
          </label>
          <input
            className="backend checkbox"
            type="checkbox"
            name="backend"
            id="backend"
            checked={formData.backend}
            onChange={handleCheckBox}
          />
        </div>
        <div className="checkbox box">
          <label htmlFor="infrastructure" className="checkbox-label">
            infrastructure:
          </label>
          <input
            className="infrastructure checkbox"
            type="checkbox"
            name="infrastructure"
            id="infrastructure"
            checked={formData.infrastructure}
            onChange={handleCheckBox}
          />
        </div>
        <div className="checkbox box">
          <label htmlFor="devops" className="checkbox-label">
            devops:
          </label>
          <input
            className="devops checkbox"
            type="checkbox"
            name="devops"
            id="devops"
            checked={formData.devops}
            onChange={handleCheckBox}
          />
        </div>
      </div>
      <div className="radio-container">
        <div className="radio box">
          <label htmlFor="gender">gender :</label>

          <label htmlFor="male">Male</label>
          <input
            type="radio"
            name="gender"
            id="radio"
            value="male"
            // checked={formData.female}
            onChange={handleRadiobtn}
          />
          <label htmlFor="male">Female</label>
          <input
            type="radio"
            name="gender"
            value="female"
            id="radio"
            // checked={formData.female}
            onChange={handleRadiobtn}
          />
        </div>
      </div>
      <div className="buttons">
        <input className="submit btn" type="submit" value="Submit" />
      </div>
    </form>
  );
}

export default FormCreation;
