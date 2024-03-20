import React, { useState } from 'react';
import Dashboard from './Dashboard';
import './Application.css';

export default function Application() {
  const [formData, setFormData] = useState({
    company: '',
    jobRole: '',
    salary: '',
    workMode: '',
    workTime: '',
    workShift: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to server or perform other actions
    console.log(formData);
    // Reset form data after submission if needed
    setFormData({
      company: '',
      jobRole: '',
      salary: '',
      workMode: '',
      workTime: '',
      workShift: ''
    });
  };

  return (
    <div>
      <Dashboard />
      <div className='appli'>
        <h2>Job Post</h2>
      </div>
      <form className="application-form" onSubmit={handleSubmit}>
        <label>
          Company:
          <input type="text" name="company" value={formData.company} onChange={handleChange} />
        </label>
        <label>
          Job Role:
          <input type="text" name="jobRole" value={formData.jobRole} onChange={handleChange} />
        </label>
        <label>
          Salary:
          <input type="text" name="salary" value={formData.salary} onChange={handleChange} />
        </label>
        <label>
          Work Mode:
          <input type="text" name="workMode" value={formData.workMode} onChange={handleChange} />
        </label>
        <label>
          Work Time:
          <input type="text" name="workTime" value={formData.workTime} onChange={handleChange} />
        </label>
        <label>
          Work Shift:
          <input type="text" name="workShift" value={formData.workShift} onChange={handleChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
