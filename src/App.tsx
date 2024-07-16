import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import DreamJournal from "./pages/DreamJournal";
import Soundscapes from "./pages/Soundscapes";
import Breathing from "./pages/Breathing";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Navbar from "./components/custom/Navbar";
import DefaultView from "./components/custom/DefaultView";

const App = () => {
  const location = useLocation();
  const pathname = location.pathname.split("/").pop();

  return (
    <React.Fragment>
      {pathname === "login" || pathname === "register" ? "" : <Navbar />}
      <DefaultView>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dream-journal" element={<DreamJournal />} />
          <Route path="/soundscapes" element={<Soundscapes />} />
          <Route path="/breathing" element={<Breathing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </DefaultView>
    </React.Fragment>
  );
};

export default App;
