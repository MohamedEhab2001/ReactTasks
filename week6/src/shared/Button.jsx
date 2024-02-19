
import React from 'react';

const Button = ({ onClick, children, color, name }) => {
  const buttonStyle = {
    backgroundColor: color || 'primary',
  };

  return (
    <div>
    <button className={`btn btn-${color || 'primary'} w-70`} onClick={onClick} style={buttonStyle}>
      {name && <span className="button-name">{name}</span>}
      {children}
    </button>
    </div>
  );
};

export default Button;
