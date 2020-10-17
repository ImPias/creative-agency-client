import React from 'react';
import Headermain from '../Headermain/Headermain';
import Clients from '../Clients/Clients';
import Navbar from '../Navbar/Navbar';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <Navbar></Navbar>
            <Headermain></Headermain>
            <Clients></Clients>
        </div>
    );
};

export default Header;