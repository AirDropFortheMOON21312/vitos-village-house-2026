"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

interface ReviewsProps {
  lang: "en" | "gr";
}

const content = {
  en: {
    badge: "Reviews",
    heading: "What Our Guests Say",
    scoreLabel: "Superb",
    reviewCount: "19 reviews on Booking.com",
    metrics: [
      { label: "Overall", score: 9.1 },
      { label: "Location", score: 9.4 },
      { label: "Facilities", score: 9.5 },
      { label: "Comfort", score: 9.5 },
    ],
    testimonials: [
      {
        text: "The house exceeded all expectations. Vito and his family were incredibly welcoming — they left us fruit, local wine, and a handwritten note with restaurant recommendations. The wooden beamed ceilings and authentic Corfiot feel made it truly special.",
        name: "Sarah M.",
        origin: "United Kingdom 🇬🇧",
        stars: 5,
      },
      {
        text: "We worked remotely for two weeks and the WiFi never let us down. The village is peaceful but you're only 5 minutes from beautiful, uncrowded beaches. Perfect balance.",
        name: "Marco L.",
        origin: "Italy 🇮🇹",
        stars: 5,
      },
      {
        text: "Brought our dog and the hosts were absolutely accommodating. The house is spacious, spotlessly clean, and the kitchen has everything you need. We'll definitely be back!",
        name: "Anna K.",
        origin: "Germany 🇩🇪",
        stars: 5,
      },
    ],
  },
  gr: {
    badge: "Κριτικές",
    heading: "Τι Λένε οι Επισκέπτες μας",
    scoreLabel: "Εξαιρετικό",
    reviewCount: "19 κριτικές στο Booking.com",
    metrics: [
      { label: "Συνολικά", score: 9.1 },
      { label: "Τοποθεσία", score: 9.4 },
      { label: "Εγκαταστάσεις", score: 9.5 },
      { label: "Άνεση", score: 9.5 },
    ],
    testimonials: [
      {
        text: "Το σπίτι ξεπέρασε όλες τις προσδοκίες. Ο Βίτο και η οικογένειά του ήταν απίστευτα φιλόξενοι — μας άφησαν φρούτα, τοπικό κρασί και ένα χειρόγραφο σημείωμα με προτάσεις εστιατορίων.",
        name: "Sarah M.",
        origin: "Ηνωμένο Βασίλειο 🇬🇧",
        stars: 5,
      },
      {
        text: "Εργαζόμασταν εξ αποστάσεως για δύο εβδομάδες και το WiFi δεν μας απογοήτευσε ποτέ. Το χωριό είναι ήσυχο αλλά είστε μόνο 5 λεπτά από υπέροχες παραλίες.",
        name: "Marco L.",
        origin: "Ιταλία 🇮🇹",
        stars: 5,
      },
      {
        text: "Φέραμε το σκύλο μας και οι οικοδεσπότες ήταν απολύτως εξυπηρετικοί. Το σπίτι είναι ευρύχωρο, άψογα καθαρό και η κουζίνα έχει ό,τι χρειάζεστε.",
        name: "Anna K.",
        origin: "Γερμανία 🇩🇪",
        stars: 5,
      },
    ],
  },
};

export default function Reviews({ lang }: ReviewsProps) {
  const c = content[lang];

  return (
    <section id="reviews" className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-amber-100 text-amber-700 text-xs font-semibold uppercase tracking-wider mb-4">
            {c.badge}
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl text-gray-900 mb-4">
            {c.heading}
          </h2>
        </motion.div>

        {/* Score banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 mb-10"
        >
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            {/* Big score */}
            <div className="text-center flex-shrink-0">
              <div className="font-serif text-7xl font-bold text-gray-900 leading-none">9.1</div>
              <div className="text-terra-500 font-semibold mt-1">{c.scoreLabel}</div>
              <div className="text-gray-400 text-sm mt-0.5">{c.reviewCount}</div>
            </div>
            {/* Separator */}
            <div className="hidden md:block w-px h-24 bg-gray-200" />
            {/* Metric bars */}
            <div className="flex-1 w-full grid grid-cols-2 md:grid-cols-4 gap-6">
              {c.metrics.map((m, i) => (
                <div key={i} className="text-center">
                  <div className="font-serif text-3xl font-bold text-gray-900 mb-1">{m.score}</div>
                  <div className="text-xs text-gray-500 mb-2">{m.label}</div>
                  <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${(m.score / 10) * 100}%` }}
                      transition={{ duration: 0.8, delay: 0.3 + i * 0.1 }}
                      viewport={{ once: true }}
                      className="h-full bg-terra-400 rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {c.testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 p-7 flex flex-col"
            >
              {/* Quote icon */}
              <Quote className="w-8 h-8 text-terra-200 mb-4 flex-shrink-0" />
              {/* Stars */}
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: t.stars }).map((_, si) => (
                  <span key={si} className="text-amber-400 text-lg">★</span>
                ))}
              </div>
              {/* Text */}
              <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-5">
                &ldquo;{t.text}&rdquo;
              </p>
              {/* Reviewer */}
              <div className="border-t border-gray-100 pt-4">
                <div className="font-semibold text-gray-900 text-sm">{t.name}</div>
                <div className="text-gray-400 text-xs mt-0.5">{t.origin}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
