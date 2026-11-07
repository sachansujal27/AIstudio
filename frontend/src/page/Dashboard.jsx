import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { FaWandMagicSparkles, FaArrowRight, FaPlay } from "react-icons/fa6";

import food from "../assets/food.mp4";
import cloths from "../assets/cloths.mp4";
import shoes from "../assets/shoes.mp4";
import cafe from "../assets/cafe.mp4";
import buty from "../assets/buty.mp4";
import liquid from "../assets/liquid.mp4";

// Reusable Video Card
const VideoCard = ({ video, title, description, duration, direction }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      animate={{ y: [0, direction, 0] }}
      transition={{
        opacity: { duration: 0.7 },
        y: {
          duration: duration,
          repeat: Infinity,
          ease: "easeInOut",
        },
      }}
      className="group relative h-64 w-72 overflow-hidden
      rounded-3xl border border-white/10 bg-slate-800
      shadow-xl shadow-violet-500/10
      hover:border-violet-400/50"
    >
      {/* Background Video */}
      <video
        src={video}
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        className="h-full w-full object-cover
        transition-transform duration-700
        group-hover:scale-110"
      />

      {/* Dark Gradient Overlay */}
      <div
        className="absolute inset-0 bg-linear-to-t
        from-black/90 via-black/10 to-transparent"
      />

      {/* Play Icon */}
      <div
        className="absolute right-4 top-4 flex h-9 w-9
      items-center justify-center rounded-full
      border border-white/30 bg-black/30
      text-white backdrop-blur-md"
      >
        <FaPlay className="text-xs" />
      </div>

      {/* Video Information */}
      <div className="absolute bottom-0 left-0 w-full p-5">
        <h3 className="text-lg font-bold text-white">{title}</h3>

        <p className="mt-1 text-sm text-slate-300">{description}</p>
      </div>
    </motion.div>
  );
};

const Dashboard = () => {
  return (
    <div className="min-h-screen w-full bg-slate-950">
      {/* ================= HERO SECTION ================= */}

      <section
        className="flex min-h-[85vh] items-center justify-center
        bg-linear-to-br from-slate-950 via-slate-900
        to-indigo-950 px-6 py-20"
      >
        <div className="mx-auto max-w-5xl text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-8 inline-flex items-center gap-2
            rounded-full border border-violet-400/30
            bg-violet-500/10 px-5 py-2
            text-sm text-violet-300"
          >
            <FaWandMagicSparkles />
            AI-Powered Video Creation
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl font-extrabold leading-tight
            tracking-tight text-white
            md:text-6xl lg:text-7xl"
          >
            Turn Your Images Into
            <span
              className="mt-3 block bg-linear-to-r
              from-blue-500 via-violet-400 to-emerald-400
              bg-clip-text text-transparent"
            >
              Stunning AI Videos
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="mx-auto mt-8 max-w-2xl
            text-base leading-relaxed text-slate-300
            md:text-lg"
          >
            Turn your images into stunning AI-generated videos in seconds. Just
            upload, customize, and let AI bring your imagination to life.
          </motion.p>

          {/* Get Started */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-10 flex justify-center"
          >
            <Link
              to="/create-ad"
              className="group flex items-center gap-3
              rounded-xl bg-linear-to-r
              from-blue-600 via-violet-500 to-emerald-400
              px-8 py-4 font-bold text-white
              shadow-lg shadow-violet-500/20
              transition-all duration-300
              hover:scale-105 hover:shadow-violet-500/40"
            >
              Start for Free
              <FaArrowRight
                className="transition-transform
                group-hover:translate-x-1"
              />
            </Link>
          </motion.div>

          {/* Bottom Text */}
          <p className="mt-6 text-sm text-slate-500">
            Create. Animate. Inspire. ✨
          </p>
        </div>
      </section>

      {/* ================= VIDEO GALLERY ================= */}

      <section className="bg-slate-950 px-6 py-20">
        {/* Gallery Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span
            className="mb-4 inline-block rounded-full
          border border-violet-400/20 bg-violet-500/10
          px-4 py-2 text-sm text-violet-300"
          >
            Explore AI Creativity
          </span>

          <h2
            className="text-3xl font-bold text-white
          md:text-5xl"
          >
            Explore the
            <span
              className="ml-2 bg-linear-to-r
              from-blue-400 via-violet-400 to-emerald-400
              bg-clip-text text-transparent"
            >
              Possibilities
            </span>
          </h2>

          <p className="mt-5 text-slate-400">
            From simple images to extraordinary AI creations.
          </p>
        </motion.div>

        {/* Video Cards */}
        <div
          className="mx-auto flex max-w-6xl
        flex-wrap justify-center gap-10"
        >
          {/* FOOD VIDEO */}
          <VideoCard
            video={food}
            title="AI Food Creation"
            description="Bring food to life with AI"
            duration={3}
            direction={-12}
          />

          {/* FASHION VIDEO */}
          <VideoCard
            video={cloths}
            title="AI Fashion Studio"
            description="Transform fashion photography"
            duration={3.5}
            direction={12}
          />

          {/* SHOES VIDEO */}
          <VideoCard
            video={shoes}
            title="AI Product Showcase"
            description="Create stunning product videos"
            duration={4}
            direction={-10}
          />
          <VideoCard
            video={cafe}
            title="AI Product Showcase"
            description="Create stunning product videos"
            duration={4}
            direction={-10}
          />
          <VideoCard
            video={buty}
            title="AI Product Showcase"
            description="Create stunning product videos"
            duration={4}
            direction={-10}
          />
          <VideoCard
            video={liquid}
            title="AI Product Showcase"
            description="Create stunning product videos"
            duration={4}
            direction={-10}
          />
        </div>

        {/* Bottom Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Link
            to="/create-ad"
            className="inline-flex items-center gap-3
            rounded-xl border border-violet-400/30
            bg-violet-500/10 px-7 py-3
            font-semibold text-violet-300
            transition-all hover:bg-violet-500/20
            hover:text-white"
          >
            Create Your Video
            <FaArrowRight />
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default Dashboard;
