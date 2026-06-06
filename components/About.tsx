"use client";

import { motion } from "framer-motion";
import { Heart, Sun, Shield } from "lucide-react";

interface AboutProps {
  lang: "en" | "gr";
}

const content = {
  en: {
    badge: "The House",
    heading: "Authentic Corfiot Charm",
    headingItalic: "in Every Corner",
    para1:
      "Vito's Village House is a lovingly restored 79m² traditional Corfiot home nestled in the heart of Agios Matthaios village in southern Corfu. With wooden beamed ceilings, terracotta tones, and a private balcony overlooking olive groves, every detail whispers of genuine Greek hospitality.",
    para2:
      "Sleeping up to 4 guests across two beautifully appointed bedrooms, the house offers all modern comforts without sacrificing its authentic character. The surrounding village is a hidden gem — peaceful, unspoiled, and just minutes from some of Corfu's most beautiful uncrowded beaches.",
    features: [
      {
        icon: "heart",
        title: "Family Hosted",
        desc: "Personally managed by Vito and family with local knowledge and warmth.",
      },
      {
        icon: "sun",
        title: "Authentic Village",
        desc: "Stay in a real working Greek village, away from tourist crowds.",
      },
      {
        icon: "shield",
        title: "Fully Renovated",
        desc: "Modern amenities and spotless condition with traditional charm preserved.",
      },
    ],
    ratingLabel: "Booking.com Score",
    petLabel: "Pet Friendly",
  },
  gr: {
    badge: "Το Σπίτι",
    heading: "Αυθεντική Κερκυραϊκή Γοητεία",
    headingItalic: "σε Κάθε Γωνιά",
    para1:
      "Το Vito's Village House είναι ένα με αγάπη ανακαινισμένο παραδοσιακό κερκυραϊκό σπίτι 79τ.μ. στην καρδιά του χωριού Άγιος Ματθαίος στη νότια Κέρκυρα. Με ξύλινα δοκάρια στο ταβάνι, χρώματα τερακότα και ιδιωτικό μπαλκόνι με θέα ελαιώνες, κάθε λεπτομέρεια αναπνέει αυθεντική ελληνική φιλοξενία.",
    para2:
      "Φιλοξενεί έως 4 επισκέπτες σε δύο υπέροχα διακοσμημένα υπνοδωμάτια, προσφέροντας όλες τις σύγχρονες ανέσεις χωρίς να θυσιάζει τον αυθεντικό του χαρακτήρα. Το γύρω χωριό είναι ένα κρυμμένο κόσμημα — ήρεμο, ανέγγιχτο, και μόνο λίγα λεπτά από μερικές από τις πιο όμορφες ήσυχες παραλίες της Κέρκυρας.",
    features: [
      {
        icon: "heart",
        title: "Οικογενειακή Φιλοξενία",
        desc: "Προσωπική διαχείριση από τον Βίτο και την οικογένειά του.",
      },
      {
        icon: "sun",
        title: "Αυθεντικό Χωριό",
        desc: "Διαμείνετε σε ένα αληθινό ελληνικό χωριό, μακριά από τουρίστες.",
      },
      {
        icon: "shield",
        title: "Πλήρης Ανακαίνιση",
        desc: "Σύγχρονες παροχές και άψογη κατάσταση με διατηρημένη παραδοσιακή γοητεία.",
      },
    ],
    ratingLabel: "Βαθμολογία Booking.com",
    petLabel: "Κατοικίδια歡迎",
  },
};

const FeatureIcon = ({ type }: { type: string }) => {
  const cls = "w-5 h-5 text-terra-500";
  switch (type) {
    case "heart": return <Heart className={cls} />;
    case "sun": return <Sun className={cls} />;
    case "shield": return <Shield className={cls} />;
    default: return null;
  }
};

export default function About({ lang }: AboutProps) {
  const c = content[lang];

  return (
    <section id="about" className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-terra-100 text-terra-600 text-xs font-semibold uppercase tracking-wider mb-5">
              {c.badge}
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl text-gray-900 leading-tight mb-2">
              {c.heading}
            </h2>
            <h2 className="font-serif text-4xl sm:text-5xl italic text-olive-600 leading-tight mb-8">
              {c.headingItalic}
            </h2>
            <p className="text-gray-600 text-base leading-relaxed mb-5">
              {c.para1}
            </p>
            <p className="text-gray-600 text-base leading-relaxed mb-10">
              {c.para2}
            </p>

            <div className="space-y-5">
              {c.features.map((f, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-terra-50 flex items-center justify-center flex-shrink-0 border border-terra-100">
                    <FeatureIcon type={f.icon} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm mb-0.5">
                      {f.title}
                    </h4>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {f.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Visual */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Main decorative card */}
            <div
              className="relative h-[500px] rounded-3xl overflow-hidden flex items-center justify-center"
              style={{
                background:
                  "linear-gradient(135deg, #e87840 0%, #c4693a 25%, #1a4a6b 70%, #0d2137 100%)",
              }}
            >
              {/* Dot overlay */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  backgroundImage:
                    "radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)",
                  backgroundSize: "30px 30px",
                }}
              />
              {/* House SVG silhouette */}
              <svg
                width="180"
                height="180"
                viewBox="0 0 180 180"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="opacity-30"
              >
                <path
                  d="M90 20 L160 80 L145 80 L145 160 L35 160 L35 80 L20 80 Z"
                  fill="white"
                  stroke="white"
                  strokeWidth="3"
                  strokeLinejoin="round"
                />
                <rect x="70" y="110" width="40" height="50" fill="rgba(255,255,255,0.5)" rx="2" />
                <rect x="50" y="95" width="25" height="25" fill="rgba(255,255,255,0.5)" rx="2" />
                <rect x="105" y="95" width="25" height="25" fill="rgba(255,255,255,0.5)" rx="2" />
                <path d="M90 20 L115 45 L65 45 Z" fill="rgba(255,255,255,0.3)" />
              </svg>
            </div>

            {/* Floating: Rating card */}
            <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl shadow-xl px-5 py-4 border border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 bg-azure-50 rounded-xl flex items-center justify-center">
                  <span className="text-xl">⭐</span>
                </div>
                <div>
                  <div className="text-2xl font-serif font-bold text-gray-900">9.1</div>
                  <div className="text-xs text-gray-400 font-medium">{c.ratingLabel}</div>
                </div>
              </div>
            </div>

            {/* Floating: Pet Friendly */}
            <div className="absolute -top-4 -right-4 bg-olive-700 text-white rounded-2xl shadow-lg px-4 py-3 flex items-center gap-2">
              <span className="text-lg">🐾</span>
              <span className="text-sm font-semibold">{c.petLabel}</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
