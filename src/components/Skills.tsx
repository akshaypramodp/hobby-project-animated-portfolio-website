"use client";

import { motion } from "framer-motion";
import { Code2, Server, CheckCircle2, Wrench, Globe, UserCheck } from "lucide-react";

export default function Skills() {
  const skillCategories = [
    {
      title: "Programming & Scripting",
      icon: <Code2 className="w-6 h-6 text-blue-400" />,
      skills: ["Python", "Shell Scripting", "Java", "JavaScript", "HTML / CSS"],
    },
    {
      title: "DevOps & Infrastructure",
      icon: <Server className="w-6 h-6 text-emerald-400" />,
      skills: ["Linux", "Docker", "Kubernetes"],
    },
    {
      title: "Testing and QA",
      icon: <CheckCircle2 className="w-6 h-6 text-purple-400" />,
      skills: ["Manual Testing", "Functional Testing", "UAT Testing"],
    },
    {
      title: "Tools & Platforms",
      icon: <Wrench className="w-6 h-6 text-amber-400" />,
      skills: ["SQL", "JIRA", "BMC Remedy", "Postman"],
    },
    {
      title: "Domain Expertise",
      icon: <Globe className="w-6 h-6 text-cyan-400" />,
      skills: ["Telecom BSS Systems", "Billing Systems", "Customer Support Platforms"],
    },
    {
      title: "Soft Skills",
      icon: <UserCheck className="w-6 h-6 text-pink-400" />,
      skills: [
        "Customer Communication", 
        "Team Collaboration", 
        "Problem Solving", 
        "Decision Making",
        "Time Management",
        "Adaptability",
        "Presentation Skills",
        "Accountability"
      ],
    },
  ];

  return (
    <section id="skills" className="py-32 px-8 md:px-24 bg-[#121212] relative z-20 overflow-hidden">
      
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-500/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tight">Skills & Expertise</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-emerald-400 to-cyan-400 mt-6 rounded-full mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors backdrop-blur-xl group"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-white/5 rounded-2xl border border-white/10 group-hover:scale-110 transition-transform">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-semibold text-white">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, sIdx) => (
                  <span 
                    key={sIdx}
                    className="px-4 py-2 bg-[#121212] border border-white/5 rounded-full text-sm font-medium text-gray-300 shadow-inner"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
