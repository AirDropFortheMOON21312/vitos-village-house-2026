import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vito's Village House | Agios Matthaios, Corfu",
  description:
    "A charming 79m² traditional Corfiot house in Agios Matthaios, Corfu, Greece. Sleeps 4, pet-friendly, 3.1km from Paramonas Beach. Rated 9.1/10 on Booking.com.",
  keywords:
    "Corfu rental, Agios Matthaios, Vito's Village House, Greece vacation rental, Corfiot house, Paramonas beach",
  openGraph: {
    title: "Vito's Village House | Agios Matthaios, Corfu",
    description:
      "Authentic Greek village living in a renovated Corfiot house. 79m², sleeps 4, pet-friendly, steps from olive groves and stunning beaches.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
