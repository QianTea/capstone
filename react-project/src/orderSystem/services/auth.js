export const staffLoginService = () => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    const token = localStorage.getItem('token');
    return isLoggedIn && token ? true : false;
  }