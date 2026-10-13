"use client";

import { MapPin } from "lucide-react";
import Link from "next/link";

const InstagramMark = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.9" fill="currentColor" />
  </svg>
);

const FacebookMark = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.9"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const navLinks = [
  { name: "HOME", href: "/" },
  { name: "OUR COLLECTION'S", href: "/collections" },
  { name: "CONTACT", href: "/contact" },
];

export default function Footer() {
  return (
    <footer
      className="relative border-t border-white/10 bg-[#111111] px-4 py-6 text-white sm:px-5 sm:py-8 md:px-10 md:py-10"
      id="about"
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center gap-6 sm:gap-8 md:flex-row md:items-center md:justify-between">
          {/* Logo */}
          <div>
            <Link
              href="/"
              className="font-syncopate text-xl font-bold tracking-widest uppercase text-white transition-colors duration-300 hover:text-[#FF0000] sm:text-2xl md:text-3xl"
            >
              Cinema Art Studio
            </Link>
          </div>

          {/* Nav Links */}
          <nav className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 sm:gap-x-5 md:gap-x-7">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-space text-[10px] font-semibold tracking-[0.18em] text-white uppercase transition-colors duration-300 hover:text-[#FF0000] sm:text-xs sm:tracking-[0.22em]"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Social Icons */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            <a
              href="https://www.instagram.com/"
              aria-label="Instagram"
              className="flex h-8 w-8 items-center justify-center border border-white/10 text-white/80 transition-all duration-300 hover:border-[#FF0000]/60 hover:text-[#FF0000] sm:h-9 sm:w-9"
            >
              <InstagramMark className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            </a>
            <a
              href="https://www.facebook.com/"
              aria-label="Facebook"
              className="flex h-8 w-8 items-center justify-center border border-white/10 text-white/80 transition-all duration-300 hover:border-[#FF0000]/60 hover:text-[#FF0000] sm:h-9 sm:w-9"
            >
              <FacebookMark className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            </a>
            <a
              href="https://www.google.co.in/maps/place/CINEMA+ART+STUDIO+-+DSLR+Cameras+%7C+Photo+Store+%7C+Photo+Framing+Store/@30.3264343,78.0336197,17z/data=!3m2!4b1!5s0x390929ec0e670c25:0x252633877a31e141!4m6!3m5!1s0x390929ec11e0fea3:0xc7bd3d977b410651!8m2!3d30.3264343!4d78.0361946!16s%2Fg%2F126300wmr?entry=ttu&g_ep=EgoyMDI2MDgxOS4wIKXMDSoASAFQAw%3D%3D"
              aria-label="Google Maps"
              className="flex h-8 w-8 items-center justify-center border border-white/10 text-white/80 transition-all duration-300 hover:border-[#FF0000]/60 hover:text-[#FF0000] sm:h-9 sm:w-9"
            >
              <MapPin className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 sm:mt-8 border-t border-white/5 pt-4 sm:pt-5 text-center">
          <p className="font-mono text-[8px] font-bold uppercase tracking-[0.2em] text-white/80 sm:text-[10px] sm:tracking-[0.25em]">
            © 2026 CinemaArt Studio · All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
