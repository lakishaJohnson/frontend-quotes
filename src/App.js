import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";

import Footer from "./Components/Footer";

import Index from "./Pages/Index";
import NavBar from "./controllers/NavBar";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <div className="App">
        <Router>
          <Routes>
            <Route path="/quotes" element={<Index />} />
          </Routes>
        </Router>
        <Footer />
      </div>
    </div>
  );
}

export default App;
