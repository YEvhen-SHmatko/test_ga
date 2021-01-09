import React, { Suspense } from 'react';
import {
  NavLink,
  Redirect,
  Route,
  BrowserRouter,
  Switch,
} from 'react-router-dom';
import { NotificationContainer } from 'react-notifications';
import routes from '../routes';
import { getLS, setLS } from '../helpers/localStorage';
import AuthWrap from '../helpers/AuthWrap';

function App() {
  const auth = getLS('auth');
  return (
    <BrowserRouter>
      <div className="App">
        <NotificationContainer />
        <header className="App-header">
          {auth && (
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
        <main>
          <Suspense fallback="<Loader />">
            <Switch>
              <AuthWrap
                exact
                auth={auth}
                path={routes.Home.path}
                component={routes.Home.component}
                goTo={routes.Auth.Login.path}
              />
              <AuthWrap
                exact
                auth={!auth}
                path={routes.Auth.Login.path}
                component={routes.Auth.Login.component}
                goTo={routes.Home.path}
              />
              <AuthWrap
                exact
                auth={!auth}
                path={routes.Auth.Signup.path}
                component={routes.Auth.Signup.component}
                goTo={routes.Home.path}
              />
              <Redirect to={auth ? routes.Home.path : routes.Auth.Login.path} />
            </Switch>
          </Suspense>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
