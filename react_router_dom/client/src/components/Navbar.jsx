import React from 'react';
import './Navbar.css';
import { NavLink , useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();
  return (
    <div className='navbar'>
      <ul>
        <NavLink to="/"> Home </NavLink>
        <NavLink to="/about"> About </NavLink>
        <NavLink to="/contact"> Contact </NavLink>
      </ul>
      <button onClick={() => navigate("/about")}>Get started</button>
    </div>
  );
}

export default Navbar;
