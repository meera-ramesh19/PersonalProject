import React from 'react';
// import { Link } from 'react-router-dom';
import '../styles/home.css';
import EquityLogo from "../assets/equity.jpg";
import { motion } from 'framer-motion';

const Home = () => {
  // const year = new Date().getFullYear();
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      style={{
        textAlign: 'center',
        // backgroundColor: '#87CEEB '
        // height: '100vh',
        // width:'800px'
      }}
    >
 
      <h1 style={{color: '#786d78',fontFamily:'serif',fontSize:'2rem'}}> Welcome to Stock Watch</h1>
      <div className='appText' >
        <h3>Invested in stocks listed on investing website? </h3>
        <h4>
        Stock Watch helps you find stocks from investing.com and lets you perform crud operation to keep track of the stock prices. Stock watch also graphs your stock prices to visually compare how the stocks are performing.
        </h4>
        <img src={EquityLogo} alt=''/>
      </div>
    </motion.div>
  );
};

export default Home;
