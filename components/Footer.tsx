"use client";

import { Mail, Instagram, ExternalLink, MapPin } from "lucide-react";

interface FooterProps {
  lang: "en" | "gr";
}

const content = {
  en: {
    tagline:
      "A lovingly restored Corfiot home in Agios Matthaios, southern Corfu. Your authentic Greek village retreat.",
    quickLinks: "Quick Links",
    links: [
      { label: "About", href: "#about" },
      { label: "Amenities", href: "#amenities" },
      { label: "Gallery", href: "#gallery" },
      { label: "Prices", href: "#pricing" },
      { label: "Reviews", href: "#reviews" },
      { label: "Location", href: "#location" },
      { label: "FAQ", href: "#faq" },
    ],
    contactTitle: "Contact",
    emailLabel: "vitosvillagehouse@gmail.com",
    instagramLabel: "@vitosvillagehouse",
    addressLabel: "Agios Matthaios, Corfu 49084",
    copyright: "© 2026 Vito's Village House · Agios Matthaios, Corfu",
    madeWith: "Made with ♥ in Greece",
  },
  gr: {
    tagline:
      "Ένα αγαπημένο κερκυραϊκό σπίτι στον Άγιο Ματθαίο, νότια Κέρκυρα. Η αυθεντική ελληνική καταφυγή σας.",
    quickLinks: "Γρήγοροι Σύνδεσμοι",
    links: [
      { label: "Σχετικά", href: "#about" },
      { label: "Παροχές", href: "#amenities" },
      { label: "Γκαλερί", href: "#gallery" },
      { label: "Τιμές", href: "#pricing" },
      { label: "Κριτικές", href: "#reviews" },
      { label: "Τοποθεσία", href: "#location" },
      { label: "FAQ", href: "#faq" },
    ],
    contactTitle: "Επικοινωνία",
    emailLabel: "vitosvillagehouse@gmail.com",
    instagramLabel: "@vitosvillagehouse",
    addressLabel: "Άγιος Ματθαίος, Κέρκυρα 49084",
    copyright: "© 2026 Vito's Village House · Άγιος Ματθαίος, Κέρκυρα",
    madeWith: "Φτιαγμένο με ♥ στην Ελλάδα",
  },
};

export default function Footer({ lang }: FooterProps) {
  const c = content[lang];

  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Col 1: Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-full bg-olive-700 flex items-center justify-center text-sm font-bold font-serif text-white">
                VH
              </div>
              <span className="font-serif font-semibold text-lg">
                Vito&apos;s Village House
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">{c.tagline}</p>
            <div className="flex gap-3">
              <a
                href="mailto:vitosvillagehouse@gmail.com"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/20 transition-all duration-200"
                aria-label="Email"
              >
                <Mail size={16} />
              </a>
              <a
                href="https://www.instagram.com/vitosvillagehouse"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/20 transition-all duration-200"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://www.booking.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/20 transition-all duration-200"
                aria-label="Booking.com"
              >
                <ExternalLink size={16} />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-widest text-gray-400 mb-5">
              {c.quickLinks}
            </h4>
            <ul className="space-y-2.5">
              {c.links.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-widest text-gray-400 mb-5">
              {c.contactTitle}
            </h4>
            <div className="space-y-4">
              <a
                href="mailto:vitosvillagehouse@gmail.com"
                className="flex items-center gap-3 text-gray-400 hover:text-white text-sm transition-colors duration-200"
              >
                <Mail size={15} className="text-terra-400 flex-shrink-0" />
                {c.emailLabel}
              </a>
              <a
                href="https://www.instagram.com/vitosvillagehouse"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-400 hover:text-white text-sm transition-colors duration-200"
              >
                <Instagram size={15} className="text-terra-400 flex-shrink-0" />
                {c.instagramLabel}
              </a>
              <div className="flex items-center gap-3 text-gray-500 text-sm">
                <MapPin size={15} className="text-terra-400 flex-shrink-0" />
                {c.addressLabel}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-gray-500 text-xs">{c.copyright}</span>
          <span className="text-gray-600 text-xs">{c.madeWith}</span>
        </div>
      </div>
    </footer>
  );
}
