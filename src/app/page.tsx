import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="bg-[#121212] min-h-screen text-white">
      {/* The cinematic Scrolly section. 
          ScrollyCanvas manages its own 500vh height and sticky canvas.
          Overlay is fixed and tied to page scroll. 
      */}
      <div className="relative w-full">
        <ScrollyCanvas />
        <Overlay />
      </div>

      {/* The Work Grid placed after the scroll section finishes */}
      <div className="relative z-20 bg-[#121212]">
        <Projects />
      </div>
      
      {/* Footer */}
      <footer className="py-12 border-t border-white/10 text-center text-gray-500 text-sm bg-[#121212] relative z-20">
        <p>© {new Date().getFullYear()} Akshay Pramod. Built with Next.js & Framer Motion.</p>
      </footer>
    </main>
  );
}
