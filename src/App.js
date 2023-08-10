import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";

import Footer from "./Components/Footer";

import Index from "./Pages/Index";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/quotes" element={<Index />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
