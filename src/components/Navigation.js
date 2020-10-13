import React from 'react';
import '../App.css';
import logo from '../logoplaceholder.png';
 
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
       <div className="navbar">
          <NavLink to="/"><img className="logo" src={logo} alt="Logo"/></NavLink>
          <div className="menuitems">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/pricing">Pricing</NavLink>
          </div>
       </div>
    );
}
 
export default Navigation;