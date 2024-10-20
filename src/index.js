import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Get the root element from your HTML
const rootElement = document.getElementById('root');

// Use createRoot and render the App
const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
