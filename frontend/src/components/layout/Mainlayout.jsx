import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Dashboard from "../../page/Dashboard";

const Mainlayout = () => {
  return (
    <>
      <Navbar />
      <Dashboard />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Mainlayout;
