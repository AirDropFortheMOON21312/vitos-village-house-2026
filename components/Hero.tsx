"use client";

import { motion } from "framer-motion";
import { MapPin, Home, Users, Star, ChevronDown, ExternalLink } from "lucide-react";

interface HeroProps {
  lang: "en" | "gr";
}

const content = {
  en: {
    badge: "Agios Matthaios, Corfu, Greece",
    tagline: "Authentic Greek Village Living",
    title: "Vito's Village",
    titleItalic: "House",
    subtitle:
      "A lovingly restored Corfiot home nestled among olive groves, 3km from pristine beaches. Your peaceful retreat in southern Corfu.",
    bookBtn: "Book on Booking.com",
    exploreBtn: "Explore the House",
    stats: [
      { label: "79m² House", icon: "home" },
      { label: "4 Guests", icon: "users" },
      { label: "9.1 / 10 Rating", icon: "star" },
      { label: "3.1km to Beach", icon: "map" },
    ],
  },
  gr: {
    badge: "Άγιος Ματθαίος, Κέρκυρα, Ελλάδα",
    tagline: "Αυθεντική Ελληνική Αγροτική Ζωή",
    title: "Το Σπίτι του",
    titleItalic: "Βίτο",
    subtitle:
      "Ένα αγαπημένο κερκυραϊκό σπίτι ανάμεσα σε ελαιώνες, 3χλμ από παρθένες παραλίες. Η ήρεμη σας καταφυγή στη νότια Κέρκυρα.",
    bookBtn: "Κράτηση στο Booking.com",
    exploreBtn: "Εξερευνήστε το Σπίτι",
    stats: [
      { label: "79τ.μ. Σπίτι", icon: "home" },
      { label: "4 Επισκέπτες", icon: "users" },
      { label: "Βαθμολογία 9.1", icon: "star" },
      { label: "3.1χλμ Παραλία", icon: "map" },
    ],
  },
};

const IconComponent = ({ type }: { type: string }) => {
  const cls = "w-5 h-5 text-azure-300";
  switch (type) {
    case "home": return <Home className={cls} />;
    case "users": return <Users className={cls} />;
    case "star": return <Star className={cls} />;
    case "map": return <MapPin className={cls} />;
    default: return null;
  }
};

export default function Hero({ lang }: HeroProps) {
  const c = content[lang];

  return (
    <section
      className="relative min-h-screen flex flex-col"
      style={{
        background:
          "linear-gradient(160deg, #0a1628 0%, #0d2137 25%, #1a4a6b 55%, #2a6b4f 80%, #1e4d2b 100%)",
      }}
    >
      {/* Dot grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.10) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Radial colour overlays */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 80% 110%, rgba(196,105,58,0.25) 0%, transparent 55%), radial-gradient(ellipse at 10% 10%, rgba(59,152,246,0.18) 0%, transparent 50%)",
        }}
      />

      {/* Main content */}
      <div className="relative flex-1 flex items-center justify-center px-4 py-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Location badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white/80 text-sm font-medium mb-6 backdrop-blur-sm"
          >
            <MapPin size={14} className="text-terra-300" />
            {c.badge}
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-terra-300 text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] mb-4"
          >
            {c.tagline}
          </motion.p>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white leading-tight mb-6"
          >
            {c.title}{" "}
            <span className="italic text-azure-300">{c.titleItalic}</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="text-white/70 text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10"
          >
            {c.subtitle}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href="https://www.booking.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-terra-500 hover:bg-terra-600 text-white font-semibold rounded-full transition-all duration-200 shadow-lg hover:shadow-terra-500/30 hover:scale-105"
            >
              <ExternalLink size={16} />
              {c.bookBtn}
            </a>
            <button
              onClick={() => {
                const el = document.querySelector("#about");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-full border border-white/30 hover:border-white/50 transition-all duration-200 backdrop-blur-sm"
            >
              {c.exploreBtn}
            </button>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="relative flex justify-center pb-8">
        <motion.button
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          onClick={() => {
            const el = document.querySelector("#about");
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }}
          className="text-white/40 hover:text-white/70 transition-colors duration-200"
          aria-label="Scroll down"
        >
          <ChevronDown size={28} />
        </motion.button>
      </div>

      {/* Stats bar */}
      <div className="relative border-t border-white/10 bg-white/10 backdrop-blur-md">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-4">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-0 sm:divide-x sm:divide-white/20">
            {c.stats.map((stat, i) => (
              <div
                key={i}
                className="flex items-center gap-3 sm:px-6 sm:first:pl-0 sm:last:pr-0"
              >
                <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                  <IconComponent type={stat.icon} />
                </div>
                <span className="text-white/80 text-sm font-medium">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
