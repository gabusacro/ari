"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const LOGO_URL =
  "https://islacapital.com.ph/wp-content/uploads/2026/01/Isla-Capital-Logo1.png";

const navLinks = [
  { href: "/about", label: "About Us" },
  { href: "/approach", label: "Approach" },
  { href: "/trading", label: "Traders" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
];

function MenuIcon({ open }: { open: boolean }) {
  return (
    <span className="relative flex h-5 w-6 flex-col items-center justify-center">
      <span
        className={`block h-0.5 w-5 bg-stone-light transition-all duration-200 ${
          open ? "translate-y-0 rotate-45" : "-translate-y-1.5"
        }`}
      />
      <span
        className={`block h-0.5 w-5 bg-stone-light transition-all duration-200 ${
          open ? "opacity-0" : "opacity-100"
        }`}
      />
      <span
        className={`block h-0.5 w-5 bg-stone-light transition-all duration-200 ${
          open ? "-translate-y-0.5 -rotate-45" : "translate-y-1.5"
        }`}
      />
    </span>
  );
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-50 w-full bg-[#0a1929] border-b border-navy-light overflow-visible relative pt-4 pb-2 lg:pt-4 lg:pb-2">
      <nav className="container-custom relative flex items-center justify-between gap-4 sm:gap-6 min-h-12 py-2 lg:py-4 lg:min-h-24 lg:gap-8">
        {/* Left spacer on mobile/tablet only — pushes hamburger to the right; hidden on desktop */}
        <div className="flex-1 min-w-0 lg:hidden" aria-hidden />
        {/* Nav links — first in DOM on desktop so they stay LEFT; hidden on mobile/tablet */}
        <ul className="hidden list-none items-center gap-6 lg:gap-8 p-0 lg:flex lg:flex-nowrap lg:pr-4 shrink-0">
          {navLinks.map(({ href, label }) => (
            <li key={href} className="shrink-0">
              <Link
                href={href}
                className="font-sans text-body text-stone-light hover-fade no-underline py-1 inline-block whitespace-nowrap hover:font-semibold"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Center spacer on desktop (logo is absolute center); pushes Contact to the right */}
        <div className="hidden lg:block lg:flex-1 lg:min-w-0" aria-hidden />

        {/* Contact — desktop only (right); hidden on mobile/tablet */}
        <div className="hidden lg:flex shrink-0 items-center lg:ml-auto">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center font-sans text-body font-medium text-white btn-gradient px-5 py-1.5 hover-fade no-underline rounded-sm uppercase tracking-wide [&_svg]:w-[22px] [&_svg]:h-[22px]"
            onClick={closeMenu}
            aria-label="Contact Us"
          >
            Contact Us
          </Link>
        </div>
        {/* Logo vertical nudge (desktop): adjust here. Current: 0 (centered). Use lg:translate-y-[1px] down or lg:translate-y-[-1px] up. */}
        <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center order-2 w-full lg:absolute lg:left-1/2 lg:top-1/2 lg:flex-none lg:-translate-x-1/2 lg:-translate-y-1/2 lg:translate-y-0 lg:pointer-events-none lg:z-10">
          <div className="lg:pointer-events-auto lg:flex lg:flex-col lg:items-center lg:h-44 lg:justify-center lg:relative lg:z-10">
            <Link
              href="/"
              className="flex items-center justify-center hover-fade no-underline shrink-0"
              onClick={closeMenu}
            >
              <Image
                src={LOGO_URL}
                alt="Isla Capital"
                width={280}
                height={80}
                className="h-24 w-auto object-contain sm:h-28 md:h-32 lg:h-44 lg:drop-shadow-md"
              />
            </Link>
          </div>
        </div>

        {/* Hamburger — right on mobile/tablet only */}
        <div className="flex min-h-[44px] min-w-[44px] shrink-0 items-center justify-center lg:hidden order-3">
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex items-center justify-center rounded p-2 text-stone-light hover:bg-navy-light hover-fade"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            <MenuIcon open={menuOpen} />
          </button>
        </div>
      </nav>
      {/* Mobile/tablet full-screen menu — semi-transparent, centered links */}
      <div
        role="dialog"
        aria-modal="true"
        aria-hidden={!menuOpen}
        onClick={closeMenu}
        className={`fixed inset-0 z-40 flex items-center justify-center bg-[#0a1929]/85 backdrop-blur-sm transition-opacity duration-200 lg:hidden ${
          menuOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <nav
          className="flex flex-col items-center justify-start pt-12 sm:pt-16 gap-2 pb-8"
          onClick={(e) => e.stopPropagation()}
        >
          <Link
            href="/"
            className="mb-8 hover-fade no-underline"
            onClick={closeMenu}
          >
            <Image
              src={LOGO_URL}
              alt="Isla Capital"
              width={320}
              height={92}
              className="h-40 w-auto object-contain sm:h-48"
            />
          </Link>
          <ul className="list-none p-0 m-0 flex flex-col items-center gap-2">
            {navLinks.map(({ href, label }) => (
              <li key={href} className="w-full text-center">
                <Link
                  href={href}
                  className="block font-sans text-xl sm:text-2xl text-stone-light hover-fade no-underline py-4 px-6 rounded-lg hover:bg-white/10 hover:font-semibold"
                  onClick={closeMenu}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
