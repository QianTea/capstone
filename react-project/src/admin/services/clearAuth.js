export const removeAuthService = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('token');
  }