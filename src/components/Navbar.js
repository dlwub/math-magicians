import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <>
    <div className="nav-container">
      <h1>Math Magicians</h1>
      <ul className="nav-list">
        <li><Link to="/">Home </Link></li>
        <li className="calculator-link"><Link to="/calculator">Calculator </Link></li>
        <li><Link to="/quote">Quote </Link></li>
      </ul>
    </div>
  </>
);

export default Navbar;
