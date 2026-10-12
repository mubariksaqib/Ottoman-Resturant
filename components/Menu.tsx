"use client";

import { useState } from "react";

type Item = {
  id: number;
  name: string;
  desc: string;
  price: string;
  category: "Pizza" | "Chicken" | "Burgers" | "Fries" | "Drinks";
  img: string;
};

const items: Item[] = [
  // Pizza
  { id: 1, name: "Margherita Pizza", desc: "Fresh mozzarella, tomato sauce, basil.", price: "$9.99", category: "Pizza", img: "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?w=600&q=80" },
  { id: 2, name: "Pepperoni Pizza", desc: "Loaded pepperoni, mozzarella, oregano.", price: "$11.99", category: "Pizza", img: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=600&q=80" },
  { id: 3, name: "BBQ Chicken Pizza", desc: "Grilled chicken, BBQ sauce, onions.", price: "$12.99", category: "Pizza", img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80" },
  // Chicken
  { id: 4, name: "Crispy Fried Chicken", desc: "Golden fried chicken, secret spices.", price: "$8.99", category: "Chicken", img: "https://images.unsplash.com/photo-1562967914-608f82629710?w=600&q=80" },
  { id: 5, name: "Chicken Bucket", desc: "8 pieces of our signature fried chicken.", price: "$19.99", category: "Chicken", img: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=600&q=80" },
  { id: 6, name: "Hot Wings", desc: "Spicy buffalo wings with ranch dip.", price: "$7.99", category: "Chicken", img: "https://images.unsplash.com/photo-1608039755401-742074f0548d?w=600&q=80" },
  // Burgers
  { id: 7, name: "Classic Cheeseburger", desc: "Beef patty, cheddar, lettuce, tomato.", price: "$6.99", category: "Burgers", img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&q=80" },
  { id: 8, name: "Crispy Chicken Burger", desc: "Fried chicken fillet, mayo, pickles.", price: "$7.49", category: "Burgers", img: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=600&q=80" },
  { id: 9, name: "Double Beef Burger", desc: "Two patties, double cheese, bacon.", price: "$9.99", category: "Burgers", img: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=600&q=80" },
  // Fries
  { id: 10, name: "Classic Fries", desc: "Crispy golden fries with sea salt.", price: "$3.49", category: "Fries", img: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=600&q=80" },
  { id: 11, name: "Loaded Cheese Fries", desc: "Fries topped with cheese sauce & jalapeños.", price: "$5.49", category: "Fries", img: "https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?w=600&q=80" },
  // Drinks
  { id: 12, name: "Soft Drink", desc: "Coke, Pepsi, Sprite — your choice.", price: "$1.99", category: "Drinks", img: "https://images.unsplash.com/photo-1581636625402-29b2a704ef13?w=600&q=80" },
  { id: 13, name: "Fresh Lemonade", desc: "Hand-squeezed lemons, mint, ice.", price: "$2.99", category: "Drinks", img: "https://images.unsplash.com/photo-1621263764928-df1444c5e859?w=600&q=80" },
  { id: 14, name: "Milkshake", desc: "Creamy chocolate, vanilla or strawberry.", price: "$3.99", category: "Drinks", img: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=600&q=80" },
];

const categories = ["All", "Pizza", "Chicken", "Burgers", "Fries", "Drinks"] as const;

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
            Explore Our <span className="text-orange-500">Delicious</span> Menu
          </h2>
          <p className="mt-4 text-zinc-400 max-w-xl mx-auto">
            From crispy fried chicken to wood-fired pizzas, we&apos;ve got something for everyone.
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