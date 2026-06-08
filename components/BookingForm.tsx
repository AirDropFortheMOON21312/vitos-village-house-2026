"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  Users,
  Mail,
  User,
  MessageSquare,
  CreditCard,
  Send,
} from "lucide-react";
import { calculateTotal } from "@/lib/pricing";

type Props = { lang: "en" | "gr" };

const content = {
  en: {
    badge: "Reserve Your Stay",
    title: "Book Your Holiday",
    titleAccent: "in Corfu",
    subtitle:
      "Instant booking with secure Stripe payment. Confirmation email sent immediately to you and your host.",
    checkIn: "Check-in",
    checkOut: "Check-out",
    guests: "Guests",
    guestOptions: [
      "1 Guest",
      "2 Guests",
      "3 Guests (+€15/night)",
      "4 Guests (+€25/night)",
    ],
    name: "Full Name",
    email: "Email Address",
    message: "Special Requests (optional)",
    messagePlaceholder:
      "Early check-in, dietary needs, pet details, anything else...",
    nights: "night",
    nights_plural: "nights",
    baseCost: "Base cost",
    guestSupplement: "Guest supplement",
    total: "Total",
    btnPay: "Book & Pay with Stripe",
    btnEmail: "Send Email Inquiry Instead",
    emailNote:
      "For stays of 7+ nights, email us directly for preferential rates.",
    processing: "Redirecting to payment...",
    orDivider: "or",
    priceNote: "Children under 12 stay free · Secured by Stripe",
    errorRequired: "Please fill in all required fields.",
    errorDates: "Please select valid check-in and check-out dates.",
    errorNetwork: "Network error. Please try again.",
  },
  gr: {
    badge: "Κάντε Κράτηση",
    title: "Κλείστε τις Διακοπές σας",
    titleAccent: "στην Κέρκυρα",
    subtitle:
      "Άμεση κράτηση με ασφαλή πληρωμή μέσω Stripe. Επιβεβαίωση αποστέλλεται αμέσως.",
    checkIn: "Άφιξη",
    checkOut: "Αναχώρηση",
    guests: "Επισκέπτες",
    guestOptions: [
      "1 Επισκέπτης",
      "2 Επισκέπτες",
      "3 Επισκέπτες (+€15/νύχτα)",
      "4 Επισκέπτες (+€25/νύχτα)",
    ],
    name: "Ονοματεπώνυμο",
    email: "Διεύθυνση Email",
    message: "Ειδικά Αιτήματα (προαιρετικό)",
    messagePlaceholder: "Πρώιμη άφιξη, κατοικίδια, ειδικές ανάγκες...",
    nights: "νύχτα",
    nights_plural: "νύχτες",
    baseCost: "Βασικό κόστος",
    guestSupplement: "Πρόσθετο επισκεπτών",
    total: "Σύνολο",
    btnPay: "Κράτηση & Πληρωμή με Stripe",
    btnEmail: "Στείλτε Αίτημα Email",
    emailNote: "Για διαμονή 7+ νυχτών, επικοινωνήστε μαζί μας απευθείας.",
    processing: "Μεταφορά στην πληρωμή...",
    orDivider: "ή",
    priceNote: "Παιδιά έως 12 ετών δωρεάν · Ασφαλής πληρωμή Stripe",
    errorRequired: "Παρακαλώ συμπληρώστε όλα τα απαιτούμενα πεδία.",
    errorDates: "Παρακαλώ επιλέξτε έγκυρες ημερομηνίες.",
    errorNetwork: "Σφάλμα δικτύου. Παρακαλώ δοκιμάστε ξανά.",
  },
};

