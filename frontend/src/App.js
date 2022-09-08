import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import NavBar from './Components/common/NavBar';
import TagLine from './Components/common/TagLine';
import AnimatedRoutes from './Components/common/AnimatedRoutes';

export default function App() {
  return (
    <div clastome='App'>
      <Router>
        <NavBar />
        <TagLine />
        <AnimatedRoutes />
      </Router>
    </div>
  );
}
