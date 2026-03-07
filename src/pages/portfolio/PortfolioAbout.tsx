const experiences = [
  {
    title: "UI Designer, Design Systems",
    company: "IxDF - Interaction Design Foundation",
    period: "Oct 2024 – Present",
    location: "Austin, Texas",
    workType: "Remote",
    bullets: [
      "Drive the Design System strategy, roadmap, and governance to ensure long-term scalability.",
      "Oversee the evolution, quality, and maintainability of components, tokens, and interaction patterns.",
      "Manage a large-scale Design System with thousands of variables across multiple device contexts.",
      "Develop and maintain foundations including semantic, primitive, and component-level color tokens, typography, and breakpoints.",
      "Maintain Universal, Specific, and Section-level components with responsive, variable-driven behavior.",
      "Build clear documentation across component libraries, and component guidelines.",
      "Support teams during discovery through consulting, interface audits, and component recommendations.",
      "Improve product design efficiency and user experience across IxDF platforms.",
      "Support the organization-wide transition to structured, scalable workflows in Figma.",
    ],
    isCurrent: true,
  },
  {
    title: "Top Rated Plus Freelancer",
    company: "Upwork",
    period: "Mar 2022 – Present",
    location: "Indonesia",
    workType: "Remote",
    description: "Freelance UI Designer focusing on Applications, Web Dashboards, and Landing Pages that are simple, minimalist, and modern. Creating designs that are not only attractive but also easy to use.",
    isCurrent: true,
  },
  {
    title: "UI/UX Designer",
    company: "Studio Bardach",
    period: "Nov 2023 – Sep 2024",
    location: "Austria",
    workType: "Remote",
    description: "Designing intuitive and attractive designs for web dashboards, landing pages, and mobile applications, with a focus on creating optimal user experiences and user-friendly interfaces.",
  },
  {
    title: "UI Designer",
    company: "PT Theta Solusi Indonesia",
    period: "Nov 2022 – Aug 2023",
    location: "Indonesia",
    workType: "Remote",
    description: "Designing all features of mobile banking and internet banking dashboard including creating design systems. Collaborating with product managers and internal designers to determine application mockups and prototypes.",
  },
  {
    title: "UI Designer",
    company: "The Small Square",
    period: "Mar 2022 – Feb 2023",
    location: "Karachi, Pakistan",
    workType: "Remote",
    description: "Creating Dribbble & Behance exploratory design, focusing on User Flow → Wireframe → Design System → Mock-Up. Building Design Systems with Components, Variants, and Auto Layout in Figma.",
  },
  {
    title: "UI Designer",
    company: "VirtualSpace",
    period: "May 2022 – Oct 2022",
    location: "Selangor, Malaysia",
    workType: "Remote",
    description: "Creating and modifying components from existing design systems to ensure all layouts and components are standardized across screens using automatic layouts, components, and variants in Figma.",
  },
  {
    title: "UI/UX Designer",
    company: "Komerce",
    period: "Mar 2021 – Mar 2022",
    location: "Purbalingga, Indonesia",
    workType: "On-site",
    description: "Lead UI/UX Designer who prioritizes work on Design System/Tribe Project, oversees all design results, and provides direction to other UI/UX Designers. Collaborated with APM to develop 5 products.",
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
    description: "Create core tokens and visual foundations. AI assists with naming analysis and semantic consistency at scale.",
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

const PortfolioAbout = () => {
  return (
    <div className="w-full max-w-[1100px] mx-auto pb-28 max-[860px]:pb-16">

      {/* ── HERO ── */}
      <section
        className="border-b border-[#e8e8e8]"
        style={{ animation: "fadeUp .5s ease both" }}
      >
        <div className="grid min-[860px]:grid-cols-[3fr_2fr] max-[860px]:grid-cols-1">
          <div className="px-12 pt-16 pb-20 border-r border-[#e8e8e8] max-[860px]:border-r-0 max-[860px]:border-b max-[860px]:px-7 max-[860px]:pt-12 max-[860px]:pb-14">
            <SectionLabel>About</SectionLabel>
            <h1 className="font-grotesk font-normal text-[3rem] leading-[1.05] tracking-[-0.025em] text-[#1c1916] mb-8 max-[860px]:text-[2.2rem]">
              Who am I.
            </h1>
            <p className="font-grotesk text-[1.1rem] leading-[1.75] text-[#6e6a62]">
              Hi, I'm Dhika Endi Astowo from Indonesia. I have 5 years of experience in product design, with 3 years focusing on UI/UX design and the last 2 years specializing in design systems.
            </p>
            <p className="font-grotesk text-[1.1rem] leading-[1.75] text-[#6e6a62] mt-4">
              I work not only on creating visually consistent interfaces, but also on building, managing, and scaling systems that support teams and products over time.
            </p>
          </div>
          <div className="flex items-start justify-center px-10 py-16 max-[860px]:px-7 max-[860px]:py-10">
            <img
              src="https://framerusercontent.com/images/rqfv2WFKQkfcitqb2oyO0cwBmU.png?width=2000&height=2000"
              alt="Dhika Endi Astowo"
              className="w-full max-w-[260px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* ── EXPERIENCE ── */}
      <section
        className="px-12 pt-16 pb-0 border-b border-[#e8e8e8] max-[860px]:px-7 max-[860px]:pt-12"
        style={{ animation: "fadeUp .5s .1s ease both" }}
      >
        <SectionLabel>Experience</SectionLabel>
        <h2 className="font-grotesk font-normal text-[2rem] leading-tight tracking-[-0.015em] text-[#1c1916] mb-10 -mt-1">
          A quick look at my recent roles
        </h2>

        <div>
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="grid min-[640px]:grid-cols-[1fr_auto] gap-4 py-8 border-t border-[#e8e8e8] last:border-b"
            >
              <div>
                <div className="flex items-center gap-3 mb-1 flex-wrap">
                  <h3 className="font-grotesk font-normal text-[1.05rem] text-[#1c1916]">
                    {exp.title}
                  </h3>
                  {exp.isCurrent && (
                    <span className="font-mono text-[0.52rem] tracking-[0.06em] text-[#c8622e] border border-[#c8622e]/40 px-2 py-0.5 uppercase">
                      Current
                    </span>
                  )}
                </div>
                <p className="font-mono text-[0.72rem] text-[#c8622e] mb-3">
                  {exp.company} · {exp.location}
                </p>
                {"bullets" in exp ? (
                  <ul className="font-mono text-[0.75rem] font-light text-[#6e6a62] leading-relaxed max-w-[600px] space-y-1.5 list-none">
                    {(exp as typeof exp & { bullets: string[] }).bullets.map((b, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="text-[#b0aba3] flex-shrink-0">•</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="font-mono text-[0.75rem] font-light text-[#6e6a62] leading-relaxed max-w-[600px]">
                    {(exp as typeof exp & { description: string }).description}
                  </p>
                )}
              </div>
              <div className="flex flex-col items-end gap-2 flex-shrink-0">
                <span className="font-mono text-[0.62rem] text-[#b0aba3] whitespace-nowrap">
                  {exp.period}
                </span>
                <span className="font-mono text-[0.52rem] tracking-[0.06em] text-[#b0aba3] border border-[#e8e8e8] px-2 py-0.5 uppercase">
                  {exp.workType}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section
        className="border-b border-[#e8e8e8]"
        style={{ animation: "fadeUp .5s .2s ease both" }}
      >
        <div className="px-12 pt-16 max-[860px]:px-7 max-[860px]:pt-12">
          <SectionLabel>The process</SectionLabel>
          <h2 className="font-grotesk font-normal text-[2rem] leading-tight tracking-[-0.015em] text-[#1c1916] mb-3 -mt-1">
            A structured approach to building systems
          </h2>
          <p className="font-grotesk text-[1.1rem] leading-[1.75] text-[#6e6a62] mb-10">
            UI debt compounds fast. A design system brings order—and with AI tools like Claude Code, I move through audits, token naming, and documentation in a fraction of the usual time.
          </p>
        </div>

        <div className="grid grid-cols-4 border-t border-[#e8e8e8] max-[640px]:grid-cols-2 max-[400px]:grid-cols-1">
          {processSteps.map((step, i) => (
            <div
              key={step.number}
              className={`px-8 py-10 flex flex-col max-[860px]:px-6 max-[860px]:py-8 ${
                i < 3 ? "border-r border-[#e8e8e8]" : ""
              }`}
            >
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
              <p className="font-mono text-[0.8rem] font-light text-[#6e6a62] leading-relaxed mb-auto">
                {step.description}
              </p>
              <p className="font-mono text-[0.72rem] font-light text-[#b0aba3] mt-5 pt-4 border-t border-[#e8e8e8] leading-relaxed">
                <span className="text-[#9b9690]">↳ </span>{step.deliverables}
              </p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default PortfolioAbout;
