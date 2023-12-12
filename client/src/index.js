import React from 'react';
import ReactDOM from 'react-dom/client';
// import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { LanguageProvider } from './LanguageContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LanguageProvider>
    <App />
    </LanguageProvider>
  </React.StrictMode>
);


reportWebVitals();
