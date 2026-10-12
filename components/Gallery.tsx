"use client";

import { useState } from "react";

const images = [
  { src: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&q=80", alt: "Pizza", tall: true },
  { src: "https://images.unsplash.com/photo-1562967914-608f82629710?w=800&q=80", alt: "Fried Chicken" },
  { src: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&q=80", alt: "Burger" },
  { src: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=800&q=80", alt: "Fries", tall: true },
  { src: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=800&q=80", alt: "Chicken Burger" },
  { src: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=800&q=80", alt: "Pepperoni Pizza" },
  { src: "https://images.unsplash.com/photo-1581636625402-29b2a704ef13?w=800&q=80", alt: "Drink" },
  { src: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=800&q=80", alt: "Chicken Bucket" },
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