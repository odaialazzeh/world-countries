import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles/index.css';
import './styles/bootstrap.min.css';
import './styles/card.css';
import './styles/search.css';
import { Provider } from 'react-redux';
import App from './App';
import store from './redux/store';

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
