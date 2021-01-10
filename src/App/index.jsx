import React, { StrictMode, Suspense, useEffect } from 'react';
import { NavLink, Redirect, Switch, useHistory } from 'react-router-dom';
import { NotificationContainer } from 'react-notifications';
import ReactGA from 'react-ga';
import routes from '../routes';
import { getLS, setLS } from '../helpers/localStorage';
import AuthWrap from '../helpers/AuthWrap';
import Header from '../components/Header';

// ReactGA.initialize('G-VVTMBENYM9');
const App = () => {
  const auth = getLS('auth');
  return (
    <div className="App">
      <StrictMode>
        <NotificationContainer />
        <Header auth={auth} />
        <main>
          <Suspense fallback="<Loader />">
            <Switch>
              <AuthWrap
                exact
                auth={!!auth}
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
      </StrictMode>
    </div>
  );
};

export default App;
