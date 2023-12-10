
import React, { useState, useRef } from 'react';
import './App.css';

const App = () => {
  const [formData, setFormData] = useState({
    name: '',
    regNo: '',
    address: '',
    gender: '',
    semester: '',
  });

  const [displaySubmission, setDisplaySubmission] = useState(false);

  const fileInputRef = useRef(null);

  const handleInputChange = (e) => {
    const { name, value, type } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'file' ? fileInputRef.current.files[0] : value,
    }));
  };

  const handleSubmit = () => {
    setDisplaySubmission(true);
  };

  return (
    <div>
      <div>
        <center>
          <h1>SDM Polytechnic, Ujire, Belthangady Tq</h1>
          <h4>Affiliated to AICTE, New Delhi, Registered by DTE</h4>
        </center>
      </div>

      <h1 align="center">Registration Form</h1>
      {displaySubmission ? (
        <div className="display-section">
          <h2>Thank you for your submission, {formData.name}!</h2>
          <p>Registration Number: {formData.regNo}</p>
          <p>Address: {formData.address}</p>
          <p>Gender: {formData.gender}</p>
          <p>Semester: {formData.semester}</p>
          {formData.photo && (
            <div>
              <p>Photo:</p>
              <img src={URL.createObjectURL(formData.photo)} alt="Uploaded" style={{ maxWidth: '100%', maxHeight: '200px' }} />
            </div>
          )}
        </div>
      ) : (
        <form>
          
          <div>
           <label htmlFor="i1">Name</label>
           <input type="text" size="15" name="name" id="i1" placeholder="Enter your name..." onChange={handleInputChange} />
         </div><br />

         <div>
           <label htmlFor="regNo">Reg No:</label>
           <input type="text" name="regNo" id="regNo" placeholder="Enter registration number..." onChange={handleInputChange} />
         </div><br />

         <div>
           <label htmlFor="i2">Address</label>
           <textarea rows="5" cols="50" name="address" id="i2" onChange={handleInputChange}></textarea><br />
         </div><br />

         <div>
           <label>Gender</label>
           <input type="radio" name="gender" value="m" onChange={handleInputChange} /> Male 
           <input type="radio" name="gender" value="f" onChange={handleInputChange} /> Female<br /><br />
         </div><br />

          <div id="qu">
            <label>Semester</label>
            {[1, 2, 3, 4, 5, 6].map((semester) => (
              <label key={semester}>
                <input type="radio" value={semester} name="semester" onChange={handleInputChange} /> {semester}
              </label>
            ))}
          </div><br />

          <div>
            <label htmlFor="i10">Upload Your Photo</label>
            <input type="file" name="photo" id="i10" ref={fileInputRef} onChange={handleInputChange} />
          </div><br />

          <button type="button" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

export default App;



body {
  font-family: Arial, sans-serif;
  background-color: #f4f4f4;
  margin: 0;
  padding: 0;
}

.main-container {
  width: 500px;
  margin: 0 auto;
}

form {
  background-color: #fff;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-align: left;
}

label {
  display: block;
  margin-bottom: 10px;
  font-weight: bold;
}

input[type="text"],
textarea,
select {
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  box-sizing: border-box;
}

input[type="radio"],
input[type="checkbox"] {
  margin-right: 5px;
}

button {
  background-color: #4caf50;
  color: #fff;
  padding: 12px 24px;
  border: none;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}

.display-section {
  
  margin-top: 20px;
}

.display-section h2 {
  color: #4caf50;
}

#id{
  display: flex;
  flex-direction: row;
  gap: 10px;
}

#qu label {
  display: flex;
  align-items: center;
}

