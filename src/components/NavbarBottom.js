import React from "react";
import Slogo from "../pages/BGimages/simplifiedwhite.png";


function NavbarBottom() {
  return (
    <div>
    <nav className="navbar fixed-bottom navbar-expand-lg row">
<img id="slogo" alt="Slogo" src= {Slogo}/>
      


    
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav ">
      <div className="col-3"><a className="nav-item nav-link active" href="./About">About The Artist<span className="sr-only">(current)</span></a></div>
      <div className="col-3"><a className="nav-item nav-link" href="./Gallery">Gallery</a></div>
      <div className="col-3"><a className="nav-item nav-link" href="./Awards">Awards</a></div>
      <div className="col-3"><a className="nav-item nav-link" href="./Services">Services</a></div>
      <div className="col-3"><a className="nav-item nav-link" href="./Contact">Contact</a></div>
      <div className="col-3"><a className="nav-item nav-link" href="./Reviews">Reviews</a></div>
      
      </div>
    </div>
  </nav>
  </div>
  );
}

export default NavbarBottom;
