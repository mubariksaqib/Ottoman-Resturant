"use client";

import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Menu from "@/components/Menu";
import Offers from "@/components/Offers";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  // Scroll reveal via IntersectionObserver
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Menu />
        <Offers />
        <Gallery />
        <Contact />
      </main>
      <Footer />

      {/* ===== Developed by Tech Buddies ===== */}
      <div className="bg-gray-950 border-t border-gray-900 py-4">
        <p className="text-center text-sm text-gray-400">
          Developed by{" "}
          <a
            href="https://portfolio-self-nine-93.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-cyan-400 font-semibold transition"
          >
            Tech Buddies
          </a>
        </p>
      </div>
    </>
  );
}