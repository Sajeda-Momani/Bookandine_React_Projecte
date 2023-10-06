import logo from './logo.svg';
import './App.css';
import NavBar from './layouts/NavBar';
import Footer from './layouts/Footer';
import { BrowserRouter as Router, Route, Link, Routes, NavLink, BrowserRouter } from 'react-router-dom';
import Restaurants from './Pages/Restaurants/Restaurants';
import Home from './Pages/home/Home';
import Profile from './Pages/profile/profile';
import Login from './Pages/Login';
import Register from './Pages/register';

import PageTitle from './components/sections/Single/search'
import './App.css';

// import { BrowserRouter, Route, Link, Routes, NavLink } from 'react-router-dom';
import Single from './Pages/single';
import ReviewForm from './Pages/formreview';
import { Helmet } from 'react-helmet';
function App() {
  return (
    <div>
      {/* <PageTitle/> */}
    
      {/* <Register setIsLoggedIn={setIsLoggedIn} /> */}
      <Login />

      {/* <BrowserRouter>
        <NavBar />
        <Routes>

          <Route path="/restaurants/:categoryid" element={<Restaurants />} />
        <Route path="/" element={<Home />} />

        <Route path="/single/:resturantid/:categoryid" element={<Single />} />
        <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
      <Footer /> */}

    </div>
  );
}

export default App;

