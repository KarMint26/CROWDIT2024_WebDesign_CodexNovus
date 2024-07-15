import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import DreamJournal from "./pages/DreamJournal";
import Soundscapes from "./pages/Soundscapes";
import Breathing from "./pages/Breathing";
import Login from "./pages/Login";
import Register from "./pages/Register";

const App = () => {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dream-journal" element={<DreamJournal />} />
        <Route path="/soundscapes" element={<Soundscapes />} />
        <Route path="/breathing" element={<Breathing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </React.Fragment>
  );
};

export default App;
