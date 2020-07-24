import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './reset.scss';
import './theme.scss';
import './App.scss';

import config from './config';
import rules from './config/rules';
import { App } from './App';
import { getDomElement, validateConfig } from './utils';

validateConfig(config, rules);

ReactDOM.render(
  <Router>
    <Route path="*" component={(props) => <App {...props} config={config} />} />
  </Router>,
  getDomElement(config.inputContainer)
);
