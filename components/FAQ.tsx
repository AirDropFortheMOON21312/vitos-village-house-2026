"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface FAQProps {
  lang: "en" | "gr";
}

const content = {
  en: {
    badge: "FAQ",
    heading: "Frequently Asked Questions",
    subheading: "Everything you need to know before your stay.",
    items: [
      {
        q: "What are the check-in and check-out times?",
        a: "Check-in is from 15:00 and check-out is by 11:00. Early check-in and late check-out can often be arranged on request — just let us know in advance.",
      },
      {
        q: "Is the house pet-friendly?",
        a: "Yes! Pets are very welcome at Vito's Village House. Just let us know when making your booking so we can prepare accordingly.",
      },
      {
        q: "How far are the beaches?",
        a: "Paramonas Beach is just 3.1km away (about 5 minutes by car). Prasoudi Beach is 5.5km, and Halikounas Beach is 7km — all beautiful and uncrowded.",
      },
      {
        q: "Is there parking available?",
        a: "Yes, free parking is available nearby the house. You won't need to worry about finding a spot.",
      },
      {
        q: "Can I book directly?",
        a: "Absolutely! For stays of 7 nights or more, email us directly at vitosvillagehouse@gmail.com and we'll offer you preferential direct booking rates.",
      },
      {
        q: "What's included in the price?",
        a: "Everything you need: high-speed Wi-Fi, air conditioning, fresh linens and towels, toiletries, kitchen essentials, and a welcome basket with local treats.",
      },
      {
        q: "Are additional guests possible?",
        a: "The house sleeps up to 4 guests. A 3rd guest is an additional €15/night, and a 4th guest is €25/night. Children under 12 stay free.",
      },
      {
        q: "How do I get from the airport?",
        a: "Corfu Airport is approximately 22km away (about 45–50 minutes by car). We recommend a taxi (around €35). Car rental from the airport is also a great option for exploring the island.",
      },
    ],
  },
  gr: {
    badge: "FAQ",
    heading: "Συχνές Ερωτήσεις",
    subheading: "Όλα όσα χρειάζεστε να γνωρίζετε πριν τη διαμονή σας.",
    items: [
      {
        q: "Ποιες είναι οι ώρες check-in και check-out;",
        a: "Το check-in είναι από τις 15:00 και το check-out έως τις 11:00. Πρώιμο check-in ή αργό check-out μπορεί συχνά να οργανωθεί κατόπιν αιτήματος.",
      },
      {
        q: "Επιτρέπονται τα κατοικίδια;",
        a: "Ναι! Τα κατοικίδια είναι πολύ ευπρόσδεκτα. Απλώς ενημερώστε μας κατά την κράτηση.",
      },
      {
        q: "Πόσο μακριά είναι οι παραλίες;",
        a: "Η παραλία Παραμόνας απέχει μόνο 3.1χλμ (περίπου 5 λεπτά με αυτοκίνητο). Πρασούδι 5.5χλμ, Χαλικούνας 7χλμ.",
      },
      {
        q: "Υπάρχει πάρκινγκ;",
        a: "Ναι, υπάρχει δωρεάν πάρκινγκ κοντά στο σπίτι.",
      },
      {
        q: "Μπορώ να κάνω άμεση κράτηση;",
        a: "Απολύτως! Για διαμονές 7+ βραδιών, στείλτε μας email στο vitosvillagehouse@gmail.com για προνομιακές τιμές.",
      },
      {
        q: "Τι περιλαμβάνεται στην τιμή;",
        a: "Τα πάντα: γρήγορο Wi-Fi, κλιματισμός, λευκά είδη, είδη μπάνιου, βασικά κουζίνας και ένα καλάθι καλωσορίσματος.",
      },
      {
        q: "Είναι δυνατοί επιπλέον επισκέπτες;",
        a: "Το σπίτι φιλοξενεί έως 4 επισκέπτες. 3ος επισκέπτης +€15/βράδυ, 4ος +€25/βράδυ. Παιδιά κάτω των 12 δωρεάν.",
      },
      {
        q: "Πώς φτάνω από το αεροδρόμιο;",
        a: "Το αεροδρόμιο της Κέρκυρας απέχει περίπου 22χλμ (45-50 λεπτά). Συνιστούμε ταξί (~€35). Η ενοικίαση αυτοκινήτου είναι εξαιρετική επιλογή.",
      },
    ],
  },
};

export default function FAQ({ lang }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const c = content[lang];

  return (
    <section id="faq" className="py-24 bg-stone-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-olive-100 text-olive-700 text-xs font-semibold uppercase tracking-wider mb-4">
            {c.badge}
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl text-gray-900 mb-4">
            {c.heading}
          </h2>
          <p className="text-gray-500 text-base">{c.subheading}</p>
        </motion.div>

        {/* Accordion */}
        <div className="space-y-3">
          {c.items.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                viewport={{ once: true }}
                className={`bg-white rounded-xl border transition-all duration-200 overflow-hidden ${
                  isOpen ? "border-terra-200 shadow-md" : "border-gray-100 shadow-sm hover:border-gray-200"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left group"
                  aria-expanded={isOpen}
                >
                  <span className={`font-semibold text-sm pr-4 transition-colors duration-200 ${isOpen ? "text-terra-700" : "text-gray-900 group-hover:text-terra-700"}`}>
                    {item.q}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    className={`flex-shrink-0 transition-colors duration-200 ${isOpen ? "text-terra-500" : "text-gray-400"}`}
                  >
                    <ChevronDown size={18} />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-5 text-sm text-gray-600 leading-relaxed border-t border-gray-50 pt-4">
                        {item.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
