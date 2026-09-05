import useReveal from "../hooks/useReveal";

const STATS = [
  { value: "6+", label: "Projects Shipped" },
  { value: "6+", label: "Months Experience" },
  { value: "10+", label: "Technologies" },
  { value: "99%", label: "Client Satisfaction" },
];

export default function About() {
  const [ref, visible] = useReveal();

  return (
    <section id="about" className="relative z-10 py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <p className="font-mono text-[#9f7aea] text-xs tracking-[3px] uppercase mb-3">
          // about me
        </p>
        <h2
          ref={ref}
          className={`text-4xl sm:text-5xl font-bold mb-14 tracking-tight transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Who I{" "}
          <span className="bg-gradient-to-r from-[#63b3ed] via-[#9f7aea] to-[#f687b3] bg-clip-text text-transparent">
            Am
          </span>
        </h2>

        {/* Cards grid */}
        <div
          className={`grid sm:grid-cols-2 gap-5 mb-8 transition-all duration-700 delay-100 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="bg-[rgba(99,179,237,0.04)] border border-[rgba(99,179,237,0.12)] rounded-2xl p-6">
            <h3 className="font-mono text-[#63b3ed] text-sm tracking-wide mb-3">
              $ who am i
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              As a passionate engineering student specializing in computer
              science, I am dedicated to mastering Data Structures and
              Algorithms (DSA) to enhance my problem-solving skills and web
              development . I have experience with languages C, C++, java, java
              script ,Python, and React.js. With a strong foundation in computer
              Science, I constantly seek to enhance my skills and stay updated
              with the latest developments in the field.
            </p>
          </div>
          <div className="bg-[rgba(99,179,237,0.04)] border border-[rgba(99,179,237,0.12)] rounded-2xl p-6">
            <h3 className="font-mono text-[#63b3ed] text-sm tracking-wide mb-3">
              $ cat interests.txt
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              I am deeply interested in web development, system design, and
              software architecture. I enjoy building scalable and efficient
              applications that solve real-world problems. I am also passionate
              about learning new technologies and continuously improving my skills
              in the ever-evolving field of computer science.
            </p>
          </div>
        </div>

        {/* Stats row */}
        <div
          className={`grid grid-cols-2 sm:grid-cols-4 gap-4 transition-all duration-700 delay-200 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {STATS.map((s) => (
            <div
              key={s.label}
              className="text-center bg-[rgba(159,122,234,0.08)] border border-[rgba(159,122,234,0.2)] rounded-2xl py-5 px-3"
            >
              <div className="text-3xl font-bold bg-gradient-to-r from-[#63b3ed] to-[#9f7aea] bg-clip-text text-transparent">
                {s.value}
              </div>
              <div className="text-xs text-slate-500 mt-1 tracking-wide">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
