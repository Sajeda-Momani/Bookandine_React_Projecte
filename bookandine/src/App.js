
import './App.css';

// import { Router, Route, Link, Routes, NavLink } from 'react-router-dom';
import Single from './Pages/single';
import ReviewForm from './Pages/formreview';
import { Helmet } from 'react-helmet';
function App() {
  return (
    <div>
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
