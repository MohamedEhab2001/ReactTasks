import React from 'react';

const CustomArrow = ({ className, style, onClick, direction }) => {
  const baseStyle = { ...style, display: 'block', background: 'black' };
  

  return (
    <div
      className={className}
      style={baseStyle}
      onClick={onClick}
    >
      {direction === 'next' ? '>' : '<'} 
    </div>
  );
};

export default CustomArrow;
