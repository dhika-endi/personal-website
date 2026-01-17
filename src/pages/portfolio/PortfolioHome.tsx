import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { 
  ArrowUpRight, 
  Star, 
  Palette, 
  Type, 
  Grid3X3, 
  Layers, 
  Box, 
  Component, 
  Paintbrush, 
  Ruler, 
  Layout, 
  Shapes,
  Circle,
  Square,
  Baseline,
  AlignCenter
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import samanthaAvatar from "@/assets/samantha-avatar.jpeg";

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

const designSystemIcons = [
  Palette, Type, Grid3X3, Layers, Box, Component, 
  Paintbrush, Ruler, Layout, Shapes, Circle, Square, Baseline, AlignCenter
];

const PortfolioHome = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  // Generate a stable grid of icons (20 cols x 15 rows = 300 cells)
  const gridIcons = useMemo(() => {
    const icons = [];
    for (let i = 0; i < 300; i++) {
      icons.push(designSystemIcons[i % designSystemIcons.length]);
    }
    return icons;
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section 
        className="relative min-h-[60vh] md:min-h-[80vh] flex items-center overflow-hidden"
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {/* Interactive Orange Glow Grid Overlay with Icons */}
        <div 
          className="absolute inset-0 pointer-events-none transition-opacity duration-300"
          style={{
            opacity: isHovering ? 1 : 0,
            maskImage: `radial-gradient(circle 200px at ${mousePosition.x}px ${mousePosition.y}px, black, transparent)`,
            WebkitMaskImage: `radial-gradient(circle 200px at ${mousePosition.x}px ${mousePosition.y}px, black, transparent)`,
          }}
        >
          <div 
            className="w-full h-full grid"
            style={{
              gridTemplateColumns: 'repeat(auto-fill, 60px)',
              gridTemplateRows: 'repeat(auto-fill, 60px)',
            }}
          >
            {gridIcons.map((Icon, index) => (
              <div 
                key={index}
                className="w-[60px] h-[60px] border-[0.5px] border-primary/50 flex items-center justify-center"
              >
                <Icon className="w-4 h-4 text-primary/80" strokeWidth={1.5} />
              </div>
            ))}
          </div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <ScrollReveal>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-foreground mb-6 md:mb-8 leading-tight">
              Hi, I'm Dhika.
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-lg sm:text-xl md:text-2xl text-foreground-secondary mb-3 md:mb-4 max-w-2xl">
              I'm a UI designer and design-system architect from Purwokerto, Indonesia.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-lg sm:text-xl md:text-2xl text-foreground-secondary mb-8 md:mb-12 max-w-2xl">
              I spend my time on design systems, UI, accessibility, and building things that help real people.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <a href="mailto:ui.dhika@gmail.com">
              <Button className="group">
                Hire Me
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Button>
            </a>
          </ScrollReveal>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="mb-8 md:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 md:mb-6">
                Case Studies.
              </h2>
              <p className="text-base md:text-lg text-foreground-secondary max-w-3xl">
                A collection of design system case study, showcasing end-to-end processes from audit to documentation.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid gap-6 md:gap-8">
            {caseStudies.map((study, index) => (
              <ScrollReveal key={study.number} delay={index * 0.1} variant="fade-up">
                <Link
                  to={study.href}
                  className="group block rounded-2xl border border-border overflow-hidden 
                             hover:border-primary/50 transition-all duration-300 
                             hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5"
                >
                  {/* Image - Full width, prominent */}
                  <div className="relative aspect-[16/9] bg-background-surface overflow-hidden">
                    <img
                      src={study.image}
                      alt={study.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  
                  {/* Content */}
                  <div className="p-5 md:p-8 bg-background-surface">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <span className="text-xs text-primary font-mono">{study.number}</span>
                        <h3 className="text-xl md:text-2xl font-semibold text-foreground mt-2 mb-3 group-hover:text-primary transition-colors duration-300">
                          {study.title}
                        </h3>
                        <p className="text-sm md:text-base text-foreground-secondary">
                          {study.description}
                        </p>
                      </div>
                      <ArrowUpRight className="w-5 h-5 text-foreground-muted group-hover:text-primary 
                                               group-hover:translate-x-0.5 group-hover:-translate-y-0.5 
                                               transition-all duration-300 flex-shrink-0 mt-1" />
                    </div>
                  </div>
                </Link>
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
                <div className="card-hover p-4 md:p-6 bg-background-elevated rounded-xl border border-border h-full hover:border-primary/30">
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

      {/* Testimonial Section */}
      <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-8 md:mb-12">Stories.</h2>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, index) => (
              <ScrollReveal key={index} delay={index * 0.1} variant="scale">
                <div className="card-hover p-6 md:p-8 bg-background-elevated/50 backdrop-blur-sm rounded-xl border border-border h-full flex flex-col hover:border-primary/30">
                  {/* Avatar and Name */}
                  <div className="flex items-center gap-4 mb-6">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-14 h-14 rounded-full object-cover ring-2 ring-border"
                    />
                    <div>
                      <p className="font-medium text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-foreground-muted">{testimonial.role}</p>
                    </div>
                  </div>
                  
                  {/* Star Rating */}
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                    <span className="ml-2 text-sm text-foreground-secondary">5.0</span>
                  </div>
                  
                  {/* Quote */}
                  <blockquote className="text-sm md:text-base text-foreground-secondary leading-relaxed flex-1">
                    "{testimonial.quote}"
                  </blockquote>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-background-surface">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-8 md:mb-12">FAQ.</h2>
          </ScrollReveal>
          <div className="space-y-4 md:space-y-6">
            {faqs.map((faq, index) => (
              <ScrollReveal key={index} delay={index * 0.05}>
                <details className="group card-hover bg-background-elevated rounded-xl border border-border overflow-hidden hover:border-primary/50">
                  <summary className="flex items-center justify-between p-4 md:p-6 cursor-pointer list-none transition-colors">
                    <span className="text-base md:text-lg font-medium text-foreground pr-4 md:pr-8">{faq.question}</span>
                    <span className="text-xl md:text-2xl text-foreground-muted group-open:rotate-45 transition-transform flex-shrink-0">+</span>
                  </summary>
                  <div className="px-4 md:px-6 pb-4 md:pb-6 text-sm md:text-base text-foreground-secondary">
                    {faq.answer}
                  </div>
                </details>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioHome;
