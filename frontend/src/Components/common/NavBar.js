import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import WixLogo from '../../assets/Logo.jpg';
import { FcComboChart } from 'react-icons/fc';
import './navbar.css';

export default function NavBar() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <nav className='navbar'>
      <Link to='/' className='nav-logo'>
        <FcComboChart size={'4em'} />
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
          <Link to='/charts' className='nav-link' onClick={closeMenu}>
            Charts
          </Link>
        </li>
        <li className='nav-item'>
          <Link to='/charts/new' className='nav-link' onClick={closeMenu}>
            New
          </Link>
        </li>
        <li className='nav-item'>
          <Link to='/equities/' className='nav-link' onClick={closeMenu}>
            Equities
          </Link>
        </li>
        <li className='nav-item'>
          <Link to='/equities/names' className='nav-link' onClick={closeMenu}>
            Equity Names
          </Link>
        </li>
      </ul>
    </nav>
  );
}
