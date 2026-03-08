import { Link } from "react-router-dom";
import { ArrowUpRight, Star } from "lucide-react";
import samanthaAvatar from "@/assets/samantha-avatar.jpeg";
import DNAHelix from "@/components/portfolio/DNAHelix";
import TokenGraph, { LEFT_NODES, LEFT_EDGES, RIGHT_NODES, RIGHT_EDGES } from "@/components/portfolio/TokenGraph";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

const testimonials = [
  {
    quote: "Working with Dhika was amazing. He's extremely fast, responsive, and communicative. There were certain areas in the project where I wasn't sure what direction to take, and he used his best judgement based on the context to deliver a great final design system my team could use.",
    name: "Kristin Au",
    role: "Product designer",
    image: "https://framerusercontent.com/images/iukYqh3pHOTcauNh7JZDbSLe1Hc.jpeg?width=200&height=200",
  },
  {
    quote: "I hired Dhika to help me with creating digital products for my company back in October 2023 - namely, a mobile banking app and an Internet banking platform for small businesses. He joined my team as the lead UI designer, working with my in-house graphic designer and my IT team. He single-handedly built our design system from scratch, taught my team Figma basics, defined our visual / UI identity, and built out a full prototype of our mobile banking and internet banking products to hand over for development in August 2024. Dhika is reliable, detail-oriented, and very easy to work with. Not only he follows instructions and feedback well, but he also adds value by providing critical insights and pointing out design flaws and ideas I have not yet considered. I highly recommend Dhika!",
    name: "Samantha Chandra",
    role: "Design Researcher + Strategist",
    image: samanthaAvatar,
  },
];

const caseStudies = [
  {
    title: "An End-to-End Design System",
    number: "001",
    description: "A complete design system built from the ground up, covering tokens, components, documentation, and governance.",
    image: "https://framerusercontent.com/images/wBhT6nI0uuP1WMsAQy26KTa6hQ.png?width=2678&height=1402",
    href: "/case-studies/design-system",
  },
  {
    title: "Building Component Docs for Teams, Not Just Systems",
    number: "002",
    description: "Creating documentation that bridges design and development, helping teams adopt components with confidence.",
    image: "https://framerusercontent.com/images/lb8MITml3e70gW6qyEIiNT6ucs.png?width=2678&height=1402",
    href: "/case-studies/component-docs",
  },
  {
    title: "Airtable Ultimate Token Dictionary",
    number: "003",
    description: "A systematic approach to managing design tokens using Airtable as a single source of truth.",
    image: "https://framerusercontent.com/images/jfmNbNsMiJdGR0bHJTtamz7Zj8.png?width=2678&height=1402",
    href: "/case-studies/token-airtable",
  },
];

const processSteps = [
  {
    number: "001",
    category: "Product Audit",
    title: "Audit the Product",
    description: "Map inconsistencies, UI debt, and team pain points. AI can help surface patterns across large inventories—fast.",
    deliverables: "UI inventory, issue list, priority map.",
  },
  {
    number: "002",
    category: "Foundations",
    title: "Define the Visual Language",
    description: "Create core tokens and visual foundations. AI can assist with naming analysis and semantic consistency at scale.",
    deliverables: "colors, typography, spacing, guidelines, naming rules.",
  },
  {
    number: "003",
    category: "Core Components",
    title: "Build the Component Library",
    description: "Translate the visual language into scalable components. AI can accelerate variant scaffolding—one example is using Claude Code directly inside Figma to generate annotations.",
    deliverables: "component set, variants, usage rules, accessibility notes.",
  },
  {
    number: "004",
    category: "Documentation",
    title: "Rollout, Educate, and Evolve",
    description: "Launch the system into real workflows. AI can draft documentation from component specs—cutting time-to-publish significantly.",
    deliverables: "documentation, onboarding materials, migration plan.",
  },
];

