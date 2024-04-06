import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css"


function NavBar(){
    return(
        <nav className="background">
            <NavLink to="/"
            className="nav-link">
                Home
            </NavLink>
            <NavLink to="/Adopt"
            className="nav-link">
                Adopt
            </NavLink>
            <NavLink to="/Rehome"
            className="nav-link">
                Rehome
            </NavLink>
        </nav>
    )
}

export default NavBar;