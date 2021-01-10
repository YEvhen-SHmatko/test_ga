import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../routes';

import { getLS, setLS } from '../../helpers/localStorage';

const Header = ({ auth }) => {
  console.log('object');
  return (
    <header className="App-header">
      {!!auth && (
        <>
          <NavLink
            to={routes.Root.path}
            className="link"
            activeClassName="link_active"
          >
            Home
          </NavLink>
          <button
            type="button"
            onClick={() => {
              setLS('auth', false);
              window.location.reload();
            }}
          >
            exit
          </button>
        </>
      )}
      {!auth && (
        <>
          <NavLink
            to={routes.Auth.Login.path}
            className="link"
            activeClassName="link_active"
          >
            Login
          </NavLink>
          <NavLink
            to={routes.Auth.Signup.path}
            className="link"
            activeClassName="link_active"
          >
            Signup
          </NavLink>
        </>
      )}
    </header>
  );
};
export default Header;
