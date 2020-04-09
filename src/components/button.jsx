import React from 'react';

const Button = ({ backgroundColor, color, value }) => {
  return (
    <button
      className='button'
      style={{ backgroundColor: `${backgroundColor}`, color: `${color}` }}
    >
      {value}
    </button>
  );
};

export { Button };
