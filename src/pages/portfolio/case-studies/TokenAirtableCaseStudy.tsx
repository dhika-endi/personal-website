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

function CaseImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="mt-6 border border-[#e8e8e8]">
      <img src={src} alt={alt} className="w-full block" />
    </div>
  );
}

const TokenAirtableCaseStudy = () => {
  return (
    <div className="w-full max-w-[1440px] mx-auto pb-28 max-[860px]:pb-16">

      {/* ── BACK NAV + TITLE ── */}
      <section
        className="px-12 pt-12 pb-16 border-b border-[#e8e8e8] max-[860px]:px-7 max-[860px]:pt-10"
        style={{ animation: "fadeUp .5s ease both" }}
      >
        <Link
          to="/case-studies"
          className="inline-flex items-center gap-1 font-mono text-[0.65rem] tracking-[0.06em] text-[#b0aba3] hover:text-[#1c1916] transition-colors no-underline mb-12 uppercase"
        >
          ← Case Studies
        </Link>

        <p className="font-mono text-[0.6rem] font-light text-[#b0aba3] tracking-[0.12em] uppercase mb-3">
          003 · 2025
        </p>
        <h1 className="font-grotesk font-normal text-[3rem] leading-[1.05] tracking-[-0.025em] text-[#1c1916] max-w-[700px] max-[860px]:text-[2.2rem]">
          Airtable Ultimate Token Dictionary.
        </h1>
      </section>

      {/* ── HERO IMAGE ── */}
      <div className="border-b border-[#e8e8e8]" style={{ animation: "fadeUp .5s .1s ease both" }}>
        <img
          src="https://framerusercontent.com/images/nPyd0r1sjpLCg0BC8enlmKujdE.png"
          alt="Token Airtable Hero"
          className="w-full block"
        />
      </div>

      {/* ── INTRODUCTION ── */}
      <section
        className="px-12 pt-16 pb-20 border-b border-[#e8e8e8] max-[860px]:px-7 max-[860px]:pt-12 max-[860px]:pb-14"
        style={{ animation: "fadeUp .5s .15s ease both" }}
      >
        <p className="font-grotesk text-[1.15rem] leading-[1.8] text-[#6e6a62] max-w-[680px]">
          A single source of truth for every design token—names, values, and usage guidelines—managed in Airtable. This system eliminates ad-hoc naming, enforces consistent conventions, and streamlines the handoff between design and development.
        </p>
      </section>

      {/* ── PROBLEM / SOLUTION / IMPACT ── */}
      <section
        className="border-b border-[#e8e8e8]"
        style={{ animation: "fadeUp .5s .2s ease both" }}
      >
        <div className="grid grid-cols-3 max-[640px]:grid-cols-1">
          {[
            {
              label: "Problem",
              content: (
                <p className="font-mono text-[0.85rem] font-light text-[#6e6a62] leading-relaxed">
                  Ad-hoc token names created confusion. Teams used inconsistent naming patterns, making it hard to find, reuse, or update tokens.
                </p>
              ),
            },
            {
              label: "Solution",
              content: (
                <ul className="space-y-2">
                  {["Centralized token database in Airtable", "Formula-driven naming conventions"].map((item) => (
                    <li key={item} className="flex gap-2.5">
                      <span className="font-mono text-[0.6rem] text-[#c8622e] mt-1 flex-shrink-0">—</span>
                      <span className="font-mono text-[0.85rem] font-light text-[#6e6a62] leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              ),
            },
            {
              label: "Impact",
              content: (
                <ul className="space-y-2">
                  {["80% reduction in naming conflicts", "75% faster token lookup", "50% faster onboarding"].map((item) => (
                    <li key={item} className="flex gap-2.5">
                      <span className="font-mono text-[0.6rem] text-[#c8622e] mt-1 flex-shrink-0">—</span>
                      <span className="font-mono text-[0.85rem] font-light text-[#6e6a62] leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              ),
            },
          ].map((col, i, arr) => (
            <div
              key={col.label}
              className={`px-12 py-12 max-[860px]:px-7 max-[860px]:py-10 ${i < arr.length - 1 ? "border-r border-[#e8e8e8] max-[640px]:border-r-0 max-[640px]:border-b" : ""}`}
            >
              <h3 className="font-grotesk font-normal text-[1.05rem] text-[#1c1916] mb-4">{col.label}</h3>
              {col.content}
            </div>
          ))}
        </div>
      </section>

      {/* ── SUCCESS CRITERIA ── */}
      <section
        className="px-12 pt-16 pb-20 border-b border-[#e8e8e8] max-[860px]:px-7 max-[860px]:pt-12 max-[860px]:pb-14"
        style={{ animation: "fadeUp .5s .22s ease both" }}
      >
        <SectionLabel>Success Criteria</SectionLabel>
        <ul className="space-y-5">
          {[
            { label: "Single Source of Truth", text: "Every token lives in one place with clear ownership." },
            { label: "Clear Naming Pattern", text: "Predictable, self-documenting token names." },
            { label: "Governance Workflow", text: "Approval process for new tokens." },
            { label: "Fast Retrieval", text: "Search and filter by category, component, or property." },
            { label: "Future-Proof", text: "Scalable structure for new tokens and categories." },
          ].map((item) => (
            <li key={item.label} className="flex gap-3">
              <span className="font-mono text-[0.6rem] text-[#c8622e] mt-1 flex-shrink-0">—</span>
              <span className="font-mono text-[0.85rem] font-light text-[#6e6a62] leading-relaxed">
                <span className="text-[#1c1916]">{item.label}:</span> {item.text}
              </span>
            </li>
          ))}
        </ul>
      </section>

      {/* ── TOKEN CATEGORIES ── */}
      <section
        className="px-12 pt-16 pb-20 border-b border-[#e8e8e8] max-[860px]:px-7 max-[860px]:pt-12 max-[860px]:pb-14"
        style={{ animation: "fadeUp .5s .24s ease both" }}
      >
        <SectionLabel>Token Categories</SectionLabel>
        <div className="flex flex-wrap gap-2">
          {["Color", "Font", "Space", "Size", "Border", "Border Radius", "Gradient", "Shadow", "Motion", "Time", "Icon"].map((cat) => (
            <span
              key={cat}
              className="font-mono text-[0.68rem] font-light text-[#6e6a62] border border-[#e8e8e8] px-3 py-1.5"
            >
              {cat}
            </span>
          ))}
        </div>
      </section>

      {/* ── TOKEN TAXONOMY ── */}
      <section
        className="border-b border-[#e8e8e8]"
        style={{ animation: "fadeUp .5s .26s ease both" }}
      >
        <div className="px-12 pt-16 max-[860px]:px-7 max-[860px]:pt-12">
          <SectionLabel>Token Taxonomy</SectionLabel>
        </div>

        {/* Naming Pattern */}
        <div className="px-12 pb-14 border-b border-[#e8e8e8] max-[860px]:px-7 max-[860px]:pb-10">
          <h3 className="font-grotesk font-normal text-[1.15rem] text-[#1c1916] mb-4 pt-10 max-[860px]:pt-8">
            Naming Pattern
          </h3>
          <code className="block font-mono text-[0.8rem] text-[#c8622e] bg-[#f0ece4] border border-[#e8e8e8] px-5 py-4 mb-6 overflow-x-auto">
            component-variant-type-element-property-state-direction
          </code>
          <CaseImage
            src="https://framerusercontent.com/images/Belu1ej5U57rBHmlt7gbjw8duM.png"
            alt="Token Taxonomy"
          />
        </div>

        {/* Level Breakdown */}
        <div className="px-12 pb-14 border-b border-[#e8e8e8] max-[860px]:px-7 max-[860px]:pb-10">
          <h3 className="font-grotesk font-normal text-[1.15rem] text-[#1c1916] mb-4 pt-10 max-[860px]:pt-8">
            Level Breakdown
          </h3>
          <ol className="space-y-3">
            {[
              { level: "Level 1 – Component", desc: "What component uses this token (button, input, card)" },
              { level: "Level 2 – Variant", desc: "Which variant (primary, secondary, ghost)" },
              { level: "Level 3 – Type", desc: "Token type (color, space, size)" },
              { level: "Level 4 – Element", desc: "Which part (label, icon, container)" },
              { level: "Level 5 – Property", desc: "CSS property (background, border, padding)" },
              { level: "Level 6 – State", desc: "Interaction state (default, hover, pressed)" },
              { level: "Level 7 – Direction", desc: "Directional modifier (top, left, x, y)" },
            ].map((item) => (
              <li key={item.level} className="font-mono text-[0.85rem] font-light text-[#6e6a62]">
                <span className="text-[#1c1916]">{item.level}:</span> {item.desc}
              </li>
            ))}
          </ol>
        </div>

        {/* Spacing Token Example */}
        <div className="px-12 pb-14 border-b border-[#e8e8e8] max-[860px]:px-7 max-[860px]:pb-10">
          <h3 className="font-grotesk font-normal text-[1.15rem] text-[#1c1916] mb-3 pt-10 max-[860px]:pt-8">
            Spacing Token Example
          </h3>
          <CaseImage
            src="https://framerusercontent.com/images/ocOZWU0DP1bAriHLhmNFK6q0.png"
            alt="Spacing Token Example"
          />
        </div>

        {/* Color Token Example */}
        <div className="px-12 pb-14 border-b border-[#e8e8e8] max-[860px]:px-7 max-[860px]:pb-10">
          <h3 className="font-grotesk font-normal text-[1.15rem] text-[#1c1916] mb-3 pt-10 max-[860px]:pt-8">
            Color Token Example
          </h3>
          <CaseImage
            src="https://framerusercontent.com/images/9KVWf2JLVaY1Vz8lOgvpuvY1c60.png"
            alt="Color Token Example"
          />
        </div>

        {/* Why it works */}
        <div className="px-12 pb-20 max-[860px]:px-7 max-[860px]:pb-14">
          <div className="mt-10 border-l-2 border-[#c8622e] pl-6">
            <h3 className="font-grotesk font-normal text-[1.05rem] text-[#1c1916] mb-3">Why It Works</h3>
            <p className="font-mono text-[0.85rem] font-light text-[#6e6a62] leading-relaxed max-w-[600px]">
              This hierarchical naming convention makes tokens self-documenting. Anyone can read a token name like{" "}
              <code className="font-mono text-[0.75rem] text-[#c8622e] bg-[#f0ece4] px-1.5 py-0.5">
                button-primary-color-label-text-hover
              </code>{" "}
              and immediately understand its purpose without looking up documentation.
            </p>
          </div>
        </div>
      </section>

      {/* ── AIRTABLE SCHEMA ── */}
      <section
        className="border-b border-[#e8e8e8]"
        style={{ animation: "fadeUp .5s .28s ease both" }}
      >
        <div className="px-12 pt-16 max-[860px]:px-7 max-[860px]:pt-12">
          <SectionLabel>Airtable Schema</SectionLabel>
        </div>

        {[
          {
            title: "Core Table",
            text: "The foundation table containing primitive values—raw colors, spacing units, and font specs.",
            image: "https://framerusercontent.com/images/vieb47GfUBUYpDgMLlQptv9eZc.png",
            alt: "Core Table",
          },
          {
            title: "Components Table",
            text: "Lists every component that consumes tokens, enabling cross-referencing and impact analysis.",
            image: "https://framerusercontent.com/images/pCcoI4JgfSW0MJkoGoBczGsK4hk.png",
            alt: "Components Table",
          },
          {
            title: "List of Tokens Table",
            text: "The master token registry with formula-generated names, linked primitives, and usage context.",
            image: "https://framerusercontent.com/images/QuBwnlcfyEKJtINDagm7BNlAkXc.png",
            alt: "List of Tokens",
          },
        ].map((item, i, arr) => (
          <div
            key={item.title}
            className={`px-12 pb-14 max-[860px]:px-7 max-[860px]:pb-10 ${i < arr.length - 1 ? "border-b border-[#e8e8e8]" : "pb-20 max-[860px]:pb-14"}`}
          >
            <h3 className="font-grotesk font-normal text-[1.15rem] text-[#1c1916] mb-3 pt-10 max-[860px]:pt-8">{item.title}</h3>
            <p className="font-mono text-[0.85rem] font-light text-[#6e6a62] leading-relaxed max-w-[640px]">{item.text}</p>
            <CaseImage src={item.image} alt={item.alt} />
          </div>
        ))}
      </section>

      {/* ── FORMULA MAGIC ── */}
      <section
        className="border-b border-[#e8e8e8]"
        style={{ animation: "fadeUp .5s .3s ease both" }}
      >
        <div className="px-12 pt-16 max-[860px]:px-7 max-[860px]:pt-12">
          <SectionLabel>Airtable Formula Magic</SectionLabel>
        </div>

        {/* Self-building formula */}
        <div className="px-12 pb-14 border-b border-[#e8e8e8] max-[860px]:px-7 max-[860px]:pb-10">
          <h3 className="font-grotesk font-normal text-[1.15rem] text-[#1c1916] mb-3 pt-10 max-[860px]:pt-8">
            Self-Building Name Formula
          </h3>
          <p className="font-mono text-[0.85rem] font-light text-[#6e6a62] leading-relaxed mb-5 max-w-[560px]">
            Token names are generated automatically using CONCATENATE formulas that pull from linked fields:
          </p>
          <pre className="font-mono text-[0.75rem] text-[#c8622e] bg-[#f0ece4] border border-[#e8e8e8] px-5 py-4 overflow-x-auto leading-relaxed mb-4">
{`CONCATENATE(
  {Component}, "-",
  {Variant},   "-",
  {Type},      "-",
  {Element},   "-",
  {Property},  "-",
  {State}
)`}
          </pre>
          <CaseImage
            src="https://framerusercontent.com/images/pyTZywrvpdVUJFB5qfxTLGM60.png"
            alt="Formula"
          />
        </div>

        {/* Component Field Links */}
        <div className="px-12 pb-14 border-b border-[#e8e8e8] max-[860px]:px-7 max-[860px]:pb-10">
          <h3 className="font-grotesk font-normal text-[1.15rem] text-[#1c1916] mb-3 pt-10 max-[860px]:pt-8">
            Component Field Links
          </h3>
          <p className="font-mono text-[0.85rem] font-light text-[#6e6a62] leading-relaxed max-w-[640px]">
            Linked records connect tokens to their parent components, enabling dependency tracking.
          </p>
          <CaseImage
            src="https://framerusercontent.com/images/TMyFjlvD124m6yFfApgm7caw.png"
            alt="Component Field"
          />
        </div>

        {/* Primitive Field Links */}
        <div className="px-12 pb-20 max-[860px]:px-7 max-[860px]:pb-14">
          <h3 className="font-grotesk font-normal text-[1.15rem] text-[#1c1916] mb-3 pt-10 max-[860px]:pt-8">
            Primitive Field Links
          </h3>
          <p className="font-mono text-[0.85rem] font-light text-[#6e6a62] leading-relaxed max-w-[640px]">
            Semantic tokens link back to primitive values, creating a traceable hierarchy.
          </p>
          <CaseImage
            src="https://framerusercontent.com/images/PmxUSBW5z2kthjQwoak0iLPyCOg.png"
            alt="Primitive Field"
          />
        </div>
      </section>

      {/* ── LESSONS & NEXT STEPS ── */}
      <section
        className="px-12 pt-16 pb-20 border-b border-[#e8e8e8] max-[860px]:px-7 max-[860px]:pt-12 max-[860px]:pb-14"
        style={{ animation: "fadeUp .5s .32s ease both" }}
      >
        <SectionLabel>Lessons & Next Steps</SectionLabel>

        <div className="grid min-[640px]:grid-cols-2 gap-12">
          <div>
            <h3 className="font-grotesk font-normal text-[1.05rem] text-[#1c1916] mb-4">Key Takeaways</h3>
            <ul className="space-y-3">
              {[
                "Naming conventions prevent chaos at scale",
                "Formulas reduce human error",
                "Linked tables enable powerful queries",
                "Documentation embedded in the system itself",
              ].map((item) => (
                <li key={item} className="flex gap-2.5">
                  <span className="font-mono text-[0.6rem] text-[#c8622e] mt-1 flex-shrink-0">—</span>
                  <span className="font-mono text-[0.85rem] font-light text-[#6e6a62] leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-grotesk font-normal text-[1.05rem] text-[#1c1916] mb-4">What's Next</h3>
            <ul className="space-y-3">
              {[
                "Automated sync to Figma variables",
                "Export scripts for CSS/JSON tokens",
                "Version history and rollback support",
              ].map((item) => (
                <li key={item} className="flex gap-2.5">
                  <span className="font-mono text-[0.6rem] text-[#c8622e] mt-1 flex-shrink-0">—</span>
                  <span className="font-mono text-[0.85rem] font-light text-[#6e6a62] leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── NAVIGATION ── */}
      <div className="px-12 py-12 flex justify-between items-center max-[860px]:px-7 max-[860px]:py-10">
        <Link
          to="/case-studies/component-docs"
          className="font-mono text-[0.65rem] tracking-[0.06em] text-[#b0aba3] hover:text-[#1c1916] transition-colors no-underline uppercase"
        >
          ← Component Docs
        </Link>
        <Link
          to="/case-studies"
          className="inline-flex items-center gap-1.5 font-mono text-[0.65rem] tracking-[0.06em] text-[#1c1916] hover:text-[#c8622e] transition-colors no-underline uppercase"
        >
          All Case Studies
          <ArrowUpRight className="w-3 h-3" />
        </Link>
      </div>

    </div>
  );
};

export default TokenAirtableCaseStudy;
