import React from "react";

function Category() {
  const categories = [
    {
      title: "CAMERAS",
      subtitle: "124+ Products",
      image: "/camera-icons/3..png",
      imgClass: "w-64 h-56 -bottom-6 -left-12 -rotate-[20deg] group-hover:rotate-0 group-hover:scale-110",
      accentBg: "bg-amber-500/20 -bottom-10 -left-10",
    },
    {
      title: "LENSES",
      subtitle: "86+ Products",
      image: "/lens-icons/1.png",
      // Moved lens to the bottom right as requested
      imgClass: "w-64 h-56 -bottom-6 -right-12 rotate-[20deg] group-hover:rotate-0 group-hover:scale-110",
      accentBg: "bg-blue-500/20 -bottom-10 -right-10",
    },
    {
      title: "ACCESSORIES",
      subtitle: "210+ Products",
      image: "/accessories-icons/5.png",
      imgClass: "w-64 h-56 -bottom-6 -right-12 -rotate-[15deg] group-hover:rotate-0 group-hover:scale-110",
      accentBg: "bg-emerald-500/20 -bottom-10 -right-10",
    },
  ];

  return (
    <div className="bg-[#f8f8f7] min-h-screen flex items-center justify-center p-6 md:p-12 lg:p-20">
      <section className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 w-full max-w-7xl mx-auto">
        {categories.map((cat, idx) => (
          <div
            key={idx}
            className="group relative bg-[#efeeeb] h-80 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 ease-out border border-black/5 hover:-translate-y-1.5 cursor-pointer flex flex-col justify-between p-7"
          >
            {/* Header / Title Section */}
            <div className="z-20 flex justify-between items-start">
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-black/50 block mb-1">
                  {cat.subtitle}
                </span>
                <h2 className="text-2xl font-bold tracking-tight text-gray-900 group-hover:text-black transition-colors">
                  {cat.title}
                </h2>
              </div>
              
              {/* Arrow Indicator Icon */}
              <div className="w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center text-gray-700 group-hover:bg-black group-hover:text-white transition-all duration-300 shadow-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </div>
            </div>

            {/* Subtle Gradient Glow Behind Product */}
            <div
              className={`absolute w-44 h-44 rounded-full filter blur-2xl transition-all duration-500 ${cat.accentBg}`}
            />

            {/* Product Image */}
            <img
              src={cat.image}
              alt={cat.title}
              className={`absolute z-10 object-contain drop-shadow-xl transition-all duration-500 pointer-events-none ${cat.imgClass}`}
            />
          </div>
        ))}
      </section>
    </div>
  );
}

export default Category;