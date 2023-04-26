import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Result from "./Result";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/resultpage" element={<Result />} />
    </Routes>
  </Router>
);
