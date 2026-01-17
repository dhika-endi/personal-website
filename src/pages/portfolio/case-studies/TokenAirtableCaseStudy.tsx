import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

const TokenAirtableCaseStudy = () => {
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
            Airtable Ultimate Token Dictionary.
          </h1>
        </ScrollReveal>
        <ScrollReveal delay={0.1} variant="scale">
          <img 
            src="https://framerusercontent.com/images/nPyd0r1sjpLCg0BC8enlmKujdE.png" 
            alt="Token Airtable Hero"
            className="w-full rounded-lg"
          />
        </ScrollReveal>
      </section>

      {/* Introduction */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-8 md:py-12">
        <ScrollReveal>
          <p className="text-lg text-muted-foreground leading-relaxed">
            A single source of truth for every design token—names, values, and usage guidelines—managed 
            in Airtable. This system eliminates ad-hoc naming, enforces consistent conventions, and 
            streamlines the handoff between design and development.
          </p>
        </ScrollReveal>
      </section>

      {/* Problem, Solution, Impact */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <ScrollReveal delay={0.1}>
            <div>
              <h3 className="text-foreground font-medium mb-4">Problem</h3>
              <p className="text-muted-foreground">
                Ad-hoc token names created confusion. Teams used inconsistent naming patterns, 
                making it hard to find, reuse, or update tokens.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <div>
              <h3 className="text-foreground font-medium mb-4">Solution</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Centralized token database in Airtable</li>
                <li>• Formula-driven naming conventions</li>
              </ul>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div>
              <h3 className="text-foreground font-medium mb-4">Impact</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• 80% reduction in naming conflicts</li>
                <li>• 75% faster token lookup</li>
                <li>• 50% faster onboarding</li>
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Success Criteria */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <ScrollReveal>
          <h2 className="text-2xl font-medium mb-6">Success Criteria</h2>
          <ul className="space-y-4 text-muted-foreground">
            <li className="flex gap-3">
              <span className="text-primary">•</span>
              <span><strong className="text-foreground">Single Source of Truth:</strong> Every token lives in one place with clear ownership.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary">•</span>
              <span><strong className="text-foreground">Clear Naming Pattern:</strong> Predictable, self-documenting token names.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary">•</span>
              <span><strong className="text-foreground">Governance Workflow:</strong> Approval process for new tokens.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary">•</span>
              <span><strong className="text-foreground">Fast Retrieval:</strong> Search and filter by category, component, or property.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary">•</span>
              <span><strong className="text-foreground">Future-Proof:</strong> Scalable structure for new tokens and categories.</span>
            </li>
          </ul>
        </ScrollReveal>
      </section>

      {/* Token Categories */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <ScrollReveal>
          <h2 className="text-2xl font-medium mb-6">Token Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["Color", "Font", "Space", "Size", "Border", "Border Radius", "Gradient", "Shadow", "Motion", "Time", "Icon"].map((category, index) => (
              <ScrollReveal key={category} delay={index * 0.05} variant="scale">
                <div className="bg-card border border-border rounded-lg p-4 text-center">
                  <span className="text-muted-foreground">{category}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* Token Taxonomy */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <ScrollReveal>
          <h2 className="text-2xl font-medium mb-8">Token Taxonomy</h2>
        </ScrollReveal>
        
        <ScrollReveal delay={0.1}>
          <div className="mb-8">
            <h3 className="text-xl font-medium mb-4">Naming Pattern</h3>
            <code className="block bg-card border border-border rounded-lg p-4 text-sm mb-6 overflow-x-auto">
              component-variant-type-element-property-state-direction
            </code>
            <img 
              src="https://framerusercontent.com/images/Belu1ej5U57rBHmlt7gbjw8duM.png" 
              alt="Token Taxonomy"
              className="w-full rounded-lg"
            />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="mb-8">
            <h3 className="text-xl font-medium mb-4">Level Breakdown</h3>
            <ol className="space-y-3 text-muted-foreground">
              <li><strong className="text-foreground">Level 1 - Component:</strong> What component uses this token (button, input, card)</li>
              <li><strong className="text-foreground">Level 2 - Variant:</strong> Which variant (primary, secondary, ghost)</li>
              <li><strong className="text-foreground">Level 3 - Type:</strong> Token type (color, space, size)</li>
              <li><strong className="text-foreground">Level 4 - Element:</strong> Which part (label, icon, container)</li>
              <li><strong className="text-foreground">Level 5 - Property:</strong> CSS property (background, border, padding)</li>
              <li><strong className="text-foreground">Level 6 - State:</strong> Interaction state (default, hover, pressed)</li>
              <li><strong className="text-foreground">Level 7 - Direction:</strong> Directional modifier (top, left, x, y)</li>
            </ol>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="mb-12">
            <h3 className="text-xl font-medium mb-4">Spacing Token Example</h3>
            <img 
              src="https://framerusercontent.com/images/ocOZWU0DP1bAriHLhmNFK6q0.png" 
              alt="Spacing Token Example"
              className="w-full rounded-lg"
            />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.25}>
          <div className="mb-8">
            <h3 className="text-xl font-medium mb-4">Color Token Example</h3>
            <img 
              src="https://framerusercontent.com/images/9KVWf2JLVaY1Vz8lOgvpuvY1c60.png" 
              alt="Color Token Example"
              className="w-full rounded-lg"
            />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="text-lg font-medium mb-3">Why It Works</h3>
            <p className="text-muted-foreground">
              This hierarchical naming convention makes tokens self-documenting. Anyone can read a token name 
              like <code className="bg-muted px-2 py-1 rounded">button-primary-color-label-text-hover</code> and 
              immediately understand its purpose without looking up documentation.
            </p>
          </div>
        </ScrollReveal>
      </section>

      {/* Airtable Schema */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <ScrollReveal>
          <h2 className="text-2xl font-medium mb-8">Airtable Schema</h2>
        </ScrollReveal>
        
        <ScrollReveal delay={0.1}>
          <div className="mb-12">
            <h3 className="text-xl font-medium mb-4">Core Table</h3>
            <p className="text-muted-foreground mb-6">
              The foundation table containing primitive values—raw colors, spacing units, and font specs.
            </p>
            <img 
              src="https://framerusercontent.com/images/vieb47GfUBUYpDgMLlQptv9eZc.png" 
              alt="Core Table"
              className="w-full rounded-lg"
            />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="mb-12">
            <h3 className="text-xl font-medium mb-4">Components Table</h3>
            <p className="text-muted-foreground mb-6">
              Lists every component that consumes tokens, enabling cross-referencing and impact analysis.
            </p>
            <img 
              src="https://framerusercontent.com/images/pCcoI4JgfSW0MJkoGoBczGsK4hk.png" 
              alt="Components Table"
              className="w-full rounded-lg"
            />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="mb-8">
            <h3 className="text-xl font-medium mb-4">List of Tokens Table</h3>
            <p className="text-muted-foreground mb-6">
              The master token registry with formula-generated names, linked primitives, and usage context.
            </p>
            <img 
              src="https://framerusercontent.com/images/QuBwnlcfyEKJtINDagm7BNlAkXc.png" 
              alt="List of Tokens"
              className="w-full rounded-lg"
            />
          </div>
        </ScrollReveal>
      </section>

      {/* Airtable Formula */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <ScrollReveal>
          <h2 className="text-2xl font-medium mb-8">Airtable Formula Magic</h2>
        </ScrollReveal>
        
        <ScrollReveal delay={0.1}>
          <div className="mb-8">
            <h3 className="text-xl font-medium mb-4">Self-Building Name Formula</h3>
            <p className="text-muted-foreground mb-4">
              Token names are generated automatically using CONCATENATE formulas that pull from linked fields:
            </p>
            <pre className="bg-card border border-border rounded-lg p-4 text-sm overflow-x-auto mb-6">
{`CONCATENATE(
  {Component},"-",
  {Variant},"-",
  {Type},"-",
  {Element},"-",
  {Property},"-",
  {State}
)`}
            </pre>
            <img 
              src="https://framerusercontent.com/images/pyTZywrvpdVUJFB5qfxTLGM60.png" 
              alt="Formula"
              className="w-full rounded-lg"
            />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="mb-12">
            <h3 className="text-xl font-medium mb-4">Component Field Links</h3>
            <p className="text-muted-foreground mb-6">
              Linked records connect tokens to their parent components, enabling dependency tracking.
            </p>
            <img 
              src="https://framerusercontent.com/images/TMyFjlvD124m6yFfApgm7caw.png" 
              alt="Component Field"
              className="w-full rounded-lg"
            />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="mb-8">
            <h3 className="text-xl font-medium mb-4">Primitive Field Links</h3>
            <p className="text-muted-foreground mb-6">
              Semantic tokens link back to primitive values, creating a traceable hierarchy.
            </p>
            <img 
              src="https://framerusercontent.com/images/PmxUSBW5z2kthjQwoak0iLPyCOg.png" 
              alt="Primitive Field"
              className="w-full rounded-lg"
            />
          </div>
        </ScrollReveal>
      </section>

      {/* Lessons & Next Steps */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <ScrollReveal>
          <h2 className="text-2xl font-medium mb-8">Lessons & Next Steps</h2>
        </ScrollReveal>
        
        <div className="grid md:grid-cols-2 gap-8">
          <ScrollReveal delay={0.1}>
            <div>
              <h3 className="text-foreground font-medium mb-4">Key Takeaways</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Naming conventions prevent chaos at scale</li>
                <li>• Formulas reduce human error</li>
                <li>• Linked tables enable powerful queries</li>
                <li>• Documentation embedded in the system itself</li>
              </ul>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <div>
              <h3 className="text-foreground font-medium mb-4">What's Next</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Automated sync to Figma variables</li>
                <li>• Export scripts for CSS/JSON tokens</li>
                <li>• Version history and rollback support</li>
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Navigation */}
      <section className="max-w-4xl mx-auto px-6 py-12 border-t border-border">
        <ScrollReveal>
          <div className="flex justify-between items-center">
            <Link 
              to="/case-studies/component-docs" 
              className="text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Previous: Component Docs
            </Link>
            <Link 
              to="/case-studies" 
              className="text-primary hover:underline inline-flex items-center gap-2"
            >
              All Case Studies
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
};

export default TokenAirtableCaseStudy;
