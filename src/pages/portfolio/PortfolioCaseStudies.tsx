import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const caseStudies = [
  {
    title: "An End-to-End Design System",
    number: "001",
    image: "https://framerusercontent.com/images/wBhT6nI0uuP1WMsAQy26KTa6hQ.png?width=2678&height=1402",
    href: "/case-studies/design-system",
    description: "A complete design system built from the ground up — covering tokens, components, documentation, and governance — enabling a team of designers and developers to ship consistent UI at scale.",
    tags: ["Design Tokens", "Component Library", "Documentation", "Governance"],
    year: "2024",
    role: "Design System Lead",
  },
  {
    title: "Building Component Docs for Teams, Not Just Systems",
    number: "002",
    image: "https://framerusercontent.com/images/lb8MITml3e70gW6qyEIiNT6ucs.png?width=2678&height=1402",
    href: "/case-studies/component-docs",
    description: "Documentation strategy focused on real team workflows — not just technical specs. Making component knowledge accessible to designers, developers, and product stakeholders alike.",
    tags: ["Documentation", "Information Architecture", "UX Writing"],
    year: "2024",
    role: "Design System Designer",
  },
  {
    title: "Airtable Ultimate Token Dictionary",
    number: "003",
    image: "https://framerusercontent.com/images/jfmNbNsMiJdGR0bHJTtamz7Zj8.png?width=2678&height=1402",
    href: "/case-studies/token-airtable",
    description: "A single source of truth for design tokens, auto-generating consistent naming conventions across platforms and keeping design and code in perfect sync.",
    tags: ["Design Tokens", "Airtable", "Automation", "System Design"],
    year: "2023",
    role: "Design System Designer",
  },
];

const PortfolioCaseStudies = () => {
  return (
    <div className="w-full max-w-[1100px] mx-auto pb-28 max-[860px]:pb-16">

      {/* ── HEADER ── */}
      <section
        className="px-12 pt-16 pb-14 border-b border-[#d4d4d4] max-[860px]:px-7 max-[860px]:pt-12 max-[860px]:pb-10"
        style={{ animation: "fadeUp .5s ease both" }}
      >
        <div className="flex items-end justify-between">
          <div>
            <span className="font-mono text-[0.72rem] font-light text-[#b0aba3] tracking-[0.12em] uppercase block mb-4">
              Works
            </span>
            <h1 className="font-grotesk font-normal text-[3rem] leading-[1.05] tracking-[-0.025em] text-[#1c1916] max-[860px]:text-[2.2rem]">
              Case Studies.
            </h1>
          </div>
          <span className="font-mono text-[0.58rem] text-[#b0aba3] mb-1.5">
            3 works
          </span>
        </div>
      </section>

      {/* ── CASE STUDY CARDS ── */}
      <section
        className="px-12 pt-14 pb-20 max-[860px]:px-7 max-[860px]:pt-10 max-[860px]:pb-14"
        style={{ animation: "fadeUp .5s .1s ease both" }}
      >
        <div className="flex flex-col gap-20 max-[860px]:gap-14">
          {caseStudies.map((study, index) => (
            <Link
              key={study.number}
              to={study.href}
              className="group block no-underline"
              style={{ animationDelay: `${0.1 + index * 0.08}s` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden mb-7">
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full aspect-[2.2/1] object-cover block transition-transform duration-500 group-hover:scale-[1.02]"
                />
                {/* Orange overlay on hover */}
                <div className="absolute inset-0 bg-[#c8622e] opacity-0 group-hover:opacity-[0.06] transition-opacity duration-300" />
                {/* View arrow badge */}
                <div className="absolute bottom-4 right-4 flex items-center gap-1.5 bg-[#1c1916] text-[#fafafa] font-mono text-[0.6rem] tracking-[0.08em] px-3 py-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0">
                  View case study
                  <ArrowUpRight className="w-3 h-3" />
                </div>
              </div>

              {/* Meta row */}
              <div className="flex items-start justify-between gap-6 mb-4">
                <div className="flex items-baseline gap-4">
                  <span className="font-mono text-[0.58rem] text-[#b0aba3] tracking-[0.08em] flex-shrink-0 mt-0.5">
                    {study.number}
                  </span>
                  <h2 className="font-grotesk font-normal text-[1.4rem] leading-snug text-[#1c1916] group-hover:text-[#c8622e] transition-colors duration-200 max-[860px]:text-[1.2rem]">
                    {study.title}
                  </h2>
                </div>
                <div className="flex-shrink-0 text-right">
                  <span className="font-mono text-[0.58rem] text-[#b0aba3] block">{study.year}</span>
                </div>
              </div>

              {/* Description */}
              <p className="font-mono text-[0.85rem] font-light text-[#6e6a62] leading-relaxed max-w-[600px] mb-5">
                {study.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5">
                {study.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[0.58rem] tracking-[0.06em] text-[#b0aba3] border border-[#e8e8e8] px-2.5 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>

    </div>
  );
};

export default PortfolioCaseStudies;
