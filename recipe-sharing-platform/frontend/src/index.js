import React, { StrictMode } from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

console.log('Rendering App component'); // Add console.log() here

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);