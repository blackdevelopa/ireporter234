import React from 'react';
import { BrowserRouter } from 'react-router-dom';

/**
 * @description - App component
 * @param {object} props
 * @returns {JSX} - Returns all Components
 */
const App = () => (
  <BrowserRouter>
    <div>
      <h1>Welcome to iReporter</h1>
    </div>
  </BrowserRouter>
);

export default App;
