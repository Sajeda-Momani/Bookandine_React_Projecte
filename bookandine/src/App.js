import logo from './logo.svg';
import './App.css';
import NavBar from './layouts/NavBar';
import Footer from './layouts/Footer';
import { BrowserRouter as Router, Route, Link, Routes, NavLink, BrowserRouter } from 'react-router-dom';
import Restaurants from './Pages/Restaurants/Restaurants';
import Home from './Pages/home/Home';

import './App.css';

// import { Router, Route, Link, Routes, NavLink } from 'react-router-dom';
import Single from './Pages/single';
import ReviewForm from './Pages/formreview';
import { Helmet } from 'react-helmet';
function App() {
  return (
    <div>
      <BrowserRouter>
      <NavBar />
        <Routes>

          <Route path="/restaurants/:id" element={<Restaurants />} />
          <Route path="/" element={<Home />} />


          <Route path="/single" element={<Single />} />


        </Routes>
      </BrowserRouter>
      <Footer />
      <Helmet>
        <script src="js/jquery.min.js"></script>
        <script src="js/bootstrap.min.js"></script>
        <script src="js/plugins.js"></script>
        <script src="js/main.js"></script>

      </Helmet>
      {/* <ReviewForm/> */}
      {/* <NavBar />
      <Footer />*/}

      {/* <Routes>
        <Route path="/menu" element={<DishesList />} />
        <Route path="/#tab1-3" element={<RestaurantGallery />} />
        </Routes> */}

    </div>
  );
}

export default App;

