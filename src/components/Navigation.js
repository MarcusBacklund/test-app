import React from 'react';
import '../App.css';
 
import { NavLink } from 'react-router-dom';
 
const Navigation = () => {
    return (
       <div className="navbar">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/pricing">Pricing</NavLink>
       </div>
    );
}
 
export default Navigation;