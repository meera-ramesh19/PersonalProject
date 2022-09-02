import React from 'react';
// import { Link } from 'react-router-dom';
// import '../styles/home.css';
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
        // backgroundColor: '',
        height: '100vh',
      }}
    >
      {/* <h2>Home</h2> */}
      <h1 style={{color: '#786d78',fontFamily:'serif',fontSize:'2rem'}}> Welcome to Charts Dashboard</h1>
    </motion.div>
  );
};

export default Home;
