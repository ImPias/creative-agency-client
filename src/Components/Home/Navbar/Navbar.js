import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../../images/logos/logo.png';

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light justify-content-around">
            <img src={Logo} style={{width: '200px'}} alt="" className="offset-md-1" />
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                     <li className="nav-item mr-5">
                         <a className="nav-link" href="/"> Home </a>
                     </li>
                     <li className="nav-item mr-5">
                         <a className="nav-link" href="/portfolio">Our Portfolio</a>
                     </li>
                     <li className="nav-item mr-5">
                         <a className="nav-link" href="/team">Our Team</a>
                     </li>
                     <li className="nav-item mr-5">
                         <a className="nav-link" href="/contact">Contact Us</a>
                     </li>
                 </ul>
                 <Link to="/login"><button className="btn btn-dark" type="submit">Login</button></Link>
            </div>
        </nav>
    );
};

export default Navbar;