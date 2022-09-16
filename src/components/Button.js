import React from 'react';
import '../index.css';

const Button = (props) => {
  const { value, className, handleClick } = props;

  return (
    <button type="button" className={className} onClick={handleClick}>
      {value}
    </button>
  );
};

export default Button;
