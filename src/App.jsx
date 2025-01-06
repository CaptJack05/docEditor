import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DropdownPage from "./pages/DropdownPage";
import FormPage from "./pages/FormPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/select" element={<DropdownPage />} />
        <Route path="/form/:docId" element={<FormPage />} />
      </Routes>
    </Router>
  );
};

export default App;