export default function BookingForm({ lang }: Props) {
  const t = content[lang];

  const today = new Date().toISOString().split("T")[0];
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const dayAfter = new Date();
  dayAfter.setDate(dayAfter.getDate() + 2);

  const [form, setForm] = useState({
    checkIn: tomorrow.toISOString().split("T")[0],
    checkOut: dayAfter.toISOString().split("T")[0],
    guests: "2",
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const price = useMemo(() => {
    if (!form.checkIn || !form.checkOut) return null;
    const checkIn = new Date(form.checkIn);
    const checkOut = new Date(form.checkOut);
    if (checkOut <= checkIn) return null;
    return calculateTotal(checkIn, checkOut, parseInt(form.guests));
  }, [form.checkIn, form.checkOut, form.guests]);

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setError("");
  }

  async function handleStripeBooking(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name || !form.email || !form.checkIn || !form.checkOut) {
      setError(t.errorRequired);
      return;
    }
    if (!price || price.nights === 0) {
      setError(t.errorDates);
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("/api/create-checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        setError(data.error || t.errorNetwork);
        setLoading(false);
      }
    } catch {
      setError(t.errorNetwork);
      setLoading(false);
    }
  }

  function handleEmailInquiry() {
    const subject = encodeURIComponent(
      `Booking Inquiry: ${form.checkIn} to ${form.checkOut}`
    );
    const body = encodeURIComponent(
      `Hello Vito,\n\nI'd like to inquire about booking your house.\n\nCheck-in: ${form.checkIn}\nCheck-out: ${form.checkOut}\nGuests: ${form.guests}${form.message ? `\n\nSpecial requests: ${form.message}` : ""}\n\nBest regards,\n${form.name || "A potential guest"}`
    );
    window.location.href = `mailto:vitosvillagehouse@gmail.com?subject=${subject}&body=${body}`;
  }

  const inputClass =
    "w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-olive-400 focus:ring-2 focus:ring-olive-100 outline-none text-gray-800 text-sm transition-colors";

  return (
    <section id="book" className="py-24 bg-stone-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-terra-500 text-sm font-semibold tracking-widest uppercase">
            {t.badge}
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-4">
            {t.title}{" "}
            <span className="italic text-olive-600">{t.titleAccent}</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">{t.subtitle}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden"
        >
          <form onSubmit={handleStripeBooking}>
            <div className="p-8">
              {/* Dates + Guests */}
              <div className="grid sm:grid-cols-3 gap-4 mb-5">
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">
                    <Calendar size={12} className="inline mr-1" />
                    {t.checkIn}
                  </label>
                  <input
                    type="date"
                    name="checkIn"
                    value={form.checkIn}
                    min={today}
                    onChange={handleChange}
                    required
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">
                    <Calendar size={12} className="inline mr-1" />
                    {t.checkOut}
                  </label>
                  <input
                    type="date"
                    name="checkOut"
                    value={form.checkOut}
                    min={form.checkIn || today}
                    onChange={handleChange}
                    required
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">
                    <Users size={12} className="inline mr-1" />
                    {t.guests}
                  </label>
                  <select
                    name="guests"
                    value={form.guests}
                    onChange={handleChange}
                    className={`${inputClass} bg-white`}
                  >
                    {[1, 2, 3, 4].map((n, i) => (
                      <option key={n} value={n}>
                        {t.guestOptions[i]}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Name + Email */}
              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">
                    <User size={12} className="inline mr-1" />
                    {t.name}
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Maria Georgiou"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">
                    <Mail size={12} className="inline mr-1" />
                    {t.email}
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="maria@example.com"
                    className={inputClass}
                  />
                </div>
              </div>

              {/* Message */}
              <div className="mb-6">
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">
                  <MessageSquare size={12} className="inline mr-1" />
                  {t.message}
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={3}
                  placeholder={t.messagePlaceholder}
                  className={`${inputClass} resize-none`}
                />
              </div>

              {/* Live price summary */}
              {price && price.nights > 0 && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  className="bg-stone-50 rounded-2xl p-5 mb-6 border border-stone-200"
                >
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between text-gray-600">
                      <span>
                        {price.nights}{" "}
                        {price.nights === 1 ? t.nights : t.nights_plural} × avg
                        €{price.avgNightly}/night
                      </span>
                      <span>€{price.subtotal}</span>
                    </div>
                    {price.guestSupplement > 0 && (
                      <div className="flex justify-between text-gray-600">
                        <span>{t.guestSupplement}</span>
                        <span>€{price.guestSupplement}</span>
                      </div>
                    )}
                    <div className="flex justify-between font-bold text-gray-900 text-base pt-2 border-t border-stone-200">
                      <span>{t.total}</span>
                      <span className="text-olive-700">€{price.total}</span>
                    </div>
                  </div>
                </motion.div>
              )}

              {error && (
                <p className="text-red-500 text-sm mb-4 px-1">{error}</p>
              )}

              {/* CTAs */}
              <div className="space-y-3">
                <button
                  type="submit"
                  disabled={loading || !price || price.nights === 0}
                  className="w-full flex items-center justify-center gap-2 py-4 px-6 bg-terra-500 hover:bg-terra-600 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold rounded-2xl transition-colors text-base shadow-md"
                >
                  <CreditCard size={18} />
                  {loading
                    ? t.processing
                    : `${t.btnPay}${price && price.nights > 0 ? ` — €${price.total}` : ""}`}
                </button>

                <div className="flex items-center gap-3">
                  <div className="flex-1 h-px bg-gray-200" />
                  <span className="text-gray-400 text-xs uppercase font-medium">
                    {t.orDivider}
                  </span>
                  <div className="flex-1 h-px bg-gray-200" />
                </div>

                <button
                  type="button"
                  onClick={handleEmailInquiry}
                  className="w-full flex items-center justify-center gap-2 py-3 px-6 border-2 border-olive-300 text-olive-700 hover:bg-olive-50 font-semibold rounded-2xl transition-colors text-sm"
                >
                  <Send size={16} />
                  {t.btnEmail}
                </button>

                <p className="text-xs text-gray-400 text-center">{t.priceNote}</p>
              </div>
            </div>
          </form>
        </motion.div>

        <p className="text-center text-sm text-gray-400 mt-6 italic">
          {t.emailNote}
        </p>
      </div>
    </section>
  );
}
