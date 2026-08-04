 import { useState,useEffect } from "react";
import axios from "axios";
import useReveal from "../hooks/useReveal";


const CONTACT_INFO = [
  {
    icon: "✉️",
    label: "Email",
    value: "gjaysingh53@gmail.com",
  },
  {
    icon: "📍",
    label: "Location",
    value: "Uttar Pradesh, India",
  },
  {
    icon: "🐙",
    label: "GitHub",
    value: "github.com/jaysinghgautam",
  },
  {
    icon: "💼",
    label: "LinkedIn",
    value: "linkedin.com/in/jaysinghgautam",
  },
];

export default function Contact() {
  const [ref, visible] = useReveal();

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setStatus({
      type: "",
      message: "",
    });

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/sendMail`,
        form
      );

      setStatus({
        type: "success",
        message: res.data.message || "Message sent successfully!",
      });

      setForm({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error.response?.data?.message ||
          "Unable to send message. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
  if (status.message) {
    const timer = setTimeout(() => {
      setStatus({
        type: "",
        message: "",
      });
    }, 3000); // 3 seconds

    return () => clearTimeout(timer);
  }
}, [status]);

  const inputStyle =
    "w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-white placeholder:text-slate-500 outline-none focus:border-blue-500";

  return (
    <section id="contact" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2
          ref={ref}
          className={`text-4xl font-bold text-center mb-12 transition-all duration-700 ${
            visible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          Contact Me
        </h2>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Contact Info */}

          <div
            className={`transition-all duration-700 ${
              visible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-8"
            }`}
          >
            <h3 className="text-2xl font-semibold mb-4 text-white">
              Get In Touch
            </h3>

            <p className="text-slate-400 mb-8">
              Have a project, internship opportunity or just want to say hello?
              Fill out the form and I'll get back to you soon.
            </p>

            <div className="space-y-4">
              {CONTACT_INFO.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-4 rounded-xl border border-slate-800 bg-slate-900 p-4"
                >
                  <span className="text-2xl">{item.icon}</span>

                  <div>
                    <p className="text-sm text-slate-400">{item.label}</p>

                    <p className="text-white">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}

          <div
            className={`rounded-2xl border border-slate-800 bg-slate-950 p-8 transition-all duration-700 ${
              visible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-8"
            }`}
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm text-slate-300 mb-2">
                  Full Name
                </label>

                <input
                  type="text"
                  name="name"
                  placeholder="Enter your full name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className={inputStyle}
                />
              </div>

              <div>
                <label className="block text-sm text-slate-300 mb-2">
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className={inputStyle}
                />
              </div>

              <div>
                <label className="block text-sm text-slate-300 mb-2">
                  Subject
                </label>

                <input
                  type="text"
                  name="subject"
                  placeholder="Enter subject"
                  value={form.subject}
                  onChange={handleChange}
                  className={inputStyle}
                />
              </div>

              <div>
                <label className="block text-sm text-slate-300 mb-2">
                  Message
                </label>

                <textarea
                  rows="6"
                  name="message"
                  placeholder="Write your message here..."
                  value={form.message}
                  onChange={handleChange}
                  required
                  className={`${inputStyle} resize-none`}
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-slate-600"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>

              {status.message && (
                <div
                  className={`rounded-lg p-3 text-center ${
                    status.type === "success"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {status.message}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}