import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import  WixLogo from '../../assets/WixLogo.jpeg';
import './navbar.css';

//https://www.crazyegg.com/blog/color-palettes-financial/ for colors
//bf7e04
//025928,3c8c30,d96704,818385,303030
export default function NavBar() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const closeMenu = () => {
    setOpen(false);
  };
  return (
    
    <nav className='navbar sticky'>
      <Link to='/' className='nav-logo'>
    
      <img src={WixLogo} alt='logo' style={{width:'50px', height:'50px'}}/>
      </Link>
      <div onClick={handleClick} className='nav-icon'>
        {open ? <FiX /> : <FiMenu />}
      </div>
      <ul className={open ? 'nav-links active' : 'nav-links'}>
        <li className='nav-item'>
          <Link to='/' className='nav-link' onClick={closeMenu}>
            Home
          </Link>
        </li>
        <li className='nav-item'>
          <Link to='/about' className='nav-link' onClick={closeMenu}>
            About
          </Link>
        </li>
        <li className='nav-item'>
          <Link to='/stocks' className='nav-link' onClick={closeMenu}>
            Stocks
          </Link>
        </li>
        <li className='nav-item'>
          <Link to='/stocks/new' className='nav-link' onClick={closeMenu}>
            New
          </Link>
        </li>
      </ul>
      {/* <ul>
          
               <li class="fullwidth">
                  <Link to='/'>Home </Link>
               </li>
      
               <li >
                  <Link to='/about'>About </Link>
               </li>
    
               <li>
                  <Link to='/stocks'>Stocks </Link>
               </li>
  
               <li>
                  <Link to='/stocks/new'>New</Link>
               </li>
            </ul> */}
    </nav>
  );
}
