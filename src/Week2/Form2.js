

import React from 'react';
import useForm from './useForm'; 
const Form2 = () => {
  const { values, errors, successMessage, handleChange, handleSubmit } = useForm(
    { name: '', email: '', password: '' },
    (submittedValues) => {
      
      console.log('Form submitted successfully:', submittedValues);
    }
  );

  return (
    <div className="container-fluid d-flex align-items-center justify-content-center min-vh-100">
      <div className="card p-4">
        <h2 className="text-center mb-4">Form with useForm</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name:
            </label>
            <input
              type="text"
              className={`form-control ${errors.name ? 'is-invalid' : ''}`}
              id="name"
              name="name"
              value={values.name}
              onChange={handleChange}
            />
            {errors.name && <div className="invalid-feedback">{errors.name}</div>}
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email:
            </label>
            <input
              type="email"
              className={`form-control ${errors.email ? 'is-invalid' : ''}`}
              id="email"
              name="email"
              value={values.email}
              onChange={handleChange}
            />
            {errors.email && <div className="invalid-feedback">{errors.email}</div>}
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password:
            </label>
            <input
              type="password"
              className={`form-control ${errors.password ? 'is-invalid' : ''}`}
              id="password"
              name="password"
              value={values.password}
              onChange={handleChange}
            />
            {errors.password && <div className="invalid-feedback">{errors.password}</div>}
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

export default Form2;
