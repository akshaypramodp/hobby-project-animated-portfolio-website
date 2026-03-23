"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, FileText, Mail } from "lucide-react";

export default function Overlay() {
  const { scrollYProgress } = useScroll();

  // Section 1: Fades out early (0 to 15% scroll)
  const opacity1 = useTransform(scrollYProgress, [0, 0.05, 0.15, 1], [1, 1, 0, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.15, 1], [0, -100, -100]);
  const scale1 = useTransform(scrollYProgress, [0, 0.15, 1], [1, 0.9, 0.9]);

  // Section 2: Bio fades in around 20%, peaks at 35%, fades out at 50%
  const opacity2 = useTransform(scrollYProgress, [0, 0.15, 0.25, 0.35, 0.5, 1], [0, 0, 1, 1, 0, 0]);
  const y2 = useTransform(scrollYProgress, [0, 0.15, 0.35, 1], [50, 50, -100, -100]);

  // Section 3: Call to Actions fade in around 55%, peaks at 70%, fades out at 90%
  const opacity3 = useTransform(scrollYProgress, [0, 0.5, 0.65, 0.75, 0.9, 1], [0, 0, 1, 1, 0, 0]);
  const y3 = useTransform(scrollYProgress, [0, 0.5, 0.75, 1], [50, 50, -100, -100]);

  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-10 flex flex-col justify-center px-8 md:px-24">
      {/* Center Aligned: Name and Title */}
      <motion.div
        style={{ opacity: opacity1, y: y1, scale: scale1 }}
        className="absolute inset-0 flex flex-col items-center justify-center text-center"
      >
        <h1 className="text-5xl md:text-8xl font-black tracking-tighter text-white drop-shadow-2xl">
          Akshay Pramod.
        </h1>
        <p className="text-xl md:text-3xl font-light text-gray-300 mt-6 max-w-3xl drop-shadow-md leading-relaxed">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400 font-semibold">Aspiring AI/ML Engineer</span> | Operations Engineer | Problem Solver
        </p>
      </motion.div>

      {/* Left Aligned: Short Bio */}
      <motion.div
        style={{ opacity: opacity2, y: y2 }}
        className="absolute inset-0 flex flex-col items-start justify-center px-8 md:px-24"
      >
        <div className="max-w-4xl backdrop-blur-sm bg-black/20 p-8 rounded-3xl border border-white/5 shadow-2xl">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white leading-tight mb-6">
            Bridging the gap between <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Operations & Intelligence.</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-light">
            I am currently learning Machine Learning at <strong className="text-white font-semibold">Brototype</strong>. With over <strong className="text-white font-semibold">4 years of experience as an Operations Engineer at 6D Technologies</strong>, I have worked on large-scale telecom systems supporting critical infrastructure. I am passionate about solving real-world problems using programming, artificial intelligence, and machine learning.
          </p>
        </div>
      </motion.div>

      {/* Center Aligned: Call to Action Buttons */}
      <motion.div
        style={{ opacity: opacity3, y: y3 }}
        className="absolute inset-0 flex flex-col items-center justify-center pointer-events-auto"
      >
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-12 drop-shadow-xl text-center">
          Let's build something <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">extraordinary.</span>
        </h2>
        
        <div className="flex w-full items-center justify-center flex-col md:flex-row gap-6">
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="group flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full font-bold text-lg hover:scale-105 transition-all shadow-[0_0_40px_rgba(255,255,255,0.3)]"
          >
            View Projects
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
          
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="group flex items-center gap-3 px-8 py-4 bg-transparent text-white border border-white/30 rounded-full font-bold text-lg hover:bg-white/10 transition-all backdrop-blur-md"
          >
            <Mail size={20} />
            Contact Me
          </a>
          
          <a
            href="/resume.pdf"
            target="_blank"
            className="group flex items-center gap-3 px-8 py-4 bg-transparent text-gray-300 border border-transparent hover:border-white/20 rounded-full font-medium text-lg hover:bg-white/5 transition-all"
          >
            <FileText size={20} />
            Download Resume
          </a>
        </div>
      </motion.div>
    </div>
  );
}
