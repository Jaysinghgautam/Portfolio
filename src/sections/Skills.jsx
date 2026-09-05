 
import useReveal from "../hooks/useReveal";

const SKILLS = [
  {
    icon: "⚛️",
    name: "React / Next.js",
    pct: 92,
    tags: ["Hooks", "SSR", "RSC", "Redux"],
  },
  {
    icon: "🟦",
    name: "TypeScript",
    pct: 88,
    tags: ["Generics", "Zod", "tRPC"],
  },
  {
    icon: "🟢",
    name: "Node.js / Express",
    pct: 85,
    tags: ["REST", "GraphQL", "WebSockets"],
  },
  {
    icon: "🐍",
    name: "Python",
    pct: 80,
    tags: ["FastAPI", "Django", "pandas"],
  },
  {
    icon: "🗄️",
    name: "Databases",
    pct: 83,
    tags: ["PostgreSQL", "MongoDB", "Redis"],
  },
  {
    icon: "☁️",
    name: "Cloud & DevOps",
    pct: 75,
    tags: ["AWS", "Docker", "CI/CD", "k8s"],
  },
  {
    icon: "🛠️",
    name: "Other Tools & Libs",
    pct: 82,
    tags: ["Git", "Webpack", "Jest", "Tailwind"],
  },
  {
    name: "programming languages",
    icon: "💻",
    pct: 90,
    tags: ["C", "C++", "Java", "JavaScript"],
  },
  {
    name: "soft skills",
    icon: "🌟",
    pct: 95,
    tags: ["Communication", "Teamwork", "Problem-Solving"],
  },
  {
    name: "DSA & Competitive Programming",
    icon: "📊",
    pct: 85,
    tags: ["LeetCode", "Codeforces", "Algorithms"],
  },
  {
    name: "HTML & CSS",
    icon: "🎨",
    pct: 80,
    tags: ["Flexbox", "Grid", "Animations"],
  },
];

function SkillCard({ skill, delay }) {
  const [ref, visible] = useReveal();

  return (
    <div
      ref={ref}
      className={`bg-[rgba(255,255,255,0.025)] border border-[rgba(99,179,237,0.1)] rounded-2xl p-5
        hover:border-[rgba(99,179,237,0.4)] hover:bg-[rgba(99,179,237,0.05)] hover:-translate-y-1
        transition-all duration-300 ${
          visible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8"
        }`}
      style={{
        transitionDelay: `${delay}ms`,
      }}
    >
      {/* Header row */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <span className="text-xl">{skill.icon}</span>

          <span className="text-sm font-semibold text-slate-200">
            {skill.name}
          </span>
        </div>

        <span className="font-mono text-xs text-[#9f7aea]">
          {skill.pct}%
        </span>
      </div>

      {/* Progress bar */}
      <div className="h-1 bg-[rgba(255,255,255,0.07)] rounded-full overflow-hidden mb-3">
        <div
          className="h-full rounded-full bg-gradient-to-r from-[#63b3ed] to-[#9f7aea] transition-all duration-[1200ms] ease-out"
          style={{
            width: visible ? `${skill.pct}%` : "0%",
            transitionDelay: `${delay + 200}ms`,
          }}
        />
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5">
        {skill.tags.map((t) => (
          <span
            key={t}
            className="text-[11px] px-2 py-0.5 rounded-full border border-[rgba(99,179,237,0.18)] bg-[rgba(99,179,237,0.06)] text-[#7ec8e3] font-mono"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  const [ref, visible] = useReveal();

  return (
    <section id="skills" className="relative z-10 py-24">
      <div className="max-w-6xl mx-auto px-6">
        <p className="font-mono text-[#9f7aea] text-xs tracking-[3px] uppercase mb-3">
          // tech stack
        </p>

        <h2
          ref={ref}
          className={`text-4xl sm:text-5xl font-bold mb-12 tracking-tight transition-all duration-700 ${
            visible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          Skills &{" "}
          <span className="bg-gradient-to-r from-[#63b3ed] via-[#9f7aea] to-[#f687b3] bg-clip-text text-transparent">
            Technologies
          </span>
        </h2>

        <div className="grid sm:grid-cols-2 gap-4">
          {SKILLS.map((sk, i) => (
            <SkillCard
              key={sk.name}
              skill={sk}
              delay={i * 80}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
 
