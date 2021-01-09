import React, { Suspense, useState } from 'react';
import Button from '../../../components/Button';
import Input from '../../../components/Input';
import { getLS, setLS } from '../../../helpers/localStorage';
import notification from '../../../helpers/notifications';
import {
  validationName,
  validationPassword,
} from '../../../helpers/validation';

function SignupPage() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const handleRegistration = () => {
    try {
      const db = getLS('db');
      if (!validationName(name) || db[name]) {
        notification({ type: 'error', message: 'invalid name' });
        return;
      }
      if (!validationPassword(password)) {
        notification({ type: 'error', message: 'invalid password' });
        return;
      }
      console.log(db);
      const newUser = { name, password };
      const newDb = { ...db, [name]: newUser };
      setLS('db', newDb);
    } catch (error) {
      console.error('error');
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
        <div>SignupPage</div>
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
        <Button onClick={handleRegistration}>Registration</Button>
      </div>
    </div>
  );
}

export default SignupPage;
