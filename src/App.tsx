import React, { useEffect } from 'react';
import { Navigate, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Home from "./pages/Home";
import DreamJournal from "./pages/DreamJournal";
import Soundscapes from "./pages/Soundscapes";
import Breathing from "./pages/Breathing";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Navbar from "./components/custom/Navbar";
import Footer from "./components/custom/Footer";
import { UserAuth } from "./contexts/AuthContext";
import "react-toastify/dist/ReactToastify.css";
import 'aos/dist/aos.css';

const App = () => {
  const location = useLocation();
  const pathname = location.pathname.split("/").pop();
  const { user } = UserAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user && (pathname === "login" || pathname === "register")) {
      navigate("/");
    }
  }, [user, pathname, navigate]);

  return (
    <React.Fragment>
      {pathname === "login" || pathname === "register" ? "" : <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dream-journal" element={user ? <DreamJournal /> : <Navigate to="/login" />} />
        <Route path="/soundscapes" element={user ? <Soundscapes /> : <Navigate to="/login" />} />
        <Route path="/breathing" element={user ? <Breathing /> : <Navigate to="/login" />} />
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
        <Route path="/register" element={user ? <Navigate to="/" /> : <Register />} />
      </Routes>
      {pathname === "login" || pathname === "register" ? "" : <Footer />}
    </React.Fragment>
  );
};

export default App;
