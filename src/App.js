import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";

import NavBar from "./controllers/NavBar";
import Footer from "./Components/Footer";

import Home from "./Pages/Home";
import Index from "./Pages/Index";
import New from "./Pages/New";
import Show from "./Pages/Show";
import Edit from "./Pages/Edit";

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
