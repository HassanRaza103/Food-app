import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import {BrowserRouter as Router, Routes ,Route } from "react-router-dom";

import Search from "./Components/Search/Search";
import Playingvideo from "./Components/Playingvideo/Playingvideo";
import Home from "./Components/Home/Home";
import Dpshow from "./Components/Dpshow/Dpshow";


function App() {

  return (
    <div>

      <Router>
      <Navbar />
      <Routes>
        <Route path="/" index element={<Home/>} />
        <Route path="search/:searchQuery" index element={<Search/>} />
        <Route path="/video/:id" index element={<Playingvideo/>} />
      
      </Routes>
      </Router>
      

    </div>
  );
}

export default App;
