import _ from 'lodash';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import favicon from './logo.png';

import { HashRouter as Router } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
const link = document.querySelector("link[rel~='icon']");
if (link) {
  link.href = favicon;
} else {
  const newLink = document.createElement('link');
  newLink.rel = 'icon';
  newLink.href = favicon;
  document.head.appendChild(newLink);
}

root.render(
  <Router>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Router>
);