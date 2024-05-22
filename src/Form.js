import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Form.css';

const Form = () => {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    phoneNo: '',
    country: '',
    city: '',
    panNo: '',
    aadharNo: '',
  });

  const [errors, setErrors] = useState({});
  const [passwordVisible, setPasswordVisible] = useState(false);

  const validate = () => {
    const newErrors = {};

    if (!formValues.firstName.trim()) newErrors.firstName = 'First Name is required';
    if (!formValues.lastName.trim()) newErrors.lastName = 'Last Name is required';
    if (!formValues.username.trim()) newErrors.username = 'Username is required';
    if (!formValues.email.trim()) newErrors.email = 'Email is required';
    if (!/\S+@\S+\.\S+/.test(formValues.email)) newErrors.email = 'Email address is invalid';
    if (!formValues.password.trim()) newErrors.password = 'Password is required';
    if (!formValues.phoneNo.trim()) newErrors.phoneNo = 'Phone No. is required';
    if (!formValues.country.trim()) newErrors.country = 'Country is required';
    if (!formValues.city.trim()) newErrors.city = 'City is required';
    if (!formValues.panNo.trim()) newErrors.panNo = 'Pan No. is required';
    if (!formValues.aadharNo.trim()) newErrors.aadharNo = 'Aadhar No. is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      navigate('/details', { state: { formValues } });
    }
  };

  return (
    <div className="form-container">
        <h1>Form Validation</h1>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label>First Name</label>
          <input type="text" name="firstName" value={formValues.firstName} onChange={handleChange} />
          {errors.firstName && <p className="error">{errors.firstName}</p>}
        </div>
        <div className="form-group">
          <label>Last Name</label>
          <input type="text" name="lastName" value={formValues.lastName} onChange={handleChange} />
          {errors.lastName && <p className="error">{errors.lastName}</p>}
        </div>
        <div className="form-group">
          <label>Username</label>
          <input type="text" name="username" value={formValues.username} onChange={handleChange} />
          {errors.username && <p className="error">{errors.username}</p>}
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="email" name="email" value={formValues.email} onChange={handleChange} />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>
        <div className="form-group password-toggle">
          <label>Password</label>
          <input
            type={passwordVisible ? 'text' : 'password'}
            name="password"
            value={formValues.password}
            onChange={handleChange}
          />
          <button type="button" onClick={() => setPasswordVisible(!passwordVisible)}>
            {passwordVisible ? 'Hide' : 'Show'}
          </button>
          {errors.password && <p className="error">{errors.password}</p>}
        </div>
        <div className="form-group">
          <label>Phone No.</label>
          <input type="text" name="phoneNo" value={formValues.phoneNo} onChange={handleChange} />
          {errors.phoneNo && <p className="error">{errors.phoneNo}</p>}
        </div>
        <div className="form-group">
          <label>Country</label>
          <select name="country" value={formValues.country} onChange={handleChange}>
            <option value="">Select Country</option>
            <option value="India">India</option>
            <option value="USA">USA</option>
          </select>
          {errors.country && <p className="error">{errors.country}</p>}
        </div>
        <div className="form-group">
          <label>City</label>
          <select name="city" value={formValues.city} onChange={handleChange}>
            <option value="">Select City</option>
            {formValues.country === 'India' && (
              <>
                <option value="Delhi">Delhi</option>
                <option value="Mumbai">Mumbai</option>
              </>
            )}
            {formValues.country === 'USA' && (
              <>
                <option value="New York">New York</option>
                <option value="Los Angeles">Los Angeles</option>
              </>
            )}
          </select>
          {errors.city && <p className="error">{errors.city}</p>}
        </div>
        <div className="form-group">
          <label>Pan No.</label>
          <input type="text" name="panNo" value={formValues.panNo} onChange={handleChange} />
          {errors.panNo && <p className="error">{errors.panNo}</p>}
        </div>
        <div className="form-group">
          <label>Aadhar No.</label>
          <input type="text" name="aadharNo" value={formValues.aadharNo} onChange={handleChange} />
          {errors.aadharNo && <p className="error">{errors.aadharNo}</p>}
        </div>
        <button type="submit" disabled={Object.keys(errors).length > 0}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
