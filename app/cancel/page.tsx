import Link from "next/link";
import { XCircle } from "lucide-react";

export default function Cancel() {
  return (
    <main className="min-h-screen bg-stone-50 flex items-center justify-center px-4">
      <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-12 max-w-lg w-full text-center">
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 rounded-full bg-red-50 flex items-center justify-center">
            <XCircle size={40} className="text-terra-500" />
          </div>
        </div>
        <h1 className="font-serif text-3xl font-bold text-gray-900 mb-3">
          Payment Cancelled
        </h1>
        <p className="text-gray-500 text-lg mb-2">
          No charge was made. Your booking was not confirmed.
        </p>
        <p className="text-gray-400 text-sm mb-8">
          Want to try again, or prefer to email us directly? We&apos;re happy to
          help.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/#book"
            className="px-8 py-3 bg-terra-500 hover:bg-terra-600 text-white font-semibold rounded-full transition-colors"
          >
            Try Again
          </Link>
          <a
            href="mailto:vitosvillagehouse@gmail.com"
            className="px-8 py-3 border-2 border-olive-300 text-olive-700 hover:bg-olive-50 font-semibold rounded-full transition-colors"
          >
            Email Us
          </a>
        </div>
      </div>
    </main>
  );
}
