import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-4 mb-4">
      <span className="font-mono text-[0.72rem] font-light text-[#b0aba3] tracking-[0.12em] uppercase whitespace-nowrap">
        {children}
      </span>
      <div className="flex-1 h-px bg-[#e8e8e8]" />
    </div>
  );
}

function CaseImage({ src, alt, caption }: { src: string; alt: string; caption?: string }) {
  return (
    <div className="mt-6">
      <div className="border border-[#e8e8e8]">
        <img src={src} alt={alt} className="w-full block" />
      </div>
      {caption && (
        <p className="font-mono text-[0.58rem] text-[#b0aba3] mt-2 tracking-[0.04em]">{caption}</p>
      )}
    </div>
  );
}

const DesignSystemCaseStudy = () => {
  return (
    <div className="w-full max-w-[1100px] mx-auto pb-28 max-[860px]:pb-16">

      {/* ── HEADER ── */}
      <section
        className="border-b border-[#d4d4d4]"
        style={{ animation: "fadeUp .5s ease both" }}
      >
        {/* Back nav */}
        <div className="px-12 pt-10 pb-0 max-[860px]:px-7">
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-1 font-mono text-[0.62rem] tracking-[0.06em] text-[#b0aba3] hover:text-[#1c1916] transition-colors no-underline uppercase"
          >
            ← Case Studies
          </Link>
        </div>

        {/* Title block */}
        <div className="px-12 pt-10 pb-14 max-[860px]:px-7 max-[860px]:pt-8 max-[860px]:pb-10">
          <p className="font-mono text-[0.6rem] font-light text-[#b0aba3] tracking-[0.12em] uppercase mb-4">
            001 · Design Systems
          </p>
          <h1 className="font-grotesk font-normal text-[3.2rem] leading-[1.04] tracking-[-0.025em] text-[#1c1916] max-w-[720px] max-[860px]:text-[2.2rem]">
            An End-to-End<br />Design System.
          </h1>
        </div>

        {/* Meta bar */}
        <div className="grid grid-cols-3 border-t border-[#e8e8e8] max-[640px]:grid-cols-2">
          {[
            { label: "Year",     value: "2024" },
            { label: "Company",  value: "IxDF" },
            { label: "Stack",    value: "Figma · Airtable · Storybook" },
          ].map((item, i) => (
            <div
              key={item.label}
              className={`px-12 py-6 max-[860px]:px-7 ${i < 2 ? "border-r border-[#e8e8e8]" : ""} ${i === 0 ? "max-[640px]:border-b border-[#e8e8e8]" : ""}`}
            >
              <p className="font-mono text-[0.52rem] tracking-[0.1em] text-[#b0aba3] uppercase mb-1.5">{item.label}</p>
              <p className="font-mono text-[0.72rem] text-[#1c1916]">{item.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── HERO IMAGE ── */}
      <div className="border-b border-[#e8e8e8]" style={{ animation: "fadeUp .5s .08s ease both" }}>
        <img
          src="https://framerusercontent.com/images/lIy9bJPJ3Jlr2IQfLKQxUSgdKO4.png"
          alt="Design System Hero"
          className="w-full block"
        />
      </div>

      {/* ── OVERVIEW ── */}
      <section
        className="border-b border-[#d4d4d4]"
        style={{ animation: "fadeUp .5s .12s ease both" }}
      >
        <div className="grid min-[860px]:grid-cols-[2fr_1fr]">
          <div className="px-12 py-16 border-r border-[#e8e8e8] max-[860px]:border-r-0 max-[860px]:border-b max-[860px]:px-7 max-[860px]:py-12">
            <SectionLabel>Overview</SectionLabel>
            <p className="font-grotesk text-[1.15rem] leading-[1.8] text-[#6e6a62] max-w-[560px]">
              A token-based design system built to scale across products, teams, and platforms. Using Figma variables as its backbone — with a clear layer of primitives, semantics, and component-level tokens — it enables consistent theming, responsive design, and efficient handoff between design and development.
            </p>
          </div>
          <div className="px-12 py-16 max-[860px]:px-7 max-[860px]:py-10">
            <SectionLabel>Tags</SectionLabel>
            <div className="flex flex-wrap gap-2">
              {["Design Tokens", "Component Library", "Figma Variables", "Airtable", "Documentation", "Governance", "Accessibility"].map((tag) => (
                <span key={tag} className="font-mono text-[0.58rem] tracking-[0.06em] text-[#b0aba3] border border-[#e8e8e8] px-2.5 py-1">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PROBLEM + SOLUTION ── */}
      <section
        className="border-b border-[#d4d4d4]"
        style={{ animation: "fadeUp .5s .16s ease both" }}
      >
        <div className="grid min-[640px]:grid-cols-2">
          <div className="px-12 pt-16 pb-16 border-r border-[#e8e8e8] max-[640px]:border-r-0 max-[640px]:border-b max-[860px]:px-7 max-[860px]:pt-12 max-[860px]:pb-12">
            <SectionLabel>Problem</SectionLabel>
            <ul className="space-y-5 mt-2">
              {[
                { label: "Slow delivery",      text: "Designers and engineers repeatedly rebuilt the same components from scratch." },
                { label: "Inconsistent UI",    text: "Without shared foundations, visual language drifted between features and teams." },
                { label: "Manual maintenance", text: "Style updates required touching multiple files, risking errors and regressions." },
                { label: "Knowledge gaps",     text: "No single source of truth for usage guidelines, accessibility rules, or naming conventions." },
              ].map((item) => (
                <li key={item.label} className="flex gap-3">
                  <span className="font-mono text-[0.6rem] text-[#c8622e] mt-1 flex-shrink-0">—</span>
                  <span className="font-mono text-[0.85rem] font-light text-[#6e6a62] leading-relaxed">
                    <span className="text-[#1c1916]">{item.label}: </span>{item.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="px-12 pt-16 pb-16 max-[860px]:px-7 max-[860px]:pt-12 max-[860px]:pb-12">
            <SectionLabel>Solution</SectionLabel>
            <ul className="space-y-5 mt-2">
              {[
                { label: "Token foundation",              text: "Define primitives (raw values) and semantics (contextual meanings) to drive every UI decision." },
                { label: "Variable-driven responsiveness", text: "Bind spacing, sizing, and typography to breakpoints so components adapt automatically." },
                { label: "Library split",                 text: "Separate universal components from product-specific patterns for tailored workflows." },
                { label: "Governance & docs",             text: "Centralize naming rules in Airtable and publish interactive documentation for every component." },
              ].map((item) => (
                <li key={item.label} className="flex gap-3">
                  <span className="font-mono text-[0.6rem] text-[#c8622e] mt-1 flex-shrink-0">—</span>
                  <span className="font-mono text-[0.85rem] font-light text-[#6e6a62] leading-relaxed">
                    <span className="text-[#1c1916]">{item.label}: </span>{item.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── CHALLENGES ── */}
      <section
        className="px-12 pt-16 pb-16 border-b border-[#d4d4d4] max-[860px]:px-7 max-[860px]:pt-12 max-[860px]:pb-12"
        style={{ animation: "fadeUp .5s .2s ease both" }}
      >
        <SectionLabel>Challenges</SectionLabel>
        <div className="grid min-[640px]:grid-cols-3 gap-10 mt-4">
          {[
            {
              number: "01",
              title: "Fragmented Token Usage",
              text: "Multiple teams had created ad-hoc color and spacing values. Consolidating them into a single primitive set required auditing every existing component and negotiating trade-offs.",
            },
            {
              number: "02",
              title: "Responsive Overhead",
              text: "Binding tokens to breakpoints added complexity. We invested in clear documentation and helper utilities so designers and engineers could apply responsive tokens without guesswork.",
            },
            {
              number: "03",
              title: "Limited Discoverability",
              text: "Early versions lacked search and examples. We iterated on the docs site, adding live previews, anatomy diagrams, and do/don't guidance to make the system approachable.",
            },
          ].map((c) => (
            <div key={c.number}>
              <span className="font-mono text-[0.52rem] text-[#c8622e] tracking-[0.1em] block mb-3">{c.number}</span>
              <h3 className="font-grotesk font-normal text-[1.05rem] text-[#1c1916] mb-2 leading-snug">{c.title}</h3>
              <p className="font-mono text-[0.85rem] font-light text-[#6e6a62] leading-relaxed">{c.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── FOUNDATION ── */}
      <section
        className="border-b border-[#d4d4d4]"
        style={{ animation: "fadeUp .5s .22s ease both" }}
      >
        <div className="px-12 pt-16 max-[860px]:px-7 max-[860px]:pt-12">
          <SectionLabel>Foundation</SectionLabel>
        </div>

        {[
          {
            title: "Typography Scale",
            text: "A modular type scale anchored to a base size, with responsive adjustments at each breakpoint. Semantic tokens like text-heading-lg or text-body-md map to specific font-size, line-height, and letter-spacing combinations.",
            image: "https://framerusercontent.com/images/QLEfQYFwX9Zdc4oJzpvjJ8N2iKw.png",
            alt: "Typography Scale",
          },
          {
            title: "Color Scale",
            text: "Primitives define raw hues and shades (e.g., blue-500). Semantic tokens assign meaning (e.g., color-action-primary). This two-layer approach makes global theme changes trivial and ensures accessible contrast ratios.",
            image: "https://framerusercontent.com/images/hSSXNzQOOPQzKsY8ppEyvxXKLew.png",
            alt: "Color Scale",
          },
          {
            title: "Spacing & Sizing",
            text: "An 8-px base grid drives all spacing and sizing tokens. Responsive variants (e.g., space-md = 16 px on mobile, 24 px on desktop) ensure layouts stay proportional across devices.",
            image: "https://framerusercontent.com/images/8Mj7VoBOpD14rfkejIoksrlBQ.png",
            alt: "Spacing & Sizing",
          },
          {
            title: "Border Radius, Shadow & Opacity",
            text: "Tokens for corner rounding (radius-sm, radius-lg), elevation (shadow-100, shadow-200), and transparency (opacity-disabled) keep visual effects consistent and easy to update.",
            image: "https://framerusercontent.com/images/DN78wO4eb7Dus84nLDv9TsCO7c.png",
            alt: "Border Radius, Shadow & Opacity",
          },
          {
            title: "Breakpoints",
            text: "Four breakpoints — desktop, laptop, tablet, mobile — control responsive token values. Components reference these breakpoints to switch spacing, sizing, and typography automatically.",
            image: "https://framerusercontent.com/images/kcXIOn3ZDlwagvkO4pvGOxtW8g.png",
            alt: "Breakpoints",
          },
        ].map((item, i, arr) => (
          <div
            key={item.title}
            className={`px-12 pt-10 pb-14 max-[860px]:px-7 max-[860px]:pb-10 ${i < arr.length - 1 ? "border-b border-[#e8e8e8]" : ""}`}
          >
            <h3 className="font-grotesk font-normal text-[1.1rem] text-[#1c1916] mb-3">{item.title}</h3>
            <p className="font-mono text-[0.85rem] font-light text-[#6e6a62] leading-relaxed max-w-[640px]">{item.text}</p>
            <CaseImage src={item.image} alt={item.alt} />
          </div>
        ))}
      </section>

      {/* ── COMPONENTS & PATTERNS ── */}
      <section
        className="border-b border-[#d4d4d4]"
        style={{ animation: "fadeUp .5s .24s ease both" }}
      >
        <div className="px-12 pt-16 max-[860px]:px-7 max-[860px]:pt-12">
          <SectionLabel>Components & Patterns</SectionLabel>
        </div>
        <div className="grid min-[640px]:grid-cols-2 border-t border-[#e8e8e8] mt-6">
          <div className="px-12 py-10 border-r border-[#e8e8e8] max-[640px]:border-r-0 max-[640px]:border-b max-[860px]:px-7">
            <h3 className="font-grotesk font-normal text-[1.05rem] text-[#1c1916] mb-2">Universal Components</h3>
            <p className="font-mono text-[0.85rem] font-light text-[#6e6a62] leading-relaxed">
              Buttons, Inputs, Checkboxes, Radios, Selects, Toggles, and other primitives shared across all products and platforms.
            </p>
          </div>
          <div className="px-12 py-10 max-[860px]:px-7">
            <h3 className="font-grotesk font-normal text-[1.05rem] text-[#1c1916] mb-2">Specific Component Library</h3>
            <p className="font-mono text-[0.85rem] font-light text-[#6e6a62] leading-relaxed">
              Product-specific patterns like data tables, dashboards, and workflow wizards built on top of universal components.
            </p>
          </div>
        </div>
        <div className="px-12 pb-14 max-[860px]:px-7">
          <CaseImage
            src="https://framerusercontent.com/images/YUx8pixpMr27UZxw7uIE6ra6s.png"
            alt="Universal Components"
          />
        </div>
      </section>

      {/* ── TOKEN NAMING & AIRTABLE ── */}
      <section
        className="border-b border-[#d4d4d4]"
        style={{ animation: "fadeUp .5s .26s ease both" }}
      >
        <div className="px-12 pt-16 pb-10 max-[860px]:px-7 max-[860px]:pt-12">
          <SectionLabel>Token Naming & Airtable</SectionLabel>
          <ul className="space-y-4 mt-2">
            {[
              "Single source of truth for every token name, value, and description.",
              "Formula-driven naming ensures consistency (e.g., color-action-primary-default).",
              "Linked tables connect primitives to semantics to component-level tokens.",
              "Export scripts sync Airtable data to Figma variables and code.",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <span className="font-mono text-[0.6rem] text-[#c8622e] mt-1 flex-shrink-0">—</span>
                <span className="font-mono text-[0.85rem] font-light text-[#6e6a62] leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
          <Link
            to="/case-studies/token-airtable"
            className="inline-flex items-center gap-1.5 font-mono text-[0.68rem] text-[#c8622e] hover:underline no-underline mt-8 mb-2"
          >
            See the Airtable Token Dictionary case study
            <ArrowUpRight className="w-3 h-3" />
          </Link>
        </div>
        <div className="px-12 pb-14 max-[860px]:px-7">
          <CaseImage
            src="https://framerusercontent.com/images/GYcFRpbILBEs6yCJ7CriU2hoXeE.png"
            alt="Airtable Workflow"
          />
        </div>
      </section>

      {/* ── DOCUMENTATION ── */}
      <section
        className="border-b border-[#d4d4d4]"
        style={{ animation: "fadeUp .5s .28s ease both" }}
      >
        <div className="px-12 pt-16 pb-0 max-[860px]:px-7 max-[860px]:pt-12">
          <SectionLabel>Documentation</SectionLabel>
        </div>

        <div className="px-12 pt-8 pb-12 border-b border-[#e8e8e8] max-[860px]:px-7">
          <h3 className="font-grotesk font-normal text-[1.05rem] text-[#1c1916] mb-3">Overview & Variants</h3>
          <p className="font-mono text-[0.85rem] font-light text-[#6e6a62] leading-relaxed max-w-[640px]">
            Each component page opens with a summary of its purpose, followed by live examples of every variant. Designers and engineers can copy code snippets directly.
          </p>
          <CaseImage
            src="https://framerusercontent.com/images/OTtvCY51lAvqTnWXdIv6O6fWy8g.png"
            alt="Overview & Variants"
          />
        </div>

        <div className="px-12 pt-8 pb-12 max-[860px]:px-7">
          <h3 className="font-grotesk font-normal text-[1.05rem] text-[#1c1916] mb-3">Anatomy Breakdown</h3>
          <p className="font-mono text-[0.85rem] font-light text-[#6e6a62] leading-relaxed max-w-[640px]">
            Numbered diagrams highlight each part of a component (icon, label, container) so teams understand how to customize or extend it safely.
          </p>
          <CaseImage
            src="https://framerusercontent.com/images/awNYpPjdzb3AQvzeZihcxPwVUc.png"
            alt="Anatomy Breakdown"
          />
          <Link
            to="/case-studies/component-docs"
            className="inline-flex items-center gap-1.5 font-mono text-[0.68rem] text-[#c8622e] hover:underline no-underline mt-8"
          >
            See the Component Documentation case study
            <ArrowUpRight className="w-3 h-3" />
          </Link>
        </div>
      </section>

      {/* ── IMPACT & RESULTS ── */}
      <section
        className="border-b border-[#d4d4d4]"
        style={{ animation: "fadeUp .5s .3s ease both" }}
      >
        <div className="px-12 pt-16 pb-6 max-[860px]:px-7 max-[860px]:pt-12">
          <SectionLabel>Impact & Results</SectionLabel>
        </div>

        <div className="grid grid-cols-2 max-[480px]:grid-cols-1 border-t border-[#e8e8e8]">
          {[
            { metric: "40%",  label: "faster feature delivery by reusing existing components and tokens" },
            { metric: "0",    label: "visual drift across products after enforcing semantic tokens" },
            { metric: "50%",  label: "reduction in design QA cycles thanks to clear documentation" },
            { metric: "½",    label: "onboarding time for new team members with centralized guidelines" },
          ].map((item, i) => (
            <div
              key={i}
              className={`px-12 py-12 max-[860px]:px-7 max-[860px]:py-10 ${
                i % 2 === 0 ? "border-r border-[#e8e8e8] max-[480px]:border-r-0" : ""
              } ${i < 2 ? "border-b border-[#e8e8e8]" : ""}`}
            >
              <p className="font-grotesk font-normal text-[3.2rem] leading-none text-[#c8622e] mb-3">
                {item.metric}
              </p>
              <p className="font-mono text-[0.7rem] font-light text-[#6e6a62] leading-relaxed max-w-[200px]">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── NAVIGATION ── */}
      <div className="px-12 py-12 flex justify-between items-center max-[860px]:px-7 max-[860px]:py-10">
        <Link
          to="/case-studies"
          className="font-mono text-[0.62rem] tracking-[0.06em] text-[#b0aba3] hover:text-[#1c1916] transition-colors no-underline uppercase"
        >
          ← All Case Studies
        </Link>
        <Link
          to="/case-studies/component-docs"
          className="inline-flex items-center gap-1.5 font-mono text-[0.62rem] tracking-[0.06em] text-[#1c1916] hover:text-[#c8622e] transition-colors no-underline uppercase"
        >
          Component Docs
          <ArrowUpRight className="w-3 h-3" />
        </Link>
      </div>

    </div>
  );
};

export default DesignSystemCaseStudy;
