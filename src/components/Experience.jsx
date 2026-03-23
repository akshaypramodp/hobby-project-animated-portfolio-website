"use client";

import { motion } from "framer-motion";
import { Briefcase, Activity, Target, Terminal, Server, Shield, Clock } from "lucide-react";

export default function Experience() {
  const responsibilities = [
    {
      icon: <Activity className="w-5 h-5 text-emerald-400" />,
      title: "System Monitoring",
      description: "Monitored servers, applications, and services; configured alerts and conducted routine health checks."
    },
    {
      icon: <Target className="w-5 h-5 text-red-400" />,
      title: "Incident Management",
      description: "Provided L1, L2, and L3 support. Managed 50+ incidents/month across multiple client environments."
    },
    {
      icon: <Terminal className="w-5 h-5 text-blue-400" />,
      title: "Automation & Scripting",
      description: "Developed automation scripts using Python and Shell to streamline monitoring, backups, and deployments."
    },
    {
      icon: <Server className="w-5 h-5 text-purple-400" />,
      title: "Deployment & Release",
      description: "Coordinated application deployments, worked with CI/CD pipelines, and ensured rollback strategies."
    },
    {
      icon: <Shield className="w-5 h-5 text-amber-400" />,
      title: "Security & Compliance",
      description: "Applied security patches and system updates while maintaining access control and audit logs."
    },
    {
      icon: <Clock className="w-5 h-5 text-cyan-400" />,
      title: "Process Improvement",
      description: "Created documentation including SOPs, troubleshooting guides, bridging technical and non-technical teams."
    }
  ];

  return (
    <section id="experience" className="py-32 px-8 md:px-24 bg-[#0a0a0a] relative z-20">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center md:text-left"
        >
          <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tight">Experience</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-pink-500 mt-6 rounded-full mx-auto md:mx-0" />
        </motion.div>

        <div className="relative">
          {/* Main Experience Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="group block relative rounded-[2.5rem] p-1 bg-gradient-to-b from-white/10 to-transparent overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            
            <div className="bg-[#121212] rounded-[2.4rem] p-8 md:p-14 relative z-10 w-full h-full border border-white/5">
              
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-16 border-b border-white/10 pb-12">
                <div className="flex items-start gap-6">
                  <div className="hidden md:flex p-4 bg-white/5 rounded-2xl border border-white/10">
                    <Briefcase className="w-10 h-10 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">Operations Engineer</h3>
                    <h4 className="text-xl md:text-2xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-gray-500">6D Technologies</h4>
                    <p className="text-gray-500 mt-2 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      Bangalore, Karnataka, India
                    </p>
                  </div>
                </div>
                <div className="inline-flex items-center self-start px-6 py-2 rounded-full bg-white/5 border border-white/10 text-white font-medium tracking-wide">
                  Dec 2021 – Jan 2026
                </div>
              </div>

              {/* Responsibilities Grid */}
              <div>
                <h5 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-8">Key Responsibilities</h5>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {responsibilities.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.1 * index }}
                      className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.04] transition-colors"
                    >
                      <div className="p-3 bg-white/5 inline-flex rounded-xl border border-white/10 mb-5">
                        {item.icon}
                      </div>
                      <h6 className="text-xl font-semibold text-white mb-3">{item.title}</h6>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
