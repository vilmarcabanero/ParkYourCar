/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Home from 'containers/Home';
import Park from 'containers/Park';
import Auth from 'containers/Auth/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

import { CssBaseline } from '@material-ui/core';
import {
  createTheme,
  ThemeProvider,
  StylesProvider,
} from '@material-ui/core/styles';
import PrivateRoute from 'utils/privateRoute';
// import GlobalStyle from '../../global-styles';
import { ThemeContextProvider } from 'utils/contextTheme';

export default function App() {
  const darkModeStored = localStorage.getItem('darkMode');
  const [darkMode, setDarkMode] = React.useState(
    darkModeStored === null ? false : JSON.parse(darkModeStored),
  );
  const theme = createTheme({
    palette: {
      primary: {
        main: '#1A73E8',
        contrastText: '#fff',
      },
      type: darkMode ? 'dark' : 'light',
    },
  });

  const themeContextProviderValues = {
    setDarkMode,
    darkMode,
  };
  return (
    <StylesProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ThemeContextProvider value={themeContextProviderValues}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/park" component={Park} />
            {/* {localStorage.getItem('authToken') ? (
              <Redirect to="/" />
            ) : (
              <Route exact path="/auth" component={Auth} />
            )} */}
            <Route component={NotFoundPage} />
          </Switch>
          {/* <GlobalStyle /> */}
        </ThemeContextProvider>
      </ThemeProvider>
    </StylesProvider>
  );
}
