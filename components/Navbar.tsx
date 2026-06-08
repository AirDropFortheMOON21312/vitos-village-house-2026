"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

interface NavbarProps {
  lang: "en" | "gr";
  setLang: (lang: "en" | "gr") => void;
}

const content = {
  en: {
    links: [
      { label: "About", href: "#about" },
      { label: "Amenities", href: "#amenities" },
      { label: "Gallery", href: "#gallery" },
      { label: "Prices", href: "#pricing" },
      { label: "Reviews", href: "#reviews" },
      { label: "Location", href: "#location" },
      { label: "FAQ", href: "#faq" },
    ],
    bookNow: "Book Now",
    toggleLabel: "ΕΛ",
  },
  gr: {
    links: [
      { label: "Σχετικά", href: "#about" },
      { label: "Παροχές", href: "#amenities" },
      { label: "Γκαλερί", href: "#gallery" },
      { label: "Τιμές", href: "#pricing" },
      { label: "Κριτικές", href: "#reviews" },
      { label: "Τοποθεσία", href: "#location" },
      { label: "FAQ", href: "#faq" },
    ],
    bookNow: "Κράτηση",
    toggleLabel: "EN",
  },
};

export default function Navbar({ lang, setLang }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const c = content[lang];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-3 group"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold font-serif transition-colors duration-300 ${
                scrolled
                  ? "bg-olive-700 text-white"
                  : "bg-white/20 text-white border border-white/40"
              }`}
            >
              VH
            </div>
            <span
              className={`font-serif font-semibold text-lg transition-colors duration-300 ${
                scrolled ? "text-gray-900" : "text-white"
              }`}
            >
              Vito&apos;s Village House
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {c.links.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${
                  scrolled
                    ? "text-gray-700 hover:text-olive-700 hover:bg-olive-50"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-2 lg:gap-3">
            <button
              onClick={() => setLang(lang === "en" ? "gr" : "en")}
              className={`hidden sm:flex items-center gap-1 px-3 py-1.5 text-xs font-semibold rounded-full border transition-all duration-200 ${
                scrolled
                  ? "border-gray-300 text-gray-600 hover:border-olive-500 hover:text-olive-700"
                  : "border-white/40 text-white/80 hover:border-white hover:text-white"
              }`}
            >
              {c.toggleLabel}
            </button>
            <a
              href="https://www.booking.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center px-4 py-2 text-sm font-semibold text-white bg-terra-500 hover:bg-terra-600 rounded-full transition-colors duration-200"
            >
              {c.bookNow}
            </a>
            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors duration-200 ${
                scrolled
                  ? "text-gray-700 hover:bg-gray-100"
                  : "text-white hover:bg-white/10"
              }`}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          mobileOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white/98 backdrop-blur-md border-t border-gray-100 px-4 py-4 space-y-1">
          {c.links.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="w-full text-left px-4 py-3 text-sm font-medium text-gray-700 hover:text-olive-700 hover:bg-olive-50 rounded-lg transition-colors duration-200"
            >
              {link.label}
            </button>
          ))}
          <div className="pt-3 border-t border-gray-100 flex items-center gap-3">
            <button
              onClick={() => {
                setLang(lang === "en" ? "gr" : "en");
                setMobileOpen(false);
              }}
              className="flex-1 px-3 py-2 text-sm font-semibold border border-gray-300 text-gray-600 hover:border-olive-500 hover:text-olive-700 rounded-full transition-colors duration-200"
            >
              {c.toggleLabel}
            </button>
            <a
              href="https://www.booking.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center px-4 py-2 text-sm font-semibold text-white bg-terra-500 hover:bg-terra-600 rounded-full transition-colors duration-200"
              onClick={() => setMobileOpen(false)}
            >
              {c.bookNow}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
