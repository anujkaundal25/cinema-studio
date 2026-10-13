import React from "react";
import { Camera, Palette, Printer, ArrowRight } from "lucide-react";

function HeroSection() {
  const actions = [
    { label: "Capture", icon: Camera },
    { label: "Create", icon: Palette },
    { label: "Print", icon: Printer },
  ];

  const logos = [
    { name: "Nikon", src: "/logos/nikon.svg" },
    { name: "Canon", src: "/logos/canon.png" },
    { name: "Sony", src: "/logos/sony.svg" },
    { name: "DJI", src: "/logos/dji.svg" },
    { name: "Fujifilm", src: "/logos/fujifilm.svg" },
    { name: "GoPro", src: "/logos/gopro.png" },
    { name: "Insta360", src: "/logos/insta-360.avif" },
  ];

  return (
    <div className="pt-20 text-white">
      <section
        aria-label="Hero Banner"
        className="relative min-h-[calc(100vh-5rem)] bg-[url('/hero-section.webp')] bg-cover bg-center flex flex-col justify-between overflow-hidden"
      >
        {/* Dark Overlay with subtle gradient for text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/40" />

        {/* Main Content Area */}
        <div className="relative z-10 my-auto w-full max-w-7xl mx-auto px-6 lg:px-12 py-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-8 space-y-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/20 bg-white backdrop-blur-md text-xs text-[#FF0000] font-light tracking-widest uppercase">
              <span className="w-2 h-2 rounded-full bg-[#FF0000] animate-pulse" />
              Premium Creator Studio
            </div>

            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black uppercase tracking-tight leading-none text-white">
              {actions.map(({ label, icon: Icon }, idx) => (
                <div
                  key={label}
                  className="flex items-center gap-4 sm:gap-6 my-1 sm:my-2"
                >
                  <span className="hover:text-[#FF0000] transition-colors duration-300">
                    {label}
                  </span>
                  <Icon
                    className="w-8 h-8 sm:w-12 sm:h-12 text-white shrink-0 stroke-[2.5]"
                    aria-hidden="true"
                  />
                  {idx < actions.length - 1 && (
                    <span className="text-white/20 hidden sm:inline">•</span>
                  )}
                </div>
              ))}
            </h1>

            <p className="text-lg sm:text-2xl text-gray-300 font-light max-w-xl leading-relaxed tracking-wide">
              Everything that a creator needs, carefully curated in one place.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button className="group inline-flex items-center gap-3 bg-white text-black hover:bg-amber-400 font-bold text-base px-8 py-4 rounded-full shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <span>Contact Us Now</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button className="inline-flex items-center gap-3 bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/20 font-semibold text-base px-8 py-4 rounded-full transition-all duration-300">
                Explore Collection
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Brands Strip with #FF0000 shadow */}
        <div className="relative z-10 flex flex-col items-center gap-10 w-full border-b-2 border-[#FF0000] bg-white backdrop-blur-md py-5 px-6 shadow-[0_10px_35px_rgba(255,0,0,0.35)]">
          <p className="text-xl font-bold uppercase tracking-widest text-[#FF0000] shrink-0 drop-shadow-[0_2px_8px_rgba(255,0,0,0.4)]">
            Trusted Gear Partners
          </p>
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

            {/* Logo Container with red shadow/glow effects */}
            <div className="w-full flex items-center justify-between sm:justify-end gap-3 md:gap-4 overflow-x-auto no-scrollbar">
              {logos.map((logo) => {
                const isSony = logo.name.toLowerCase() === "sony";
                return (
                  <div
                    key={logo.name}
                    className={`h-12 px-4 py-2 rounded-lg backdrop-blur-sm shadow-[0_4px_12px_rgba(255,0,0,0.15)] flex items-center justify-center shrink-0 transition-all duration-300 hover:scale-105 ${
                      isSony
                        ? "bg-black hover:bg-neutral-900 border border-[#FF0000]/40"
                        : "bg-white/90 hover:bg-white"
                    }`}
                  >
                    <img
                      src={logo.src}
                      alt={logo.name}
                      className="h-full w-auto max-w-[300px] object-contain"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HeroSection;