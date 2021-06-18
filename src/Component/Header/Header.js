import React from "react";
import "./Header.css";
import ourLogo from "./images/NewLogo.jpg"
function Header() {

  var a = document.querySelectorAll('div.mainHeader div.Buttons nav.nav ul.navigation li.butt a.c');
  for (var i=a.length; i--;) {  
    console.log( '!' +a[i].href);
    console.log('http://localhost:3000'+ window.location.pathname);
    if (a[i].href ==='http://localhost:3000'+ window.location.pathname || a[i].href === 'http://localhost:3000'+window.location.href) a[i].className += 'active';
    console.log(a[i].className);
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