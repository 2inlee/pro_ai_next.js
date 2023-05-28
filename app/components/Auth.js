import Cookies from 'js-cookie';

// Set access token cookie
export const setAccessTokenCookie = (accessToken) => {
  Cookies.set('accessToken', accessToken, { expires: 1 }); // Expires in 1 day
};

// Remove access token cookie
export const removeAccessTokenCookie = () => {
  Cookies.remove('accessToken');
};

// Check if user is authenticated (access token exists)
export const isAuthenticated = () => {
  return !!Cookies.get('accessToken');
};
