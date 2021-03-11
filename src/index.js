import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { IntlProvider } from 'react-intl';
import App from './App';
import * as serviceWorker from './serviceWorker';
import fi from './languages/fi.json';
import en from './languages/en.json';


const translations = {
  fi,
  en,
};

const lang = localStorage.getItem('language') || 'fi';

ReactDOM.render(
  <IntlProvider messages={translations[lang]}>
    <App />
  </IntlProvider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
