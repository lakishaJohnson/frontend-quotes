import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";

import Footer from "./components/Footer";

import Index from "./pages/Index";
import Home from "./pages/Home";

import NavBar from "./controllers/NavBar";
import Show from "./pages/Show";

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quotes" element={<Index />} />
          <Route path="/quotes/:id" element={<Show />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
