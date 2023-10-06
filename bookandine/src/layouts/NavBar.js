// import React from 'react';
import './navbar.css';
import React, {useState} from 'react';
import { useContext } from 'react';
import { BrowserRouter as Router, Route, Link, Routes, NavLink } from 'react-router-dom';

function NavBar() {
      // Assume isLoggedIn is a state variable that tracks the login status
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Function to handle the login/logout action
  const handleLoginLogout = () => {
    setIsLoggedIn(!isLoggedIn);
  };
    return (
        <div className="logo-menu-sec">
            <div className="container">
                <div className="logo">
                    <h1 itemprop="headline">
                        <a to="Home.js" title="Home" itemprop="url">
                            <img src='/images/black-logo.png' alt="ourlogo.png" itemprop="image" width={'200px'} />
                        </a>
                    </h1>
                </div>
                <nav>
                    <div className="menu-sec">
                        <ul>
                            <li className="menu-item-has-children">
                                <a href="/" title="HOMEPAGES" itemprop="url">
                                    HOMEPAGES
                                </a>
                                
                            </li>
                            <li className="menu-item-has-children">
                                <a href="#" title="RESTAURANTS" itemprop="url">
                                    RESTAURANTS
                                </a>
                                <ul className="sub-dropdown">
                                    <li><Link to={`restaurants/656904`} title="RESTAURANT 1" itemprop="url">Irbid</Link></li>
                                    <li><Link to={`restaurants/25336960`} title="RESTAURANT 2" itemprop="url">Amman</Link></li>
                                    <li><Link to={`restaurants/293988`} title="RESTAURANT DETAILS" itemprop="url">Jerash</Link></li>
                                </ul>
                            </li>
                            <li className="menu-item-has-children">
                                <a href="/aboutus" title="PAGES" itemprop="url">
                                    ABOUT US
                                </a>
                                
                            </li>
                            <li><a href="/contactus" title="CONTACT US" itemprop="url">CONTACT US</a></li>
                        </ul>
                        {/* <a className="red-bg brd-rd4" href="/login" title="Register" itemprop="url">LOGIN</a> */}
        
                        {isLoggedIn ? (
                            
                            <a className="red-bg brd-rd4" onClick={handleLoginLogout}>
                            LOGOUT
                            </a>
                        ) : (
                            
                            // <a className="red-bg brd-rd4" href="/login" title="Register" itemprop="url">
                            // LOGIN
                            // </a>
                            <a
                            className="yellow-bg red-bg brd-rd4"
                            href="/login"
                            title="Register"
                            itemprop="url"
                            >
                            LOGIN
                            </a>
                        )}
                    
                    </div>
                </nav>
            </div>
    
        </div>
    );
}

export default NavBar;
