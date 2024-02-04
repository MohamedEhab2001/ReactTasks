import React, { useState } from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';

const loginRequest = async ({ email, password }) => {
  const loginUrl = 'https://c9nvbd3v6j.execute-api.eu-west-1.amazonaws.com/dev/users/login';
  
  try {
    const response = await axios.post(loginUrl, { email, password });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.msg || 'Login failed');
  }
};

const Task4 = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const { isLoading, refetch } = useQuery(
    ['login', { email, password }],
    () => loginRequest({ email, password }),
    {
      enabled: false,
      onSuccess: (data) => {
        setError('');
        console.log('Login successful!', data);
        alert('Login successful!');
        setEmail('');
        setPassword('');
      },
      onError: (error) => {
        setError(error.message || 'Error occurred. Please try again.');
        console.error('API request failed:', error);
      },
    }
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    refetch();
  };

  return (
    <div className="container d-flex align-items-center justify-content-center min-vh-100">
      <div className="col-md-6">
        <h2 className="text-center mb-4">Login Using useQuery</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email:
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password:
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <p className="text-danger">{error}</p>}
          <button type="submit" className="btn btn-primary w-100" disabled={isLoading}>
            {isLoading ? 'Logging in...' : 'Login'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Task4;
