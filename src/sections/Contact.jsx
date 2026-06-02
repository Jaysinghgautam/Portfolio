 import { useState } from "react";
import useReveal from "../hooks/useReveal";

const CONTACT_INFO = [
  { icon: "✉️", label: "EMAIL", value: "gjaysingh53@gmail.com" },
  { icon: "📍", label: "LOCATION", value: "Uttar Pradesh, India" },
  { icon: "🐙", label: "GITHUB", value: "github.com/jaysinghgautam" },
  { icon: "💼", label: "LINKEDIN", value: "linkedin.com/in/jaysinghgautam" },
];

export default function Contact() {
  const [ref, visible] = useReveal();

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [sent, setSent] = useState(false);
  const [result, setResult] = useState("");

  const onChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    setResult("Sending...");

    try {
      const formData = new FormData();

      formData.append(
        "access_key",
        "eea20c15-eced-4865-b345-cb7e4a911933"
      );

      formData.append("name", form.name);
      formData.append("email", form.email);
      formData.append("subject", form.subject);
      formData.append("message", form.message);

      const response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();

      if (data.success) {
        setSent(true);
        setResult("✅ Message sent successfully!");

        setForm({
          name: "",
          email: "",
          subject: "",
          message: "",
        });

        setTimeout(() => {
          setSent(false);
          setResult("");
        }, 4000);
      } else {
        console.log(data);
        setResult("❌ Failed to send message");
      }
    } catch (error) {
      console.error(error);
      setResult("❌ Something went wrong");
    }
  };

  const inputCls =
    "w-full bg-[rgba(99,179,237,0.04)] border border-[rgba(99,179,237,0.18)] rounded-xl px-4 py-3 text-slate-100 placeholder-slate-600 text-sm font-sans focus:outline-none focus:border-[rgba(99,179,237,0.5)] focus:ring-1 focus:ring-[rgba(99,179,237,0.3)] transition-all duration-200";

  return (
    <section id="contact" className="relative z-10 py-24">
      <div className="max-w-4xl mx-auto px-6">
        <p className="font-mono text-[#9f7aea] text-xs tracking-[3px] uppercase mb-3">
          // get in touch
        </p>

        <h2
          ref={ref}
          className={`text-4xl sm:text-5xl font-bold mb-14 tracking-tight transition-all duration-700 ${
            visible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          Let's{" "}
          <span className="bg-gradient-to-r from-[#63b3ed] via-[#9f7aea] to-[#f687b3] bg-clip-text text-transparent">
            Work Together
          </span>
        </h2>

        <div
          className={`grid lg:grid-cols-5 gap-10 transition-all duration-700 delay-150 ${
            visible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          {/* Left Side */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-bold text-slate-100 mb-3">
              Open to new roles
            </h3>

            <p className="text-sm text-slate-400 leading-relaxed mb-6">
              Whether you have a project, a full-time role, or just want to talk
              tech — my inbox is always open.
            </p>

            <div className="space-y-3">
              {CONTACT_INFO.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-3 bg-[rgba(99,179,237,0.05)] border border-[rgba(99,179,237,0.12)] rounded-xl px-4 py-3"
                >
                  <span className="text-lg">{item.icon}</span>

                  <div>
                    <p className="font-mono text-[10px] text-slate-500 tracking-widest">
                      {item.label}
                    </p>

                    <p className="text-sm text-slate-200 font-medium">
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side Form */}
          <div className="lg:col-span-3 bg-[rgba(255,255,255,0.02)] border border-[rgba(99,179,237,0.12)] rounded-2xl p-7">
            <form onSubmit={onSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-400 text-xs mb-1.5 font-mono tracking-wide">
                    Full Name *
                  </label>

                  <input
                    name="name"
                    type="text"
                    required
                    placeholder="John Doe"
                    value={form.name}
                    onChange={onChange}
                    className={inputCls}
                  />
                </div>

                <div>
                  <label className="block text-slate-400 text-xs mb-1.5 font-mono tracking-wide">
                    Email *
                  </label>

                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="john@example.com"
                    value={form.email}
                    onChange={onChange}
                    className={inputCls}
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-400 text-xs mb-1.5 font-mono tracking-wide">
                  Subject
                </label>

                <input
                  name="subject"
                  type="text"
                  placeholder="Let's work together!"
                  value={form.subject}
                  onChange={onChange}
                  className={inputCls}
                />
              </div>

              <div>
                <label className="block text-slate-400 text-xs mb-1.5 font-mono tracking-wide">
                  Message *
                </label>

                <textarea
                  name="message"
                  rows={5}
                  required
                  placeholder="Tell me about your project or opportunity..."
                  value={form.message}
                  onChange={onChange}
                  className={`${inputCls} resize-y`}
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl font-bold text-slate-100 tracking-wide transition-all duration-300 hover:-translate-y-0.5 active:scale-95"
                style={{
                  background:
                    "linear-gradient(135deg,#2b4c7e,#553c9a)",
                  boxShadow:
                    "0 6px 24px rgba(99,102,241,0.35)",
                }}
              >
                Send Message →
              </button>

              {result && (
                <div
                  className={`text-center text-sm rounded-xl py-3 ${
                    sent
                      ? "text-emerald-400 bg-[rgba(16,185,129,0.1)] border border-[rgba(16,185,129,0.3)]"
                      : "text-red-400 bg-[rgba(239,68,68,0.1)] border border-[rgba(239,68,68,0.3)]"
                  }`}
                >
                  {result}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}