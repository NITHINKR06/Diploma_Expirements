import React, { useState } from 'react';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    state: '',
    gender: '',
    qualification: [],
  });

  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox') {
      if (checked) {
        setFormData((prevData) => ({
          ...prevData,
          qualification: [...prevData.qualification, value],
        }));
      } else {
        setFormData((prevData) => ({
          ...prevData,
          qualification: prevData.qualification.filter((qual) => qual !== value),
        }));
      }
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = () => {
    const { name, address, state, gender, qualification } = formData;

    setSubmittedData({
      name,
      address,
      state,
      gender,
      qualification,
    });
  };

  return (
    <div>
      <h1 align="center">Registration Form</h1>
      <form>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name..."
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="address">Address</label>
          <textarea
            rows="5"
            cols="50"
            name="address"
            id="address"
            placeholder="Enter your address..."
            value={formData.address}
            onChange={handleChange}
          ></textarea>
        </div>

        <div>
          <label htmlFor="state">State</label>
          <select
            name="state"
            id="state"
            value={formData.state}
            onChange={handleChange}
          >
            <option value="KL">Kerala</option>
            <option value="KA">Karnataka</option>
            <option value="MH">Maharashtra</option>
            <option value="GU">Gujarat</option>
            <option value="AP">Andhra Pradesh</option>
          </select>
        </div>

        <div>
          <label>Gender</label>
          <input
            type="radio"
            name="gender"
            value="m"
            checked={formData.gender === 'm'}
            onChange={handleChange}
          />
          Male
          <input
            type="radio"
            name="gender"
            value="f"
            checked={formData.gender === 'f'}
            onChange={handleChange}
          />
          Female
        </div>

        <div>
          <label>Qualification</label>
          <input
            type="checkbox"
            value="SSLC"
            name="qualification"
            checked={formData.qualification.includes('SSLC')}
            onChange={handleChange}
          />
          SSLC
          <input type="checkbox" value="PUC" name="n6" id="i7" />PUC
            <input type="checkbox" value="DIPLOMA" name="n7" id="i8" />DIPLOMA 
            <input type="checkbox" value="BE" name="n8" id="i9" />BE
        
        </div>

        

        <button type="button" onClick={handleSubmit}>
          Submit
        </button>
      </form>

      {submittedData && (
        <div className="display-section">
          <h2>Thank you for your submission, {submittedData.name}!</h2>
          <p>Address: {submittedData.address}</p>
          <p>State: {submittedData.state}</p>
          <p>Gender: {submittedData.gender}</p>
          <p>Qualification: {submittedData.qualification.join(', ')}</p>
        </div>
      )}
    </div>
  );
}

export default App;
