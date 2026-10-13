"use client";

import { useState } from "react";

type Item = {
  id: number;
  name: string;
  desc: string;
  price: string;
  category: "Kebabs" | "Pide" | "Meze" | "Desserts" | "Drinks";
  img: string;
};

const items: Item[] = [
  // Kebabs
  { id: 1, name: "Adana Kebab", desc: "Spicy minced lamb kebab grilled on skewers.", price: "$14.99", category: "Kebabs", img: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=600&q=80" },
  { id: 2, name: "Shish Kebab", desc: "Marinated lamb cubes, grilled with peppers & onions.", price: "$16.99", category: "Kebabs", img: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=600&q=80" },
  { id: 3, name: "Chicken Shish", desc: "Tender chicken cubes marinated in yogurt & spices.", price: "$13.99", category: "Kebabs", img: "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?w=600&q=80" },
  { id: 4, name: "Doner Kebab", desc: "Traditional Turkish doner served with rice & salad.", price: "$12.99", category: "Kebabs", img: "https://images.unsplash.com/photo-1633321702518-7feccafb94d5?w=600&q=80" },
  // Pide
  { id: 5, name: "Lahmacun", desc: "Thin Turkish flatbread topped with minced meat & herbs.", price: "$7.99", category: "Pide", img: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=600&q=80" },
  { id: 6, name: "Kasarli Pide", desc: "Boat-shaped flatbread with melted cheese & butter.", price: "$9.99", category: "Pide", img: "https://images.unsplash.com/photo-1594007654729-407eedc4be65?w=600&q=80" },
  { id: 7, name: "Sucuklu Pide", desc: "Turkish sausage, cheese & egg on crispy flatbread.", price: "$10.99", category: "Pide", img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&q=80" },
  // Meze
  { id: 8, name: "Hummus", desc: "Creamy chickpea dip with tahini, olive oil & pita.", price: "$5.99", category: "Meze", img: "https://images.unsplash.com/photo-1637949385162-e416fb15b2ce?w=600&q=80" },
  { id: 9, name: "Baba Ganoush", desc: "Smoky roasted eggplant dip with garlic & olive oil.", price: "$6.49", category: "Meze", img: "https://images.unsplash.com/photo-1626200419199-391ae4be7a41?w=600&q=80" },
  { id: 10, name: "Falafel Plate", desc: "Crispy chickpea fritters with tahini sauce.", price: "$7.49", category: "Meze", img: "https://images.unsplash.com/photo-1593001874117-c99c800e3eb6?w=600&q=80" },
  // Desserts
  { id: 11, name: "Baklava", desc: "Layers of filo pastry with pistachio & honey syrup.", price: "$6.99", category: "Desserts", img: "https://images.unsplash.com/photo-1598110750624-207050c4f28c?w=600&q=80" },
  { id: 12, name: "Kunefe", desc: "Crispy shredded pastry with melted cheese & syrup.", price: "$8.99", category: "Desserts", img: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=600&q=80" },
  { id: 13, name: "Turkish Delight", desc: "Assorted lokum with rose, lemon & pistachio.", price: "$4.99", category: "Desserts", img: "https://images.unsplash.com/photo-1582293041079-7814c2f12063?w=600&q=80" },
  // Drinks
  { id: 14, name: "Turkish Tea", desc: "Traditional black tea served in tulip glasses.", price: "$2.49", category: "Drinks", img: "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=600&q=80" },
  { id: 15, name: "Turkish Coffee", desc: "Rich, aromatic coffee brewed the traditional way.", price: "$3.99", category: "Drinks", img: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600&q=80" },
  { id: 16, name: "Ayran", desc: "Refreshing yogurt drink with a pinch of salt.", price: "$2.99", category: "Drinks", img: "https://images.unsplash.com/photo-1626200419199-391ae4be7a41?w=600&q=80" },
];

const categories = ["All", "Kebabs", "Pide", "Meze", "Desserts", "Drinks"] as const;

export default function Menu() {
  const [active, setActive] = useState<(typeof categories)[number]>("All");

  const filtered = active === "All" ? items : items.filter((i) => i.category === active);

  return (
    <section id="menu" className="py-24 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center reveal">
          <span className="text-orange-500 font-semibold tracking-widest text-sm uppercase">
            Our Menu
          </span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-extrabold">
            Explore Our <span className="text-orange-500">Authentic</span> Menu
          </h2>
          <p className="mt-4 text-zinc-400 max-w-xl mx-auto">
            From sizzling kebabs to sweet baklava, we bring the taste of Ottoman cuisine to your table.
          </p>
        </div>

        {/* Filters */}
        <div className="mt-10 flex flex-wrap justify-center gap-3 reveal">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
                active === c
                  ? "bg-gradient-to-r from-red-600 to-orange-500 text-white shadow-lg shadow-red-600/30 scale-105"
                  : "bg-zinc-900 text-zinc-300 hover:bg-zinc-800 border border-white/10"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Items */}
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((item) => (
            <article
              key={item.id}
              className="group rounded-2xl overflow-hidden bg-zinc-900/60 border border-white/5
                         hover:border-orange-500/40 hover:-translate-y-2 hover:shadow-2xl hover:shadow-red-900/30
                         transition-all duration-500 reveal"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold bg-black/70 backdrop-blur-sm border border-white/10">
                  {item.category}
                </span>
                <span className="absolute top-3 right-3 px-3 py-1 rounded-full text-sm font-extrabold bg-gradient-to-r from-red-600 to-orange-500">
                  {item.price}
                </span>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold">{item.name}</h3>
                <p className="mt-2 text-sm text-zinc-400 line-clamp-2">{item.desc}</p>
                <a
                  href="#contact"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-orange-500
                             hover:text-orange-400 group-hover:gap-3 transition-all"
                >
                  Order Now →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}