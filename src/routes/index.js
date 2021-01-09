import React from 'react';

const routes = {
  Root: {
    path: `/`,
  },
  Auth: {
    Login: {
      path: '/login',
      component: React.lazy(() =>
        import('../pages/Auth/LoginPage' /* webpackChunkName: "LoginPage" */),
      ),
    },
    Signup: {
      path: '/signup',
      component: React.lazy(() =>
        import('../pages/Auth/SignupPage' /* webpackChunkName: "SignupPage" */),
      ),
    },
  },
  Home: {
    path: `/home`,
    component: React.lazy(() =>
      import('../pages/HomePage' /* webpackChunkName: "HomePage" */),
    ),
  },
};
export default routes;
