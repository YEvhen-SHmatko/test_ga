import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const AuthWrap = ({ auth, path, component, goTo }) => {
  return auth ? (
    <Route exact path={path} component={component} />
  ) : (
    <Redirect to={goTo} />
  );
};

export default AuthWrap;
