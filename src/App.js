import React, { Fragment } from 'react';
import { hot } from 'react-hot-loader/root';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from 'assets/styles/global';
import Routes from 'routes';

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <GlobalStyle />
        <Routes />
      </BrowserRouter>
    </Fragment>
  );
}

export default process.env.NODE_ENV === 'development' ? hot(App) : App;
