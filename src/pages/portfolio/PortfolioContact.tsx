import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-4 mb-4">
      <span className="font-mono text-[0.72rem] font-light text-[#b0aba3] tracking-[0.12em] uppercase whitespace-nowrap">
        {children}
      </span>
      <div className="flex-1 h-px bg-[#e5e0d7]" />
    </div>
  );
}

const PortfolioContact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Message from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:ui.dhika@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="w-full max-w-[1100px] mx-auto pb-28 max-[860px]:pb-16">

      {/* ── HERO ── */}
      <section
        className="px-12 pt-16 pb-20 border-b border-[#e5e0d7] max-[860px]:px-7 max-[860px]:pt-12 max-[860px]:pb-14"
        style={{ animation: "fadeUp .5s ease both" }}
      >
        <SectionLabel>Contact</SectionLabel>
        <h1 className="font-grotesk font-normal text-[3rem] leading-[1.05] tracking-[-0.025em] text-[#1c1916] mb-6 max-[860px]:text-[2.2rem]">
          Let's work together.
        </h1>
        <p className="font-grotesk text-[1.1rem] leading-[1.75] text-[#6e6a62] max-w-[480px]">
          Have a project in mind or just want to say hello? Fill in the form below and I'll get back to you shortly.
        </p>
      </section>

      {/* ── FORM ── */}
      <section
        className="px-12 pt-16 pb-20 border-b border-[#e5e0d7] max-[860px]:px-7 max-[860px]:pt-12 max-[860px]:pb-14"
        style={{ animation: "fadeUp .5s .1s ease both" }}
      >
        <form onSubmit={handleSubmit} className="max-w-[560px]">

          {/* Name */}
          <div className="mb-10">
            <label
              htmlFor="name"
              className="block font-mono text-[0.62rem] tracking-[0.1em] uppercase text-[#b0aba3] mb-3"
            >
              Your name *
            </label>
            <input
              id="name"
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Dhika Endi Astowo"
              className="w-full bg-transparent border-0 border-b border-[#e5e0d7] pb-3 font-grotesk text-[1rem] text-[#1c1916] placeholder:text-[#d5cfc7] outline-none focus:border-[#1c1916] transition-colors"
            />
          </div>

          {/* Email */}
          <div className="mb-10">
            <label
              htmlFor="email"
              className="block font-mono text-[0.62rem] tracking-[0.1em] uppercase text-[#b0aba3] mb-3"
            >
              Email *
            </label>
            <input
              id="email"
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="hello@example.com"
              className="w-full bg-transparent border-0 border-b border-[#e5e0d7] pb-3 font-grotesk text-[1rem] text-[#1c1916] placeholder:text-[#d5cfc7] outline-none focus:border-[#1c1916] transition-colors"
            />
          </div>

          {/* Message */}
          <div className="mb-12">
            <label
              htmlFor="message"
              className="block font-mono text-[0.62rem] tracking-[0.1em] uppercase text-[#b0aba3] mb-3"
            >
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Tell me about your project..."
              className="w-full bg-transparent border-0 border-b border-[#e5e0d7] pb-3 font-grotesk text-[1rem] text-[#1c1916] placeholder:text-[#d5cfc7] outline-none focus:border-[#1c1916] transition-colors resize-none"
            />
          </div>

          <button
            type="submit"
            className="group inline-flex items-center gap-2 font-mono text-[0.68rem] tracking-[0.06em] bg-[#c8622e] text-white px-5 py-2.5 transition-colors duration-200 hover:bg-[#b5571a]"
          >
            Send request
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>

        </form>
      </section>

      {/* ── DIRECT CONTACT ── */}
      <section
        className="px-12 pt-12 pb-14 max-[860px]:px-7"
        style={{ animation: "fadeUp .5s .2s ease both" }}
      >
        <p className="font-mono text-[0.65rem] text-[#b0aba3] mb-2 tracking-[0.08em] uppercase">
          Prefer direct email?
        </p>
        <a
          href="mailto:ui.dhika@gmail.com"
          className="font-grotesk text-[1.1rem] text-[#1c1916] hover:text-[#c8622e] transition-colors no-underline"
        >
          ui.dhika@gmail.com
        </a>
      </section>

    </div>
  );
};

export default PortfolioContact;
