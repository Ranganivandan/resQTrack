import React from 'react';
import '../Styles/Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {

  const handleDashboardRedirect = () => {
    window.location.href = "http://localhost:8080/signup" ||"http://192.168.1.42.:8080/signup"; 
  };
  
  return (
    <>
      <div className='mainheader'>
        <header className="header">
          <a className='logos'> ResQTrack</a>
           
          
          <nav className="nav">
          <Link to="/">Home</Link>
            <Link to="/howitworks">How it works</Link>
            <button 
              onClick={handleDashboardRedirect} 
              className="dashboard-button"
              style={{ background: 'none', border: 'none', color: '#4B5563', cursor: 'pointer', padding: 0 }}
            >
              Dashboard
            </button>
          </nav>
          <Link className="demo-button" to="/signin">Sign In</Link>
        </header>
      </div>
    </>
  );
}

export default Navbar;
