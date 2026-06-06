"use client";

import { motion } from "framer-motion";
import { Wind, Wifi, Tv, Car, UtensilsCrossed, Coffee, Bath, WashingMachine, Sparkles, Scissors, ShowerHead, Eye, Dog, Clock, Mail, Headphones } from "lucide-react";

interface AmenitiesProps {
  lang: "en" | "gr";
}

const content = {
  en: {
    badge: "Amenities",
    heading: "Everything You Need",
    subheading: "Modern comforts in an authentic setting — nothing is missing.",
    categories: [
      {
        title: "Comfort",
        items: [
          { icon: "wind", label: "AC & Heating" },
          { icon: "wifi", label: "High-Speed Wi-Fi" },
          { icon: "tv", label: "Smart TV" },
          { icon: "car", label: "Free Parking" },
        ],
      },
      {
        title: "Kitchen",
        items: [
          { icon: "utensils", label: "Full Kitchen" },
          { icon: "coffee", label: "Coffee Maker" },
          { icon: "washing", label: "Washing Machine" },
          { icon: "bath", label: "All Appliances" },
        ],
      },
      {
        title: "Convenience",
        items: [
          { icon: "sparkles", label: "Linens & Towels" },
          { icon: "scissors", label: "Hairdryer & Iron" },
          { icon: "shower", label: "Toiletries" },
          { icon: "eye", label: "Balcony" },
        ],
      },
      {
        title: "Welcome",
        items: [
          { icon: "dog", label: "Pet Friendly" },
          { icon: "clock", label: "Flexible Checkout" },
          { icon: "mail", label: "Direct Booking" },
          { icon: "headphones", label: "Host Support" },
        ],
      },
    ],
  },
  gr: {
    badge: "Παροχές",
    heading: "Όλα Όσα Χρειάζεστε",
    subheading: "Σύγχρονες ανέσεις σε αυθεντικό περιβάλλον — τίποτα δεν λείπει.",
    categories: [
      {
        title: "Άνεση",
        items: [
          { icon: "wind", label: "Κλιματισμός & Θέρμανση" },
          { icon: "wifi", label: "Γρήγορο Wi-Fi" },
          { icon: "tv", label: "Smart TV" },
          { icon: "car", label: "Δωρεάν Πάρκινγκ" },
        ],
      },
      {
        title: "Κουζίνα",
        items: [
          { icon: "utensils", label: "Πλήρης Κουζίνα" },
          { icon: "coffee", label: "Καφετιέρα" },
          { icon: "washing", label: "Πλυντήριο" },
          { icon: "bath", label: "Όλες Οι Συσκευές" },
        ],
      },
      {
        title: "Ευκολίες",
        items: [
          { icon: "sparkles", label: "Σεντόνια & Πετσέτες" },
          { icon: "scissors", label: "Πιστολάκι & Σίδερο" },
          { icon: "shower", label: "Είδη Μπάνιου" },
          { icon: "eye", label: "Μπαλκόνι" },
        ],
      },
      {
        title: "Καλωσόρισμα",
        items: [
          { icon: "dog", label: "Κατοικίδια Δεκτά" },
          { icon: "clock", label: "Ευέλικτο Check-out" },
          { icon: "mail", label: "Άμεση Κράτηση" },
          { icon: "headphones", label: "Υποστήριξη" },
        ],
      },
    ],
  },
};

const AmenityIcon = ({ type }: { type: string }) => {
  const cls = "w-5 h-5";
  switch (type) {
    case "wind": return <Wind className={cls} />;
    case "wifi": return <Wifi className={cls} />;
    case "tv": return <Tv className={cls} />;
    case "car": return <Car className={cls} />;
    case "utensils": return <UtensilsCrossed className={cls} />;
    case "coffee": return <Coffee className={cls} />;
    case "washing": return <WashingMachine className={cls} />;
    case "bath": return <Bath className={cls} />;
    case "sparkles": return <Sparkles className={cls} />;
    case "scissors": return <Scissors className={cls} />;
    case "shower": return <ShowerHead className={cls} />;
    case "eye": return <Eye className={cls} />;
    case "dog": return <Dog className={cls} />;
    case "clock": return <Clock className={cls} />;
    case "mail": return <Mail className={cls} />;
    case "headphones": return <Headphones className={cls} />;
    default: return null;
  }
};

const categoryColors = [
  { bg: "bg-azure-50", text: "text-azure-600", border: "border-azure-100" },
  { bg: "bg-terra-50", text: "text-terra-600", border: "border-terra-100" },
  { bg: "bg-olive-50", text: "text-olive-700", border: "border-olive-100" },
  { bg: "bg-amber-50", text: "text-amber-700", border: "border-amber-100" },
];

export default function Amenities({ lang }: AmenitiesProps) {
  const c = content[lang];

  return (
    <section id="amenities" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-olive-100 text-olive-700 text-xs font-semibold uppercase tracking-wider mb-4">
            {c.badge}
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl text-gray-900 mb-4">
            {c.heading}
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">{c.subheading}</p>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {c.categories.map((cat, ci) => {
            const color = categoryColors[ci];
            return (
              <motion.div
                key={ci}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: ci * 0.1 }}
                viewport={{ once: true }}
              >
                <div className={`text-xs font-bold uppercase tracking-widest mb-4 ${color.text}`}>
                  {cat.title}
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {cat.items.map((item, ii) => (
                    <motion.div
                      key={ii}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: ci * 0.1 + ii * 0.05 }}
                      viewport={{ once: true }}
                      className={`flex flex-col items-center gap-2 p-4 rounded-xl bg-white shadow-sm hover:shadow-md border ${color.border} transition-shadow duration-200 cursor-default`}
                    >
                      <div className={`w-9 h-9 rounded-lg ${color.bg} flex items-center justify-center ${color.text}`}>
                        <AmenityIcon type={item.icon} />
                      </div>
                      <span className="text-xs font-medium text-gray-700 text-center leading-tight">
                        {item.label}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
