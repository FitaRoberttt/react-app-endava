import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
    return (

        <nav className="navStyles">
            <img src="/assets/logo192.png" alt="logo" className="logo" />
            <div className="buttons">
            <NavLink to="/">Users</NavLink>
            <NavLink to="/admin">Admin</NavLink>
            </div>
        </nav>

    )
}

export default Nav;