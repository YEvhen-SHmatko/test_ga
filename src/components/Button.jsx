import React from 'react';

function Button({ type = 'button', onClick, children = 'Submit' }) {
  return (
    <button type={type} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
