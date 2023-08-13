import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";

import NavBar from "./controllers/NavBar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Index from "./pages/Index";
import New from "./pages/New"
import Show from "./pages/Show";
import Edit from "./pages/Edit"

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quotes" element={<Index />} />
          <Route path="/quotes/new" element={<New />} />
          <Route path="/quotes/:id" element={<Show />} />
          <Route path="/quotes/:id/edit" element={<Edit />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
