import { getInstance } from './index';

export const authGuard = (to, from, next) => {
  const authService = getInstance();

  const fn = () => {
    // If the user is authenticated, continue with the route
    if (authService.isAuthenticated) {
      return next();
    }

    // Otherwise, log in and pass the target URL as state
    authService.loginWithRedirect({ appState: { targetUrl: to.fullPath } });
  };

  // If loading has already finished, check the auth state using `fn()`
  if (!authService.loading) {
    return fn();
  }

  // Watch for the loading property to change before checking isAuthenticated
  authService.$watch('loading', (loading) => {
    if (loading === false) {
      return fn();
    }
  });
};
