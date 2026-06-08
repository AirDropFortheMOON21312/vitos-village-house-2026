import Link from "next/link";
import { CheckCircle } from "lucide-react";

export default function Success() {
  return (
    <main className="min-h-screen bg-stone-50 flex items-center justify-center px-4">
      <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-12 max-w-lg w-full text-center">
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 rounded-full bg-olive-100 flex items-center justify-center">
            <CheckCircle size={40} className="text-olive-600" />
          </div>
        </div>
        <h1 className="font-serif text-3xl font-bold text-gray-900 mb-3">
          Booking Confirmed!
        </h1>
        <p className="text-gray-500 text-lg mb-2">
          A confirmation email is on its way to you.
        </p>
        <p className="text-gray-400 text-sm mb-8">
          We&apos;ll be in touch shortly with arrival details and local tips. ☀️
        </p>
        <div className="bg-stone-50 rounded-2xl p-5 mb-8 text-left text-sm text-gray-600 space-y-2">
          <p>📍 Agios Matthaios, Corfu 49084, Greece</p>
          <p>🕒 Check-in from 15:00 · Check-out by 11:00</p>
          <p>
            ✉️{" "}
            <a
              href="mailto:vitosvillagehouse@gmail.com"
              className="text-olive-700 hover:underline"
            >
              vitosvillagehouse@gmail.com
            </a>
          </p>
        </div>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-8 py-3 bg-olive-700 hover:bg-olive-800 text-white font-semibold rounded-full transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}
