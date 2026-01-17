import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

const PortfolioContact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Message from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    window.location.href = `mailto:ui.dhika@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-12 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 max-w-2xl mx-auto">
          <ScrollReveal>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-foreground mb-8 md:mb-16">
              Get in touch.
            </h1>
          </ScrollReveal>

          <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
            <ScrollReveal delay={0.1}>
              <div className="space-y-2">
                <Label htmlFor="name" className="sr-only">Your name</Label>
                <Input
                  id="name"
                  placeholder="Your name *"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="bg-transparent border-0 border-b border-border-glass rounded-none px-0 py-3 md:py-4 text-base md:text-lg focus:ring-0 focus:border-border-glass placeholder:text-foreground-muted"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="space-y-2">
                <Label htmlFor="email" className="sr-only">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Email *"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="bg-transparent border-0 border-b border-border-glass rounded-none px-0 py-3 md:py-4 text-base md:text-lg focus:ring-0 focus:border-border-glass placeholder:text-foreground-muted"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="space-y-2">
                <Label htmlFor="message" className="sr-only">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Enter your message..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className="bg-transparent border-0 border-b border-border-glass rounded-none px-0 py-3 md:py-4 text-base md:text-lg focus:ring-0 focus:border-border-glass placeholder:text-foreground-muted resize-none"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <Button type="submit" className="w-full group">
                Send request
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Button>
            </ScrollReveal>
          </form>
        </div>
      </section>
    </div>
  );
};

export default PortfolioContact;
