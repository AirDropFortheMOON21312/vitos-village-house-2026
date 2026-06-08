"use client";

import { motion } from "framer-motion";
import { Home, Sofa, BedDouble, BedSingle, ChefHat, Bath, Sunset } from "lucide-react";

interface GalleryProps {
  lang: "en" | "gr";
}

const content = {
  en: {
    badge: "Gallery",
    heading: "Inside the House",
    subheading: "Every room crafted for comfort and authentic character.",
    hint: "Contact us to request current photo gallery",
    rooms: [
      { name: "Exterior", icon: "home", gradient: "from-[#e87840] to-[#0d2137]", span: "col-span-2" },
      { name: "Living Room", icon: "sofa", gradient: "from-amber-100 to-amber-300", span: "" },
      { name: "Master Bedroom", icon: "double", gradient: "from-orange-100 to-amber-200", span: "" },
      { name: "Twin Bedroom", icon: "single", gradient: "from-teal-200 to-teal-400", span: "col-span-2" },
      { name: "Kitchen", icon: "chef", gradient: "from-gray-100 to-gray-200", span: "" },
      { name: "Bathroom", icon: "bath", gradient: "from-slate-100 to-blue-100", span: "" },
      { name: "Balcony View", icon: "sunset", gradient: "from-green-200 to-[#9da561]", span: "col-span-2" },
    ],
  },
  gr: {
    badge: "Γκαλερί",
    heading: "Μέσα στο Σπίτι",
    subheading: "Κάθε δωμάτιο σχεδιασμένο για άνεση και αυθεντικό χαρακτήρα.",
    hint: "Επικοινωνήστε μαζί μας για να ζητήσετε την τρέχουσα συλλογή φωτογραφιών",
    rooms: [
      { name: "Εξωτερικό", icon: "home", gradient: "from-[#e87840] to-[#0d2137]", span: "col-span-2" },
      { name: "Σαλόνι", icon: "sofa", gradient: "from-amber-100 to-amber-300", span: "" },
      { name: "Κύριο Υπνοδωμάτιο", icon: "double", gradient: "from-orange-100 to-amber-200", span: "" },
      { name: "Δίκλινο Υπνοδωμάτιο", icon: "single", gradient: "from-teal-200 to-teal-400", span: "col-span-2" },
      { name: "Κουζίνα", icon: "chef", gradient: "from-gray-100 to-gray-200", span: "" },
      { name: "Μπάνιο", icon: "bath", gradient: "from-slate-100 to-blue-100", span: "" },
      { name: "Θέα Μπαλκονιού", icon: "sunset", gradient: "from-green-200 to-[#9da561]", span: "col-span-2" },
    ],
  },
};

const RoomIcon = ({ type, dark }: { type: string; dark?: boolean }) => {
  const cls = `w-10 h-10 ${dark ? "text-white/60" : "text-gray-400/60"}`;
  switch (type) {
    case "home": return <Home className={cls} />;
    case "sofa": return <Sofa className={cls} />;
    case "double": return <BedDouble className={cls} />;
    case "single": return <BedSingle className={cls} />;
    case "chef": return <ChefHat className={cls} />;
    case "bath": return <Bath className={cls} />;
    case "sunset": return <Sunset className={cls} />;
    default: return null;
  }
};

export default function Gallery({ lang }: GalleryProps) {
  const c = content[lang];

  return (
    <section id="gallery" className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-azure-100 text-azure-600 text-xs font-semibold uppercase tracking-wider mb-4">
            {c.badge}
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl text-gray-900 mb-4">
            {c.heading}
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">{c.subheading}</p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[220px]">
          {c.rooms.map((room, i) => {
            const isDark = room.gradient.includes("#0d2137") || room.gradient.includes("teal");
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.97 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                viewport={{ once: true }}
                className={`relative group rounded-2xl overflow-hidden cursor-pointer ${room.span}`}
              >
                {/* Background gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${room.gradient} transition-transform duration-500 group-hover:scale-105`}
                />
                {/* Icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <RoomIcon type={room.icon} dark={isDark} />
                </div>
                {/* Bottom overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent px-4 py-3 translate-y-0">
                  <span className="text-white text-sm font-semibold drop-shadow">
                    {room.name}
                  </span>
                </div>
                {/* Hover scale overlay */}
                <div className="absolute inset-0 ring-2 ring-white/0 group-hover:ring-white/20 rounded-2xl transition-all duration-300" />
              </motion.div>
            );
          })}
        </div>

        {/* Hint */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center text-gray-400 italic text-sm mt-8"
        >
          {c.hint}
        </motion.p>
      </div>
    </section>
  );
}
