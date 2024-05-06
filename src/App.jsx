import React from "react";
import {Route, Routes} from 'react-router-dom'
import "./App.css";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Works from "./pages/Works";
import Gallery from "./pages/Gallery"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/works" element={<Works/>}/>
      <Route path="/gallery" element={<Gallery/>}/>
    </Routes>
  );
}

export default App;
