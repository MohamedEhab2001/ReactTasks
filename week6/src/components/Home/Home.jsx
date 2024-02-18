import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import Button from '../../shared/Button';
import UserList from '../UserDetailsSlider/UserDetailsSlider';
import WelcomeMessage from './WelcomeMessage';

const Home = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth(); 

  useEffect(() => {
  
    if (!user) {
      navigate('/');
    }
  }, [user, navigate]); 

  const handleLogout = () => {
    logout(); 
    navigate('/');
  };

  return (
    <div className="mt-3">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div>
            <h2 className="mb-0">Home</h2>
            <WelcomeMessage />
          </div>
          <div className="d-flex align-items-center">
            <Button onClick={handleLogout} color={'danger'} name={'Logout'} />
          </div>
        </div>
        <UserList />
      </div>
    </div>
  );
};

export default Home;
