import React from "react";
import { Link, useNavigate } from "react-router-dom";

import food from "../assets/food.mp4";
import cloths from "../assets/cloths.mp4";
import shoes from "../assets/shoes.mp4";
import cafe from "../assets/cafe.mp4";
import buty from "../assets/buty.mp4";
import liquid from "../assets/liquid.mp4";

// Video Card Component
const VideoCard = ({ video, title, description, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="group relative h-80 w-72 cursor-pointer
      overflow-hidden rounded-3xl border border-white/10 shadow-xl"
    >
      {/* Video */}
      <video
        src={video}
        autoPlay
        loop
        muted
        playsInline
        className="h-full w-full object-cover transition-transform
        duration-700 group-hover:scale-110"
      />

      {/* Overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-t
      from-black/95 via-black/20 to-transparent"
      ></div>

      {/* Play Icon */}
      <div
        className="absolute right-4 top-4 flex h-10 w-10
      items-center justify-center rounded-full bg-black/40 text-white"
      >
        ▶
      </div>

      {/* Card Content */}
      <div className="absolute bottom-0 left-0 w-full p-5">
        <h3 className="text-xl font-bold text-white">{title}</h3>

        <p className="mt-2 text-sm text-slate-300">{description}</p>

        <button
          onClick={(e) => {
            e.stopPropagation();
            onClick();
          }}
          className="mt-4 flex w-full items-center justify-center
          gap-3 rounded-xl bg-gradient-to-r from-blue-600
          via-violet-500 to-emerald-400 px-4 py-3
          font-bold text-white transition hover:scale-105"
        >
          Get Started →
        </button>
      </div>
    </div>
  );
};

// Dashboard Component
const Dashboard = () => {
  const navigate = useNavigate();

  const videoList = [
    {
      video: food,
      title: "Food Creation",
      description: "Create amazing food advertisements",
      path: "/food",
    },
    {
      video: cloths,
      title: "Fashion Studio",
      description: "Transform fashion photography",
      path: "/fashion",
    },
    {
      video: shoes,
      title: "Shoes Showcase",
      description: "Create stunning shoe advertisements",
      path: "/shoes",
    },
    {
      video: cafe,
      title: "Cafe Promotion",
      description: "Make attractive cafe promotions",
      path: "/cafe",
    },
    {
      video: buty,
      title: "Beauty Studio",
      description: "Showcase beauty products",
      path: "/beauty",
    },
    {
      video: liquid,
      title: "Liquid Effects",
      description: "Create cinematic liquid visuals",
      path: "/liquid",
    },
  ];

  return (
    <div className="min-h-screen w-full bg-slate-950">
      {/* HERO SECTION */}
      <section
        className="flex min-h-[85vh] items-center
      justify-center bg-gradient-to-br from-slate-950
      via-slate-900 to-indigo-950 px-6 py-20"
      >
        <div className="mx-auto max-w-5xl text-center">
          <span
            className="mb-8 inline-flex items-center gap-2
          rounded-full border border-violet-400/30
          bg-violet-500/10 px-5 py-2 text-sm text-violet-300"
          >
            ✨ AI-Powered Video Creation
          </span>

          <h1
            className="mt-6 text-4xl font-extrabold text-white
          md:text-6xl lg:text-7xl"
          >
            Turn Your Images Into
            <span
              className="mt-3 block bg-gradient-to-r
            from-blue-500 via-violet-400 to-emerald-400
            bg-clip-text text-transparent"
            >
              Stunning AI Videos
            </span>
          </h1>

          <p
            className="mx-auto mt-8 max-w-2xl text-lg
          leading-relaxed text-slate-300"
          >
            Turn your images into stunning AI-generated videos in seconds.
            Upload, customize, and let AI bring your imagination to life.
          </p>

          <div className="mt-10">
            <Link
              to="/create-ad"
              className="inline-flex items-center gap-3 rounded-xl
              bg-linear-to-r from-blue-600 via-violet-500
              to-emerald-400 px-8 py-4 font-bold text-white
              shadow-lg transition hover:scale-105"
            >
              Start for Free →
            </Link>
          </div>

          <p className="mt-6 text-sm text-slate-500">
            Create. Animate. Inspire. ✨
          </p>
        </div>
      </section>

      {/* VIDEO GALLERY */}
      <section className="bg-slate-950 px-6 py-20">
        {/* Heading */}
        <div className="mb-14 text-center">
          <span
            className="rounded-full border border-violet-400/20
          bg-violet-500/10 px-4 py-2 text-sm text-violet-300"
          >
            Explore AI Creativity
          </span>

          <h2 className="mt-7 text-3xl font-bold text-white md:text-5xl">
            Explore the
            <span
              className="ml-2 bg-gradient-to-r from-blue-400
            via-violet-400 to-emerald-400 bg-clip-text text-transparent"
            >
              Possibilities
            </span>
          </h2>

          <p className="mt-5 text-slate-400">
            Choose your category and start creating.
          </p>
        </div>

        {/* Video Cards */}
        <div
          className="mx-auto grid max-w-6xl grid-cols-1
        justify-items-center gap-10 sm:grid-cols-2 lg:grid-cols-3"
        >
          {videoList.map((item) => (
            <VideoCard
              key={item.title}
              video={item.video}
              title={item.title}
              description={item.description}
              onClick={() => navigate(item.path)}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
