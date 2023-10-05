import logo from './logo.svg';
import './App.css';
import NavBar from './layouts/NavBar';
import Footer from './layouts/Footer';
import { BrowserRouter as Router, Route, Link, Routes, NavLink } from 'react-router-dom';
import Home from './Pages/home/Home';

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
    </div>
  );
}

export default App;

