import React from "react";
import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";

import {
  FaRProject,
  FaCircleQuestion,
  FaHeadset,
  FaCompass,
  FaWandMagicSparkles,
  FaArrowRight,
} from "react-icons/fa6";

const Navbar = () => {
  const navItems = [
    {
      name: "Quickstart",
      path: "/how-to-use",
      icon: FaCircleQuestion,
    },
    {
      name: "Assist",
      path: "/customer-support",
      icon: FaHeadset,
    },
    {
      name: "Discover",
      path: "/about-us",
      icon: FaCompass,
    },
  ];

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="sticky top-0 z-50 w-full border-b border-white/10
      bg-[#0B1020]/90 backdrop-blur-xl"
    >
      <div
        className="mx-auto flex max-w-7xl items-center
      justify-between px-6 py-4"
      >
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div
            className="flex h-11 w-11 items-center justify-center
          rounded-xl bg-linear-to-br from-violet-500 to-cyan-600
          shadow-lg shadow-violet-500/20 transition
          group-hover:scale-110"
          >
            <FaRProject className="text-2xl text-white" />
          </div>

          <span className="text-xl font-bold tracking-tight text-white">
            AI<span className="text-violet-400">Studio</span>
          </span>
        </Link>

        {/* Navigation */}
        <nav
          className="hidden md:flex items-center gap-2
        rounded-full border border-white/10 bg-white/4 p-1.5"
        >
          {navItems.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-2 rounded-full px-5 py-2.5
                  text-sm font-medium transition-all duration-300
                  ${
                    isActive
                      ? "bg-violet-500/20 text-violet-300"
                      : "text-gray-300 hover:bg-white/10 hover:text-white"
                  }`
                }
              >
                <Icon className="text-base" />
                {item.name}
              </NavLink>
            );
          })}
        </nav>

        {/* Get Started */}
        <Link
          to="/create-ad"
          className="group flex items-center gap-2 rounded-full
          bg-linear-to-r from-violet-600 to-indigo-500
          px-6 py-3 text-sm font-semibold text-white
          shadow-lg shadow-violet-600/20
          transition-all duration-300
          hover:scale-105 hover:shadow-violet-500/40"
        >
          <FaWandMagicSparkles />
          Get Started
          <FaArrowRight
            className="transition-transform
          group-hover:translate-x-1"
          />
        </Link>
      </div>
    </motion.header>
  );
};

export default Navbar;
