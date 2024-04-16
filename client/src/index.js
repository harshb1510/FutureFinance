import React from 'react';
import ReactDOM from 'react-dom/client';
// import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import config from "./chatbot/config.js";
import MessageParser from "./chatbot/MessageParser";
import ActionProvider from "./chatbot/ActionProvider";
import Chatbot from 'react-chatbot-kit'
import 'react-chatbot-kit/build/main.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
  </React.StrictMode>
);


reportWebVitals();
