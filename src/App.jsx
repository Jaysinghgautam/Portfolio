import NetworkCanvas from "./components/NetworkCanvas";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Experience from "./sections/Experience";
export default function App() {
  return (
    <div className="bg-[#050810] text-slate-200 min-h-screen overflow-x-hidden font-sans">
      {/* Animated network background — fixed, covers entire page */}
      <NetworkCanvas />

      <Navbar />

      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
