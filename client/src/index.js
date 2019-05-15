/**
 * ************************************
 *
 * @module  index.js
 * @author Donald Blanc
 * @date
 * @description entry point for application.  Hangs React app off of #contents in index.html
 *
 * ************************************
 */
import React from 'react';
import { render } from 'react-dom';
import App from './App';

render(
  <App />,
  document.getElementById('root'),
);
