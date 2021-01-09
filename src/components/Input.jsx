import React, { useState } from 'react';
import notification from '../helpers/notifications';
import { validationName } from '../helpers/validation';

function Input({
  placeholder = 'text',
  type = 'text',
  onChange,
  errorText = 'incorrect data',
  validation,
}) {
  const [error, setError] = useState(false);
  const change = e => {
    onChange(e.target.value);
    console.log(e.target.value);
    if (!validation) return;
    if (validation(e.target.value)) {
      setError(false);
    } else {
      setError(true);
    }
  };
  return (
    <div
      style={{
        width: '100%',
        minWidth: '280px',
        maxWidth: '520px',
        padding: '10px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <input placeholder={placeholder} type={type} onChange={change} />
      {!!error && <div>{errorText}</div>}
    </div>
  );
}

export default Input;
