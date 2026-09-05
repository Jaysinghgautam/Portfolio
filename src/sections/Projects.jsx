 import { motion } from "framer-motion";
import useReveal from "../hooks/useReveal";

const PROJECTS = [
  {
    icon: "🏨",
    title: "Hotel Booking Website",
    desc: "Built a full-stack hotel booking platform with hotel listings, room search and filtering, user authentication, booking management, secure online payments, and an admin dashboard for managing hotels, rooms, and reservations.",
    stack: ["MongoDB", "Express.js", "React.js", "Node.js", "Razorpay"],
    github: "https://github.com/Jaysinghgautam/Hotel-booking-App.git",
    demo: "https://stay-to-night.vercel.app/",
  },
  {
    icon: "🛍️",
    title: "E-Commerce Website",
    desc: "Built a scalable e-commerce platform with product catalog, user authentication, shopping cart, secure payment integration, order management, and admin dashboard for inventory and sales tracking.",
    stack: ["MongoDB", "Express.js", "React.js", "Node.js", "Razorpay"],
    github: "https://github.com/Jaysinghgautam/E-ComerceWebsite.git",
    demo: "https://cartneo.vercel.app/",
  },
  {
    icon: "📚",
    title: "Vyombotics Educational Website",
    desc: "Designed and developed a responsive educational platform enabling students to discover courses, access learning content, and engage with skill-based programs. Integrated Firebase for authentication, database management, and scalable real-time functionality.",
    stack: ["React.js", "Firebase", "Tailwind CSS", "JavaScript"],
    github: "https://github.com/vyombotics-org/Vyombotics-main.gitt",
    demo: "https://vyombotics-main.vercel.app/",
  },
  {
    icon: "📒",
    title: "Secure Notes Management System",
    desc: "Built a MERN stack application for secure note creation and management with user authentication and authorization. Features include CRUD operations, protected user accounts, responsive design, and efficient data storage to provide a smooth and personalized note-taking experience.",
    stack: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "JWT",
      "Tailwind CSS",
    ],
    github: "https://github.com/Jaysinghgautam/jaysingh-Notes.git",
    demo: "https://jaysingh-notes.vercel.app",
  },
  {
    icon: "🌐",
    title: "CNCRECS Conference Website",
    desc: "Developed and deployed the official conference website for Rajkiya Engineering College Sonbhadra, providing information about events, paper submissions, speakers, schedules, and registration. Designed a responsive and user-friendly interface to ensure seamless access across all devices.",
    stack: ["React.js", "Node.js", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/Atul7307/Conference-Site.git",
    demo: "https://conference-site.vercel.app/",
  },
  {
    icon: "📈",
    title: "Digital Marketing Agency Website",
    desc: "Developed a modern and responsive digital marketing agency website as an internship project. Designed an engaging user interface with smooth animations, interactive sections, and a clean layout to showcase digital marketing services and improve user experience across devices.",
    stack: ["React.js", "Tailwind CSS", "JavaScript"],
    github: "https://github.com/Jaysinghgautam/Digital-marketing-.git",
    demo: "https://jay-digitalmarketing.vercel.app/",
  },
  {
    icon: "⚡",
    title: "Mega Project Management Platform",
    desc: "Developed a feature-rich web application using React and Appwrite, incorporating secure authentication, real-time database operations, file storage, and role-based access control. Built a scalable and responsive user interface to deliver a seamless user experience across devices.",
    stack: ["React.js", "Appwrite", "JavaScript", "Tailwind CSS"],
    github: "https://github.com/Jaysinghgautam/jaysingh-mega-project.git",
    demo: "https://jaysingh-mega-project.vercel.app/",
  },
  {
    icon: "🌟",
    title: "Bhavishya Educational Website",
    desc: "Developed a modern educational website focused on providing learning resources, courses, and student-friendly content. Designed a clean and responsive user interface using HTML and CSS, ensuring an engaging user experience across desktop and mobile devices.",
    stack: ["HTML5", "CSS3", "Responsive Design"],
    github: "https://github.com/Jaysinghgautam/assesment2",
    demo: "https://jay-bhavishya.vercel.app/",
  },
];

function ProjectCard({ project, delay }) {
  const [ref, visible] = useReveal();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={
        visible
          ? { opacity: 1, y: 0 }
          : { opacity: 0, y: 50 }
      }
      transition={{
        duration: 0.6,
        delay: delay / 1000,
        ease: "easeOut",
      }}
      className="group relative bg-[rgba(255,255,255,0.025)] border border-[rgba(99,179,237,0.1)] rounded-2xl overflow-hidden
        hover:scale-[1.025]
        hover:shadow-[0_0_30px_rgba(99,179,237,0.18),0_0_60px_rgba(159,122,234,0.12)]
        transition-all duration-500"
    >
      {/* 6 Color Gradient Border */}
      <div
        className="absolute inset-0 rounded-2xl p-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-20"
        style={{
          background:
            "linear-gradient(135deg, #63b3ed, #9f7aea, #f687b3, #68d391, #f6ad55, #fc8181)",
          WebkitMask:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
        }}
      />

      {/* Gradient top strip */}
      <div className="h-1 bg-gradient-to-r from-[#63b3ed] via-[#9f7aea] to-[#f687b3]" />

      <div className="p-6">
        <div className="text-3xl mb-3">{project.icon}</div>

        <h3 className="text-base font-bold text-slate-100 mb-2">
          {project.title}
        </h3>

        <p className="text-sm text-slate-500 leading-relaxed mb-4">
          {project.desc}
        </p>

        {/* Stack tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.stack.map((t) => (
            <span
              key={t}
              className="text-[11px] px-2 py-0.5 rounded-full border border-[rgba(99,179,237,0.18)] bg-[rgba(99,179,237,0.06)] text-[#7ec8e3] font-mono"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs px-4 py-2 rounded-full border border-[rgba(99,179,237,0.25)] text-[#63b3ed] hover:bg-[rgba(99,179,237,0.12)] transition-colors duration-200 font-semibold"
          >
            GitHub
          </a>

          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs px-4 py-2 rounded-full border border-[rgba(99,179,237,0.25)] text-[#63b3ed] hover:bg-[rgba(99,179,237,0.12)] transition-colors duration-200 font-semibold"
          >
            Live Demo
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [ref, visible] = useReveal();

  return (
    <section id="projects" className="relative z-10 py-24">
      <div className="max-w-6xl mx-auto px-6">
        <p className="font-mono text-[#9f7aea] text-xs tracking-[3px] uppercase mb-3">
          // portfolio
        </p>

        <h2
          ref={ref}
          className={`text-4xl sm:text-5xl font-bold mb-12 tracking-tight transition-all duration-700 ${
            visible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          Featured{" "}
          <span className="bg-gradient-to-r from-[#63b3ed] via-[#9f7aea] to-[#f687b3] bg-clip-text text-transparent">
            Projects
          </span>
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {PROJECTS.map((p, i) => (
            <ProjectCard
              key={p.title}
              project={p}
              delay={i * 90}
            />
          ))}
        </div>
      </div>
    </section>
  );
}