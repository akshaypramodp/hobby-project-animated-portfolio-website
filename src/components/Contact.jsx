"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Github, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    
    setStatus("submitting");
    
    try {
      const response = await fetch("https://formspree.io/f/mbdzbjyr", {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
        setTimeout(() => setStatus("idle"), 5000); // Reset success state after 5 seconds
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 5000);
      }
    } catch (error) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <section id="contact" className="py-32 px-8 md:px-24 bg-[#121212] relative z-20 overflow-hidden">
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tight">Get In Touch</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 mt-6 rounded-full mx-auto" />
          <p className="text-xl text-gray-400 mt-6 max-w-2xl mx-auto font-light">
            Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Contact Details */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 space-y-8"
          >
            <div className="bg-white/5 border border-white/10 rounded-3xl p-10 backdrop-blur-md h-full flex flex-col justify-center">
              <h3 className="text-3xl font-bold text-white mb-10">Contact Information</h3>
              
              <div className="space-y-8">
                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-full bg-blue-500/10 text-blue-400 flex items-center justify-center group-hover:bg-blue-500 group-hover:text-white transition-all shadow-[0_0_20px_rgba(59,130,246,0.2)]">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Email</p>
                    <a href="mailto:akshaypramod107@gmail.com" className="text-lg font-medium text-white hover:text-blue-400 transition-colors">akshaypramod107@gmail.com</a>
                  </div>
                </div>

                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center group-hover:bg-emerald-500 group-hover:text-white transition-all shadow-[0_0_20px_rgba(16,185,129,0.2)]">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Phone</p>
                    <p className="text-lg font-medium text-white">+91 7356520162</p>
                  </div>
                </div>

                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-full bg-purple-500/10 text-purple-400 flex items-center justify-center group-hover:bg-purple-500 group-hover:text-white transition-all shadow-[0_0_20px_rgba(168,85,247,0.2)]">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Location</p>
                    <p className="text-lg font-medium text-white">Thrissur, Kerala, India</p>
                  </div>
                </div>
              </div>

              <div className="mt-16 pt-10 border-t border-white/10">
                <p className="text-sm text-gray-400 mb-6">Connect with me on social media:</p>
                <div className="flex gap-4">
                  <a href="http://www.linkedin.com/in/akshaypramodp" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black hover:border-white transition-all">
                    <Linkedin size={20} />
                  </a>
                  <a href="https://github.com/akshaypramodp" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black hover:border-white transition-all">
                    <Github size={20} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >
            <form onSubmit={handleSubmit} className="bg-white/5 border border-white/10 rounded-3xl p-10 backdrop-blur-md space-y-6">
              
              {status === "success" && (
                <div className="flex items-center gap-3 p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-xl text-emerald-400">
                  <CheckCircle2 size={20} />
                  <p className="font-medium">Message sent successfully! I'll get back to you soon.</p>
                </div>
              )}

              {status === "error" && (
                <div className="flex items-center gap-3 p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400">
                  <AlertCircle size={20} />
                  <p className="font-medium">Oops! Something went wrong. Please try again later.</p>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-300">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name"
                    required 
                    title="Please enter your full name"
                    className="w-full bg-[#121212] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="John Doe"
                    disabled={status === "submitting"}
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-300">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    required 
                    className="w-full bg-[#121212] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="john@example.com"
                    disabled={status === "submitting"}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-gray-300">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject"
                  required 
                  className="w-full bg-[#121212] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="How can I help you?"
                  disabled={status === "submitting"}
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-300">Message</label>
                <textarea 
                  id="message" 
                  name="message"
                  rows={6} 
                  required 
                  className="w-full bg-[#121212] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                  placeholder="Your message here..."
                  disabled={status === "submitting"}
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={status === "submitting"}
                className="w-full bg-white text-black font-bold text-lg rounded-xl px-8 py-4 flex items-center justify-center gap-3 hover:bg-gray-200 transition-colors mt-4 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === "submitting" ? "Sending..." : "Send Message"}
                <Send size={20} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
