import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

const DesignSystemCaseStudy = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Back Navigation */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-6 md:pt-8">
        <Link 
          to="/case-studies" 
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm md:text-base"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Case Studies
        </Link>
      </div>

      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-8 md:py-16">
        <ScrollReveal>
          <div className="flex items-center gap-4 mb-4 md:mb-6">
            <span className="text-muted-foreground font-mono text-sm">2025</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mb-6 md:mb-8">
            An End-to-End Design System.
          </h1>
        </ScrollReveal>
        <ScrollReveal delay={0.1} variant="scale">
          <img 
            src="https://framerusercontent.com/images/lIy9bJPJ3Jlr2IQfLKQxUSgdKO4.png" 
            alt="Design System Hero"
            className="w-full rounded-lg"
          />
        </ScrollReveal>
      </section>

      {/* Introduction */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-8 md:py-12">
        <ScrollReveal>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            A token-based design system built to scale across products, teams, and platforms. 
            This system uses Figma variables as its backbone, with a clear layer of primitives, 
            semantics, and component-level tokens. It enables consistent theming, responsive design, 
            and efficient handoff between design and development.
          </p>
        </ScrollReveal>
      </section>

      {/* Problem Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-8 md:py-12">
        <ScrollReveal>
          <h2 className="text-xl md:text-2xl font-medium mb-4 md:mb-6">Problem</h2>
          <ul className="space-y-4 text-muted-foreground">
            <li className="flex gap-3">
              <span className="text-primary">•</span>
              <span><strong className="text-foreground">Slow delivery:</strong> Designers and engineers repeatedly rebuilt the same components from scratch.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary">•</span>
              <span><strong className="text-foreground">Inconsistent UI:</strong> Without shared foundations, visual language drifted between features.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary">•</span>
              <span><strong className="text-foreground">Manual maintenance:</strong> Style updates required touching multiple files, risking errors.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary">•</span>
              <span><strong className="text-foreground">Knowledge gaps:</strong> No single source of truth for usage guidelines, accessibility rules, or naming conventions.</span>
            </li>
          </ul>
        </ScrollReveal>
      </section>

      {/* Solution Section */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <ScrollReveal>
          <h2 className="text-2xl font-medium mb-6">Solution</h2>
          <ul className="space-y-4 text-muted-foreground">
            <li className="flex gap-3">
              <span className="text-primary">•</span>
              <span><strong className="text-foreground">Token foundation:</strong> Define primitives (raw values) and semantics (contextual meanings) to drive every UI decision.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary">•</span>
              <span><strong className="text-foreground">Variable-driven responsiveness:</strong> Bind spacing, sizing, and typography to breakpoints so components adapt automatically.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary">•</span>
              <span><strong className="text-foreground">Library split:</strong> Separate universal components (usable everywhere) from product-specific patterns (tailored workflows).</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary">•</span>
              <span><strong className="text-foreground">Governance & docs:</strong> Centralize naming rules in Airtable and publish interactive documentation for every component.</span>
            </li>
          </ul>
        </ScrollReveal>
      </section>

      {/* Challenges Section */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <ScrollReveal>
          <h2 className="text-2xl font-medium mb-6">Challenges</h2>
          <div className="space-y-6 text-muted-foreground">
            <div>
              <h3 className="text-foreground font-medium mb-2">Fragmented Token Usage</h3>
              <p>Multiple teams had created ad-hoc color and spacing values. Consolidating them into a single primitive set required auditing every existing component and negotiating trade-offs.</p>
            </div>
            <div>
              <h3 className="text-foreground font-medium mb-2">Responsive Component Overhead</h3>
              <p>Binding tokens to breakpoints added complexity. We invested in clear documentation and helper utilities so designers and engineers could apply responsive tokens without guesswork.</p>
            </div>
            <div>
              <h3 className="text-foreground font-medium mb-2">Limited Discoverability</h3>
              <p>Early versions lacked search and examples. We iterated on the documentation site, adding live previews, anatomy diagrams, and do/don't guidance to make the system approachable.</p>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Foundation Section */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <ScrollReveal>
          <h2 className="text-2xl font-medium mb-8">Foundation</h2>
        </ScrollReveal>
        
        {/* Typography */}
        <ScrollReveal delay={0.1}>
          <div className="mb-12">
            <h3 className="text-xl font-medium mb-4">Typography Scale</h3>
            <p className="text-muted-foreground mb-6">
              A modular type scale anchored to a base size, with responsive adjustments at each breakpoint. 
              Semantic tokens like text-heading-lg or text-body-md map to specific font-size, line-height, 
              and letter-spacing combinations.
            </p>
            <img 
              src="https://framerusercontent.com/images/QLEfQYFwX9Zdc4oJzpvjJ8N2iKw.png" 
              alt="Typography Scale"
              className="w-full rounded-lg"
            />
          </div>
        </ScrollReveal>

        {/* Color */}
        <ScrollReveal delay={0.15}>
          <div className="mb-12">
            <h3 className="text-xl font-medium mb-4">Color Scale</h3>
            <p className="text-muted-foreground mb-6">
              Primitives define raw hues and shades (e.g., blue-500). Semantic tokens assign meaning 
              (e.g., color-action-primary). This two-layer approach makes global theme changes trivial 
              and ensures accessible contrast ratios.
            </p>
            <img 
              src="https://framerusercontent.com/images/hSSXNzQOOPQzKsY8ppEyvxXKLew.png" 
              alt="Color Scale"
              className="w-full rounded-lg"
            />
          </div>
        </ScrollReveal>

        {/* Spacing */}
        <ScrollReveal delay={0.2}>
          <div className="mb-12">
            <h3 className="text-xl font-medium mb-4">Spacing & Sizing</h3>
            <p className="text-muted-foreground mb-6">
              An 8-px base grid drives all spacing and sizing tokens. Responsive variants (e.g., space-md 
              = 16 px on mobile, 24 px on desktop) ensure layouts stay proportional across devices.
            </p>
            <img 
              src="https://framerusercontent.com/images/8Mj7VoBOpD14rfkejIoksrlBQ.png" 
              alt="Spacing & Sizing"
              className="w-full rounded-lg"
            />
          </div>
        </ScrollReveal>

        {/* Border, Shadow, Opacity */}
        <ScrollReveal delay={0.25}>
          <div className="mb-12">
            <h3 className="text-xl font-medium mb-4">Border Radius, Shadow, & Opacity</h3>
            <p className="text-muted-foreground mb-6">
              Tokens for corner rounding (radius-sm, radius-lg), elevation (shadow-100, shadow-200), 
              and transparency (opacity-disabled) keep visual effects consistent and easy to update.
            </p>
            <img 
              src="https://framerusercontent.com/images/DN78wO4eb7Dus84nLDv9TsCO7c.png" 
              alt="Border Radius, Shadow, & Opacity"
              className="w-full rounded-lg"
            />
          </div>
        </ScrollReveal>

        {/* Breakpoints */}
        <ScrollReveal delay={0.3}>
          <div className="mb-12">
            <h3 className="text-xl font-medium mb-4">Breakpoints</h3>
            <p className="text-muted-foreground mb-6">
              Four breakpoints—desktop, laptop, tablet, mobile—control responsive token values. 
              Components reference these breakpoints to switch spacing, sizing, and typography automatically.
            </p>
            <img 
              src="https://framerusercontent.com/images/kcXIOn3ZDlwagvkO4pvGOxtW8g.png" 
              alt="Breakpoints"
              className="w-full rounded-lg"
            />
          </div>
        </ScrollReveal>
      </section>

      {/* Components & Patterns */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <ScrollReveal>
          <h2 className="text-2xl font-medium mb-8">Components & Patterns</h2>
          
          <div className="mb-8">
            <h3 className="text-xl font-medium mb-4">Universal Components</h3>
            <p className="text-muted-foreground mb-4">
              Buttons, Inputs, Checkboxes, Radios, Selects, Toggles, and other primitives shared across all products.
            </p>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-medium mb-4">Specific Component Library</h3>
            <p className="text-muted-foreground mb-4">
              Product-specific patterns like data tables, dashboards, and workflow wizards built on top of universal components.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1} variant="scale">
          <img 
            src="https://framerusercontent.com/images/YUx8pixpMr27UZxw7uIE6ra6s.png" 
            alt="Universal Components"
            className="w-full rounded-lg"
          />
        </ScrollReveal>
      </section>

      {/* Token Naming & Airtable */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <ScrollReveal>
          <h2 className="text-2xl font-medium mb-6">Token Naming & Airtable Workflow</h2>
          <ul className="space-y-4 text-muted-foreground mb-8">
            <li className="flex gap-3">
              <span className="text-primary">•</span>
              <span>Single source of truth for every token name, value, and description.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary">•</span>
              <span>Formula-driven naming ensures consistency (e.g., color-action-primary-default).</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary">•</span>
              <span>Linked tables connect primitives to semantics to component-level tokens.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary">•</span>
              <span>Export scripts sync Airtable data to Figma variables and code.</span>
            </li>
          </ul>
          <Link 
            to="/case-studies/token-airtable" 
            className="text-primary hover:underline inline-flex items-center gap-2 mb-8"
          >
            See the Airtable Token Dictionary case study
            <ArrowRight className="w-4 h-4" />
          </Link>
        </ScrollReveal>
        <ScrollReveal delay={0.1} variant="scale">
          <img 
            src="https://framerusercontent.com/images/GYcFRpbILBEs6yCJ7CriU2hoXeE.png" 
            alt="Airtable Workflow"
            className="w-full rounded-lg"
          />
        </ScrollReveal>
      </section>

      {/* Documentation */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <ScrollReveal>
          <h2 className="text-2xl font-medium mb-8">Documentation</h2>
        </ScrollReveal>
        
        <ScrollReveal delay={0.1}>
          <div className="mb-12">
            <h3 className="text-xl font-medium mb-4">Overview & Variants</h3>
            <p className="text-muted-foreground mb-6">
              Each component page opens with a summary of its purpose, followed by live examples of every variant. 
              Designers and engineers can copy code snippets directly.
            </p>
            <img 
              src="https://framerusercontent.com/images/OTtvCY51lAvqTnWXdIv6O6fWy8g.png" 
              alt="Overview & Variants"
              className="w-full rounded-lg"
            />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="mb-8">
            <h3 className="text-xl font-medium mb-4">Anatomy Breakdown</h3>
            <p className="text-muted-foreground mb-6">
              Numbered diagrams highlight each part of a component (icon, label, container) so teams understand 
              how to customize or extend it safely.
            </p>
            <img 
              src="https://framerusercontent.com/images/awNYpPjdzb3AQvzeZihcxPwVUc.png" 
              alt="Anatomy Breakdown"
              className="w-full rounded-lg"
            />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <Link 
            to="/case-studies/component-docs" 
            className="text-primary hover:underline inline-flex items-center gap-2"
          >
            See the Component Documentation case study
            <ArrowRight className="w-4 h-4" />
          </Link>
        </ScrollReveal>
      </section>

      {/* Impact & Results */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <ScrollReveal>
          <h2 className="text-2xl font-medium mb-6">Impact & Results</h2>
          <ul className="space-y-4 text-muted-foreground">
            <li className="flex gap-3">
              <span className="text-primary">•</span>
              <span><strong className="text-foreground">40% faster feature delivery</strong> by reusing existing components and tokens.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary">•</span>
              <span><strong className="text-foreground">Zero visual drift</strong> across products after enforcing semantic tokens.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary">•</span>
              <span><strong className="text-foreground">50% reduction in design QA cycles</strong> thanks to clear documentation and live previews.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary">•</span>
              <span><strong className="text-foreground">Onboarding time halved</strong> for new team members with centralized guidelines.</span>
            </li>
          </ul>
        </ScrollReveal>
      </section>

      {/* Navigation */}
      <section className="max-w-4xl mx-auto px-6 py-12 border-t border-border">
        <ScrollReveal>
          <div className="flex justify-between items-center">
            <Link 
              to="/case-studies" 
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              ← All Case Studies
            </Link>
            <Link 
              to="/case-studies/component-docs" 
              className="text-primary hover:underline inline-flex items-center gap-2"
            >
              Next: Component Docs
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
};

export default DesignSystemCaseStudy;
