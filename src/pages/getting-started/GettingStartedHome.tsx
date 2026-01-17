import { DocLayout } from "@/components/layout/DocLayout";
import { PageHeader } from "@/components/docs/PageHeader";
import { Section } from "@/components/docs/Section";
import { Link } from "react-router-dom";
import { Palette, Type, Box, Wand2, ArrowRight, Users, Code, Paintbrush } from "lucide-react";

const quickLinks = [
  {
    title: "Color",
    description: "Explore our color system with primitive and semantic tokens",
    href: "/design-system/foundations/color",
    icon: Palette,
  },
  {
    title: "Typography",
    description: "Font families, sizes, and text styles",
    href: "/design-system/foundations/typography",
    icon: Type,
  },
  {
    title: "Components",
    description: "Ready-to-use UI components",
    href: "/design-system/components/button",
    icon: Box,
  },
  {
    title: "Token Builder",
    description: "Interactive tool to generate consistent token names",
    href: "/design-system/foundations/tokens/builder",
    icon: Wand2,
  },
];

const audienceCards = [
  {
    title: "Designers",
    description: "Access design tokens, color palettes, and component specifications to create consistent designs.",
    icon: Paintbrush,
  },
  {
    title: "Developers",
    description:
      "See how the design system is structured to enable clear handoff, consistency, and predictable implementation.",
    icon: Code,
  },
  {
    title: "Product Teams",
    description: "Understand design principles and patterns to make informed product decisions.",
    icon: Users,
  },
];

const GettingStartedHome = () => {
  return (
    <DocLayout>
      <PageHeader
        title="Getting Started"
        description="Welcome to Dhika Design System — a comprehensive design system for building consistent, accessible, and beautiful user interfaces. Explore our foundations, components, and patterns to create exceptional digital experiences."
      />

      <Section title="Who Is This For?">
        <div className="grid md:grid-cols-3 gap-4">
          {audienceCards.map((card) => (
            <div key={card.title} className="p-5 bg-background-elevated rounded-lg border border-border">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <card.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-base font-medium text-foreground mb-1">{card.title}</h3>
              <p className="text-sm text-foreground-muted">{card.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="How to Use This Documentation">
        <div className="p-6 bg-background-elevated rounded-lg border border-border space-y-4">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-sm font-medium text-foreground mb-2">1. Start with Foundations</h4>
              <p className="text-sm text-foreground-muted">
                Learn about colors, typography, spacing, and other core design tokens that form the building blocks of
                the system.
              </p>
            </div>
            <div>
              <h4 className="text-sm font-medium text-foreground mb-2">2. Explore Components</h4>
              <p className="text-sm text-foreground-muted">
                Browse our component library to find reusable UI elements with usage guidelines and code examples.
              </p>
            </div>
            <div>
              <h4 className="text-sm font-medium text-foreground mb-2">3. Use the Token Builder</h4>
              <p className="text-sm text-foreground-muted">
                Generate consistent token names using our interactive tool to maintain naming conventions.
              </p>
            </div>
            <div>
              <h4 className="text-sm font-medium text-foreground mb-2">4. Understand Design Decisions</h4>
              <p className="text-sm text-foreground-muted">
                Review the rationale behind tokens, components, and rules to understand how consistency, accessibility,
                and scalability are achieved across the system.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section title="Quick Links">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {quickLinks.map((link) => (
            <Link
              key={link.title}
              to={link.href}
              className="group p-5 bg-background-elevated rounded-lg border border-border hover:border-primary/50 transition-all"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <link.icon className="w-5 h-5 text-primary" />
                </div>
                <ArrowRight className="w-4 h-4 text-foreground-muted group-hover:text-primary group-hover:translate-x-1 transition-all" />
              </div>
              <h3 className="text-base font-medium text-foreground mb-1">{link.title}</h3>
              <p className="text-sm text-foreground-muted">{link.description}</p>
            </Link>
          ))}
        </div>
      </Section>

      <Section title="Next Steps">
        <div className="p-6 bg-background-elevated rounded-lg border border-border">
          <h3 className="text-lg font-medium text-foreground mb-2">Ready to dive in?</h3>
          <p className="text-sm text-foreground-secondary mb-4">
            Set up your development environment and learn the core concepts to start building with Dhika Design System.
          </p>
          <div className="flex gap-3">
            <Link
              to="/design-system/getting-started/setup"
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors"
            >
              Setup Guide
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/design-system/getting-started/learn"
              className="inline-flex items-center gap-2 px-4 py-2 bg-background-surface text-foreground rounded-lg text-sm font-medium border border-border hover:bg-background-elevated transition-colors"
            >
              Learn the Basics
            </Link>
          </div>
        </div>
      </Section>

      <footer className="pt-8 mt-8 border-t border-border-subtle">
        <p className="text-sm text-foreground-muted">Created by Dhika Endi Astowo</p>
      </footer>
    </DocLayout>
  );
};

export default GettingStartedHome;
