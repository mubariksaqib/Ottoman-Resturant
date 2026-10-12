"use client";

import { useState, useEffect } from "react";

export default function Footer() {
  const [year, setYear] = useState(2026);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-black border-t border-white/10 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="md:col-span-1">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-red-600 to-orange-500 flex items-center justify-center font-extrabold">
              C&amp;P
            </div>
            <span className="font-extrabold text-lg">
              Chicken <span className="text-orange-500">&amp;</span> Pizza
            </span>
          </div>
          <p className="mt-4 text-sm text-zinc-400 leading-relaxed">
            Freshly made, perfectly served. Your favourite fast food destination.
          </p>
          <div className="mt-5 flex gap-3">
            {["📘", "📷", "🐦", "▶️"].map((icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social link"
                className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center
                           hover:bg-gradient-to-br hover:from-red-600 hover:to-orange-500
                           hover:scale-110 transition-all"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-bold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-zinc-400">
            {["Home", "About", "Menu", "Offers", "Gallery", "Contact"].map((l) => (
              <li key={l}>
                <a
                  href={`#${l.toLowerCase()}`}
                  className="hover:text-orange-500 transition-colors"
                >
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Menu */}
        <div>
          <h4 className="font-bold mb-4">Our Menu</h4>
          <ul className="space-y-2 text-sm text-zinc-400">
            {["Pizza", "Fried Chicken", "Burgers", "Fries", "Drinks"].map((l) => (
              <li key={l}>
                <a href="#menu" className="hover:text-orange-500 transition-colors">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-bold mb-4">Contact</h4>
          <ul className="space-y-3 text-sm text-zinc-400">
            <li className="flex items-start gap-2">
              <span>📍</span> 123 Food Street, Your City
            </li>
            <li className="flex items-start gap-2">
              <span>📞</span> +1 (000) 000-0000
            </li>
            <li className="flex items-start gap-2">
              <span>✉️</span> hello@chickenandpizza.com
            </li>
            <li className="flex items-start gap-2">
              <span>🕒</span> 11:00 AM – 11:00 PM
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-3 text-sm text-zinc-500">
        <p>© {year} Chicken &amp; Pizza. All rights reserved.</p>
        <p>
          Made with <span className="text-red-500">❤</span> for food lovers.
        </p>
      </div>
    </footer>
  );
}