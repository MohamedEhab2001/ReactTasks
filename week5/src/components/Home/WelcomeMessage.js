import React from 'react';

const WelcomeMessage = ({ name }) => {
  return <p className="mb-0">Welcome, User <strong style={{color:'green'}}>{name}</strong>!</p>;
};

export default WelcomeMessage;
