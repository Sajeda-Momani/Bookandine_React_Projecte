import logo from './logo.svg';
import './App.css';
import NavBar from './layouts/NavBar';
import Footer from './layouts/Footer';
import { BrowserRouter as Router, Route, Link, Routes, NavLink } from 'react-router-dom';
import Home from './Pages/home/Home';

import './App.css';

// import { Router, Route, Link, Routes, NavLink } from 'react-router-dom';
import Single from './Pages/single';
import ReviewForm from './Pages/formreview';
import { Helmet } from 'react-helmet';
function App() {
  return (
    <div>
      <NavBar />
      
      <Router>
        <Routes>
        <Route path="/" element={<Home />} />

        </Routes>
      </Router>
      <Footer />
          <Helmet>
     <script src="js/jquery.min.js"></script>   
    <script src="js/bootstrap.min.js"></script>
    <script src="js/plugins.js"></script>
    <script src="js/main.js"></script>
 
      </Helmet>
      <Single/>
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

