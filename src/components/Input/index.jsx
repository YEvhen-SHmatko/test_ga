import React, { useState } from 'react';
import PropTypes from 'prop-types';

function Input({ placeholder, type, onChange, errorText, validation }) {
  const [error, setError] = useState(false);
  const change = e => {
    onChange(e.target.value);
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

Input.defaultProps = {
  placeholder: 'text',
  type: 'text',
  errorText: 'incorrect data',
  validation: () => null,
};

Input.propTypes = {
  placeholder: PropTypes.string,
  type: PropTypes.string,
  errorText: PropTypes.string,
  validation: PropTypes.func,
  onChange: PropTypes.func.isRequired,
};
export default Input;
