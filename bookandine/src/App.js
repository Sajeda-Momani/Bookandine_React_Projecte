import logo from './logo.svg';
import './App.css';
import NavBar from './layouts/NavBar';
import Footer from './layouts/Footer';
import { BrowserRouter as Router, Route, Link, Routes, NavLink } from 'react-router-dom';

function App() {
  return (
    <div>
      <NavBar />
      <Footer />
      <Router>
        <Routes>
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
