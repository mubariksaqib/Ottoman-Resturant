"use client";

import { useState } from "react";

const images = [
  { src: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=800&q=80", alt: "Adana Kebab", tall: true },
  { src: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800&q=80", alt: "Lahmacun" },
  { src: "https://images.unsplash.com/photo-1598110750624-207050c4f28c?w=800&q=80", alt: "Baklava" },
  { src: "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=80", alt: "Mixed Grill", tall: true },
  { src: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=800&q=80", alt: "Shish Kebab" },
  { src: "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=800&q=80", alt: "Turkish Tea" },
  { src: "https://images.unsplash.com/photo-1593001874117-c99c800e3eb6?w=800&q=80", alt: "Falafel" },
  { src: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=800&q=80", alt: "Kunefe" },
];

export default function Gallery() {
  const [preview, setPreview] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-24 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center reveal">
          <span className="text-orange-500 font-semibold tracking-widest text-sm uppercase">
            Gallery
          </span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-extrabold">
            A Feast for the <span className="text-orange-500">Eyes</span>
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[180px] reveal">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setPreview(img.src)}
              className={`group relative rounded-2xl overflow-hidden ${
                img.tall ? "row-span-2" : ""
              }`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 text-3xl transition-opacity">🔍</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {preview && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-6 animate-fade-in"
          onClick={() => setPreview(null)}
        >
          <button
            aria-label="Close"
            className="absolute top-6 right-6 text-3xl text-white hover:text-orange-500"
            onClick={() => setPreview(null)}
          >
            ✕
          </button>
          <img
            src={preview}
            alt="Preview"
            className="max-w-full max-h-[85vh] rounded-2xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}