"use client";

import {
  motion,
  useScroll,
  useTransform,
  useVelocity,
  useSpring,
  AnimatePresence,
} from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

type NavItem = {
  name: string;
  href: string;
  meta?: string;
  submenu?: {
    name: string;
    href: string;
  }[];
};

export default function Navbar() {
  const pathname = usePathname();

  const { scrollY } = useScroll();
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const isHomeActive = pathname === "/";

  // 1. Scroll velocity monitoring for dynamic FPS
  const scrollVelocity = useVelocity(scrollY);

  const smoothedVelocity = useSpring(scrollVelocity, {
    stiffness: 60,
    damping: 20,
  });

  const dynamicFPS = useTransform(smoothedVelocity, [0, 3000], [24, 120]);

  const [fpsReadout, setFpsReadout] = useState(24);

  useEffect(() => {
    return dynamicFPS.on("change", (latest) => {
      const calculatedFps = Math.min(120, Math.max(24, Math.round(latest)));

      setFpsReadout(calculatedFps);
    });
  }, [dynamicFPS]);

  // 2. Structural geometry variables on scroll
  const navWidth = useTransform(scrollY, [0, 120], ["100%", "94%"]);

  const topMargin = useTransform(scrollY, [0, 120], ["0px", "12px"]);

  const paddingX = useTransform(
    scrollY,
    [0, 120],
    ["1rem", "0.75rem"],
  );

  const paddingY = useTransform(scrollY, [0, 120], ["1rem", "0.5rem"]);

  // 3. Desktop Glass Configuration
  const bgTint = useTransform(
    scrollY,
    [0, 120],
    ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.75)"],
  );

  const borderTint = useTransform(
    scrollY,
    [0, 120],
    ["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.15)"],
  );

  const glassBlur = useTransform(
    scrollY,
    [0, 120],
    ["blur(0px)", "blur(20px)"],
  );

  // 4. Navigation Items
  // Explicit type added so optional submenu is recognized by TypeScript.
  const navItems: NavItem[] = [
    { name: "OUR COLLECTION'S", href: "/collections" },
    { name: "CONTACT", href: "/contact", meta: "LENS 50mm" },
  ];

  return (
    <>
      <div
        className="fixed left-0 right-0 top-0 z-150 flex w-full justify-center pointer-events-none"
        id="header"
      >
        <motion.nav
          layout
          style={{
            width: navWidth,
            paddingLeft: paddingX,
            paddingRight: paddingX,
            paddingTop: paddingY,
            paddingBottom: paddingY,
            marginTop: topMargin,
            backgroundColor: bgTint,
            borderWidth: "1px",
            borderStyle: "solid",
            borderColor: borderTint,
            backdropFilter: glassBlur,
            WebkitBackdropFilter: glassBlur,
          }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 38,
            mass: 0.7,
          }}
          className="flex bg-white items-center pointer-events-auto text-black border-t-0 border-x-0"
        >
          {/* LEFT: Logo & Metadata Matrix */}
          <div className="flex-1 flex items-center gap-2 select-none sm:gap-4">
            <Link
              href="/"
              className="text-xl font-bold tracking-widest hover:text-[#FF0000] transition-colors duration-300 uppercase sm:text-2xl md:text-3xl"
            >
              <h1>Cinema Art Studio</h1>
            </Link>
          </div>

          {/* DESKTOP CENTER MENU */}
          <div className="flex-1 hidden md:flex gap-6 lg:gap-10 xl:gap-12 items-center justify-center text-[10px] md:text-xs font-medium tracking-[0.2em] lg:tracking-[0.25em]">
            <Link
              href="/"
              className={`transition-colors duration-300 font-medium relative ${
                pathname === "/"
                  ? "text-[#FF0000]"
                  : "text-black/60 hover:text-black"
              }`}
            >
              HOME

              {pathname === "/" && (
                <motion.span
                  layoutId="focusBracket"
                  transition={{
                    type: "spring",
                    stiffness: 380,
                    damping: 30,
                  }}
                  className="absolute -inset-x-3 -inset-y-0.5 border-x-2 pointer-events-none border-[#FF0000]/40"
                />
              )}
            </Link>

            {navItems.map((item, index) => {
              const isActive = item.submenu
                ? item.submenu.some((sub) => pathname === sub.href)
                : item.href && pathname === item.href;

              return (
                <div
                  key={item.name}
                  className="flex flex-col items-center relative py-1.5 cursor-pointer group"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <motion.span
                    initial={{ opacity: 0, y: 3 }}
                    animate={{
                      opacity: hoveredIndex === index || isActive ? 1 : 0,
                      y: hoveredIndex === index || isActive ? -3 : 3,
                    }}
                    transition={{
                      duration: 0.15,
                      ease: [0.76, 0, 0.24, 1],
                    }}
                    className="text-[7px] font-mono font-bold text-[#FF0000] tracking-normal absolute top-0"
                  >
                    {item.meta}
                  </motion.span>

                  <Link
                    href={item.href}
                    className={`transition-colors duration-300 font-medium mt-1.5 relative ${
                      isActive
                        ? "text-[#FF0000]"
                        : "text-black/60 hover:text-black"
                    }`}
                  >
                    {item.name}

                    {(hoveredIndex === index || isActive) && (
                      <motion.span
                        layoutId="focusBracket"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                        className={`absolute -inset-x-3 -inset-y-0.5 border-x-2 pointer-events-none ${
                          isActive
                            ? "border-[#FF0000]/40"
                            : "border-black/40"
                        }`}
                      />
                    )}
                  </Link>

                  {/* Dropdown */}
                  {item.submenu && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 min-w-64 rounded-xl bg-white shadow-2xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-out z-50 p-1.5 overflow-hidden">
                      {item.submenu.map((subItem, index) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-4 py-3 text-sm font-medium text-gray-600 tracking-wide rounded-lg hover:bg-gray-50 hover:text-[#FF0000] transition-colors duration-200"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* RIGHT: Rec Node & Adjusted Mobile Trigger */}
          <div className="flex-1 flex items-center justify-end gap-2 select-none pr-1 sm:pr-0">
            <div className="hidden md:flex items-center gap-1.5 border-2 border-black/20 bg-black/2 px-2 py-0.5 rounded-sm font-mono text-[10px] text-black/60">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF0000] opacity-90" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#FF0000]" />
              </span>

              <span className="font-extrabold text-black text-[8px] tracking-widest">
                REC
              </span>
            </div>

            {/* MINIMAL HARDWARE LASER TRIGGER (Shifted right with flush styling) */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden flex flex-col justify-center items-end w-8 h-8 relative z-200 focus:outline-none pointer-events-auto group"
              aria-label="Toggle Menu"
            >
              <div className="w-6 h-5 relative flex flex-col justify-between items-end">
                <motion.span
                  animate={
                    isOpen
                      ? { rotate: 45, y: 9, width: "24px" }
                      : { rotate: 0, y: 0, width: "24px" }
                  }
                  transition={{
                    duration: 0.3,
                    ease: [0.76, 0, 0.24, 1],
                  }}
                  className="h-[1.5px] bg-black block"
                />

                <motion.span
                  animate={
                    isOpen
                      ? { rotate: -45, y: -9, width: "24px" }
                      : { rotate: 0, y: 0, width: "14px" }
                  }
                  transition={{
                    duration: 0.3,
                    ease: [0.76, 0, 0.24, 1],
                  }}
                  className="h-[1.5px] bg-black block group-hover:w-6 transition-all"
                />
              </div>
            </button>
          </div>
        </motion.nav>
      </div>

      {/* MOBILE FULLSCREEN OVERLAY (Text sizes condensed) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{
              duration: 0.45,
              ease: [0.76, 0, 0.24, 1],
            }}
            className="fixed inset-0 z-140 flex flex-col justify-center bg-white/95 backdrop-blur-xl px-6 sm:px-10 text-black"
          >
            {/* Context Grid Info */}
            <div className="absolute inset-4 sm:inset-6 border border-black/4 pointer-events-none flex justify-between items-end p-2 sm:p-3 font-mono text-[7px] sm:text-[8px] text-black/30">
              <span>MATRIX_DISP</span>
              <span>SYS_OK</span>
            </div>

            {/* Scaled-down list components */}
            <div className="flex flex-col gap-5 sm:gap-6 text-sm font-semibold tracking-[0.2em] max-w-xs">
              {/* Home Link Frame */}
              <motion.div
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.08 }}
              >
                <div className="flex flex-col border-b border-black/6 pb-3">
                  <span
                    className={`text-[7px] font-mono font-bold tracking-normal mb-1 ${
                      isHomeActive ? "text-[#FF0000]" : "text-black/35"
                    }`}
                  >
                    HOME
                  </span>
                  <Link
                    href="/"
                    onClick={() => setIsOpen(false)}
                    className={`transition-colors duration-200 text-xs tracking-[0.25em] font-semibold ${
                      isHomeActive
                        ? "text-[#FF0000]"
                        : "text-black/80 hover:text-black"
                    }`}
                  >
                    HOME
                  </Link>
                </div>
              </motion.div>

              {/* Other Options - Compact Font Sizing */}
              {navItems.map((item, index) => {
                const isActive =
                  pathname === item.href ||
                  pathname.startsWith(item.href + "/");

                return (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: 0.08 + (index + 1) * 0.04,
                    }}
                    className="flex flex-col border-b border-black/6 pb-3"
                  >
                    <span
                      className={`text-[7px] font-mono font-bold tracking-normal mb-1 ${
                        isActive
                          ? "text-[#FF0000]"
                          : "text-black/35"
                      }`}
                    >
                      {item.meta}
                    </span>

                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`transition-colors duration-200 text-xs tracking-[0.25em] ${
                        isActive
                          ? "text-[#FF0000]"
                          : "text-black/80 hover:text-black"
                      }`}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}