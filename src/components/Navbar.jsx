import { useState, useEffect } from "react";

const NAV_LINKS = ["home", "about", "skills", "projects", "contact"];

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observers = NAV_LINKS.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id); },
        { threshold: 0.4 }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 md:px-8 py-4 transition-all duration-300 ${
        scrolled
          ? "bg-[rgba(5,8,16,0.9)] backdrop-blur-xl border-b border-[rgba(99,179,237,0.12)]"
          : "bg-transparent"
      }`}
    >
      {/* Logo */}
      <span className="font-mono text-[#63b3ed] text-lg font-medium tracking-widest">
        &lt;dev /&gt;
      </span>

      {/* Desktop links */}
      <div className="hidden md:flex gap-1">
        {NAV_LINKS.map((id) => (
          <button
            key={id}
            onClick={() => scrollTo(id)}
            className={`capitalize text-sm font-semibold px-4 py-2 rounded-full transition-all duration-200 tracking-wide ${
              active === id
                ? "bg-[rgba(99,179,237,0.15)] text-[#63b3ed] border border-[rgba(99,179,237,0.35)]"
                : "text-slate-400 hover:text-[#63b3ed] hover:bg-[rgba(99,179,237,0.08)]"
            }`}
          >
            {id}
          </button>
        ))}
      </div>

      {/* Mobile hamburger */}
      <button
        className="md:hidden text-slate-400 focus:outline-none"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {menuOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Mobile menu overlay */}
      <div
        className={`md:hidden fixed inset-0 bg-[rgba(5,8,16,0.97)] backdrop-blur-xl flex flex-col items-center justify-center gap-8 z-40 transition-all duration-400 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {NAV_LINKS.map((id) => (
          <button
            key={id}
            onClick={() => { scrollTo(id); setMenuOpen(false); }}
            className={`capitalize text-2xl font-bold transition-colors duration-200 ${
              active === id ? "text-[#63b3ed]" : "text-slate-300"
            }`}
          >
            {id}
          </button>
        ))}
      </div>
    </nav>
  );
}
