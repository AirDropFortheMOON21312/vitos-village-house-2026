"use client";

import { motion } from "framer-motion";
import { Mail, ExternalLink, Star, ArrowRight, Instagram } from "lucide-react";

interface BookingCTAProps {
  lang: "en" | "gr";
}

const content = {
  en: {
    badge: "Reserve Your Stay",
    heading: "Ready for Your Corfiot Adventure?",
    subheading:
      "Escape to an authentic Greek village, wake up to olive groves, and be at pristine beaches in minutes. Book now and experience southern Corfu the right way.",
    platforms: [
      {
        name: "Booking.com",
        emoji: "🏨",
        benefit: "Instant confirmation & free cancellation",
        color: "bg-[#003580]/20 border-[#003580]/30 hover:bg-[#003580]/30",
        href: "https://www.booking.com",
        cta: "Book Now",
      },
      {
        name: "Airbnb",
        emoji: "🏡",
        benefit: "Secure payment & guest protection",
        color: "bg-[#FF385C]/20 border-[#FF385C]/30 hover:bg-[#FF385C]/30",
        href: "https://www.airbnb.com",
        cta: "Book Now",
      },
      {
        name: "Direct Email",
        emoji: "✉️",
        badge: "Best Rates",
        benefit: "7+ nights · Preferential pricing",
        color: "bg-olive-600/20 border-olive-500/30 hover:bg-olive-600/30",
        href: "mailto:vitosvillagehouse@gmail.com",
        cta: "Email Us",
      },
    ],
    contactEmail: "vitosvillagehouse@gmail.com",
    contactInstagram: "@vitosvillagehouse",
  },
  gr: {
    badge: "Κράτηση Διαμονής",
    heading: "Έτοιμοι για την Κερκυραϊκή σας Περιπέτεια;",
    subheading:
      "Αποδράστε σε ένα αυθεντικό ελληνικό χωριό, ξυπνήστε με θέα ελαιώνες, και να βρεθείτε σε παρθένες παραλίες σε λίγα λεπτά.",
    platforms: [
      {
        name: "Booking.com",
        emoji: "🏨",
        benefit: "Άμεση επιβεβαίωση & δωρεάν ακύρωση",
        color: "bg-[#003580]/20 border-[#003580]/30 hover:bg-[#003580]/30",
        href: "https://www.booking.com",
        cta: "Κράτηση",
      },
      {
        name: "Airbnb",
        emoji: "🏡",
        benefit: "Ασφαλής πληρωμή & προστασία επισκεπτών",
        color: "bg-[#FF385C]/20 border-[#FF385C]/30 hover:bg-[#FF385C]/30",
        href: "https://www.airbnb.com",
        cta: "Κράτηση",
      },
      {
        name: "Άμεσο Email",
        emoji: "✉️",
        badge: "Καλύτερες Τιμές",
        benefit: "7+ βράδια · Προνομιακή τιμολόγηση",
        color: "bg-olive-600/20 border-olive-500/30 hover:bg-olive-600/30",
        href: "mailto:vitosvillagehouse@gmail.com",
        cta: "Email",
      },
    ],
    contactEmail: "vitosvillagehouse@gmail.com",
    contactInstagram: "@vitosvillagehouse",
  },
};

export default function BookingCTA({ lang }: BookingCTAProps) {
  const c = content[lang];

  return (
    <section
      id="booking"
      className="relative py-24 overflow-hidden"
      style={{
        background:
          "linear-gradient(160deg, #0a1628 0%, #0d2137 40%, #1a4a6b 100%)",
      }}
    >
      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      {/* Subtle color overlays */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 20% 120%, rgba(196,105,58,0.2) 0%, transparent 50%), radial-gradient(ellipse at 90% 0%, rgba(59,152,246,0.12) 0%, transparent 50%)",
        }}
      />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white/80 text-xs font-semibold uppercase tracking-wider mb-6"
        >
          <Star size={12} className="text-terra-300" />
          {c.badge}
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
          className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white mb-6 leading-tight"
        >
          {c.heading}
        </motion.h2>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-white/60 text-base sm:text-lg max-w-2xl mx-auto mb-14 leading-relaxed"
        >
          {c.subheading}
        </motion.p>

        {/* Platform cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-14">
          {c.platforms.map((p, i) => (
            <motion.a
              key={i}
              href={p.href}
              target={p.href.startsWith("mailto") ? "_self" : "_blank"}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              viewport={{ once: true }}
              className={`relative flex flex-col items-center text-center p-7 rounded-2xl border backdrop-blur-sm transition-all duration-300 group ${p.color}`}
            >
              {/* Best rates badge */}
              {p.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-olive-500 text-white text-xs font-bold rounded-full whitespace-nowrap">
                  {p.badge}
                </div>
              )}
              <span className="text-4xl mb-3">{p.emoji}</span>
              <h3 className="text-white font-semibold text-lg mb-2">{p.name}</h3>
              <p className="text-white/60 text-sm mb-5 leading-relaxed">{p.benefit}</p>
              <div className="flex items-center gap-1.5 text-white font-semibold text-sm group-hover:gap-2.5 transition-all duration-200">
                {p.cta}
                <ArrowRight size={15} />
              </div>
            </motion.a>
          ))}
        </div>

        {/* Contact info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 text-white/50 text-sm"
        >
          <a
            href={`mailto:${c.contactEmail}`}
            className="flex items-center gap-2 hover:text-white/80 transition-colors duration-200"
          >
            <Mail size={15} className="text-terra-300" />
            {c.contactEmail}
          </a>
          <span className="hidden sm:block w-1 h-1 rounded-full bg-white/20" />
          <a
            href="https://www.instagram.com/vitosvillagehouse"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-white/80 transition-colors duration-200"
          >
            <Instagram size={15} className="text-terra-300" />
            {c.contactInstagram}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
