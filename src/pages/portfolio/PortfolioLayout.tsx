import { useEffect, useState } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import { ExternalLink, Menu, X } from "lucide-react";
import dhikaAvatar from "@/assets/dhika-avatar.png";

const navItems = [
  { label: "Home",         href: "/",              image: dhikaAvatar },
  { label: "Case Studies", href: "/case-studies",  image: "https://framerusercontent.com/images/wBhT6nI0uuP1WMsAQy26KTa6hQ.png?width=2678&height=1402" },
  { label: "Playground",   href: "/playground",    image: dhikaAvatar },
  { label: "About",        href: "/about",         image: dhikaAvatar },
  { label: "Contact",      href: "/contact",       image: dhikaAvatar },
];

const externalNavItems = [
  { label: "Asto DS",  href: "https://asto-design-system.vercel.app/", image: "https://framerusercontent.com/images/wBhT6nI0uuP1WMsAQy26KTa6hQ.png?width=2678&height=1402" },
  { label: "Articles", href: "https://medium.com/@ui.dhika",           image: "https://framerusercontent.com/images/lb8MITml3e70gW6qyEIiNT6ucs.png?width=2678&height=1402" },
];

const socialLinks = [
  {
    name: "X",
    href: "https://x.com/dhikaendi",
    icon: (
      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/dhika-endi-astowo-7a10861b6/",
    icon: (
      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
      </svg>
    ),
  },
  {
    name: "Dribbble",
    href: "https://dribbble.com/dhikaendiastowo",
    icon: (
      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.424 25.424 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.814 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.686 8.686 0 0112 3.475zm-3.633.803a53.903 53.903 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.309 35.309 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.66-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.654 5.715z" />
      </svg>
    ),
  },
  {
    name: "Upwork",
    href: "https://www.upwork.com/freelancers/~01e7f13035f51ae5ca",
    icon: (
      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.548-1.405-.002-2.543-1.143-2.545-2.548V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z" />
      </svg>
    ),
  },
];

const PortfolioLayout = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileMenuOpen]);

  return (
    <div className="min-h-screen bg-[#fafafa] overflow-x-hidden">

      {/* ── NAVBAR ── */}
      <header
        className="fixed top-0 left-0 right-0 z-50 bg-[#fafafa] border-b border-[#e8e8e8]"
        style={{ animation: "slideInLeft .5s ease both" }}
      >
        <div className="max-w-[1440px] mx-auto flex items-center h-14 px-8 gap-6 max-[640px]:px-4 max-[640px]:gap-3">

          {/* Logo: avatar + name */}
          <Link
            to="/"
            className="flex items-center gap-2.5 no-underline flex-shrink-0 group"
          >
            <img
              src={dhikaAvatar}
              alt="Dhika"
              className="w-6 h-6 rounded object-cover opacity-60 group-hover:opacity-90 transition-opacity"
            />
            <span className="font-grotesk font-normal text-[0.9rem] text-[#1c1916] leading-none">
              Dhika
            </span>
            <span className="font-grotesk font-normal text-[0.9rem] text-[#b0aba3] leading-none">
              Endi Astowo
            </span>
          </Link>

          {/* Divider */}
          <div className="w-px h-4 bg-[#e8e8e8] flex-shrink-0" />

          {/* Internal nav */}
          <nav className="flex items-center gap-1 max-[640px]:hidden">
            {navItems.slice(1).map((item) => {
              const isActive =
                location.pathname === item.href ||
                (item.href !== "/" && location.pathname.startsWith(item.href));
              return (
                <Link
                  key={item.label}
                  to={item.href}
                  className={`font-mono text-[0.72rem] tracking-[0.03em] px-3 py-1.5 rounded-sm transition-colors no-underline ${
                    isActive ? "text-[#1c1916]" : "text-[#b0aba3] hover:text-[#6e6a62]"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Divider */}
          <div className="w-px h-4 bg-[#e8e8e8] flex-shrink-0 max-[640px]:hidden" />

          {/* External links */}
          <div className="flex items-center gap-1 max-[640px]:hidden">
            {externalNavItems.map((item, i) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 font-mono text-[0.72rem] tracking-[0.03em] px-3 py-1.5 text-[#b0aba3] hover:text-[#6e6a62] transition-colors no-underline"
              >
                {item.label}
                <ExternalLink className="w-2.5 h-2.5" />
              </a>
            ))}
          </div>

          {/* Spacer */}
          <div className="flex-1" />

          {/* Social icons + status */}
          <div className="flex items-center gap-3 max-[640px]:gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#b0aba3] hover:text-[#6e6a62] transition-colors"
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
            <div className="w-px h-4 bg-[#e8e8e8] mx-1 max-[640px]:hidden" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#5a9e6f] flex-shrink-0 max-[640px]:hidden"
              style={{ animation: "statusPulse 2.5s ease-in-out infinite" }}
            />
            <span className="font-mono text-[0.56rem] text-[#b0aba3] max-[640px]:hidden">
              ui.dhika@gmail.com
            </span>
          </div>

          {/* Burger button — mobile only */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="hidden max-[640px]:flex items-center justify-center p-1.5 ml-1 text-[#b0aba3] hover:text-[#6e6a62] transition-colors"
            aria-label="Open menu"
          >
            <Menu className="w-4 h-4" />
          </button>
        </div>
      </header>

      {/* ── MOBILE DRAWER ── */}
      <div
        className={`fixed inset-0 z-[999] transition-opacity duration-300 ${
          mobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/30"
          onClick={() => setMobileMenuOpen(false)}
        />

        {/* Panel */}
        <div
          className={`absolute left-0 top-0 h-full w-[260px] bg-[#fafafa] border-r border-[#e8e8e8] flex flex-col transition-transform duration-300 ease-out ${
            mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* Header */}
          <div className="flex items-center justify-between h-14 px-5 border-b border-[#e8e8e8] shrink-0">
            <span className="font-grotesk text-[0.85rem] text-[#1c1916]">Menu</span>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-1.5 text-[#b0aba3] hover:text-[#6e6a62] transition-colors"
              aria-label="Close menu"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Nav links */}
          <nav className="flex flex-col p-3 gap-1">
            {navItems.map((item) => {
              const isActive =
                location.pathname === item.href ||
                (item.href !== "/" && location.pathname.startsWith(item.href));
              return (
                <Link
                  key={item.label}
                  to={item.href}
                  className={`font-mono text-[0.78rem] tracking-[0.03em] px-4 py-3 rounded transition-colors no-underline ${
                    isActive
                      ? "text-[#1c1916] bg-[#f0f0f0]"
                      : "text-[#6e6a62] hover:text-[#1c1916] hover:bg-[#f0f0f0]"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}

            <div className="h-px bg-[#e8e8e8] my-1" />

            {externalNavItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-mono text-[0.78rem] tracking-[0.03em] px-4 py-3 rounded text-[#6e6a62] hover:text-[#1c1916] hover:bg-[#f0f0f0] transition-colors no-underline"
              >
                {item.label}
                <ExternalLink className="w-2.5 h-2.5" />
              </a>
            ))}

            <div className="h-px bg-[#e8e8e8] my-1" />

            <div className="flex items-center gap-2 px-4 py-3">
              <div className="w-1.5 h-1.5 rounded-full bg-[#5a9e6f] flex-shrink-0"
                style={{ animation: "statusPulse 2.5s ease-in-out infinite" }}
              />
              <span className="font-mono text-[0.62rem] text-[#b0aba3]">ui.dhika@gmail.com</span>
            </div>
          </nav>
        </div>
      </div>

      {/* ── CONTENT ── */}
      <main className="pt-14" style={{ animation: "fadeUp .5s .1s ease both" }}>
        <Outlet />
      </main>

    </div>
  );
};

export default PortfolioLayout;
