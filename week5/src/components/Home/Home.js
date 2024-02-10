import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import UserList from '../UserDetailsSlider/UserDetailsSlider';

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
            <p className="mb-0">Welcome, User {name}!</p>
          </div>
          <div className="d-flex align-items-center">
            <button className="btn btn-danger me-2" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </div>
        <UserList userId={id}   />
      </div>

      
    </div>
  );
};

export default Home;
