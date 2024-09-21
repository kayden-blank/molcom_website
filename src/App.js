import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./Home"
import AboutUs from './AboutUs';
import Mission from './Mission';
import Teams from './Teams';
import Schedule from './Schedule';
import Fibre from "./Fibre.js";
import Procurement from './Procurement.js';

function App() {
  return (
    <Router>
      <div>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/Fibre" element={<Fibre />} />
          <Route path="/procurement" element={<Procurement />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
