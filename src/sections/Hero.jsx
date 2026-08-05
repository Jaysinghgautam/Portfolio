import useTypewriter from "../hooks/useTypewriter";

const WORDS = [
  "full-stack apps",
  "scalable APIs",
  "clean code",
  "fast UIs",
  "great software",
];

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function Hero() {
  const typed = useTypewriter(WORDS);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-6"
    >
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left Content */}
        <div
          className="flex-1 text-center md:text-left"
          style={{ animation: "fadeUp 0.9s ease both" }}
        >
          {/* Available badge */}
          <div className="inline-flex items-center gap-2 bg-[rgba(99,179,237,0.08)] border border-[rgba(99,179,237,0.25)] rounded-full px-4 py-2 mb-8">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="font-mono text-[#63b3ed] text-xs tracking-widest">
              Available for opportunities
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6 tracking-tight">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-[#63b3ed] via-[#9f7aea] to-[#f687b3] bg-clip-text text-transparent">
              Jaysingh Gautam
            </span>
            <br />
             Full-Stack Developer
          </h1>

          <p className="text-slate-400 text-lg sm:text-xl max-w-xl md:max-w-none mb-10 leading-relaxed">
            I craft{" "}
            <span className="font-mono font-semibold text-[#9f7aea]">
              {typed}
            </span>
            <span className="animate-pulse text-[#f687b3]">|</span> — turning
            complex problems into elegant, scalable solutions.
          </p>

          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <button
              onClick={() => scrollTo("projects")}
              className="px-8 py-3 rounded-full font-semibold text-slate-100 transition-all duration-300 hover:-translate-y-1"
              style={{
                background: "linear-gradient(135deg,#2b4c7e,#553c9a)",
                boxShadow: "0 8px 24px rgba(99,102,241,0.35)",
              }}
            >
              View My Work
            </button>

            <button
              onClick={() => scrollTo("contact")}
              className="px-8 py-3 rounded-full font-semibold text-[#63b3ed] border border-[rgba(99,179,237,0.4)] bg-[rgba(99,179,237,0.06)] hover:bg-[rgba(99,179,237,0.14)] hover:-translate-y-1 transition-all duration-300"
            >
              Let's Connect
            </button>
          </div>
        </div>

        {/* Right Photo */}
        <div className="flex-1 flex justify-center">
          <div
            className="
          w-64 h-64 md:w-80 md:h-80
          rounded-full
          overflow-hidden
          border-[6px]
          border-[#63b3ed]
          transition-all
          duration-500
          hover:scale-105
          hover:shadow-[0_0_40px_rgba(99,179,237,0.7)]
        "
          >
            <img
              src="https://res.cloudinary.com/drc0gwhz9/image/upload/v1785917007/1775970070954_rjytbt.png"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
