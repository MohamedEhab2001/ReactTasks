
import { useState } from 'react';

const useForm = (initialState, onSubmit) => {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const validateForm = () => {
    let validationErrors = {};
    if (!values.name.trim()) {
      validationErrors.name = 'Name is required';
    }

    if (!values.email.trim()) {
      validationErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(values.email)) {
      validationErrors.email = 'Invalid email format';
    }

    if (!values.password.trim()) {
      validationErrors.password = 'Password is required';
    }

    return validationErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length === 0) {
     
      setSuccessMessage('Form submitted successfully!');
      onSubmit(values);
      setValues(initialState);
      setErrors({});
    } else {
      setErrors(validationErrors);
      setSuccessMessage('');
    }
  };

  return { values, errors, successMessage, handleChange, handleSubmit };
};

export default useForm;
