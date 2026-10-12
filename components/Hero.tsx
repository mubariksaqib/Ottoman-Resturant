"use client";

import { useEffect, useState } from "react";

const words = ["Delicious", "Crispy", "Fresh", "Hot"];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % words.length), 2000);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden
                 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-900 via-black to-black"
    >
      {/* Decorative blurred blobs */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-red-600/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl" />

      {/* Floating food emojis */}
      <span className="absolute top-24 right-[12%] text-6xl animate-float opacity-90 select-none">🍕</span>
      <span className="absolute bottom-32 left-[10%] text-5xl animate-float-slow opacity-90 select-none">🍗</span>
      <span className="absolute top-40 left-[8%] text-5xl animate-float opacity-70 select-none">🍔</span>
      <span className="absolute bottom-24 right-[18%] text-5xl animate-float-slow opacity-80 select-none">🍟</span>
      <span className="absolute top-1/2 right-[40%] text-4xl animate-spin-slow opacity-40 select-none">🥤</span>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 grid lg:grid-cols-2 gap-12 items-center w-full">
        <div className="text-center lg:text-left">
          <span className="inline-block px-4 py-1.5 rounded-full border border-orange-500/40 text-orange-400 text-xs font-semibold tracking-widest uppercase mb-6 animate-fade-up">
            🔥 Now Serving Hot &amp; Fresh
          </span>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight animate-fade-up delay-100">
            Welcome to <br />
            <span className="bg-gradient-to-r from-red-500 via-orange-500 to-red-500 bg-clip-text text-transparent">
              Chicken &amp; Pizza
            </span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-zinc-300 max-w-xl mx-auto lg:mx-0 animate-fade-up delay-200">
            <span className="text-orange-400 font-semibold inline-block w-32 text-left">
              {words[index]}
            </span>{" "}
            meals crafted with love — freshly made, perfectly served!
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-up delay-300">
            <a
              href="#menu"
              className="px-8 py-3.5 rounded-full bg-gradient-to-r from-red-600 to-orange-500 font-semibold
                         hover:scale-105 hover:shadow-lg hover:shadow-red-600/40 transition-all text-center"
            >
              Explore Menu
            </a>
            <a
              href="#contact"
              className="px-8 py-3.5 rounded-full border-2 border-white/20 font-semibold
                         hover:border-orange-500 hover:text-orange-400 hover:scale-105 transition-all text-center"
            >
              Order Now
            </a>
          </div>

          {/* Stats */}
          <div className="mt-14 grid grid-cols-3 gap-6 max-w-md mx-auto lg:mx-0 animate-fade-up delay-500">
            {[
              { n: "50+", l: "Menu Items" },
              { n: "10k+", l: "Happy Customers" },
              { n: "4.9★", l: "Rated" },
            ].map((s) => (
              <div key={s.l} className="text-center lg:text-left">
                <div className="text-2xl font-extrabold text-orange-500">{s.n}</div>
                <div className="text-xs text-zinc-400 uppercase tracking-wider mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Hero image circle */}
        <div className="relative flex justify-center items-center animate-fade-in delay-300">
          <div className="relative w-[320px] h-[320px] sm:w-[420px] sm:h-[420px]">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-red-600 to-orange-500 blur-2xl opacity-40 animate-pulse-glow" />
            <div className="absolute inset-0 rounded-full border-4 border-dashed border-orange-500/40 animate-spin-slow" />
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/10">
              <img
                src="https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&q=80"
                alt="Delicious pizza"
                className="w-full h-full object-cover animate-float-slow"
              />
            </div>
            {/* Badge */}
            <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-red-600 to-orange-500 rounded-2xl px-5 py-3 shadow-xl">
              <div className="text-xs uppercase tracking-wider opacity-90">Starting at</div>
              <div className="text-2xl font-extrabold">$4.99</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}