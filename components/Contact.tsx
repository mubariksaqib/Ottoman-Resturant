"use client";

import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // NOTE: This is a UI-only form. To make it functional,
    // connect it to a backend (e.g., Formspree, Resend, or your API route).
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 px-6 bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center reveal">
          <span className="text-orange-500 font-semibold tracking-widest text-sm uppercase">
            Contact Us
          </span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-extrabold">
            Get in <span className="text-orange-500">Touch</span>
          </h2>
          <p className="mt-4 text-zinc-400 max-w-xl mx-auto">
            Questions, orders, or feedback — we&apos;d love to hear from you.
          </p>
        </div>

        <div className="mt-14 grid lg:grid-cols-2 gap-10">
          {/* Info + Map */}
          <div className="space-y-6 reveal">
            <div className="rounded-2xl overflow-hidden border border-white/10">
              {/* Replace with your real address embed */}
              <iframe
                title="Cafe Location"
                src="https://www.google.com/maps?q=New+York&output=embed"
                className="w-full h-64 border-0"
                loading="lazy"
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-zinc-900/60 border border-white/5">
                <div className="text-2xl mb-2">📍</div>
                <div className="font-semibold">Address</div>
                <p className="text-sm text-zinc-400 mt-1">
                  123 Food Street, Your City <br />
                  <span className="text-xs text-zinc-500">(update with your real address)</span>
                </p>
              </div>
              <div className="p-5 rounded-2xl bg-zinc-900/60 border border-white/5">
                <div className="text-2xl mb-2">📞</div>
                <div className="font-semibold">Phone</div>
                <p className="text-sm text-zinc-400 mt-1">+1 (000) 000-0000</p>
              </div>
              <div className="p-5 rounded-2xl bg-zinc-900/60 border border-white/5">
                <div className="text-2xl mb-2">✉️</div>
                <div className="font-semibold">Email</div>
                <p className="text-sm text-zinc-400 mt-1">hello@chickenandpizza.com</p>
              </div>
              <div className="p-5 rounded-2xl bg-zinc-900/60 border border-white/5">
                <div className="text-2xl mb-2">🕒</div>
                <div className="font-semibold">Opening Hours</div>
                <p className="text-sm text-zinc-400 mt-1">
                  Mon–Sun: 11:00 AM – 11:00 PM
                </p>
              </div>
            </div>

            <a
              href="https://wa.me/10000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 py-4 rounded-2xl
                         bg-gradient-to-r from-green-600 to-green-500 font-semibold
                         hover:scale-[1.02] hover:shadow-lg hover:shadow-green-600/40 transition-all"
            >
              <span className="text-xl">💬</span> Order on WhatsApp
            </a>
          </div>

          {/* Form */}
          <div className="reveal">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-10 rounded-2xl bg-zinc-900/60 border border-orange-500/40">
                <div className="text-5xl mb-4">✅</div>
                <h3 className="text-2xl font-bold">Thank you!</h3>
                <p className="text-zinc-400 mt-2">
                  Your message has been received. We&apos;ll get back to you soon.
                </p>
                <p className="text-xs text-zinc-500 mt-4">
                  Note: This form is a UI demo. Connect a backend to send real messages.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="p-8 rounded-2xl bg-zinc-900/60 border border-white/10 space-y-5"
              >
                <div>
                  <label className="text-sm font-medium text-zinc-300">Name</label>
                  <input
                    required
                    type="text"
                    placeholder="Your name"
                    className="mt-2 w-full px-4 py-3 rounded-xl bg-black border border-white/10
                               focus:border-orange-500 focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-zinc-300">Email</label>
                  <input
                    required
                    type="email"
                    placeholder="you@example.com"
                    className="mt-2 w-full px-4 py-3 rounded-xl bg-black border border-white/10
                               focus:border-orange-500 focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-zinc-300">Message</label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Your message..."
                    className="mt-2 w-full px-4 py-3 rounded-xl bg-black border border-white/10
                               focus:border-orange-500 focus:outline-none transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-full bg-gradient-to-r from-red-600 to-orange-500
                             font-semibold hover:scale-[1.02] hover:shadow-lg hover:shadow-red-600/40 transition-all"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}