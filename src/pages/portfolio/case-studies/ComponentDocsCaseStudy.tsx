import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

const ComponentDocsCaseStudy = () => {
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
            Building Component Docs for Teams, Not Just Systems.
          </h1>
        </ScrollReveal>
        <ScrollReveal delay={0.1} variant="scale">
          <img 
            src="https://framerusercontent.com/images/X7hb9IXO4Js8k9twWCKn5eWYzw.png" 
            alt="Component Documentation Hero"
            className="w-full rounded-lg"
          />
        </ScrollReveal>
      </section>

      {/* Introduction */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-8 md:py-12">
        <ScrollReveal>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Good documentation doesn't just describe components—it shows teams how to use them correctly. 
            Using Button as an example, this case study walks through a documentation structure that covers 
            anatomy, variants, states, behaviors, best practices, and responsive guidelines.
          </p>
        </ScrollReveal>
      </section>

      {/* Benefits Section */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <ScrollReveal>
          <h2 className="text-2xl font-medium mb-8">Who Benefits?</h2>
        </ScrollReveal>
        
        <div className="grid md:grid-cols-3 gap-8">
          <ScrollReveal delay={0.1}>
            <div>
              <h3 className="text-foreground font-medium mb-4">For Product Teams</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Faster design-to-dev handoff</li>
                <li>• Consistent user experience</li>
                <li>• Reduced back-and-forth on specs</li>
              </ul>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <div>
              <h3 className="text-foreground font-medium mb-4">For Developers</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Copy-paste code snippets</li>
                <li>• Clear prop definitions</li>
                <li>• Accessibility baked in</li>
              </ul>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div>
              <h3 className="text-foreground font-medium mb-4">For Everyone</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Single source of truth</li>
                <li>• Searchable reference</li>
                <li>• Living documentation</li>
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Documentation Structure */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <ScrollReveal>
          <h2 className="text-2xl font-medium mb-6">Documentation Structure</h2>
          <p className="text-muted-foreground mb-6">
            Each component page follows a consistent structure with these sections:
          </p>
          <ol className="grid md:grid-cols-3 gap-4 text-muted-foreground">
            <li className="flex gap-2"><span className="text-primary font-mono">01.</span> Overview</li>
            <li className="flex gap-2"><span className="text-primary font-mono">02.</span> Anatomy</li>
            <li className="flex gap-2"><span className="text-primary font-mono">03.</span> Variants</li>
            <li className="flex gap-2"><span className="text-primary font-mono">04.</span> States</li>
            <li className="flex gap-2"><span className="text-primary font-mono">05.</span> Behavior</li>
            <li className="flex gap-2"><span className="text-primary font-mono">06.</span> Best Practices</li>
            <li className="flex gap-2"><span className="text-primary font-mono">07.</span> Do and Don't</li>
            <li className="flex gap-2"><span className="text-primary font-mono">08.</span> Responsive</li>
            <li className="flex gap-2"><span className="text-primary font-mono">09.</span> Changelog</li>
          </ol>
        </ScrollReveal>
      </section>

      {/* Anatomy Section */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <ScrollReveal>
          <h2 className="text-2xl font-medium mb-6">Anatomy</h2>
          <p className="text-muted-foreground mb-6">
            Anatomy diagrams break down each component into its constituent parts. For Button, 
            we identify three key elements:
          </p>
          <ul className="space-y-2 text-muted-foreground mb-8">
            <li className="flex gap-2"><span className="text-primary font-mono">1.</span> Left Icon (optional)</li>
            <li className="flex gap-2"><span className="text-primary font-mono">2.</span> Label (required)</li>
            <li className="flex gap-2"><span className="text-primary font-mono">3.</span> Right Icon (optional)</li>
          </ul>
        </ScrollReveal>
        <ScrollReveal delay={0.1} variant="scale">
          <img 
            src="https://framerusercontent.com/images/rhTh3AnqW4fp6LjEF3FnONzE.png" 
            alt="Button Anatomy"
            className="w-full rounded-lg"
          />
        </ScrollReveal>
      </section>

      {/* Variants Section */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <ScrollReveal>
          <h2 className="text-2xl font-medium mb-8">Variants</h2>
        </ScrollReveal>
        
        <ScrollReveal delay={0.1}>
          <div className="mb-12">
            <h3 className="text-xl font-medium mb-4">Size Variants</h3>
            <p className="text-muted-foreground mb-6">
              Size variants control the button's height, padding, and font size. Common sizes include 
              Small, Medium, and Large, each suited for different contexts.
            </p>
            <img 
              src="https://framerusercontent.com/images/V1ajeLGqdoMw7JM7Ob7dLyZ6PNk.png" 
              alt="Size Variants"
              className="w-full rounded-lg"
            />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="mb-8">
            <h3 className="text-xl font-medium mb-4">Type Variants</h3>
            <p className="text-muted-foreground mb-6">
              Type variants communicate visual emphasis. Primary buttons drive main actions, 
              Secondary buttons support alternatives, and Ghost buttons offer minimal visual weight.
            </p>
            <img 
              src="https://framerusercontent.com/images/PDNqcOZHQTzCGMJ4x7HFk9SdE.png" 
              alt="Type Variants"
              className="w-full rounded-lg"
            />
          </div>
        </ScrollReveal>
      </section>

      {/* States Section */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <ScrollReveal>
          <h2 className="text-2xl font-medium mb-6">States</h2>
          <p className="text-muted-foreground mb-6">
            Every interactive component needs clearly defined states. Button states include:
          </p>
          <ul className="space-y-2 text-muted-foreground mb-8">
            <li><strong className="text-foreground">Default:</strong> Resting appearance</li>
            <li><strong className="text-foreground">Hover:</strong> Mouse-over feedback</li>
            <li><strong className="text-foreground">Pressed:</strong> Active/click state</li>
            <li><strong className="text-foreground">Focused:</strong> Keyboard navigation indicator</li>
            <li><strong className="text-foreground">Disabled:</strong> Non-interactive state</li>
          </ul>
        </ScrollReveal>
        <ScrollReveal delay={0.1} variant="scale">
          <img 
            src="https://framerusercontent.com/images/r4Za8xsK0bFtpSVTpQO2NgmWwI.png" 
            alt="Button States"
            className="w-full rounded-lg"
          />
        </ScrollReveal>
      </section>

      {/* Behavior Section */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <ScrollReveal>
          <h2 className="text-2xl font-medium mb-8">Behavior</h2>
        </ScrollReveal>
        
        <ScrollReveal delay={0.1}>
          <div className="mb-12">
            <h3 className="text-xl font-medium mb-4">Size Behavior</h3>
            <p className="text-muted-foreground mb-6">
              Documents how button dimensions respond to content and container changes.
            </p>
            <img 
              src="https://framerusercontent.com/images/H7sE7ahxIfBYxaAYerf4yFaCVA.png" 
              alt="Size Behavior"
              className="w-full rounded-lg"
            />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="mb-8">
            <h3 className="text-xl font-medium mb-4">Type Behavior</h3>
            <p className="text-muted-foreground mb-6">
              Explains how different button types should be combined and when to use each.
            </p>
            <img 
              src="https://framerusercontent.com/images/qWa9MXlsFLebk7VvC7xZ3D5amas.png" 
              alt="Type Behavior"
              className="w-full rounded-lg"
            />
          </div>
        </ScrollReveal>
      </section>

      {/* Best Practices */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <ScrollReveal>
          <h2 className="text-2xl font-medium mb-6">Best Practices</h2>
          <p className="text-muted-foreground mb-8">
            General guidelines for using buttons effectively in interfaces.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.1} variant="scale">
          <img 
            src="https://framerusercontent.com/images/Wur7C3ZEmH2kY0O2KVqRQp12Eo.png" 
            alt="Best Practices"
            className="w-full rounded-lg"
          />
        </ScrollReveal>
      </section>

      {/* Do and Don't Section */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <ScrollReveal>
          <h2 className="text-2xl font-medium mb-8">Do and Don't</h2>
        </ScrollReveal>
        
        <ScrollReveal delay={0.1}>
          <div className="mb-12">
            <h3 className="text-xl font-medium mb-4">Visual Hierarchy</h3>
            <p className="text-muted-foreground mb-6">
              Ensure proper emphasis levels when multiple buttons appear together.
            </p>
            <img 
              src="https://framerusercontent.com/images/gJMaZjX82pXDmx4lizqDnrH934.png" 
              alt="Visual Hierarchy"
              className="w-full rounded-lg"
            />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="mb-12">
            <h3 className="text-xl font-medium mb-4">Label Length & Proportion</h3>
            <p className="text-muted-foreground mb-6">
              Keep labels concise and maintain balanced proportions.
            </p>
            <img 
              src="https://framerusercontent.com/images/owiPveP0xO3uqkF9KIib3sHRCUs.png" 
              alt="Label Length"
              className="w-full rounded-lg"
            />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="mb-12">
            <h3 className="text-xl font-medium mb-4">Line Breaks</h3>
            <p className="text-muted-foreground mb-6">
              Avoid multi-line button labels for better readability.
            </p>
            <img 
              src="https://framerusercontent.com/images/20AeuIGMgNGCiTuWYlmzF5pfPC0.png" 
              alt="Line Breaks"
              className="w-full rounded-lg"
            />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.25}>
          <div className="mb-8">
            <h3 className="text-xl font-medium mb-4">Icon Usage</h3>
            <p className="text-muted-foreground mb-6">
              Use icons purposefully to enhance meaning, not for decoration.
            </p>
            <img 
              src="https://framerusercontent.com/images/N5FLJ1kSWJYwokjeU0BoBduroU.png" 
              alt="Icon Usage"
              className="w-full rounded-lg"
            />
          </div>
        </ScrollReveal>
      </section>

      {/* Responsive Section */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <ScrollReveal>
          <h2 className="text-2xl font-medium mb-6">Responsive Guidelines</h2>
          <p className="text-muted-foreground mb-4">
            Buttons adapt to different screen sizes with these considerations:
          </p>
          <ul className="space-y-2 text-muted-foreground mb-8">
            <li><strong className="text-foreground">Layout & Size:</strong> Adjust button size and spacing for touch targets on mobile.</li>
            <li><strong className="text-foreground">Full-width Buttons:</strong> Use sparingly and only when appropriate for the context.</li>
            <li><strong className="text-foreground">Text Wrapping:</strong> Prevent label overflow by keeping text short.</li>
          </ul>
        </ScrollReveal>
        <ScrollReveal delay={0.1} variant="scale">
          <img 
            src="https://framerusercontent.com/images/XGB5UCZT4BjsFBrMg4IubptM.png" 
            alt="Responsive Guidelines"
            className="w-full rounded-lg"
          />
        </ScrollReveal>
      </section>

      {/* Changelog Section */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <ScrollReveal>
          <h2 className="text-2xl font-medium mb-6">Changelog</h2>
          <p className="text-muted-foreground">
            Every component includes a changelog tracking version history, breaking changes, 
            new features, and bug fixes. This helps teams stay updated and plan migrations.
          </p>
        </ScrollReveal>
      </section>

      {/* Navigation */}
      <section className="max-w-4xl mx-auto px-6 py-12 border-t border-border">
        <ScrollReveal>
          <div className="flex justify-between items-center">
            <Link 
              to="/case-studies/design-system" 
              className="text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Previous: Design System
            </Link>
            <Link 
              to="/case-studies/token-airtable" 
              className="text-primary hover:underline inline-flex items-center gap-2"
            >
              Next: Token Airtable
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
};

export default ComponentDocsCaseStudy;
