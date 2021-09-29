import React from 'react';
import {NavLink} from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import '../node_modules/font-awesome/css/font-awesome.css';
import img3 from  '../src/images/logo.png';
import Home from './Home';


const Navbar = ()=>{
    return(
        <div className="main-header">
        <div className="container">
        <div className="row">
        <div className="col-lg-2 col-md-2 col-xs-12">
            <div className="Logo-head">
              <img src={img3} className="img-fluid" alt="img" />
            </div>
        </div>
        <div className="col-lg-8 col-md-8 col-xs-12">
        <div className="row">
            <div className="col-lg-12 col-md-12 col-xs-12">
            <div className="header-no">
            <a href="#"><i class="fa fa-phone-square" aria-hidden="true"></i>0808 164 0709</a>
        </div>
            </div>
        </div>
        <nav className="navbar navbar-expand-lg">
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item">
        <NavLink className="nav-link" to="/Home">Home</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/Logo">Logo Type</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/PackagesMain">Packages</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/Portfolio">PORTFOLIO</NavLink>
      </li>
    </ul>
  </div>
</nav>
</div>
<div className="col-lg-2 col-md-2 col-xs-12">
<div className="header-btn">
    <a href="#">GET A FREE QUOTE</a>
</div>
</div>
</div>
      </div>
      </div>
    )
};


export default Navbar;