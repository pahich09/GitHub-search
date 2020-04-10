import React from "react";
import {NavLink} from "react-router-dom";

const Navbar = props => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="navbar-brand">Github поиск</div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink exact className="nav-link" to="/">Главная </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/about">Информация</NavLink>
          </li>
        </ul>
    </nav>
  )
}

export default Navbar
