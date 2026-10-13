import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Ottoman Restaurant | Authentic Turkish Cuisine",
  description:
    "Experience authentic Ottoman and Turkish cuisine at Ottoman Restaurant. Freshly made, perfectly served!",
  keywords: [
    "ottoman restaurant",
    "turkish cuisine",
    "kebab",
    "pide",
    "baklava",
    "turkish food",
    "restaurant",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable} scroll-smooth`}>
      <body className="antialiased bg-black text-white">{children}</body>
    </html>
  );
}