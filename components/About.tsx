export default function About() {
  return (
    <section id="about" className="relative py-24 px-6 bg-zinc-950">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* Images */}
        <div className="relative reveal">
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=600&q=80"
              alt="Adana Kebab"
              className="rounded-2xl w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
            />
            <img
              src="https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=600&q=80"
              alt="Turkish Pide"
              className="rounded-2xl w-full h-64 object-cover mt-8 hover:scale-105 transition-transform duration-500"
            />
            <img
              src="https://images.unsplash.com/photo-1598110750624-207050c4f28c?w=600&q=80"
              alt="Baklava"
              className="rounded-2xl w-full h-64 object-cover -mt-8 hover:scale-105 transition-transform duration-500"
            />
            <img
              src="https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=600&q=80"
              alt="Turkish Tea"
              className="rounded-2xl w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        {/* Text */}
        <div className="reveal">
          <span className="text-orange-500 font-semibold tracking-widest text-sm uppercase">
            About Us
          </span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-extrabold leading-tight">
            A Taste You&apos;ll <span className="text-orange-500">Never Forget</span>
          </h2>
          <p className="mt-6 text-zinc-400 leading-relaxed">
            At Ottoman Restaurant, we bring centuries of Turkish culinary tradition
            to your table. From sizzling Adana kebabs to delicate baklava, every
            dish is prepared with authentic recipes passed down through generations.
          </p>
          <p className="mt-4 text-zinc-400 leading-relaxed">
            We use only the freshest ingredients — premium cuts of meat, hand-picked
            spices, and traditional cooking methods — because great taste starts
            with great ingredients and respect for tradition.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-4">
            {[
              { icon: "🔥", t: "Fresh & Hot" },
              { icon: "🌿", t: "Quality Ingredients" },
              { icon: "⚡", t: "Fast Service" },
              { icon: "❤️", t: "Made with Love" },
            ].map((f) => (
              <div
                key={f.t}
                className="flex items-center gap-3 p-4 rounded-xl bg-zinc-900/60 border border-white/5
                           hover:border-orange-500/40 hover:bg-zinc-900 transition-all"
              >
                <span className="text-2xl">{f.icon}</span>
                <span className="font-medium text-sm">{f.t}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}