import './App.css';
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from './Components/Footer/Footer';
import Navbarr from './Components/Navbar/Navbar';
import Invest from './Components/Invest/Invest';
import Borrow from './Components/Borrow/Borrow';
import Home from './Components/Home/Home';
import Registration from './Components/Registration/Registration';
import Application from './Components/Application/Application';
import Insurance from './Components/insurance/Insurance';
import Knowledge from './Components/Knowledge/Knowledge';
import { Route, Routes, Navigate } from 'react-router-dom';

import Blogin from './Components/Blogin/Blogin';
import Llogin from './Components/Llogin/Llogin';
import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';
import RetrieveScore from './Components/report/report';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <>
      {isLoggedIn ? (
        <>
          <Navbarr onLogout={handleLogout} />
          <div data-aos="fade-up">
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/borrow" element={<Borrow />} />
              <Route path="/invest" element={<Invest />} />
              <Route path="/insurance" element={<Insurance />} />
              <Route path="/knowledge" element={<Knowledge />} />
              <Route path="/Registration" element={<Registration />} />
              <Route path="/Application" element={<Application />} />
              <Route path="/report" element={<RetrieveScore />} />
              
              
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </div>
          <Footer />
        </>
      ) : (
        <div data-aos="fade-up">
          <Routes>
            <Route path="/" element={<Navigate to="/signup" />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login onLogin={handleLogin} />} />
            <Route path="/blogin" element={<Blogin />} />
            <Route path="/llogin" element={<Llogin />} />
            
            
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      )}
    </>
  );
}
export default App