const faqs = [
  {
    question: "Why create a brand-new design system instead of adopting Material, Carbon, or another public library?",
    answer: "Our product's brand voice, interaction patterns, and technical stack have unique requirements that off-the-shelf systems couldn't meet without heavy overrides. Starting from first principles let us define tokens, components, and governance that fit the team's exact workflow and scale cleanly as the product evolves.",
  },
  {
    question: "How do Figma Variables make the UI responsive?",
    answer: "Each token and component is tied to a variable mode for Desktop, Laptop, Tablet, and Mobile. Switch the mode once, and every instance across the file redraws itself—sizes, paddings, and typographic scales included—so designers don't duplicate artboards or manually resize elements.",
  },
  {
    question: "What's the role of Airtable in token naming?",
    answer: "Airtable is our single source of truth. Formula columns auto-generate token names from category and breakpoint fields, guaranteeing a consistent convention. Designers pull those names straight into Figma Variables, eliminating typos and one-off labels.",
  },
  {
    question: "How do we keep the Figma library lightweight and organised?",
    answer: "Components are split into two layers: a universal file for atomic elements (Button, Avatar, Input) and separate domain-specific files for larger patterns (Card, Carousel, Data-Viz). This separation reduces file size, speeds up loading, and lets designers focus on the right abstraction without wading through unrelated variants.",
  },
  {
    question: "Can the design system support brand themes or dark mode?",
    answer: "Yes. We separate primitive colour tokens (raw hues) from semantic tokens (roles like text/default or state/error). Swapping a theme simply remaps primitive values—no component refactor needed. Variable modes in Figma then apply the new palette across every breakpoint automatically.",
  },
];

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

