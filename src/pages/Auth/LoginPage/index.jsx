import React, { Suspense, useState } from 'react';
import Button from '../../../components/Button';
import Input from '../../../components/Input';
import { getLS, setLS } from '../../../helpers/localStorage';
import notification from '../../../helpers/notifications';
import {
  validationName,
  validationPassword,
} from '../../../helpers/validation';

function LoginPage() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    try {
      const db = getLS('db');
      const login = getLS('login');
      if (+login === 3) {
        setLS('login', new Date().getTime());
        return;
      }
      if (+login + 60000 > new Date().getTime()) {
        notification({
          type: 'error',
          message: 'login user should be blocked for 1 minute',
        });
        return;
      }
      if (+login + 60000 < new Date().getTime()) {
        setLS('login', 1);
      }
      setLS('login', login + 1);
      if (!validationName(name) || db[name].name !== name) {
        notification({ type: 'error', message: 'invalid name' });
        return;
      }
      if (!validationPassword(password) || db[name].password !== password) {
        notification({ type: 'error', message: 'invalid password' });
        return;
      }
      setLS('auth', true);
      window.location.reload();
    } catch (error) {
      console.log(error);
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
        <Button onClick={handleLogin}>login</Button>
      </div>
    </div>
  );
}

export default LoginPage;
