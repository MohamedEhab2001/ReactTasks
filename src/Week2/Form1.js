import React, { useState } from 'react';

const Form1 = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [formErrors, setFormErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    let errors = {};
    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      errors.email = 'Invalid email format';
    }

    if (!formData.password.trim()) {
      errors.password = 'Password is required';
    }

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();

    if (Object.keys(errors).length === 0) {
      
      setSuccessMessage('Form submitted successfully!');
      
      setFormData({
        name: '',
        email: '',
        password: '',
      });
      
      setFormErrors({});
    } else {
      
      setFormErrors(errors);
      setSuccessMessage('');
    }
  };

  return (
    <div className="container-fluid d-flex align-items-center justify-content-center min-vh-100">
      <div className="card p-4">
        <h2 className="text-center mb-4">Form with useState</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name:
            </label>
            <input type="text"  className={`form-control ${formErrors.name ? 'is-invalid' : ''}`} id="name" name="name"
              value={formData.name}
              onChange={handleChange}
            />
            {formErrors.name && <div className="invalid-feedback">{formErrors.name}</div>}
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email:
            </label>
            <input
              type="email"
              className={`form-control ${formErrors.email ? 'is-invalid' : ''}`}
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {formErrors.email && <div className="invalid-feedback">{formErrors.email}</div>}
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password:
            </label>
            <input
              type="password"
              className={`form-control ${formErrors.password ? 'is-invalid' : ''}`}
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
            {formErrors.password && <div className="invalid-feedback">{formErrors.password}</div>}
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
        {successMessage && <p className="mt-3 text-success">{successMessage}</p>}
      </div>
    </div>
  );
};

export default Form1;
