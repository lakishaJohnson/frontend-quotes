import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";

import Footer from "./Components/Footer";

import Index from "./pages/Index";
import NavBar from "./controllers/NavBar";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <Router>
      <NavBar />
      {/* <Home /> */}
          <Routes>
            <Route path="/" element = {<Home />} />
            <Route path="/quotes" element={<Index />} />
          </Routes>
          <Footer />
        </Router>
        
      
    </div>
  );
}

export default App;
