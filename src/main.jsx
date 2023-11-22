import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '../src/sixpack-prog/App';
import { createContext } from 'react';
const Context = createContext();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Context.Provider value={'ripan'}>
      <App />
    </Context.Provider>
  </React.StrictMode>
);
