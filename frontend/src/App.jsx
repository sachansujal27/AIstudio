import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Mainlayout from "./components/layout/Mainlayout";
import Dashboard from "./page/Dashboard";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Mainlayout />}>
          {/* Home Page */}
          <Route index element={<Dashboard />} />

          {/* Navigation Pages */}
          <Route path="how-to-use" element={<h1>How To Use</h1>} />

          <Route path="customer-support" element={<h1>Customer Support</h1>} />

          <Route path="about-us" element={<h1>About Us</h1>} />

          <Route path="create-ad" element={<h1>Create Advertisement</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
