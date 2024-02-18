import React from 'react';
import { useAuth } from '../../context/AuthContext';

const WelcomeMessage = () => {
  const { user } = useAuth();
  return <p className="mb-0">Welcome, User <strong style={{color:'green'}}>{user?.id}.{user?.name}</strong>!</p>;
};

export default WelcomeMessage;
