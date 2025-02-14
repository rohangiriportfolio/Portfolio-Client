import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import LogInOut from './Components/LogInOut';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { GoogleOAuthProvider} from '@react-oauth/google';


import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <GoogleOAuthProvider clientId="825728309377-u1vkdp77pua096vm4cj9jcb59037fnba.apps.googleusercontent.com">
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/LogInOut" element={<LogInOut />} />
        </Routes>
      </GoogleOAuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
