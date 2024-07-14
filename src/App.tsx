import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import DreamJournal from "./pages/DreamJournal";
import Soundscapes from "./pages/Soundscapes";
import Breathing from "./pages/Breathing";

const App = () => {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dream-journal" element={<DreamJournal />} />
        <Route path="/soundscapes" element={<Soundscapes />} />
        <Route path="/breathing" element={<Breathing />} />
      </Routes>
    </React.Fragment>
  );
};

export default App;
