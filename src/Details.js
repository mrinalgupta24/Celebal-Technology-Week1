import React from 'react';
import { useLocation } from 'react-router-dom';

const Details = () => {
  const location = useLocation();
  const { formValues } = location.state || {};

  if (!formValues) {
    return <p>No details to display</p>;
  }

  return (
    <div className="details-container">
      <h2>Submitted Details</h2>
      <p>First Name: {formValues.firstName}</p>
      <p>Last Name: {formValues.lastName}</p>
      <p>Username: {formValues.username}</p>
      <p>Email: {formValues.email}</p>
      <p>Phone No: {formValues.phoneNo}</p>
      <p>Country: {formValues.country}</p>
      <p>City: {formValues.city}</p>
      <p>Pan No: {formValues.panNo}</p>
      <p>Aadhar No: {formValues.aadharNo}</p>
    </div>
  );
};

export default Details;
