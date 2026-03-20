"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function Overlay() {
  const { scrollYProgress } = useScroll();

  // Section 1: Fades out early (0 to 15% scroll)
  const opacity1 = useTransform(scrollYProgress, [0, 0.05, 0.15, 1], [1, 1, 0, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.15, 1], [0, -100, -100]);

  // Section 2: Fades in around 20%, peaks at 35%, fades out at 50%
  const opacity2 = useTransform(scrollYProgress, [0, 0.15, 0.25, 0.35, 0.5, 1], [0, 0, 1, 1, 0, 0]);
  const y2 = useTransform(scrollYProgress, [0, 0.15, 0.35, 1], [50, 50, -100, -100]);

  // Section 3: Fades in around 55%, peaks at 70%, fades out at 85%
  const opacity3 = useTransform(scrollYProgress, [0, 0.5, 0.65, 0.75, 0.9, 1], [0, 0, 1, 1, 0, 0]);
  const y3 = useTransform(scrollYProgress, [0, 0.5, 0.75, 1], [50, 50, -100, -100]);

  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-10 flex flex-col justify-center px-8 md:px-24">
      {/* Center Aligned */}
      <motion.div
        style={{ opacity: opacity1, y: y1 }}
        className="absolute inset-0 flex flex-col items-center justify-center"
      >
        <h1 className="text-5xl md:text-8xl font-bold tracking-tighter text-white drop-shadow-lg">
          Akshay Pramod.
        </h1>
        <p className="text-xl md:text-3xl text-gray-400 mt-6 font-light drop-shadow-md">
          Creative Developer.
        </p>
      </motion.div>

      {/* Left Aligned */}
      <motion.div
        style={{ opacity: opacity2, y: y2 }}
        className="absolute inset-0 flex flex-col items-start justify-center px-8 md:px-24"
      >
        <h2 className="text-4xl md:text-7xl font-bold tracking-tight text-white max-w-3xl drop-shadow-lg leading-tight">
          I build <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">digital experiences.</span>
        </h2>
      </motion.div>

      {/* Right Aligned */}
      <motion.div
        style={{ opacity: opacity3, y: y3 }}
        className="absolute inset-0 flex flex-col items-end justify-center px-8 md:px-24 text-right"
      >
        <h2 className="text-4xl md:text-7xl font-bold tracking-tight text-white max-w-3xl drop-shadow-lg leading-tight">
          Bridging <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">design</span> and engineering.
        </h2>
      </motion.div>
    </div>
  );
}
