import React from 'react';
import './navbar.css';
import image from './assets/images/logo2.png';
import { BrowserRouter as Router, Route, Link, Routes, NavLink } from 'react-router-dom';

function NavBar() {
    return (
        <div className="logo-menu-sec">
            <div className="container">
                <div className="logo">
                    <h1 itemprop="headline">
                        <a href="index-2.html" title="Home" itemprop="url">
                            <img src='/images/black-logo.png' alt="ourlogo.png" itemprop="image" width={'200px'} />
                        </a>
                    </h1>
                </div>
                <nav>
                    <div className="menu-sec">
                        <ul>
                            <li className="menu-item-has-children">
                                <a href="#" title="HOMEPAGES" itemprop="url">
                                    <span className="red-clr">FOOD ORDERING</span>
                                    HOMEPAGES
                                </a>
                                <ul className="sub-dropdown">
                                    <li><a href="index-2.html" title="HOMEPAGE 1" itemprop="url">HOMEPAGE 1</a></li>
                                    <li><a href="index2.html" title="HOMEPAGE 2" itemprop="url">HOMEPAGE 2</a></li>
                                </ul>
                            </li>
                            <li className="menu-item-has-children">
                                <a href="#" title="RESTAURANTS" itemprop="url">
                                    <span className="red-clr">REAL FOOD</span>
                                    RESTAURANTS
                                </a>
                                <ul className="sub-dropdown">
                                    <li><a href="restaurant-found.html" title="RESTAURANT 1" itemprop="url">RESTAURANT 1</a></li>
                                    <li><a href="restaurant-found2.html" title="RESTAURANT 2" itemprop="url">RESTAURANT 2</a></li>
                                    <li><a href="restaurant-detail.html" title="RESTAURANT DETAILS" itemprop="url">RESTAURANT DETAILS</a></li>
                                    <li><a href="food-recipes.html" title="RESTAURANT DETAILS" itemprop="url">FOOD RECIPES</a></li>
                                    <li><a href="our-articles.html" title="RESTAURANT DETAILS" itemprop="url">OUR ARTICLES</a></li>
                                    <li><a href="our-menu.html" title="RESTAURANT DETAILS" itemprop="url">OUR MENU</a></li>
                                    <li><a href="our-services.html" title="RESTAURANT DETAILS" itemprop="url">OUR SERVICES</a></li>
                                </ul>
                            </li>
                            <li className="menu-item-has-children">
                                <a href="#" title="PAGES" itemprop="url">
                                    <span className="red-clr">REAL FOOD</span>
                                    PAGES
                                </a>
                                <ul className="sub-dropdown">
                                    <li className="menu-item-has-children"><a href="#" title="BLOG" itemprop="url">BLOG</a>
                                        <ul className="sub-dropdown">
                                            <li className="menu-item-has-children"><a href="#" title="BLOG LAYOUTS" itemprop="url">BLOG LAYOUTS</a>
                                                <ul className="sub-dropdown">
                                                    <li><a href="blog-right-sidebar.html" title="BLOG WITH RIGHT SIDEBAR" itemprop="url">BLOG (W.R.S)</a></li>
                                                    <li><a href="blog-left-sidebar.html" title="BLOG WITH LEFT SIDEBAR" itemprop="url">BLOG (W.L.S)</a></li>
                                                    <li><a href="blog.html" title="BLOG WITH NO SIDEBAR" itemprop="url">BLOG</a></li>
                                                </ul>
                                            </li>
                                            <li className="menu-item-has-children"><a href="#" title="BLOG DETAIL" itemprop="url">BLOG DETAIL</a>
                                                <ul className="sub-dropdown">
                                                    <li><a href="blog-detail-right-sidebar.html" title="BLOG DETAIL WITH RIGHT SIDEBAR" itemprop="url">BLOG DETAIL (W.R.S)</a></li>
                                                    <li><a href="blog-detail-left-sidebar.html" title="BLOG DETAIL WITH LEFT SIDEBAR" itemprop="url">BLOG DETAIL (W.L.S)</a></li>
                                                    <li><a href="blog-detail.html" title="BLOG DETAIL WITH NO SIDEBAR" itemprop="url">BLOG DETAIL</a></li>
                                                </ul>
                                            </li>
                                            <li className="menu-item-has-children"><a href="#" title="BLOG FORMATES" itemprop="url">BLOG FORMATES</a>
                                                <ul className="sub-dropdown">
                                                    <li><a href="blog-detail-video.html" title="BLOG DETAIL WITH VIDEO" itemprop="url">BLOG DETAIL (VIDEO)</a></li>
                                                    <li><a href="blog-detail-audio.html" title="BLOG DETAIL WITH AUDIO" itemprop="url">BLOG DETAIL (AUDIO)</a></li>
                                                    <li><a href="blog-detail-carousel.html" title="BLOG DETAIL WITH CAROUSEL" itemprop="url">BLOG DETAIL (CAROUSEL)</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="menu-item-has-children"><a href="#" title="SPECIAL PAGES" itemprop="url">SPECIAL PAGES</a>
                                        <ul className="sub-dropdown">
                                            <li><a href="404.html" title="404 ERROR" itemprop="url">404 ERROR</a></li>
                                            <li><a href="search-found.html" title="SEARCH FOUND" itemprop="url">SEARCH FOUND</a></li>
                                            <li><a href="search-not-found.html" title="SEARCH NOT FOUND" itemprop="url">SEARCH NOT FOUND</a></li>
                                            <li><a href="coming-soon.html" title="COMING SOON" itemprop="url">COMING SOON</a></li>
                                            <li><a href="login-register.html" title="LOGIN & REGISTER" itemprop="url">LOGIN & REGISTER</a></li>
                                            <li><a href="price-table.html" title="PRICE TABLE" itemprop="url">PRICE TABLE</a></li>
                                        </ul>
                                    </li>
                                    <li className="menu-item-has-children"><a href="#" title="GALLERY" itemprop="url">GALLERY</a>
                                        <ul className="sub-dropdown">
                                            <li><a href="gallery.html" title="FOOD GALLERY" itemprop="url">FOOD GALLERY</a></li>
                                            <li><a href="gallery-detail.html" title="GALLERY DETAIL" itemprop="url">GALLERY DETAIL</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="register-reservation.html" title="REGISTER RESERVATION" itemprop="url">REGISTER RESERVATION</a></li>
                                    <li><a href="how-it-works.html" title="HOW IT WORKS" itemprop="url">HOW IT WORKS</a></li>
                                    <li><a href="dashboard.html" title="USER PROFILE" itemprop="url">USER PROFILE</a></li>
                                    <li><a href="about-us.html" title="ABOUT US" itemprop="url">ABOUT US</a></li>
                                    <li><a href="food-detail.html" title="FOOD DETAIL" itemprop="url">FOOD DETAIL</a></li>
                                </ul>
                            </li>
                            <li><a href="contact.html" title="CONTACT US" itemprop="url"><span className="red-clr">REAL FOOD</span>CONTACT US</a></li>
                        </ul>
                        <a className="red-bg brd-rd4" href="register-reservation.html" title="Register" itemprop="url">REGISTER RESTAURANT</a>
                    </div>
                </nav>
            </div>
            <script src="assets/js/jquery.min.js"></script>
            <script src="assets/js/bootstrap.min.js"></script>
            <script src="assets/js/plugins.js"></script>
            <script src="assets/js/main.js"></script>
        </div>
    );
}

export default NavBar;
