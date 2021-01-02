import React from 'react';
import Logo from '../../images/logo.png'
import './Header.css';
const Header = () => {
    return (
        <div className="header">
            <img src={Logo} alt="ema-john-logo"/>
        </div>
    );
};

export default Header;