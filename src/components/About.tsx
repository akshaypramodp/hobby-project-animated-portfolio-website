"use client";

import { motion } from "framer-motion";
import { GraduationCap, BrainCircuit, LineChart } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-32 px-8 md:px-24 bg-[#121212] relative z-20 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tight">About Me</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-400 to-emerald-400 mt-6 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Biography Column */}
          <div className="lg:col-span-7 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="prose prose-lg prose-invert max-w-none text-gray-300 font-light leading-relaxed"
            >
              <p className="text-xl md:text-2xl text-white font-medium mb-8 leading-snug">
                I am currently pursuing Machine Learning training through <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400 font-bold">Brototype</span> as part of a career transition into the AI/ML field.
              </p>
              
              <p>
                Previously, I worked for <strong>4 years and 1 month as an Operations Engineer at 6D Technologies</strong>, a leading telecom solutions company. During my professional career, I worked extensively on system monitoring, infrastructure maintenance, deployment management, and incident resolution in critical telecom BSS (Business Support Systems) environments.
              </p>
              
              <p>
                My passion for programming and solving complex real-world problems motivated me to move toward Artificial Intelligence and Machine Learning. I thrive at the intersection of operational stability and intelligent automation, bringing a unique perspective from years of maintaining high-stakes critical infrastructure.
              </p>
            </motion.div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md"
              >
                <LineChart className="text-blue-400 w-8 h-8 mb-4" />
                <h4 className="text-3xl font-bold text-white mb-2">4+ Years</h4>
                <p className="text-sm text-gray-400">Telecom System Operations</p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md"
              >
                <BrainCircuit className="text-purple-400 w-8 h-8 mb-4" />
                <h4 className="text-3xl font-bold text-white mb-2">AI / ML</h4>
                <p className="text-sm text-gray-400">Continuous Learner</p>
              </motion.div>
            </div>
          </div>

          {/* Education Timeline Column */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-3xl p-8 backdrop-blur-xl h-full"
            >
              <div className="flex items-center gap-4 mb-10">
                <div className="p-3 bg-blue-500/20 rounded-xl text-blue-400">
                  <GraduationCap size={28} />
                </div>
                <h3 className="text-2xl font-bold text-white">Education</h3>
              </div>

              <div className="relative pl-8 border-l-2 border-white/10 space-y-12">
                {/* AI / ML Training */}
                <div className="relative">
                  <div className="absolute -left-[41px] top-1 w-5 h-5 bg-[#121212] border-2 border-blue-400 rounded-full" />
                  <span className="text-sm font-semibold text-blue-400 tracking-wider uppercase">Present</span>
                  <h4 className="text-xl font-bold text-white mt-2">Machine Learning Training</h4>
                  <p className="text-gray-400 mt-1 font-medium">Brototype</p>
                  <p className="text-gray-500 text-sm mt-3 leading-relaxed">
                    Transitioning into the AI/ML field, focusing on data structures, algorithms, machine learning models, and real-world AI applications.
                  </p>
                </div>

                {/* B.Tech */}
                <div className="relative">
                  <div className="absolute -left-[41px] top-1 w-5 h-5 bg-[#121212] border-2 border-gray-600 rounded-full" />
                  <span className="text-sm font-semibold text-gray-500 tracking-wider uppercase">2021</span>
                  <h4 className="text-xl font-bold text-white mt-2">B.Tech in Computer Science</h4>
                  <p className="text-gray-400 mt-1 font-medium">College of Engineering Aranmula</p>
                  <p className="text-gray-500 text-sm mt-1">Kerala Technological University</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
