import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios'; 
import { loginRequest, loginSuccess, loginFailure } from '../Redux/Actions/AuthActions';

const Task3 = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.auth.isLoading);
  const error = useSelector((state) => state.auth.error);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    dispatch(loginRequest());

    const loginUrl = 'https://c9nvbd3v6j.execute-api.eu-west-1.amazonaws.com/dev/users/login';
                    

    const data = {
      email: email,
      password: password,
    };

    try {
      const response = await axios.post(loginUrl, data,
         {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 200) {
        dispatch(loginSuccess(response.data)); 
        console.log(response.data);
        alert("Login successful!!");
        setEmail('');
        setPassword('');
      }
       else
      {
        dispatch(loginFailure(response.data.msg || 'Login failed')); 
      }
    } catch (error) {
      let errorMessage = error.response.data.msg  || 'Error please check ';
      dispatch(loginFailure(errorMessage));
      console.error('API request failed:', error);
    }
  };

  return (
    <div className="container d-flex align-items-center justify-content-center min-vh-100">
      <div className="col-md-6">
        <h2 className="text-center mb-4">Login Using axios and Redux</h2>
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
            {isLoading ? 'Logging in...' : 'Login'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Task3;
