import React from 'react';
import './Navbar.css';
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
    <header>
    <nav>
        <div className="logo">Travel-x</div>
        <div className="menu">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/">About</NavLink>
            <NavLink to="/">Services</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            
        </div>
        <div className="register">
            <a href ="#">Register</a>
        </div>
    </nav>
    {/* <div className="h-txt">
        <span>Enjoy</span>
        <h1>International Travel Agency</h1>
        <br></br>
        <a href="#">Book your Trip</a>
    </div> */}

</header>
            
    </>
  )
}

export default Navbar