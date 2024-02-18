import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext'; 
import { USERS_URL } from '../../services/apiUrls';
import Button from '../../shared/Button';

const Login = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth(); 
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get(USERS_URL, {
        params: { email },
      });

      if (response.data.length > 0) {
        
        const userData = response.data[0];


        login(userData); 
        navigate('/home'); 
      } else {
        setError('You are not authorized. Please check your email.');
        alert('You are not authorized. Please check your email.');
      }
    } catch (error) {
      setError('An error occurred. Please try again.');
      console.error('API request failed:', error);
    }
  };

  return (
    <div className='container mt-5'>
      <div className='row'>
        <div className='col-md-4'></div>
        <div className='col-md-4'>
          <div className='card p-4'>
            <h2 className='text-center mb-4'> User Login</h2>
            <form onSubmit={handleSubmit}>
              <div className='mb-3'>
                <label htmlFor='email' className='form-label'>Email:</label>
                <input
                  type='email'
                  className='form-control'
                  id='email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              {error && <p className='text-danger'>{error}</p>}
              <div className='text-center'>
                <Button type="submit" color={'success'} name={'Login'} />
              </div>
            </form>
          </div>
        <div className='col-md-4'></div>
      </div>
    </div>
    </div>
  );
};

export default Login;
