import React, { useState } from 'react';
import Input from '../../../components/Input';
import { getLS, setLS } from '../../../helpers/localStorage';
import notification from '../../../helpers/notifications';
import { checkQuantityClick, objHas } from '../../../helpers/utils';
import {
  validationName,
  validationPassword,
} from '../../../helpers/validation';

function LoginPage() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      if (checkQuantityClick('login', 3)) {
        const db = await getLS('db');
        if (!db || !(db && objHas(db, name))) {
          notification({ type: 'error', message: 'Invalid credentials' });
          return;
        }

        if (!validationName(name) || db[name].name !== name) {
          notification({ type: 'error', message: 'Invalid credentials' });
          return;
        }

        if (!validationPassword(password) || db[name].password !== password) {
          notification({ type: 'error', message: 'Invalid credentials' });
          return;
        }
        setLS('auth', true);
        window.location.reload();
      }
    } catch (error) {
      notification({ type: 'error', message: 'Something went wrong' });
    }
  };

  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
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
        <div>Login</div>
        <Input
          value={name}
          validation={validationName}
          onChange={setName}
          placeholder="Enter name"
        />
        <Input
          value={password}
          type="password"
          errorText="Password should be at least 8 characters long and have a variety of characters including letters, numbers, punctuation, and upper and lower case."
          validation={validationPassword}
          onChange={setPassword}
          placeholder="Enter password"
        />
        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
}

export default LoginPage;
