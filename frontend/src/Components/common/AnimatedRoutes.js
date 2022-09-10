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
import Data from '../../Pages/Data';
import ShowEquities from '../../Pages/ShowEquities';
import EquityIndex from '../../Pages/EquityIndex';
import AboutMe from './AboutMe';

//This component to define navbar animate tranisitons
const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <div style={{ background: '#86d0c24a' }}>
      <main>
        <AnimatePresence>
          <Routes location={location} key={location.pathname}>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<AboutMe />} />
            <Route path='/charts' element={<Index />} />
            <Route path='/charts/new' element={<New />} />
            <Route path='/charts/data' element={<Data />} />
            <Route path='/charts/:id' element={<Show />} />
            <Route path='/charts/:id/edit' element={<Edit />} />
            <Route path='/equities' element={<EquityIndex />} />
            <Route path='/equities/names' element={<ShowEquities />} />
            <Route path='*' element={<FourOFour />} />
          </Routes>
        </AnimatePresence>
      </main>
    </div>
  );
};

export default AnimatedRoutes;
