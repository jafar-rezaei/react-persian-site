import React, { Component } from 'react';
import Helmet from 'react-helmet';

import '../../public/scss/app';

// Global app container for <Helmet>, global components, auth etc.
const App = ({ children }) => (
  <div className="app">
    <Helmet titleTemplate="سایت آزمایشی - %s" />
    {children}
  </div>
);

export default App;
