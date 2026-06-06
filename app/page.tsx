"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Amenities from "@/components/Amenities";
import Gallery from "@/components/Gallery";
import Pricing from "@/components/Pricing";
import Reviews from "@/components/Reviews";
import Location from "@/components/Location";
import FAQ from "@/components/FAQ";
import BookingCTA from "@/components/BookingCTA";
import Footer from "@/components/Footer";

export default function Home() {
  const [lang, setLang] = useState<"en" | "gr">("en");

  return (
    <main>
      <Navbar lang={lang} setLang={setLang} />
      <Hero lang={lang} />
      <About lang={lang} />
      <Amenities lang={lang} />
      <Gallery lang={lang} />
      <Pricing lang={lang} />
      <Reviews lang={lang} />
      <Location lang={lang} />
      <FAQ lang={lang} />
      <BookingCTA lang={lang} />
      <Footer lang={lang} />
    </main>
  );
}
