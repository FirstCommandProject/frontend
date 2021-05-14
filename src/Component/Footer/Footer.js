import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">     
    <div className="row">

          <p className="col-sm" style ={{
             textAlign: 'right'
          }}>
           <a href={`http://localhost:3000/about`}> By TechnoVizors </a> 
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;