"use client";

import { motion } from "framer-motion";
import { ExternalLink, Star, Users, Mail } from "lucide-react";

interface PricingProps {
  lang: "en" | "gr";
}

const content = {
  en: {
    badge: "2026 Rates",
    heading: "2026 Season Rates",
    subheading: "All prices based on 2 guests per night. Minimum 2 nights stay.",
    months: [
      { month: "May", season: "Low Season", price: 120, current: false },
      { month: "June", season: "Mid Season", price: 130, current: true },
      { month: "July", season: "High Season", price: 135, current: false },
      { month: "August", season: "Peak Season", price: 150, current: false },
      { month: "September", season: "Mid Season", price: 130, current: false },
      { month: "October", season: "Low Season", price: 105, current: false },
    ],
    pills: ["3rd guest +€15/night", "4th guest +€25/night", "Under 12 free"],
    bookingBtn: "Book on Booking.com",
    airbnbBtn: "Book on Airbnb",
    directNote: "For stays of 7+ nights, email us directly for preferential rates.",
    perNight: "/ night",
    currentLabel: "Current Month",
  },
  gr: {
    badge: "Τιμές 2026",
    heading: "Τιμές Σεζόν 2026",
    subheading: "Όλες οι τιμές για 2 επισκέπτες ανά βράδυ. Ελάχιστη παραμονή 2 βράδια.",
    months: [
      { month: "Μάιος", season: "Χαμηλή Σεζόν", price: 120, current: false },
      { month: "Ιούνιος", season: "Μέση Σεζόν", price: 130, current: true },
      { month: "Ιούλιος", season: "Υψηλή Σεζόν", price: 135, current: false },
      { month: "Αύγουστος", season: "Peak Σεζόν", price: 150, current: false },
      { month: "Σεπτέμβριος", season: "Μέση Σεζόν", price: 130, current: false },
      { month: "Οκτώβριος", season: "Χαμηλή Σεζόν", price: 105, current: false },
    ],
    pills: ["3ος επισκέπτης +€15/βράδυ", "4ος επισκέπτης +€25/βράδυ", "Κάτω από 12 δωρεάν"],
    bookingBtn: "Κράτηση στο Booking.com",
    airbnbBtn: "Κράτηση στο Airbnb",
    directNote: "Για διαμονές 7+ βραδιών, στείλτε μας email για προτιμησιακές τιμές.",
    perNight: "/ βράδυ",
    currentLabel: "Τρέχων Μήνας",
  },
};

const seasonStyles: Record<string, { badge: string; card: string }> = {
  "Low Season":     { badge: "bg-olive-100 text-olive-700",  card: "border-gray-200" },
  "Χαμηλή Σεζόν":  { badge: "bg-olive-100 text-olive-700",  card: "border-gray-200" },
  "Mid Season":     { badge: "bg-azure-100 text-azure-600",  card: "border-gray-200" },
  "Μέση Σεζόν":    { badge: "bg-azure-100 text-azure-600",  card: "border-gray-200" },
  "High Season":    { badge: "bg-amber-100 text-amber-700",  card: "border-gray-200" },
  "Υψηλή Σεζόν":   { badge: "bg-amber-100 text-amber-700",  card: "border-gray-200" },
  "Peak Season":    { badge: "bg-terra-100 text-terra-700",  card: "border-gray-200" },
  "Peak Σεζόν":    { badge: "bg-terra-100 text-terra-700",  card: "border-gray-200" },
};

export default function Pricing({ lang }: PricingProps) {
  const c = content[lang];

  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-terra-100 text-terra-600 text-xs font-semibold uppercase tracking-wider mb-4">
            {c.badge}
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl text-gray-900 mb-4">
            {c.heading}
          </h2>
          <p className="text-gray-500 text-base max-w-xl mx-auto">{c.subheading}</p>
        </motion.div>

        {/* Month cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-5 mb-10">
          {c.months.map((m, i) => {
            const styles = seasonStyles[m.season] || { badge: "bg-gray-100 text-gray-600", card: "border-gray-200" };
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                viewport={{ once: true }}
                className={`relative rounded-2xl border-2 p-6 transition-all duration-300 ${
                  m.current
                    ? "border-terra-400 shadow-lg shadow-terra-100 bg-terra-50/50"
                    : `${styles.card} hover:border-gray-300 hover:shadow-md bg-white`
                }`}
              >
                {m.current && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-terra-500 text-white text-xs font-bold rounded-full whitespace-nowrap">
                    {c.currentLabel}
                  </div>
                )}
                <div className="mb-3">
                  <h3 className="font-serif text-2xl font-semibold text-gray-900 mb-1.5">
                    {m.month}
                  </h3>
                  <span className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold ${styles.badge}`}>
                    {m.season}
                  </span>
                </div>
                <div className="flex items-baseline gap-1 mt-4">
                  <span className={`font-serif text-4xl font-bold ${m.current ? "text-terra-600" : "text-gray-900"}`}>
                    €{m.price}
                  </span>
                  <span className="text-gray-400 text-sm">{c.perNight}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Extra guest pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {c.pills.map((pill, i) => (
            <div
              key={i}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 text-gray-600 text-sm font-medium"
            >
              <Users size={14} className="text-gray-400" />
              {pill}
            </div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6"
        >
          <a
            href="https://www.booking.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-azure-600 hover:bg-azure-700 text-white font-semibold rounded-full transition-all duration-200 shadow-md hover:shadow-lg hover:scale-105"
          >
            <ExternalLink size={16} />
            {c.bookingBtn}
          </a>
          <a
            href="https://www.airbnb.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#FF385C] hover:bg-[#E31C5F] text-white font-semibold rounded-full transition-all duration-200 shadow-md hover:shadow-lg hover:scale-105"
          >
            <Star size={16} />
            {c.airbnbBtn}
          </a>
        </motion.div>

        {/* Direct booking note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-2 text-sm text-gray-500"
        >
          <Mail size={14} className="text-terra-400" />
          <span>{c.directNote}</span>
        </motion.div>
      </div>
    </section>
  );
}
