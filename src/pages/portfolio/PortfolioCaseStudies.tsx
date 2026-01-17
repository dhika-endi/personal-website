import { Link } from "react-router-dom";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

const caseStudies = [
  {
    title: "An End-to-End Design System",
    number: "001",
    image: "https://framerusercontent.com/images/wBhT6nI0uuP1WMsAQy26KTa6hQ.png?width=2678&height=1402",
    href: "/case-studies/design-system",
    description: "A complete design system built from the ground up, covering tokens, components, documentation, and governance.",
  },
  {
    title: "Building Component Docs for Teams, Not Just Systems",
    number: "002",
    image: "https://framerusercontent.com/images/lb8MITml3e70gW6qyEIiNT6ucs.png?width=2678&height=1402",
    href: "/case-studies/component-docs",
    description: "Documentation strategy focused on real team workflows, not just technical specifications.",
  },
  {
    title: "Airtable Ultimate Token Dictionary",
    number: "003",
    image: "https://framerusercontent.com/images/jfmNbNsMiJdGR0bHJTtamz7Zj8.png?width=2678&height=1402",
    href: "/case-studies/token-airtable",
    description: "A single source of truth for design tokens, auto-generating consistent naming conventions.",
  },
];

const PortfolioCaseStudies = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-12 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 max-w-6xl mx-auto">
          <ScrollReveal>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-foreground mb-6 md:mb-8">
              Case Studies.
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-base md:text-xl text-foreground-secondary max-w-2xl mb-8 md:mb-16">
              A collection of design system case study, showcasing end-to-end processes from audit to documentation.
            </p>
          </ScrollReveal>

          <div className="grid gap-6 md:gap-8">
            {caseStudies.map((study, index) => (
              <ScrollReveal key={study.number} delay={index * 0.1} variant="fade-up">
                <Link
                  to={study.href}
                  className="group block bg-background-surface rounded-xl border border-border overflow-hidden hover:border-primary/50 transition-all duration-300"
                >
                  <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                    <div className="p-4 sm:p-6 md:p-8 flex flex-col justify-center">
                      <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
                        <span className="text-xs sm:text-sm text-primary font-mono">{study.number}</span>
                      </div>
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-foreground transition-colors mb-3 md:mb-4">
                        {study.title}
                      </h3>
                      <p className="text-sm md:text-base text-foreground-secondary">
                        {study.description}
                      </p>
                    </div>
                    <div className="aspect-video md:aspect-auto md:h-full bg-background-elevated order-first md:order-last">
                      <img
                        src={study.image}
                        alt={study.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioCaseStudies;
