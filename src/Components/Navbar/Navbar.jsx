import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="menu_style">
        <NavLink exact activeClassName="active_class" to="/">
          Home
        </NavLink>
        <NavLink exact activeClassName="active_class" to="/about">
          About
        </NavLink>
        <NavLink exact activeClassName="active_class" to="/service">
          Services
        </NavLink>
        <NavLink exact activeClassName="active_class" to="/user/imran">
          User
        </NavLink>
        <NavLink exact activeClassName="active_class" to="/contact">
          Contact
        </NavLink>
      </div>
    </>
  );
};

export default Navbar;
