import React from "react";
import {Route, Routes} from 'react-router-dom'
import "./App.css";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Works from "./pages/Works";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/works" element={<Works/>}/>
    </Routes>
  );
}

export default App;