const PortfolioHome = () => {
  return (
    <div className="w-full max-w-[1100px] mx-auto pb-28 max-[860px]:pb-16">

      {/* ═══════════════════════════════════════
          SECTION 1 — INTRO
      ════════════════════════════════════════ */}
      <section
        id="intro"
        className="relative border-b border-[#d4d4d4]"
        style={{ animation: "fadeUp .5s ease both", animationDelay: "120ms" }}
      >
        {/* Side ornaments */}
        <div
          className="absolute top-0 bottom-0 pointer-events-none overflow-hidden hidden min-[1300px]:block"
          style={{ right: "100%", width: "calc((100vw - 1100px) / 2)" }}
        >
          <TokenGraph nodes={LEFT_NODES} edges={LEFT_EDGES} />
        </div>
        <div
          className="absolute top-0 bottom-0 pointer-events-none overflow-hidden hidden min-[1300px]:block"
          style={{ left: "100%", width: "calc((100vw - 1100px) / 2)" }}
        >
          <TokenGraph nodes={RIGHT_NODES} edges={RIGHT_EDGES} />
        </div>

        <div className="grid grid-cols-[1fr_auto] gap-0 min-[860px]:grid-cols-2 max-[860px]:grid-cols-1">
          <div className="px-12 pt-[52px] pb-14 border-r border-[#e8e8e8] max-[860px]:border-r-0 max-[860px]:border-b max-[860px]:pb-10 max-[860px]:px-7 max-[860px]:pt-10">
            <p className="font-mono text-[0.6rem] font-light text-[#b0aba3] tracking-[0.12em] uppercase mb-8">
              Hello
            </p>
            <h1 className="font-grotesk font-normal text-[3rem] leading-[1.05] tracking-[-0.025em] text-[#1c1916] mb-6 max-[860px]:text-[2.2rem]">
              Hi, I'm Dhika.
            </h1>
            <p className="font-grotesk text-[1.15rem] leading-[1.75] text-[#6e6a62] max-w-[420px]">
              I'm a UI designer and design-system architect from Purwokerto, Indonesia.
            </p>
            <p className="font-grotesk text-[1.15rem] leading-[1.75] text-[#6e6a62] max-w-[420px] mt-2 mb-10">
              I work across design systems, UI, and accessibility—using AI tools like Claude Code to accelerate foundation audits, automate token naming, and draft documentation faster than ever.
            </p>
            <a href="mailto:ui.dhika@gmail.com">
              <button className="group inline-flex items-center gap-2 font-mono text-[0.68rem] tracking-[0.06em] bg-[#c8622e] text-white px-5 py-2.5 transition-colors duration-200 hover:bg-[#b5571a]">
                Hire Me
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </a>
          </div>
          <div className="flex items-center justify-center py-10 min-w-0 max-[860px]:py-6">
            <DNAHelix />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          SECTION 2 — CASE STUDIES
      ════════════════════════════════════════ */}
      <section
        id="case-studies"
        className="px-12 pt-16 pb-20 border-b border-[#d4d4d4] max-[860px]:px-7 max-[860px]:pt-12 max-[860px]:pb-14"
      >
        <ScrollReveal variant="fade-up">
          <div className="flex items-center justify-between mb-3">
            <SectionLabel>Case Studies</SectionLabel>
            <span className="font-mono text-[0.58rem] font-light text-[#b0aba3] mb-8 ml-4 flex-shrink-0">
              3 works
            </span>
          </div>
        </ScrollReveal>

        <div>
          {caseStudies.map((study, index) => (
            <ScrollReveal key={study.number} variant="fade-up" delay={index * 0.12}>
              <Link
                to={study.href}
                className={`group relative grid grid-cols-[64px_1fr_20px] items-start py-7 border-b border-[#e8e8e8] gap-5 no-underline transition-all duration-200 ${
                  index === 0 ? "border-t" : ""
                }`}
              >
                {/* Ghost number */}
                <span className="font-mono text-[2.8rem] font-light leading-none select-none text-[#ece8e2] group-hover:text-[rgba(200,98,46,0.18)] transition-colors duration-300 -mt-1">
                  {study.number}
                </span>

                <div>
                  <h3 className="font-grotesk font-normal text-[1.2rem] text-[#1c1916] group-hover:text-[#c8622e] transition-colors duration-200 leading-snug mb-2">
                    {study.title}
                  </h3>
                  <p className="font-mono text-[0.85rem] font-light text-[#b0aba3] leading-relaxed">
                    {study.description}
                  </p>
                </div>

                <ArrowUpRight className="w-4 h-4 text-[#b0aba3] opacity-0 group-hover:opacity-100 group-hover:text-[#c8622e] transition-all duration-200 mt-1 flex-shrink-0" />
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════
          SECTION 3 — PROCESS
      ════════════════════════════════════════ */}
      <section id="process" className="border-b border-[#d4d4d4]">
        <ScrollReveal variant="fade-up">
          <div className="px-12 pt-16 max-[860px]:px-7 max-[860px]:pt-12">
            <SectionLabel>The process</SectionLabel>
            <h2 className="font-grotesk font-normal text-[2rem] leading-tight tracking-[-0.015em] text-[#1c1916] mb-3 -mt-2">
              A structured approach to building systems
            </h2>
            <p className="font-grotesk text-[1.1rem] leading-[1.75] text-[#6e6a62] mb-10">
              UI debt compounds fast. A design system brings order—and with AI tools like Claude Code, I move through audits, token naming, and documentation in a fraction of the usual time.
            </p>
          </div>
        </ScrollReveal>

        {/* 4-column stepper */}
        <div className="grid grid-cols-4 border-t border-[#e8e8e8] max-[640px]:grid-cols-2 max-[400px]:grid-cols-1">
          {processSteps.map((step, i) => (
            <ScrollReveal
              key={step.number}
              variant="fade-up"
              delay={i * 0.1}
              className={`px-8 py-10 flex flex-col max-[860px]:px-6 max-[860px]:py-8 ${
                i < 3 ? "border-r border-[#e8e8e8]" : ""
              } max-[640px]:${i % 2 === 0 ? "border-r border-[#e8e8e8]" : ""} max-[640px]:${i < 2 ? "border-b border-[#e8e8e8]" : ""}`}
            >
              {/* Step number + connecting dot */}
              <div className="flex items-center gap-3 mb-6">
                <span className="font-mono text-[0.55rem] text-[#c8622e] tracking-[0.08em]">
                  {step.number}
                </span>
                <div className="flex-1 h-px bg-[#e8e8e8]" />
                <div className="w-1.5 h-1.5 rounded-full bg-[#1c1916] flex-shrink-0" />
              </div>

              <span className="font-mono text-[0.5rem] text-[#b0aba3] tracking-[0.1em] uppercase mb-3">
                {step.category}
              </span>
              <h3 className="font-grotesk font-normal text-[1rem] text-[#1c1916] leading-snug mb-3">
                {step.title}
              </h3>
              <p className="font-mono text-[0.85rem] font-light text-[#6e6a62] leading-relaxed mb-auto">
                {step.description}
              </p>
              <p className="font-mono text-[0.72rem] font-light text-[#b0aba3] mt-5 pt-4 border-t border-[#e8e8e8] leading-relaxed">
                <span className="text-[#9b9690]">↳ </span>{step.deliverables}
              </p>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════
          SECTION 4 — STORIES
      ════════════════════════════════════════ */}
      <section id="stories" className="border-b border-[#d4d4d4]">
        <ScrollReveal variant="fade-up">
          <div className="px-12 pt-16 pb-0 max-[860px]:px-7 max-[860px]:pt-12">
            <SectionLabel>Stories</SectionLabel>
          </div>
        </ScrollReveal>

        <div>
          {testimonials.map((testimonial, index) => (
            <ScrollReveal key={index} variant="fade-up" delay={index * 0.15}>
              <div
                className={`px-12 py-12 max-[860px]:px-7 max-[860px]:py-10 ${
                  index < testimonials.length - 1 ? "border-b border-[#e8e8e8]" : ""
                }`}
              >
                {/* Large opening quote mark */}
                <span className="font-grotesk text-[5rem] leading-none text-[#c8622e] select-none block -mb-3">
                  "
                </span>

                {/* Quote text */}
                <blockquote className="font-grotesk font-normal text-[0.95rem] leading-[1.75] text-[#1c1916] max-w-[720px] mb-8">
                  {testimonial.quote}
                </blockquote>

                {/* Attribution row */}
                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-8 h-8 rounded-full object-cover flex-shrink-0"
                  />
                  <div className="flex items-baseline gap-2">
                    <span className="font-grotesk text-[0.9rem] text-[#1c1916]">
                      {testimonial.name}
                    </span>
                    <span className="font-mono text-[0.56rem] font-light text-[#b0aba3]">
                      — {testimonial.role}
                    </span>
                  </div>
                  <div className="ml-auto flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-2.5 h-2.5 fill-[#c8622e] text-[#c8622e]" />
                    ))}
                    <span className="font-mono text-[0.52rem] font-light text-[#b0aba3] ml-1.5">5.0</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════
          SECTION 5 — FAQ
      ════════════════════════════════════════ */}
      <section id="faq" className="border-b border-[#d4d4d4]">
        <ScrollReveal variant="fade-up">
          <div className="px-12 pt-16 max-[860px]:px-7 max-[860px]:pt-12">
            <SectionLabel>FAQ</SectionLabel>
          </div>
        </ScrollReveal>

        <div className="border-t border-[#e8e8e8]">
          {faqs.map((faq, index) => (
            <ScrollReveal key={index} variant="fade-up" delay={index * 0.08}>
              <div className="grid grid-cols-[1fr_1fr] border-b border-[#e8e8e8] max-[640px]:grid-cols-1">
                {/* Question */}
                <div className="px-12 py-8 border-r border-[#e8e8e8] max-[860px]:px-7 max-[640px]:border-r-0 max-[640px]:border-b max-[640px]:py-6">
                  <span className="font-mono text-[0.52rem] text-[#c8622e] tracking-[0.1em] block mb-3">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="font-grotesk text-[1.05rem] leading-[1.6] text-[#1c1916]">
                    {faq.question}
                  </p>
                </div>

                {/* Answer */}
                <div className="px-12 py-8 max-[860px]:px-7 max-[640px]:py-6">
                  <p className="font-mono text-[0.85rem] font-light text-[#6e6a62] leading-[1.85]">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>


    </div>
  );
};

export default PortfolioHome;
