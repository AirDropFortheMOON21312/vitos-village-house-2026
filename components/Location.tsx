"use client";

import { motion } from "framer-motion";
import { MapPin, Clock } from "lucide-react";

interface LocationProps {
  lang: "en" | "gr";
}

const content = {
  en: {
    badge: "Location",
    heading: "Find Us in Corfu",
    address: "Agios Matthaios, Corfu 49084, Greece",
    description:
      "Agios Matthaios is a charming traditional village in southern Corfu, known for its authentic Greek character, olive groves, and proximity to some of the island's most beautiful unspoiled beaches.",
    distances: [
      { place: "Paramonas Beach", dist: "3.1 km", time: "5 min by car" },
      { place: "Prasoudi Beach", dist: "5.5 km", time: "8 min by car" },
      { place: "Halikounas Beach", dist: "7 km", time: "12 min by car" },
      { place: "Corfu Town & Airport", dist: "22 km", time: "45–50 min" },
    ],
    mapHint: "Interactive map available at booking",
  },
  gr: {
    badge: "Τοποθεσία",
    heading: "Βρείτε μας στην Κέρκυρα",
    address: "Άγιος Ματθαίος, Κέρκυρα 49084, Ελλάδα",
    description:
      "Ο Άγιος Ματθαίος είναι ένα γοητευτικό παραδοσιακό χωριό στη νότια Κέρκυρα, γνωστό για τον αυθεντικό ελληνικό χαρακτήρα του, τους ελαιώνες και την εγγύτητα σε μερικές από τις πιο όμορφες παραλίες.",
    distances: [
      { place: "Παραλία Παραμόνας", dist: "3.1 χλμ", time: "5 λεπτά με αυτοκίνητο" },
      { place: "Παραλία Πρασούδι", dist: "5.5 χλμ", time: "8 λεπτά με αυτοκίνητο" },
      { place: "Παραλία Χαλικούνας", dist: "7 χλμ", time: "12 λεπτά με αυτοκίνητο" },
      { place: "Πόλη Κέρκυρας & Αεροδρόμιο", dist: "22 χλμ", time: "45–50 λεπτά" },
    ],
    mapHint: "Διαδραστικός χάρτης διαθέσιμος κατά την κράτηση",
  },
};

export default function Location({ lang }: LocationProps) {
  const c = content[lang];

  return (
    <section id="location" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-azure-100 text-azure-600 text-xs font-semibold uppercase tracking-wider mb-5">
              {c.badge}
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl text-gray-900 mb-4">
              {c.heading}
            </h2>
            <div className="flex items-center gap-2 text-terra-500 font-medium mb-6">
              <MapPin size={16} />
              <span>{c.address}</span>
            </div>
            <p className="text-gray-600 leading-relaxed mb-10">{c.description}</p>

            {/* Distances */}
            <div className="space-y-4">
              {c.distances.map((d, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  viewport={{ once: true }}
                  className="flex items-center justify-between py-4 border-b border-gray-100 last:border-0"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-azure-50 flex items-center justify-center flex-shrink-0">
                      <MapPin size={14} className="text-azure-600" />
                    </div>
                    <span className="font-medium text-gray-800 text-sm">{d.place}</span>
                  </div>
                  <div className="flex items-center gap-4 text-right">
                    <span className="font-semibold text-gray-900 text-sm">{d.dist}</span>
                    <div className="flex items-center gap-1 text-gray-400 text-xs">
                      <Clock size={12} />
                      {d.time}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Map */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden border-2 border-azure-200 shadow-lg h-[430px]">
              <iframe
                src="https://maps.google.com/maps?q=Agios+Matthaios,+Corfu,+Greece&t=&z=14&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Agios Matthaios, Corfu"
                className="rounded-3xl"
              />
            </div>
            <p className="text-center text-gray-400 text-xs italic mt-3">{c.mapHint}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
