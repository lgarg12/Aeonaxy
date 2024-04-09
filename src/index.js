import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { StepsProvider } from "react-step-builder";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StepsProvider>
      <App />
    </StepsProvider>
  </React.StrictMode>
);

