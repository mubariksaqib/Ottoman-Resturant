export default function About() {
  return (
    <section id="about" className="relative py-24 px-6 bg-zinc-950">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* Images */}
        <div className="relative reveal">
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1562967914-608f82629710?w=600&q=80"
              alt="Fried chicken"
              className="rounded-2xl w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
            />
            <img
              src="https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=600&q=80"
              alt="Burger"
              className="rounded-2xl w-full h-64 object-cover mt-8 hover:scale-105 transition-transform duration-500"
            />
            <img
              src="https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&q=80"
              alt="Pizza"
              className="rounded-2xl w-full h-64 object-cover -mt-8 hover:scale-105 transition-transform duration-500"
            />
            <img
              src="https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=600&q=80"
              alt="Fries"
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
            At Chicken &amp; Pizza, we blend traditional recipes with a modern twist.
            Every pizza is hand-tossed and baked to golden perfection, while our
            signature fried chicken is marinated in our secret spice blend for a
            crunch that keeps you coming back.
          </p>
          <p className="mt-4 text-zinc-400 leading-relaxed">
            We use only the freshest ingredients, locally sourced produce, and
            premium quality meats — because great taste starts with great
            ingredients.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-4">
            {[
              { icon: "🔥", t: "Fresh & Hot" },
              { icon: "🌿", t: "Quality Ingredients" },
              { icon: "⚡", t: "Fast Delivery" },
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