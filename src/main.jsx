import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyles from './styles/global';
import theme from './styles/theme';
import { ThemeProvider } from 'styled-components';
import { AuthProvider } from './hooks/auth';

import { Routes } from './routes'

//import { Details } from './pages/Details'
//import { Home } from './pages/Home'
//import { Home_two } from './pages/Home_two'
//import { SignIn } from './pages/SignIn'
//import { SignOut } from './pages/SignOut'
//import { Profile } from './pages/Profile'
//import { New_Movie } from './pages/New_Movie'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AuthProvider>     
          <Routes />
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
)
