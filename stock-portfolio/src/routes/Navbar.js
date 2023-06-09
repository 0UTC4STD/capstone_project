import React from 'react';
import { Link } from 'react-router-dom';
import Logout from './Logout';

const Navbar = ({ handleLogout }) => { 
     return (
    <nav>
      <ul style={{ display: 'flex', justifyContent: 'space-around', listStyleType: 'none' }}>
        <li><Link to="/portfolio">Portfolio</Link></li>
        <li><Link to="/research">Research</Link></li>
        <li><Link to="/buy">Buy</Link></li>
        <li><Link to="/sell">Sell</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Logout handleLogout={handleLogout}/></li>
      </ul>
    </nav>
  );
};

export default Navbar;