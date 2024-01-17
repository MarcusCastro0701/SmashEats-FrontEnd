import React from 'react';
import ReactDom from 'react-dom';
import App from './App';

import 'react-toastify/dist/ReactToastify.css';

import './assets/styles/reset.css';
import './assets/styles/style.css';

// eslint-disable-next-line no-undef
ReactDom.render(<App />, document.querySelector('.root'));
