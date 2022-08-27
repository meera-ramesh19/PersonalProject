import React from 'react';
import { AnimatePresence } from 'framer-motion';
import { Routes, Route, useLocation } from 'react-router-dom';

// PAGES
import FourOFour from '../../Pages/FourOFour';
import Home from '../../Pages/Home';
import Index from '../../Pages/Index';
import New from '../../Pages/New';
import Show from '../../Pages/Show';
import Edit from '../../Pages/Edit';
import AboutMe from './AboutMe'

//This component to define navbar animate tranisitons
const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <div>
      <main>
        <AnimatePresence>
          <Routes location={location} key={location.pathname}>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<AboutMe />} />
            <Route path='/stocks' element={<Index />} />
            <Route path='/stocks/new' element={<New />} />
            <Route path='/stocks/:id' element={<Show />} />
            <Route path='/stocks/:id/edit' element={<Edit />} />
            <Route path='*' element={<FourOFour />} />
          </Routes>
        </AnimatePresence>
      </main>
    </div>
  );
};

export default AnimatedRoutes;
