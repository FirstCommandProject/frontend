import React from "react";
import "./Header.css";
import ourLogo from "./images/NewLogo.jpg"
function Header() {

  var a = document.querySelectorAll('.navigation .butt a');
  for (var i=a.length; i--;) {
    if (a[i].href === window.location.pathname || a[i].href === window.location.href) a[i].className += ' active';
  }
    return (
      <div className="mainHeader">
      
         <img className = "OurIcon" src ={ourLogo} alt={"logo"}  width ="72" height="46" left="50" top="45" /> 
       
        <div className = "Buttons">
          <nav className="nav">
            
            <ul className="navigation" id="navigation">
              <li className='butt'> <a className='c' href='/about'>О проекте</a></li>
              <li className='butt' > <a className='c' href='/departments'>Кафедры</a></li>
              <li className='butt'><a className='c' href='/login'>Вход</a></li>
              <li className='butt'><a className='Registrationbutton' href='/signin'>Регистрация</a></li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
  
  export default Header;