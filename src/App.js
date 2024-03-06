// App.js
import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import LayoutRoutes from './components/LayoutRoutes';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
      <LayoutRoutes />
    </Router>
  );
}

export default App;