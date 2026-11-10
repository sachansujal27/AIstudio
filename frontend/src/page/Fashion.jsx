import React from "react";
import cloths1 from "../assets/cloths1.mp4";

const Fashion = () => {
  return (
    <>
      <div className="w-full min-h-screen">
        {/* Background Video */}
        <video
          src={cloths1}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-screen object-cover"
        ></video>

        {/* Heading */}
        <div
          className="flex flex-wrap justify-center items-center
          bg-linear-to-r from-emerald-950 via-amber-400 to-fuchsia-600
          bg-clip-text text-transparent text-4xl font-bold p-6"
        >
          ELEVATE YOUR STYLE WITH FASHION
        </div>
      </div>
    </>
  );
};

export default Fashion;
