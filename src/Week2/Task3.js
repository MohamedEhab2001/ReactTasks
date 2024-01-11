import React, { useState } from 'react';

const Task3 = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    
    const apiUrl = 'https://c9nvbd3v6j.execute-api.eu-west-1.amazonaws.com/dev/users/login';

    
    const data = {
      email: email,
      password: password,
    };

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        
        setError('');
        console.log('Login successful!');
        alert('Login successful!');
       
        setEmail('');
        setPassword('');
      } else {
      
        const errorData = await response.json();
        setError(errorData.message || 'Login failed');
        console.log('Login failed:', errorData.message);
      }
    } catch (error) {
      
      setError(' error occurred. Please try again .');
      console.error('API request failed:', error);
    }
  };

  return (
    <div className="container d-flex align-items-center justify-content-center min-vh-100">
      <div className="col-md-6">
        <h2 className="text-center mb-4">Login</h2>
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
          <button type="submit" className="btn btn-primary w-100">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Task3;
