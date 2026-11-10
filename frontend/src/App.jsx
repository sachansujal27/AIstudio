import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Mainlayout from "./components/layout/Mainlayout";
import Liquid from "./page/Liquid";

import Shoes from "./page/Shoes";
import Food from "./page/Food";

import Cafe from "./page/Cafe";
import Beauty from "./page/Beauty";
import Fashion from "./page/Fashion";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Mainlayout />} />

        <Route path="/how-to-use" element={<h1>How To Use</h1>} />
        <Route path="/customer-support" element={<h1>Customer Support</h1>} />
        <Route path="/about-us" element={<h1>About Us</h1>} />
        <Route path="/create-ad" element={<h1>Create Advertisement</h1>} />

        <Route path="/liquid" element={<Liquid />} />
        <Route path="/cafe" element={<Cafe />} />
        <Route path="/shoes" element={<Shoes />} />
        <Route path="/fashion" element={<Fashion />} />
        <Route path="/food" element={<Food />} />
        <Route path="/beauty" element={<Beauty />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
