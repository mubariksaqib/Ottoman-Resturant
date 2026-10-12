const offers = [
  {
    title: "Family Bucket",
    desc: "8 pcs chicken + 2 large pizzas + 4 drinks + fries.",
    price: "$34.99",
    old: "$49.99",
    badge: "30% OFF",
    img: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=800&q=80",
  },
  {
    title: "Pizza Combo",
    desc: "Any 2 large pizzas + garlic bread + 2 drinks.",
    price: "$22.99",
    old: "$29.99",
    badge: "Save $7",
    img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&q=80",
  },
  {
    title: "Burger Deal",
    desc: "2 cheeseburgers + loaded fries + 2 soft drinks.",
    price: "$14.99",
    old: "$19.99",
    badge: "25% OFF",
    img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&q=80",
  },
];

export default function Offers() {
  return (
    <section id="offers" className="py-24 px-6 bg-zinc-950 relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center reveal">
          <span className="text-orange-500 font-semibold tracking-widest text-sm uppercase">
            Special Offers
          </span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-extrabold">
            Hot Deals &amp; <span className="text-orange-500">Combos</span>
          </h2>
          <p className="mt-4 text-zinc-400 max-w-xl mx-auto">
            Grab our limited-time offers — great food at even better prices!
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-8">
          {offers.map((o, i) => (
            <div
              key={o.title}
              className="group relative rounded-3xl overflow-hidden bg-zinc-900 border border-white/5
                         hover:border-orange-500/50 hover:-translate-y-2 transition-all duration-500 reveal"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={o.img}
                  alt={o.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                <span className="absolute top-4 right-4 px-4 py-1.5 rounded-full text-sm font-extrabold
                                 bg-gradient-to-r from-red-600 to-orange-500 animate-pulse-glow">
                  {o.badge}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-extrabold">{o.title}</h3>
                <p className="mt-2 text-sm text-zinc-400">{o.desc}</p>
                <div className="mt-5 flex items-end gap-3">
                  <span className="text-3xl font-extrabold text-orange-500">{o.price}</span>
                  <span className="text-zinc-500 line-through mb-1">{o.old}</span>
                </div>
                <a
                  href="#contact"
                  className="mt-6 block text-center py-3 rounded-full bg-gradient-to-r from-red-600 to-orange-500
                             font-semibold hover:shadow-lg hover:shadow-red-600/40 hover:scale-[1.02] transition-all"
                >
                  Grab Deal
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}