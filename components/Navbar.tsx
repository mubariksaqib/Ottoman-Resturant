"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#menu", label: "Menu" },
  { href: "#offers", label: "Offers" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/90 backdrop-blur-md shadow-lg shadow-red-900/20 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="#home" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-red-600 to-orange-500 flex items-center justify-center font-extrabold text-lg group-hover:scale-110 transition-transform">
            OR
          </div>
          <span className="font-extrabold text-xl tracking-tight">
            Ottoman <span className="text-orange-500">Restaurant</span>
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="relative text-sm font-medium text-zinc-200 hover:text-white transition-colors
                           after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0
                           after:bg-gradient-to-r after:from-red-600 after:to-orange-500
                           hover:after:w-full after:transition-all after:duration-300"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#menu"
          className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full
                     bg-gradient-to-r from-red-600 to-orange-500 font-semibold text-sm
                     hover:shadow-lg hover:shadow-red-600/40 hover:scale-105 transition-all"
        >
          Order Now
        </a>

        {/* Mobile toggle */}
        <button
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1.5 p-2"
        >
          <span className={`block w-6 h-0.5 bg-white transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`block w-6 h-0.5 bg-white transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-white transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 bg-black/95 backdrop-blur-md ${
          open ? "max-h-96 mt-3" : "max-h-0"
        }`}
      >
        <ul className="px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block text-zinc-200 hover:text-orange-500 font-medium"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#menu"
              onClick={() => setOpen(false)}
              className="inline-block px-5 py-2.5 rounded-full bg-gradient-to-r from-red-600 to-orange-500 font-semibold"
            >
              Order Now
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}