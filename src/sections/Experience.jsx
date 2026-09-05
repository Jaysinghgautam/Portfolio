 import useReveal from "../hooks/useReveal";

const EXPERIENCES = [
  {
    role: "Full Stack Developer Intern",
    company: "Nature Harvest",
    duration: "2026 — Present",
    description:
      "Working as a Full Stack Developer Intern, developing responsive and interactive web applications using the MERN stack. Building frontend interfaces, REST APIs, database integration, authentication, and payment functionality.",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Razorpay",
      "Stripe",
    ],
  },
  {
    role: "Full Stack Developer",
    company: "Recsonbhadra College",
    duration: "June 2025 — Present",
    description:
      "Working with the development team on the official college website and its admin panel. Contributing to full-stack development using the MERN stack and TypeScript, including frontend development, backend APIs, database integration, admin panel functionality, media management with Cloudinary, and deployment and security using Cloudflare.",
    technologies: [
      "React.js",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Cloudinary",
      "Cloudflare",
    ],
  },
  {
    role: "SIH 2025 — Internal Hackathon Winner",
    company: "Smart India Hackathon",
    duration: "2025",
    description:
      "Won the internal hackathon for SIH 2025 by collaborating with a team to develop an innovative technology solution and present it to the evaluation panel.",
    technologies: [
      "Problem Solving",
      "Team Collaboration",
      "Innovation",
      "Technology",
    ],
  },
  {
    role: "Web Developer",
    company: "Freelance / Personal Projects",
    duration: "2025 — 2026",
    description:
      "Built modern and responsive websites with interactive UI, reusable components, smooth animations, API integration, and a strong focus on user experience and clean code.",
    technologies: ["React.js", "JavaScript", "Tailwind CSS"],
  },
];

export default function Experience() {
  const [ref, visible] = useReveal();

  return (
    <section id="experience" className="relative z-10 py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <p className="font-mono text-[#9f7aea] text-xs tracking-[3px] uppercase mb-3">
          // experience
        </p>

        <h2
          ref={ref}
          className={`text-4xl sm:text-5xl font-bold mb-14 tracking-tight transition-all duration-700 ${
            visible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          Where I{" "}
          <span className="bg-gradient-to-r from-[#63b3ed] via-[#9f7aea] to-[#f687b3] bg-clip-text text-transparent">
            Worked
          </span>
        </h2>

        {/* Experience cards */}
        <div className="grid sm:grid-cols-2 gap-5">
          {EXPERIENCES.map((experience, index) => (
            <div
              key={experience.role}
              className={`group relative rounded-2xl p-6 transition-all duration-500
                bg-[rgba(99,179,237,0.04)]
                border border-[rgba(99,179,237,0.12)]
                hover:scale-[1.025]
                hover:shadow-[0_0_30px_rgba(99,179,237,0.18),0_0_60px_rgba(159,122,234,0.12)]
                ${
                  visible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }
              `}
              style={{
                transitionDelay: `${100 + index * 100}ms`,
              }}
            >
              {/* 6 Color Gradient Border */}
              <div
                className="absolute inset-0 rounded-2xl p-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(135deg, #63b3ed, #9f7aea, #f687b3, #68d391, #f6ad55, #fc8181)",
                  WebkitMask:
                    "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                  WebkitMaskComposite: "xor",
                  maskComposite: "exclude",
                }}
              />

              {/* Role & Duration */}
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4 relative z-10">
                <div>
                  <h3 className="text-xl font-bold text-white">
                    {experience.role}
                  </h3>

                  <p className="font-mono text-[#63b3ed] text-sm mt-1">
                    {experience.company}
                  </p>
                </div>

                <span className="font-mono text-xs text-slate-500 tracking-wide">
                  {experience.duration}
                </span>
              </div>

              {/* Description */}
              <p className="text-slate-400 text-sm leading-relaxed relative z-10">
                {experience.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mt-5 relative z-10">
                {experience.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="px-3 py-1 text-xs font-mono rounded-full bg-[rgba(159,122,234,0.08)] border border-[rgba(159,122,234,0.2)] text-slate-400"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}