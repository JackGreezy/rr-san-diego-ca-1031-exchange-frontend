import Link from "next/link";
import site from "@/content/site.json";
import { servicesData, locationsData } from "@/data";
import { PRIMARY_CITY, PRIMARY_STATE_ABBR } from "@/lib/constants";

const featuredServices = servicesData.slice(0, 8);
const featuredLocations = locationsData.slice(0, 8);
const phoneHref = `tel:+1${site.phoneDigits}`;

export function SiteFooter() {
  return (
    <footer className="bg-[#0F2A3D] text-white">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 md:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_.85fr_.85fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-white/45">{site.company}</p>
            <p className="mt-3 max-w-md text-2xl font-light leading-8 text-white">Turnkey 1031 exchange solutions for San Diego property owners.</p>
            <p className="mt-4 max-w-md text-sm leading-6 text-white/60">Start with a planned sale, a property already under contract, an inherited asset, a replacement search, or the desire to leave active management behind.</p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a href={phoneHref} className="inline-flex min-h-12 items-center justify-center rounded-lg bg-white px-5 text-sm font-semibold text-[#0F2A3D]">Call {site.phone}</a>
              <Link href="/contact?request=properties#contact-form" className="inline-flex min-h-12 items-center justify-center rounded-lg border border-white/35 px-5 text-sm font-semibold text-white transition hover:bg-white hover:text-[#0F2A3D]">Free Property List</Link>
            </div>
            <div className="mt-8 space-y-2 text-sm text-white/60">
              <p>{site.address}</p>
              <p><a href={phoneHref} className="hover:text-white">{site.phone}</a></p>
              <p><a href={`mailto:${site.email}`} className="break-all hover:text-white">{site.email}</a></p>
              <p>Available 24/7</p>
            </div>
            <div className="mt-8">
              <p className="mb-3 text-sm font-semibold text-white">Map</p>
              <div className="overflow-hidden rounded-lg">
                <iframe
                  title={`${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR} map`}
                  src={`https://www.google.com/maps?q=${encodeURIComponent(
                    `${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR}`,
                  )}&output=embed`}
                  className="h-40 w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>

          <div>
            <p className="mb-5 text-sm font-semibold text-white">1031 Exchange Help</p>
            <ul className="space-y-3 text-sm text-white/60">
              {featuredServices.map((service) => (
                <li key={service.slug}>
                  <Link href={service.route} className="transition hover:text-white">{service.name}</Link>
                </li>
              ))}
            </ul>
            <Link href="/services" className="mt-6 inline-flex text-sm font-semibold text-white underline decoration-white/30 underline-offset-8">View all solutions</Link>
          </div>

          <div>
            <p className="mb-5 text-sm font-semibold text-white">San Diego Service Areas</p>
            <ul className="space-y-3 text-sm text-white/60">
              {featuredLocations.map((location) => (
                <li key={location.slug}>
                  <Link href={location.route} className="transition hover:text-white">{location.name}</Link>
                </li>
              ))}
            </ul>
            <Link href="/service-areas" className="mt-6 inline-flex text-sm font-semibold text-white underline decoration-white/30 underline-offset-8">View all areas</Link>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-7 text-sm text-white/50 sm:px-6 md:flex-row md:items-center md:justify-between md:px-8">
          <div className="flex flex-wrap gap-x-6 gap-y-3">
            <Link href="/about" className="hover:text-white">About</Link>
            <Link href="/services" className="hover:text-white">Services</Link>
            <Link href="/service-areas" className="hover:text-white">Locations</Link>
            <Link href="/blog" className="hover:text-white">Resources</Link>
            <Link href="/contact" className="hover:text-white">Contact</Link>
            <Link href="/privacy" className="hover:text-white">Privacy</Link>
            <Link href="/terms" className="hover:text-white">Terms</Link>
          </div>
          <p className="text-xs text-white/40">© {new Date().getFullYear()} {site.company}. All rights reserved.</p>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl space-y-1 px-5 py-6 text-xs leading-5 text-white/40 sm:px-6 md:px-8">
          <p>Educational exchange information and transaction support only. Tax and legal conclusions belong to the property owner&apos;s CPA and counsel.</p>
          <p>Qualified-intermediary, brokerage, lending, and securities work must be handled by the appropriate independent professionals.</p>
        </div>
      </div>
    </footer>
  );
}
