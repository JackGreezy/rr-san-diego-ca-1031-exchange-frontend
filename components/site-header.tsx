'use client';

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import site from "@/content/site.json";

const navLinks = [
  { label: "About Us", href: "/about" },
  { label: "1031 Solutions", href: "/services" },
  { label: "Property Types", href: "/property-types" },
  { label: "Locations", href: "/service-areas" },
  { label: "Contact Us", href: "/contact" },
];

const phoneHref = `tel:+1${site.phoneDigits}`;

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHomepage = pathname === "/";

  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const headerBg = isHomepage && !scrolled && !menuOpen
    ? "bg-gradient-to-b from-black/55 to-transparent"
    : "bg-[#0F2A3D] shadow-lg";

  return (
    <>
      <header className={`fixed inset-x-0 top-0 z-[80] transition-all duration-300 ${headerBg}`}>
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-6 md:px-8">
          <Link href="/" className="flex items-baseline gap-2" aria-label={`${site.company} home`}>
            <span className="text-3xl font-thin tracking-[0.1em] text-white md:text-4xl">1031</span>
            <span className="text-xl font-light tracking-wide text-white/80 md:text-2xl">SD</span>
          </Link>

          <div className="flex items-center gap-2 sm:gap-3">
            <Link href="/contact#contact-form" className="hidden min-h-11 items-center px-3 text-sm font-medium text-white/85 transition hover:text-white lg:inline-flex">
              Contact
            </Link>
            <a href={phoneHref} className="hidden min-h-11 items-center justify-center rounded-lg bg-white px-5 text-sm font-semibold text-[#0F2A3D] shadow-sm transition hover:bg-gray-100 md:inline-flex">
              Call {site.phone}
            </a>
            <button
              type="button"
              className="relative z-[90] flex min-h-12 min-w-12 items-center justify-center rounded-lg text-white transition hover:bg-white/10"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              aria-controls="site-menu"
              onClick={() => setMenuOpen((open) => !open)}
            >
              <span className="relative flex h-6 w-7 flex-col justify-between" aria-hidden="true">
                <span className={`block h-0.5 w-7 origin-center bg-white transition duration-300 ${menuOpen ? "translate-y-[11px] rotate-45" : ""}`} />
                <span className={`block h-0.5 w-7 bg-white transition duration-300 ${menuOpen ? "scale-0 opacity-0" : ""}`} />
                <span className={`block h-0.5 w-7 origin-center bg-white transition duration-300 ${menuOpen ? "-translate-y-[11px] -rotate-45" : ""}`} />
              </span>
            </button>
          </div>
        </div>
      </header>

      <div className={`fixed inset-0 z-[70] transition duration-300 ${menuOpen ? "visible opacity-100" : "invisible opacity-0"}`} aria-hidden={!menuOpen}>
        <button type="button" className="absolute inset-0 bg-black/65 backdrop-blur-sm" aria-label="Close menu" onClick={() => setMenuOpen(false)} />
        <nav id="site-menu" aria-label="Main navigation" className={`absolute right-0 top-0 h-full w-[88vw] max-w-[390px] overflow-y-auto bg-[#0F2A3D] shadow-2xl transition-transform duration-300 ${menuOpen ? "translate-x-0" : "translate-x-full"}`}>
          <div className="h-20" />
          <div className="px-6 pb-52 pt-5 sm:px-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`block border-b border-white/10 py-5 text-xl font-light transition ${pathname === link.href || pathname.startsWith(`${link.href}/`) ? "text-white" : "text-white/75 hover:text-white"}`}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/contact?request=properties#contact-form" className="mt-7 flex min-h-12 items-center justify-center rounded-lg border border-white/35 px-5 text-center text-sm font-semibold text-white transition hover:bg-white hover:text-[#0F2A3D]" onClick={() => setMenuOpen(false)}>
              Get a Free Property List
            </Link>
          </div>
          <div className="absolute inset-x-0 bottom-0 border-t border-white/10 bg-[#0F2A3D] p-6 sm:p-8">
            <p className="mb-3 text-xs uppercase tracking-[0.18em] text-white/45">Free exchange guidance</p>
            <a href={phoneHref} className="flex min-h-12 items-center justify-center rounded-lg bg-white px-5 text-base font-semibold text-[#0F2A3D]">Call {site.phone}</a>
            <a href={`mailto:${site.email}`} className="mt-4 block break-all text-sm leading-6 text-white/65 hover:text-white">{site.email}</a>
          </div>
        </nav>
      </div>
    </>
  );
}
