import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Button from '../../shared/Button';
import UserList from '../UserDetailsSlider/UserDetailsSlider';
import WelcomeMessage from './WelcomeMessage';
const Home = () => {
  const location = useLocation();
  const { id, name } = location.state || {};
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate('/');
  };


  return (
    <div className="mt-3">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div>
            <h2 className="mb-0">Home</h2>
            <WelcomeMessage name={name} />

          </div>
          <div className="d-flex align-items-center">
           
            <Button onClick={handleLogout} color={'danger'} name={'Logout'} />
          </div>
        </div>
        <UserList userId={id}   />
      </div>

      
    </div>
  );
};

export default Home;
