import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import { Spin } from 'antd';

// import i18n (needs to be bundled ;)
import './locales/i18n';

import './assets/css/index.css';
import Routes from './routes';

ReactDOM.render(
  <Suspense fallback={() => <Spin spinning />}>
    <Router>
      <Routes />
    </Router>
  </Suspense>,
  document.getElementById('root'),
);
