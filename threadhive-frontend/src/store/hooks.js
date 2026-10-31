import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser, logout, updateUser } from './authSlice.js';
import { toggleDarkMode as toggleDarkModeAction } from './themeSlice.js';

export function useAuth() {
  const dispatch = useDispatch();
  const { token, user } = useSelector((state) => state.auth);

  return {
    token,
    user,
    loginUser: (data) => dispatch(loginUser(data)),
    logout: () => dispatch(logout()),
    updateUser: (updatedUser) => dispatch(updateUser(updatedUser)),
  };
}

export function useTheme() {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.theme.darkMode);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
  }, [darkMode]);

  return {
    darkMode,
    toggleDarkMode: () => dispatch(toggleDarkModeAction()),
  };
}
