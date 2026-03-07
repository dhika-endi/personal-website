import { Link } from "react-router-dom";
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

function CaseImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="mt-6 border border-[#e5e0d7]">
      <img src={src} alt={alt} className="w-full block" />
    </div>
  );
}

const ComponentDocsCaseStudy = () => {
  return (
    <div className="w-full max-w-[1100px] mx-auto pb-28 max-[860px]:pb-16">

      {/* ── BACK NAV + TITLE ── */}
      <section
        className="px-12 pt-12 pb-16 border-b border-[#e5e0d7] max-[860px]:px-7 max-[860px]:pt-10"
        style={{ animation: "fadeUp .5s ease both" }}
      >
        <Link
          to="/case-studies"
          className="inline-flex items-center gap-1 font-mono text-[0.65rem] tracking-[0.06em] text-[#b0aba3] hover:text-[#1c1916] transition-colors no-underline mb-12 uppercase"
        >
          ← Case Studies
        </Link>

        <p className="font-mono text-[0.6rem] font-light text-[#b0aba3] tracking-[0.12em] uppercase mb-3">
          002 · 2025
        </p>
        <h1 className="font-grotesk font-normal text-[3rem] leading-[1.05] tracking-[-0.025em] text-[#1c1916] max-w-[700px] max-[860px]:text-[2.2rem]">
          Building Component Docs for Teams, Not Just Systems.
        </h1>
      </section>

      {/* ── HERO IMAGE ── */}
      <div className="border-b border-[#e5e0d7]" style={{ animation: "fadeUp .5s .1s ease both" }}>
        <img
          src="https://framerusercontent.com/images/X7hb9IXO4Js8k9twWCKn5eWYzw.png"
          alt="Component Documentation Hero"
          className="w-full block"
        />
      </div>

      {/* ── INTRODUCTION ── */}
      <section
        className="px-12 pt-16 pb-20 border-b border-[#e5e0d7] max-[860px]:px-7 max-[860px]:pt-12 max-[860px]:pb-14"
        style={{ animation: "fadeUp .5s .15s ease both" }}
      >
        <p className="font-grotesk text-[1.15rem] leading-[1.8] text-[#6e6a62] max-w-[680px]">
          Good documentation doesn't just describe components—it shows teams how to use them correctly. Using Button as an example, this case study walks through a documentation structure that covers anatomy, variants, states, behaviors, best practices, and responsive guidelines.
        </p>
      </section>

      {/* ── WHO BENEFITS ── */}
      <section
        className="px-12 pt-16 pb-20 border-b border-[#e5e0d7] max-[860px]:px-7 max-[860px]:pt-12 max-[860px]:pb-14"
        style={{ animation: "fadeUp .5s .2s ease both" }}
      >
        <SectionLabel>Who Benefits?</SectionLabel>

        <div className="grid grid-cols-3 gap-8 max-[640px]:grid-cols-1">
          {[
            {
              title: "For Product Teams",
              items: ["Faster design-to-dev handoff", "Consistent user experience", "Reduced back-and-forth on specs"],
            },
            {
              title: "For Developers",
              items: ["Copy-paste code snippets", "Clear prop definitions", "Accessibility baked in"],
            },
            {
              title: "For Everyone",
              items: ["Single source of truth", "Searchable reference", "Living documentation"],
            },
          ].map((group) => (
            <div key={group.title}>
              <h3 className="font-grotesk font-normal text-[1.05rem] text-[#1c1916] mb-4">{group.title}</h3>
              <ul className="space-y-2">
                {group.items.map((item) => (
                  <li key={item} className="flex gap-2.5">
                    <span className="font-mono text-[0.6rem] text-[#c8622e] mt-1 flex-shrink-0">—</span>
                    <span className="font-mono text-[0.8rem] font-light text-[#6e6a62] leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ── DOCUMENTATION STRUCTURE ── */}
      <section
        className="px-12 pt-16 pb-20 border-b border-[#e5e0d7] max-[860px]:px-7 max-[860px]:pt-12 max-[860px]:pb-14"
        style={{ animation: "fadeUp .5s .22s ease both" }}
      >
        <SectionLabel>Documentation Structure</SectionLabel>
        <p className="font-mono text-[0.8rem] font-light text-[#6e6a62] leading-relaxed mb-8 max-w-[560px]">
          Each component page follows a consistent structure with these sections:
        </p>
        <ol className="grid grid-cols-3 gap-x-8 gap-y-3 max-[640px]:grid-cols-1">
          {[
            "Overview", "Anatomy", "Variants",
            "States", "Behavior", "Best Practices",
            "Do and Don't", "Responsive", "Changelog",
          ].map((item, i) => (
            <li key={item} className="flex gap-2.5 font-mono text-[0.8rem] font-light text-[#6e6a62]">
              <span className="text-[#c8622e] flex-shrink-0">
                {String(i + 1).padStart(2, "0")}.
              </span>
              {item}
            </li>
          ))}
        </ol>
      </section>

      {/* ── ANATOMY ── */}
      <section
        className="px-12 pt-16 pb-20 border-b border-[#e5e0d7] max-[860px]:px-7 max-[860px]:pt-12 max-[860px]:pb-14"
        style={{ animation: "fadeUp .5s .24s ease both" }}
      >
        <SectionLabel>Anatomy</SectionLabel>
        <p className="font-mono text-[0.8rem] font-light text-[#6e6a62] leading-relaxed mb-6 max-w-[560px]">
          Anatomy diagrams break down each component into its constituent parts. For Button, we identify three key elements:
        </p>
        <ol className="space-y-2 mb-8">
          {["Left Icon (optional)", "Label (required)", "Right Icon (optional)"].map((item, i) => (
            <li key={item} className="flex gap-2.5 font-mono text-[0.8rem] font-light text-[#6e6a62]">
              <span className="text-[#c8622e] flex-shrink-0">{i + 1}.</span>
              {item}
            </li>
          ))}
        </ol>
        <CaseImage
          src="https://framerusercontent.com/images/rhTh3AnqW4fp6LjEF3FnONzE.png"
          alt="Button Anatomy"
        />
      </section>

      {/* ── VARIANTS ── */}
      <section
        className="border-b border-[#e5e0d7]"
        style={{ animation: "fadeUp .5s .26s ease both" }}
      >
        <div className="px-12 pt-16 max-[860px]:px-7 max-[860px]:pt-12">
          <SectionLabel>Variants</SectionLabel>
        </div>

        {[
          {
            title: "Size Variants",
            text: "Size variants control the button's height, padding, and font size. Common sizes include Small, Medium, and Large, each suited for different contexts.",
            image: "https://framerusercontent.com/images/V1ajeLGqdoMw7JM7Ob7dLyZ6PNk.png",
            alt: "Size Variants",
          },
          {
            title: "Type Variants",
            text: "Type variants communicate visual emphasis. Primary buttons drive main actions, Secondary buttons support alternatives, and Ghost buttons offer minimal visual weight.",
            image: "https://framerusercontent.com/images/PDNqcOZHQTzCGMJ4x7HFk9SdE.png",
            alt: "Type Variants",
          },
        ].map((item, i, arr) => (
          <div
            key={item.title}
            className={`px-12 pb-14 max-[860px]:px-7 max-[860px]:pb-10 ${i < arr.length - 1 ? "border-b border-[#e5e0d7]" : "pb-20 max-[860px]:pb-14"}`}
          >
            <h3 className="font-grotesk font-normal text-[1.15rem] text-[#1c1916] mb-3 pt-10 max-[860px]:pt-8">{item.title}</h3>
            <p className="font-mono text-[0.8rem] font-light text-[#6e6a62] leading-relaxed max-w-[640px]">{item.text}</p>
            <CaseImage src={item.image} alt={item.alt} />
          </div>
        ))}
      </section>

      {/* ── STATES ── */}
      <section
        className="px-12 pt-16 pb-20 border-b border-[#e5e0d7] max-[860px]:px-7 max-[860px]:pt-12 max-[860px]:pb-14"
        style={{ animation: "fadeUp .5s .28s ease both" }}
      >
        <SectionLabel>States</SectionLabel>
        <p className="font-mono text-[0.8rem] font-light text-[#6e6a62] leading-relaxed mb-6 max-w-[560px]">
          Every interactive component needs clearly defined states. Button states include:
        </p>
        <ul className="space-y-3 mb-8">
          {[
            { state: "Default", desc: "Resting appearance" },
            { state: "Hover", desc: "Mouse-over feedback" },
            { state: "Pressed", desc: "Active/click state" },
            { state: "Focused", desc: "Keyboard navigation indicator" },
            { state: "Disabled", desc: "Non-interactive state" },
          ].map((item) => (
            <li key={item.state} className="font-mono text-[0.8rem] font-light text-[#6e6a62]">
              <span className="text-[#1c1916]">{item.state}:</span> {item.desc}
            </li>
          ))}
        </ul>
        <CaseImage
          src="https://framerusercontent.com/images/r4Za8xsK0bFtpSVTpQO2NgmWwI.png"
          alt="Button States"
        />
      </section>

      {/* ── BEHAVIOR ── */}
      <section
        className="border-b border-[#e5e0d7]"
        style={{ animation: "fadeUp .5s .3s ease both" }}
      >
        <div className="px-12 pt-16 max-[860px]:px-7 max-[860px]:pt-12">
          <SectionLabel>Behavior</SectionLabel>
        </div>

        {[
          {
            title: "Size Behavior",
            text: "Documents how button dimensions respond to content and container changes.",
            image: "https://framerusercontent.com/images/H7sE7ahxIfBYxaAYerf4yFaCVA.png",
            alt: "Size Behavior",
          },
          {
            title: "Type Behavior",
            text: "Explains how different button types should be combined and when to use each.",
            image: "https://framerusercontent.com/images/qWa9MXlsFLebk7VvC7xZ3D5amas.png",
            alt: "Type Behavior",
          },
        ].map((item, i, arr) => (
          <div
            key={item.title}
            className={`px-12 pb-14 max-[860px]:px-7 max-[860px]:pb-10 ${i < arr.length - 1 ? "border-b border-[#e5e0d7]" : "pb-20 max-[860px]:pb-14"}`}
          >
            <h3 className="font-grotesk font-normal text-[1.15rem] text-[#1c1916] mb-3 pt-10 max-[860px]:pt-8">{item.title}</h3>
            <p className="font-mono text-[0.8rem] font-light text-[#6e6a62] leading-relaxed max-w-[640px]">{item.text}</p>
            <CaseImage src={item.image} alt={item.alt} />
          </div>
        ))}
      </section>

      {/* ── BEST PRACTICES ── */}
      <section
        className="px-12 pt-16 pb-20 border-b border-[#e5e0d7] max-[860px]:px-7 max-[860px]:pt-12 max-[860px]:pb-14"
        style={{ animation: "fadeUp .5s .32s ease both" }}
      >
        <SectionLabel>Best Practices</SectionLabel>
        <p className="font-mono text-[0.8rem] font-light text-[#6e6a62] leading-relaxed mb-6 max-w-[560px]">
          General guidelines for using buttons effectively in interfaces.
        </p>
        <CaseImage
          src="https://framerusercontent.com/images/Wur7C3ZEmH2kY0O2KVqRQp12Eo.png"
          alt="Best Practices"
        />
      </section>

      {/* ── DO AND DON'T ── */}
      <section
        className="border-b border-[#e5e0d7]"
        style={{ animation: "fadeUp .5s .34s ease both" }}
      >
        <div className="px-12 pt-16 max-[860px]:px-7 max-[860px]:pt-12">
          <SectionLabel>Do and Don't</SectionLabel>
        </div>

        {[
          { title: "Visual Hierarchy", text: "Ensure proper emphasis levels when multiple buttons appear together.", image: "https://framerusercontent.com/images/gJMaZjX82pXDmx4lizqDnrH934.png", alt: "Visual Hierarchy" },
          { title: "Label Length & Proportion", text: "Keep labels concise and maintain balanced proportions.", image: "https://framerusercontent.com/images/owiPveP0xO3uqkF9KIib3sHRCUs.png", alt: "Label Length" },
          { title: "Line Breaks", text: "Avoid multi-line button labels for better readability.", image: "https://framerusercontent.com/images/20AeuIGMgNGCiTuWYlmzF5pfPC0.png", alt: "Line Breaks" },
          { title: "Icon Usage", text: "Use icons purposefully to enhance meaning, not for decoration.", image: "https://framerusercontent.com/images/N5FLJ1kSWJYwokjeU0BoBduroU.png", alt: "Icon Usage" },
        ].map((item, i, arr) => (
          <div
            key={item.title}
            className={`px-12 pb-14 max-[860px]:px-7 max-[860px]:pb-10 ${i < arr.length - 1 ? "border-b border-[#e5e0d7]" : "pb-20 max-[860px]:pb-14"}`}
          >
            <h3 className="font-grotesk font-normal text-[1.15rem] text-[#1c1916] mb-3 pt-10 max-[860px]:pt-8">{item.title}</h3>
            <p className="font-mono text-[0.8rem] font-light text-[#6e6a62] leading-relaxed max-w-[640px]">{item.text}</p>
            <CaseImage src={item.image} alt={item.alt} />
          </div>
        ))}
      </section>

      {/* ── RESPONSIVE ── */}
      <section
        className="px-12 pt-16 pb-20 border-b border-[#e5e0d7] max-[860px]:px-7 max-[860px]:pt-12 max-[860px]:pb-14"
        style={{ animation: "fadeUp .5s .36s ease both" }}
      >
        <SectionLabel>Responsive Guidelines</SectionLabel>
        <p className="font-mono text-[0.8rem] font-light text-[#6e6a62] leading-relaxed mb-6 max-w-[560px]">
          Buttons adapt to different screen sizes with these considerations:
        </p>
        <ul className="space-y-3 mb-8">
          {[
            { label: "Layout & Size", desc: "Adjust button size and spacing for touch targets on mobile." },
            { label: "Full-width Buttons", desc: "Use sparingly and only when appropriate for the context." },
            { label: "Text Wrapping", desc: "Prevent label overflow by keeping text short." },
          ].map((item) => (
            <li key={item.label} className="font-mono text-[0.8rem] font-light text-[#6e6a62]">
              <span className="text-[#1c1916]">{item.label}:</span> {item.desc}
            </li>
          ))}
        </ul>
        <CaseImage
          src="https://framerusercontent.com/images/XGB5UCZT4BjsFBrMg4IubptM.png"
          alt="Responsive Guidelines"
        />
      </section>

      {/* ── CHANGELOG ── */}
      <section
        className="px-12 pt-16 pb-20 border-b border-[#e5e0d7] max-[860px]:px-7 max-[860px]:pt-12 max-[860px]:pb-14"
        style={{ animation: "fadeUp .5s .38s ease both" }}
      >
        <SectionLabel>Changelog</SectionLabel>
        <p className="font-mono text-[0.8rem] font-light text-[#6e6a62] leading-relaxed max-w-[560px]">
          Every component includes a changelog tracking version history, breaking changes, new features, and bug fixes. This helps teams stay updated and plan migrations.
        </p>
      </section>

      {/* ── NAVIGATION ── */}
      <div className="px-12 py-12 flex justify-between items-center max-[860px]:px-7 max-[860px]:py-10">
        <Link
          to="/case-studies/design-system"
          className="font-mono text-[0.65rem] tracking-[0.06em] text-[#b0aba3] hover:text-[#1c1916] transition-colors no-underline uppercase"
        >
          ← Design System
        </Link>
        <Link
          to="/case-studies/token-airtable"
          className="inline-flex items-center gap-1.5 font-mono text-[0.65rem] tracking-[0.06em] text-[#1c1916] hover:text-[#c8622e] transition-colors no-underline uppercase"
        >
          Token Airtable
          <ArrowUpRight className="w-3 h-3" />
        </Link>
      </div>

    </div>
  );
};

export default ComponentDocsCaseStudy;
