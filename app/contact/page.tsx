import { ContactFormWrapper } from "./contact-form";
import site from "@/content/site.json";

export const metadata = {
  title: "Free 1031 Exchange Consultation | San Diego",
  description: "Call or contact 1031 Exchange of San Diego for free guidance, replacement property information, and help organizing a planned exchange.",
};

export default function ContactPage() {
  return (
    <main className="bg-brand-dark text-white">
      <div className="mx-auto max-w-7xl px-6 py-20 md:px-8 md:py-28">
        <div className="mb-12 text-center md:mb-16">
          <span className="mb-4 block text-xs font-semibold uppercase tracking-[0.22em] text-white/55">Free 1031 Exchange Guidance</span>
          <h1 className="text-4xl font-light tracking-tight text-white sm:text-5xl md:text-6xl">
            Tell us what you are selling and what you want next.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/85">
            Start with a planned sale, a property already under contract, an inherited asset, a replacement search, or the desire to leave active management behind.
          </p>
          <a href={`tel:+1${site.phoneDigits}`} className="mt-8 inline-flex min-h-12 items-center justify-center rounded-lg bg-white px-6 py-3 text-sm font-semibold text-[#0F2A3D] transition hover:bg-gray-100">Call Now: {site.phone}</a>
        </div>
        <ContactFormWrapper />
      </div>
    </main>
  );
}
