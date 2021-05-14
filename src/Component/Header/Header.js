import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
  
function Header() {
 
    return (
      <div className="main-header">
        
        <NavLink to='/my/test' activeClassName='activeLink'>
          <button className ="myButton"> Пройти тестирование </button>
        </NavLink>
        <NavLink to='/my/institute' activeClassName='activeLink'>
          <button className ="myButton"> Кафедры </button>
        </NavLink>
        <NavLink to='/my/faq' activeClassName='activeLink'>
          <button className ="myButton"> Техподдержка </button>
        </NavLink>
        <NavLink to='/login' activeClassName='activeLink'>
          <button className ="myButton" ><span className = "icon"></span> Войти </button>
        </NavLink>
      </div>
    );
  }
  
  export default Header;