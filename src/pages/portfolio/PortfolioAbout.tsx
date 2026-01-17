import { ScrollReveal } from "@/components/animations/ScrollReveal";

const experiences = [
  {
    title: "UI Designer, Design Systems",
    company: "IxDF - Interaction Design Foundation",
    period: "Oct 2024 - Present",
    location: "Austin, Texas",
    workType: "Remote",
    description: "Drive the Design System strategy, roadmap, and governance. Manage a large-scale Design System with thousands of variables across multiple device contexts. Develop and maintain foundations including semantic, primitive, and component-level color tokens, typography, and breakpoints.",
    isCurrent: true,
  },
  {
    title: "Top Rated Plus Freelancer",
    company: "Upwork",
    period: "Mar 2022 - Present",
    location: "Indonesia",
    workType: "Remote",
    description: "Freelance UI Designer focusing on Applications, Web Dashboards, and Landing Pages that are simple, minimalist, and modern. Creating designs that are not only attractive but also easy to use.",
    isCurrent: true,
  },
  {
    title: "UI/UX Designer",
    company: "Studio Bardach",
    period: "Nov 2023 - Sep 2024",
    location: "Austria",
    workType: "Remote",
    description: "Designing intuitive and attractive designs for web dashboards, landing pages, and mobile applications, with a focus on creating optimal user experiences and user-friendly interfaces.",
  },
  {
    title: "UI Designer",
    company: "PT Theta Solusi Indonesia",
    period: "Nov 2022 - Aug 2023",
    location: "Indonesia",
    workType: "Remote",
    description: "Designing all features of mobile banking and internet banking dashboard including creating design systems. Collaborating with product managers and internal designers to determine application mockups and prototypes.",
  },
  {
    title: "UI Designer",
    company: "The Small Square",
    period: "Mar 2022 - Feb 2023",
    location: "Karachi, Pakistan",
    workType: "Remote",
    description: "Creating Dribbble & Behance exploratory design, focusing on User Flow → Wireframe → Design System → Mock-Up. Building Design Systems with Components, Variants, and Auto Layout in Figma.",
  },
  {
    title: "UI Designer",
    company: "VirtualSpace",
    period: "May 2022 - Oct 2022",
    location: "Selangor, Malaysia",
    workType: "Remote",
    description: "Creating and modifying components from existing design systems to ensure all layouts and components are standardized across screens using automatic layouts, components, and variants in Figma.",
  },
  {
    title: "UI/UX Designer",
    company: "Komerce",
    period: "Mar 2021 - Mar 2022",
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
    description: "Map inconsistencies, UI debt, and team pain points.",
    deliverables: "UI inventory, issue list, priority map.",
  },
  {
    number: "002",
    category: "Foundations",
    title: "Define the Visual Language",
    description: "Create core tokens and visual foundations.",
    deliverables: "colors, typography, spacing, guidelines, naming rules.",
  },
  {
    number: "003",
    category: "Core Components",
    title: "Build the Component Library",
    description: "Translate the visual language into scalable, reusable components.",
    deliverables: "component set, variants, usage rules, accessibility notes.",
  },
  {
    number: "004",
    category: "Documentation",
    title: "Rollout, Educate, and Evolve",
    description: "Launch the system into real workflows, collect feedback, and maintain it.",
    deliverables: "documentation, onboarding materials, migration plan.",
  },
];

const PortfolioAbout = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section - Photo + Bio */}
      <section className="relative py-12 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 max-w-6xl mx-auto">
          <ScrollReveal>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-foreground mb-8 md:mb-16">
              Who am I.
            </h1>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <ScrollReveal variant="fade-right">
              <div className="relative">
                <img
                  src="https://framerusercontent.com/images/rqfv2WFKQkfcitqb2oyO0cwBmU.png?width=2000&height=2000"
                  alt="Dhika Endi Astowo"
                  className="w-full max-w-md rounded-xl"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal variant="fade-left" delay={0.1}>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-foreground-secondary leading-relaxed">
                Hi, I'm Dhika Endi Astowo from Indonesia. I have 5 years of experience in product design, with 3 years focusing on UI/UX design and the last 2 years specializing in design systems. I work not only on creating visually consistent interfaces, but also on building, managing, and scaling systems that support teams and products over time.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Experience Section - Full Width */}
      <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-background-surface">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="mb-8 md:mb-12">
              <span className="text-xs sm:text-sm text-primary font-mono">Experience</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 md:mt-4">
                A quick look at my recent roles
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {experiences.map((exp, index) => (
              <ScrollReveal key={index} delay={index * 0.05} variant="fade-up">
                <div className={`p-5 md:p-6 rounded-xl border h-full transition-colors ${
                  exp.isCurrent 
                    ? 'bg-primary/5 border-primary/20 hover:border-primary/40' 
                    : 'bg-background-elevated border-border hover:border-border-hover'
                }`}>
                  <div className="flex items-center gap-2 mb-3">
                    {exp.isCurrent && (
                      <span className="px-2.5 py-1 text-[10px] font-semibold bg-primary/10 text-primary rounded-full uppercase tracking-wide">
                        Current
                      </span>
                    )}
                    <span className={`px-2.5 py-1 text-[10px] font-medium rounded-full ${
                      exp.workType === 'Remote' 
                        ? 'bg-secondary text-foreground-secondary' 
                        : 'bg-accent/10 text-accent'
                    }`}>
                      {exp.workType}
                    </span>
                  </div>
                  <h3 className="text-base md:text-lg font-semibold text-foreground">{exp.title}</h3>
                  <p className="text-sm md:text-base text-primary font-medium mt-1">{exp.company}</p>
                  <div className="flex items-center gap-2 mt-2 text-xs md:text-sm text-foreground-muted">
                    <span>{exp.period}</span>
                    <span className="w-1 h-1 rounded-full bg-foreground-muted"></span>
                    <span>{exp.location}</span>
                  </div>
                  <p className="text-xs md:text-sm text-foreground-secondary mt-4 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-background-surface">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="mb-8 md:mb-12">
              <span className="text-xs sm:text-sm text-primary font-mono">The process</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 md:mt-4 mb-4 md:mb-6">
                A structured approach to building systems
              </h2>
              <p className="text-base md:text-lg text-foreground-secondary max-w-3xl">
                Products grow, teams change, and UI debt compounds. A design-system turns that chaos into a single, living source of truth—so designers ship faster, engineers reuse instead of rebuild, stakeholders see consistent brand quality, and accessibility best-practice comes "out of the box." In short: speed, consistency, scalability, and shared understanding.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
            {processSteps.map((step, index) => (
              <ScrollReveal key={step.number} delay={index * 0.1} variant="scale">
                <div className="p-4 md:p-6 bg-background-elevated rounded-xl border border-border h-full">
                  <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
                    <span className="text-xs sm:text-sm text-primary font-mono">{step.number}</span>
                    <span className="text-xs sm:text-sm text-foreground-muted font-mono">{step.category}</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="text-sm md:text-base text-foreground-secondary mb-3 md:mb-4">{step.description}</p>
                  <p className="text-xs md:text-sm text-foreground-muted">
                    <span className="text-foreground-secondary">Deliverables:</span> {step.deliverables}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioAbout;
