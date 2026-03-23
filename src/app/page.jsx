import Navbar from "@/components/Navbar";
import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import { Linkedin, Github, Mail } from "lucide-react";

export default function Home() {
  return (
    <main className="bg-[#121212] min-h-screen text-white w-full selection:bg-blue-500/30">
      <Navbar />

      {/* The cinematic Scrolly section, mapped to `#home` implicitly since it's at the top. */}
      <div id="home" className="relative w-full">
        <ScrollyCanvas />
        <Overlay />
      </div>

      {/* Main Content Sections */}
      <div className="relative z-20 bg-[#121212] shadow-[0_-20px_50px_rgba(18,18,18,1)]">
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </div>
      
      {/* Footer */}
      <footer className="py-12 border-t border-white/10 bg-[#0a0a0a] relative z-20">
        <div className="max-w-7xl mx-auto px-8 md:px-24 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold tracking-tighter text-white">AP<span className="text-blue-500">.</span></h3>
            <p className="text-gray-500 text-sm mt-2">© {new Date().getFullYear()} Akshay Pramod. Built with Next.js & Framer Motion.</p>
          </div>
          
          <div className="flex items-center gap-6">
            <a href="mailto:akshaypramod107@gmail.com" className="text-gray-400 hover:text-white transition-colors">
              <span className="sr-only">Email</span>
              <Mail size={20} />
            </a>
            <a href="http://www.linkedin.com/in/akshaypramodp" target="_blank" className="text-gray-400 hover:text-white transition-colors">
              <span className="sr-only">LinkedIn</span>
              <Linkedin size={20} />
            </a>
            <a href="https://github.com/akshaypramodp" target="_blank" className="text-gray-400 hover:text-white transition-colors">
              <span className="sr-only">GitHub</span>
              <Github size={20} />
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
