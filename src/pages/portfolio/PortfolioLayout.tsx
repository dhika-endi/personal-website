import { useState, useEffect } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import { Home, Briefcase, User, Mail, BookOpen, FileText, ExternalLink, Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import dhikaAvatar from "@/assets/dhika-avatar.png";

const navItems = [
  { label: "Home", href: "/", icon: Home },
  { label: "Case Studies", href: "/case-studies", icon: Briefcase },
  { label: "About", href: "/about", icon: User },
  { label: "Contact", href: "/contact", icon: Mail },
];

const PortfolioLayout = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const socialLinks = [
    { 
      name: "X", 
      href: "https://x.com/dhikaendi",
      icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
    },
    { 
      name: "LinkedIn", 
      href: "https://www.linkedin.com/in/dhika-endi-astowo-7a10861b6/",
      icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"/></svg>
    },
    { 
      name: "Dribbble", 
      href: "https://dribbble.com/dhikaendiastowo",
      icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.424 25.424 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.814 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.686 8.686 0 0112 3.475zm-3.633.803a53.903 53.903 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.309 35.309 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.66-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.654 5.715z"/></svg>
    },
    { 
      name: "Upwork", 
      href: "https://www.upwork.com/freelancers/~01e7f13035f51ae5ca",
      icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.548-1.405-.002-2.543-1.143-2.545-2.548V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z"/></svg>
    },
  ];

  return (
    <div className="min-h-screen bg-background flex">
      {/* Global Grid Background */}
      <div 
        className="fixed inset-0 lg:left-64 opacity-20 pointer-events-none z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, hsl(var(--border)) 1px, transparent 1px),
            linear-gradient(to bottom, hsl(var(--border)) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}
      />
      
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 h-screen w-64 glass-sidebar overflow-y-auto z-50 hidden lg:block">
        <div className="p-6 border-b border-border-glass/50">
          <Link to="/" className="flex items-center gap-3 group">
            <img 
              src={dhikaAvatar} 
              alt="Dhika" 
              className="w-10 h-10 rounded-lg object-cover"
            />
            <div>
              <h1 className="text-lg font-semibold text-foreground tracking-tight group-hover:text-primary transition-colors">
                Dhika Endi Astowo
              </h1>
              <p className="text-xs text-foreground-muted mt-0.5">Design System Designer</p>
            </div>
          </Link>
        </div>

        <nav className="p-4 space-y-1">
          {navItems.map((item) => {
            const isActive = location.pathname === item.href || 
              (item.href !== "/" && location.pathname.startsWith(item.href));
            const Icon = item.icon;
            return (
              <Link
                key={item.label}
                to={item.href}
                className={`nav-link flex items-center gap-2 ${isActive ? "nav-link-active" : ""}`}
              >
                <Icon className="w-4 h-4" />
                {item.label}
              </Link>
            );
          })}
          
          {/* Design System - opens in new tab */}
          <a
            href="/design-system"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link flex items-center gap-2"
          >
            <BookOpen className="w-4 h-4" />
            Dhika Design System
            <ExternalLink className="w-3 h-3 ml-auto" />
          </a>
          
          {/* Articles external link */}
          <a
            href="https://medium.com/@ui.dhika"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link flex items-center gap-2"
          >
            <FileText className="w-4 h-4" />
            Articles
            <ExternalLink className="w-3 h-3 ml-auto" />
          </a>
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-border-glass/50">
          <p className="text-foreground mb-2">ui.dhika@gmail.com</p>
          <div className="flex items-center gap-4 mb-4">
            {socialLinks.map((social) => (
              <a 
                key={social.name}
                href={social.href} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-link text-foreground-muted"
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
          <p className="text-xs text-foreground-muted">2025</p>
        </div>
      </aside>

      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-background-surface/80 backdrop-blur-lg border-b border-border-glass">
        <div className="flex items-center gap-3 p-4">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-foreground-muted hover:text-foreground transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
          <Link to="/" className="flex items-center gap-2">
            <img 
              src={dhikaAvatar} 
              alt="Dhika" 
              className="w-8 h-8 rounded-lg object-cover"
            />
            <span className="text-lg font-semibold text-foreground">Dhika</span>
          </Link>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="lg:hidden fixed inset-0 z-40 bg-background/80 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.aside
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="lg:hidden fixed left-0 top-0 h-screen w-64 glass-sidebar overflow-y-auto z-50"
          >
            <div className="p-6 border-b border-border-glass/50">
              <Link to="/" onClick={() => setMobileMenuOpen(false)} className="block group">
                <h1 className="text-lg font-semibold text-foreground tracking-tight group-hover:text-primary transition-colors">
                  Dhika Endi Astowo
                </h1>
                <p className="text-xs text-foreground-muted mt-0.5">Design System Designer</p>
              </Link>
            </div>

            <nav className="p-4 space-y-1">
              {navItems.map((item) => {
                const isActive = location.pathname === item.href || 
                  (item.href !== "/" && location.pathname.startsWith(item.href));
                const Icon = item.icon;
                return (
                  <Link
                    key={item.label}
                    to={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`nav-link flex items-center gap-2 ${isActive ? "nav-link-active" : ""}`}
                  >
                    <Icon className="w-4 h-4" />
                    {item.label}
                  </Link>
                );
              })}
              
              {/* Design System - opens in new tab */}
              <a
                href="/design-system"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-link flex items-center gap-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                <BookOpen className="w-4 h-4" />
                Dhika Design System
                <ExternalLink className="w-3 h-3 ml-auto" />
              </a>
              
              {/* Articles external link */}
              <a
                href="https://medium.com/@ui.dhika"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-link flex items-center gap-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                <FileText className="w-4 h-4" />
                Articles
                <ExternalLink className="w-3 h-3 ml-auto" />
              </a>
            </nav>

            <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-border-glass/50">
              <p className="text-foreground mb-2">ui.dhika@gmail.com</p>
              <div className="flex items-center gap-4 mb-4">
                {socialLinks.map((social) => (
                  <a 
                    key={social.name}
                    href={social.href} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="social-link text-foreground-muted"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
              <p className="text-xs text-foreground-muted">2025</p>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="flex-1 lg:ml-64 pt-16 lg:pt-0 relative z-10">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        >
          <Outlet />
        </motion.div>
      </main>
    </div>
  );
};

export default PortfolioLayout;
