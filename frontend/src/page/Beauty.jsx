import React from "react";
import buty1 from "../assets/buty1.mp4";

const Beauty = () => {
  return (
    <>
      <div className="w-full min-h-screen">
        {/* Background Video */}
        <video
          src={buty1}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-screen object-cover"
        />

        {/* Heading */}
        <div
          className="flex flex-wrap justify-center items-center 
          bg-linear-to-r from-emerald-950 via-amber-400 to-fuchsia-600
          bg-clip-text text-transparent text-4xl font-bold p-6"
        >
          MAKE YOUR PRODUCT PRECISE
        </div>
      </div>
    </>
  );
};

export default Beauty;
