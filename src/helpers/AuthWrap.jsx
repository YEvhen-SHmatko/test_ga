import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom';

const AuthWrap = ({ auth, path, component, goTo }) => {
  return auth ? (
    <Route exact path={path} component={component} />
  ) : (
    <Redirect to={goTo} />
  );
};

AuthWrap.defaultProps = {
  auth: false,
};

AuthWrap.propTypes = {
  auth: PropTypes.bool,
  path: PropTypes.string.isRequired,
  component: PropTypes.elementType.isRequired,
  goTo: PropTypes.string.isRequired,
};

export default AuthWrap;
