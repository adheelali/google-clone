import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SearchPage from "./pages/SearchPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/search" element={<SearchPage />}/>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
