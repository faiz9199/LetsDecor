import Home from "./pages/Home";
import About from "./pages/About"
import Services from "./pages/Services"
import Gallery from "./pages/Gallery"
import Contact from "./pages/Contact"
import {Route, Routes} from 'react-router-dom'
import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/" element={<About/>} />
      <Route path="/services" element={<Services/>} />
      <Route path="/gallery" element={<Gallery/>} />
      <Route path="/contact" element={<Contact/>} />
    </Routes>
  );
}

export default App;
