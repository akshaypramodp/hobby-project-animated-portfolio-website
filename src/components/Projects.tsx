"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "E-Commerce Reimagined",
    category: "Full Stack App",
    image: "https://images.unsplash.com/photo-1627398225058-631f4242ce5d?q=80&w=1470&auto=format&fit=crop",
  },
  {
    title: "Fintech Dashboard",
    category: "Web Application",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1470&auto=format&fit=crop",
  },
  {
    title: "Immersive 3D Experience",
    category: "Three.js / WebGL",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1470&auto=format&fit=crop",
  },
];

export default function Projects() {
  return (
    <section className="min-h-screen bg-[#121212] py-32 px-8 md:px-24 relative z-20">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tight">Selected Work</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 mt-6 rounded-full" />
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group relative rounded-3xl overflow-hidden bg-white/5 border border-white/10 backdrop-blur-xl hover:bg-white/10 transition-all duration-500 cursor-pointer"
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
              </div>
              <div className="p-8 relative z-10">
                <p className="text-sm font-medium text-blue-400 mb-3 uppercase tracking-widest">{project.category}</p>
                <h3 className="text-2xl font-semibold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all duration-300">
                  {project.title}
                </h3>
              </div>
              {/* Magic Glow Border */}
              <div className="absolute inset-0 pointer-events-none rounded-3xl border border-white/0 group-hover:border-white/20 shadow-[inset_0_0_20px_rgba(255,255,255,0)] group-hover:shadow-[inset_0_0_20px_rgba(255,255,255,0.05)] transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
