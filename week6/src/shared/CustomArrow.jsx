import React from 'react';

const CustomArrow = ({ className, style, onClick, direction }) => {
  const baseStyle = { ...style, display: 'block', background: 'black' };
  // Optional: Add direction-specific styles or functionalities

  return (
    <div
      className={className}
      style={baseStyle}
      onClick={onClick}
    >
      {direction === 'next' ? '>' : '<'} {/* Example way to differentiate visually */}
    </div>
  );
};

export default CustomArrow;
