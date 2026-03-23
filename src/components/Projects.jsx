"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "Safaricom Ethiopia BSS Project",
      role: "Operations Engineer",
      description: "Provided L1, L2, and L3 support for critical telecom BSS systems. Ensured strict system uptime, performed complex deployments, executed sanity testing, and independently resolved production issues.",
      achievements: ["Maintained 99.9% uptime", "Supported national telecom service launch"],
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=1470&auto=format&fit=crop", 
      color: "from-green-500 to-emerald-700"
    },
    {
      title: "STC Saudi BSS Project",
      role: "Operations Engineer",
      description: "Provided dedicated L3 level support ensuring vast application stability. Quickly mitigated and resolved root system issues across diverse and distributed Saudi telecom structures to enable seamless operations.",
      achievements: ["Advanced Incident Resolution", "System Stability Enhancement"],
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1470&auto=format&fit=crop",
      color: "from-purple-500 to-indigo-700"
    },
    {
      title: "Vodacom DRC BSS Project",
      role: "Operations Engineer",
      description: "Currently heavily involved in the implementation and deployment phase. Fully supporting BSS application infrastructure setup, comprehensive system readiness evaluating, and rigorous deployment management ensuring safety before final global go-live.",
      achievements: ["Pre-Launch System Readiness", "Implementation Lifecycle Management"],
      image: "https://images.unsplash.com/photo-1520869562399-e772f042f422?q=80&w=1473&auto=format&fit=crop",
      color: "from-red-500 to-orange-700"
    },
    {
      title: "Amazon Homepage Clone",
      role: "Frontend Developer",
      description: "Built a precise, fully-static responsive clone of the Amazon.com homepage entirely using HTML and CSS to practice frontend structural design and understand complex real-world UI element placement.",
      achievements: ["Pixel-perfect replication", "Advanced CSS Grid / Flexbox utilization"],
      technologies: ["HTML", "CSS"],
      image: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?q=80&w=1470&auto=format&fit=crop",
      color: "from-blue-500 to-cyan-700"
    },
  ];

  return (
    <section id="projects" className="py-32 px-8 md:px-24 bg-[#0a0a0a] relative z-20">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center md:text-left"
        >
          <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tight">Selected Projects</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-orange-400 to-red-400 mt-6 rounded-full mx-auto md:mx-0" />
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative rounded-[2rem] overflow-hidden bg-white/5 border border-white/10 backdrop-blur-xl hover:bg-white/10 transition-all duration-500 flex flex-col h-full"
            >
              {/* Image Header */}
              <div className="aspect-[16/9] overflow-hidden relative">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] opacity-40 group-hover:opacity-60 grayscale group-hover:grayscale-0"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} mix-blend-overlay opacity-80`} />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121212] to-transparent opacity-90" />
                
                <div className="absolute bottom-6 left-8 right-8">
                  <p className="text-sm font-bold text-white mb-2 uppercase tracking-widest bg-black/50 px-3 py-1 rounded-full inline-block backdrop-blur-md">
                    {project.role}
                  </p>
                  <h3 className="text-3xl font-bold text-white">{project.title}</h3>
                </div>
              </div>

              {/* Body */}
              <div className="p-8 flex flex-col flex-grow">
                <p className="text-gray-400 leading-relaxed mb-8 flex-grow">
                  {project.description}
                </p>

                {/* Achievements List */}
                <div className="mb-6 space-y-2">
                  <p className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-3">Key Highlights</p>
                  {project.achievements.map((ach, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-orange-400" />
                      <span className="text-gray-300 font-medium">{ach}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Stack if exists */}
                {project.technologies && (
                  <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-white/10">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-sm text-gray-300">
                        {tech}
                      </span>
                    ))}
                    <a href="https://github.com/akshaypramodp" target="_blank" className="ml-auto p-1.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white">
                      <Github size={18} />
                    </a>
                  </div>
                )}
              </div>
              
              <div className="absolute inset-0 pointer-events-none rounded-[2rem] border border-white/0 group-hover:border-white/20 transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
